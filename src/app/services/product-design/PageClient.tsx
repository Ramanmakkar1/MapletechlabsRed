import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '500+', label: 'Screens Designed' },
  { value: '4.8★', label: 'Avg Usability Score' },
  { value: '40%', label: 'Avg Conversion Lift' },
  { value: '200+', label: 'Design Systems' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'UX Research & Strategy',
    tag: 'Research',
    desc: 'User interviews, competitive analysis, jobs-to-be-done mapping and validated product roadmaps before a single pixel is moved.',
    chips: ['Figma', 'Maze', 'Hotjar', 'Miro', 'UserTesting'],
  },
  {
    title: 'UI Design & Prototyping',
    tag: 'Interface Design',
    desc: 'High-fidelity responsive interfaces with interactive prototypes, micro-animations, and developer-ready design systems.',
    chips: ['Figma', 'Framer', 'Lottie', 'Storybook', 'Zeplin'],
  },
  { title: 'Mobile App Design', tag: 'iOS / Android', desc: 'Native-feel mobile interfaces designed for thumb-friendly interaction and platform conventions.' },
  { title: 'Design Systems', tag: 'Systems', desc: 'Scalable component libraries and token-based design systems your engineering team will love.' },
  { title: 'Brand Identity', tag: 'Branding', desc: 'Logo, typography, colour systems and brand guidelines that make you instantly recognisable.' },
  { title: 'Accessibility Audits', tag: 'a11y', desc: 'WCAG 2.2 AA compliance audits with a prioritised remediation plan for every finding.' },
];

const steps = [
  {
    num: '01',
    title: 'Research',
    desc: 'User interviews, heuristic evaluations, competitor teardowns and analytics review. We build empathy before we build anything else.',
    deliverables: ['User Interview Summaries', 'Competitive Matrix', 'Heuristic Report', 'Analytics Audit'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Jobs-to-be-done mapping, information architecture and a prioritised product roadmap aligned to your business metrics.',
    deliverables: ['JTBD Map', 'IA Diagram', 'Product Roadmap', 'Success Metrics'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'Wireframes',
    desc: 'Low and mid-fidelity wireframes for every key user flow — validated with real users through moderated usability tests before visual design begins.',
    deliverables: ['Lo-Fi Wireframes', 'User Flow Diagrams', 'Usability Test Report', 'Iteration Log'],
    duration: '1–3 weeks',
  },
  {
    num: '04',
    title: 'Visual Design',
    desc: 'Pixel-perfect high-fidelity UI with your brand applied at every level. Interactive Figma prototypes for stakeholder sign-off.',
    deliverables: ['Hi-Fi Screens', 'Design System', 'Interactive Prototype', 'Responsive Variants'],
    duration: '2–4 weeks',
  },
  {
    num: '05',
    title: 'Handoff',
    desc: 'Developer-ready Figma files with auto-layout, annotated specs, asset exports and a Storybook component library. Zero ambiguity in build.',
    deliverables: ['Figma Handoff', 'Zeplin Specs', 'Storybook', 'Motion Guidelines'],
    duration: '1 week',
  },
];

const techCategories = [
  { label: 'Design', chips: ['Figma', 'Framer', 'Sketch', 'Adobe XD', 'Principle'] },
  { label: 'Research', chips: ['Maze', 'Hotjar', 'FullStory', 'Optimal Workshop'] },
  { label: 'Prototyping', chips: ['Framer', 'ProtoPie', 'InVision', 'Zeplin'] },
  { label: 'Motion', chips: ['Lottie', 'Rive', 'After Effects', 'Spline'] },
];

const industries = [
  { icon: '💳', title: 'FinTech', desc: 'Clarity-first dashboards, onboarding flows and trust-building interfaces for financial products.' },
  { icon: '🏥', title: 'HealthTech', desc: 'Accessible, HIPAA-aware interfaces that reduce cognitive load for patients and clinicians alike.' },
  { icon: '📱', title: 'Consumer Apps', desc: 'Habit-forming, delightful mobile experiences designed to maximise retention and NPS.' },
  { icon: '☁️', title: 'SaaS', desc: 'Complex feature surfaces made simple through progressive disclosure and strong IA.' },
  { icon: '🛍️', title: 'E-Commerce', desc: 'Conversion-optimised product pages, checkout flows and personalisation systems.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Data-dense internal tools and dashboards that empower rather than overwhelm.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="product-design"
      name="Product Design"
      copy={{ badge: "Product Design", title: <>Design That Converts<br /><span style={{ color: 'var(--brand)' }}>Users to Customers.</span></>, desc: <>UX research, product strategy, and pixel-perfect interfaces — designed to delight users and drive measurable business outcomes.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
    />
  );
}
