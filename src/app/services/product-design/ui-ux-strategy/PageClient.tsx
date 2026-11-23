import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { serviceCityPath } from '@/data/serviceCity';

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

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When to hire a UI/UX strategy team</h2>
        <p style={{ margin: '0 0 24px' }}>
          A 3wk UI/UX strategy sprint maps users, journeys and priorities before design or build. It gives your team evidence for deciding what to improve first and what to leave out.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What the engagement covers</h3>
        <ol style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li><strong>Research:</strong> stakeholder interviews, user research and competitive audits to understand user needs.</li>
          <li><strong>Wireframes:</strong> wireframe direction for the highest-priority screens and flows.</li>
          <li><strong>Design system:</strong> a <Link href="/services/product-design/design-systems">shared design system</Link> keeps delivery consistent across the product.</li>
          <li><strong>Handoff:</strong> a prioritised roadmap with milestones, KPIs and design recommendations.</li>
        </ol>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>Research findings that explain user needs, pain points and opportunities.</li>
          <li>A journey map of key tasks, friction points and moments that matter.</li>
          <li>A prioritised roadmap that sequences improvements against business goals.</li>
          <li>Wireframe direction for the highest-priority screens and flows.</li>
          <li>Success metrics to evaluate the experience after launch.</li>
        </ul>
        <p>
          Turn the strategy into <Link href="/services/product-design/wireframing">wireframes</Link>, validate critical flows with <Link href="/services/product-design/prototyping">interactive prototypes</Link>, and keep delivery consistent with a <Link href="/services/product-design/design-systems">shared design system</Link>. For budget planning, read our <Link href="/blog/ui-ux-design-cost-canada">UI/UX design cost guide for Canada</Link>.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>Proof</h3>
        <p style={{ margin: '0 0 24px' }}>
          See the results in our <Link href="/case-studies/ecommerce-platform">enterprise e-commerce checkout redesign case study</Link>, where conversion rose from 2.1% to 3.8% in 90 days. That work sits within our full <Link href="/services/product-design">product design services</Link>.
        </p>
        <p>
          Explore UI/UX strategy in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('product-design', slug)}>{name}</Link></span>
          ))}. Ready to define your product priorities? <Link href="/contact">Book a UI/UX strategy consultation</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/product-design", label: "Product Design" }}
      name="UI/UX Strategy"
      copy={{ badge: "PRODUCT DESIGN", title: <>UI/UX Strategy That <span style={{ color: 'var(--brand)' }}>Converts</span></>, desc: <>UI/UX strategy is a three-week engagement that combines user research, journey mapping and wireframes into a prioritised roadmap your team can act on. It is for Canadian product and marketing teams that need evidence on what to improve first before investing in design or development.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
