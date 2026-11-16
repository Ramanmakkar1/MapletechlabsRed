import { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { caseStudyMedia } from '@/data/media';

const NAME = 'Logistics & Fleet Platform';
// Rendered with brand: "Logistics Platform: 15K+ Deliveries a Day | Mapletech Labs" (59 chars).
// Keyword-first ("Logistics Platform") and keeps the 15K+ daily deliveries result within 60 chars.
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
    description: seoDescription(DESCRIPTION),
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
      <section
        aria-labelledby="logistics-summary-heading"
        style={{ maxWidth: 840, margin: '0 auto', padding: '48px 24px 0' }}
      >
        <h2
          id="logistics-summary-heading"
          style={{ fontSize: 28, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}
        >
          What Mapletech Labs built for the logistics client
        </h2>
        <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
          Mapletech Labs built a real-time logistics and fleet management platform for a Vancouver
          logistics client, combining IoT fleet tracking, ML-powered route optimization and a live
          operations dashboard. The platform now handles <strong>15K+ daily deliveries</strong> with a{' '}
          <strong>98% on-time rate</strong> and delivers <strong>25% fuel savings</strong>.
        </p>
        <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.7 }}>
          Read more about our{' '}
          <Link href="/industries/logistics" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
            logistics software development
          </Link>{' '}
          work, our{' '}
          <Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
            web development services
          </Link>
          , or{' '}
          <Link href="/contact" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
            contact Mapletech Labs
          </Link>{' '}
          to discuss a similar platform.
        </p>
      </section>
      <PageClient />
    </>
  );
}
