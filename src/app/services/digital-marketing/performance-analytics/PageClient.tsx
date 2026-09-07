import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '100+', label: 'Analytics setups completed' },
  { value: 'GA4 & GTM', label: 'Certified specialists' },
  { value: 'Real-time', label: 'Custom dashboards delivered' },
  { value: '30%', label: 'Avg CPA reduction via data' },
];

const services = [
  { icon: '📈', title: 'GA4 Setup & Migration', desc: 'Full Google Analytics 4 property configuration, event tracking setup, and Universal Analytics migration — with data validation to ensure 100% accurate measurement.' },
  { icon: '🏷️', title: 'Google Tag Manager Configuration', desc: 'GTM container setup and management, deploying all marketing and analytics tags without developer dependency and with version-controlled change history.' },
  { icon: '✅', title: 'Conversion Tracking Audit', desc: 'A complete audit of your existing conversion tracking — identifying misfiring tags, missing goals, duplicate transactions, and attribution gaps across all channels.' },
  { icon: '📊', title: 'Custom Dashboard Development', desc: 'Looker Studio dashboards pulling data from GA4, Google Ads, Search Console, and your CRM — giving stakeholders real-time visibility into the metrics that matter.' },
  { icon: '🔀', title: 'Attribution Modelling', desc: 'Multi-touch attribution analysis to understand which channels and touchpoints are genuinely driving conversions — moving beyond last-click and informing smarter budget allocation.' },
  { icon: '🗄️', title: 'Data Layer Implementation', desc: 'Specification and deployment of a structured data layer enabling rich, reliable event tracking for e-commerce, lead forms, video engagement, and custom interactions.' },
];

const steps = [
  { num: '01', title: 'Tracking Audit', desc: 'We audit every existing tag, goal, and conversion action — documenting what is working, what is broken, and what is missing across your analytics setup.' },
  { num: '02', title: 'Implementation Plan', desc: 'We produce a detailed measurement plan specifying every event, conversion, and data layer variable required to answer your key business questions.' },
  { num: '03', title: 'Setup & QA', desc: 'Our team implements all tracking changes via GTM, conducts thorough QA testing in staging and live environments, and validates data against ground truth.' },
  { num: '04', title: 'Dashboard & Reporting', desc: 'Live Looker Studio dashboards are delivered with stakeholder training, followed by monthly analytics health checks and ongoing tracking support.' },
];

const faqs = [
  { q: 'GA4 vs Universal Analytics — do I need to migrate?', a: 'Universal Analytics stopped processing data in July 2023. If you are still relying on UA data or have not fully configured GA4 properly, you are flying blind. We conduct a full GA4 audit to ensure your property is correctly set up with all events, conversions, and audiences properly defined.' },
  { q: 'How do you track conversions across multiple touchpoints?', a: 'We implement GA4\'s built-in multi-touch reporting alongside custom attribution analysis, enabling you to see the full customer journey — from first organic visit through to paid retargeting and final conversion — rather than attributing everything to the last click.' },
  { q: 'What is a data layer and do I need one?', a: 'A data layer is a JavaScript object that passes structured information from your website to analytics and marketing tools via GTM. If you run e-commerce, track form submissions, or need reliable event data, a well-implemented data layer is essential for accurate measurement.' },
  { q: 'How do you handle cookie consent and privacy?', a: 'We implement consent mode v2 for Google tags, ensuring your analytics and advertising tracking respects user consent choices while using modelling to fill data gaps. We work with your legal team and CMP provider to ensure full compliance with GDPR and applicable privacy regulations.' },
  { q: 'What dashboards do you build?', a: 'Our standard dashboard suite includes an executive overview (traffic, conversions, revenue), a channel performance breakdown, a paid media dashboard (Google Ads, Meta), an SEO dashboard (Search Console + GA4), and an e-commerce funnel analysis. All dashboards are customised to your specific KPIs.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/digital-marketing", label: "Digital Marketing" }}
      name="Performance Analytics"
      copy={{ badge: "DIGITAL MARKETING", title: <>Analytics That <span style={{ color: 'var(--brand)' }}>Drive Decisions</span></>, desc: <>GA4 setup, conversion tracking, attribution modelling, and real-time dashboards — giving you the data clarity to make confident marketing decisions and reduce wasted spend.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
