import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import EstimatorClient from './EstimatorClient';

const TITLE = 'App & Software Cost Estimator (Canada, CAD)';
const DESCRIPTION = 'Free cost estimator for websites, web apps, SaaS and mobile apps in Canada. Pick your features and get a ballpark CAD range and timeline in seconds.';
const URL = canonicalUrl('/tools/cost-estimator');

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  alternates: { canonical: URL },
};

const FAQS = [
  {
    q: 'Is this a quote?',
    a: 'No. The estimator gives a ballpark range based on typical Canadian project costs. A real quote needs a short call about your features, users and deadlines, and it is free.',
  },
  {
    q: 'Why such a wide range?',
    a: 'Two projects with the same label can differ a lot in screens, business rules, integrations and polish. The low end is a lean build with few custom parts; the high end covers more features, edge cases and testing.',
  },
  {
    q: 'Does SR&ED reduce the cost?',
    a: 'Often, yes. The SR&ED tax credit can reimburse 35-64% of eligible development costs after the work is done. The estimate shows the price before any credits, since eligibility depends on your company and project.',
  },
  {
    q: 'What changes the price most?',
    a: 'Scope and platform. Building native apps for both iOS and Android, adding AI features, or connecting many third-party systems moves the price the most. Starting with a focused MVP is the easiest way to lower it.',
  },
];

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'App & Software Cost Estimator',
  url: URL,
  description: DESCRIPTION,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
  publisher: { '@type': 'Organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca' },
};

const h2: CSSProperties = { fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: 20 };
const p: CSSProperties = { fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 };

export default function CostEstimatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Tools', item: URL },
        { position: 3, name: 'Cost Estimator', item: URL },
      ]} />
      <FaqSchema faqs={FAQS} />
      <Navbar />
      <main>
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Cost Estimator' }]} />
            <h1 style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px', maxWidth: 840,
            }}>
              App &amp; Software Cost Estimator
            </h1>
            <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48 }}>
              Pick what you want to build and get a ballpark price in Canadian dollars, plus a rough timeline. Free, no sign-up.
            </p>

            <EstimatorClient />

            <div style={{ maxWidth: 820, marginTop: 'var(--section-y)' }}>
              <h2 style={h2}>How we calculate this</h2>
              <p style={p}>
                Each project type starts from the base range in our Canadian cost guides: custom websites, web apps,
                SaaS MVPs, and iOS, Android or cross-platform mobile apps. Each add-on adds a fixed CAD amount for the
                extra design, build and testing work. Complexity then scales the total (MVP ×0.8, standard ×1, complex ×1.4),
                and a rush timeline adds about 25% for a larger team working in parallel.
              </p>
              <p style={p}>
                The ranges cover design, development, QA and launch. They do not include ongoing hosting, maintenance or
                marketing, or any SR&amp;ED tax credits you may claim back.
              </p>

              <h2 style={{ ...h2, marginTop: 48 }}>Frequently asked questions</h2>
              {FAQS.map(f => (
                <div key={f.q} style={{ borderTop: '1px solid var(--line)', padding: '20px 0' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>{f.q}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{f.a}</p>
                  {f.q === 'Does SR&ED reduce the cost?' && (
                    <Link href="/tools/sred-estimator" style={{ display: 'inline-block', marginTop: 8, fontSize: 16, fontWeight: 600, color: 'var(--brand)', textDecoration: 'none' }}>
                      Estimate your SR&amp;ED credit →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
