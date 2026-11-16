import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '450K+', label: 'Patient records supported' },
  { value: '200K+', label: 'Patient sessions delivered' },
  { value: '99.97%', label: 'Uptime on live platforms' },
  { value: '100K+', label: 'Patients served' },
];

const services = [
  { icon: '🧭', title: 'Delivery Lead', desc: 'A named lead who owns the plan, the cadence and the communication, so you always know what is being built, what is next and who to reach for decisions.' },
  { icon: '💻', title: 'Front-End Engineers', desc: 'React, Next.js and TypeScript builds for the product your users touch: interfaces, forms, dashboards and mobile-friendly views, tested against real workflows.' },
  { icon: '⚙️', title: 'Back-End Engineers', desc: 'APIs, business rules, integrations and data models in Node.js and PostgreSQL, built to the access, audit and performance requirements you confirm.' },
  { icon: '🎨', title: 'UI/UX Designers', desc: 'Interface and interaction design when the product needs it: flows, wireframes and a visual system that keeps the product consistent as it grows.' },
  { icon: '🔍', title: 'QA Engineers', desc: 'Test plans, automated checks and release verification, so each delivery is tested against the workflows it changes before it reaches your users.' },
  { icon: '🚀', title: 'DevOps Engineers', desc: 'Hosting, CI/CD, environment and release management, with monitoring and a rollback plan so launches are controlled and reversible.' },
];

const steps = [
  { num: '01', title: 'Scope the team and the work', desc: 'We define the product goals, the roles the work needs and the monthly capacity, then agree the cadence, the channel and the escalation path. The output is a written plan, not a verbal promise.' },
  { num: '02', title: 'Assemble and introduce the team', desc: 'We name the people on the team, their roles and their availability, and run a first planning cycle so the first delivery is scoped with you, not for you.' },
  { num: '03', title: 'Deliver on the agreed cadence', desc: 'The team works the agreed capacity in reviewable increments, with a regular planning and delivery rhythm and a standing place for updates, decisions and feedback.' },
  { num: '04', title: 'Review, adjust and hand over', desc: 'Each cycle ends with a review of what shipped and what is next. Capacity and mix can be adjusted as the workload changes, and handover materials are kept current so the product is never locked in.' },
];

