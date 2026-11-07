import { serviceCityPath } from '@/data/serviceCity';
import Link from 'next/link';
import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';
import { industryFaqs } from '@/data/industry-faqs';

const heroStats = ([['100K+', 'Patients Served'], ['HIPAA', 'Compliant'], ['HL7/FHIR', 'Certified']] as [string, string][]).map(([value, label]) => ({ value, label }));
const challenges = [
                { icon: '🏥', title: 'HIPAA Compliance', desc: 'Building PHI-safe systems with end-to-end encryption, audit logs, and access controls that satisfy compliance officers and protect patients.' },
                { icon: '🔗', title: 'EHR Integration', desc: 'Connecting seamlessly with Epic, Cerner, and Allscripts using HL7 FHIR standards so clinical data flows where it needs to go.' },
                { icon: '❤️', title: 'Patient Experience', desc: 'Designing interfaces that reduce cognitive load for patients and clinicians alike — intuitive, accessible, and built for real-world use.' },
              ];
const solutions = [
                { icon: '🩺', title: 'Telehealth & Remote Care', desc: 'WebRTC-powered HIPAA video consultations, encrypted patient records, e-prescribing, and remote monitoring dashboards for modern care delivery.' },
                { icon: '🧠', title: 'Clinical AI & Diagnostics', desc: 'FDA-validated ML models for imaging analysis, predictive care pathways, NLP-powered clinical documentation, and sepsis early-warning systems.' },
                { icon: '🔗', title: 'EHR/EMR Integration', desc: 'Seamless HL7 FHIR connections to Epic, Cerner, and Allscripts that unify patient data across your entire care network.' },
                { icon: '🧑‍⚕️', title: 'Patient Portals', desc: 'Secure, mobile-first portals for appointment scheduling, lab results, messaging, and medication management that improve patient engagement.' },
                { icon: '📡', title: 'Medical Devices & IoT', desc: 'FDA-compliant integrations with wearables, remote monitoring devices, and clinical sensors that stream real-time vitals to care teams.' },
                { icon: '📊', title: 'Healthcare Analytics', desc: 'Population health dashboards, clinical outcome tracking, and predictive models that help providers deliver better care at lower cost.' },
              ];
const tech = [
                { cat: 'Standards', items: ['HL7 FHIR', 'DICOM', 'ICD-10', 'SNOMED'] },
                { cat: 'Infrastructure', items: ['AWS HIPAA', 'Azure Health', 'Google HCLS'] },
                { cat: 'AI', items: ['TensorFlow Medical', 'MONAI', 'FDA-validated'] },
                { cat: 'Integration', items: ['Epic', 'Cerner', 'Allscripts APIs'] },
              ];
const whyUs = [
                { icon: '🔐', title: 'HIPAA Expertise', desc: 'BAA-ready from day one. Our engineers are trained in HIPAA Security Rule requirements and build PHI protection into every layer.' },
                { icon: '🩺', title: 'Clinical Domain Knowledge', desc: 'We have worked directly with clinicians, nurses, and health system CIOs. We understand workflows that save time and reduce errors.' },
                { icon: '✅', title: 'Audit-Ready Code', desc: 'Comprehensive audit logs, access controls, and documentation that makes your compliance team smile during annual reviews.' },
              ];
const related = [
  { name: 'Edmonton', href: serviceCityPath('mobile-app-development', 'edmonton'), desc: 'Healthcare Software Development services in Edmonton.' },
  { name: 'Calgary', href: serviceCityPath('mobile-app-development', 'calgary'), desc: 'Healthcare Software Development services in Calgary.' },
  { name: 'Toronto', href: serviceCityPath('mobile-app-development', 'toronto'), desc: 'Healthcare Software Development services in Toronto.' },
  { name: 'Vancouver', href: serviceCityPath('mobile-app-development', 'vancouver'), desc: 'Healthcare Software Development services in Vancouver.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'HIPAA-compliant patient portals and provider dashboards with secure data handling.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Telehealth apps and patient engagement tools with EHR integration and push notifications.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Clinical decision support, diagnostic imaging AI and predictive care pathway models.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'HIPAA-ready cloud infrastructure on AWS and Azure with audit logging and encryption.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant health platforms with subscription billing and role-based access control.' },
              ];

