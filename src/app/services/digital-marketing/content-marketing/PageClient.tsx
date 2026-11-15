import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '300+', label: 'Content strategies executed' },
  { value: '400%', label: 'Avg blog traffic growth' },
  { value: '60+', label: 'Content types produced' },
  { value: 'SEO-first', label: 'Approach on every asset' },
];

const services = [
  { icon: '🗂️', title: 'Content Strategy & Audit', desc: 'A full audit of your existing content, competitive gap analysis, and a prioritised content roadmap mapped to your buyer journey and SEO keyword targets.' },
  { icon: '✍️', title: 'Blog & Long-Form Writing', desc: 'Expert-written blog posts, ultimate guides, and pillar content that establishes topical authority, attracts organic traffic, and earns backlinks naturally.' },
  { icon: '🎬', title: 'Video Scripts & Production', desc: 'Compelling scripts for explainer videos, YouTube content, social shorts, and webinars — plus full production coordination with our video team.' },
  { icon: '📊', title: 'Infographic & Visual Content', desc: 'Data-driven infographics, comparison charts, and visual storytelling assets that communicate complex ideas instantly and earn social shares.' },
  { icon: '📧', title: 'Email Newsletter Content', desc: 'Engaging email campaigns and newsletter content that nurtures your subscriber list, drives repeat traffic, and keeps your brand top of mind.' },
  { icon: '📡', title: 'Content Distribution & Promotion', desc: 'Amplification strategies across organic social, email, paid promotion, and outreach to ensure your content reaches the audiences who matter most.' },
];

const steps = [
  { num: '01', title: 'Content Audit', desc: 'We analyse your existing content library for performance, gaps, and cannibalisation, then benchmark against top-ranking competitors in your niche.' },
  { num: '02', title: 'Strategy & Calendar', desc: 'We develop a content strategy covering topics, formats, word counts, target keywords, and a publishing calendar aligned to your business goals.' },
  { num: '03', title: 'Production', desc: 'Our writers, designers, and video team produce content to a detailed brief — with your subject matter experts interviewed where needed for authentic expertise.' },
  { num: '04', title: 'Distribution & Measurement', desc: 'Published content is actively promoted and tracked — organic rankings, traffic, engagement, and lead generation attributed to each piece over time.' },
];

const faqs = [
  { q: 'How is content marketing different from SEO?', a: 'SEO is the technical and strategic discipline of ranking in search engines. Content marketing is the creation of valuable assets that serve that strategy — and more. Great content marketing spans SEO, social, email, and thought leadership. They work best together under a unified strategy.' },
  { q: 'How long does content marketing take to work?', a: 'SEO-driven content typically takes 3–6 months to gain significant organic traction as Google indexes, evaluates, and ranks new content. Social and email content can drive traffic immediately. We set realistic timelines for each channel in your content strategy.' },
  { q: 'Who writes the content — do we need to provide information?', a: 'Our writers research your industry thoroughly and handle most content independently. For technical or specialist topics, we may conduct a 20–30 minute interview with your team to capture genuine expertise and proprietary insights that set your content apart.' },
  { q: 'How do you measure content ROI?', a: 'We track organic sessions, keyword rankings, time on page, social shares, backlinks earned, email open rates, and most importantly — leads and revenue attributed to content touchpoints via GA4 and your CRM.' },
  { q: 'How much content do we need per month?', a: 'It depends on your goals, competition, and budget. A minimum viable programme typically includes 4 long-form blog posts per month. High-competition sectors often require 8–12 pieces per month across multiple formats to see meaningful results at pace.' },
];

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When to hire a content marketing agency</h2>
        <p style={{ margin: '0 0 24px' }}>
          Hire a content marketing agency when you need consistent, search-optimised publishing but lack the writers, strategy or time in-house. A good agency turns your expertise into articles that rank, answer buyer questions and bring in qualified leads month after month.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>A keyword and topic plan mapped to your buyer journey and search demand.</li>
          <li>Detailed content briefs with target terms, structure and internal links.</li>
          <li>Expert-written articles, guides and landing copy edited for clarity and SEO.</li>
          <li>Distribution and promotion across email, social and outreach channels.</li>
          <li>A monthly report on rankings, traffic, engagement and leads generated.</li>
        </ul>
        <p>
          Content works best alongside <Link href="/services/digital-marketing/seo-services">technical and on-page SEO services</Link>. For budget planning, read our <Link href="/blog/digital-marketing-cost-canada">digital marketing cost guide for Canada</Link>.
        </p>
        <p>
          Explore content marketing in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={`/locations/digital-marketing-agency-in-${slug}`}>{name}</Link></span>
          ))}. Ready to publish content that ranks? <Link href="/contact">Book a content marketing consultation</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/digital-marketing", label: "Digital Marketing" }}
      name="Content Marketing"
      copy={{ badge: "DIGITAL MARKETING", title: <>Content That <span style={{ color: 'var(--brand)' }}>Attracts & Converts</span></>, desc: <>Strategic content marketing that builds your authority, drives organic traffic, and nurtures prospects through the funnel — from first click to loyal customer.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
