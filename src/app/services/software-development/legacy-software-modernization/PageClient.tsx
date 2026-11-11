import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '300+', label: 'Apps delivered' },
  { value: '99.99%', label: 'Uptime on live systems' },
  { value: '75K+', label: 'Daily transactions handled' },
  { value: '450K+', label: 'Patient records supported' },
];

const services = [
  { icon: '🔍', title: 'Codebase and Risk Audit', desc: 'We review the architecture, dependencies, test coverage, hosting and open defects, then rank what is unsafe to keep, what can be stabilised and what should be replaced.' },
  { icon: '🧩', title: 'Refactoring and Stabilisation', desc: 'Improve the structure of an existing codebase without changing what users see — removing fragile code, upgrading dependencies and adding tests around the flows that matter.' },
  { icon: '☁️', title: 'Replatforming', desc: 'Move the product to a modern runtime, framework, database or cloud platform while keeping the business logic and data your team already depends on.' },
  { icon: '🏗️', title: 'Rebuild and Replacement', desc: 'When the old system cannot be safely extended, we rebuild the critical workflows with a phased cutover so the business keeps operating during the transition.' },
  { icon: '🔁', title: 'Data Migration', desc: 'Plan and run data mapping, cleansing, reconciliation and rollback steps so records move to the new system without loss or duplicate work.' },
  { icon: '🚦', title: 'Testing and Rollout', desc: 'Automated and manual regression testing, parallel running, pilot groups and a rollback plan that make the release day predictable.' },
];

const steps = [
  { num: '01', title: 'Discovery and assessment', desc: 'We read the code, talk to the people who run the product and document the business rules that are not written down. The output is a written assessment of risk, effort and the realistic options.' },
  { num: '02', title: 'Migration planning', desc: 'We choose the path — refactor, replatform or rebuild — and break it into phases. Data mapping, integration dependencies, downtime limits and acceptance criteria are agreed before work starts.' },
  { num: '03', title: 'Build and test in parallel', desc: 'New or refactored components are tested against real data and real workflows, not just unit tests. Regression checks cover the reports, integrations and edge cases staff rely on.' },
  { num: '04', title: 'Rollout and stabilise', desc: 'We release in controlled stages with a rollback plan, monitor errors and performance, and keep the old system available until the new one is proven in everyday use.' },
];

