import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '300%', label: 'Avg ROI' },
  { value: '50M+', label: 'Impressions' },
  { value: '10K+', label: 'Keywords Ranked' },
  { value: '#1', label: 'Rankings Achieved' },
];

const services = [
  { icon: '🔍', title: 'SEO & Content', desc: 'Dominate organic search with technical SEO, content strategy and link building that compounds over time.' },
  { icon: '📊', title: 'Google Ads', desc: 'Precision PPC campaigns on Search, Display and YouTube — every dollar tracked, every bid optimised.' },
  { icon: '📱', title: 'Social Media Marketing', desc: 'Build engaged communities on Instagram, LinkedIn, TikTok and X with scroll-stopping organic content.' },
  { icon: '🎯', title: 'Paid Social Ads', desc: 'Meta, TikTok and LinkedIn ad campaigns engineered for your exact audience and conversion goals.' },
  { icon: '📧', title: 'Email Marketing', desc: 'Automated nurture sequences, broadcast campaigns and lifecycle flows that turn leads into loyal customers.' },
  { icon: '📈', title: 'Analytics & Attribution', desc: 'Track every dollar spent across every channel with dashboards that show exactly what is driving growth.' },
];

const steps = [
  { num: '01', title: 'Audit & Research', desc: 'We deep-dive into your current performance, competitors and market opportunities to identify the highest-leverage gaps and quick wins.' },
  { num: '02', title: 'Strategy', desc: 'We build a channel-specific growth roadmap with clear KPIs, budget allocation and 90-day milestones tied to your revenue targets.' },
  { num: '03', title: 'Execute', desc: 'Our specialists deploy campaigns, publish content and launch ads — with creative, copy and targeting all handled in-house.' },
  { num: '04', title: 'Optimise & Scale', desc: 'Weekly performance reviews, A/B tests and budget reallocation ensure results compound month over month.' },
];

const results = [
  { value: '300%', label: 'Average ROI', sub: 'across all paid channels' },
  { value: '10x', label: 'Traffic Growth', sub: 'organic search in 12 months' },
  { value: '40%', label: 'Lower CPA', sub: 'vs. industry benchmark' },
];

const faqs = [
  { q: 'How long before I see results from SEO?', a: 'Most clients see meaningful ranking improvements within 3–4 months, with significant traffic gains by month 6. Paid channels like Google Ads and Meta deliver results within the first 2 weeks of launch.' },
  { q: 'Do you manage ad spend or just strategy?', a: 'We handle everything — strategy, creative, copy, campaign setup, bid management and weekly optimisation. You keep full ownership of your ad accounts and get transparent reporting.' },
  { q: 'What budget do I need to start with paid ads?', a: 'We recommend a minimum of $500/month in ad spend for Google Ads and $300/month for paid social. Below these thresholds the data volume is too low for meaningful optimisation.' },
  { q: 'Can you work with our in-house marketing team?', a: 'Absolutely. We frequently operate as a specialist extension of in-house teams — handling specific channels, providing senior strategy, or covering capacity gaps during high-growth periods.' },
  { q: 'How do you report on performance?', a: 'Every client gets a live dashboard, weekly performance summaries and a monthly strategy call. We tie every metric back to pipeline and revenue, not vanity numbers.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="digital-marketing"
      name="Digital Marketing"
      copy={{ badge: "Digital Marketing", title: <>Digital Marketing That <span style={{ color: 'var(--brand)' }}>Gets You Found.</span></>, desc: <>A Canadian digital marketing agency — SEO, Google Ads, social media and paid advertising — data-driven strategies that fill your pipeline.</> }}
      stats={stats}
      services={services}
      steps={steps}
      results={results}
      faqs={faqs}
      servicesTitle="Full-Funnel Marketing Services"
    />
  );
}
