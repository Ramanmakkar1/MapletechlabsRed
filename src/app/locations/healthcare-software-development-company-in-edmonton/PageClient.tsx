import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';

export const FAQS = [
  {
    q: 'What does healthcare software development in Edmonton include?',
    a: 'Healthcare software development covers the secure systems clinics, networks and healthtech companies use to deliver care: patient portals, telehealth apps, clinical workflow tools, appointment and intake systems, and integrations with existing electronic health records. Mapletech Labs builds these systems with compliance designed in from day one, including the HIPAA and PIPEDA requirements behind our telehealth platform that has handled 200K+ patient sessions at 99.97% uptime.',
  },
  {
    q: 'How do you handle privacy and healthcare compliance?',
    a: 'We treat privacy as a build requirement, not a later review. That means mapping the protected health information a system touches, choosing Canadian data residency where required, encrypting data in transit and at rest, applying role-based access control and session timeouts, and keeping audit logs of who accessed what. Our telehealth work met HIPAA and PIPEDA requirements and used HIPAA-eligible AWS services, encrypted storage and WebRTC video with SRTP encryption.',
  },
  {
    q: 'Can you integrate with our existing EHR or clinical system?',
    a: 'Yes. On our healthcare telehealth platform we built a custom HL7 FHIR adapter that translated between a legacy HL7v2 EHR and a modern API layer, so patient records, appointment history and prescription data synced in real time without manual data entry. We can integrate with existing EHRs, scheduling, billing and lab systems, or build a clean API layer where the legacy interface is limited.',
  },
  {
    q: 'How long does a healthcare software project take?',
    a: 'Timelines depend on the integrations, compliance scope and number of user roles, but the telehealth platform in our healthcare case study was delivered in 14 weeks. A typical engagement starts with discovery and compliance planning, then moves into design, build and release in short cycles so clinicians see working software early and can give feedback while changes are still inexpensive.',
  },
  {
    q: 'How much does healthcare software development in Edmonton cost?',
    a: 'Healthcare software is scoped and priced for the specific build rather than sold from a price list. Cost is driven mainly by compliance and security work, EHR and third-party integrations, the number of user roles and workflows, whether you need both web and mobile apps, data migration, and ongoing support. We agree the scope and price before development begins so compliance and integration work is included up front instead of appearing as surprise change orders.',
  },
  {
    q: 'Can you add AI to a healthcare product?',
    a: 'Yes, where it removes real clinical or administrative work. Our AI and machine learning team can add features such as clinical documentation support, triage assistance or operational forecasting, with human approval points, audit logging and Canadian data residency planned before launch. We start with the workflow and the data, not with a model, so the feature is safe to operate and easy to evaluate.',
  },
];

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 16px' };
const h3 = { color: 'var(--ink)', marginTop: 0, fontSize: 18 };
const p = { fontSize: 17, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 16px' };
const card = { padding: 22, border: '1px solid var(--line)', borderRadius: 16 };

function A({ href, children }: { href: string; children: string }) {
  return <Link href={href} style={{ color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{children}</Link>;
}

export default function PageClient() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Healthcare Software Development in Edmonton' }]} />
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px' }}>
              Healthcare software development company in Edmonton
            </h1>
            <p style={{ ...p, fontSize: 20, lineHeight: 1.65 }}>
              A healthcare software development company in Edmonton builds the secure clinical systems care teams rely on: patient portals, telehealth apps, appointment and intake workflows, and integrations with existing health records. Mapletech Labs builds these systems from our Edmonton headquarters, with HIPAA and PIPEDA compliance designed in from day one rather than added after launch.
            </p>
            <p style={p}>
              We have built a HIPAA-compliant telehealth platform that has handled 200K+ patient sessions at 99.97% uptime, with a 4.8-star app rating and 60% faster consultations. The same approach applies to Edmonton clinics, primary care networks and healthtech companies that need software built around how care is actually delivered.
            </p>
            <p style={p}><A href="/contact">Talk to our Edmonton healthcare software team</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>Healthcare workflows we build for in Edmonton</h2>
            <p style={p}>Edmonton healthcare software has to fit the day-to-day reality of clinics and care networks: a patient books, arrives, is seen, gets a referral or lab result, and expects the whole journey to stay connected. We design for those handoffs rather than treating each screen as a separate tool.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              <article style={card}>
                <h3 style={h3}>Patient access and intake</h3>
                <p style={{ ...p, marginBottom: 0 }}>Online booking, digital intake forms, reminders and a patient portal where people can see appointments, results and documents without calling the front desk. Consent capture and secure messaging fit the same flow.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Clinical and virtual care</h3>
                <p style={{ ...p, marginBottom: 0 }}>Encrypted video consultations, clinical notes, triage and specialist referrals built for primary care, walk-in and multi-site networks. On our telehealth build, WebRTC with SRTP encryption kept every audio and video stream protected end to end.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Records and integrations</h3>
                <p style={{ ...p, marginBottom: 0 }}>HL7 FHIR and API integrations that connect scheduling, EHRs, labs and billing so patient records, appointment history and prescription data sync without duplicate entry or paper handoffs.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Operations and reporting</h3>
                <p style={{ ...p, marginBottom: 0 }}>Dashboards for wait times, utilisation, no-shows and referral status, plus admin tools that replace spreadsheets and email chains. Our healthcare platform reduced admin overhead by 40% for the client.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Mobile and field workflows</h3>
                <p style={{ ...p, marginBottom: 0 }}>React Native apps for iOS and Android that let clinicians and community teams work away from a desk, with session timeouts, biometric authentication and role-based access controls.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Data and interoperability</h3>
                <p style={{ ...p, marginBottom: 0 }}>A clean API layer over legacy systems, audit-ready event logging, and a data model that can support multiple clinics, programs and reporting requirements as your organisation grows.</p>
              </article>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>Privacy and compliance for Edmonton healthcare software</h2>
            <p style={p}>Healthcare software carries a higher duty of care than most business systems. In Edmonton and across Alberta, a build may need to account for the Health Information Act (HIA) alongside PIPEDA, and products sold into the United States may also need HIPAA controls. We plan for these constraints before choosing an architecture or vendor.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><strong>Data mapping:</strong> identify what personal and protected health information a workflow touches, where it lives and which vendors process it.</li>
              <li><strong>Canadian residency:</strong> keep data in Canada where required and document any cross-border processing before launch.</li>
              <li><strong>Encryption:</strong> protect data in transit and at rest, including video, audio and messaging channels.</li>
              <li><strong>Access control:</strong> role-based permissions, session timeouts and device-level authentication so only authorised staff can reach patient data.</li>
              <li><strong>Auditability:</strong> keep logs of access and changes so the organisation can investigate incidents and demonstrate compliance.</li>
              <li><strong>Human oversight:</strong> set approval points and fallback behaviour for any AI-assisted clinical or administrative decision.</li>
            </ul>
            <p style={p}>On our telehealth platform, this meant HIPAA-eligible AWS services, encrypted S3 storage, CloudWatch audit logging, a web application firewall and end-to-end encrypted consultations. You can see the full build in our <A href="/case-studies/healthcare-telehealth">HIPAA-compliant telehealth case study</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>Our healthcare software development process</h2>
            <p style={p}>A healthcare project needs a clear path from clinical workflow to working software. We keep the process visible so clinical and operational teams can review decisions before they become expensive to change.</p>
            <ol style={{ ...p, paddingLeft: 22 }}>
              <li><strong>Discovery and compliance planning:</strong> map the current workflow, users, data and regulatory constraints, then agree the scope and success measures.</li>
              <li><strong>Architecture and integration design:</strong> decide how the system connects to EHRs, scheduling, billing and labs, and where data will be hosted.</li>
              <li><strong>UX and prototype:</strong> test the patient and clinician journeys early with realistic screens and workflows.</li>
              <li><strong>Build in short cycles:</strong> ship working software every sprint so clinicians can validate it with real scenarios. Our telehealth platform was delivered in 14 weeks.</li>
              <li><strong>Security and quality review:</strong> test encryption, access controls, audit logging, load behaviour and failure handling before launch.</li>
              <li><strong>Launch and support:</strong> monitor uptime, fix issues quickly and continue with new workflows once the first release is live.</li>
            </ol>
            <p style={p}>If your project is broader than healthcare, see our <A href="/services/software-development">custom software development services</A>. If you are adding automation or model-powered features, see <A href="/services/ai-ml">AI and machine learning development</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>Healthcare software pricing guidance</h2>
            <p style={p}>There is no honest single price for healthcare software, because a simple patient intake tool and a multi-clinic telehealth platform are different products. The useful approach is to understand what drives the cost, then agree a fixed scope and price before development starts.</p>
            <div role="region" aria-label="Healthcare software cost drivers" tabIndex={0} style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: 24 }}>
              <table style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', textAlign: 'left' }}>
                <caption style={{ textAlign: 'left', paddingBottom: 12 }}>What changes the cost of a healthcare software build</caption>
                <thead>
                  <tr>{['Cost driver', 'What it covers', 'Why it matters'].map(label => <th key={label} scope="col" style={{ padding: 14, borderBottom: '2px solid var(--line)' }}>{label}</th>)}</tr>
                </thead>
                <tbody>
                  {[
                    ['Compliance and security', 'Data mapping, encryption, access control, audit logging and residency planning.', 'These are core requirements in healthcare, so they belong in the first scope rather than a later change order.'],
                    ['Integrations', 'EHR, scheduling, billing, lab and identity systems, including legacy interfaces.', 'Every connection adds design, testing and failure handling, and legacy systems often need an adapter layer.'],
                    ['User roles and workflows', 'Patients, clinicians, administrators, schedulers and multi-site managers.', 'More roles mean more permissions, screens and edge cases to test.'],
                    ['Web and mobile', 'One responsive web app or native apps for iOS and Android.', 'A mobile app adds store review, device testing and offline behaviour.'],
                    ['Data migration and launch', 'Moving existing records, training, rollout and early support.', 'A safe launch depends on clean data and a plan for the first weeks in production.'],
                  ].map(([driver, covers, matters]) => (
                    <tr key={driver}>
                      <th scope="row" style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{driver}</th>
                      <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{covers}</td>
                      <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={p}>We scope the work, agree the price and then build. That way an Edmonton clinic or healthtech company can compare proposals on the same scope, including the compliance and integration work that is easy to leave out of an initial estimate. <A href="/contact">Send us your requirements</A> and we will tell you what fits your budget and timeline.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>Healthcare software we have shipped</h2>
            <p style={p}>Our healthcare case study is a telehealth platform built for a multi-location Canadian healthcare network. The client needed remote care quickly while meeting HIPAA and PIPEDA requirements and integrating with an existing EHR. We built a cross-platform React Native app with WebRTC video, a custom HL7 FHIR adapter and a backend on HIPAA-eligible AWS services.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 20, margin: '24px 0' }}>
              {[
                ['200K+', 'patient sessions'],
                ['99.97%', 'uptime'],
                ['4.8★', 'app rating'],
                ['60%', 'faster consultations'],
                ['450K+', 'patient records'],
                ['40%', 'less admin overhead'],
              ].map(([value, label]) => (
                <div key={label} style={{ ...card, textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--brand)', marginBottom: 6 }}>{value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>{label}</div>
                </div>
              ))}
            </div>
            <p style={p}>Read the full <A href="/case-studies/healthcare-telehealth">healthcare telehealth platform case study</A>, then <A href="/contact">book a healthcare software discovery call</A> to discuss your Edmonton project.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>Healthcare software development in Edmonton: FAQs</h2>
            <div style={{ display: 'grid', gap: 16, marginTop: 8 }}>
              {FAQS.map((faq) => (
                <article key={faq.q} style={card}>
                  <h3 style={h3}>{faq.q}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
