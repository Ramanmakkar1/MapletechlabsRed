import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '200+', label: 'Products Wireframed' },
  { value: '90%', label: 'Stakeholder Approval Rate' },
  { value: 'Figma', label: 'First Workflow' },
  { value: '1wk', label: 'To First Wireframes' },
];

const services = [
  { icon: '📐', title: 'Low-Fidelity Wireframes', desc: 'Fast, focused lo-fi sketches that communicate layout and hierarchy without visual distraction — perfect for early alignment.' },
  { icon: '🗂️', title: 'User Flow Mapping', desc: 'Visual maps of every path a user can take through your product, ensuring no dead ends and logical task completion.' },
  { icon: '📱', title: 'Responsive Layout Planning', desc: 'Wireframes across desktop, tablet, and mobile breakpoints so responsive behaviour is considered from day one.' },
  { icon: '📚', title: 'Interaction Pattern Library', desc: 'A documented set of reusable interaction patterns that ensures consistency across every screen and user journey.' },
  { icon: '🤝', title: 'Stakeholder Review Sessions', desc: 'Structured review workshops that gather consolidated feedback efficiently, preventing scope drift and misalignment.' },
  { icon: '📦', title: 'Handoff-Ready Wireframe Specs', desc: 'Annotated wireframes with spacing, component notes, and interaction specs ready for visual designers and developers.' },
];

const steps = [
  { num: '01', title: 'Brief & User Flows', desc: 'We start with your goals, user journeys, and content inventory to map every screen and flow before drawing a single frame.' },
  { num: '02', title: 'Low-Fi Wireframes', desc: 'Rapid low-fidelity wireframes are produced for key screens, focusing on structure, hierarchy, and navigation logic.' },
  { num: '03', title: 'Stakeholder Review', desc: 'We facilitate a focused review session, gather consolidated feedback, and document all approved changes.' },
  { num: '04', title: 'Refined Specs', desc: 'Final wireframes are annotated with specs, component notes, and interaction guidance — fully ready for design or development.' },
];

const faqs = [
  { q: 'Lo-fi vs hi-fi wireframes — which do I need?', a: 'Lo-fi wireframes are grayscale layouts focused on structure and content hierarchy — ideal for early alignment and fast iteration. Hi-fi wireframes include realistic typography, spacing, and sometimes colour — useful when moving into visual design or developer handoff. Most projects benefit from lo-fi first, then hi-fi after stakeholder sign-off.' },
  { q: 'How many rounds of revisions are included?', a: 'Our standard wireframing engagement includes two rounds of structured revisions. Additional revision rounds can be added as needed. We recommend consolidating feedback through a single stakeholder review to keep iterations efficient and the timeline on track.' },
  { q: 'Do you use Figma or other tools?', a: 'We work Figma-first. All wireframes, user flow diagrams, and handoff specs are delivered as organised Figma files. If your team uses other tools like Sketch, Miro, or Balsamiq, we can accommodate — just let us know at kickoff.' },
  { q: 'Can wireframes be tested with users?', a: 'Yes — even lo-fi wireframes can be linked into clickable prototypes for lightweight usability testing. This is highly recommended before investing in full visual design, as it catches navigation issues and usability problems at the cheapest possible stage.' },
  { q: 'What files do I receive at the end?', a: 'You receive a fully organised Figma file containing all wireframes, annotated specs, user flow diagrams, and a component inventory. Exports as PDF and PNG are also provided for stakeholder presentations. You own all delivered files outright.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/product-design", label: "Product Design" }}
      name="Wireframing & UX Design"
      copy={{ badge: "PRODUCT DESIGN", title: <>Wireframing That <span style={{ color: 'var(--brand)' }}>Aligns Teams</span></>, desc: <>From first sketch to handoff-ready specs, we wireframe every screen and flow so your team builds the right product — fast.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
