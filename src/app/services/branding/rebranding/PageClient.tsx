import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '60+', label: 'Rebrands completed' },
  { value: 'Zero', label: 'Brand equity lost' },
  { value: 'Phased', label: 'Rollout expertise' },
  { value: '100%', label: 'Stakeholder alignment achieved' },
];

const services = [
  { icon: '🔬', title: 'Brand Audit & Gap Analysis', desc: 'A thorough assessment of your current brand — what is working, what has become outdated, where equity exists, and where the identity is failing to reflect your current business reality.' },
  { icon: '🤝', title: 'Stakeholder Research & Alignment', desc: 'Structured interviews and workshops with leadership, staff, customers, and partners — building a shared understanding of brand strengths, weaknesses, and strategic direction.' },
  { icon: '🗺️', title: 'Rebrand Strategy', desc: 'A strategic rebrand rationale defining what changes, what is retained, positioning evolution, and the strategic narrative that will guide and justify the new identity.' },
  { icon: '✨', title: 'New Identity Design', desc: 'Full visual identity design for the rebranded organisation — logo, colour system, typography, and brand elements — built on the rebrand strategy with your heritage in mind.' },
  { icon: '📋', title: 'Rebrand Rollout Plan', desc: 'A phased implementation roadmap covering every touchpoint — digital, print, signage, merchandise, and communications — with timelines, asset requirements, and ownership assigned.' },
  { icon: '📢', title: 'Internal Brand Launch Support', desc: 'Internal communications and team launch materials to bring your organisation on the rebrand journey — ensuring employees become brand champions from day one of the new identity.' },
];

const steps = [
  { num: '01', title: 'Brand Audit', desc: 'We assess your current brand comprehensively — internal perception, customer research, competitive context, asset inventory, and brand equity measurement.' },
  { num: '02', title: 'Stakeholder Alignment', desc: 'Leadership workshops and cross-functional sessions to align on rebrand rationale, strategic direction, and success criteria before any design work begins.' },
  { num: '03', title: 'New Identity Design', desc: 'The new identity is developed — with clear articulation of what was retained from the existing brand and what was evolved, and why each decision was made.' },
  { num: '04', title: 'Phased Launch', desc: 'A structured rollout plan ensures the new brand launches consistently across all channels — with internal launch first, followed by a coordinated external reveal.' },
];

const faqs = [
  { q: 'When does a company need to rebrand?', a: 'Common triggers for rebranding include a significant strategic pivot, merger or acquisition, a dated visual identity, moving upmarket, entering new markets, recovering from reputation damage, or simply finding that the brand no longer reflects who you are and what you stand for today.' },
  { q: 'How do you protect existing brand equity?', a: 'Our rebrand process always begins with a brand equity audit — identifying what associations, visual elements, and brand assets have genuine positive value in your audience\'s minds. We design the new identity to honour and carry forward that equity rather than discarding it.' },
  { q: 'How long does a rebrand take?', a: 'A full rebrand from audit to completed identity design typically takes 10–16 weeks. Rollout and asset production continues beyond that depending on the number of touchpoints. We provide a detailed project timeline at the outset scoped to your specific business complexity.' },
  { q: 'How do we announce the rebrand to customers?', a: 'We develop a rebrand communications plan covering the narrative (the why behind the change), timing strategy, channel-specific messaging, and PR considerations. Internal announcement always precedes external — your team needs to be aligned advocates before the world sees the new brand.' },
  { q: 'What is included in a rebrand project?', a: 'Our rebrand projects include brand audit, stakeholder research, rebrand strategy, full visual identity design (logo, colours, typography, brand elements), brand guidelines, a phased rollout plan, and internal launch support. Asset production for specific applications (website, collateral, etc.) is scoped separately.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/branding", label: "Branding & Identity" }}
      name="Rebranding Services"
      copy={{ badge: "BRANDING & IDENTITY", title: <>Rebranding Done <span style={{ color: 'var(--brand)' }}>With Confidence</span></>, desc: <>A rigorous, stakeholder-led rebrand process that evolves your identity strategically — protecting what works, replacing what doesn't, and launching with full organisational alignment.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
