// Regression check: getRelatedArticles ranks the buyer's service topic first,
// so SEO hiring guides recommend other SEO guides (not SaaS articles) and app
// guides recommend app articles. Also: no self-links, no duplicates, n respected.
//
// Run: node --experimental-strip-types --no-warnings scripts/check-related-articles.mjs
import { fileURLToPath, pathToFileURL } from "node:url";
import { register } from "node:module";
import assert from "node:assert/strict";

// Resolve "@/..." and extensionless relative imports so the TS data modules
// load directly under Node's type stripping (same approach as check-titles.mjs).
const loader = `
  import { existsSync } from "node:fs";
  import { fileURLToPath, pathToFileURL } from "node:url";
  const SRC = ${JSON.stringify(fileURLToPath(new URL("../src/", import.meta.url)))};
  const probe = (b) => [".ts", ".tsx", "/index.ts"].map((e) => b + e).find(existsSync);
  export async function resolve(spec, ctx, next) {
    if (spec.startsWith("@/")) { const p = probe(SRC + spec.slice(2)); if (p) return { url: pathToFileURL(p).href, shortCircuit: true }; }
    if (/^\\.\\.?\\//.test(spec) && ctx.parentURL?.startsWith("file:") && !/\\.[a-z]+$/.test(spec)) {
      const p = probe(fileURLToPath(new URL(spec, ctx.parentURL))); if (p) return { url: pathToFileURL(p).href, shortCircuit: true };
    }
    return next(spec, ctx);
  }`;
register("data:text/javascript," + encodeURIComponent(loader));

const { articles, getRelatedArticles } = await import(
  pathToFileURL(fileURLToPath(new URL("../src/data/articles.ts", import.meta.url))).href
);

const TOPICS = new Set(["software", "saas", "web", "apps", "ai", "design", "seo"]);
for (const a of articles) {
  assert.ok(TOPICS.has(a.relatedTopic), `${a.slug} has unknown relatedTopic "${a.relatedTopic}"`);
}

function slugs(slug, n = 3) {
  return getRelatedArticles(slug, n).map((r) => r.slug);
}

// 1. The Edmonton SEO guide recommends both other SEO guides before unrelated topics.
const edmontonSeo = slugs("seo-companies-edmonton");
assert.deepEqual(edmontonSeo.slice(0, 2), ["seo-companies-calgary", "seo-companies-toronto"],
  `Edmonton SEO guide must lead with the other SEO guides, got ${edmontonSeo}`);

// 2. The Calgary app guide recommends the Toronto app guide and the
//    app-platform/privacy articles first (all apps-topic, original order).
const calgaryApps = slugs("app-development-companies-calgary");
assert.deepEqual(calgaryApps, ["native-vs-cross-platform-vs-pwa", "app-privacy-compliance-canada", "app-development-companies-toronto"],
  `Calgary app guide must lead with app articles, got ${calgaryApps}`);

// 3. No self-links, no duplicates, n respected (0 and 1) — for every article.
for (const a of articles) {
  for (const n of [0, 1, 3]) {
    const result = getRelatedArticles(a.slug, n);
    assert.equal(result.length, n, `${a.slug} n=${n} returned ${result.length}`);
    const seen = new Set();
    for (const r of result) {
      assert.notEqual(r.slug, a.slug, `${a.slug} links to itself`);
      assert.ok(!seen.has(r.slug), `${a.slug} duplicates ${r.slug}`);
      seen.add(r.slug);
      assert.ok(r.title && r.category && r.readTime, `${r.slug} missing return fields`);
    }
  }
}

console.log(`check-related-articles: ${articles.length} articles, topic-first ranking, no self-links/duplicates, n respected — OK`);
