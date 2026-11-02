// Regression check: every <title> this site can emit stays within the 60
// character limit (src/lib/seo/title.ts MAX_TITLE_LENGTH) and never carries
// the brand twice.
//
// The root layout applies `title.template = "%s | Mapletech Labs"`, so a page
// title that already ends in "| Mapletech Labs" is rendered with the brand
// doubled (the 2026-09 Bing "title too long" report). Hand-written titles
// must therefore be brand-free literals, or go through seoTitle() which opts
// out of the template when the brand is already present or would overflow.
//
// Run: npm run seo:titles   (also imports the city x service generator via
// Node's type stripping, so generated titles are checked for real).
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

const ROOT = new URL("../", import.meta.url);
const BRAND = " | Mapletech Labs";
const MAX = 60;
const problems = [];

// 1. Hand-written page metadata (src/app/**/page.tsx).
const files = execSync("rg -l '^  title: ' src/app --glob '**/page.tsx'", { cwd: ROOT })
  .toString().trim().split("\n").filter(Boolean);
for (const file of files) {
  const src = readFileSync(new URL(file, ROOT), "utf8");
  const m = src.match(/^  title: (.+),$/m);
  if (!m) continue;
  const expr = m[1];
  let literal = expr.match(/^'([^']*)'$/)?.[1];
  if (expr === "TITLE") literal = src.match(/^const TITLE = '([^']*)';$/m)?.[1];
  if (literal === undefined) continue; // seoTitle(...) / { absolute } / dynamic: rule enforced by helper
  if (/Mapletech Labs/i.test(literal)) problems.push(`${file}: "${literal}" names the brand -> rendered twice; wrap in seoTitle()`);
  else if (literal.length + BRAND.length > MAX) problems.push(`${file}: "${literal}" is ${literal.length + BRAND.length} chars once branded (max ${MAX}); wrap in seoTitle()`);
}

// 2. Generated city x service titles (src/data/city-service.ts) — resolve the
//    "@/..." alias so the TS data modules load directly.
const loader = `
  import { existsSync } from "node:fs";
  const SRC = ${JSON.stringify(new URL("src/", ROOT).pathname)};
  const probe = (b) => [".ts", ".tsx", "/index.ts"].map((e) => b + e).find(existsSync);
  export async function resolve(spec, ctx, next) {
    if (spec.startsWith("@/")) { const p = probe(SRC + spec.slice(2)); if (p) return { url: "file://" + p, shortCircuit: true }; }
    if (/^\\.\\.?\\//.test(spec) && ctx.parentURL?.startsWith("file:") && !/\\.[a-z]+$/.test(spec)) {
      const p = probe(new URL(spec, ctx.parentURL).pathname); if (p) return { url: "file://" + p, shortCircuit: true };
    }
    return next(spec, ctx);
  }`;
register("data:text/javascript," + encodeURIComponent(loader));
const { getAllCityServiceParams, getCityServiceData } = await import(pathToFileURL(new URL("src/data/city-service.ts", ROOT).pathname).href);
const { seoTitle } = await import(pathToFileURL(new URL("src/lib/seo/title.ts", ROOT).pathname).href);
let generated = 0;
for (const { city, service } of getAllCityServiceParams()) {
  const data = getCityServiceData(city, service);
  if (!data) continue;
  generated++;
  const rendered = `${data.title}${BRAND}`;
  if (rendered.length > MAX) problems.push(`/locations/${city}/${service}: "${rendered}" is ${rendered.length} chars (max ${MAX})`);
}

// 3. The helper itself.
if (typeof seoTitle("Contact Mapletech Labs") !== "object") problems.push("seoTitle() must opt out of the template when the brand is present");
if (typeof seoTitle("x".repeat(60)) !== "object") problems.push("seoTitle() must opt out of the template when branding would exceed 60");
if (seoTitle("Short title") !== "Short title") problems.push("seoTitle() must keep short titles on the template");

// 4. Meta descriptions (src/app/**/page.tsx literals + src/data/articles.ts).
let descriptions = 0;
const descFiles = execSync("rg -l 'description' src/app --glob '**/page.tsx'", { cwd: ROOT })
  .toString().trim().split("\n").filter(Boolean);
for (const file of descFiles) {
  const src = readFileSync(new URL(file, ROOT), "utf8");
  const m = src.match(/^const DESCRIPTION = '((?:[^'\\]|\\.)*)';$/m)
    || src.match(/^  description: '((?:[^'\\]|\\.)*)',$/m); // two-space indent only: skips openGraph and nested
  if (!m) continue; // dynamic data: no literal to check
  const text = m[1].replace(/\\'/g, "'");
  descriptions++;
  if (text.length < 120 || text.length > 160) problems.push(`${file}: description is ${text.length} chars (want 120-160)`);
}
const articlesSrc = readFileSync(new URL("src/data/articles.ts", ROOT), "utf8");
for (const m of articlesSrc.matchAll(/metaDescription: '((?:[^'\\]|\\.)*)'/g)) {
  const text = m[1].replace(/\\'/g, "'");
  descriptions++;
  if (text.length < 120 || text.length > 160) problems.push(`articles.ts: ${text.slice(0, 40)}... is ${text.length} chars`);
}

if (problems.length) {
  console.error(`check-titles: ${problems.length} problem(s)\n` + problems.join("\n"));
  process.exit(1);
}
console.log(`check-titles: ${files.length} page files + ${generated} generated city x service titles + ${descriptions} descriptions OK (<= ${MAX} chars, 120-160 chars, single brand)`);
