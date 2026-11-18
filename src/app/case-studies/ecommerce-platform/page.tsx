import { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { caseStudyMedia } from '@/data/media';

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
      <section
        aria-labelledby="ecommerce-summary-heading"
        style={{ maxWidth: 840, margin: '0 auto', padding: '48px 24px 0' }}
      >
        <h2
          id="ecommerce-summary-heading"
          style={{ fontSize: 28, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}
        >
          What Mapletech Labs built for the ecommerce client
        </h2>
        <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
          Mapletech Labs rebuilt an Edmonton multi-vendor ecommerce platform, tripling revenue and
          serving <strong>2M+ monthly visitors</strong> for a leading Canadian retailer. The
          high-performance storefront combines vendor onboarding, inventory and checkout systems
          built for peak traffic.
        </p>
        <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.7 }}>
          Read more about our{' '}
          <Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
            web development
          </Link>{' '}
          services, our{' '}
          <Link href="/services/web-development/ecommerce-systems" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
            ecommerce systems
          </Link>
          , our{' '}
          <Link href="/locations/web-development-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
            Edmonton web development
          </Link>{' '}
          work, or{' '}
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
