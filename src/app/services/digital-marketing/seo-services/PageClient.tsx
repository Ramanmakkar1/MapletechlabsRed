import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import Link from 'next/link';

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
  { q: 'How much do SEO services cost in Canada?', a: 'Our Canadian digital marketing cost guide lists typical SEO budgets of $1,500–$10,000 CAD per month. The quoted scope depends on competition, site size and implementation needs — competitive markets need deeper keyword research, content and link acquisition, and larger sites need more pages audited and optimised. See the SEO pricing breakdown in our cost guide for the full range.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/digital-marketing", label: "Digital Marketing" }}
      name="SEO Services"
      copy={{ badge: "DIGITAL MARKETING", title: <>SEO Services in <span style={{ color: 'var(--brand)' }}>Canada</span></>, desc: <>Data-driven search engine optimisation that moves you up the rankings, grows organic traffic, and converts visitors into customers — month after month.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our SEO Capabilities"
      buyerContent={(
        <>
        <section style={{ padding: 'var(--section-y-sm) 0' }}>
          <div className="cb-container">
            <h2>What your SEO engagement includes</h2>
            <p className="lede">Our site audit establishes your organic performance baseline and a prioritised roadmap of crawl, indexation, on-page and off-page opportunities. Keyword mapping connects relevant searches to the pages that should answer them, helping you see which existing service pages need improvement and where content gaps remain.</p>
            <p className="lede">Technical fixes address the audit findings, including crawl errors, Core Web Vitals, metadata, schema and internal linking. Content recommendations identify pages to update or create, the search intent each page should serve and how it supports your services. Use the roadmap to discuss priorities, implementation dependencies and the content publishing work included in your scope.</p>
            <p className="lede">Monthly ranking reports and our Looker Studio dashboard connect organic sessions, goal completions and revenue to your SEO investment using Google Analytics 4, Search Console and rank tracking. Review these alongside completed work and upcoming priorities to understand progress beyond individual keyword positions.</p>
          </div>
        </section>
        <section style={{ padding: 'var(--section-y-sm) 0' }}>
          <div className="cb-container">
            <h2>SEO pricing and scope in Canada</h2>
            <p className="lede">The <Link href="/blog/digital-marketing-cost-canada#seo">SEO pricing breakdown in our Canadian digital marketing cost guide</Link> lists typical SEO budgets of $1,500–$10,000 CAD per month, and our <Link href="/pricing">service pricing and engagement options</Link> show how to frame a scope discussion around your website and business goals. Your quoted scope depends on competition, site size and implementation needs.</p>
            <p className="lede">Competition affects the depth of keyword research, content and link acquisition needed. Site size affects how many pages and templates need auditing and optimisation. Technical work depends on crawl and indexation issues, performance problems and the changes your platform requires. Content requirements depend on whether existing pages can be improved or new service pages, landing pages and supporting articles are needed.</p>
            <p className="lede">When comparing proposals, ask which technical fixes, content deliverables and reporting are included, who implements each change and which work is ongoing. An initial repair programme and a continuing content and link-building campaign involve different workloads; agree priorities and responsibilities before starting.</p>
          </div>
        </section>
        <section style={{ padding: 'var(--section-y-sm) 0' }}>
          <div className="cb-container">
            <h2>Prepare for your SEO consultation</h2>
            <p className="lede">Bring the following so we can discuss a relevant audit and scope:</p>
            <ul className="lede">
              <li>Your website URL and any related sites or subdomains.</li>
              <li>The services you want to grow and the cities or regions you serve.</li>
              <li>Previous SEO work, including audits, content changes and agency reports.</li>
              <li>How you currently measure enquiries from forms, calls or bookings, including any gaps in tracking.</li>
            </ul>
            <p className="lede"><Link href="/contact">Book an SEO consultation to discuss your website, target markets and enquiry goals</Link>.</p>
          </div>
        </section>
        <section style={{ padding: 'var(--section-y-sm) 0' }}>
          <div className="cb-container">
            <h2>Need more enquiries from nearby customers?</h2>
            <p className="lede">Explore our <Link href="/services/digital-marketing/local-seo">local SEO services in Canada for Google and Bing</Link>, including Google Business Profile, Bing Places, citation cleanup, service-area content and enquiry tracking.</p>
            <p className="lede">Looking for a local team? See our SEO company pages for <Link href="/locations/seo-company-in-edmonton">SEO company in Edmonton</Link>, <Link href="/locations/seo-company-in-calgary">Calgary</Link>, <Link href="/locations/seo-company-in-toronto">Toronto</Link>, <Link href="/locations/seo-company-in-vancouver">Vancouver</Link>, <Link href="/locations/seo-company-in-ottawa">Ottawa</Link> and <Link href="/locations/seo-company-in-montreal">Montreal</Link>.</p>
          </div>
        </section>
        </>
      )}
    />
  );
}
