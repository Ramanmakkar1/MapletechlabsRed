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
import ToolServiceCta from '@/components/ToolServiceCta';

const TITLE = 'SR&ED Tax Credit Estimator (Canada)';
const DESCRIPTION = 'Free SR&ED tax credit estimator for Canadian software teams. Enter salaries, contractors and materials to see a rough federal and provincial credit range.';
const URL = canonicalUrl('/tools/sred-estimator');

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
    q: 'What counts as eligible software work?',
    a: 'Work that tries to resolve a technological uncertainty through systematic investigation, such as testing new approaches when standard tools or known methods cannot meet a performance, scale or accuracy goal. Routine development, like using a framework as intended, UI design or ordinary bug fixing, usually does not qualify.',
  },
  {
    q: 'What is the difference between the proxy and traditional methods?',
    a: 'With the proxy method you do not track overhead. Instead you add a prescribed proxy amount, based on eligible salaries, to your claim. With the traditional method you claim the actual overhead costs directly tied to the SR&ED work. The proxy method is simpler; which one gives a better result depends on your costs.',
  },
  {
    q: 'When is the money paid?',
    a: 'You claim after your tax year ends by filing Form T661 with your corporate tax return, generally within 18 months of the year end. Refundable credits are paid after the CRA processes the claim, which can take longer if it is reviewed. Non-refundable credits reduce tax owing instead of being paid out.',
  },
  {
    q: 'Do I need an SR&ED consultant?',
    a: 'No, you can file a claim yourself. Many companies work with their accountant or a specialist to write the technical project descriptions and check eligible costs. Some consultants charge a share of the credit, so compare fees and ask exactly what they will do before signing.',
  },
];

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SR&ED Tax Credit Estimator',
  url: URL,
  description: DESCRIPTION,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
  publisher: { '@type': 'Organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca' },
};

const h2: CSSProperties = { fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: 20 };
const p: CSSProperties = { fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 };

export default function SredEstimatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Tools', item: canonicalUrl('/tools') },
        { position: 3, name: 'SR&ED Estimator', item: URL },
      ]} />
      <FaqSchema faqs={FAQS} />
      <Navbar />
      <main>
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'SR&ED Estimator' }]} />
            <h1 style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px', maxWidth: 840,
            }}>
              SR&amp;ED Tax Credit Estimator
            </h1>
            <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48 }}>
              Enter your R&amp;D costs and get a rough range for the federal SR&amp;ED credit, plus an optional provincial
              credit, in Canadian dollars. Free, no sign-up.
            </p>

            <EstimatorClient />

            <ToolServiceCta
              title="Planning software R&D in Canada?"
              copy="Learn how SR&ED tax incentives apply to software development or explore our custom SaaS builds."
              links={[
                { href: '/services/saas-development', label: 'SaaS Development Services' },
                { href: '/blog/sred-software-development-canada', label: 'SR&ED Software Development Guide' },
              ]}
            />

            <div style={{ maxWidth: 820, marginTop: 48 }}>
              <h2 style={h2}>How we calculate this</h2>
              <p style={p}>
                Qualified spend is your eligible salaries, plus 80% of arm&apos;s-length contractor costs, plus materials.
                With the proxy method on, we add an overhead amount equal to 55% of eligible salaries. A CCPC earns 35% on
                qualified spend up to the expenditure limit and 15% above it. Other corporations earn 15%, which is
                non-refundable.
              </p>
              <p style={p}>
                The provincial credit uses the rate you enter. The result is shown as a range from 70% to 100% of the full
                figure, because the CRA may disallow part of a claim. Rates and limits change, so check CRA&apos;s current
                figures with your accountant.
              </p>

              <h2 style={{ ...h2, marginTop: 48 }}>Next step</h2>
              <p style={p}>
                If this R&amp;D is part of a larger build, the next step is to scope it with an engineering team. Our{' '}
                <Link href="/services" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>software development services in Canada</Link>{' '}
                cover custom software and SaaS products, and we can help you plan the work so your SR&amp;ED claim reflects
                real, eligible development.
              </p>

              <h2 style={{ ...h2, marginTop: 48 }}>Frequently asked questions</h2>
              {FAQS.map(f => (
                <div key={f.q} style={{ borderTop: '1px solid var(--line)', padding: '20px 0' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>{f.q}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{f.a}</p>
                </div>
              ))}
              <p style={{ ...p, borderTop: '1px solid var(--line)', paddingTop: 20 }}>
                Also see: <Link href="/blog/nrc-irap-funding-software-canada" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>IRAP funding guide</Link>, which
                explains how government assistance affects your SR&amp;ED claim, and our{' '}
                <Link href="/blog/sred-software-development-canada" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>SR&amp;ED guide for software teams</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
