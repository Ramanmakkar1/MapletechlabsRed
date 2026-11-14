import Link from 'next/link';
import ServicePageTemplate from '@/components/page/ServicePageTemplate';
import { serviceCaseMap } from '@/data/service-case-map';

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
      caseStudySlugs={serviceCaseMap['saas-development']}
      name="SaaS Development"
      copy={{ badge: "SaaS Development", title: <>SaaS Development<br />That <span style={{ color: 'var(--brand)' }}>Scales.</span></>, desc: <>A Canadian SaaS development company building multi-tenant platforms with billing, auth and analytics — engineered to grow from zero to Series A and beyond.</> }}
      stats={stats}
      services={services}
      steps={steps}
      results={results}
      faqs={faqs}
      servicesTitle="Full-Stack SaaS Engineering"
      buyerContent={(
        <>
        <section aria-labelledby="saas-first-release" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="head">
              <div>
                <h2 id="saas-first-release">What should your first SaaS release include?</h2>
                <p className="lede">A realistic first release delivers one customer&apos;s core workflow end to end. Decide the boundaries during discovery so launch essentials are separated from later improvements.</p>
              </div>
            </div>
            <div className="grid grid--3" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
              <div className="tile">
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 16, color: 'var(--ink)' }}>Define one customer&apos;s core workflow first</h3>
                <p>Start with a single journey from input to useful outcome, including who creates, approves and views each record. Write observable acceptance criteria before adding dashboards, admin tools or secondary features. Secondary workflows can ship once the first cohort completes the core task reliably. Our <Link href="/blog/saas-development-cost-canada">SaaS development cost guide for Canada</Link> helps compare scope and sequencing decisions.</p>
              </div>
              <div className="tile">
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 16, color: 'var(--ink)' }}>Decide what belongs in the initial scope</h3>
                <p>Decide during discovery whether shared infrastructure, isolated tenant data, enterprise SSO and integrations belong in the first release or a later phase. Permissions, tenant isolation and billing requirements should be decided during discovery even when some features ship later, because retrofitting them costs far more. Integrations add dependencies on API access, limits and failure handling that affect timelines.</p>
              </div>
              <div className="tile">
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 16, color: 'var(--ink)' }}>Budget for post-launch operations</h3>
                <p style={{ marginBottom: 16 }}>Plan for hosting, monitoring, support and feature development after launch. A short discovery brief should include:</p>
                <ul style={{ paddingLeft: 22, marginBottom: 16 }}>
                  <li>Target users and expected usage.</li>
                  <li>Core workflows and acceptance criteria.</li>
                  <li>Integration requirements and sample data.</li>
                  <li>Launch constraints: deadlines, privacy and dependencies.</li>
                </ul>
                <p><Link href="/contact">Discuss your SaaS release plan with our team</Link> to prioritise the first release and later phases.</p>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="saas-development-cities" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="head">
              <div>
                <h2 id="saas-development-cities">SaaS development companies in major Canadian cities</h2>
                <p className="lede">Mapletech Labs is based in Edmonton and builds SaaS products for founders and businesses across Canada. See local pricing, process and FAQs for your city:</p>
              </div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              <li><Link href="/locations/saas-development-company-in-edmonton">SaaS development company in Edmonton</Link></li>
              <li><Link href="/locations/saas-development-company-in-calgary">SaaS development company in Calgary</Link></li>
              <li><Link href="/locations/saas-development-company-in-toronto">SaaS development company in Toronto</Link></li>
              <li><Link href="/locations/saas-development-company-in-vancouver">SaaS development company in Vancouver</Link></li>
              <li><Link href="/locations/saas-development-company-in-ottawa">SaaS development company in Ottawa</Link></li>
              <li><Link href="/locations/saas-development-company-in-montreal">SaaS development company in Montreal</Link></li>
            </ul>
            <p className="lede" style={{ marginTop: 16 }}>Need a broader custom build? See our <Link href="/locations/software-development-company-in-toronto">software development company pages</Link>, starting with Toronto.</p>
          </div>
        </section>
        </>
      )}
    />
  );
}
