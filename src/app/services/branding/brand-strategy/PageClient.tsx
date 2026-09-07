import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '80+', label: 'Brand strategies delivered' },
  { value: '3x', label: 'Avg brand recognition lift' },
  { value: '6-week', label: 'Strategy sprint' },
  { value: 'F500 & startups', label: 'Client range' },
];

const services = [
  { icon: '🎯', title: 'Brand Positioning & Differentiation', desc: 'Define the unique space your brand occupies in the market — crafting a positioning statement that clearly articulates why customers should choose you over every alternative.' },
  { icon: '👥', title: 'Audience Persona Development', desc: 'Deep-dive research into your target customers — their motivations, pain points, buying triggers, and media habits — building detailed personas that guide every brand decision.' },
  { icon: '🔭', title: 'Competitive Landscape Analysis', desc: 'A structured audit of your competitive environment — positioning maps, messaging analysis, visual identity review — identifying white space for your brand to own.' },
  { icon: '🏗️', title: 'Brand Architecture', desc: 'Strategic organisation of your brand portfolio — whether you operate a single brand, endorsed brand, or house of brands — with clear hierarchy and relationship rules.' },
  { icon: '🗣️', title: 'Messaging Framework & Tone of Voice', desc: 'A messaging hierarchy from core value proposition to audience-specific proof points, plus tone of voice guidelines that make your brand instantly recognisable in any context.' },
  { icon: '💡', title: 'Brand Values & Purpose Definition', desc: 'Articulation of your brand\'s why — purpose, mission, vision, and values — creating the internal north star that aligns your team and resonates with values-driven customers.' },
];

const steps = [
  { num: '01', title: 'Discovery & Research', desc: 'Stakeholder interviews, customer research, competitor analysis, and category immersion — building the factual foundation every great brand strategy is built upon.' },
  { num: '02', title: 'Positioning Workshop', desc: 'A facilitated strategy workshop bringing together your leadership team to align on purpose, audience, competitive context, and positioning direction.' },
  { num: '03', title: 'Strategy Development', desc: 'We synthesise all inputs into a comprehensive brand strategy document — positioning, personas, architecture, messaging framework, and tone of voice.' },
  { num: '04', title: 'Brand Brief', desc: 'A concise, shareable brand brief distilling the strategy into an actionable reference document for your design, marketing, and content teams.' },
];

const faqs = [
  { q: 'What is brand strategy vs brand identity?', a: 'Brand strategy is the thinking — your positioning, purpose, messaging, and audience definition. Brand identity is the visual and verbal expression of that strategy — your logo, colours, typography, and tone of voice. Strategy always comes first; identity should express it.' },
  { q: 'How long does brand strategy take?', a: 'Our brand strategy sprint takes 6 weeks from kickoff to final deliverable. This includes discovery, research, a positioning workshop, two rounds of review, and final documentation. Larger organisations with complex architectures may require 8–10 weeks.' },
  { q: 'Who needs to be involved from our team?', a: 'We typically work with your CEO or founder, marketing lead, and one or two senior team members who understand your customers deeply. We facilitate the process — you provide the expertise about your business, customers, and ambitions.' },
  { q: 'How do you measure brand strategy success?', a: 'Brand strategy success is measured over time through brand tracking studies (awareness, consideration, preference), NPS scores, share of voice in earned media, employee engagement surveys, and commercial metrics like win rates and average deal value.' },
  { q: 'Do you work with B2B or B2C brands?', a: 'Both. Our team has developed brand strategies for B2C consumer brands, SaaS companies, professional services firms, D2C e-commerce businesses, and enterprise B2B organisations. The strategic process adapts to your category and customer type.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/branding", label: "Branding & Identity" }}
      name="Brand Strategy"
      copy={{ badge: "BRANDING & IDENTITY", title: <>Strategy That <span style={{ color: 'var(--brand)' }}>Defines Brands</span></>, desc: <>A rigorous brand strategy that positions you distinctly in the market, articulates your purpose clearly, and gives your team the strategic foundation to build a brand that lasts.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
