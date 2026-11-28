import assert from 'node:assert/strict';
import test from 'node:test';
import { getLocationPage } from './locationPages';

const hasBreadcrumb = (slug: string) =>
  (getLocationPage(slug)?.jsonLd['@graph'] as { '@type': string }[] | undefined)?.some(
    node => node['@type'] === 'BreadcrumbList'
  );

test('canonicalised app-development location pages emit no BreadcrumbList', () => {
  for (const city of ['edmonton', 'calgary', 'toronto', 'vancouver']) {
    const slug = `app-development-company-in-${city}`;
    assert.equal(hasBreadcrumb(slug), false, `${slug} must not emit a BreadcrumbList`);
  }
});

test('indexable keyword location pages keep their BreadcrumbList', () => {
  assert.equal(hasBreadcrumb('app-development-company-in-victoria'), true);
  assert.equal(hasBreadcrumb('web-development-company-in-edmonton'), true);
});
