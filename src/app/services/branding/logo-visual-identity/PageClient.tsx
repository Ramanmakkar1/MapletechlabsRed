import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '200+', label: 'Logos designed' },
  { value: '15+', label: 'Design awards won' },
  { value: 'All formats', label: 'Delivered on completion' },
  { value: '100%', label: 'Client satisfaction rate' },
];

const services = [
  { icon: '✏️', title: 'Primary Logo Design', desc: 'A distinctive primary logo mark crafted from scratch — combining mark, wordmark, or lettermark in a design system built to last decades, not seasons.' },
  { icon: '🔄', title: 'Logo Variations (Horizontal/Icon/Mono)', desc: 'A full suite of logo variations including horizontal lockup, stacked version, standalone icon mark, monochrome, reversed, and minimum size rules for every context.' },
  { icon: '🎨', title: 'Colour Palette Definition', desc: 'A primary and secondary colour system with precise HEX, RGB, CMYK, and Pantone specifications — selected for brand personality, accessibility, and cross-media consistency.' },
  { icon: '🔤', title: 'Typography Selection', desc: 'Carefully curated primary and secondary typefaces with hierarchy rules — display fonts, body fonts, and web-safe alternatives that reinforce your brand personality.' },
  { icon: '🖼️', title: 'Icon & Illustration Style', desc: 'A custom icon set and illustration style guide that extends your visual identity across UI, marketing materials, and social content with a consistent aesthetic language.' },
  { icon: '🌀', title: 'Brand Pattern & Texture Design', desc: 'Unique brand patterns, textures, and graphic elements that add depth to your visual identity system — turning packaging, presentations, and backgrounds into branded experiences.' },
];

const steps = [
  { num: '01', title: 'Brief & Inspiration', desc: 'A detailed creative brief session exploring your brand personality, audience, competitive context, and visual references — giving our designers a precise creative north star.' },
  { num: '02', title: 'Concept Development', desc: 'Our design team develops 3 distinct logo concepts with rationale — different strategic directions for you to review, react to, and build on.' },
  { num: '03', title: 'Refinement', desc: 'Your chosen concept direction is refined across two rounds of revisions — refining proportions, colour, spacing, and variations until every detail is perfect.' },
  { num: '04', title: 'Final Delivery', desc: 'All final logo files delivered in every format required — AI, EPS, SVG, PNG, JPG, PDF — alongside a logo usage guide covering dos and don\'ts.' },
];

const faqs = [
  { q: 'How many logo concepts do we receive?', a: 'We present 3 distinct logo concepts at the first review stage — each taking a different creative and strategic direction. You select one direction to develop further, with two rounds of refinement included in our standard package.' },
  { q: 'What file formats are delivered?', a: 'All final logos are delivered in AI (editable vector), EPS (print vector), SVG (web vector), PDF (print-ready), PNG with transparent background (multiple sizes), and JPG. We also provide dark, light, and monochrome versions.' },
  { q: 'How long does logo design take?', a: 'Our standard logo design process takes 3–4 weeks from brief to final delivery. This includes concept development (week 1–2), your review, refinement (week 3), and final file delivery (week 4). Rush timelines are available for an additional fee.' },
  { q: 'Can you work with an existing brand colour?', a: 'Absolutely. If you have an established brand colour or equity elements you wish to retain, we incorporate these constraints into the brief and design within them — while still delivering a fresh, refined identity.' },
  { q: 'Do you design for both digital and print?', a: 'Yes. Every logo system we create is designed to work perfectly across all applications — digital screens, social media, print collateral, signage, embroidery, and merchandise. We specify colours in both RGB/HEX for digital and CMYK/Pantone for print.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/branding", label: "Branding & Identity" }}
      name="Logo & Visual Identity"
      copy={{ badge: "BRANDING & IDENTITY", title: <>Logos That <span style={{ color: 'var(--brand)' }}>Make an Impact</span></>, desc: <>Award-winning logo design and complete visual identity systems — built to be distinctive, versatile, and timeless across every touchpoint your brand inhabits.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
