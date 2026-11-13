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
import { ogTitle, seoTitle } from "../src/lib/seo/title.ts";

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
  const isArticle = file.startsWith(join("src", "app", "blog") + sep)
    && file !== join("src", "app", "blog", "page.tsx");
  const checkTitle = isArticle ? articleTitleProblems : titleProblems;
  problems.push(...checkTitle(title).map((problem) => `${file}: ${problem}`));
}

// 1b. Regression guard for the six pages in the 2026-11-11 "titles over 60
//     characters" audit. They must stay at 50-60 chars with the brand once.
const AUDIT_PAGES = [
  "src/app/blog/app-development-companies-edmonton/page.tsx",
  "src/app/blog/saas-development-cost-canada/page.tsx",
  "src/app/blog/web-development-companies-toronto/page.tsx",
  "src/app/blog/website-cost-canada/page.tsx",
  "src/app/case-studies/logistics-platform/page.tsx",
  "src/app/services/digital-marketing/seo-services/page.tsx",
];
const EXPECTED_AUDIT_TITLES = new Map([
  ["src/app/blog/app-development-companies-edmonton/page.tsx", "App Development Companies in Edmonton 2026 | Mapletech Labs"],
  ["src/app/blog/saas-development-cost-canada/page.tsx", "SaaS Development Cost in Canada: 2026 CAD | Mapletech Labs"],
  ["src/app/blog/web-development-companies-toronto/page.tsx", "Web Development Companies in Toronto 2026 | Mapletech Labs"],
  ["src/app/blog/website-cost-canada/page.tsx", "Website Cost in Canada: 2026 CAD Prices | Mapletech Labs"],
  ["src/app/case-studies/logistics-platform/page.tsx", "Logistics Platform: 15K+ Deliveries a Day | Mapletech Labs"],
  ["src/app/services/digital-marketing/seo-services/page.tsx", "SEO Services in Canada: Technical and Local | Mapletech Labs"],
]);
const auditArticlesSrc = readFileSync(join(ROOT, "src/data/articles.ts"), "utf8");
function articleMetaTitle(slug) {
  const block = auditArticlesSrc.match(new RegExp(`slug: '${slug}'[\\s\\S]*?metaTitle: ('(?:[^'\\\\]|\\\\.)*')`));
  return block?.[1] && block[1].slice(1, -1).replace(/\\'/g, "'");
}
for (const file of AUDIT_PAGES) {
  const src = readFileSync(join(ROOT, file), "utf8");
  const slug = file.split(/[\\/]/).at(-2);
  const m = src.match(/^  title: (.+),$/m);
  let title = m && parseTitle(m[1], src);
  if (!title && m?.[1] === "seoTitle(a.metaTitle)") {
    const metaTitle = articleMetaTitle(slug);
    if (metaTitle) title = parseTitle(`seoTitle('${metaTitle}')`, "");
  }
  if (!title) {
    problems.push(`${file}: audit page title could not be resolved`);
    continue;
  }
  const rendered = resolveTitle(title);
  const expected = EXPECTED_AUDIT_TITLES.get(file);
  if (expected && rendered !== expected) {
    problems.push(`${file}: audit title "${rendered}" must remain "${expected}"`);
  }
  if (rendered.length < 50 || rendered.length > MAX) {
    problems.push(`${file}: audit title "${rendered}" is ${rendered.length} chars (want 50-${MAX})`);
  }
  if ((rendered.match(/Mapletech Labs/gi) || []).length !== 1) {
    problems.push(`${file}: audit title must name the brand once`);
  }

  // Open Graph titles are emitted independently of metadata.title; they must
  // stay within the same 60-character limit and carry the brand once.
  const ogExpr = src.match(/openGraph:\s*\{[\s\S]*?title: ogTitle\((.+?)\),/)?.[1];
  let ogBase;
  if (ogExpr === "TITLE") {
    ogBase = src.match(/^const TITLE = '((?:[^'\\]|\\.)*)';$/m)?.[1];
  } else if (ogExpr === "a.metaTitle") {
    ogBase = articleMetaTitle(slug);
  } else if (ogExpr?.match(/^'((?:[^'\\]|\\.)*)'$/)) {
    ogBase = ogExpr.slice(1, -1);
  }
  if (ogBase === undefined) {
    problems.push(`${file}: audit page openGraph.title could not be resolved`);
  } else {
    const ogRendered = ogTitle(ogBase.replace(/\\'/g, "'"));
    if (expected && ogRendered !== expected) {
      problems.push(`${file}: audit openGraph.title "${ogRendered}" must remain "${expected}"`);
    }
    if (ogRendered.length > MAX) {
      problems.push(`${file}: audit openGraph.title "${ogRendered}" is ${ogRendered.length} chars (max ${MAX})`);
    }
    if ((ogRendered.match(/Mapletech Labs/gi) || []).length !== 1) {
      problems.push(`${file}: audit openGraph.title must name the brand once`);
    }
  }
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
assert.deepEqual(titleProblems(seoTitle("x".repeat(61))), []);
assert.equal(resolveTitle(seoTitle("x".repeat(61))).length, MAX);
assert.match(titleProblems(parseTitle("TITLE", fixture))[0], /67 chars/);
assert.match(titleProblems(parseTitle("'Contact Mapletech Labs'", ""))[0], /brand twice/);
assert.match(titleProblems(seoTitle("Mapletech Labs | Mapletech Labs"))[0], /brand twice/);
assert.equal(parseTitle("seoTitle(getTitle())", ""), undefined);

// Article limits apply after branding; unrelated page fixtures keep their rules.
for (const length of [49, 50, 60]) {
  const title = seoTitle("x".repeat(length - BRAND.length));
  assert.equal(resolveTitle(title).length, length);
  const errors = articleTitleProblems(title);
  if (length === 49) assert.match(errors[0], /49 chars \(min 50\)/);
  else assert.deepEqual(errors, []);
}
const overlong = { absolute: "x".repeat(61) };
assert.equal(resolveTitle(overlong).length, 61);
assert.match(articleTitleProblems(overlong)[0], /61 chars \(max 60\)/);

function descriptionProblems(text) {
  return text.length < 120 || text.length > 155
    ? [`description is ${text.length} chars (want 120-155)`]
    : [];
}

function articleDescriptions(src) {
  return Array.from(src.matchAll(/metaDescription:\s*(['"])((?:(?!\1)[^\\]|\\.)*)\1/g),
    (m) => m[2].replace(/\\(['"])/g, "$1"));
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
