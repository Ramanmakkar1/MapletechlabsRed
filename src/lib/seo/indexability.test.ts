import assert from 'node:assert/strict';
import test from 'node:test';
import { isIndexableHref, isIndexableSitemapPath } from './indexability';

test('isIndexableHref returns true for indexable internal links', () => {
  assert.equal(isIndexableHref('/locations/ai-development-company-in-edmonton'), true);
  assert.equal(isIndexableHref('/services/ai-ml'), true);
});

test('isIndexableHref returns false for non-indexable internal links', () => {
  assert.equal(isIndexableHref('/locations/ai-development-company-in-ottawa'), false);
  // Ottawa is not a mesh-index city, so keyword pages there are noindex.
  assert.equal(isIndexableHref('/locations/web-development-company-in-ottawa'), false);
  assert.equal(isIndexableHref('/locations/seo-company-in-edmonton'), false);
  assert.equal(isIndexableHref('/locations/digital-marketing-agency-in-edmonton'), false);
});

test('niche city+service pages stay out of the index and sitemap', () => {
  assert.equal(isIndexableSitemapPath('/locations/edmonton/ar-vr'), false);
  assert.equal(isIndexableSitemapPath('/locations/edmonton/blockchain-web3'), false);
  assert.equal(isIndexableSitemapPath('/locations/edmonton/game-development'), false);
  // A non-niche service in a mesh-index city stays indexable.
  assert.equal(isIndexableSitemapPath('/locations/edmonton/cloud-devops'), true);
});

test('301-d blog posts stay out of the sitemap', () => {
  assert.equal(isIndexableSitemapPath('/blog/ai-development-companies-canada'), false);
  assert.equal(isIndexableSitemapPath('/blog/digital-marketing-cost-canada'), false);
  // Not redirected, stays indexable.
  assert.equal(isIndexableSitemapPath('/blog/website-cost-canada'), true);
});

test('app-development location pages canonicalise to services and stay out of the sitemap', () => {
  for (const city of ['edmonton', 'calgary', 'toronto', 'vancouver']) {
    const path = `/locations/app-development-company-in-${city}`;
    assert.equal(isIndexableHref(path), false, `${path} must not be a link target`);
    assert.equal(isIndexableSitemapPath(path), false, `${path} must be out of the sitemap`);
  }
});
