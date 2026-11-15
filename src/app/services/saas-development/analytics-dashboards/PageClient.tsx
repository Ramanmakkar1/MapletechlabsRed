import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '60+', label: 'Analytics Systems Built' },
  { value: 'Real-Time', label: 'Dashboards' },
  { value: '50+', label: 'Metrics Tracked' },
  { value: '40%', label: 'Better Retention' },
];

const services = [
  { icon: '📈', title: 'Product Analytics Integration', desc: 'Mixpanel, Amplitude, PostHog or Heap integrated with a clean event taxonomy — tracking the user actions that actually predict retention and revenue.' },
  { icon: '💰', title: 'Revenue & MRR Dashboards', desc: 'Real-time MRR, ARR, churn rate, expansion revenue, LTV and CAC dashboards — built in your product or connected to Stripe, giving leadership instant visibility.' },
  { icon: '👤', title: 'Customer Usage Analytics', desc: 'Per-account and per-user usage data — feature adoption, session frequency, power users vs at-risk accounts — surfaced to your team and into your CRM.' },
  { icon: '⚠️', title: 'Churn Prediction Signals', desc: 'Leading indicators of churn (login frequency drops, feature disengagement, support ticket spikes) built into automated alerts and your customer success workflow.' },
  { icon: '📊', title: 'In-App Analytics for End Users', desc: 'Give your customers their own analytics — usage reports, activity logs, trend charts — embedded in your product to increase stickiness and perceived value.' },
  { icon: '🗄️', title: 'Data Warehouse & BI Integration', desc: 'Event streaming to Snowflake, BigQuery or Redshift, dbt transformation models, and BI tool integration (Metabase, Looker, Tableau) for advanced analysis.' },
];

const steps = [
  { num: '01', title: 'Metrics Definition', desc: 'We run a metrics workshop to define your North Star metric, leading indicators, and the event taxonomy that will capture user behaviour without creating data noise.' },
  { num: '02', title: 'Tracking Implementation', desc: 'Event tracking integrated into your product — server-side events for reliability, client-side for UI interactions — with a tracking plan document keeping naming consistent.' },
  { num: '03', title: 'Dashboard Build', desc: 'Custom dashboards in your analytics tool or embedded directly in your product — real-time metrics, cohort analysis, funnel visualisation and customer health scoring.' },
  { num: '04', title: 'Insight Automation', desc: 'Automated weekly metric digests, Slack alerts for anomalies, customer health score updates in your CRM, and churn risk notifications to your CS team.' },
];

const faqs = [
  { q: 'Mixpanel vs Amplitude vs PostHog?', a: 'Mixpanel excels at funnel analysis, cohort retention and user-level event exploration — great for B2C products with large user volumes. Amplitude has stronger behavioural analytics and enterprise governance features — preferred by B2B teams doing deep analysis. PostHog is open-source, self-hostable, and includes feature flags, session recording and A/B testing in one product — excellent for privacy-conscious teams and startups wanting to avoid per-event pricing. We work with all three and help you choose based on your data volume, budget and analytics maturity.' },
  { q: 'How to track the right metrics for SaaS?', a: 'Start with a North Star metric — the single number that best captures the value your product delivers (e.g., "weekly active teams" for a collaboration tool). Then define 3-5 leading indicators that drive it (activation rate, feature adoption, engagement frequency). Avoid vanity metrics like total signups. Every event you track should connect back to understanding or improving one of these metrics.' },
  { q: 'Should we build analytics or buy a tool?', a: 'For product analytics (understanding how users interact with your product), always use a dedicated tool — Mixpanel, Amplitude or PostHog. Building this from scratch is a significant ongoing engineering investment that never pays off. For in-app analytics visible to your customers (showing them their own data), you typically need to build — though tools like Embeddable or Cumul.io can reduce the work significantly.' },
  { q: 'How to give customers their own analytics?', a: 'The typical approach is to store customer-specific usage data in your application database, aggregate it with pre-computed materialized views or a time-series database, and render charts using a library like Recharts, Chart.js or Tremor. For more complex requirements, embedding a BI tool (Metabase, Superset) or using a purpose-built embedded analytics vendor (Cumul.io, Embeddable) is faster and more maintainable.' },
  { q: 'How to use analytics to reduce churn?', a: 'Identify the product behaviours correlated with retention vs churn in your historical data — this is your engagement model. Build automated health scores based on these signals, updated daily. Surface at-risk accounts to your CS team with specific reasons ("not used Feature X in 14 days") so outreach is targeted. Trigger in-app prompts and emails when engagement drops below thresholds. Measure the impact of each intervention on 30-day retention to iterate your playbook.' },
];

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When to build a custom analytics dashboard</h2>
        <p style={{ margin: '0 0 24px' }}>
          Build a custom analytics dashboard when off-the-shelf reports cannot answer the questions your team and customers ask every week. A tailored dashboard turns your own product and revenue data into decisions instead of spreadsheet exports.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>A metrics workshop defining your North Star metric and leading indicators.</li>
          <li>An event tracking plan with consistent naming across your product.</li>
          <li>Custom dashboards for MRR, churn, activation and feature adoption.</li>
          <li>Customer-facing analytics embedded in your product where it adds value.</li>
          <li>Automated alerts and weekly digests that flag churn risk early.</li>
        </ul>
        <p>
          Connect dashboards to <Link href="/services/saas-development/billing-subscriptions">billing and subscription data</Link> and the <Link href="/services/web-development/api-backend">APIs and backend</Link> that feed them. For budget planning, read our <Link href="/blog/custom-software-development-cost-canada">custom software development cost guide for Canada</Link>.
        </p>
        <p>
          Explore analytics dashboards in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('saas-development', slug)}>{name}</Link></span>
          ))}. Ready to see your product data clearly? <Link href="/contact">Book an analytics dashboard consultation</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/saas-development", label: "SaaS Development" }}
      name="Analytics & Dashboards"
      copy={{ badge: "SAAS DEVELOPMENT", title: <>SaaS Analytics & <span style={{ color: 'var(--brand)' }}>Dashboards</span></>, desc: <>Instrument your product, surface the metrics that matter, and give your customers their own analytics — turning data into retention and revenue.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
