import { BLOG_AUTHOR } from '@/lib/seo/business';
import { Metadata } from 'next';
import PageClient from './PageClient';
import LocalServiceLinks from '@/components/LocalServiceLinks';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';

const TITLE = 'Web Development Companies in Toronto 2026';
const DESCRIPTION = 'Web development companies in Toronto for 2026, compared by services and track record, plus a checklist for choosing the right team and questions to ask.';
const SLUG = 'web-development-companies-toronto';
const DATE = '2026-02-19';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: ogTitle(TITLE),
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
  dateModified: '2026-02-26',
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
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(TITLE, SLUG)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient localLinks={<LocalServiceLinks citySlug="toronto" cityName="Toronto" />} />
    </>
  );
}
