import assert from 'node:assert/strict';
import test from 'node:test';
import { getRelatedArticles } from './articles';
import { isIndexableSitemapPath } from '@/lib/seo/indexability';

// 'More from the blog' cards must only fill with indexable posts; noindex posts
// (city listicles, NOINDEX_PATHS) waste links from indexable posts.
const CASES = ['build-saas-mvp-8-weeks', 'seo-companies-edmonton'];

test('getRelatedArticles only returns indexable blog posts', () => {
  for (const slug of CASES) {
    const related = getRelatedArticles(slug);
    assert.equal(related.length, 3, `${slug} should return 3 related articles`);
    for (const article of related) {
      assert.ok(
        isIndexableSitemapPath(`/blog/${article.slug}`),
        `${slug} should not link to non-indexable post ${article.slug}`,
      );
    }
  }
});
