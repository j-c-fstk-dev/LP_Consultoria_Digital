// Gera as imagens dos posts (1080x1350) a partir de conteudo.mjs.
// Uso: node marketing/instagram/gerar.mjs   (requer o pacote "playwright" com Chromium)
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { posts } from "./conteudo.mjs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const HANDLE = "@jc_consultoriadigital";
const WHATSAPP = "(12) 99218-5685";

const shots = {
  advocacia: "data:image/jpeg;base64," + readFileSync(join(root, "public/portfolio/advocacia.jpg")).toString("base64"),
  transportes: "data:image/jpeg;base64," + readFileSync(join(root, "public/portfolio/transportes.jpg")).toString("base64"),
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const css = `
:root{--ink:#0F1B3D;--blue:#1E40AF;--sky:#DCE6FF;--paper:#F6F8FC;--line:#C9D4EE;--muted:#4A5677;--go:#15803D;--stop:#B42318;
--display:"Bricolage Grotesque",sans-serif;--body:"Source Sans 3",sans-serif}
*{box-sizing:border-box;margin:0}
html,body{width:1080px;height:1350px}
body{font-family:var(--body);color:var(--ink);background:var(--paper);overflow:hidden}
.slide{position:relative;width:1080px;height:1350px;padding:96px 88px 140px;display:flex;flex-direction:column}
.slide.dark{background:var(--blue);color:#fff}
.slide.ink{background:var(--ink);color:#fff}
.foot{position:absolute;left:88px;right:88px;bottom:64px;display:flex;justify-content:space-between;align-items:center;font:600 26px var(--body);color:var(--muted)}
.dark .foot,.ink .foot{color:rgba(255,255,255,.72)}
.count{font-variant-numeric:tabular-nums}
.search{display:flex;align-items:center;gap:22px;background:#fff;border:2px solid var(--line);border-radius:999px;padding:26px 36px;font:400 34px var(--body);color:var(--ink);box-shadow:0 10px 30px rgba(15,27,61,.08)}
.dark .search{border-color:transparent}
.search svg{flex:none}
.caret{display:inline-block;width:3px;height:38px;background:var(--blue);margin-left:2px;vertical-align:-6px}
.cover h1{font:800 104px/1.02 var(--display);letter-spacing:-.025em;margin-top:auto;text-wrap:balance}
.cover .sub{font:400 38px/1.35 var(--body);margin-top:36px;max-width:820px;opacity:.85}
.point{justify-content:center}
.n{font:800 200px/1 var(--display);color:var(--blue);letter-spacing:-.04em;margin-bottom:24px}
.point h2{font:800 80px/1.05 var(--display);letter-spacing:-.02em;text-wrap:balance}
.point p{font:400 40px/1.45 var(--body);margin-top:40px;color:var(--muted);max-width:880px}
.list h2{font:800 84px/1.05 var(--display);letter-spacing:-.02em;margin-bottom:56px}
.list ul{list-style:none;padding:0;display:flex;flex-direction:column;gap:34px}
.list li{display:grid;grid-template-columns:64px 1fr;gap:24px;align-items:start;font:600 40px/1.3 var(--body)}
.mark{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;color:#fff;font:800 30px var(--body);margin-top:-2px}
.mark.ok{background:var(--go)} .mark.no{background:var(--stop)}
.list.top{justify-content:center}
.cta h2{font:800 92px/1.04 var(--display);letter-spacing:-.025em;margin-top:auto;text-wrap:balance}
.cta p{font:400 40px/1.4 var(--body);margin-top:32px;opacity:.88;max-width:860px}
.wa{display:inline-flex;align-items:center;gap:18px;margin-top:56px;background:#fff;color:var(--ink);border-radius:18px;padding:26px 36px;font:800 44px var(--display);align-self:flex-start}
.wa i{width:22px;height:22px;border-radius:50%;background:#22C55E;display:block}
.note{font:400 24px/1.4 var(--body);opacity:.7;margin-top:40px;max-width:860px}
.shot h2{font:800 76px/1.05 var(--display);letter-spacing:-.02em;margin-top:56px;text-wrap:balance}
.shot p{font:400 36px/1.4 var(--body);margin-top:24px;opacity:.85}
.browser{background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.35)}
.bar{height:52px;background:#E8ECF5;display:flex;align-items:center;gap:12px;padding:0 22px}
.bar span{width:16px;height:16px;border-radius:50%;background:#C3CBDD}
.bar b{margin-left:18px;flex:1;height:28px;border-radius:8px;background:#fff;font:500 18px/28px var(--body);color:#6B7593;padding-left:14px}
.browser img{display:block;width:100%;height:auto}
`;

const searchIcon = (c) => `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>`;

function slideHtml(s, i, total) {
  const count = total > 1 ? `<span class="count">${i + 1}/${total}</span>` : "<span></span>";
  const foot = `<div class="foot"><span>${HANDLE}</span>${count}</div>`;
  switch (s.type) {
    case "cover":
      return `<div class="slide cover dark">
        <div class="search">${searchIcon("#1E40AF")}<span>${esc(s.query)}<span class="caret"></span></span></div>
        <h1>${esc(s.title)}</h1><p class="sub">${esc(s.sub)}</p>${foot}</div>`;
    case "point":
      return `<div class="slide point">${s.n ? `<div class="n">${s.n}</div>` : ""}
        <h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>${foot}</div>`;
    case "list":
      return `<div class="slide list top"><h2>${esc(s.title)}</h2><ul>${s.items
        .map(([k, t]) => `<li><span class="mark ${k}">${k === "ok" ? "✓" : "✕"}</span><span>${esc(t)}</span></li>`)
        .join("")}</ul>${foot}</div>`;
    case "cta":
      return `<div class="slide cta ink"><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>
        <div class="wa"><i></i>${WHATSAPP}</div>${s.note ? `<p class="note">${esc(s.note)}</p>` : ""}${foot}</div>`;
    case "shot":
      return `<div class="slide shot ink" style="padding-top:110px">
        <div class="browser"><div class="bar"><span></span><span></span><span></span><b>consultoriadigitaljc.netlify.app/demos/${s.image}</b></div><img src="${shots[s.image]}" alt=""></div>
        <h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>${foot}</div>`;
  }
  throw new Error("tipo desconhecido: " + s.type);
}

const page = (body) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
<style>${css}</style></head><body>${body}</body></html>`;

const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
let n = 0;
for (const post of posts) {
  const dir = join(here, post.id);
  mkdirSync(dir, { recursive: true });
  for (let i = 0; i < post.slides.length; i++) {
    await tab.setContent(page(slideHtml(post.slides[i], i, post.slides.length)), { waitUntil: "networkidle" });
    await tab.evaluate(() => document.fonts.ready);
    const file = join(dir, `slide-${String(i + 1).padStart(2, "0")}.png`);
    await tab.screenshot({ path: file });
    n++;
  }
}
await browser.close();
console.log(`${n} imagens geradas em marketing/instagram/`);
