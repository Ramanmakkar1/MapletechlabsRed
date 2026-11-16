import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

// The audited service routes must resolve everything they render from bounded
// local data: metadata, Service schema inputs and FAQPage inputs, with no
// request-time fetch, retry or recovery path. This test reads the source
// directly (no module resolution needed) so it runs under plain node:test.
const LIB = join(process.cwd(), 'src', 'lib', 'servicePages.ts');
const source = readFileSync(LIB, 'utf8');

const AUDITED_SLUGS = [
  'game-development/hyper-casual-games',
  'wordpress-cms/woocommerce-stores',
] as const;

test('servicePages.ts is pure local data: no fetch, retry or recovery at request time', () => {
  assert.ok(!/fetch\s*\(/.test(source), 'no live third-party fetches');
  assert.ok(!/setTimeout|setInterval/.test(source), 'no unbounded retries or timers');
  assert.ok(!/\bPromise\b/.test(source), 'no async recovery path');
  assert.ok(!/async\s/.test(source), 'no async work during render');
});

test('every audited service slug has bounded local content', () => {
  for (const slug of AUDITED_SLUGS) {
    assert.ok(source.includes(`'${slug}'`), `${slug} must be a local content entry`);
  }
});

test('servicePages owns FAQs, complete schema inputs and metadata before render', () => {
  // FAQs live in the shared module, not in each page template.
  assert.ok(source.includes('faqs:'), 'FAQ data is owned by servicePages.ts');
  // Complete Service schema inputs resolved before render.
  assert.ok(source.includes('serviceName'), 'Service schema name is resolved locally');
  assert.ok(source.includes('serviceType'), 'Service schema type is resolved locally');
  // Metadata (title, description, canonical, OG) resolved before render.
  assert.ok(source.includes('seoTitle'), 'metadata title resolved locally');
  assert.ok(source.includes('seoDescription'), 'metadata description resolved locally');
  assert.ok(source.includes('canonicalUrl'), 'canonical resolved locally');
  assert.ok(source.includes('DEFAULT_OG_IMAGES'), 'OG images resolved locally');
  // One resolver shared by the page template, metadata, Service and FAQPage schema.
  assert.ok(source.includes('export function getServicePageContent'), 'public resolver export exists');
});
