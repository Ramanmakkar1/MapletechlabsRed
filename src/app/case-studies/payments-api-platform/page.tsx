import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const NAME = 'PCI DSS Payments API';
const TITLE = 'PCI DSS Payments API Case Study: 12M Transactions a Month';
const DESCRIPTION = 'How Mapletech Labs built PayBridge Solutions\' PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.';

const SLUG = 'payments-api-platform';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/case-studies/payments-api-platform',
    type: 'article',
  },
  alternates: { canonical: canonicalUrl('/case-studies/payments-api-platform') },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'PCI DSS Payments API - Case Study',
  description: DESCRIPTION,
  author: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
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
    { '@type': 'Service', name: 'API & Backend Development', url: 'https://mapletechlabs.ca/services/web-development/api-backend' },
    { '@type': 'Service', name: 'SaaS Development', url: 'https://mapletechlabs.ca/services/saas-development' },
    { '@type': 'Service', name: 'SaaS Development in Ottawa', url: 'https://mapletechlabs.ca/locations/saas-development-company-in-ottawa' },
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
