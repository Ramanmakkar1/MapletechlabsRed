import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import Link from 'next/link';

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
  { q: 'What drives prototyping and user-testing cost?', a: 'We quote after scoping flows and research goals, not from a generic rate card. Cost grows with the number of user journeys and screens, fidelity (linked wireframes versus a full interactive Figma prototype), platforms you need previewed (desktop web, mobile web, native app frames), how many component states and edge cases are in scope, whether moderated sessions and participant recruitment are included, and how many iteration rounds follow testing. A design sprint covering a narrow flow costs less than a multi-platform prototype with several test rounds and annotated dev handoff.' },
  { q: 'What should we bring to the first prototyping consultation?', a: 'Bring your primary user goal, the flows you most need validated, and any existing artefacts — briefs, analytics, support themes, or prior wireframes. Note target platforms (web, iOS, Android) and who will join testing (customers, internal staff, investors). Share constraints such as brand guidelines, accessibility expectations, and engineering timelines. If structure is still unsettled, say so; we can recommend starting with wireframing or a UX audit before high-fidelity prototyping.' },
];

function BuyerContent() {
  return (
    <section aria-labelledby="prototyping-engagement-guide" style={{ padding: 'var(--section-y-sm) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ maxWidth: 960, color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="prototyping-engagement-guide">Choosing scope for prototyping and user testing</h2>
        <p className="lede">Prototyping engagements differ mainly by fidelity, how many flows you need to exercise, and whether you are validating structure, selling a vision, or preparing engineers to build. We scope from those outcomes so you pay for testable journeys — not duplicate design work.</p>
        <h3>Wireframes versus an interactive Figma prototype</h3>
        <p className="lede">Linked <Link href="/services/product-design/wireframing">wireframes and UX layout work</Link> suit early alignment: information architecture, navigation, and content hierarchy before visual polish. They are faster to change when stakeholders still disagree on screen count or task order. An interactive Figma prototype adds realistic typography, component states, transitions, and micro-interactions — better for investor demos, moderated usability tests, and annotated handoff to development. If IA is unstable, start with wireframes; if you are heading into build or need credible user tests, high-fidelity prototyping usually returns more signal per session.</p>
        <h3>Scope flows, platforms, states, and participants</h3>
        <p className="lede">List the user journeys that matter for revenue or retention (signup, checkout, onboarding, admin tasks) and cap the first engagement to the highest-risk paths. Specify platforms: desktop web, responsive mobile web, and native frames for <Link href="/services/mobile-app-development">mobile app development</Link> handoff each add preview and test setup. For each screen, agree which states belong in scope — empty, loading, error, success, permissions — so tests reflect real product behaviour. For participants, define persona criteria, session length, and whether you need moderated sessions, unmoderated tasks, or stakeholder walkthroughs only; recruitment and screening scale with specificity.</p>
        <h3>Deliverables you can expect</h3>
        <p className="lede">Typical handoffs include a clickable prototype (Figma link or export suitable for your review process), a usability report with severity-ranked findings and short video clips of critical moments, iteration notes showing what changed after testing and why, and an annotated prototype ready for engineering (spacing, interaction notes, Dev Mode where agreed). Exact files are listed in your statement of work; we do not invent deliverables beyond what is scoped.</p>
        <h3>Accessibility and what happens after the prototype</h3>
        <p className="lede">Our accessibility capability includes prototype review against WCAG 2.1 AA expectations — contrast, focus order, labels, and keyboard paths in Figma — but that review cannot replace testing on the implemented product with real assistive technology, live data, and production components. Plan follow-up accessibility validation in code before launch. When friction is systemic rather than flow-specific, a <Link href="/services/product-design/ux-audit">UX audit</Link> can prioritise fixes before you invest in full-fidelity prototypes across every surface.</p>
        <h3>Cost drivers (no fixed prices here)</h3>
        <p className="lede">Budget scales with journey count and screen depth, fidelity, multi-platform previews, the number of states and edge cases modelled, test rounds and participant sourcing, and how many post-test iteration cycles you want before dev handoff. A narrow sprint on one flow is a different engagement than multi-platform prototyping with several moderated sessions — we quote once flows and research goals are agreed.</p>
        <p className="lede"><Link href="/contact?service=product-design">Book a product design consultation</Link> with your flow list, platforms, and testing goals so we can recommend fidelity and propose a fixed scope.</p>
      </div>
    </section>
  );
}

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
      buyerContent={<BuyerContent />}
    />
  );
}
