import { readFileSync } from 'fs';
let src = readFileSync('src/lib/seo/description.ts','utf8')
  .replace(/:\s*string\??/g,'')
  .replace(/export /g,'')
  .replace(/\/\*\*[\s\S]*?\*\//g,'');
src = src.slice(0, src.indexOf('function articleDescription'));
src += '\nexport { seoDescription };\n';
const mod = await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'));
const seoDescription = mod.seoDescription;
const art = readFileSync('src/data/articles.ts','utf8');
const slugs = ['custom-software-vs-off-the-shelf','website-cost-canada','use-claude-for-free','top-10-unicorn-apps-2026','run-ai-models-locally-free','web-development-companies-toronto','saas-development-company-canada','saas-development-cost-canada','what-is-agentic-ai','website-development-company-canada','top-software-development-companies-canada','build-saas-mvp-8-weeks'];
let bad = 0;
for (const s of slugs) {
  const idx = art.indexOf("slug: '" + s + "'");
  const m = art.slice(idx).match(/metaDescription: '([^']*)'/);
  if (!m) { console.log(s, 'NOT FOUND'); bad++; continue; }
  const d = seoDescription(m[1]);
  const ok = d.length>=120 && d.length<=160;
  if (!ok) bad++;
  console.log(s, d.length, ok ? 'OK' : 'BAD');
}
console.log(bad === 0 ? 'ALL 12 OK' : bad + ' BAD');
