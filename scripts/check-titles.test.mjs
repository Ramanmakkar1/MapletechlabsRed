import assert from "node:assert/strict";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { ogTitle, resolveBrandedTitle, seoTitle, localServiceTitle, BRAND_SUFFIX, MAX_TITLE_LENGTH } from "../src/lib/seo/title.ts";

test("encoded ampersand is decoded before measuring title length", () => {
  // "Cloud & DevOps" is 14 chars; "Cloud &amp; DevOps" is 19.
  // After decoding, the branded title must fit within 60 chars.
  const base = "Cloud &amp; DevOps Company in Edmonton";
  const result = resolveBrandedTitle(base);
  assert.ok(!result.includes("&amp;"), "title must not contain encoded entity");
  assert.ok(result.includes("Cloud & DevOps"), "title must contain decoded ampersand");
  assert.ok(result.length <= MAX_TITLE_LENGTH, `title "${result}" is ${result.length} chars (max ${MAX_TITLE_LENGTH})`);
});

test("seoTitle decodes entities and keeps brand suffix when rendered title is 50-60", () => {
  const { absolute } = seoTitle("Cloud &amp; DevOps Company in Edmonton");
  assert.ok(absolute.includes("Cloud & DevOps"));
  assert.ok(absolute.endsWith(BRAND_SUFFIX), `expected brand suffix, got "${absolute}"`);
  assert.ok(absolute.length >= 50, `title "${absolute}" is ${absolute.length} chars (min 50)`);
  assert.ok(absolute.length <= MAX_TITLE_LENGTH, `title "${absolute}" is ${absolute.length} chars (max ${MAX_TITLE_LENGTH})`);
});

test("ogTitle decodes entities", () => {
  const result = ogTitle("Cloud &amp; DevOps Company in Edmonton");
  assert.ok(result.includes("Cloud & DevOps"));
  assert.ok(!result.includes("&amp;"));
  assert.ok(result.length <= MAX_TITLE_LENGTH);
});

test("over-long encoded title is clamped after decoding", () => {
  // 55 chars after decoding + 17 (brand) = 72 > 60, so brand is dropped.
  const base = "Software &amp; Cloud Development Company in Vancouver, British Columbia";
  const result = resolveBrandedTitle(base);
  assert.ok(result.length <= MAX_TITLE_LENGTH, `title "${result}" is ${result.length} chars (max ${MAX_TITLE_LENGTH})`);
  assert.ok(!result.includes("&amp;"));
});

test("over-long branded title drops the brand instead of cutting the keyword", () => {
  const base = "Custom Software Development Company in Vancouver, British Columbia | Mapletech Labs";
  const result = resolveBrandedTitle(base);
  assert.ok(result.length <= MAX_TITLE_LENGTH, `title "${result}" is ${result.length} chars (max ${MAX_TITLE_LENGTH})`);
  assert.ok(!/Mapletech Labs/i.test(result), `expected brand dropped, got "${result}"`);
  assert.ok(result.startsWith("Custom Software Development"), `expected keyword first, got "${result}"`);
});

test("six audited long-title patterns stay within 50-60 chars", () => {
  // Current shipped titles (post-fix): keyword first, brand last, 50-60 chars.
  const audited = [
    "App Development Companies Edmonton 2026",
    "SaaS Development Cost Canada: 2026 CAD",
    "Web Development Companies Toronto 2026",
    "Website Cost Canada 2026: Prices by Type",
    "Logistics Platform: 15K+ Deliveries Daily",
    "SEO Services Canada: Technical and Local",
  ];
  for (const title of audited) {
    const { absolute } = seoTitle(title);
    assert.ok(absolute.length >= 50, `"${absolute}" is ${absolute.length} chars (min 50)`);
    assert.ok(absolute.length <= MAX_TITLE_LENGTH, `"${absolute}" is ${absolute.length} chars (max ${MAX_TITLE_LENGTH})`);
    const brandCount = (absolute.match(/Mapletech Labs/gi) || []).length;
    assert.equal(brandCount, 1, `"${absolute}" names the brand ${brandCount} times`);
  }
});

test("localServiceTitle decodes entities before measuring length", () => {
  const result = localServiceTitle("Cloud &amp; DevOps in Edmonton", "Edmonton", "AB");
  assert.ok(result.includes("Cloud & DevOps"));
  assert.ok(!result.includes("&amp;"));
});

test("title with only decoded ampersand is unchanged", () => {
  const result = resolveBrandedTitle("Cloud & DevOps in Edmonton");
  assert.ok(result.includes("Cloud & DevOps"));
  assert.ok(result.length <= MAX_TITLE_LENGTH);
});
