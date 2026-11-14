import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ServiceProof from '@/components/ServiceProof';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import FinalCta from '@/components/home/FinalCta';
import { FaqSchema } from '@/components/ServiceSchema';
import { StatRow, ServicesGrid, ProcessSteps, WhyUs, SuccessStories } from '@/components/page/Blocks';
import PageHero from '@/components/page/PageHero';
import { defaultMedia, officeMedia } from '@/data/media';

const stats = [
  { value: '300+', label: 'Apps delivered' },
  { value: '99.99%', label: 'Uptime on live systems' },
  { value: '75K+', label: 'Daily transactions handled' },
  { value: '450K+', label: 'Patient records supported' },
];

const services = [
  { icon: '01', title: 'Custom Web Applications', desc: 'Customer portals, internal tools and line-of-business systems built around your workflows, with authentication, reporting and integrations included rather than bolted on later.' },
  { icon: '02', title: 'Mobile Applications', desc: 'iOS and Android apps for customer-facing or field workflows, using native or cross-platform builds depending on the devices, offline needs and release cadence you require.' },
  { icon: '03', title: 'SaaS Platforms', desc: 'Multi-tenant products with subscriptions, role-based access, dashboards and admin controls, built to launch a focused first version and then scale.' },
  { icon: '04', title: 'AI and Automation Features', desc: 'Practical AI features such as document extraction, classification, drafting and search, with human review, evaluation and cost controls agreed before launch.' },
  { icon: '05', title: 'Legacy Modernization', desc: 'Refactor, replatform or rebuild an ageing system so it is secure and maintainable, with phased rollout and data migration planned before cutover.' },
  { icon: '06', title: 'Maintenance and Cloud Operations', desc: 'Ongoing security updates, monitoring, incident response and performance work after launch, or a documented handover if you keep the work in-house.' },
];

const steps = [
  { num: '01', title: 'Discovery and scope', desc: 'We define the users, the one workflow that matters first, the systems it touches and the result that makes the project worthwhile. The output is a written scope and a fixed-price plan.' },
  { num: '02', title: 'Design and architecture', desc: 'We agree the data model, integrations, hosting, security controls and release plan before code is written, so later change requests have a baseline to measure against.' },
  { num: '03', title: 'Build in reviewable increments', desc: 'We deliver working software in short cycles, test against real workflows and show progress in a staging environment rather than reporting percentages.' },
  { num: '04', title: 'Launch, hand over and maintain', desc: 'We release in controlled stages with a rollback plan, then hand over code, documentation and credentials. You can maintain in-house or keep us on for ongoing support.' },
];

