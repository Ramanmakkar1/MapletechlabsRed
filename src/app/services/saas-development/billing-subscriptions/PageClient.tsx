import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '$50M+', label: 'MRR Managed via Stripe' },
  { value: 'All', label: 'Billing Models Supported' },
  { value: 'Auto', label: 'Dunning & Recovery' },
  { value: '98%', label: 'Payment Success Rate' },
];

const services = [
  { icon: '💳', title: 'Stripe Subscription Setup', desc: 'End-to-end Stripe Billing integration — products, prices, coupons, webhooks and customer portal — configured correctly from the start, not bolted on later.' },
  { icon: '📊', title: 'Flat-Rate, Per-Seat & Usage-Based Billing', desc: 'All major SaaS billing models implemented: flat monthly/annual, per-seat with proration, metered usage, and hybrid models — with plan upgrade/downgrade flows.' },
  { icon: '🎁', title: 'Free Trial & Freemium Flows', desc: 'Time-limited free trials, freemium tiers with usage limits, and trial-to-paid conversion flows with strategic upgrade prompts timed to user activation milestones.' },
  { icon: '🔄', title: 'Dunning & Failed Payment Recovery', desc: 'Automated smart retry schedules, in-app payment update prompts, escalating email sequences and involuntary churn reduction — recovering 60-80% of failed payments.' },
  { icon: '🧾', title: 'Invoice & Receipt Management', desc: 'Branded invoice generation, PDF download, invoice history in the customer portal, and automated tax document generation for compliance.' },
  { icon: '🏦', title: 'Billing Portal for Self-Serve', desc: 'Stripe Customer Portal integration so customers can upgrade, downgrade, update payment methods, download invoices and cancel — without contacting support.' },
];

const steps = [
  { num: '01', title: 'Pricing Model Design', desc: 'Workshop to align your pricing strategy with your product value metric, customer segments and competitive context — before touching any code.' },
  { num: '02', title: 'Stripe Architecture', desc: 'Product and price configuration in Stripe, webhook event design, idempotency strategy, and the data model for storing subscription state in your application database.' },
  { num: '03', title: 'Build & Test', desc: 'Full implementation of the billing layer — checkout flows, subscription management, webhook handlers, dunning — with comprehensive test coverage using Stripe\'s test mode.' },
  { num: '04', title: 'Launch & Automate', desc: 'Production deployment with Stripe webhook monitoring, revenue metrics dashboard, dunning automation configuration, and handover documentation for your team.' },
];

const faqs = [
  { q: 'Which billing model is right for my SaaS?', a: 'The right model aligns your price with the value customers receive. Per-seat works when value scales with team size (e.g., Slack). Usage-based works when value scales with consumption (e.g., Twilio). Flat-rate works for simple products with a clear value proposition where complexity would harm conversion. Many successful SaaS products combine models — a flat platform fee plus per-seat or usage charges.' },
  { q: 'Stripe vs Paddle vs Chargebee?', a: 'Stripe is the most powerful and developer-friendly, ideal for technical teams who want full control. Paddle is a Merchant of Record — they handle VAT/sales tax globally, reducing compliance overhead, great for bootstrappers and small teams. Chargebee is a subscription management layer on top of Stripe/Braintree with more out-of-the-box revenue reporting — useful at scale when you need robust MRR analytics without building them yourself. We work with all three.' },
  { q: 'How to handle international payments and tax?', a: 'Stripe Tax can automatically calculate and collect VAT/GST for most countries. For simpler global tax compliance, Paddle as Merchant of Record handles all tax liability. We configure your billing stack for the markets you\'re targeting, with proper tax ID collection for B2B customers in the EU who need VAT-exempt invoices.' },
  { q: 'How to implement a free trial?', a: 'We recommend collecting payment details upfront (card required to start trial) — this is proven to increase trial-to-paid conversion by 2-3x and reduces involuntary churn. The trial is configured in Stripe with a trial_end date and automatic charge on conversion. We build in-app prompts that surface upgrade CTAs as the trial end date approaches.' },
  { q: 'How do you handle proration when users upgrade or downgrade?', a: 'Stripe handles proration natively — when a customer upgrades mid-cycle, they are charged the pro-rated difference immediately. For downgrades, we typically credit the difference to the next invoice. We implement a preview-before-confirm UI so customers see exactly what they will be charged before they confirm a plan change, reducing support tickets and disputes.' },
];

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When to hire a team for SaaS billing</h2>
        <p style={{ margin: '0 0 24px' }}>
          Hire a billing team when your SaaS needs reliable subscriptions, correct proration and automated failed-payment recovery — before revenue leaks or manual invoicing slows growth. A dedicated build gets Stripe, tax and dunning right the first time.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>A Stripe subscription setup with products, prices, coupons, webhooks and customer portal configured correctly.</li>
          <li>Flat-rate, per-seat, usage-based and hybrid billing models with working upgrade and downgrade flows.</li>
          <li>Free trial and freemium flows with upgrade prompts timed to activation milestones.</li>
          <li>Automated dunning and failed-payment recovery that reduces involuntary churn.</li>
          <li>Branded invoices, receipts and a self-serve billing portal so customers manage their own plans.</li>
        </ul>
        <p>
          Build the billing layer on a solid <Link href="/services/saas-development/multi-tenant-architecture">multi-tenant architecture</Link>, then track revenue with <Link href="/services/saas-development/analytics-dashboards">analytics dashboards</Link>. For budget planning, read our <Link href="/blog/saas-development-cost-canada">SaaS development cost guide for Canada</Link>.
        </p>
        <p>
          Explore SaaS billing in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('saas-development', slug)}>{name}</Link></span>
          ))}. Ready to fix your billing? <Link href="/contact">Book a SaaS billing consultation</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/saas-development", label: "SaaS Development" }}
      name="Billing & Subscriptions"
      copy={{ badge: "SAAS DEVELOPMENT", title: <>SaaS Billing & <span style={{ color: 'var(--brand)' }}>Subscriptions</span></>, desc: <>Stripe billing done right — every pricing model, automated dunning, self-serve portals, and the revenue infrastructure to grow without friction.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
