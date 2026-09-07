import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '50+', label: 'SaaS Platforms Built' },
  { value: '$200M+', label: 'ARR Enabled' },
  { value: '8wk', label: 'MVP Timeline' },
  { value: '99.99%', label: 'Uptime SLA' },
];

const services = [
  { icon: '🏢', title: 'Multi-Tenant Architecture', desc: 'We design robust multi-tenant systems with proper data isolation — shared database, separate schemas, or separate databases — selecting the right model based on your compliance requirements and scale projections.' },
  { icon: '💳', title: 'Subscription Billing (Stripe)', desc: 'From free trials and freemium tiers to usage-based billing and annual contracts, we implement complete billing flows with Stripe — including proration, dunning management, invoices, and tax handling.' },
  { icon: '🔐', title: 'SSO & Auth', desc: 'We implement secure authentication using Auth0, Clerk, or custom JWT solutions, with support for SAML/SSO for enterprise customers, MFA, role-based access control, and audit logging.' },
  { icon: '📊', title: 'Admin Dashboards', desc: 'Super-admin and tenant-admin dashboards with real-time metrics, user management, subscription oversight, feature flag controls, and operational tooling to manage your platform at scale.' },
  { icon: '📈', title: 'Usage Analytics', desc: 'We instrument your platform with product analytics (Mixpanel, PostHog) and custom usage dashboards that track feature adoption, churn indicators, and growth metrics — giving you the data to make informed decisions.' },
  { icon: '🔗', title: 'API Platform & Webhooks', desc: 'We build developer-facing APIs with comprehensive documentation (OpenAPI/Swagger), webhook systems for real-time event delivery, API key management, and rate limiting to support ecosystem integrations.' },
];

const steps = [
  { num: '01', title: 'Product Discovery', desc: 'We run structured discovery workshops to define your ICP, core workflow, pricing model, and technical requirements — producing a product spec, architecture proposal, and phased roadmap with clear MVP scope.' },
  { num: '02', title: 'Architecture Design', desc: 'We design the multi-tenant data model, authentication flows, billing integration, API contracts, and infrastructure topology before any code is written — preventing expensive architectural debt later.' },
  { num: '03', title: 'MVP Build', desc: 'We build iteratively in two-week sprints, prioritising the core workflow that delivers value to your first customers. You get a shippable, tested MVP in 8 weeks — not a bloated feature set in 18 months.' },
  { num: '04', title: 'Scale & Iterate', desc: 'Post-launch, we help you analyse usage data, run A/B experiments on conversion and activation, scale infrastructure to handle growth, and ship the next tier of features based on real customer feedback.' },
];

const faqs = [
  { q: 'How long does it take to build a SaaS MVP?', a: 'A focused SaaS MVP — core workflow, authentication, basic billing, and essential admin tooling — typically takes 6–10 weeks with our team. We enforce strict scope discipline during discovery to ensure you launch with the smallest product that delivers genuine value to early customers, then iterate rapidly based on feedback.' },
  { q: 'Should we build multi-tenancy from day one?', a: 'Yes, always. Adding multi-tenancy to an existing single-tenant codebase is one of the most expensive and risky refactors a SaaS company can undertake. We design the data isolation model, access control layer, and routing logic correctly from the start — even if you only have one tenant on launch day.' },
  { q: 'Which billing provider do you recommend?', a: 'We recommend Stripe for the vast majority of SaaS products — it has the most comprehensive subscription and billing API, excellent documentation, and supports complex scenarios like usage-based billing, multi-currency, and marketplace splits. We implement billing with Stripe Billing + webhooks for reliable subscription lifecycle management.' },
  { q: 'How do you handle data isolation between tenants?', a: 'We evaluate three isolation models: shared schema with tenant_id columns (most cost-efficient, lowest isolation), separate schemas per tenant (good balance for mid-market SaaS), and separate databases per tenant (highest isolation, required for some compliance standards). We recommend the right model based on your regulatory requirements and expected tenant count.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. Most of our SaaS clients engage us on a monthly retainer covering infrastructure monitoring, incident response, performance optimisation, security updates, and ongoing feature development. We treat post-launch as the beginning of the product journey, not the end of the engagement.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/web-development", label: "Web Development" }}
      name="SaaS Platform Development"
      copy={{ badge: "SAAS PRODUCT ENGINEERING", title: <>SaaS Platforms Built to{' '} <span style={{ color: 'var(--brand)' }}>Scale & Generate ARR</span></>, desc: <>We build production-grade SaaS platforms from the ground up — multi-tenant architecture, subscription billing, enterprise SSO, and scalable infrastructure — delivering your MVP in 8 weeks and growing with you from there.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Everything Your SaaS Needs to Succeed"
    />
  );
}
