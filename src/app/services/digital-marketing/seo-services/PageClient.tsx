import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '200%', label: 'Avg organic traffic growth' },
  { value: '500+', label: 'Keywords ranked #1' },
  { value: '12-mo', label: 'ROI proven timeframe' },
  { value: '80+', label: 'Clients served' },
];

const services = [
  { icon: '🔍', title: 'Technical SEO Audit & Fixes', desc: 'Deep crawl analysis identifying crawl errors, Core Web Vitals issues, duplicate content, and indexation problems — with a prioritised fix roadmap.' },
  { icon: '🎯', title: 'Keyword Research & Strategy', desc: 'Data-driven keyword mapping across your full funnel — from high-volume head terms to long-tail buying intent queries that convert.' },
  { icon: '📝', title: 'On-Page Optimisation', desc: 'Title tags, meta descriptions, heading hierarchy, schema markup, and internal linking structured to signal topical authority to search engines.' },
  { icon: '🔗', title: 'Link Building & Digital PR', desc: 'White-hat backlink acquisition through editorial outreach, digital PR campaigns, and resource link building that builds lasting domain authority.' },
  { icon: '📍', title: 'Local SEO & Google Business', desc: 'Google Business Profile optimisation, local citation building, and geo-targeted content strategies to dominate your local search results.' },
  { icon: '✍️', title: 'SEO Content Writing', desc: 'Expert-written, search-optimised blog posts, landing pages, and pillar content that ranks, earns links, and converts organic visitors.' },
];

const steps = [
  { num: '01', title: 'Site Audit', desc: 'We crawl your entire website and benchmark your current organic performance, identifying every technical, on-page, and off-page opportunity.' },
  { num: '02', title: 'Strategy Development', desc: 'We build a bespoke SEO roadmap prioritised by revenue impact — keyword targets, content gaps, technical fixes, and a link acquisition plan.' },
  { num: '03', title: 'On-Page Optimisation', desc: 'Our team executes all on-page and technical recommendations, from meta data to schema, ensuring every page is fully optimised for its target keywords.' },
  { num: '04', title: 'Link Building & Reporting', desc: 'Ongoing monthly link acquisition, content publishing, and transparent ranking reports with clear attribution to traffic and revenue outcomes.' },
];

const faqs = [
  { q: 'How long before SEO shows results?', a: 'Most clients begin seeing meaningful ranking improvements within 3–6 months, with significant organic traffic growth by month 9–12. SEO is a compound investment — the longer you invest, the greater and more defensible the returns.' },
  { q: 'Technical vs content SEO — which comes first?', a: 'Technical SEO always comes first. There is no point creating brilliant content if search engines cannot properly crawl and index your site. We audit and fix all technical foundations before scaling content and link building.' },
  { q: 'How do you build backlinks ethically?', a: 'We use only white-hat methods: editorial outreach to relevant publications, digital PR campaigns that earn genuine coverage, broken link building, and resource page placements. We never buy links or use private blog networks.' },
  { q: 'Local SEO vs national SEO — what is the difference?', a: 'Local SEO targets geo-specific search queries and optimises your visibility in Google Maps and the local pack. National SEO targets broader keyword sets across all regions. Many businesses need both, and we tailor strategy accordingly.' },
  { q: 'How do you track SEO ROI?', a: 'We connect Google Analytics 4, Search Console, and rank tracking tools to a custom Looker Studio dashboard that maps organic sessions, goal completions, and revenue directly to your SEO investment month over month.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/digital-marketing", label: "Digital Marketing" }}
      name="SEO Services"
      copy={{ badge: "DIGITAL MARKETING", title: <>SEO That Drives <span style={{ color: 'var(--brand)' }}>Real Growth</span></>, desc: <>Data-driven search engine optimisation that moves you up the rankings, grows organic traffic, and converts visitors into customers — month after month.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our SEO Capabilities"
    />
  );
}
