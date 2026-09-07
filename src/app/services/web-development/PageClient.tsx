import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '200+', label: 'Web Projects' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40ms', label: 'Avg Load' },
  { value: '150+', label: 'Clients' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'SaaS Platform Development',
    tag: 'Full-Stack',
    desc: 'End-to-end SaaS products — multi-tenant architecture, subscription billing, role-based auth, and analytics dashboards built to grow from 10 to 10 million users.',
    chips: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
  },
  {
    title: 'Enterprise Web Applications',
    tag: 'Enterprise',
    desc: 'Complex internal tools, CRMs, ERPs and portals built for thousands of concurrent users with SSO, audit trails, and compliance controls baked in from day one.',
    chips: ['React', 'TypeScript', 'GraphQL', 'Kubernetes', 'OAuth'],
  },
  { title: 'E-Commerce Storefronts', tag: 'Commerce', desc: 'High-conversion online stores with native checkout, inventory management and marketing integrations.' },
  { title: 'Progressive Web Apps', tag: 'PWA', desc: 'Offline-capable, installable web experiences that deliver app-quality performance across every browser.' },
  { title: 'API Development', tag: 'Backend', desc: 'Robust RESTful and GraphQL APIs engineered for scale, security, and seamless third-party integration.' },
  { title: 'CMS & Headless', tag: 'Content', desc: 'Headless CMS architectures that give your content team full control without slowing down the frontend.' },
];

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We map your business goals, user journeys, and technical requirements. Every constraint is identified before architecture decisions are made.',
    deliverables: ['Product Brief', 'User Personas', 'Requirements Doc', 'Project Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'System design, database schema, API contracts and infrastructure planning — all documented and signed off before a single component is written.',
    deliverables: ['System Design', 'DB Schema', 'API Contracts', 'Infra Plan'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'High-fidelity UI/UX in Figma, responsive across all breakpoints, with a live design system and interactive prototype your team can click through.',
    deliverables: ['Wireframes', 'Figma Prototype', 'Design System', 'Responsive Specs'],
    duration: '2–3 weeks',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Two-week agile sprints with daily standups, staged deployments and thorough code reviews. You see working software every single week.',
    deliverables: ['Sprint Demos', 'Staged Builds', 'Code Reviews', 'API Integration'],
    duration: '4–12 weeks',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Production deployment, performance optimisation, SEO foundations, and monitoring setup. Post-launch SLA keeps your platform healthy as you scale.',
    deliverables: ['Production Deploy', 'Performance Audit', 'SEO Baseline', 'SLA Support'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'Frontend', chips: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vite'] },
  { label: 'Backend', chips: ['Node.js', 'Python', 'GraphQL', 'REST', 'PostgreSQL'] },
  { label: 'Cloud', chips: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'Kubernetes'] },
  { label: 'CMS', chips: ['Contentful', 'Sanity', 'Strapi', 'WordPress'] },
];

const industries = [
  { icon: '💰', title: 'FinTech', desc: 'Trading dashboards, payment portals, KYC flows and regulatory-compliant financial platforms.' },
  { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant patient portals, EHR integrations and telemedicine web platforms.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'High-volume storefronts, marketplace platforms and B2B ordering systems.' },
  { icon: '🚀', title: 'SaaS', desc: 'Multi-tenant SaaS products with subscription billing, analytics and onboarding flows.' },
  { icon: '📺', title: 'Media', desc: 'Content platforms, streaming portals and CMS-driven publishing systems.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Internal tools, ERPs, procurement portals and mission-critical business applications.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="web-development"
      name="Web Development"
      copy={{ badge: "Web Development", title: <>We Build Web Systems<br />That <span style={{ color: 'var(--brand)' }}>Scale.</span></>, desc: <>From SaaS platforms to enterprise portals — we engineer fast, secure, and beautiful web products that grow with your business.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
    />
  );
}
