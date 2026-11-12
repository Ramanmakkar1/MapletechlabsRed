import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '450K+', label: 'Patient records supported' },
  { value: '200K+', label: 'Patient sessions delivered' },
  { value: '99.97%', label: 'Uptime on live platforms' },
  { value: '100K+', label: 'Patients served' },
];

const services = [
  { icon: '🩺', title: 'Telehealth Platforms', desc: 'Booking, intake, secure video visits, clinical notes and follow-up for one visit type, built for patients on a phone browser and clinicians at a desk.' },
  { icon: '🧑‍⚕️', title: 'Patient Portals', desc: 'Secure sign-in, appointments, digital forms, results and messaging, with role-based access for patients, caregivers and clinic staff.' },
  { icon: '🔗', title: 'EHR and EMR Integration', desc: 'HL7 FHIR and vendor API connections to systems such as Epic, Cerner and Allscripts, scoped one read flow and one controlled write-back flow at a time.' },
  { icon: '📋', title: 'Clinical Workflow Tools', desc: 'Intake, referrals, documentation and care coordination tools that remove repeated admin work instead of adding another screen for staff.' },
  { icon: '📡', title: 'Remote Monitoring', desc: 'Patient-reported measures, device data, alerting rules and a staff review queue, with a clear answer for who acts on each alert.' },
  { icon: '📊', title: 'Healthcare Analytics and AI', desc: 'Population health dashboards, outcome tracking and bounded AI features such as drafting or classification, always with human review.' },
];

const steps = [
  { num: '01', title: 'Discovery and clinical scoping', desc: 'We define one workflow, the people and systems involved, the information it handles and the result that makes the project worthwhile. The output is a written scope, not a feature wish list.' },
  { num: '02', title: 'Privacy, security and architecture', desc: 'We map data flows and agree the controls your privacy officer and counsel require, then design hosting, access, audit logging and integration around them.' },
  { num: '03', title: 'Build and integrate in stages', desc: 'We deliver in reviewable increments, test against real workflows and connect to existing systems with agreed test records, retries and error reporting.' },
  { num: '04', title: 'Launch, monitor and maintain', desc: 'We release in controlled stages with a rollback plan, monitor errors and performance, and hand over documentation, credentials and a maintenance plan.' },
];

