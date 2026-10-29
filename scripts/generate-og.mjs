/**
 * Regenerates app/opengraph-image.png (1200×630) from the brand colours,
 * Pere's name and her title. Run after changing either:
 *
 *   node scripts/generate-og.mjs
 *
 * Needs Playwright (npx playwright install chromium) and an internet
 * connection for the Google Fonts.
 */
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const { site } = await import(new URL("../data/site.ts", import.meta.url));

const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=DM+Sans:wght@400;500&display=block" rel="stylesheet">
<style>
  body{margin:0;width:1200px;height:630px;background:#fbf6f1;color:#2a1412;font-family:'DM Sans';display:flex}
  .bar{width:24px;background:#5e1a17}
  .main{flex:1;padding:72px 84px;display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;align-items:center;gap:14px;font-size:24px;font-weight:500}
  .dot{width:14px;height:14px;border-radius:50%;background:#5e1a17}
  h1{font-family:'Instrument Serif';font-weight:400;font-size:170px;line-height:.95;margin:0;letter-spacing:-2px}
  .rule{height:1px;background:#e6d9d2;margin:36px 0 28px}
  .title{font-size:30px;color:#5e1a17}
  .tag{font-family:'Instrument Serif';font-size:40px;color:#74645f}
</style></head><body><div class="bar"></div><div class="main">
  <div class="top"><span class="dot"></span>${site.tagline}</div>
  <div><h1>${site.name}</h1><div class="rule"></div><div class="title">${site.title}</div></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: new URL("../app/opengraph-image.png", import.meta.url).pathname });
writeFileSync(new URL("../app/opengraph-image.alt.txt", import.meta.url), `${site.name} | ${site.title}`);
await browser.close();
console.log("✓ app/opengraph-image.png updated");
