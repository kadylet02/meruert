import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('../docs/', import.meta.url));
const prefix = '/meruert/';
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    assert.ok(url.pathname.startsWith(prefix));
    const relative = decodeURIComponent(url.pathname.slice(prefix.length)) || 'index.html';
    const file = path.resolve(root, relative);
    assert.ok(file.startsWith(root));
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});
let browser;
try {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined),
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  const failed = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (!response.ok()) failed.push(`${response.status()} ${response.url()}`); });
  const response = await page.goto(`http://127.0.0.1:${port}${prefix}`, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  assert.match(await page.title(), /SpeakUp/);
  await page.locator('.activity-card').first().waitFor();
  assert.equal(await page.locator('.activity-card').count(), 3);
  await page.getByRole('navigation').getByRole('button', { name: /Жаттығулар/ }).click();
  assert.equal(await page.locator('.activity-card').count(), 6);
  await page.getByRole('button', { name: 'Campus connections бастау', exact: true }).click();
  await page.getByRole('dialog', { name: 'Campus connections жаттығуы' }).waitFor();
  await page.getByRole('button', { name: 'Тәжірибеге көшу' }).click();
  await page.getByLabel(/Your ideas in English/).fill('I enjoy photography and learning English. Shall we meet after class on Thursday?');
  assert.equal(await page.getByRole('button', { name: 'Өзімді бағалау' }).isEnabled(), true);
  await page.getByRole('button', { name: 'Жабу', exact: true }).click();
  await page.setViewportSize({ width: 390, height: 844 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  assert.deepEqual(failed, [], 'Every page asset must load under the repository path');
  assert.deepEqual(errors, [], 'No browser runtime errors');
  console.log('PASS production GitHub Pages files: /meruert/ assets, dashboard, six lessons, response entry, mobile layout');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
