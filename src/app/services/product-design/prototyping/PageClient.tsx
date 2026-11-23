import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '300+', label: 'Prototypes Built' },
  { value: '5-day', label: 'Design Sprint Capability' },
  { value: '85%', label: 'Issue Catch Rate Pre-Dev' },
  { value: '60%', label: 'Dev Cost Saved' },
];

const services = [
  { icon: '🎨', title: 'Interactive Figma Prototypes', desc: 'High-fidelity, fully interactive prototypes built in Figma with realistic transitions, micro-interactions, and component states.' },
  { icon: '🖱️', title: 'Clickable User Journey Demos', desc: 'End-to-end clickable demos that walk stakeholders and investors through complete user journeys without a single line of code.' },
  { icon: '🧪', title: 'Usability Testing Sessions', desc: 'Moderated and unmoderated usability tests with real users to surface friction, confusion, and drop-off points before development.' },
  { icon: '📈', title: 'A/B Test Design', desc: 'Designing test variants for layout, copy, and CTA placement so your development team can run statistically valid experiments.' },
  { icon: '🔗', title: 'Prototype-to-Dev Handoff', desc: 'Annotated, spec-ready prototypes delivered with Figma Dev Mode enabled, ensuring pixel-perfect implementation by engineers.' },
  { icon: '♿', title: 'Accessibility Testing', desc: 'Prototype review against WCAG 2.1 AA standards including colour contrast, keyboard navigation, and screen reader compatibility.' },
];

const steps = [
  { num: '01', title: 'Concept Definition', desc: 'We align on scope, the specific flows to prototype, and the success criteria for usability testing before building anything.' },
  { num: '02', title: 'Prototype Build', desc: 'Interactive prototypes are built in Figma with realistic states, transitions, and edge cases that reflect the real product experience.' },
  { num: '03', title: 'User Testing', desc: 'We recruit participants, run moderated testing sessions, and capture findings with video recordings and severity ratings.' },
  { num: '04', title: 'Iterate & Finalise', desc: 'Test insights are implemented in a final prototype iteration, then handed off to developers with full specs and annotations.' },
];

const faqs = [
  { q: 'What fidelity of prototype do I need?', a: 'It depends on your goal. Low-fidelity clickable prototypes are great for testing navigation and information architecture quickly. High-fidelity interactive prototypes are better for investor demos, usability testing, and developer handoff. We typically recommend high-fidelity prototypes for any product heading into development.' },
  { q: 'How do you recruit test participants?', a: 'We source participants through our testing panel network, client customer lists, social recruitment, and third-party platforms like UserTesting and Respondent. We screen participants against your target persona criteria to ensure test results are representative of your actual users.' },
  { q: 'Can prototypes be tested on mobile?', a: 'Yes. Figma prototypes can be previewed natively on iOS and Android using the Figma mobile app, allowing us to conduct in-person or remote usability tests on real devices. Mobile testing is especially valuable for apps where touch gestures and thumb reach are critical usability factors.' },
  { q: 'What happens after testing?', a: 'We deliver a usability report with severity-ranked findings, video clips of key moments, and specific design recommendations. Depending on your engagement scope, we then iterate on the prototype to address critical issues before handing off to your development team.' },
  { q: 'How long does a prototype take to build?', a: 'A focused prototype covering 3-5 core user flows typically takes one to two weeks. A comprehensive prototype spanning an entire application can take three to four weeks. If you need something faster, our five-day design sprint format can produce a testable prototype in a single week.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/product-design", label: "Product Design" }}
      name="Prototyping & User Testing"
      copy={{ badge: "PRODUCT DESIGN", title: <>Prototyping That <span style={{ color: 'var(--brand)' }}>Catches Issues Early</span></>, desc: <>Interactive prototypes and real-user testing that surface usability problems before they become expensive engineering mistakes.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
