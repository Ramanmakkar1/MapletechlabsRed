import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '90+', label: 'Lighthouse Score Achieved' },
  { value: '3x', label: 'Avg Load Time Improvement' },
  { value: '100%', label: 'Core Web Vitals Passing' },
  { value: '30%', label: 'Revenue Uplift' },
];

const services = [
  { icon: '🔍', title: 'Core Web Vitals Audit & Fix', desc: 'Comprehensive LCP, FID/INP and CLS audit with prioritised remediation — we identify exactly what is killing your scores and fix it.' },
  { icon: '🖼️', title: 'Image Optimisation & WebP', desc: 'Batch conversion to WebP/AVIF, responsive image srcsets, lazy loading implementation and proper width/height attributes to eliminate layout shift.' },
  { icon: '⚡', title: 'Caching Strategy', desc: 'Redis object caching, full-page caching via WP Rocket or W3 Total Cache, browser caching headers, and Varnish configuration for enterprise sites.' },
  { icon: '🗄️', title: 'Database Optimisation', desc: 'WordPress database cleanup — remove post revisions, transients, spam comments — plus slow query analysis and indexing for large tables.' },
  { icon: '🌐', title: 'CDN Setup & Configuration', desc: 'Cloudflare or BunnyCDN integration with proper cache rules, asset minification, HTTP/2 push, and edge caching for global audiences.' },
  { icon: '🔌', title: 'Plugin Audit & Cleanup', desc: 'We audit every installed plugin for performance impact, identify conflicts and bloat, replace heavy plugins with lightweight alternatives.' },
];

const steps = [
  { num: '01', title: 'Speed Audit & Baseline', desc: 'We run comprehensive speed tests (Lighthouse, WebPageTest, GTmetrix) across multiple pages and devices to establish a performance baseline and identify the biggest impact fixes.' },
  { num: '02', title: 'Fix Prioritisation', desc: 'All findings are ranked by potential performance gain vs implementation effort. We focus on the 20% of fixes that deliver 80% of the performance improvement first.' },
  { num: '03', title: 'Implementation', desc: 'Systematic implementation of fixes on a staging environment — image optimisation, caching, code minification, render-blocking resource elimination, font optimisation and more.' },
  { num: '04', title: 'Verify & Monitor', desc: 'Post-implementation testing across devices and real user scenarios, Core Web Vitals verification, and ongoing monitoring setup with alerts for performance regressions.' },
];

const faqs = [
  { q: 'Why is my WordPress site slow?', a: 'Common culprits include unoptimised images (often the single biggest factor), too many plugins (especially page builders), no caching configured, cheap shared hosting, unminified CSS/JS, render-blocking scripts, and a bloated database full of post revisions and transients. Most WordPress sites have multiple issues stacking on top of each other.' },
  { q: 'What is a good PageSpeed score?', a: 'Google considers 90+ a "Good" score. For most business sites, we target 90+ on desktop and 75+ on mobile (mobile is harder due to smaller CPU budgets). More importantly, we focus on Core Web Vitals: LCP under 2.5s, INP under 200ms, and CLS under 0.1 — these are the metrics that directly influence Google rankings and user experience.' },
  { q: 'Do I need a CDN?', a: 'If your audience is spread across multiple regions — yes, absolutely. A CDN caches your assets at edge locations globally, meaning a user in London gets served content from a London server rather than your origin in Sydney. For single-region audiences, a CDN still helps with DDoS protection, asset optimisation and reduced origin load.' },
  { q: 'Will speed optimisation break my site?', a: 'We perform all optimisation work on a staging copy of your site first, never on production. Each change is tested before the next is applied. We have a rollback plan at every step. In 5+ years of speed optimisation work, we have never had an optimisation cause an unrecoverable issue on a production site.' },
  { q: 'How do you handle image optimisation?', a: 'We convert all images to WebP (with AVIF for supporting browsers), compress them with quality settings tuned to be imperceptible to the human eye, implement responsive srcsets so mobile devices download smaller files, add proper lazy loading, and set explicit width/height attributes to prevent layout shift. For large sites, we automate this via Cloudflare Images or a custom pipeline.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/wordpress-cms", label: "WordPress & CMS" }}
      name="Site Speed Optimisation"
      copy={{ badge: "WORDPRESS & CMS", title: <>WordPress Site Speed <span style={{ color: 'var(--brand)' }}>Optimisation</span></>, desc: <>Transform a slow, frustrating WordPress site into a 90+ Lighthouse score performer — passing Core Web Vitals, ranking higher, and converting more.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
