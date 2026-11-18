import Link from 'next/link';
import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { caseStudyMedia } from '@/data/media';

const NAME = 'PCI DSS Payments API';
const TITLE = 'PCI DSS Payments API Case Study: 12M Transactions a Month';
const DESCRIPTION = 'How Mapletech Labs built PayBridge Solutions\' PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.';

const SLUG = 'payments-api-platform';
const DATE = '2026-03-14';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
  datePublished: DATE,
  dateModified: '2026-11-12',
  image: `https://mapletechlabs.ca${caseStudyMedia[SLUG].src}`,
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
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="text-2xl font-bold">
          Mapletech Labs Built PayBridge Solutions&rsquo; PCI DSS Payments API
        </h2>
        <p className="mt-4">
          Mapletech Labs built PayBridge Solutions&rsquo; PCI DSS payments API for Ottawa,
          processing 12M+ monthly transactions. The tokenization-first architecture passed a
          PCI DSS Level 1 audit with zero findings, delivering 100ms average latency, 99.97%
          uptime and zero data breaches.
        </p>
        <p className="mt-4">
          Explore our related work:{' '}
          <Link className="underline" href="/services/web-development/api-backend">
            API &amp; backend development
          </Link>
          ,{' '}
          <Link className="underline" href="/services/saas-development">
            SaaS development
          </Link>
          ,{' '}
          <Link
            className="underline"
            href="/locations/software-development-company-in-ottawa"
          >
            Ottawa software development
          </Link>{' '}
          and{' '}
          <Link className="underline" href="/contact">
            contact us
          </Link>{' '}
          to start your own payments project.
        </p>
      </section>
      <PageClient />
    </>
  );
}
