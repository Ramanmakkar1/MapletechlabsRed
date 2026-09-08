import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';

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
                { name: 'Web Development', href: '/services/web-development', desc: 'HIPAA-compliant patient portals and provider dashboards with secure data handling.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Telehealth apps and patient engagement tools with EHR integration and push notifications.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Clinical decision support, diagnostic imaging AI and predictive care pathway models.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'HIPAA-ready cloud infrastructure on AWS and Azure with audit logging and encryption.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant health platforms with subscription billing and role-based access control.' },
              ];

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="healthcare"
      name="Healthcare"
      copy={{ badge: "Healthcare", title: <>Healthcare Software Development That <span style={{ color: 'var(--brand)' }}>Saves Lives.</span></>, desc: <>Healthcare software development in Canada — PHIPA- and PIPEDA-compliant telehealth platforms, EHR integrations and clinical tools trusted by healthcare providers.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "Healthcare Client", headline: "100K+ patients, 99.9% uptime, HIPAA audit passed", text: "We built their HIPAA-compliant telehealth platform from scratch \u2014 HL7 FHIR APIs, WebRTC video, and a full EHR integration suite.", quote: "The Mapletech team understood healthcare compliance from day one. Zero audit findings.", cite: "Chief Medical Officer, National Healthcare Provider" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your Healthcare Platform.", sub: "HIPAA-compliant, audit-ready, clinician-approved. Let's build it together." }}
    />
  );
}
