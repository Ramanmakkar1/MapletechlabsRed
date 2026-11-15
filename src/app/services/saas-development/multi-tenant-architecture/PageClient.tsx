import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '30+', label: 'Multi-Tenant Systems Built' },
  { value: '10M+', label: 'Records Isolated' },
  { value: '99.99%', label: 'Data Integrity' },
  { value: '2', label: 'Isolation Models Supported' },
];

const services = [
  { icon: '🏗️', title: 'Tenant Isolation Design', desc: 'Schema-per-tenant for maximum isolation and compliance, or row-level security for simpler ops — we select and implement the right model for your product and regulatory context.' },
  { icon: '👥', title: 'Organisation & Team Management', desc: 'Multi-level organisational hierarchies — organisations, teams, departments — with member invitations, role assignment and org-level settings management.' },
  { icon: '🔒', title: 'Tenant-Scoped Permissions (RBAC)', desc: 'Role-based access control scoped to each tenant — owners, admins, members with granular resource permissions enforced at the API and database layer.' },
  { icon: '🌐', title: 'Custom Domains per Tenant', desc: 'White-label custom domain support so each tenant can serve your app from their own domain — with automated SSL provisioning via Let\'s Encrypt.' },
  { icon: '🤖', title: 'Tenant Onboarding Automation', desc: 'Automated provisioning of tenant database schemas, default data seeding, invitation emails, and billing account creation — onboard new customers in seconds.' },
  { icon: '🛡️', title: 'Data Residency & Compliance', desc: 'GDPR-compliant data handling, tenant data export and deletion workflows, audit trails, and data residency options for EU/US tenants.' },
];

const steps = [
  { num: '01', title: 'Isolation Model Selection', desc: 'We evaluate your product\'s compliance requirements, expected tenant count, performance SLAs and operational complexity to recommend the optimal isolation strategy.' },
  { num: '02', title: 'Database Schema Design', desc: 'Design of the tenant model, foreign key constraints, Row Level Security policies (Postgres), index strategy, and migration plan for future tenant provisioning.' },
  { num: '03', title: 'Implementation', desc: 'End-to-end implementation — tenant context middleware, RLS policies, RBAC system, custom domain infrastructure, and tenant admin portal — with comprehensive test coverage.' },
  { num: '04', title: 'Load Testing', desc: 'Load testing with realistic multi-tenant traffic patterns to verify isolation holds under concurrent load, identify N+1 queries, and validate the provisioning pipeline at scale.' },
];

const faqs = [
  { q: 'Schema-per-tenant vs row-level isolation — which is right?', a: 'Schema-per-tenant (separate database schema per customer) provides the strongest isolation, easier per-tenant backups and restores, and is preferred for enterprise/regulated customers. Row-level security (RLS) uses a single schema with a tenant_id column and Postgres policies — simpler operations, lower provisioning overhead, and scales to thousands of tenants more easily. The right choice depends on your compliance requirements and tenant count.' },
  { q: 'How do you prevent data leakage between tenants?', a: 'We implement defence in depth: tenant context is set at the start of every request, Postgres Row Level Security policies enforce isolation at the database level even if application code has a bug, all API responses are validated for tenant scope before returning, and we write automated tests specifically designed to probe for cross-tenant data access.' },
  { q: 'Can we add multi-tenancy to an existing product?', a: 'Yes, but it requires careful planning. We conduct a codebase audit to identify all places where data is fetched without tenant scoping, design a migration path that adds tenant context without breaking existing data, and implement the changes incrementally. It\'s more complex than greenfield multi-tenancy but very achievable with the right approach.' },
  { q: 'How to handle tenant-specific customisation?', a: 'We implement a tenant configuration system — a JSON settings table per tenant that drives feature flags, UI customisation, integration credentials and workflow rules. This avoids custom code per tenant while giving tenants meaningful flexibility. For deeper customisation needs (custom fields, workflows), we build a proper extensibility layer.' },
  { q: 'How does multi-tenancy affect performance?', a: 'With proper indexing on tenant_id columns and RLS policies, the performance overhead of multi-tenancy is minimal — typically under 5% compared to a single-tenant equivalent. The bigger risk is N+1 queries and missing indexes as data grows. We profile and optimise these during load testing, and set up query monitoring in production to catch regressions early.' },
];

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When your SaaS needs multi-tenant architecture</h2>
        <p style={{ margin: '0 0 24px' }}>
          You need multi-tenant architecture when one product must serve many separate customer organisations with isolated data, their own users and roles, and predictable performance as tenants grow. It is the foundation that lets you onboard new customers without duplicating infrastructure.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>A tenant isolation model (schema-per-tenant or row-level security) matched to your compliance and scale needs.</li>
          <li>Organisation, team and role-based permission structures enforced at the API and database layers.</li>
          <li>Automated tenant provisioning, custom domains and SSL for self-serve onboarding.</li>
          <li>Load-tested evidence that isolation holds and performance stays predictable as tenants grow.</li>
          <li>Migration and documentation so your team can operate and extend the platform safely.</li>
        </ul>
        <p>
          Pair your tenant model with secure <Link href="/services/saas-development/auth-sso">authentication and SSO</Link> and flexible <Link href="/services/saas-development/billing-subscriptions">billing and subscriptions</Link>. For budgeting, read our <Link href="/blog/saas-development-cost-canada">SaaS development cost guide for Canada</Link>.
        </p>
        <p>
          Explore multi-tenant SaaS development in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('saas-development', slug)}>{name}</Link></span>
          ))}. Ready to plan your architecture? <Link href="/contact">Book a multi-tenant architecture consultation</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/saas-development", label: "SaaS Development" }}
      name="Multi-Tenant Architecture"
      copy={{ badge: "SAAS DEVELOPMENT", title: <>Multi-Tenant SaaS <span style={{ color: 'var(--brand)' }}>Architecture</span></>, desc: <>Rock-solid tenant isolation, organisation management and RBAC — built for the compliance and scale demands of enterprise SaaS.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
