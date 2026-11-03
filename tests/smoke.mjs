import assert from 'node:assert/strict';
import { readFile, unlink } from 'node:fs/promises';
import os from 'node:os';
import { existsSync } from 'node:fs';
import path from 'node:path';

let playwright;
try {
  playwright = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
} catch {
  playwright = await import('/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs');
}
const browser = await playwright.chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined),
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const errors = [];
const context = await browser.newContext({viewport: {width: 1440, height: 1100}, acceptDownloads: true});
const page = await context.newPage();
page.on('pageerror', error => errors.push(error.message));
const url = process.env.BASE_URL || 'http://127.0.0.1:5173';
const nav = label => page.getByRole('navigation', {name: 'Негізгі мәзір'}).getByRole('button', {name: label, exact: label !== 'Жаттығулар'});
async function countCards(count) { await page.waitForFunction(expected => document.querySelectorAll('.activity-card').length === expected, count); }
async function openLibrary() { await nav('Жаттығулар').click(); await page.getByRole('heading', {name: 'Жаттығулар кітапханасы'}).waitFor(); }
try {
  await page.goto(url, {waitUntil: 'networkidle'});
  await countCards(3);
  await page.getByRole('button', {name:'Профильді өңдеу'}).click();
  await page.getByLabel('Сені қалай атаймыз?').fill('Айгерім');
  await page.getByLabel('Апталық мақсатың', {exact: true}).selectOption('5');
  await page.getByRole('button', {name:'Өзгерістерді сақтау'}).click();
  await page.reload({waitUntil:'networkidle'});
  assert.match(await page.locator('h1').innerText(), /айгерім/i);
  assert.match(await page.locator('.weekly-card').innerText(), /5/);
  console.log('PASS profile and goal persistence');

  await openLibrary();
  await countCards(6);
  const categories = page.getByRole('group', {name:'Дағды бойынша сүзгі'});
  await categories.getByRole('button', {name:'Сөйлеу', exact:true}).click();
  await countCards(2);
  await categories.getByRole('button', {name:'Тыңдау', exact:true}).click();
  await countCards(1);
  assert.match(await page.locator('.activity-card').innerText(), /Everyday conversations/);
  await categories.getByRole('button', {name:'Барлығы', exact:true}).click();
  await page.getByRole('textbox', {name:'Жаттығуды іздеу'}).fill('Campus connections');
  await countCards(1);
  await page.getByRole('button', {name:'Campus connections сақтау', exact:true}).click();
  await page.getByRole('button', {name:'Іздеуді тазарту'}).click();
  await page.getByRole('button', {name:/Сақталғандар/}).click();
  await countCards(1);
  await page.reload({waitUntil:'networkidle'});
  await openLibrary();
  await page.getByRole('button', {name:/Сақталғандар/}).click();
  await countCards(1);
  assert.match(await page.locator('.activity-card').innerText(), /Campus connections/);
  await page.getByRole('button', {name:/Сақталғандар/}).click();
  await countCards(6);
  console.log('PASS library categories, search, bookmarks and persistence');

  await page.getByRole('button', {name:'Campus connections бастау', exact:true}).click();
  await page.getByRole('dialog', {name:'Campus connections жаттығуы'}).waitFor();
  await page.getByRole('button', {name:'Тәжірибеге көшу'}).click();
  const next = page.getByRole('button', {name:'Өзімді бағалау'});
  assert.equal(await next.isDisabled(), true);
  await page.getByLabel(/Your ideas in English/).fill('Hi! I study languages and I enjoy photography. Shall we meet at the campus cafe on Thursday at half past three?');
  assert.equal(await next.isEnabled(), true);
  await next.click();
  const finish = page.getByRole('button', {name:'Жаттығуды аяқтау'});
  assert.equal(await finish.isDisabled(), true);
  for (const label of ['Сөйлеу еркіндігі', 'Өзара әрекет', 'Сөздік қор', 'Сенімділік']) {
    await page.getByRole('button', {name:`${label}: 4 / 5`,exact:true}).click();
  }
  assert.equal(await finish.isEnabled(), true);
  await finish.click();
  await page.getByRole('dialog').waitFor({state:'hidden'});
  await nav('Менің прогресім').click();
  assert.match(await page.locator('.progress-main-number').innerText(), /^1/);
  assert.match(await page.locator('.history-table tbody').innerText(), /Campus connections/);
  assert.match(await page.locator('.history-table tbody').innerText(), /4\.0/);
  const dl = page.waitForEvent('download');
  await page.getByRole('button', {name:'CSV жүктеу'}).click();
  const download = await dl;
  const csvPath = path.join(os.tmpdir(), `speakup-test-${Date.now()}.csv`);
  await download.saveAs(csvPath);
  const csv = await readFile(csvPath, 'utf8');
  await unlink(csvPath);
  assert.match(csv, /"Task","Date","Minutes","Fluency"/);
  assert.match(csv, /Campus connections/);
  assert.match(csv, /Shall we meet at the campus cafe/);
  await page.reload({waitUntil:'networkidle'});
  await nav('Менің прогресім').click();
  assert.equal(await page.locator('.history-table tbody tr').count(),1);
  console.log('PASS lesson validation, completion, ratings, history, CSV and persisted progress');

  await openLibrary();
  await page.getByRole('button', {name:'Everyday conversations бастау', exact:true}).click();
  await page.getByRole('button', {name:'Тәжірибеге көшу'}).click();
  await page.getByLabel(/Your ideas in English/).fill('I suggest meeting in the student centre tomorrow after class. What do you think about this idea?');
  assert.equal(await next.isDisabled(), true);
  const quiz = page.locator('.listening-quiz');
  const options = quiz.locator('button:not(.text-button)');
  await options.nth(0).click();
  await quiz.getByRole('button', {name:'Жауапты тексеру'}).click();
  if (await options.nth(0).evaluate(el=>el.classList.contains('correct'))) {
    await options.nth(1).click();
    await quiz.getByRole('button', {name:'Жауапты тексеру'}).click();
  }
  assert.equal(await next.isDisabled(),true);
  assert.equal(await quiz.locator('.error-text').count(),1);
  let correctFound=false;
  for (let i=0;i<3;i++) {
    await options.nth(i).click();
    await quiz.getByRole('button', {name:'Жауапты тексеру'}).click();
    if (await options.nth(i).evaluate(el=>el.classList.contains('correct'))) { correctFound=true; break; }
  }
  assert.equal(correctFound,true);
  assert.equal(await next.isEnabled(),true);
  await page.keyboard.press('Escape');
  console.log('PASS listening quiz rejects wrong answers and unlocks on correct answer');

  await nav('Сөйлеу бөлмесі').click();
  await page.locator('#room-topic').selectOption('debate');
  await page.getByRole('button', {name:'Сөйлесуді бастау',exact:true}).click();
  await page.getByRole('dialog',{name:'The big debate жаттығуы'}).waitFor();
  await page.keyboard.press('Escape');
  console.log('PASS role-play room starts selected scenario');

  await openLibrary();
  await categories.getByRole('button', {name:'Жазылым',exact:true}).click();
  await countCards(1);
  await page.locator('.activity-card .card-bottom button').click();
  await page.getByRole('button', {name:'Тәжірибеге көшу'}).click();
  const writing = page.getByLabel(/Write your response in English/);
  await writing.fill('I would like to work on this project with you.');
  assert.equal(await next.isDisabled(),true);
  const ninetyWords = Array.from({length:9},()=> 'Our university project connects students and develops practical communication skills.').join(' ');
  assert.equal(ninetyWords.split(/\s+/).length,90);
  await writing.fill(ninetyWords);
  assert.equal(await next.isEnabled(),true);
  await page.keyboard.press('Escape');
  console.log('PASS writing rejects short responses and accepts 90 words');

  await page.setViewportSize({width:390,height:844});
  await page.getByRole('button', {name:'Мәзірді ашу'}).click();
  await nav('Басты бет').click();
  assert.equal(await page.locator('.sidebar.is-open').count(),0);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth),false);
  await page.getByRole('button', {name:'Жаттығуды бастау',exact:true}).click();
  await page.getByRole('dialog').waitFor();
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth),false);
  await page.keyboard.press('Escape');
  console.log('PASS mobile menu, navigation and no page/lesson horizontal overflow');
  assert.deepEqual(errors,[]);
  console.log('PASS no browser runtime errors');
  console.log('All SpeakUp smoke checks passed.');
} finally {
  await context.close();
  await browser.close();
}
