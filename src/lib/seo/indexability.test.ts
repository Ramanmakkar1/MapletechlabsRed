import assert from 'node:assert/strict';
import test from 'node:test';
import { isIndexableHref, isIndexableSitemapPath, indexableLinkHref, blogPostHref, rewriteLocationLinks } from './indexability';

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

test('noindex blog posts stay out of the sitemap and link rewrites', () => {
  for (const path of [
    '/blog/app-development-companies-edmonton',
    '/blog/software-development-companies-calgary',
    '/blog/web-development-companies-toronto',
  ]) {
    assert.equal(isIndexableSitemapPath(path), false, `${path} is noindex and must be out of the sitemap`);
    assert.equal(isIndexableHref(path), false, `${path} is noindex and must not be a link target`);
  }
});

test('app-development location pages canonicalise to services and stay out of the sitemap', () => {
  for (const city of ['edmonton', 'calgary', 'toronto', 'vancouver']) {
    const path = `/locations/app-development-company-in-${city}`;
    assert.equal(isIndexableHref(path), false, `${path} must not be a link target`);
    assert.equal(isIndexableSitemapPath(path), false, `${path} must be out of the sitemap`);
  }
});

test('indexableLinkHref resolves noindexed /locations links to indexable equivalents', () => {
  // App development in Ottawa (not a mesh city for app dev) -> base services page
  assert.equal(
    indexableLinkHref('/locations/app-development-company-in-ottawa'),
    '/services/mobile-app-development'
  );
  // Edmonton is a mesh city, so app-development should resolve to /services/mobile-app-development/<city>
  assert.equal(
    indexableLinkHref('/locations/app-development-company-in-edmonton'),
    '/services/mobile-app-development/edmonton'
  );

  // Web design in Ottawa stays unchanged (no indexable equivalent)
  assert.equal(indexableLinkHref('/locations/web-design-company-in-ottawa'), '/locations/web-design-company-in-ottawa');
  // AI development in Edmonton stays unchanged
  assert.equal(indexableLinkHref('/locations/ai-development-company-in-edmonton'), '/locations/ai-development-company-in-edmonton');

  // City/service mesh URLs with second segment
  // Edmonton/web-development is indexable, so stays unchanged
  assert.equal(indexableLinkHref('/locations/edmonton/web-development'), '/locations/edmonton/web-development');
  // Non-indexable mesh in non-mesh city should resolve to services
  assert.equal(indexableLinkHref('/locations/toronto/game-development'), '/services/game-development');
});

test('rewriteLocationLinks replaces hrefs in HTML with indexable equivalents', () => {
  const html = '<a href="/locations/saas-development-company-in-montreal">x</a>';
  const result = rewriteLocationLinks(html);
  assert.ok(result.includes('href="/services/saas-development"'), `Expected indexable href in result: ${result}`);
  // Also test with single quotes
  const html2 = "<a href='/locations/saas-development-company-in-montreal'>x</a>";
  const result2 = rewriteLocationLinks(html2);
  assert.ok(result2.includes("href='/services/saas-development'"), `Expected indexable href in result: ${result2}`);
});

test('blogPostHref returns redirect destination for 301-d blog posts', () => {
  assert.equal(blogPostHref('ai-development-companies-canada'), '/services/ai-ml');
  assert.equal(blogPostHref('digital-marketing-cost-canada'), '/services/digital-marketing');
});

test('blogPostHref returns /blog/<slug> for indexable posts', () => {
  assert.equal(blogPostHref('website-cost-canada'), '/blog/website-cost-canada');
  assert.equal(blogPostHref('top-10-unicorn-apps-2026'), '/blog/top-10-unicorn-apps-2026');
});
