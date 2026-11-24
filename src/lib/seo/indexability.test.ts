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