const faqs = [
  { q: 'What is a dedicated development team?', a: 'A dedicated development team is a consistent group of engineers, designers and a delivery lead reserved for your product, engaged month to month against an agreed capacity. Instead of a one-off project, you get a standing team that keeps building, fixing and improving your software as priorities evolve.' },
  { q: 'When is a dedicated team a better fit than a fixed-scope project?', a: 'A dedicated team fits when you have ongoing product work: a product that changes often, a backlog that keeps growing, or a business that depends on the software every day. A fixed-scope project fits a defined set of deliverables with a clear end. If you are not sure which shape fits, start with a discovery phase and we will recommend the engagement that matches your workload.' },
  { q: 'Which roles are on a dedicated team?', a: 'The mix is agreed for your product during scoping. Typical roles include a delivery lead who owns the plan and communication, front-end and back-end engineers, a UI/UX designer when the product needs design work, a QA engineer for test coverage, and a DevOps engineer for hosting, CI/CD and releases. You see the named people on the team in the written plan.' },
  { q: 'How is a dedicated team priced in Canada?', a: 'The team is engaged month to month against an agreed capacity, quoted in Canadian dollars. The written plan names the monthly capacity, the roles included, the work covered and what is billed separately, so the price follows the agreed scope. Larger changes can be quoted as their own project. See our pricing page for typical CAD ranges and engagement models.' },
  { q: 'Who owns the code and intellectual property?', a: 'Ownership of the delivered code and project materials, source-code access and handover are agreed in writing in your engagement terms before work starts. Third-party licences, vendor APIs and components that carry their own terms are documented so you know what you control at the end of the engagement.' },
  { q: 'How does communication work with a dedicated team?', a: 'Communication cadence is agreed in the engagement: a named delivery lead, a regular planning and delivery rhythm, and a channel you choose for updates and decisions. The cadence and escalation path are part of the written plan, so you always know who to reach and what to expect from each cycle.' },
  { q: 'What happens at the end of the engagement?', a: 'Handover is planned from the start and agreed in the engagement terms. It covers documentation, source-code access, credentials and deployment notes, so your in-house team can take over the product. After handover you can maintain it in-house or continue with our software maintenance service for security updates, monitoring and planned improvements.' },
];

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 16px' };
const p = { fontSize: 17, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 16px' };
const a = { color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: '3px' };

function A({ href, children }: { href: string; children: string }) {
  return <Link href={href} style={a}>{children}</Link>;
}

const buyerContent = (
  <>
    <section aria-labelledby="dedicated-meaning" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="dedicated-meaning" style={h2}>What a dedicated development team is</h2>
        <p style={p}>
          A dedicated development team is a consistent group of engineers, designers and a delivery lead reserved for your product, engaged month to month against an agreed capacity. You are not buying hours against a generic pool: you get a standing team that learns your product, keeps the context and keeps shipping as priorities evolve.
        </p>
        <p style={p}>
          For a buyer, the useful first step is deciding the shape of the work. A fixed-scope project fits a defined set of deliverables with a clear end. A dedicated team fits ongoing product work: a product that changes often, a backlog that keeps growing, or a business that depends on the software every day. If you are not sure which shape fits, a discovery phase is the usual first step, and we will recommend the engagement that matches your workload.
        </p>
        <p style={p}>
          Mapletech Labs delivers this work as part of our <A href="/services/software-development">software development services</A>, from our Edmonton headquarters with a remote team. If you are comparing engagement models, start with the <A href="/pricing">pricing and engagement models page</A>; if you already know the workload, <A href="/contact">talk to a delivery lead about your product</A>.
        </p>
      </div>
    </section>

    <section aria-labelledby="team-fit" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="team-fit" style={h2}>When a dedicated team is the right fit</h2>
            <p className="lede">The table below is a scoping aid for choosing the engagement shape, not a prescribed package.</p>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720, fontSize: 15 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--ink)' }}>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Your situation</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Usual fit</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Why</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--body)', lineHeight: 1.6 }}>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>A product that changes often</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Dedicated team</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>A standing team keeps the product context and ships on a regular cadence instead of re-onboarding for every change.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>A defined set of deliverables with a clear end</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Fixed-scope project</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>A written scope with acceptance criteria and a fixed price fits work that does not keep evolving.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>A business that depends on the software daily</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Dedicated team, often with maintenance</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Reserved capacity keeps fixes, improvements and monitoring in one place, with an escalation path agreed in the plan.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>An unclear requirement</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Discovery first</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>A discovery phase turns an unclear requirement into a scoped plan, then you choose the engagement shape on known ground.</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>A growing backlog with no fixed end</td>
                <td style={{ padding: '14px 16px' }}>Dedicated team</td>
                <td style={{ padding: '14px 16px' }}>Month-to-month capacity lets the team work the backlog as it grows, with the mix adjusted when the workload changes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section aria-labelledby="engagement-model" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="engagement-model" style={h2}>How the engagement works</h2>
        <p style={p}>
          A dedicated team is engaged month to month against an agreed capacity. The written plan names the monthly capacity, the roles included, the work covered and what is billed separately, and it sets out the communication cadence and the escalation path. The price follows that scope and is quoted in Canadian dollars.
        </p>
        <p style={p}>
          Capacity and the role mix can be adjusted as the workload changes, and larger changes can be quoted as their own project. Ownership of the delivered code and project materials, source-code access and handover are agreed in writing before work starts, and third-party licences, vendor APIs and components that carry their own terms are documented so you know what you control at the end of the engagement.
        </p>
        <p style={p}>
          For typical CAD ranges and the full set of engagement models, see the <A href="/pricing">pricing page</A>. Our <A href="/blog/choose-software-development-company-canada">guide to choosing a software development company in Canada</A> covers how fixed price, time and materials and dedicated team contracts compare, and the clauses to check before you sign.
        </p>
      </div>
    </section>

    <section aria-labelledby="team-proof" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="team-proof" style={h2}>Product work we have delivered</h2>
        <p style={p}>
          We built a HIPAA-compliant telehealth platform for ClinicFlow Health in Vancouver, with HL7 FHIR APIs, WebRTC video and a full EHR integration suite. The platform supports 450K+ patient records, has delivered 200K+ patient sessions and runs at 99.97% uptime.
        </p>
        <p style={p}>
          Read the <A href="/case-studies/healthcare-telehealth">healthcare telehealth platform case study</A> for that build, or see the <A href="/case-studies/fintech-trading-platform">fintech trading platform case study</A> for a product built to 99.99% uptime. For more sector work, see our <A href="/industries/healthcare">healthcare software development page</A>.
        </p>
      </div>
    </section>
  </>
);

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: '/services/software-development', label: 'Software Development' }}
      name="Dedicated Development Team"
      copy={{
        badge: 'SOFTWARE DEVELOPMENT',
        title: <>Dedicated Development <span style={{ color: 'var(--brand)' }}>Team in Canada</span></>,
        desc: <>A dedicated development team is a consistent crew reserved for your product, engaged month to month against an agreed capacity, with CAD pricing, a clear communication cadence and a handover plan agreed in writing.</>,
      }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      caseStudySlugs={['healthcare-telehealth', 'fintech-trading-platform']}
      capabilitiesTitle="Dedicated team roles"
      buyerContent={buyerContent}
    />
  );
}
