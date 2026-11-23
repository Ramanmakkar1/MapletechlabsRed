import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import BlogServiceCta, { BLOG_SERVICE_CTA, getBlogServiceCta } from './BlogServiceCta';

// Representative article data: one per service family used by the PageClient
// blog articles. Each must resolve to the matching existing service page.
const REPRESENTATIVE = [
  { slug: 'website-cost-canada', href: '/services/web-development', label: 'web development services' },
  { slug: 'ai-development-companies-canada', href: '/services/ai-ml', label: 'AI development services' },
  { slug: 'saas-guide', href: '/services/saas-development', label: 'SaaS development services' },
  { slug: 'blockchain-development-companies-canada', href: '/services/blockchain-web3', label: 'blockchain and Web3 development services' },
  { slug: 'top-seo-companies-canada', href: '/services/digital-marketing/seo-services', label: 'SEO services' },
] as const;

test('representative articles resolve the matching service href and descriptive anchor', () => {
  for (const { slug, href, label } of REPRESENTATIVE) {
    assert.deepEqual(getBlogServiceCta(slug), { href, label });
  }
});

test('rendered CTA outputs the service href and descriptive anchor text', () => {
  for (const { slug, href, label } of REPRESENTATIVE) {
    const html = renderToStaticMarkup(createElement(BlogServiceCta, { slug }));
    assert.ok(html.includes(`href="${href}"`), `${slug} must link to ${href}`);
    assert.ok(html.includes(`>${label}</a>`), `${slug} must render the anchor "${label}"`);
  }
});

test('every CTA href points at an existing service page (no new URLs)', () => {
  for (const [slug, { href }] of Object.entries(BLOG_SERVICE_CTA)) {
    const page = join(process.cwd(), 'src', 'app', ...href.split('/').filter(Boolean), 'page.tsx');
    assert.ok(existsSync(page), `${slug} -> ${href} must resolve to an existing service page`);
  }
});

test('unknown slugs render nothing', () => {
  assert.equal(getBlogServiceCta('not-a-real-article'), null);
  assert.equal(renderToStaticMarkup(createElement(BlogServiceCta, { slug: 'not-a-real-article' })), '');
});
