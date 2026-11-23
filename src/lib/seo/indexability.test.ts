import assert from 'node:assert/strict';
import test from 'node:test';
import { isIndexableHref } from './indexability';

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
