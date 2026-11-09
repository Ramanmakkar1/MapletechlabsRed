import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema, ServiceSchema } from '@/components/ServiceSchema';
import CTASection from '@/components/CTASection';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Software Discovery Sprint for Product Teams';
const OG_TITLE = `${TITLE} | Mapletech Labs`;
const DESCRIPTION =
  'A software discovery sprint turns an early product idea into clear requirements, user flows, technical risks and a phased scope you can price and build.';
const URL = canonicalUrl('/services/software-discovery');

const FAQS = [
  {
    q: 'What is a software discovery sprint?',
    a: 'A software discovery sprint is a short, focused planning engagement. We work with your team to understand the product goal, interview stakeholders, document requirements and user flows, surface technical risks and agree a phased scope before a build is committed.',
  },
  {
    q: 'When is discovery worth doing?',
    a: 'Discovery helps when the idea is early, the requirements are unclear, several stakeholders need to agree, or the technical approach carries real risk. It is usually less useful when the scope is already small, well documented and ready to build.',
  },
  {
    q: 'What do we receive at the end of a discovery sprint?',
    a: 'The outputs are agreed with you at the start. They can include a requirements document, user flows, a prioritised backlog, a phased scope, a technical risk register and a delivery plan that a development team can estimate from.',
  },
  {
    q: 'How long does a discovery sprint take?',
    a: 'Duration depends on the number of stakeholders, how much information already exists and how complex the technical questions are. We agree the working sessions and outputs before the sprint starts and do not promise a fixed timeline before we understand the scope.',
  },
  {
    q: 'Does discovery lock us into a build with Mapletech Labs?',
    a: 'No. The purpose of discovery is to give you an informed basis for the next decision. Some clients continue into delivery with us, and others use the outputs with an internal team or another partner.',
  },
  {
    q: 'How does discovery connect to the rest of the project?',
    a: 'Discovery feeds directly into delivery. The agreed scope, user flows and technical decisions become the starting point for build planning, so the team spends less time reworking unclear requirements once development starts.',
  },
];

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 20px' };
const p = { fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 16px' };
const card = { padding: 22, border: '1px solid var(--line)', borderRadius: 16 };
const cardTitle = { color: 'var(--ink)', marginTop: 0, fontSize: 18 };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  alternates: {
    canonical: URL,
  },
};