const faqs = [
  { q: 'How much does custom software development cost in Canada?', a: 'Cost follows the number of workflows, integrations, user roles, data migration and compliance requirements in scope. A discovery phase is the usual first step because it turns an unclear requirement into a scoped, fixed-price plan. Quotes are in Canadian dollars and the price follows the agreed scope. Our custom software development cost guide lists typical ranges and the main cost drivers.' },
  { q: 'How long does a custom software project take?', a: 'A focused first release, such as one portal, one mobile workflow or a SaaS MVP, is usually planned in stages over a few months. Larger platforms and integrations take longer. We agree phases, milestones and acceptance criteria after discovery, not before.' },
  { q: 'Who owns the custom software and the data?', a: 'You own the custom software and your data. Our engagement terms give you full ownership of the delivered code and project materials on final payment, and we document third-party licences, vendor APIs and any components that carry their own terms. Ownership, source-code access and handover are agreed in writing before work starts.' },
  { q: 'What happens after launch and who maintains the software?', a: 'Every project includes a handover with documentation, credentials and deployment notes. After launch you can maintain the product in-house or use our ongoing software maintenance service for security updates, monitoring, incident response and planned improvements. Support hours, uptime targets and release windows are agreed before launch.' },
  { q: 'When is custom software the right choice instead of buying a product?', a: 'Custom software is usually appropriate when the workflow is central to how you compete, no off-the-shelf product fits without expensive workarounds, or you need control over integrations, data and user experience. Buying is usually better for commodity functions such as accounting, payroll, email or standard CRM. We will say so when an existing product is the cheaper answer.' },
  { q: 'Can you work with an existing codebase or another development team?', a: 'Yes. We start with a codebase and ownership review so we understand what exists, who controls the domains, hosting and credentials, and which parts are safe to change. We can take over maintenance, modernize the system in stages, or work alongside your in-house team.' },
];

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 16px' };
const p = { fontSize: 17, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 16px' };
const a = { color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: '3px' };

function A({ href, children }: { href: string; children: string }) {
  return <Link href={href} style={a}>{children}</Link>;
}

const buyerContent = (
  <>
    <section aria-labelledby="what-we-do" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="what-we-do" style={h2}>What a custom software development company does</h2>
        <p style={p}>
          A custom software development company designs, builds and maintains software for a specific business workflow instead of reselling a fixed product. Mapletech Labs is a Canadian team that plans the scope, builds the working software and supports it after launch, with offices serving Edmonton and clients across Canada.
        </p>
        <p style={p}>
          The work usually combines several disciplines: <A href="/services/web-development">web development</A> for portals and platforms, <A href="/services/mobile-app-development">mobile app development</A> for iOS and Android, <A href="/services/saas-development">SaaS development</A> for subscription products, and <A href="/services/ai-ml">AI and machine learning</A> where automation or prediction genuinely helps. Existing systems can be modernized through <A href="/services/software-development/legacy-software-modernization">legacy software modernization</A>, and regulated products may start from our <A href="/services/software-development/healthcare-software">healthcare software development</A> approach.
        </p>
        <p style={p}>
          We also build for specific industries, including <A href="/industries/healthcare">healthcare</A>, <A href="/industries/fintech">fintech</A> and <A href="/industries/logistics">logistics</A>, where integration, privacy and uptime requirements shape the architecture from day one.
        </p>
      </div>
    </section>

    <section aria-labelledby="build-vs-buy" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="build-vs-buy" style={h2}>Build vs buy: how to decide</h2>
            <p className="lede">Custom software is an investment, so the first question is whether it should exist at all. Use the comparison below as a starting point, then test it against the cost of the workaround.</p>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720, fontSize: 15 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--ink)' }}>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Decision</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Usually the right choice when</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Watch out for</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--body)', lineHeight: 1.6 }}>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}><strong>Buy or subscribe</strong></td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>The need is common and well served, such as accounting, payroll, email or a standard CRM, and configuration covers most of the workflow.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Per-seat pricing, limited integrations and a roadmap you do not control.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}><strong>Configure and extend</strong></td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>A purchased product covers 80 percent of the workflow and the rest can be added through its API or plugin model.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Upgrade risk, vendor lock-in and customizations that become hard to maintain.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}><strong>Build custom</strong></td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>The workflow is central to how you compete, no product fits without costly workarounds, or you need control of data, integrations and user experience.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Ongoing ownership: scope discipline, maintenance and a clear product owner on your side.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, marginTop: 20 }}>
          If the honest answer is to buy, we will say so. If you need a second opinion before committing, read our guide to <A href="/blog/custom-software-vs-off-the-shelf">custom software vs off-the-shelf software</A> or <A href="/contact">talk to an engineer</A>.
        </p>
      </div>
    </section>

    <section aria-labelledby="hub-links" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="hub-links" style={h2}>Software development services and industries</h2>
            <p className="lede">Start from the product type or the industry you operate in. Each page covers scope, process, pricing drivers and relevant project results.</p>
          </div>
        </div>
        <div className="grid grid--3" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Product types</h3>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li><A href="/services/web-development">Web development</A></li>
              <li><A href="/services/mobile-app-development">Mobile app development</A></li>
              <li><A href="/services/saas-development">SaaS development</A></li>
              <li><A href="/services/ai-ml">AI and machine learning</A></li>
              <li><A href="/services/software-development/legacy-software-modernization">Legacy software modernization</A></li>
              <li><A href="/services/software-development/healthcare-software">Healthcare software development</A></li>
            </ul>
          </div>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Industries</h3>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li><A href="/industries/healthcare">Healthcare and MedTech</A></li>
              <li><A href="/industries/fintech">FinTech and banking</A></li>
              <li><A href="/industries/logistics">Logistics and supply chain</A></li>
            </ul>
          </div>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Proof and planning</h3>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li><A href="/case-studies">All case studies</A></li>
              <li><A href="/blog/custom-software-development-cost-canada">Custom software cost guide</A></li>
              <li><A href="/blog/choose-software-development-company-canada">How to choose a development company</A></li>
              <li><A href="/pricing">Pricing and engagement models</A></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="software-cost" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="software-cost" style={h2}>Pricing guidance for custom software in Canada</h2>
        <p style={p}>
          There is no honest single price for custom software because a portal with one integration and a multi-role platform with data migration are different projects. What we can do is remove the guesswork: discovery produces a written scope, and the build is quoted as a fixed price in Canadian dollars against that scope.
        </p>
        <p style={p}>
          The biggest cost drivers are the number of user roles and workflows, the integrations and data migration, the security and compliance requirements, and whether the system must stay live during rollout. Our <A href="/blog/custom-software-development-cost-canada">custom software development cost guide for Canada</A> lists typical ranges, and our <A href="/pricing">pricing and engagement models</A> explain how discovery, fixed-price builds and ongoing support are structured.
        </p>
        <p style={p}>
          Ready to price your project? <A href="/contact">Send a short brief to an engineer</A> and we will reply within one working day with the next step.
        </p>
      </div>
    </section>
  </>
);

export default function PageClient() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Software Development' }]}
          copy={{
            badge: 'SOFTWARE DEVELOPMENT',
            title: <>Custom Software Development <span style={{ color: 'var(--brand)' }}>Company in Canada</span></>,
            desc: <>Mapletech Labs is a custom software development company in Canada that designs, builds and maintains web, mobile, SaaS and AI products for growing businesses. We plan the scope, quote a fixed price and stay accountable through launch and maintenance.</>,
          }}
          stats={stats}
          photo={officeMedia.desk}
          serviceName="Custom Software Development"
          contactHref="/contact"
        />
        <StatRow stats={stats} />
        <ServicesGrid title="Custom software development services" items={services} />
        <ServiceProof
          slug="software-development"
          name="custom software"
          contactHref="/contact"
          caseStudySlugs={['fintech-trading-platform', 'healthcare-telehealth', 'ecommerce-platform', 'logistics-platform', 'payments-api-platform', 'real-estate-portal']}
        />
        {buyerContent}
        <MediaBand media={defaultMedia} />
        <ProcessSteps title="How we work" steps={steps} />
        <SuccessStories />
        <WhyUs />
        <Credentials />
        <FaqSplit faqs={faqs} title="Common questions" />
        <FaqSchema faqs={faqs} />
        <FinalCta contactHref="/contact" />
      </main>
      <Footer />
    </>
  );
}
