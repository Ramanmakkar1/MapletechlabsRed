import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '50+', label: 'SaaS Products Shipped' },
  { value: '$200M+', label: 'ARR Generated' },
  { value: '99.99%', label: 'Uptime' },
  { value: '8-Week', label: 'MVP Timeline' },
];

const services = [
  { icon: '🏗️', title: 'SaaS Architecture', desc: 'Multi-tenant data isolation, org-level customisation and the infrastructure patterns that support 10 to 10 million users without re-architecting.' },
  { icon: '💳', title: 'Subscription Billing', desc: 'Stripe integration with flat-rate, per-seat, metered and usage-based billing — trial management, proration and dunning all handled.' },
  { icon: '🔐', title: 'Auth & Multi-tenancy', desc: 'SSO (SAML/OIDC), role-based access control, organisation management and audit logs — enterprise-ready from day one.' },
  { icon: '📊', title: 'Analytics Dashboards', desc: 'Usage analytics, revenue metrics, churn indicators and feature adoption dashboards that give your team and customers actionable data.' },
  { icon: '🔌', title: 'API Platform', desc: 'RESTful and GraphQL APIs with versioning, rate limiting, webhooks, API keys and auto-generated SDK and documentation.' },
  { icon: '⚡', title: 'DevOps & Scaling', desc: 'CI/CD pipelines, containerised deployments, auto-scaling infrastructure, zero-downtime migrations and 24/7 monitoring.' },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'We map your target customer, core use case, pricing model and technical constraints — producing a product spec and architecture ADR before writing any code.' },
  { num: '02', title: 'Architecture', desc: 'Database schema, API contract, auth model, billing flows and infrastructure design reviewed and signed off before MVP development begins.' },
  { num: '03', title: 'MVP', desc: 'Core feature set built in 6–8 weeks, deployed to production with real customers — billing live, auth working, and the critical loop your first cohort needs to see value.' },
  { num: '04', title: 'Scale', desc: 'Post-PMF feature expansion, performance optimisation, enterprise tier additions and the infrastructure hardening needed to support aggressive growth.' },
];

const results = [
  { value: '8wk', label: 'MVP to Production', sub: 'median time from kickoff to launch' },
  { value: '$200M+', label: 'ARR Enabled', sub: 'across portfolio of SaaS products' },
  { value: '99.99%', label: 'Uptime', sub: 'SLA across production SaaS platforms' },
];

const faqs = [
  { q: 'What tech stack do you use for SaaS products?', a: 'Our default stack is Next.js (frontend and API routes), PostgreSQL (primary database), Redis (caching and queues), Stripe (billing), Auth.js or Clerk (authentication) and AWS or Vercel (infrastructure). We adapt based on your requirements and existing technology.' },
  { q: 'Can you build an MVP in 8 weeks?', a: 'Yes, for a well-scoped core feature set. The 8-week MVP timeline applies when discovery is complete, design is approved and the scope is disciplined. We will tell you upfront if your requirements require more time — we do not over-promise.' },
  { q: 'Do you handle multi-tenancy from day one, or can I add it later?', a: 'Multi-tenancy is significantly cheaper to build correctly from the start than to retrofit. We architect data isolation, org management and tenant-scoped permissions at the schema level from day one, which protects you as you scale into enterprise customers.' },
  { q: 'Will you help us after launch, or is it a handoff?', a: 'We offer ongoing engineering partnerships — retainer-based or project-by-project. Many clients engage us for 6–18 months post-launch for feature development, infrastructure scaling and technical leadership ahead of fundraising rounds.' },
  { q: 'How do you approach SaaS pricing and billing architecture?', a: 'We start with your go-to-market model and design the billing architecture to match — free tier, trial-to-paid, per-seat, usage-based or hybrid. We configure Stripe with your exact pricing logic, automate invoicing and build the self-serve upgrade/downgrade flows your customers expect.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="saas-development"
      name="SaaS Development"
      copy={{ badge: "SaaS Development", title: <>SaaS Development<br />That <span style={{ color: 'var(--brand)' }}>Scales.</span></>, desc: <>A Canadian SaaS development company building multi-tenant platforms with billing, auth and analytics — engineered to grow from zero to Series A and beyond.</> }}
      stats={stats}
      services={services}
      steps={steps}
      results={results}
      faqs={faqs}
      servicesTitle="Full-Stack SaaS Engineering"
    />
  );
}
