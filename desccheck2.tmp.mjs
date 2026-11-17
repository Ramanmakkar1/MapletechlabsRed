import { readFileSync } from 'fs';
let src = readFileSync('src/lib/seo/description.ts','utf8')
  .replace(/:\s*string\??/g,'')
  .replace(/export /g,'')
  .replace(/\/\*\*[\s\S]*?\*\//g,'');
src = src.slice(0, src.indexOf('function articleDescription'));
src += '\nexport { seoDescription };\n';
const mod = await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'));
const seoDescription = mod.seoDescription;
const slugs = ['website-cost-canada','top-10-unicorn-apps-2026','web-development-companies-toronto','saas-development-cost-canada','top-software-development-companies-canada'];
for (const s of slugs) {
  const f = readFileSync(`src/app/blog/${s}/page.tsx`,'utf8');
  const m = f.match(/DESCRIPTION =\n?\s*'([^']*)'/);
  const d = seoDescription(m[1]);
  console.log(s, d.length, d.length>=120 && d.length<=160 ? 'OK' : 'BAD');
}
