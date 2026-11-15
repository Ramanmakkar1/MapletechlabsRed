import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { PROJECT_PRICING } from '@/data/pricing';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '50+', label: 'SaaS MVPs Shipped' },
  { value: '8wk', label: 'Median Timeline' },
  { value: '$200M+', label: 'ARR Enabled' },
  { value: 'Seed→A', label: 'Series A Support' },
];

const services = [
  { icon: '🗺️', title: 'MVP Scope Definition & Roadmap', desc: 'We facilitate discovery workshops to define the smallest possible product that validates your core hypothesis — ruthlessly cutting scope without cutting value.' },
  { icon: '⚙️', title: 'Core Feature Development', desc: 'Rapid, production-quality development of your MVP\'s core features in Next.js, React, Node.js or your chosen stack — built to scale, not throwaway prototypes.' },
  { icon: '🔐', title: 'User Authentication & Onboarding', desc: 'Secure auth with social login, email magic links, and a smooth onboarding flow that gets users to their "aha moment" as fast as possible.' },
  { icon: '💳', title: 'Basic Billing Integration', desc: 'Stripe integration for your first paid tier — flat-rate or per-seat subscriptions, trial periods and failed payment handling to start generating revenue fast.' },
  { icon: '📊', title: 'Admin Dashboard', desc: 'Internal admin panel for your team to manage users, view key metrics, handle support requests and operate the product without engineering intervention.' },
  { icon: '🚀', title: 'Production Deployment & Monitoring', desc: 'CI/CD pipeline, cloud infrastructure (AWS/GCP/Vercel), error tracking (Sentry), uptime monitoring and alerting — production-ready from day one.' },
];

const steps = [
  { num: '01', title: 'Scope & Spec', desc: 'Two-week discovery: user story mapping, technical architecture decisions, stack selection, and a fixed-scope spec document that prevents scope creep and keeps the timeline predictable.' },
  { num: '02', title: 'Architecture Design', desc: 'Database schema, API design, authentication strategy, third-party integrations and infrastructure planning — designed for your MVP and the product you\'ll grow into.' },
  { num: '03', title: '8-Week Build', desc: 'Two-week sprints with working software delivered at the end of each sprint. Weekly demos keep you in the loop and allow course-correction before it is expensive.' },
  { num: '04', title: 'Launch & Iterate', desc: 'Production deployment, launch support, user analytics configuration, and a post-launch retainer option to iterate rapidly based on real user feedback.' },
];

const faqs = [
  { q: 'What should be in a SaaS MVP?', a: 'An MVP should contain only the features required to validate your core value proposition with real paying customers. For most SaaS products this means: the core workflow that delivers value, user authentication, basic billing, and just enough admin tooling to operate the product. Everything else — advanced features, nice-to-have integrations, polished marketing site — comes after you\'ve validated demand.' },
  { q: 'How do you scope an MVP in 8 weeks?', a: 'We use a combination of user story mapping and MoSCoW prioritisation to separate must-have from nice-to-have features. Every feature request is evaluated against the core hypothesis: "does this help us validate whether customers will pay for this?" If not, it goes on the post-MVP roadmap. This process is challenging but it\'s the single most valuable thing we do.' },
  { q: 'When is an MVP ready to launch?', a: 'When it can reliably deliver the core value proposition for a defined user segment, you can charge money for it, and you can operate it without heroics. It does not need to be fast, beautiful or feature-complete. It needs to answer the question: "do people want this enough to pay for it?" Ship when you can answer that question with real data.' },
  { q: 'Should we build MVP in-house or with an agency?', a: 'If you have strong technical co-founders with the bandwidth to build, in-house is usually better for the long run. If you don\'t have that talent yet, or your founders\' time is better spent on customer discovery and sales, an agency gets you to market faster. We work best as an accelerant — building the foundation you then hire a team to extend.' },
  { q: 'What happens after the MVP launches?', a: 'We offer a post-launch retainer for rapid iteration based on user feedback — typically 4-8 weeks of bi-weekly sprints while you validate product-market fit. Once you\'ve hired your first engineers, we provide a thorough technical handover including architecture documentation, a codebase walkthrough, and a Q&A session with your new team.' },
];

const cad = (n: number) => `$${n.toLocaleString('en-CA')}`;
const saas = PROJECT_PRICING.saas;
const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>What a SaaS MVP costs in Canada and what you get</h2>
        <p style={{ margin: '0 0 24px' }}>
          A SaaS MVP in Canada typically costs {cad(saas.low)}–{cad(saas.high)} CAD and takes {saas.weeksLow}–{saas.weeksHigh} weeks with Mapletech Labs. That range covers a scoped, production-ready first release — not a throwaway prototype — and your fixed price follows discovery. For the full breakdown of what moves the number, read our <Link href="/blog/saas-development-cost-canada">SaaS development cost guide for Canada</Link> and <Link href="/blog/build-saas-mvp-8-weeks">how to build a SaaS MVP in 8 weeks</Link>.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What is included in the MVP</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li><strong>Scope and roadmap:</strong> discovery workshops, user story mapping and a fixed-scope spec that keeps the build focused on validating your core hypothesis.</li>
          <li><strong>Authentication and billing:</strong> secure sign-up, login and onboarding, plus Stripe subscriptions for your first paid tier. See our <Link href="/services/saas-development/auth-sso">auth and SSO development</Link> and <Link href="/services/saas-development/billing-subscriptions">subscription billing services</Link>.</li>
          <li><strong>Admin dashboard:</strong> an internal panel to manage users, view key metrics and operate the product without engineering support.</li>
          <li><strong>Analytics:</strong> product and usage tracking configured so you can see activation, retention and the path to your first paying customers.</li>
          <li><strong>Launch and monitoring:</strong> production deployment, CI/CD, error tracking and uptime alerting, with a post-launch iteration option.</li>
        </ul>
        <p style={{ margin: '0 0 12px' }}>
          Working with a local team? Explore SaaS development in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('saas-development', slug)}>{name}</Link></span>
          ))}.
        </p>
        <p>
          Ready to scope your MVP? <Link href="/contact">Contact us</Link> with your idea and timeline and we will reply within one working day.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/saas-development", label: "SaaS Development" }}
      name="SaaS MVP Development"
      copy={{ badge: "SAAS DEVELOPMENT", title: <>SaaS MVP <span style={{ color: 'var(--brand)' }}>Development</span></>, desc: <>Go from idea to paying customers in 8 weeks — production-quality SaaS MVPs scoped ruthlessly, built fast, and designed to scale.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