const faqs = [
  { q: 'What does legacy software modernization mean?', a: 'Legacy software modernization is the work of updating an older system so it stays secure, maintainable and able to support current business needs. It can mean refactoring the existing code, moving it to a modern platform, or rebuilding the parts that can no longer be safely changed — while keeping the data and workflows the business relies on.' },
  { q: 'When should we refactor instead of rebuild?', a: 'Refactor when the core architecture is sound, the business rules are stable and the main problems are code quality, outdated dependencies or slow delivery. A rebuild makes more sense when the platform is unsupported, the data model blocks required changes, or the cost of working around the old system is higher than replacing it.' },
  { q: 'How long does a legacy modernization project take?', a: 'It depends on the size of the system, how much of it must change and whether data has to be migrated. A focused stabilisation or refactor can run for a few weeks, while a phased replatform or rebuild is usually planned in stages over several months. We agree the phases and milestones after discovery, not before.' },
  { q: 'Will we lose data during migration?', a: 'Data migration is planned with mapping, cleansing, trial runs and reconciliation so records can be checked before cutover. We keep the old system available until the new one is proven, and every rollout has a rollback step.' },
  { q: 'Can you modernize a system built by another team or supplier?', a: 'Yes. We start with a codebase and ownership review so we understand what exists, who controls the domains, hosting and credentials, and which parts are safe to change. You get a written assessment before anyone commits to a timeline.' },
  { q: 'How much does legacy software modernization cost?', a: 'Cost follows the size and condition of the system, the chosen path and the amount of data and integration work. A discovery review is the usual first step because it turns an unknown codebase into a scoped, fixed-price plan. Quotes are in Canadian dollars and the price follows the agreed scope.' },
];

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 16px' };
const p = { fontSize: 17, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 16px' };
const a = { color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: '3px' };

function A({ href, children }: { href: string; children: string }) {
  return <Link href={href} style={a}>{children}</Link>;
}

const buyerContent = (
  <>
    <section aria-labelledby="modernization-meaning" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="modernization-meaning" style={h2}>What legacy software modernization means</h2>
        <p style={p}>
          Legacy software modernization is the process of updating an older system so it stays secure, maintainable and able to support current business needs — without throwing away the data and workflows your team relies on. It is not only a rewrite: it can be a refactor, a move to a modern platform, or a phased rebuild of the parts that can no longer be changed safely.
        </p>
        <p style={p}>
          Most teams start when the risk becomes visible. The vendor no longer supports the framework, security patches are overdue, only one person understands the code, or a small change takes weeks because every release is fragile. Modernization turns that situation into a planned sequence of work instead of an emergency.
        </p>
        <p style={p}>
          Mapletech Labs does this work as part of our <A href="/services/web-development">software development services</A>, alongside <A href="/services/software-maintenance">ongoing software maintenance</A> for systems that stay live during the transition. If you already know the product needs support rather than replacement, start there.
        </p>
      </div>
    </section>

    <section aria-labelledby="choose-path" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="choose-path" style={h2}>Refactor, replatform or rebuild: how to choose</h2>
            <p className="lede">The right path depends on how healthy the core is, how much must change and how much downtime the business can tolerate. Discovery decides it; the table below shows the usual signals.</p>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720, fontSize: 15 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--ink)' }}>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Path</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Best when</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Main risk</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Typical shape</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--body)', lineHeight: 1.6 }}>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>Refactor</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>The architecture is sound and the business rules are stable, but the code, dependencies or tests have decayed.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Hidden coupling makes each change riskier than expected.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Incremental releases on the same platform.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>Replatform</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>The logic is worth keeping, but the runtime, database, framework or hosting is unsupported or too expensive.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Data and integration behaviour changes during the move.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Parallel environments and a staged cutover.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Rebuild</td>
                <td style={{ padding: '14px 16px' }}>The platform is end-of-life, the data model blocks required changes, or the workarounds now cost more than replacement.</td>
                <td style={{ padding: '14px 16px' }}>Business rules that live only in people&apos;s heads get missed.</td>
                <td style={{ padding: '14px 16px' }}>Phased replacement of critical workflows.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section aria-labelledby="cost-timeline" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="cost-timeline" style={h2}>What affects cost and timeline</h2>
            <p className="lede">Modernization is priced after discovery because an old system hides most of its cost in dependencies, undocumented rules and data quality. These factors move the estimate most.</p>
          </div>
        </div>
        <div className="grid grid--3" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>System size and condition</h3>
            <p>The number of modules, age of the code, test coverage, unsupported libraries and the quality of documentation all change how much has to be understood before it can be changed safely.</p>
          </div>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Data and integrations</h3>
            <p>Data volume, cleansing needs, reporting, payments, identity and third-party APIs add migration work. Each integration has to be tested with real records, not just sample data.</p>
          </div>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Downtime and rollout limits</h3>
            <p>A system that must stay live during the transition needs parallel running, pilot groups and a rollback plan. Those safeguards add planning time but reduce the risk of a failed cutover.</p>
          </div>
        </div>
        <p style={{ ...p, marginTop: 20 }}>
          We agree the phases, milestones and acceptance criteria in writing before work starts, and quote in Canadian dollars. See the <A href="/pricing">pricing and engagement models</A> for how projects are scoped, or <A href="/contact">talk to an engineer about your system</A>.
        </p>
      </div>
    </section>

    <section aria-labelledby="modernization-proof" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="modernization-proof" style={h2}>A rebuild we have delivered</h2>
        <p style={p}>
          When the old engine could not be extended safely, we rebuilt it rather than patching around it. For <A href="/case-studies/fintech-trading-platform">Axion Capital&apos;s AI-powered trading platform</A>, the team rebuilt the real-time trading engine from scratch and delivered sub-50ms latency, 75K+ transactions a day and zero data loss.
        </p>
        <p style={p}>
          That project is a fair reference when a rebuild is genuinely the right call. For a system that only needs stabilisation, the smaller refactor or maintenance path is usually the better answer — and we will say so.
        </p>
      </div>
    </section>
  </>
);

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: '/services/web-development', label: 'Software Development' }}
      name="Legacy Software Modernization"
      copy={{
        badge: 'SOFTWARE DEVELOPMENT',
        title: <>Legacy Software <span style={{ color: 'var(--brand)' }}>Modernization Services</span></>,
        desc: <>Legacy software modernization is the process of updating an older system so it stays secure, maintainable and able to support current business needs — without losing the data and workflows your team relies on. We help you decide whether to refactor, replatform or rebuild, then plan and deliver the migration.</>,
      }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      caseStudySlugs={['fintech-trading-platform']}
      capabilitiesTitle="Modernization services"
      buyerContent={buyerContent}
    />
  );
}
