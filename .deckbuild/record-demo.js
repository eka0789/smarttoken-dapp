const { chromium } = require("playwright");

const BASE = "http://127.0.0.1:3000";
const ASSETS = "file:///C:/Users/Admin/smarttoken-dapp/video-assets/";
const REC = "C:/Users/Admin/smarttoken-dapp/.deckbuild/rec";
const BSCSCAN = "https://bscscan.com/token/0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28";
const GITHUB = "https://github.com/eka0789/smarttoken-dapp";

// durasi segmen (detik) — harus persis sama dengan audio padding
const SEG = { s1: 18, s2: 31.5, s3: 26, s4: 27, s5: 22, s6: 24, s7: 21 };
const wait = (s) => new Promise(r => setTimeout(r, s * 1000));

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: REC, size: { width: 1920, height: 1080 } },
    deviceScaleFactor: 1
  });
  const page = await ctx.newPage();
  page.setDefaultTimeout(60000);

  const go = async (url) => {
    try { await page.goto(url, { waitUntil: "domcontentloaded" }); }
    catch (e) { console.log("nav-warn:", url, e.message.slice(0, 80)); }
  };

  // S1 · hook card
  await go(ASSETS + "viewer.html?img=card-1.png"); await wait(SEG.s1);
  // S2 · masalah card
  await go(ASSETS + "viewer.html?img=card-2.png"); await wait(SEG.s2);
  // S3 · dashboard live (tunggu data on-chain lalu scroll pelan)
  await go(BASE + "/main/dashboard");
  await wait(9);
  await page.mouse.wheel(0, 700); await wait(2.5);
  await page.mouse.wheel(0, -700); await wait(SEG.s3 - 9 - 2.5);
  // S4 · smart army lalu farming
  await go(BASE + "/main/smart"); await wait(8);
  await page.mouse.wheel(0, 500); await wait(3);
  await page.mouse.wheel(0, -500); await wait(2);
  await go(BASE + "/main/rewards/daily-farming"); await wait(7);
  await page.mouse.wheel(0, 500); await wait(3);
  await wait(SEG.s4 - 8 - 3 - 2 - 7 - 3);
  // S5 · tim 7 level lalu golden tree
  await go(BASE + "/wealth/dashboard"); await wait(6);
  await go(BASE + "/main/golden"); await wait(7);
  await page.mouse.wheel(0, 600); await wait(3);
  await page.mouse.wheel(0, -600); await wait(SEG.s5 - 6 - 7 - 3 - 3);
  // S6 · swap UI lalu halaman token SMT (on-chain)
  await go(BASE + "/main/smt/getSmt"); await wait(8);
  await go(BASE + "/main/smt"); await wait(8);
  await page.mouse.wheel(0, 600); await wait(3);
  await wait(SEG.s6 - 8 - 8 - 3);
  // S7 · closing card
  await go(ASSETS + "viewer.html?img=card-7.png"); await wait(SEG.s7);

  await ctx.close();  // finalisasi video
  await browser.close();
  console.log("RECORD-DONE");
})().catch(e => { console.error("FATAL", e); process.exit(1); });
