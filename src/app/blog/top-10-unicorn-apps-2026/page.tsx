import { BLOG_AUTHOR } from '@/lib/seo/business';
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Unicorn Apps 2026: Top 10 Growth Stories for Founders';
const DESCRIPTION =
  'Top 10 unicorn apps of 2026: see how NovaPay, LoomAI and other $1B+ apps grew, which product choices drove it, and the lessons Canadian founders can use.';
const SLUG = 'top-10-unicorn-apps-2026';
const DATE = '2026-01-15';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
  dateModified: '2026-01-22',
  author: BLOG_AUTHOR,
  publisher: {
    '@type': 'Organization',
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
  const breadcrumbs = getBlogBreadcrumbs(TITLE, SLUG);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
