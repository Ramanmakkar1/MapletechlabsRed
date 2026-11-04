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
import { readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { register } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import assert from "node:assert/strict";
import { seoTitle } from "../src/lib/seo/title.ts";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const BRAND = " | Mapletech Labs";
const MAX = 60;
const problems = [];

function resolveTitle(title) {
  return typeof title === "string" ? title + BRAND : title.absolute;
}

function titleProblems(title) {
  const rendered = resolveTitle(title);
  const errors = [];
  if (rendered.length > MAX) errors.push(`"${rendered}" is ${rendered.length} chars (max ${MAX})`);
  if ((rendered.match(/Mapletech Labs/gi) || []).length > 1) errors.push(`"${rendered}" names the brand twice`);
  return errors;
}

function articleTitleProblems(title) {
  const rendered = resolveTitle(title);
  const errors = titleProblems(title);
  if (rendered.length < 50) errors.push(`"${rendered}" is ${rendered.length} chars (min 50)`);
  return errors;
}

// Parse only the site's literal/TITLE metadata forms; never execute page source.
function parseTitle(expr, src) {
  const helper = expr.match(/^seoTitle\((.+)\)$/);
  const absolute = expr.match(/^\{ absolute: (.+) \}$/);
  const value = helper?.[1] ?? absolute?.[1] ?? expr;
  const literal = value === "TITLE"
    ? src.match(/^const TITLE = '((?:[^'\\]|\\.)*)';$/m)?.[1]
    : value.match(/^'((?:[^'\\]|\\.)*)'$/)?.[1];
  if (literal === undefined) return undefined;
  const text = literal.replace(/\\'/g, "'");
  return helper ? seoTitle(text) : absolute ? { absolute: text } : text;
}

function pageFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) return pageFiles(file);
    return entry.isFile() && entry.name === "page.tsx" ? [relative(ROOT, file)] : [];
  });
}
const allPageFiles = pageFiles(join(ROOT, "src", "app"));

// 1. Hand-written page metadata (src/app/**/page.tsx).
const files = allPageFiles.filter((file) => readFileSync(join(ROOT, file), "utf8").match(/^  title: /m));
for (const file of files) {
  const src = readFileSync(join(ROOT, file), "utf8");
  const m = src.match(/^  title: (.+),$/m);
  if (!m) continue;
  const title = parseTitle(m[1], src);
  if (title === undefined) continue; // Dynamic metadata is checked at its data source.
  problems.push(...titleProblems(title).map((problem) => `${file}: ${problem}`));
}

// 2. Generated city x service titles (src/data/city-service.ts) — resolve the
//    "@/..." alias so the TS data modules load directly.
const loader = `
  import { existsSync } from "node:fs";
  import { fileURLToPath, pathToFileURL } from "node:url";
  const SRC = ${JSON.stringify(join(ROOT, "src") + sep)};
  const probe = (b) => [".ts", ".tsx", "/index.ts"].map((e) => b + e).find(existsSync);
  export async function resolve(spec, ctx, next) {
    if (spec.startsWith("@/")) { const p = probe(SRC + spec.slice(2)); if (p) return { url: pathToFileURL(p).href, shortCircuit: true }; }
    if (/^\\.\\.?\\//.test(spec) && ctx.parentURL?.startsWith("file:") && !/\\.[a-z]+$/.test(spec)) {
      const p = probe(fileURLToPath(new URL(spec, ctx.parentURL))); if (p) return { url: pathToFileURL(p).href, shortCircuit: true };
    }
    return next(spec, ctx);
  }`;
register("data:text/javascript," + encodeURIComponent(loader));
const { SERVICE_CITY_LOCAL } = await import(pathToFileURL(join(ROOT, "src/data/service-city-local.ts")).href);
const { getAllCityServiceParams, getCityServiceData } = await import(pathToFileURL(join(ROOT, "src/data/city-service.ts")).href);
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

