import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

import { articleDescription, seoDescription } from './description.ts';

const MIN = 140;
const MAX = 155;

function assertWindow(value) {
  assert.ok(
    value.length >= MIN && value.length <= MAX,
    `expected ${MIN}-${MAX} chars, got ${value.length}: ${value}`,
  );
}

test('short descriptions are extended with real company context', () => {
  const result = seoDescription('We build custom software.');
  assertWindow(result);
  assert.match(result, /Mapletech Labs is a Canadian software development company/);
});

test('short descriptions that already name the company do not repeat the brand', () => {
  const result = seoDescription('Mapletech Labs builds custom software.');
  assertWindow(result);
  assert.equal(result.match(/Mapletech Labs/g)?.length, 1);
});

test('descriptions already in the 140-155 window are returned unchanged', () => {
  const input = 'Custom software, mobile apps and AI development for Edmonton, Calgary, Toronto and Vancouver businesses. Book a free consultation with Mapletech Labs.';
  assertWindow(input);
  assert.equal(seoDescription(input), input);
});

test('overlong descriptions are trimmed at a word boundary inside the window', () => {
  const input = 'Custom software, mobile apps and AI development for Edmonton, Calgary, Toronto and Vancouver businesses. Book a free consultation with Mapletech Labs and get a clear project plan, timeline and fixed quote from our senior team.';
  const result = seoDescription(input);
  assertWindow(result);
  assert.ok(input.startsWith(result), 'trimmed copy must be a prefix of the source');
  assert.ok(!result.endsWith(' '), 'trimmed copy must not end with whitespace');
  assert.ok(
    input[result.length] === ' ' || input[result.length] === undefined,
    'trimmed copy must end at a word boundary',
  );
});

test('all audited blog descriptions resolve to 140-155 without page edits', () => {
  const root = process.cwd();
  const walk = (dir) => readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

  const blogPages = walk(join(root, 'src', 'app', 'blog')).filter((file) => file.endsWith('page.tsx'));
  for (const file of blogPages) {
    const source = readFileSync(file, 'utf8');
    const match = source.match(/const DESCRIPTION =\s*'((?:[^'\\]|\\.)*)'/);
    if (!match) continue;
    const description = match[1].replace(/\\'/g, "'");
    const summary = source.match(/const SUMMARY =\s*'((?:[^'\\]|\\.)*)'/);
    const resolved = source.includes('blogDescription(DESCRIPTION')
      ? articleDescription(description, summary?.[1])
      : seoDescription(description);
    assertWindow(resolved);
  }

  const articles = readFileSync(join(root, 'src', 'data', 'articles.ts'), 'utf8');
  for (const match of articles.matchAll(/metaDescription:\s*'((?:[^'\\]|\\.)*)'/g)) {
    assertWindow(articleDescription(match[1].replace(/\\'/g, "'")));
  }
});

test('articleDescription keeps its fallback and company-fact behavior', () => {
  const short = articleDescription('A short article dek.');
  assertWindow(short);
  assert.match(short, /Mapletech Labs is a Canadian software development company/);

  const withFallback = articleDescription('A short article dek.', 'It covers the real project process, costs and timelines for Canadian teams.');
  assertWindow(withFallback);
  assert.match(withFallback, /A short article dek\./);
  assert.match(withFallback, /real project process/);

  const long = articleDescription(
    'Custom software, mobile apps and AI development for Edmonton, Calgary, Toronto and Vancouver businesses. Book a free consultation with Mapletech Labs and get a clear project plan, timeline and fixed quote from our senior team.',
  );
  assertWindow(long);
});
