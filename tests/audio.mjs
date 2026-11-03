import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
let playwright;
try { playwright = await import(process.env.PLAYWRIGHT_MODULE || 'playwright'); }
catch { playwright = await import('/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'); }
const browser = await playwright.chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined),
  headless: true,
  args: ['--no-sandbox','--disable-dev-shm-usage','--use-fake-device-for-media-stream'],
});
const url = process.env.BASE_URL || 'http://127.0.0.1:5173';
const errors = [];
const watch = page => page.on('pageerror', error => errors.push(error.message));
async function speaking(page) {
  await page.goto(url,{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Campus connections бастау',exact:true}).click();
  await page.getByRole('button',{name:'Тәжірибеге көшу'}).click();
}
try {
  const granted = await browser.newContext({permissions:['microphone']});
  const page = await granted.newPage(); watch(page);
  await speaking(page);
  assert.equal(await page.getByRole('button',{name:'Өзімді бағалау'}).isDisabled(),true);
  await page.getByRole('button',{name:'Дауыспен жауап беру'}).click();
  await page.getByRole('button',{name:'Жазуды аяқтау'}).waitFor();
  await page.waitForTimeout(1200);
  await page.getByRole('button',{name:'Жазуды аяқтау'}).click();
  const audio = page.getByLabel('Өз жауабыңды тыңдау');
  await audio.waitFor();
  const bytes = await audio.evaluate(async el => {
    const response = await fetch(el.currentSrc || el.src);
    return (await response.blob()).size;
  });
  assert.ok(bytes > 0, 'Recorded audio blob must not be empty');
  await audio.evaluate(el=>el.play());
  await page.waitForFunction(()=>document.querySelector('audio')?.readyState >= 2);
  assert.equal(await audio.evaluate(el=>el.error),null);
  assert.equal(await page.getByRole('button',{name:'Өзімді бағалау'}).isEnabled(),true);
  await page.getByRole('button',{name:'Өзімді бағалау'}).click();
  await page.getByRole('heading',{name:'Бүгінгі тәжірибең қандай болды?'}).waitFor();
  console.log(`PASS real MediaRecorder: granted mic, recorded ${bytes} bytes, audio playable, reflection unlocked`);
  await granted.close();

  const denied = await browser.newContext();
  const deniedPage = await denied.newPage(); watch(deniedPage);
  const cdp = await browser.newBrowserCDPSession();
  const contexts = await cdp.send('Target.getBrowserContexts');
  assert.equal(contexts.browserContextIds.length,1);
  await cdp.send('Browser.setPermission', {
    permission: {name:'microphone'}, setting:'denied', origin:url,
    browserContextId:contexts.browserContextIds[0],
  });
  await speaking(deniedPage);
  assert.equal(await deniedPage.evaluate(async()=> (await navigator.permissions.query({name:'microphone'})).state),'denied');
  await deniedPage.getByRole('button',{name:'Дауыспен жауап беру'}).click();
  await deniedPage.getByText('Микрофонға рұқсат берілмеді. Браузерден рұқсат бер немесе жауабыңды мәтінмен жаз.',{exact:true}).waitFor();
  await deniedPage.getByLabel(/Your ideas in English/).fill('I would like to meet after class and practise English with my new classmates.');
  assert.equal(await deniedPage.getByRole('button',{name:'Өзімді бағалау'}).isEnabled(),true);
  console.log('PASS real denied microphone: fallback message and text response path work');
  await denied.close();

  const malformed = await browser.newContext();
  const malformedPage = await malformed.newPage(); watch(malformedPage);
  await malformedPage.addInitScript(()=>localStorage.setItem('speakup-progress',JSON.stringify([null,{id:'campus',date:'bad',minutes:-5,ratings:[1],response:13},{}])));
  await malformedPage.goto(url,{waitUntil:'networkidle'});
  await malformedPage.locator('h1').waitFor();
  assert.match(await malformedPage.locator('.stat-number').first().innerText(), /^00/);
  assert.deepEqual(await malformedPage.evaluate(()=>JSON.parse(localStorage.getItem('speakup-progress'))),[]);
  console.log('PASS malformed progress storage: invalid records ignored, dashboard loads and storage normalizes');
  await malformed.close();
  assert.deepEqual(errors,[]);
  console.log('PASS no browser runtime errors in supplementary checks');
} finally { await browser.close(); }
