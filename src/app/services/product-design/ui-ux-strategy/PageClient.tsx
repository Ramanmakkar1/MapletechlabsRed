import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '150+', label: 'Products Designed' },
  { value: '40%', label: 'Avg Conversion Lift' },
  { value: '4.9/5', label: 'Usability Scores' },
  { value: '3wk', label: 'Strategy Sprint' },
];

const services = [
  { icon: '🔍', title: 'User Research & Persona Development', desc: 'Deep qualitative and quantitative research to build accurate user personas that drive every design decision.' },
  { icon: '📊', title: 'Competitive Analysis', desc: 'Thorough analysis of competitors and market leaders to identify gaps, opportunities, and strategic advantages.' },
  { icon: '🗺️', title: 'Information Architecture', desc: 'Structuring content and navigation so users find what they need intuitively, reducing friction and abandonment.' },
  { icon: '🔎', title: 'UX Audit of Existing Products', desc: 'Expert review of your current product to surface usability issues, accessibility gaps, and conversion blockers.' },
  { icon: '⚡', title: 'Design Sprint Facilitation', desc: 'Google Design Sprint methodology to validate ideas and solve complex problems in just five focused days.' },
  { icon: '🎯', title: 'Jobs-to-Be-Done Framework', desc: 'Uncovering the true motivations behind user behaviour to align product features with real needs and outcomes.' },
];

const steps = [
  { num: '01', title: 'Research & Discovery', desc: 'We conduct stakeholder interviews, user research, and competitive audits to build a full picture of your landscape.' },
  { num: '02', title: 'Synthesis', desc: 'Raw research is distilled into insights, opportunity maps, and prioritised problem statements.' },
  { num: '03', title: 'Strategy Definition', desc: 'We define the UX vision, principles, and measurable goals that will guide the entire product experience.' },
  { num: '04', title: 'Roadmap Delivery', desc: 'A prioritised, actionable roadmap is handed over with clear milestones, KPIs, and design recommendations.' },
];

const faqs = [
  { q: 'What is a UX strategy vs UI design?', a: 'UX strategy is the high-level plan that defines how a product will serve its users and business goals — it comes before any visual design. UI design is the execution: the visual, interactive layer users see. Strategy without execution is a document; execution without strategy is guesswork.' },
  { q: 'How long does a strategy engagement take?', a: 'Our core UX strategy sprint runs three weeks, covering research, synthesis, and roadmap delivery. For larger products or enterprises with multiple user segments, engagements typically extend to six to eight weeks to ensure thoroughness.' },
  { q: 'Do you conduct user interviews?', a: 'Yes — user interviews are central to our discovery phase. We recruit participants matching your target personas, conduct moderated sessions, and synthesise findings into actionable insights. Remote and in-person sessions are both available.' },
  { q: 'How do you measure UX success?', a: 'We define KPIs at the start of every engagement: task completion rates, time-on-task, Net Promoter Score, conversion rate, and user satisfaction scores (SUS/CSAT). These benchmarks are set before design work begins so progress is objectively measurable.' },
  { q: 'Can strategy work be done remotely?', a: 'Absolutely. We have delivered strategy engagements for clients across North America, Europe, and the Asia-Pacific region entirely remotely using Figma, Miro, Notion, and video facilitation. Timezone alignment is planned at the kickoff.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/product-design", label: "Product Design" }}
      name="UI/UX Strategy"
      copy={{ badge: "PRODUCT DESIGN", title: <>UI/UX Strategy That <span style={{ color: 'var(--brand)' }}>Converts</span></>, desc: <>We craft evidence-based UX strategies that align user needs with business goals — reducing guesswork and accelerating product-market fit.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