const faqs = [
  { q: 'What is healthcare software development?', a: 'Healthcare software development is the design, building and integration of digital tools for care providers, patients and health organizations. It can mean a telehealth service, patient portal, clinical workflow tool, remote monitoring product or a connection to an existing electronic health record (EHR), with clinical workflows, privacy, security and interoperability planned from the start.' },
  { q: 'What types of healthcare software projects do you build?', a: 'Most projects start as one of six types: telehealth, patient portals, clinical workflow tools, EHR or EMR integration, remote monitoring, or healthcare analytics and AI. We usually recommend a focused first release that proves one workflow before expanding to more visit types, roles or systems.' },
  { q: 'How do you handle privacy and security?', a: 'Privacy and security requirements depend on your organization, province, role, users and contracts, so your privacy officer and legal counsel remain the authority on your obligations. We map data flows, document the controls in the approved design and build to the access, encryption, audit logging, retention and incident-evidence requirements you confirm. We can supply the technical detail your review needs, but we do not decide your legal position for you.' },
  { q: 'Can you integrate with our EHR, EMR or scheduling system?', a: 'Yes, when the vendor provides API or HL7 FHIR access. We start with one read flow, such as patient demographics or appointments, and one controlled write-back flow if needed. Vendor sandbox credentials, interface documentation and a named contact on the vendor side are the usual prerequisites, and vendor approval timelines and licence costs are confirmed during discovery.' },
  { q: 'Who owns the software and the data?', a: 'You own the custom software and your data. Our engagement terms give you full ownership of the delivered code and project materials on final payment, and we document third-party licences, vendor APIs and any components that carry their own terms. Ownership, source-code access and handover are agreed in writing before work starts.' },
  { q: 'What happens after launch and who maintains the software?', a: 'Every project includes a handover with documentation, credentials and deployment notes. After launch you can maintain the product in-house or use our ongoing software maintenance service for security updates, monitoring, incident response and planned improvements. Support hours, uptime targets and release windows are agreed before launch.' },
  { q: 'How much does healthcare software development cost in Canada?', a: 'Cost follows the number of workflows, the integrations, the data migration and the privacy and security controls in scope. A discovery phase is the usual first step because it turns an unclear requirement into a scoped, fixed-price plan. Quotes are in Canadian dollars and the price follows the agreed scope.' },
  { q: 'How long does a healthcare software project take?', a: 'A focused first release, such as one telehealth visit type or a patient portal with a defined document view, is usually planned in stages over a few months. Larger integrations and multi-role platforms take longer. We agree phases, milestones and acceptance criteria after discovery, not before.' },
];

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 16px' };
const p = { fontSize: 17, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 16px' };
const a = { color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: '3px' };

function A({ href, children }: { href: string; children: string }) {
  return <Link href={href} style={a}>{children}</Link>;
}

const buyerContent = (
  <>
    <section aria-labelledby="healthcare-meaning" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="healthcare-meaning" style={h2}>What healthcare software development means</h2>
        <p style={p}>
          Healthcare software development is the design, building and integration of digital tools for care providers, patients and health organizations. It is not a generic business app with a healthcare label: clinical workflows, privacy, security and interoperability with existing systems are planned from the start.
        </p>
        <p style={p}>
          For a buyer, the useful first step is not choosing a framework or requesting a feature list. It is defining one workflow, the people and systems involved, the information it handles and the result that would make the project worthwhile. That is how a telehealth service, patient portal, clinical tool or EHR connection gets a scope you can price and test.
        </p>
        <p style={p}>
          Mapletech Labs delivers this work as part of our <A href="/services/web-development">software development services</A>, alongside <A href="/industries/healthcare">healthcare software development for Canadian providers</A>. If you are still comparing project types, start with the sector page; if you already know the workflow, <A href="/contact">talk to an engineer about your project</A>.
        </p>
      </div>
    </section>

    <section aria-labelledby="project-types" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="project-types" style={h2}>Typical healthcare software projects</h2>
            <p className="lede">Start with the operational problem, then choose the smallest product category that addresses it. The table below is a scoping aid, not a prescribed package.</p>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720, fontSize: 15 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--ink)' }}>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Project type</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>A focused first release</th>
                <th style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Questions to settle early</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--body)', lineHeight: 1.6 }}>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>Telehealth</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Booking, intake, video visit, clinical note and follow-up for one visit type.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Which visits suit remote care, and what happens when video or clinical escalation is needed?</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>Patient portal</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Secure sign-in, appointments, forms and a defined document or results view.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Which information can patients and caregivers see, and when is it released?</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>Clinical workflow</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>One repeated task such as intake, referrals, documentation or care coordination.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Who does each step today, and where does the new tool remove work rather than duplicate it?</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>EHR integration</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>One read flow and, if needed, one controlled write-back flow.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Which system is the source of truth, and is vendor API access available?</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>Remote monitoring</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>One device or patient-reported measure, an alerting rule and a staff review queue.</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>Who reviews readings, within what workflow, and what counts as an actionable alert?</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>AI-assisted tool</td>
                <td style={{ padding: '14px 16px' }}>One bounded drafting, classification or search task with human review.</td>
                <td style={{ padding: '14px 16px' }}>What source data is used, how is output checked, and could the use change regulatory obligations?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section aria-labelledby="privacy-security" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="privacy-security" style={h2}>Privacy and security considerations</h2>
        <p style={p}>
          Canada does not have one healthcare privacy rule that covers every project. Federal private-sector law, provincial health-information laws and public-sector requirements may be relevant, sometimes together. Ontario&apos;s Personal Health Information Protection Act (PHIPA) and Alberta&apos;s Health Information Act (HIA) are examples; other provinces have their own frameworks.
        </p>
        <p style={p}>
          Your lawyer, privacy officer and compliance team should determine the rules for each organization and province in scope, and whether your organization is acting as a custodian, trustee, service provider or another defined role. A development partner can supply data-flow diagrams and technical controls for that review, but cannot decide your legal position for you.
        </p>
        <p style={p}>
          In practice, the technical work usually covers role-based access, encryption in transit and at rest, audit records, secure configuration, retention and deletion rules, incident evidence and a tested release process. We agree those controls in writing during discovery and build to the requirements you confirm. For a broader checklist, see our <A href="/blog/app-privacy-compliance-canada">PIPEDA, Law 25 and PHIPA privacy guide for Canadian apps</A>.
        </p>
      </div>
    </section>

    <section aria-labelledby="integrations-ownership" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="integrations-ownership" style={h2}>Integrations, ownership and maintenance</h2>
            <p className="lede">These are the three questions that decide whether a healthcare product stays useful after launch. Agree the answers before the build starts.</p>
          </div>
        </div>
        <div className="grid grid--3" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Integrations</h3>
            <p>EHR, EMR, scheduling, identity and messaging systems each need a named source of truth, vendor access and a test plan. We scope one read flow and one write-back flow first, then add interfaces only when the first ones are proven with real records.</p>
          </div>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Ownership</h3>
            <p>You own the custom software and your data. The contract sets out source-code ownership, third-party licences, vendor API terms and handover materials, so there is no ambiguity about what you control at the end of the project.</p>
          </div>
          <div className="tile">
            <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12, color: 'var(--ink)' }}>Maintenance</h3>
            <p>Clinical software needs security updates, monitoring and a plan for incidents after launch. You can maintain it in-house or use our <A href="/services/software-maintenance">software maintenance service</A> for support, releases and planned improvements.</p>
          </div>
        </div>
        <p style={{ ...p, marginTop: 20 }}>
          We agree phases, milestones and acceptance criteria in writing before work starts, and quote in Canadian dollars. See the <A href="/pricing">pricing and engagement models</A> for how projects are scoped, or <A href="/contact">contact us about your healthcare project</A>.
        </p>
      </div>
    </section>

    <section aria-labelledby="healthcare-proof" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 id="healthcare-proof" style={h2}>Healthcare software we have delivered</h2>
        <p style={p}>
          We built a HIPAA-compliant telehealth platform for ClinicFlow Health in Vancouver, with HL7 FHIR APIs, WebRTC video and a full EHR integration suite. The platform supports 450K+ patient records, has delivered 200K+ patient sessions and runs at 99.97% uptime.
        </p>
        <p style={p}>
          Read the <A href="/case-studies/healthcare-telehealth">healthcare telehealth platform case study</A> for the build, or see our <A href="/industries/healthcare">healthcare software development page for Canadian providers</A> for the wider sector work.
        </p>
      </div>
    </section>
  </>
);

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: '/services/web-development', label: 'Software Development' }}
      name="Healthcare Software Development"
      copy={{
        badge: 'SOFTWARE DEVELOPMENT',
        title: <>Healthcare Software <span style={{ color: 'var(--brand)' }}>Development in Canada</span></>,
        desc: <>Healthcare software development in Canada means building telehealth, patient portals, clinical tools and EHR integrations with privacy, security and clinical workflow planned from the start. We scope one workflow first, then build and integrate it in stages.</>,
      }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      caseStudySlugs={['healthcare-telehealth']}
      capabilitiesTitle="Healthcare software services"
      buyerContent={buyerContent}
    />
  );
}
