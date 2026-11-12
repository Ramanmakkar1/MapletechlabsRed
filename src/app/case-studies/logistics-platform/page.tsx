import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const NAME = 'Logistics & Fleet Platform';
const TITLE = 'Logistics Platform: 15K+ Deliveries a Day';
const DESCRIPTION = 'Mapletech Labs built a real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time rate. Read the case study.';
const SLUG = 'logistics-platform';
const DATE = '2026-03-14';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: `https://mapletechlabs.ca/case-studies/${SLUG}`,
    type: 'article',
    publishedTime: DATE,
  },
  alternates: {
    canonical: canonicalUrl(`/case-studies/${SLUG}`),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: DATE,
  dateModified: '2026-11-12',
  author: {
    '@type': 'Organization',
    '@id': 'https://mapletechlabs.ca/#organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
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
  about: [
    { '@type': 'Service', name: 'Enterprise Portals', url: 'https://mapletechlabs.ca/services/web-development/enterprise-portals' },
    { '@type': 'Service', name: 'Mobile App Development', url: 'https://mapletechlabs.ca/services/mobile-app-development' },
    { '@type': 'Service', name: 'App Development in Vancouver', url: 'https://mapletechlabs.ca/locations/app-development-company-in-vancouver' },
  ],
  url: `https://mapletechlabs.ca/case-studies/${SLUG}`,
  mainEntityOfPage: `https://mapletechlabs.ca/case-studies/${SLUG}`,
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getCaseStudyBreadcrumbs(NAME, SLUG)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
