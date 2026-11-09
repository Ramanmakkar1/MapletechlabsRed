import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const NAME = 'Logistics & Fleet Platform';
const TITLE = 'Logistics Platform: 15K+ Daily Deliveries';
const DESCRIPTION = 'How Mapletech Labs built a real-time logistics platform handling 15K+ daily deliveries with 25% fuel savings and 98% on-time delivery rate.';
const SLUG = 'logistics-platform';
const DATE = '2026-03-14';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Mapletech Labs`,
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
  dateModified: DATE,
  author: {
    '@type': 'Organization',
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
