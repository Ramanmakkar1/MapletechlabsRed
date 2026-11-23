import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '100+', label: 'Brands Created' },
  { value: '30+', label: 'Industries Served' },
  { value: 'Full', label: 'Brand Package Delivery' },
  { value: 'Figma', label: '& Canva Files Included' },
];

const services = [
  { icon: '✏️', title: 'Logo Design & Wordmarks', desc: 'Original, versatile logo marks and wordmarks designed to work across every medium — from app icons to billboard signage.' },
  { icon: '🎨', title: 'Visual Identity System', desc: 'A cohesive visual language including iconography, illustration style, photography direction, and layout principles.' },
  { icon: '🖋️', title: 'Typography & Colour Palette', desc: 'Carefully selected type pairings and colour systems that convey your brand personality and pass accessibility checks.' },
  { icon: '📋', title: 'Brand Guidelines Document', desc: 'A comprehensive brand guidelines PDF and interactive Figma document that ensures consistency across every touchpoint.' },
  { icon: '📱', title: 'Social Media Templates', desc: 'Ready-to-use Canva and Figma templates for posts, stories, covers, and ads so your team produces on-brand content instantly.' },
  { icon: '📦', title: 'Packaging & Print Design', desc: 'Brand application for physical products, packaging, business cards, signage, and marketing collateral.' },
];

const steps = [
  { num: '01', title: 'Brand Discovery', desc: 'We run workshops and surveys to understand your mission, values, audience, competitors, and the personality you want to project.' },
  { num: '02', title: 'Concept Development', desc: 'Multiple distinct creative directions are explored and presented — each with rationale, moodboard, and logo concepts.' },
  { num: '03', title: 'Design Refinement', desc: 'Your chosen direction is refined with full colour, typography, and application mockups across real-world contexts.' },
  { num: '04', title: 'Brand Guidelines', desc: 'The finalised identity is packaged into a complete brand guidelines document and delivered with all source files.' },
];

const faqs = [
  { q: 'What\'s included in a brand identity package?', a: 'Our full brand identity package includes logo suite (primary, secondary, icon, wordmark), colour palette, typography system, brand guidelines document, social media templates, and all source files in Figma, AI, EPS, SVG, PNG, and PDF formats. Optional add-ons include packaging design, presentation templates, and motion guidelines.' },
  { q: 'How many logo concepts do we see?', a: 'We present three distinct creative directions in the initial concept presentation, each with a rationale, moodboard, and logo explorations. After you select a direction, we refine within that concept through two rounds of revisions before finalising.' },
  { q: 'Do you provide editable source files?', a: 'Yes — you receive full ownership of all source files. This includes editable Figma files, Adobe Illustrator vector files (AI/EPS), and web-ready exports (SVG/PNG/PDF). You are free to take these files to any designer or printer in the future.' },
  { q: 'How long does brand identity take?', a: 'A complete brand identity engagement typically runs four to six weeks: one week for discovery, one week for concept development, one week for presentation and feedback, and one to two weeks for refinement and final delivery. Rush timelines can be accommodated with advance notice.' },
  { q: 'Can you refresh an existing brand instead of starting from scratch?', a: 'Absolutely. Brand refreshes are a common engagement — we audit your existing brand equity, identify what\'s worth preserving, and modernise elements that are letting your brand down. A refresh is typically faster and more cost-effective than a full rebrand.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/product-design", label: "Product Design" }}
      name="Brand Identity Design"
      copy={{ badge: "PRODUCT DESIGN", title: <>Brand Identity That <span style={{ color: 'var(--brand)' }}>Gets Remembered</span></>, desc: <>We create distinctive brand identities that communicate who you are, what you stand for, and why customers should choose you — across every touchpoint.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
