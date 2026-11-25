import { BLOG_AUTHOR, BLOG_IMAGE } from '@/lib/seo/business';
import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Web Development Companies in Toronto: How to Choose';
const DESCRIPTION = 'Web development companies in Toronto for 2026: compare services, experience and track records, then use our hiring checklist to choose the right partner.';
const SLUG = 'web-development-companies-toronto';
const DATE = '2026-02-19';

const H1 = 'Top 10 Web Development Companies in Toronto (2026)';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    type: 'article',
    publishedTime: DATE,
    url: `https://mapletechlabs.ca/blog/${SLUG}`,
  },
  alternates: {
    canonical: canonicalUrl(`/blog/${SLUG}`),
  },
  robots: {
    index: false,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': 'https://mapletechlabs.ca/blog/web-development-companies-toronto#article',
  headline: H1,
  description: DESCRIPTION,
  datePublished: DATE,
  dateModified: '2026-11-10',
  author: BLOG_AUTHOR,
  image: BLOG_IMAGE,
  isPartOf: { '@id': 'https://mapletechlabs.ca/#website' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
