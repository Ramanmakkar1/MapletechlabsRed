import assert from 'node:assert/strict';
import test from 'node:test';
import nextConfig from '../next.config';

const oneHopRedirects = [
  ['/fr', '/'],
  ['/fr/locations/saas-development-company-in-calgary', '/locations/saas-development-company-in-calgary'],
  ['/fr/locations/winnipeg/digital-marketing', '/locations/seo-company-in-winnipeg'],
  ['/fr/locations/quebec-city/digital-marketing', '/locations/seo-company-in-quebec-city'],
  ['/fr/locations/web-development-company-in-winnipeg', '/locations/web-development-company-in-winnipeg'],
  ['/fr/locations/calgary/digital-marketing', '/locations/seo-company-in-calgary'],
  ['/fr/locations/saas-development-company-in-hamilton', '/locations/saas-development-company-in-hamilton'],
  ['/fr/locations/saas-development-company-in-kelowna', '/locations/saas-development-company-in-kelowna'],
  ['/fr/locations/vancouver/cloud-devops', '/locations/vancouver/cloud-devops'],
  ['/fr/locations/laval/product-design', '/locations/ui-ux-design-company-in-laval'],
  ['/fr/locations/ai-development-company-in-burnaby', '/locations/ai-development-company-in-burnaby'],
  ['/fr/locations/app-development-company-in-vancouver', '/locations/app-development-company-in-vancouver'],
  ['/locations/edmonton/web-development', '/locations/web-development-company-in-edmonton'],
] as const;

test('legacy French and service-city URLs each have one 301 to their final English page', async () => {
  assert.equal(typeof nextConfig.redirects, 'function');
  const redirects = await nextConfig.redirects!();
  const frenchCatchAll = redirects.filter((redirect) => redirect.source === '/fr/:path*');
  assert.equal(frenchCatchAll.length, 1);
  assert.equal(frenchCatchAll[0].statusCode, 301);
  assert.equal(frenchCatchAll[0].destination, '/:path*');

  for (const [source, destination] of oneHopRedirects) {
    const matches = redirects.filter((redirect) => redirect.source === source);
    assert.equal(matches.length, 1, `${source} must have exactly one redirect rule`);
    assert.equal(matches[0].statusCode, 301, `${source} must return a 301`);
    assert.equal(matches[0].destination, destination, `${source} must redirect to its English page`);
    assert.equal(
      redirects.some((redirect) => redirect.source === destination),
      false,
      `${source} must not redirect through another rule at ${destination}`,
    );
  }
});
