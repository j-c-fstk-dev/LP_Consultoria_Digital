// Gera as imagens dos posts (1080x1350) a partir de conteudo.mjs, na identidade do site.
// Uso: node marketing/instagram/gerar.mjs   (requer o pacote "playwright" com Chromium)
import { readFileSync, mkdirSync, rmSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { posts } from "./conteudo.mjs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const NAME = "Jorge C. · Consultoria Digital";
const WHATSAPP = "(12) 99218-5685";

const b64 = (p, type) => `data:${type};base64,` + readFileSync(join(root, p)).toString("base64");
const images = {
  advocacia: b64("public/portfolio/advocacia.jpg", "image/jpeg"),
  transportes: b64("public/portfolio/transportes.jpg", "image/jpeg"),
  jorge: b64("public/jorge.jpg", "image/jpeg"),
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Mesmos tokens do site (src/index.css)
const css = `
:root{--paper:#F3F4F2;--white:#FFFFFF;--ink:#14181D;--muted:#5A616A;--line:#D9DCD6;--navy:#1C3354;--navy-deep:#13253F;--sky:#DCE6F2;--wa:#1FA855;
--serif:"Source Serif 4",Georgia,serif;--sans:"Libre Franklin",Arial,sans-serif}
*{box-sizing:border-box;margin:0}
html,body{width:1080px;height:1350px}
body{font-family:var(--sans);color:var(--ink);background:var(--paper);overflow:hidden}
.slide{position:relative;width:1080px;height:1350px;padding:100px 96px 150px;display:flex;flex-direction:column}
.slide.navy{background:var(--navy);color:#fff}
.slide.deep{background:var(--navy-deep);color:#fff}
.foot{position:absolute;left:96px;right:96px;bottom:64px;display:flex;justify-content:space-between;align-items:center;font:500 24px var(--sans);color:var(--muted);border-top:1px solid var(--line);padding-top:24px}
.navy .foot,.deep .foot{color:rgba(255,255,255,.7);border-color:rgba(255,255,255,.25)}
.count{font-variant-numeric:tabular-nums}
h1,h2{font-family:var(--serif);font-weight:600;letter-spacing:-.02em;text-wrap:balance}
/* capa com busca */
.search{display:flex;align-items:center;gap:20px;background:#fff;border-radius:4px;padding:24px 32px;font:400 32px var(--sans);color:var(--ink)}
.search svg{flex:none}
.caret{display:inline-block;width:3px;height:36px;background:var(--navy);margin-left:2px;vertical-align:-6px}
.cover h1{font-size:96px;line-height:1.04;margin-top:auto}
.cover .sub{font-size:32px;margin-top:32px;color:var(--sky)}
/* capa com foto */
.photo{padding:0}
.photo img{width:1080px;height:760px;object-fit:cover;object-position:50% 18%;display:block}
.photo .txt{padding:64px 96px 0}
.photo h1{font-size:76px;line-height:1.05}
.photo p{font-size:34px;line-height:1.35;color:var(--muted);margin-top:24px;max-width:860px}
/* ponto */
.point{justify-content:center}
.n{font:600 150px/1 var(--serif);color:var(--navy);margin-bottom:28px}
.point h2{font-size:78px;line-height:1.06}
.point .rule{width:96px;height:4px;background:var(--navy);margin:44px 0 40px}
.point p{font-size:40px;line-height:1.45;color:var(--muted);max-width:880px}
/* lista */
.list{justify-content:center}
.list h2{font-size:80px;line-height:1.06;margin-bottom:44px;padding-bottom:36px;border-bottom:2px solid var(--ink)}
.list ul{list-style:none;padding:0;display:flex;flex-direction:column}
.list li{display:grid;grid-template-columns:60px 1fr;gap:20px;align-items:start;font:500 38px/1.3 var(--sans);padding:22px 0;border-bottom:1px solid var(--line)}
.mark{font:600 38px/1.3 var(--serif)}
.mark.ok{color:var(--navy)} .mark.no{color:#9B2C2C}
/* cta */
.cta h2{font-size:88px;line-height:1.05;margin-top:auto}
.cta p{font-size:38px;line-height:1.4;margin-top:32px;color:rgba(255,255,255,.82);max-width:860px}
.wa{display:inline-flex;align-items:center;gap:20px;margin-top:56px;background:#fff;color:var(--navy);border-radius:4px;padding:26px 36px;font:600 42px var(--sans);align-self:flex-start}
.wa svg{color:var(--wa)}
.note{font-size:22px;line-height:1.4;color:rgba(255,255,255,.6);margin-top:40px;max-width:880px}
/* modelo */
.shot{padding-top:100px}
.browser{background:#fff;border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.2)}
.bar{height:48px;background:#E7EAEE;display:flex;align-items:center;gap:10px;padding:0 20px}
.bar span{width:14px;height:14px;border-radius:50%;background:#C3C9D2}
.browser img{display:block;width:100%;height:auto}
.shot .tag{font:500 24px var(--sans);color:var(--sky);margin-top:56px}
.shot h2{font-size:68px;line-height:1.06;margin-top:12px}
.shot p{font-size:32px;line-height:1.4;margin-top:20px;color:rgba(255,255,255,.82)}
`;

const searchIcon = `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1C3354" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>`;
const waIcon = `<svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm4.52 11.99c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z"/></svg>`;

function slideHtml(s, i, total) {
  const count = total > 1 ? `<span class="count">${i + 1}/${total}</span>` : "<span></span>";
  const foot = `<div class="foot"><span>${NAME}</span>${count}</div>`;
  switch (s.type) {
    case "photo":
      return `<div class="slide photo"><img src="${images.jorge}" alt="">
        <div class="txt"><h1>${esc(s.title)}</h1><p>${esc(s.sub)}</p></div>${foot}</div>`;
    case "cover":
      return `<div class="slide cover navy">
        <div class="search">${searchIcon}<span>${esc(s.query)}<span class="caret"></span></span></div>
        <h1>${esc(s.title)}</h1><p class="sub">${esc(s.sub)}</p>${foot}</div>`;
    case "point":
      return `<div class="slide point">${s.n ? `<div class="n">${s.n}</div>` : ""}
        <h2>${esc(s.title)}</h2><div class="rule"></div><p>${esc(s.body)}</p>${foot}</div>`;
    case "list":
      return `<div class="slide list"><h2>${esc(s.title)}</h2><ul>${s.items
        .map(([k, t]) => `<li><span class="mark ${k}">${k === "ok" ? "✓" : "✕"}</span><span>${esc(t)}</span></li>`)
        .join("")}</ul>${foot}</div>`;
    case "cta":
      return `<div class="slide cta deep"><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>
        <div class="wa">${waIcon}${WHATSAPP}</div>${s.note ? `<p class="note">${esc(s.note)}</p>` : ""}${foot}</div>`;
    case "shot":
      return `<div class="slide shot navy">
        <div class="browser"><div class="bar"><span></span><span></span><span></span></div><img src="${images[s.image]}" alt=""></div>
        <p class="tag">Projeto demonstrativo</p><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>${foot}</div>`;
  }
  throw new Error("tipo desconhecido: " + s.type);
}

const page = (body) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600&family=Libre+Franklin:wght@400;500;600&display=swap" rel="stylesheet">
<style>${css}</style></head><body>${body}</body></html>`;

// Remove pastas de posts antigas para não sobrar imagem de versão anterior
for (const name of readdirSync(here)) {
  if (/^\d\d-/.test(name) && existsSync(join(here, name))) rmSync(join(here, name), { recursive: true });
}

const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
let n = 0;
for (const post of posts) {
  const dir = join(here, post.id);
  mkdirSync(dir, { recursive: true });
  for (let i = 0; i < post.slides.length; i++) {
    await tab.setContent(page(slideHtml(post.slides[i], i, post.slides.length)), { waitUntil: "networkidle" });
    await tab.evaluate(() => document.fonts.ready);
    await tab.screenshot({ path: join(dir, `slide-${String(i + 1).padStart(2, "0")}.png`) });
    n++;
  }
}
await browser.close();
console.log(`${n} imagens geradas em marketing/instagram/`);
