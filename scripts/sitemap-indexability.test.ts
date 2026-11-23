import assert from 'node:assert/strict';
import test from 'node:test';
import nextConfig from '../next.config';
import { canonicalPath } from '../src/lib/seo/canonical';
import { isIndexableSitemapPath } from '../src/lib/seo/indexability';
import { BASE_URL, SITEMAP_CHILDREN, localSeoSitemapEntries } from '../src/lib/sitemap-data';
import { getServedCityServiceParams } from '../src/data/city-service';

test('every sitemap entry is indexable and is not a redirect source', async () => {
  assert.equal(typeof nextConfig.redirects, 'function');
  const redirects = await nextConfig.redirects!();
  const exactRedirectSources = new Set(
    redirects
      .map(redirect => redirect.source)
      .filter(source => !source.includes(':') && !source.includes('*')),
  );

  for (const child of SITEMAP_CHILDREN) {
    for (const entry of child.entries()) {
      const path = canonicalPath(entry.loc);
      assert.equal(isIndexableSitemapPath(path), true, `${entry.loc} must be indexable`);
      assert.equal(exactRedirectSources.has(path), false, `${entry.loc} must not redirect`);
    }
  }
});

test('local-seo sitemap only lists city/service pages the route actually prerenders', () => {
  const served = new Set(
    getServedCityServiceParams().map(({ city, service }) => `/locations/${city}/${service}`),
  );

  for (const entry of localSeoSitemapEntries()) {
    const path = canonicalPath(entry.loc);
    assert.equal(served.has(path), true, `${entry.loc} is not a served city/service page (would 404)`);
  }
});

test('live service, location, case-study and blog URLs are retained', () => {
  const urls = new Set(SITEMAP_CHILDREN.flatMap(child => child.entries().map(entry => entry.loc)));

  for (const path of [
    '/services/mobile-app-development',
    '/services/ai-ml/llm-integration',
    '/locations/software-development-company-in-edmonton',
    '/locations/ai-development-company-in-toronto',
    '/case-studies/fintech-trading-platform',
    '/blog/what-is-agentic-ai',
    '/locations/toronto/ar-vr',
  ]) {
    assert.equal(urls.has(`${BASE_URL}${path}`), true, `${path} must stay in the sitemap`);
  }

  assert.equal(urls.has(`${BASE_URL}/locations/winnipeg/ar-vr`), false, 'noindex city/niche pages must stay out');
});
