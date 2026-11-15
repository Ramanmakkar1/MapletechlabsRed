import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '$10M+', label: 'Ad spend managed' },
  { value: '3.5x', label: 'Avg ROAS delivered' },
  { value: '40%', label: 'Lower CPA vs industry avg' },
  { value: 'Premier', label: 'Google Partner status' },
];

const services = [
  { icon: '🔎', title: 'Search Campaigns', desc: 'Intent-driven search ads targeting high-value keywords at the exact moment prospects are ready to buy — with precision match types and compelling ad copy.' },
  { icon: '🛍️', title: 'Shopping & Performance Max', desc: 'Product listing ads and AI-powered Performance Max campaigns that drive e-commerce revenue across Google\'s entire advertising network.' },
  { icon: '📺', title: 'Display & YouTube Ads', desc: 'Brand awareness and retargeting campaigns across Google\'s display network and YouTube, using audience signals to reach your ideal customers.' },
  { icon: '🔄', title: 'Remarketing Campaigns', desc: 'Strategic remarketing that re-engages past visitors with tailored messaging, moving them back through the funnel to convert at lower cost.' },
  { icon: '📈', title: 'Conversion Rate Optimisation', desc: 'Landing page analysis and A/B testing aligned to your PPC campaigns, ensuring every click has the best possible chance of converting.' },
  { icon: '⚔️', title: 'Competitor Conquest Campaigns', desc: 'Targeted campaigns bidding on competitor brand terms to capture market share from your direct competitors at the moment of intent.' },
];

const steps = [
  { num: '01', title: 'Account Audit', desc: 'We audit your existing Google Ads account (or benchmark competitors) to identify wasted spend, quality score issues, and immediate optimisation opportunities.' },
  { num: '02', title: 'Campaign Strategy', desc: 'We develop a full campaign architecture — keyword segmentation, audience targeting, bidding strategy, ad copy frameworks, and landing page requirements.' },
  { num: '03', title: 'Launch & Optimise', desc: 'Campaigns go live with daily monitoring. We iterate on bids, ad copy, audiences, and negative keywords in the first weeks to hit target CPA and ROAS.' },
  { num: '04', title: 'Scale & Report', desc: 'Once profitable baselines are established, we scale budgets systematically with monthly performance reports tying spend directly to revenue outcomes.' },
];

const faqs = [
  { q: 'How much budget do I need for Google Ads?', a: 'We recommend a minimum monthly budget of £1,500–£3,000 for most campaigns to gather enough data to optimise effectively. Highly competitive sectors may require more. We will advise based on your industry CPC benchmarks during our discovery call.' },
  { q: 'How long before I see results from PPC?', a: 'Unlike SEO, PPC drives traffic from day one. You can expect initial data within the first week. However, we typically need 60–90 days of data to fully optimise campaigns for peak efficiency and ROAS.' },
  { q: 'Search vs Performance Max campaigns — which should I use?', a: 'Search campaigns give you precise keyword control and are best for capturing direct demand. Performance Max uses Google\'s AI to find conversions across all channels. We typically recommend running both in a complementary structure, prioritising Search for core terms.' },
  { q: 'How do you track conversions accurately?', a: 'We implement enhanced conversion tracking via Google Tag Manager, connecting purchase events, lead form submissions, phone calls, and offline conversions where applicable. Accurate conversion data is the foundation of effective PPC management.' },
  { q: 'Google Ads vs Meta Ads — which is better for my business?', a: 'Google Ads excels at capturing existing demand — people actively searching for your product. Meta Ads is stronger for creating demand and targeting audiences by interest or behaviour. Most businesses benefit from both; we will recommend the right mix for your goals.' },
];

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When to hire a Google Ads management agency</h2>
        <p style={{ margin: '0 0 24px' }}>
          Hire a Google Ads management agency when you need qualified leads or sales from search now, not in six months. A managed account typically pays for itself by cutting wasted spend and lifting conversion rates within the first 60–90 days.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>A full audit of your existing account, wasted spend and quality score issues.</li>
          <li>A campaign architecture built around your highest-intent keywords and audiences.</li>
          <li>Ad copy, landing page recommendations and conversion tracking set up correctly.</li>
          <li>Daily bid, budget and negative keyword optimisation against your target CPA and ROAS.</li>
          <li>Monthly reporting that ties ad spend directly to leads and revenue.</li>
        </ul>
        <p>
          Pair paid search with <Link href="/services/digital-marketing/seo-services">SEO services</Link> for compounding organic traffic, and use <Link href="/services/digital-marketing/performance-analytics">performance analytics</Link> to see which channels actually drive revenue. For budget planning, read our <Link href="/blog/digital-marketing-cost-canada">digital marketing cost guide for Canada</Link>.
        </p>
        <p>
          Explore Google Ads management in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={`/locations/digital-marketing-agency-in-${slug}`}>{name}</Link></span>
          ))}. Ready to make your ad spend profitable? <Link href="/contact">Book a Google Ads audit</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/digital-marketing", label: "Digital Marketing" }}
      name="Google Ads & PPC"
      copy={{ badge: "DIGITAL MARKETING", title: <>Google Ads That <span style={{ color: 'var(--brand)' }}>Maximise ROAS</span></>, desc: <>Expert PPC management that turns ad spend into predictable, scalable revenue — with transparent reporting and a Google Premier Partner team behind every campaign.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our PPC Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
