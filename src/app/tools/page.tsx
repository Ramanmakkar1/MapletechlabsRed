import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'Free Software Planning Tools (Canada)';
const DESCRIPTION = 'Free tools for Canadian businesses planning software: estimate your app or website cost in CAD and get a rough SR&ED tax credit range for your R&D work.';
const URL = canonicalUrl('/tools');

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

const TOOLS = [
  {
    name: 'App & Software Cost Estimator',
    href: '/tools/cost-estimator',
    description: 'Pick a website, web app, SaaS or mobile app and the features you need. Get a ballpark price in CAD and a rough timeline.',
  },
  {
    name: 'SR&ED Tax Credit Estimator',
    href: '/tools/sred-estimator',
    description: 'Enter your eligible salaries, contractor costs and materials. See a rough range for the federal SR&ED credit and an optional provincial credit.',
  },
];

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: TITLE,
  url: URL,
  itemListElement: TOOLS.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    url: canonicalUrl(t.href),
  })),
};

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Tools', item: URL },
      ]} />
      <Navbar />
      <main>
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tools' }]} />
            <h1 style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px', maxWidth: 840,
            }}>
              Free Tools
            </h1>
            <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48 }}>
              Quick calculators to help you plan a software project in Canada. Free, no sign-up.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {TOOLS.map(t => (
                <Link key={t.href} href={t.href} style={{
                  display: 'block', border: '1px solid var(--line)', borderRadius: 20, padding: 28,
                  background: 'var(--surface-alt)', textDecoration: 'none',
                }}>
                  <h2 style={{ fontSize: 22, fontWeight: 600, color: 'var(--ink)', margin: '0 0 10px' }}>{t.name}</h2>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 16px' }}>{t.description}</p>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--brand)' }}>Open the tool →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