// Exercise parsing, final rendering and rejection without evaluating source code.
const fixture = "const TITLE = '" + "x".repeat(50) + "';";
assert.equal(resolveTitle(parseTitle("seoTitle('Short title')", "")), "Short title" + BRAND);
assert.equal(resolveTitle(parseTitle("seoTitle(TITLE)", fixture)), "x".repeat(50));
assert.deepEqual(titleProblems(parseTitle("seoTitle(TITLE)", fixture)), []);
assert.equal(resolveTitle(parseTitle("'Raw title'", "")), "Raw title" + BRAND);
assert.equal(resolveTitle(parseTitle("TITLE", fixture)), "x".repeat(50) + BRAND);
assert.deepEqual(titleProblems(parseTitle("seoTitle('Contact Mapletech Labs')", "")), []);
assert.equal(resolveTitle(parseTitle("{ absolute: TITLE }", fixture)), "x".repeat(50));
assert.equal(resolveTitle(parseTitle("{ absolute: 'Short title' }", "")), "Short title");
assert.match(titleProblems(parseTitle("{ absolute: '" + "x".repeat(61) + "' }", ""))[0], /61 chars/);
assert.match(titleProblems(seoTitle("x".repeat(61)))[0], /61 chars/);
assert.match(titleProblems(parseTitle("TITLE", fixture))[0], /67 chars/);
assert.match(titleProblems(parseTitle("'Contact Mapletech Labs'", ""))[0], /brand twice/);
assert.match(titleProblems(seoTitle("Mapletech Labs | Mapletech Labs"))[0], /brand twice/);
assert.equal(parseTitle("seoTitle(getTitle())", ""), undefined);

// Article limits apply after branding; unrelated page fixtures keep their rules.
for (const length of [49, 50, 60, 61]) {
  const title = seoTitle("x".repeat(length <= MAX ? length - BRAND.length : length));
  assert.equal(resolveTitle(title).length, length);
  const errors = articleTitleProblems(title);
  if (length === 49) assert.match(errors[0], /49 chars \(min 50\)/);
  else if (length === 61) assert.match(errors[0], /61 chars \(max 60\)/);
  else assert.deepEqual(errors, []);
}

function descriptionProblems(text) {
  return text.length < 120 || text.length > 155
    ? [`description is ${text.length} chars (want 120-155)`]
    : [];
}

function articleDescriptions(src) {
  return Array.from(src.matchAll(/metaDescription:\s*'((?:[^'\\]|\\.)*)'/g),
    (m) => m[1].replace(/\\'/g, "'"));
}

assert.deepEqual(articleDescriptions("metaDescription: \n  'Multiline field'"), ["Multiline field"]);
assert.deepEqual(articleDescriptions("metaDescription:\t'Inline field'"), ["Inline field"]);
for (const length of [119, 120, 155, 156]) {
  const [text] = articleDescriptions(`metaDescription:\n  '${"x".repeat(length)}'`);
  assert.equal(descriptionProblems(text).length, length < 120 || length > 155 ? 1 : 0);
}

// 4. Meta descriptions (src/app/**/page.tsx literals + src/data/articles.ts).
let descriptions = 0;
for (const [slug, entry] of Object.entries(SERVICE_CITY_LOCAL)) {
  descriptions++;
  problems.push(...descriptionProblems(entry.description).map((problem) => `${slug}: ${problem}`));
}
const descFiles = allPageFiles.filter((file) => readFileSync(join(ROOT, file), "utf8").includes("description"));
for (const file of descFiles) {
  const src = readFileSync(join(ROOT, file), "utf8");
  const m = src.match(/^const DESCRIPTION =\s*'((?:[^'\\]|\\.)*)';$/m)
    || src.match(/^  description: '((?:[^'\\]|\\.)*)',$/m)
    || (src.match(/^  description: DESCRIPTION,$/m) && src.match(/^const DESCRIPTION =\s*'((?:[^'\\]|\\.)*)';$/m)); // two-space indent only: skips openGraph and nested
  if (!m) continue; // dynamic data: no literal to check
  const text = m[1].replace(/\\'/g, "'");
  descriptions++;
  problems.push(...descriptionProblems(text).map((problem) => `${file}: ${problem}`));
}
const articlesSrc = readFileSync(join(ROOT, "src/data/articles.ts"), "utf8");
let articleTitles = 0;
for (const m of articlesSrc.matchAll(/metaTitle: ('(?:[^'\\]|\\.)*')/g)) {
  const title = parseTitle(`seoTitle(${m[1]})`, "");
  articleTitles++;
  problems.push(...articleTitleProblems(title).map((problem) => `articles.ts: ${problem}`));
}
const articleDescriptionsFound = articleDescriptions(articlesSrc);
assert.equal(articleDescriptionsFound.length, articleTitles, "Every article must have a checked description");
for (const text of articleDescriptionsFound) {
  descriptions++;
  problems.push(...descriptionProblems(text).map((problem) => `articles.ts: ${text.slice(0, 40)}... ${problem}`));
}

if (problems.length) {
  console.error(`check-titles: ${problems.length} problem(s)\n` + problems.join("\n"));
  process.exit(1);
}
console.log(`check-titles: ${files.length} page files + ${articleTitles} article titles + ${generated} generated city x service titles + ${descriptions} descriptions (${articleDescriptionsFound.length} articles) OK (<= ${MAX} chars, articles 50-${MAX} chars, 120-155 chars, single brand); resolver and description assertions passed`);
