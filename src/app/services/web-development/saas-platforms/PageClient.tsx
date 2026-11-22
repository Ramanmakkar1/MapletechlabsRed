import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { serviceCityPath } from '@/data/serviceCity';

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

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When to hire a SaaS platform development team</h2>
        <p style={{ margin: '0 0 24px' }}>
          Hire a SaaS platform development team when you need a production-ready product with multi-tenant architecture, billing and enterprise auth — not just a prototype. A focused team gets your MVP live in about 8 weeks and builds the foundation to scale without a costly re-architecture.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>Multi-tenant architecture with the right data isolation model for your compliance and scale needs.</li>
          <li>Subscription billing with Stripe — trials, proration, dunning, invoices and tax handling.</li>
          <li>SSO and authentication with SAML/OIDC, MFA, role-based access control and audit logging.</li>
          <li>Admin and tenant dashboards for user management, subscription oversight and feature flags.</li>
          <li>Usage analytics and a documented API platform with webhooks, keys and rate limiting.</li>
        </ul>
        <p>
          Start with <Link href="/services/saas-development/saas-mvp-development">SaaS MVP development</Link> and get the tenancy model right with <Link href="/services/saas-development/multi-tenant-architecture">multi-tenant architecture</Link>. For budget planning, read our <Link href="/blog/saas-development-cost-canada">SaaS development cost guide for Canada</Link>.
        </p>
        <p>
          Explore SaaS platform development in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('saas-development', slug)}>{name}</Link></span>
          ))}. Ready to scope your platform? <Link href="/contact">Book a SaaS development consultation</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/web-development", label: "Web Development" }}
      name="SaaS Platform Development"
      copy={{ badge: "SAAS PRODUCT ENGINEERING", title: <>SaaS Platforms Built to{' '} <span style={{ color: 'var(--brand)' }}>Scale & Generate ARR</span></>, desc: <>We build production-grade SaaS platforms from the ground up — multi-tenant architecture, subscription billing, enterprise SSO, and scalable infrastructure — delivering your MVP in 8 weeks and growing with you from there.{' '}See our full <Link href="/services/saas-development">SaaS development services</Link>.</> }}
      caseStudySlugs={['logistics-platform', 'payments-api-platform']}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Everything Your SaaS Needs to Succeed"
      buyerContent={<BuyerContent />}
    />
  );
}
