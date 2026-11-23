import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '200+', label: 'Brands Built' },
  { value: '4.9★', label: 'Client Rating' },
  { value: 'F500', label: 'Fortune 500 Clients' },
  { value: '15', label: 'Design Awards' },
];

const services = [
  { icon: '🎯', title: 'Brand Strategy', desc: 'Positioning, audience research and competitive analysis that define where your brand wins and why customers should choose you.' },
  { icon: '✏️', title: 'Logo & Identity', desc: 'Iconic logos and identity systems built for versatility — from business cards to billboards, every format covered.' },
  { icon: '🎨', title: 'Visual Design System', desc: 'Typography, colour palettes, iconography and layout grids that create a cohesive visual language across every touchpoint.' },
  { icon: '📋', title: 'Brand Guidelines', desc: 'Comprehensive brand books that ensure consistency across your team, agency partners and every piece of collateral.' },
  { icon: '💬', title: 'Naming & Messaging', desc: 'Company names, taglines, tone-of-voice frameworks and messaging hierarchies that resonate with your ideal customer.' },
  { icon: '🔄', title: 'Brand Refresh', desc: 'Evolve your existing brand without losing equity — strategic updates that modernise your identity while honouring your heritage.' },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'Brand audit, stakeholder interviews, competitor mapping and audience research to understand your market position and uncover the whitespace your brand can own.' },
  { num: '02', title: 'Strategy', desc: 'We define your positioning, personality, values and messaging architecture — the strategic foundation every design decision is built on.' },
  { num: '03', title: 'Design', desc: 'Concepts, refinements and final deliverables crafted iteratively with your team. Every element is purposeful, not decorative.' },
  { num: '04', title: 'Delivery', desc: 'Complete brand package with all file formats, usage guidelines and a handover session so your team can execute the brand flawlessly from day one.' },
];

const results = [
  { value: '40%', label: 'Brand Recognition Lift', sub: 'avg increase in aided recall' },
  { value: '2x', label: 'Conversion Rate', sub: 'post-rebrand on key landing pages' },
  { value: '95%', label: 'Client Satisfaction', sub: 'project delivery rating' },
];

const faqs = [
  { q: 'How long does a full brand identity project take?', a: 'A comprehensive brand identity — strategy through final deliverables — typically takes 6–10 weeks. Logo-only projects can be completed in 3–4 weeks. We set clear milestones at project kickoff.' },
  { q: 'What do I receive at the end of the project?', a: 'You receive full source files (AI, EPS, SVG, PNG, PDF), a complete brand guidelines document, colour codes for print and digital, font licences guidance, and social media asset templates.' },
  { q: 'Do you work with early-stage startups or only established companies?', a: 'Both. We love working with founders building from scratch — getting the brand right early prevents expensive rebrands later. We also work with established businesses ready to evolve their identity.' },
  { q: 'Can you help with brand implementation across our website and marketing?', a: 'Yes. Brand implementation is a natural extension of identity work. We can apply the new brand across your website, pitch decks, social templates and marketing materials.' },
  { q: 'What makes your branding approach different?', a: 'We lead with strategy before picking up a pencil. Every visual decision is anchored to your positioning, audience and business goals — not trends or personal aesthetic preference.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="branding"
      name="Branding & Identity"
      copy={{ badge: "Branding & Identity", title: <>Branding &amp; Identity People <span style={{ color: 'var(--brand)' }}>Remember.</span></>, desc: <>A Canadian branding agency — logo, visual identity, brand strategy and guidelines that make your company instantly recognisable.</> }}
      stats={stats}
      services={services}
      steps={steps}
      results={results}
      faqs={faqs}
      servicesTitle="Brand Services, End to End"
    />
  );
}
