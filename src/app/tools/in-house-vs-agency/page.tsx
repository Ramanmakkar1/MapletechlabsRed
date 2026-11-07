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
import CalculatorClient from './CalculatorClient';
import ToolServiceCta from '@/components/ToolServiceCta';

const TITLE = 'In-House vs Agency Dev Cost Calculator';
const DESCRIPTION = 'Free calculator for Canadian businesses: compare the fully loaded cost of in-house developers, including hiring time, with an agency project range in CAD.';
const URL = canonicalUrl('/tools/in-house-vs-agency');

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
    q: 'What does "fully loaded" developer cost mean?',
    a: 'It is the base salary plus everything else the employer pays to keep that person working: employer payroll contributions, health benefits, equipment, software licences and the one-time cost of recruiting. It is the number to compare with an agency quote, not the salary alone.',
  },
  {
    q: 'Which employer payroll costs apply in Canada?',
    a: 'Employers usually pay their share of CPP and EI contributions, and many also offer health and dental benefits. Some provinces add their own payroll taxes or plans. Rates and maximums change every year, so check the current CRA figures and ask your accountant for the right percentage for your business.',
  },
  {
    q: 'Why count the months spent hiring and ramping up?',
    a: 'A new team is rarely productive on day one. Finding developers, onboarding them and getting them up to speed on your product can take months, and during that time the project is not moving forward. The calculator counts those months at the full team cost so you can see what the delay may cost.',
  },
  {
    q: 'Is an agency always cheaper for a single project?',
    a: 'No. For short, well-defined projects an agency often costs less overall because you skip hiring and ramp-up. For long-running products that need constant work, an in-house team can cost less over time and keeps the knowledge inside your company. Use the calculator with your own numbers to see where your project falls.',
  },
];

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'In-House vs Agency Developer Cost Calculator',
  url: URL,
  description: DESCRIPTION,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
  publisher: { '@type': 'Organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca' },
};

const h2: CSSProperties = { fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: 20 };
const h3: CSSProperties = { fontSize: 18, fontWeight: 600, color: 'var(--ink)', margin: '24px 0 8px' };
const p: CSSProperties = { fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 };
const ul: CSSProperties = { ...p, paddingLeft: 22 };
const a: CSSProperties = { color: 'var(--brand)', fontWeight: 600 };

export default function InHouseVsAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Tools', item: canonicalUrl('/tools') },
        { position: 3, name: 'In-House vs Agency Calculator', item: URL },
      ]} />
      <FaqSchema faqs={FAQS} />
      <Navbar />
      <main>
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'In-House vs Agency Calculator' }]} />
            <h1 style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px', maxWidth: 840,
            }}>
              In-House vs Agency Developer Cost Calculator
            </h1>
            <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48 }}>
              See what hiring your own developers really costs once payroll, recruiting, equipment and hiring time are
              added, and compare it with a typical agency range for the same project. Amounts in CAD. Free, no sign-up.
            </p>

            <CalculatorClient />

            <ToolServiceCta
              title="Compare delivery models for your project"
              copy="Explore our dedicated SaaS development services or read our Canadian hiring comparison guide."
              links={[
                { href: '/services/saas-development', label: 'SaaS Development Services' },
                { href: '/blog/freelancer-vs-agency-vs-in-house-canada', label: 'Freelancer vs Agency vs In-House Guide' },
              ]}
            />

            <div style={{ maxWidth: 820, marginTop: 48 }}>
              <h2 style={h2}>What a fully loaded developer costs</h2>
              <p style={p}>
                Salary is only the starting point. On top of it, an employer pays its share of CPP and EI contributions,
                usually some health and dental benefits, and a laptop, software licences and tools for each developer.
                Before any of that, there is the cost of finding the person: recruiter fees, job ads and the hours your
                team spends interviewing.
              </p>
              <p style={p}>
                Then there is time. Hiring and onboarding can take months, and a new developer needs time to learn your
                product before they work at full speed. This calculator adds those months at the full team cost. It does
                not include office space, management time or the cost of replacing someone who leaves, so the real figure
                can be higher.
              </p>

              <h2 style={{ ...h2, marginTop: 48 }}>When in-house wins, and when an agency wins</h2>
              <h3 style={h3}>In-house usually wins when</h3>
              <ul style={ul}>
                <li>The software is your core product and needs steady work for years, not months.</li>
                <li>You want the product knowledge to stay inside the company.</li>
                <li>You already have technical leadership to hire, manage and review developers.</li>
                <li>The work is ongoing enough to keep a full team busy every month.</li>
              </ul>
              <h3 style={h3}>An agency usually wins when</h3>
              <ul style={ul}>
                <li>The project has a clear scope and an end date, such as a website, an MVP or a single app.</li>
                <li>You need to start soon and cannot wait months to hire.</li>
                <li>You need several skills (design, front end, back end, QA) for a short time.</li>
                <li>You do not yet have a technical lead to manage an in-house team.</li>
              </ul>
              <p style={p}>
                Many companies mix the two: an agency builds the first version, then an in-house team takes it over. To
                price a specific project, see our <Link href="/pricing" style={a}>pricing</Link>, try the{' '}
                <Link href="/tools/cost-estimator" style={a}>app and software cost estimator</Link>, or read{' '}
                <Link href="/blog/custom-software-vs-off-the-shelf" style={a}>custom software vs off-the-shelf</Link>.
              </p>
              <Link href="/contact" className="btn btn--primary" style={{ marginTop: 8 }}>Talk to us about your project</Link>

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
