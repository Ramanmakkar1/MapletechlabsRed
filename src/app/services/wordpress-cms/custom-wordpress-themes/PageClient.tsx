import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '100+', label: 'Custom Themes Built' },
  { value: '98+', label: 'PageSpeed Score' },
  { value: '100%', label: 'Pixel-Perfect from Figma' },
  { value: '0', label: 'Page Builders Used' },
];

const services = [
  { icon: '🎨', title: 'Bespoke Theme Development', desc: 'Hand-coded WordPress themes built from scratch — no Elementor, no Divi. Clean, semantic HTML and CSS that performs.' },
  { icon: '🖼️', title: 'Figma / XD to WordPress', desc: 'We translate your design files into pixel-perfect WordPress themes with meticulous attention to spacing, typography and interaction.' },
  { icon: '🧱', title: 'Gutenberg Custom Blocks', desc: 'Powerful, reusable custom blocks for the Block Editor that give your team a flexible, page-builder-like experience — without the bloat.' },
  { icon: '👶', title: 'Child Theme Development', desc: 'Safe child themes that inherit parent theme styles while allowing full customisation — your edits survive every parent update.' },
  { icon: '⚡', title: 'Theme Performance Optimisation', desc: 'We audit and optimise every asset — critical CSS inlining, deferred JS, image lazy loading — to hit 90+ Lighthouse scores.' },
  { icon: '🛒', title: 'WooCommerce Theme Integration', desc: 'Custom WooCommerce template overrides so your shop pages match your brand exactly, with conversion-focused layouts.' },
];

const steps = [
  { num: '01', title: 'Design Review', desc: 'We audit your Figma or XD files, flag any ambiguities, and align on component inventory, breakpoints and animation behaviour before writing a single line of code.' },
  { num: '02', title: 'Theme Architecture', desc: 'We plan the file structure, template hierarchy, custom post types, taxonomies and block patterns that will power the theme — built for maintainability from day one.' },
  { num: '03', title: 'Block & Template Development', desc: 'Iterative development with weekly check-ins. Each template and block is reviewed in staging before moving on, keeping scope tight and quality high.' },
  { num: '04', title: 'QA & Handover', desc: 'Cross-browser and device QA, Lighthouse performance testing, accessibility audit, and a training session so your team can manage content confidently.' },
];

const faqs = [
  { q: 'Custom theme vs premium theme — which is better?', a: 'Premium themes are fast to deploy but come with thousands of lines of code you\'ll never use, making them slow and hard to customise cleanly. A custom theme is built for your exact requirements — nothing more, nothing less — resulting in better performance, easier maintenance, and a unique look that reflects your brand.' },
  { q: 'Do you use page builders like Elementor?', a: 'No. We build hand-coded themes using the native WordPress Block Editor (Gutenberg) for content management. Page builders add significant JavaScript overhead, generate bloated markup, and create long-term lock-in. Our approach results in faster sites and cleaner code.' },
  { q: 'How do you ensure the theme is fast?', a: 'Performance is baked in from the start: we only load assets on pages that need them, inline critical CSS, defer non-critical JavaScript, use modern image formats (WebP/AVIF), and configure server-side caching. We target a 90+ Lighthouse score as a baseline, not a bonus.' },
  { q: 'Can we edit content ourselves after launch?', a: 'Absolutely. Every custom theme we build includes intuitive Gutenberg blocks and Full Site Editing (FSE) patterns so your team can manage pages, posts and global settings without touching code. We include a handover training session and documentation.' },
  { q: 'Does the theme work with any plugins?', a: 'We code to WordPress standards, so the theme is compatible with all well-coded plugins. We also test compatibility with common plugins you plan to use (WooCommerce, SEO plugins, forms, etc.) during QA before launch.' },
];

const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary']] as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>When a custom WordPress theme beats a premium theme</h2>
        <p style={{ margin: '0 0 24px' }}>
          A custom WordPress theme beats a premium theme when performance, a unique brand experience and long-term maintenance matter more than a low upfront price. You get only the code your site needs, so pages load faster, stay easier to update and are built for search from day one.
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>What you receive</h3>
        <ul style={{ paddingLeft: 22, margin: '0 0 24px' }}>
          <li>A lightweight block-based theme with no page-builder bloat.</li>
          <li>Reusable editor patterns your team can apply to new pages.</li>
          <li>A Core Web Vitals budget enforced across every template.</li>
          <li>SEO-ready templates with clean headings, schema hooks and internal links.</li>
          <li>A handover training session and documentation so you can manage content confidently.</li>
        </ul>
        <p>
          Keep the theme fast with <Link href="/services/wordpress-cms/site-speed-optimisation">WordPress site speed optimisation</Link>, or go further with <Link href="/services/wordpress-cms/headless-wordpress">headless WordPress development</Link>. Plan your investment with our <Link href="/blog/website-cost-canada">website cost guide for Canada</Link>.
        </p>
        <p>
          Explore custom WordPress theme development in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && ' and '}<Link href={serviceCityPath('web-development', slug)}>{name}</Link></span>
          ))}. Ready to scope your theme? <Link href="/contact">Book a custom theme consultation</Link>.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/wordpress-cms", label: "WordPress & CMS" }}
      name="Custom WordPress Themes"
      copy={{ badge: "WORDPRESS & CMS", title: <>Custom WordPress <span style={{ color: 'var(--brand)' }}>Theme Development</span></>, desc: <>Hand-coded, pixel-perfect WordPress themes built from your Figma designs — no page builders, no bloat, just fast and beautiful sites.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
