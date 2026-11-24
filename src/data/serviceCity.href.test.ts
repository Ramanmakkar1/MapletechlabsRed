import assert from 'node:assert/strict';
import test from 'node:test';
import { serviceCityHref } from './serviceCity';

// Internal links must only point at city service pages that are indexable;
// otherwise they fall back to the core service page (never a 301 or noindex URL).
const CASES: Array<[string, string, string]> = [
  ['mobile-app-development', 'edmonton', '/services/mobile-app-development/edmonton'],
  ['mobile-app-development', 'halifax', '/services/mobile-app-development'],
  ['ai-ml', 'edmonton', '/locations/ai-development-company-in-edmonton'],
  ['ai-ml', 'halifax', '/services/ai-ml'],
  ['ai-ml', 'regina', '/locations/ai-development-company-in-regina'],
  ['blockchain-web3', 'halifax', '/services/blockchain-web3'],
  ['cloud-devops', 'toronto', '/locations/toronto/cloud-devops'],
  ['branding', 'edmonton', '/services/branding'],
  ['digital-marketing', 'calgary', '/services/digital-marketing'],
];

test('serviceCityHref links only to indexable city service pages', () => {
  for (const [serviceSlug, citySlug, expected] of CASES) {
    assert.equal(
      serviceCityHref(serviceSlug, citySlug),
      expected,
      `${serviceSlug} in ${citySlug} should link to ${expected}`,
    );
  }
});
