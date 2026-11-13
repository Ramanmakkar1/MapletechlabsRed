import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { SERVICE_CITY_LOCAL } from './service-city-local';

// Answer-first leads for the priority app, AI and UI/UX city pages. Each lead
// must be exactly two sentences and 35-55 words, and must name the service and
// city before the intro paragraph.
const ANSWER_FIRST_SLUGS = [
  'app-development-company-in-edmonton',
  'app-development-company-in-calgary',
  'app-development-company-in-toronto',
  'app-development-company-in-vancouver',
  'ai-development-company-in-edmonton',
  'ai-development-company-in-toronto',
  'ai-development-company-in-vancouver',
  'ui-ux-design-company-in-edmonton',
  'ui-ux-design-company-in-calgary',
  'ui-ux-design-company-in-toronto',
  'ui-ux-design-company-in-vancouver',
] as const;

test('priority app, AI and UI/UX city pages have a two-sentence answer-first lead', () => {
  for (const slug of ANSWER_FIRST_SLUGS) {
    const entry = SERVICE_CITY_LOCAL[slug];
    assert.ok(entry, `${slug} must exist in SERVICE_CITY_LOCAL`);

    const answer = entry.answer?.trim();
    assert.ok(answer, `${slug} must have an answer-first lead`);

    const sentences = answer.match(/[.!?](?:\s|$)/g) ?? [];
    const words = answer.split(/\s+/);

    assert.equal(sentences.length, 2, `${slug} answer must be exactly two sentences`);
    assert.ok(
      words.length >= 35 && words.length <= 55,
      `${slug} answer must be 35-55 words, got ${words.length}`,
    );
    assert.ok(answer.startsWith('Mapletech Labs'), `${slug} answer must start with the company name`);
  }
});

test('answer-first lead sits directly after the description line', () => {
  const source = readFileSync(join(process.cwd(), 'src/data/service-city-local.ts'), 'utf8');

  for (const slug of ANSWER_FIRST_SLUGS) {
    const start = source.indexOf(`'${slug}': {`);
    assert.notEqual(start, -1, `${slug} must exist in the source file`);

    const end = source.indexOf('\n  },', start);
    assert.notEqual(end, -1, `${slug} entry must have a closing brace`);

    const entrySource = source.slice(start, end);
    assert.match(
      entrySource,
      /description: [^\n]+\n    answer: /,
      `${slug} answer must be placed straight after the description line`,
    );
  }
});
