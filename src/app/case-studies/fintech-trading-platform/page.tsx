import { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { caseStudyMedia } from '@/data/media';

const NAME = 'Fintech AI Trading Platform';
const TITLE = 'Fintech Trading Platform Case Study: 99.99% Uptime';
const DESCRIPTION = 'How Mapletech Labs built an AI-powered trading platform that processes 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.';
const SLUG = 'fintech-trading-platform';
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
  headline: 'Fintech AI Trading Platform - Case Study',
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
    { '@type': 'Service', name: 'Web Development', url: 'https://mapletechlabs.ca/services/web-development' },
    { '@type': 'Service', name: 'Cloud & DevOps', url: 'https://mapletechlabs.ca/services/cloud-devops' },
    { '@type': 'Service', name: 'Web Development in Toronto', url: 'https://mapletechlabs.ca/locations/web-development-company-in-toronto' },
    { '@type': 'Service', name: 'Cloud & DevOps in Toronto', url: 'https://mapletechlabs.ca/locations/toronto/cloud-devops' },
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
        aria-label="Case study summary"
        style={{ background: 'var(--surface)', padding: 'clamp(104px, 12vw, 140px) 0 0' }}
      >
        <div className="cb-container" style={{ maxWidth: 840 }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 16 }}>
            AI trading platform case study: 50K+ daily transactions at 99.99% uptime
          </h2>
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
            Mapletech Labs built an AI-powered trading platform for a Toronto fintech that processes
            50K+ daily transactions with 99.99% uptime. Machine-learning models run on a real-time
            Node.js and AWS backend delivering 50ms average response times and 40% lower
            infrastructure costs.
          </p>
          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 0 }}>
            Read more about our <Link href="/industries/fintech">fintech software development</Link>,{' '}
            <Link href="/services/web-development">web development</Link> and{' '}
            <Link href="/services/cloud-devops">cloud &amp; DevOps</Link> services, or{' '}
            <Link href="/contact">contact us</Link> to discuss a similar build.
          </p>
        </div>
      </section>
      <PageClient />
    </>
  );
}
