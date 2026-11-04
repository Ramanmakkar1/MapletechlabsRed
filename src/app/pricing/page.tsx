import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import CTASection from '@/components/CTASection';
import { PROJECT_PRICING } from '@/data/pricing';
import { serviceCityPath, isIndexableCityService } from '@/data/serviceCity';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'Pricing & Engagement Models (CAD)';
const DESCRIPTION = 'Explore typical Canadian website, web app, SaaS, mobile and AI project ranges in CAD, engagement models, and ways to manage software development costs.';
const URL = canonicalUrl('/pricing');
const FAQS = [
  { q: 'Are these prices quotes?', a: 'No. These are typical ballpark ranges in CAD. A project estimate depends on the agreed scope, requirements and delivery plan.' },
  { q: 'Why does the price range vary?', a: 'Projects differ in screens, business rules, integrations, platform choices, design polish and testing needs. A focused build sits toward the lower end; broader requirements move it higher.' },
  { q: 'What affects software development cost most?', a: 'Scope and platform usually have the biggest effect. Native apps for both iOS and Android, AI features and multiple third-party integrations can add substantial work.' },
  { q: 'Can we start with an MVP?', a: 'Yes. Prioritising the core user journey and deferring secondary features can reduce the initial scope and leave room to learn before expanding.' },
  { q: 'Do prices differ between Edmonton, Calgary, Toronto, Vancouver, Ottawa and Montreal?', a: 'No. We quote the same CAD ranges in every city, because projects are run from our Edmonton headquarters with a remote team. Scope, platform and integrations decide the price, not your location.' },
  { q: 'Can SR&ED lower the net cost?', a: 'Eligible Canadian businesses may be able to claim qualifying development work through SR&ED. Eligibility and amounts depend on the work and company; review the details with a qualified tax professional.' },
];
const cad = (amount: number) => `$${amount.toLocaleString('en-CA')}`;
const PRICING_CITIES = [
  { slug: 'edmonton', name: 'Edmonton' },
  { slug: 'calgary', name: 'Calgary' },
  { slug: 'toronto', name: 'Toronto' },
  { slug: 'vancouver', name: 'Vancouver' },
  { slug: 'ottawa', name: 'Ottawa' },
  { slug: 'montreal', name: 'Montreal' },
] as const;
const CITY_SERVICES = [
  { slug: 'mobile-app-development', label: 'App development' },
  { slug: 'ai-ml', label: 'AI development' },
  { slug: 'web-development', label: 'Web development' },
] as const;

