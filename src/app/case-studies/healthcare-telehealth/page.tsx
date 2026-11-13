import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const NAME = 'HIPAA-Compliant Telehealth Platform';
const TITLE = 'Telehealth Platform Case Study: 200K+ Patient Sessions';
const DESCRIPTION = 'Mapletech Labs built a HIPAA-compliant telehealth platform with 200K+ patient sessions and 99.97% uptime for a leading Canadian healthcare provider.';
const SLUG = 'healthcare-telehealth';
const DATE = '2026-03-14';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: `https://mapletechlabs.ca/case-studies/${SLUG}`,
    type: 'article',
  },
  alternates: {
    canonical: canonicalUrl(`/case-studies/${SLUG}`),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'HIPAA-Compliant Telehealth Platform - Case Study',
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
    { '@type': 'Service', name: 'Mobile App Development', url: 'https://mapletechlabs.ca/services/mobile-app-development' },
    { '@type': 'Service', name: 'Web Development', url: 'https://mapletechlabs.ca/services/web-development' },
    { '@type': 'Service', name: 'App Development in Calgary', url: 'https://mapletechlabs.ca/locations/app-development-company-in-calgary' },
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