const cityLinks = [
  { label: 'App Development Company in Vancouver', href: serviceCityPath('mobile-app-development', 'vancouver') },
  { label: 'App Development Company in Edmonton', href: serviceCityPath('mobile-app-development', 'edmonton') },
  { label: 'AI Development Company in Toronto', href: serviceCityPath('ai-ml', 'toronto') },
  { label: 'UI/UX Design Company in Toronto', href: serviceCityPath('product-design', 'toronto') },
];

const linkStyle = { color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } as const;
const cardStyle = { border: '1px solid var(--line, #e5e7eb)', borderRadius: 12, padding: 'clamp(16px, 4vw, 28px)', scrollMarginTop: 96, minWidth: 0 } as const;
const pStyle = { fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 12px' } as const;

const buyerTracks = [
  {
    id: 'telehealth-app-development',
    title: 'Telehealth app development',
    start: 'You run in-person or phone visits and want booked video consultations without adding admin work for front-desk staff or clinicians.',
    workflow: 'One visit type end to end: booking, intake form, waiting room, video consult, visit note and follow-up message.',
    access: 'Scheduling or practice-management system, clinician directory, calendar sources and the identity provider your staff already use.',
    accept: 'A patient books and joins on a phone browser, the clinician sees intake before the call, the note reaches the agreed record and every step is audit logged.',
    extra: <>See how we approached this in the <Link href="/case-studies/healthcare-telehealth" style={linkStyle}>healthcare telehealth platform case study</Link>, and our <Link href="/services/mobile-app-development" style={linkStyle}>mobile app development</Link> service for native iOS and Android builds.</>,
  },
  {
    id: 'patient-portal-development',
    title: 'Patient portal development',
    start: 'Patients phone the clinic for results, appointment changes and forms, and staff re-key paper or PDF intake into the chart.',
    workflow: 'Sign-in and identity check, upcoming appointments, digital intake and one results or document view.',
    access: 'Read access to appointments and the documents or results you plan to release, plus your rules for when results become visible to patients.',
    accept: 'Patients only see their own records, delegates and caregivers get the access you define, pages pass the agreed accessibility checks and staff can see what was viewed.',
    extra: <>Portals usually sit on our <Link href="/services/web-development" style={linkStyle}>web development</Link> stack; for hosting and data residency questions, start with our <Link href="/blog/app-privacy-compliance-canada" style={linkStyle}>PIPEDA, Law 25 and PHIPA privacy checklist</Link>.</>,
  },
  {
    id: 'ehr-integration',
    title: 'EHR integration',
    start: 'Clinical data lives in an EHR or EMR, and your app, portal or analytics tool needs it without manual exports.',
    workflow: 'One read flow (for example patient demographics or appointments) and one write-back flow, agreed field by field.',
    access: 'Vendor sandbox credentials, API or HL7 FHIR documentation, interface engine access if one exists and a named contact on the vendor side.',
    accept: 'Records match source data for the agreed test set, failed messages are retried and reported, and duplicates or mismatches are flagged rather than silently dropped.',
    extra: <>Integration work is delivered by our <Link href="/services/web-development/api-backend" style={linkStyle}>API and backend development</Link> team, with the same FHIR and audit approach used on our telehealth build.</>,
  },
];

const checklist = [
  ['Clinician and patient roles', 'Who signs in (physicians, nurses, admin, patients, caregivers) and what each role may see, change or approve.'],
  ['Existing systems', 'EHR/EMR, scheduling, billing, identity and messaging tools in use today, and which one is the source of truth for each record.'],
  ['Vendor API access', 'Whether sandbox and production API access is available, how long vendor approval takes and any per-call or licence costs.'],
  ['Migration volume', 'How many patients, documents and historical records move across, from which formats, and what can stay in the old system.'],
  ['Hosting requirements', 'Region, data residency and backup expectations your privacy officer and contracts set, confirmed in writing during discovery.'],
  ['Accessibility', 'The accessibility standard and devices you must support, including screen readers, larger text and low-bandwidth connections.'],
  ['Operational support', 'Support hours, who triages clinical-impact issues, uptime targets, release windows and how incidents are reported to you.'],
];

const buyerContent = (
  <section aria-labelledby="healthcare-buyer-guide" style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 id="healthcare-buyer-guide" style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Scoping a healthcare software project</h2>
      <p style={{ ...pStyle, maxWidth: 720 }}>Most healthcare buyers come to us for one of three projects. Jump to <a href="#telehealth-app-development" style={linkStyle}>telehealth</a>, <a href="#patient-portal-development" style={linkStyle}>patient portals</a>, <a href="#ehr-integration" style={linkStyle}>EHR integration</a> or the <a href="#healthcare-procurement-checklist" style={linkStyle}>procurement checklist</a>.</p>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', marginTop: 20 }}>
        {buyerTracks.map(t => (
          <article key={t.id} id={t.id} style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>{t.title}</h3>
            <p style={pStyle}><strong>Starting point:</strong> {t.start}</p>
            <p style={pStyle}><strong>First workflow to scope:</strong> {t.workflow}</p>
            <p style={pStyle}><strong>System access needed:</strong> {t.access}</p>
            <p style={pStyle}><strong>Acceptance criteria:</strong> {t.accept}</p>
            <p style={{ ...pStyle, marginBottom: 0 }}>{t.extra}</p>
          </article>
        ))}
      </div>
      <div id="healthcare-procurement-checklist" style={{ ...cardStyle, marginTop: 28 }}>
        <h3 style={{ marginTop: 0, marginBottom: 8 }}>Healthcare procurement checklist</h3>
        <p style={pStyle}>Agree these requirements in discovery so the quote, timeline and statement of work reflect your real environment. Your privacy and compliance team stays the authority on legal obligations; we build to the requirements you confirm.</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          {checklist.map(([k, v]) => (
            <li key={k} style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>{k}:</strong> {v}</li>
          ))}
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>Working with a team in Alberta, Ontario or BC? See our local pages below, from <Link href={serviceCityPath('mobile-app-development', 'edmonton')} style={linkStyle}>app development in Edmonton</Link> to <Link href={serviceCityPath('mobile-app-development', 'vancouver')} style={linkStyle}>app development in Vancouver</Link>.</p>
      </div>
    </div>
  </section>
);

const extra = (
  <section style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Related work</h2>
      <ul style={{ margin: '0 0 16px', paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/case-studies/healthcare-telehealth" style={linkStyle}>Healthcare telehealth platform case study</Link></li>
      </ul>
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Services for this sector</h2>
      <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/services/web-development" style={linkStyle}>Web development</Link></li>
        <li><Link href="/services/mobile-app-development" style={linkStyle}>Mobile app development</Link></li>
        <li><Link href="/services/ai-ml" style={linkStyle}>AI & machine learning</Link></li>
      </ul>
    </div>
  </section>
);

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="healthcare"
      name="Healthcare"
      copy={{ badge: "Healthcare", title: <>Healthcare Software Development That <span style={{ color: 'var(--brand)' }}>Saves Lives.</span></>, desc: <>Healthcare software development in Canada — PHIPA- and PIPEDA-compliant telehealth platforms, EHR integrations and clinical tools trusted by healthcare providers. Privacy &amp; compliance: see our <Link href="/blog/app-privacy-compliance-canada" style={{ color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>PIPEDA, Law 25 and PHIPA checklist for Canadian apps</Link>.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "Healthcare Client", headline: "100K+ patients, 99.9% uptime, HIPAA audit passed", text: "We built their HIPAA-compliant telehealth platform from scratch \u2014 HL7 FHIR APIs, WebRTC video, and a full EHR integration suite.", quote: "The Mapletech team understood healthcare compliance from day one. Zero audit findings.", cite: "Chief Medical Officer, National Healthcare Provider" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your Healthcare Platform.", sub: "HIPAA-compliant, audit-ready, clinician-approved. Let's build it together." }}
      faqs={industryFaqs.healthcare}
      cityLinks={cityLinks}
      buyerContent={buyerContent}
      extra={extra}
    />
  );
}