export const metadata: Metadata = {
  title: seoTitle(TITLE), description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'website' },
  alternates: { canonical: URL },
};

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 20px' };
const p = { fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 16px' };

export default function PricingPage() {
  return <>
    <BreadcrumbSchema items={[{ position: 1, name: 'Home', item: canonicalUrl('/') }, { position: 2, name: 'Pricing', item: URL }]} />
    <FaqSchema faqs={FAQS} />
    <Navbar />
    <main>
      <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
        <div className="cb-container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} />
          <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px', maxWidth: 840 }}>{TITLE}</h1>
          <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48 }}>{DESCRIPTION}</p>
          <section style={{ marginBottom: 64 }}>
            <h2 style={h2}>Typical project ranges</h2>
            <p style={p}>Ballpark project ranges in Canadian dollars and typical delivery timeframes.</p>
            <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead><tr>{['Project type', 'Typical range (CAD)', 'Typical timeline', 'Cost guide'].map(x => <th key={x} style={{ padding: 14, borderBottom: '1px solid var(--line)', color: 'var(--ink)' }}>{x}</th>)}</tr></thead>
              <tbody>{Object.values(PROJECT_PRICING).map(item => <tr key={item.label}>
                <th scope="row" style={{ padding: 14, borderBottom: '1px solid var(--line)', color: 'var(--ink)' }}>{item.serviceHref ? <Link href={item.serviceHref}>{item.label}</Link> : item.label}</th>
                <td style={{ padding: 14, borderBottom: '1px solid var(--line)', color: 'var(--body)' }}>{cad(item.low)}–{cad(item.high)}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--line)', color: 'var(--body)' }}>{item.weeksLow}–{item.weeksHigh} weeks</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--line)', color: 'var(--body)' }}>{item.guideHref ? <Link href={item.guideHref} aria-label={`Read the ${item.label} cost guide`}>Read guide</Link> : '—'}</td>
              </tr>)}</tbody>
            </table></div>
            <p style={{ ...p, marginTop: 18 }}>For a tailored ballpark, try the <Link href="/tools/cost-estimator">cost estimator</Link>. Read more about <Link href="/blog/app-development-cost-canada">app development costs in Canada</Link>, <Link href="/blog/saas-development-cost-canada">SaaS development costs</Link>, and <Link href="/blog/website-cost-canada">website costs</Link>.</p>
          </section>
          <section style={{ marginBottom: 64 }}><h2 style={h2}>Engagement models</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                ['Fixed-scope project', 'Fits a defined set of features, deliverables and acceptance criteria.', 'Billing follows the agreed project scope and milestones. Changes to scope are reviewed and agreed before work proceeds.'],
                ['Monthly dedicated team', 'Fits ongoing product development where priorities evolve and a consistent team is useful.', 'The team is engaged month to month against an agreed capacity and regular planning and delivery cadence.'],
                ['Discovery sprint', 'Fits an early idea or complex project that needs clearer requirements before committing to a build.', 'A short, defined discovery engagement is scoped and billed separately, producing agreed planning outputs for the next decision.'],
              ].map(([name, fit, billing]) => <article key={name} style={{ padding: 22, border: '1px solid var(--line)', borderRadius: 16 }}><h3 style={{ color: 'var(--ink)', marginTop: 0 }}>{name}</h3><p style={p}><strong>Fits:</strong> {fit}</p><p style={{ ...p, marginBottom: 0 }}><strong>Billing:</strong> {billing}</p></article>)}
            </div>
            <p style={{ ...p, marginTop: 18 }}>Comparing contract terms? Our <Link href="/blog/software-development-contract-canada">software development contracts guide</Link> explains fixed price vs time and materials, who owns the code and what to check before you sign.</p>
            <p style={p}>Planning for life after launch? Our <Link href="/blog/software-maintenance-cost-canada">software maintenance cost guide</Link> covers typical monthly ranges and retainer options.</p>
          </section>
          <section style={{ marginBottom: 64 }}><h2 style={h2}>Pricing by city</h2>
            <p style={p}>Mapletech Labs quotes the same CAD ranges for every Canadian city. Projects are run from our Edmonton headquarters with a remote team, so a build for a client in Calgary, Toronto, Vancouver, Ottawa or Montreal is priced the same way as one in Edmonton: by scope, platform and integrations.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {PRICING_CITIES.map(c => <article key={c.slug} style={{ padding: 22, border: '1px solid var(--line)', borderRadius: 16 }}>
                <h3 style={{ color: 'var(--ink)', marginTop: 0 }}><Link href={`/locations/software-development-company-in-${c.slug}`}>Software development in {c.name}</Link></h3>
                <ul style={{ ...p, paddingLeft: 20, marginBottom: 0 }}>{CITY_SERVICES.filter(s => isIndexableCityService(c.slug, s.slug)).map(s => <li key={s.slug}><Link href={serviceCityPath(s.slug, c.slug)}>{s.label} in {c.name}</Link></li>)}</ul>
              </article>)}
            </div>
          </section>
          <section style={{ marginBottom: 64 }}><h2 style={h2}>What changes the price</h2>
            <p style={p}>Scope, platform, business rules, integrations and quality requirements all shape the effort. More screens, edge cases, custom design and testing increase the work. Building for multiple platforms or connecting several external systems can also shift a project toward the higher end. Compare details in our <Link href="/blog/app-development-cost-canada">app</Link>, <Link href="/blog/saas-development-cost-canada">SaaS</Link> and <Link href="/blog/website-cost-canada">website</Link> cost guides.</p>
          </section>
          <section style={{ marginBottom: 64 }}><h2 style={h2}>Ways to lower cost</h2>
            <ul style={{ ...p, paddingLeft: 22 }}><li><strong>Start with an MVP:</strong> focus first on the core user journey, then prioritise additions using what you learn.</li><li><strong>Consider cross-platform:</strong> a shared mobile codebase may suit products targeting both iOS and Android.</li><li><strong>Explore SR&amp;ED:</strong> qualifying development work may be eligible for Canadian tax credits. <Link href="/blog/sred-tax-credit-software-development">Learn about the SR&amp;ED tax credit</Link>.</li></ul>
          </section>
          <section style={{ marginBottom: 64 }}><h2 style={h2}>Pricing FAQs</h2>{FAQS.map(f => <article key={f.q} style={{ borderBottom: '1px solid var(--line)', padding: '18px 0' }}><h3 style={{ color: 'var(--ink)', margin: '0 0 8px' }}>{f.q}</h3><p style={{ ...p, margin: 0 }}>{f.a}</p></article>)}</section>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>;
}
