import { BLOG_AUTHOR, BLOG_IMAGE } from '@/lib/seo/business';
import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { GUIDE_FAQS } from '@/data/guide-faqs';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { blogDescription, blogTitle } from '@/lib/seo/blog';

// Render this guide at build time so the route is served as static HTML and
// cannot fall back to a per-request render.
export const dynamic = 'force-static';
export const revalidate = false;
export const fetchCache = 'force-cache';

const TITLE = 'Digital Marketing Cost in Canada 2026: Real CAD Ranges';
const KEYWORD = 'Digital Marketing Cost';
const SUMMARY = 'A transparent breakdown of digital marketing costs across every channel in Canada for 2026, so you can budget wisely and avoid overpaying or underspending.';
const DESCRIPTION = 'Digital marketing cost in Canada for 2026: real CAD ranges for SEO, Google Ads, social media and content, plus the factors that move your quote and budget.';
const META_TITLE = blogTitle(TITLE, KEYWORD, SUMMARY);
const META_DESCRIPTION = blogDescription(DESCRIPTION, SUMMARY);
const SLUG = 'digital-marketing-cost-canada';
const DATE = '2026-03-10';

export const metadata: Metadata = {
  title: seoTitle(META_TITLE),
  description: META_DESCRIPTION,
  openGraph: {
    title: ogTitle(META_TITLE),
    description: META_DESCRIPTION,
    type: 'article',
    publishedTime: DATE,
    url: `https://mapletechlabs.ca/blog/${SLUG}`,
  },
  alternates: {
    canonical: canonicalUrl(`/blog/${SLUG}`),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: DATE,
  dateModified: '2026-03-14',
  author: BLOG_AUTHOR,
  image: BLOG_IMAGE,
  publisher: {
    '@type': 'Organization',
    '@id': 'https://mapletechlabs.ca/#organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mapletechlabs.ca/logo.png',
    },
  },
  url: `https://mapletechlabs.ca/blog/${SLUG}`,
  mainEntityOfPage: `https://mapletechlabs.ca/blog/${SLUG}`,
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(TITLE, SLUG)} />
      <FaqSchema faqs={GUIDE_FAQS['digital-marketing-cost-canada']} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
