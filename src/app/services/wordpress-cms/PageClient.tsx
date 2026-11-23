import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '500+', label: 'Sites Launched' },
  { value: '99.9%', label: 'Uptime' },
  { value: 'Sub-2s', label: 'Load Time' },
  { value: '100', label: 'PageSpeed Score' },
];

const services = [
  { icon: '🔧', title: 'Custom WordPress Development', desc: 'Bespoke themes, custom post types, advanced custom fields and plugin development — no page builders, no bloat, just clean code.' },
  { icon: '🛒', title: 'WooCommerce Stores', desc: 'High-conversion WooCommerce stores with custom checkout flows, payment gateways, inventory management and marketing integrations.' },
  { icon: '⚡', title: 'Headless WordPress', desc: 'WordPress as a backend CMS powering a Next.js or Nuxt.js frontend — best-in-class performance with full editorial control.' },
  { icon: '📝', title: 'Custom CMS Development', desc: 'Strapi, Contentful, Sanity and custom-built CMS platforms tailored to your content team\'s exact workflow and structure.' },
  { icon: '🚀', title: 'Website Migrations', desc: 'Risk-free migrations from any platform to WordPress — preserving SEO, redirects, content and design fidelity throughout.' },
  { icon: '🔒', title: 'Maintenance & Security', desc: 'Ongoing updates, security hardening, uptime monitoring, daily backups and performance optimisation for your live site.' },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'We map your content structure, user journeys, integrations and editorial workflow to define the right CMS architecture before any design work begins.' },
  { num: '02', title: 'Design', desc: 'Wireframes, component library and high-fidelity designs reviewed and approved by your team before development starts. No surprises mid-build.' },
  { num: '03', title: 'Build', desc: 'Custom theme or headless build, plugin integration, performance optimisation, SEO setup and cross-browser testing on real devices.' },
  { num: '04', title: 'Launch', desc: 'Staging environment QA, team training session, production deployment and 30-day post-launch support included on every project.' },
];

const results = [
  { value: '100', label: 'PageSpeed Score', sub: 'Lighthouse performance on launch' },
  { value: '60%', label: 'Traffic Increase', sub: 'avg organic growth in 6 months' },
  { value: '45%', label: 'Conversion Lift', sub: 'CRO-optimised redesigns' },
];

const faqs = [
  { q: 'How long does a custom WordPress site take to build?', a: 'A standard marketing site takes 4–6 weeks. Complex sites with custom functionality, WooCommerce or headless architecture typically take 8–14 weeks. We provide a detailed timeline after discovery.' },
  { q: 'What is the difference between a standard and headless WordPress build?', a: 'Standard WordPress serves pages directly from the CMS. Headless WordPress uses WordPress only as a backend API, with a separate Next.js or Nuxt.js frontend. Headless delivers significantly faster performance and better developer experience, but requires more upfront investment.' },
  { q: 'Will I be able to update my site myself after launch?', a: 'Yes. The entire project is built around giving your team full editorial control. We configure the admin interface specifically for your workflow and run a handover training session before launch.' },
  { q: 'Do you handle hosting, or do I need to arrange that separately?', a: 'We can manage hosting for you on WP Engine, Kinsta or AWS, or deploy to your existing hosting infrastructure. We recommend managed WordPress hosting for optimal performance and security.' },
  { q: 'Can you improve the speed of my existing WordPress site?', a: 'Yes. Performance audits and optimisation are a standalone service. We address hosting, caching, image optimisation, plugin bloat, database queries and Core Web Vitals. Most sites see significant score improvements within 2 weeks.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="wordpress-cms"
      name="WordPress & CMS"
      copy={{ badge: "WordPress & CMS", title: <>WordPress Development<br />That <span style={{ color: 'var(--brand)' }}>Sells.</span></>, desc: <>A Canadian WordPress and CMS development company — custom WordPress sites, headless CMS platforms and WooCommerce stores that are fast, secure and easy to manage.</> }}
      stats={stats}
      services={services}
      steps={steps}
      results={results}
      faqs={faqs}
      servicesTitle="WordPress & CMS Services"
    />
  );
}