export default function SoftwareDiscoveryPage() {
  return (
    <>
      <ServiceSchema
        name="Software Discovery Sprint"
        description="A focused software discovery sprint that turns an early product idea into clear requirements, user flows, technical risks and a phased scope."
        url={URL}
        serviceType="Software Discovery"
      />
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'Services', item: canonicalUrl('/services') },
          { position: 3, name: 'Software Discovery', item: URL },
        ]}
      />
      <FaqSchema faqs={FAQS} />
      <Navbar />
      <main id="main-content">
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Software Discovery' }]} />
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px', maxWidth: 860 }}>
              Software Discovery Sprint
            </h1>
            <p style={{ ...p, fontSize: 20, lineHeight: 1.65, maxWidth: 760 }}>
              A software discovery sprint is a short, focused planning engagement that turns an early product idea into clear requirements, user flows, technical risks and a phased scope. It gives you an informed basis for deciding what to build, what to defer and how to budget before a development team commits to delivery.
            </p>
            <p style={{ ...p, maxWidth: 760 }}>
              Mapletech Labs runs discovery sprints for startups and established teams across Canada from our Edmonton base. The work is practical: we ask the questions a build team would ask, document the answers and leave you with planning outputs you can act on. See our <Link href="/pricing">pricing and engagement models</Link> for how discovery is scoped and billed.
            </p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>When a discovery sprint helps</h2>
            <p style={p}>Discovery is most useful when the cost of guessing is higher than the cost of planning. It tends to fit these situations:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                ['The idea is still early', 'You know the problem you want to solve but the product, users and first release are not yet defined.'],
                ['Stakeholders disagree', 'Several people have different views on priorities, features or what success looks like, and those views need to be aligned.'],
                ['Requirements are unclear', 'The feature list exists, but the business rules, edge cases and user journeys are not documented well enough to estimate.'],
                ['The technical risk is high', 'Integrations, data, compliance, security or platform choices need investigation before the build approach is fixed.'],
                ['A budget needs defending', 'You need a phased scope and delivery plan before asking for approval or committing to a development partner.'],
              ].map(([title, desc]) => (
                <article key={title} style={card}>
                  <h3 style={cardTitle}>{title}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>Typical discovery activities</h2>
            <p style={p}>The exact mix depends on your product, but a discovery sprint usually includes the following activities.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                ['Stakeholder interviews', 'We speak with the people who own the problem, the budget and the day-to-day process to understand goals, constraints and what has already been tried.'],
                ['Requirements definition', 'We turn the conversation into written requirements: what the product must do, for whom, and how success will be judged.'],
                ['User flows', 'We map the main journeys end to end, including the steps, decisions and edge cases that often get missed in a feature list.'],
                ['Technical risk review', 'We look at integrations, data sources, platform choices, security and existing systems to identify the risks that could change scope or cost.'],
                ['Phased scope', 'We split the product into a sensible first release and later phases so the team can start with the highest-value work.'],
              ].map(([title, desc]) => (
                <article key={title} style={card}>
                  <h3 style={cardTitle}>{title}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>What you receive</h2>
            <p style={p}>Outputs are agreed before the sprint begins, so there are no surprises about what is delivered. A typical discovery package includes:</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li>A written requirements document and agreed scope boundaries.</li>
              <li>User flows and notes on the main edge cases.</li>
              <li>A prioritised feature list or backlog for the first release.</li>
              <li>A technical risk register with recommended next steps.</li>
              <li>A phased delivery plan and an estimate basis your team can review.</li>
            </ul>
            <p style={p}>
              These outputs are useful whether you continue with Mapletech Labs or take the plan to another team.
            </p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>How discovery connects to delivery</h2>
            <p style={p}>
              Discovery is the bridge between an idea and a build. The agreed requirements, user flows and technical decisions become the starting point for delivery planning, so the development team is not reworking unclear assumptions after work has started. If you continue with us, the discovery outputs feed into the relevant delivery service, whether that is <Link href="/services/web-development">web development</Link>, <Link href="/services/saas-development">SaaS development</Link>, <Link href="/services/mobile-app-development">mobile app development</Link> or <Link href="/services/ai-ml">AI and machine learning development</Link>.
            </p>
            <p style={p}>
              If you choose another partner or an internal team, the same outputs give them a clear brief to work from. Discovery is a planning step, not a commitment to a particular vendor.
            </p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>What affects duration and cost</h2>
            <p style={p}>We do not promise a fixed timeline or price before we understand the work. The factors below usually have the biggest effect on how long a discovery sprint takes and what it costs.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><strong>Number of stakeholders and decision makers</strong> involved in interviews and review.</li>
              <li><strong>How much information already exists</strong> in documents, designs, research or an existing system.</li>
              <li><strong>Technical complexity</strong>, including integrations, data migration, security and compliance questions.</li>
              <li><strong>Number of user groups and flows</strong> that need to be mapped and validated.</li>
              <li><strong>How quickly feedback and approvals</strong> can be gathered during the sprint.</li>
            </ul>
            <p style={p}>
              We scope each discovery sprint separately and agree the activities and outputs in advance. For the wider picture, see our <Link href="/pricing">pricing page</Link>.
            </p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>Software discovery FAQ</h2>
            <div style={{ display: 'grid', gap: 16 }}>
              {FAQS.map(faq => (
                <article key={faq.q} style={card}>
                  <h3 style={cardTitle}>{faq.q}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
