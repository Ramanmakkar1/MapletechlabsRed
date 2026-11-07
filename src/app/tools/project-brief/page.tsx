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
import BriefClient from './BriefClient';
import ToolServiceCta from '@/components/ToolServiceCta';

const TITLE = 'Software Project Brief Builder (Free)';
const DESCRIPTION = 'Free tool for Canadian businesses: fill in a short form about your app, website or AI feature and get a clear project brief to copy, download or send.';
const URL = canonicalUrl('/tools/project-brief');

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
    q: 'What should a software project brief include?',
    a: 'The goal of the project, who will use it, the features it must have, the features that can wait, the systems it needs to connect to, the platforms, your budget range and timeline, and any data or privacy rules. That is enough for a development team to give you useful first feedback and a realistic estimate.',
  },
  {
    q: 'Is the information I type stored or sent anywhere?',
    a: 'No. The brief is built in your browser. Nothing is sent to our servers or saved, and the brief only leaves your device if you copy it, download it or paste it into a message yourself.',
  },
  {
    q: 'Why should I separate must-have and nice-to-have features?',
    a: 'It lets the team plan a first version around the features that matter most and price the extras separately. That keeps the first release smaller, faster and cheaper, and you can add the nice-to-have features later.',
  },
  {
    q: 'What if I do not know my budget or timeline yet?',
    a: 'Choose "Not sure yet". A rough range still helps, so you can check the typical ranges on our pricing page or use the cost estimator first. A development team can then suggest what fits within the range you are comfortable with.',
  },
];

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Software Project Brief Builder',
  url: URL,
  description: DESCRIPTION,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
  publisher: { '@type': 'Organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca' },
};

const h2: CSSProperties = { fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: 20 };
const p: CSSProperties = { fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 };
const ul: CSSProperties = { ...p, paddingLeft: 22 };
const a: CSSProperties = { color: 'var(--brand)', fontWeight: 600 };

export default function ProjectBriefPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Tools', item: canonicalUrl('/tools') },
        { position: 3, name: 'Project Brief Builder', item: URL },
      ]} />
      <FaqSchema faqs={FAQS} />
      <Navbar />
      <main>
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Project Brief Builder' }]} />
            <h1 style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px', maxWidth: 840,
            }}>
              Software Project Brief Builder
            </h1>
            <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 720, marginBottom: 32 }}>
              Answer a few questions about your project and get a clear, structured brief you can copy, download or send
              to a development team. Free, no sign-up, and nothing leaves your browser.
            </p>

            <div style={{ maxWidth: 820, marginBottom: 48 }}>
              <h2 style={h2}>How to write a good brief</h2>
              <ul style={ul}>
                <li>Start with the problem and the one result you want, not a list of screens.</li>
                <li>Say who the users are and what they need to get done.</li>
                <li>Split features into must-have and nice-to-have, so the first version stays small.</li>
                <li>Name the systems it must connect to and any privacy rules that apply.</li>
                <li>Give a budget range and timeline, even rough ones. They shape every technical choice.</li>
              </ul>
            </div>

            <BriefClient />

            <ToolServiceCta
              title="Ready to turn your brief into a product?"
              copy="Work with our team on product design and end-to-end SaaS engineering in Canada."
              links={[
                { href: '/services/product-design', label: 'Product Design Services' },
                { href: '/services/saas-development', label: 'SaaS Development Services' },
              ]}
            />

            <div style={{ maxWidth: 820, marginTop: 48 }}>
              <p style={p}>
                Not sure about the budget? Check our <Link href="/pricing" style={a}>pricing</Link> or try the{' '}
                <Link href="/tools/cost-estimator" style={a}>app and software cost estimator</Link> before you send your
                brief.
              </p>

              <h2 style={{ ...h2, marginTop: 48 }}>Frequently asked questions</h2>
              {FAQS.map(f => (
                <div key={f.q} style={{ borderTop: '1px solid var(--line)', padding: '20px 0' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>{f.q}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{f.a}</p>
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
