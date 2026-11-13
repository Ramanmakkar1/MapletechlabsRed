import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const NAME = 'Enterprise E-Commerce Platform';
const TITLE = 'E-Commerce Platform Case Study: 3x Revenue Growth';
const DESCRIPTION = 'Mapletech Labs built a high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.';
const SLUG = 'ecommerce-platform';
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
  headline: 'Enterprise E-Commerce Platform - Case Study',
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
    { '@type': 'Service', name: 'E-Commerce Systems', url: 'https://mapletechlabs.ca/services/web-development/ecommerce-systems' },
    { '@type': 'Service', name: 'Web Development', url: 'https://mapletechlabs.ca/services/web-development' },
    { '@type': 'Service', name: 'Web Development in Edmonton', url: 'https://mapletechlabs.ca/locations/web-development-company-in-edmonton' },
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
