import Link from 'next/link';
import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '200+', label: 'Web Projects' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40ms', label: 'Avg Load' },
  { value: '150+', label: 'Clients' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'SaaS Platform Development',
    tag: 'Full-Stack',
    desc: 'End-to-end SaaS products — multi-tenant architecture, subscription billing, role-based auth, and analytics dashboards built to grow from 10 to 10 million users.',
    chips: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
  },
  {
    title: 'Enterprise Web Applications',
    tag: 'Enterprise',
    desc: 'Complex internal tools, CRMs, ERPs and portals built for thousands of concurrent users with SSO, audit trails, and compliance controls baked in from day one.',
    chips: ['React', 'TypeScript', 'GraphQL', 'Kubernetes', 'OAuth'],
  },
  { title: 'E-Commerce Storefronts', tag: 'Commerce', desc: 'High-conversion online stores with native checkout, inventory management and marketing integrations.' },
  { title: 'Progressive Web Apps', tag: 'PWA', desc: 'Offline-capable, installable web experiences that deliver app-quality performance across every browser.' },
  { title: 'API Development', tag: 'Backend', desc: 'Robust RESTful and GraphQL APIs engineered for scale, security, and seamless third-party integration.' },
  { title: 'CMS & Headless', tag: 'Content', desc: 'Headless CMS architectures that give your content team full control without slowing down the frontend.' },
];

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We map your business goals, user journeys, and technical requirements. Every constraint is identified before architecture decisions are made.',
    deliverables: ['Product Brief', 'User Personas', 'Requirements Doc', 'Project Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'System design, database schema, API contracts and infrastructure planning — all documented and signed off before a single component is written.',
    deliverables: ['System Design', 'DB Schema', 'API Contracts', 'Infra Plan'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'High-fidelity UI/UX in Figma, responsive across all breakpoints, with a live design system and interactive prototype your team can click through.',
    deliverables: ['Wireframes', 'Figma Prototype', 'Design System', 'Responsive Specs'],
    duration: '2–3 weeks',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Two-week agile sprints with daily standups, staged deployments and thorough code reviews. You see working software every single week.',
    deliverables: ['Sprint Demos', 'Staged Builds', 'Code Reviews', 'API Integration'],
    duration: '4–12 weeks',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Production deployment, performance optimisation, SEO foundations, and monitoring setup. Post-launch SLA keeps your platform healthy as you scale.',
    deliverables: ['Production Deploy', 'Performance Audit', 'SEO Baseline', 'SLA Support'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'Frontend', chips: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vite'] },
  { label: 'Backend', chips: ['Node.js', 'Python', 'GraphQL', 'REST', 'PostgreSQL'] },
  { label: 'Cloud', chips: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'Kubernetes'] },
  { label: 'CMS', chips: ['Contentful', 'Sanity', 'Strapi', 'WordPress'] },
];

const industries = [
  { icon: '💰', title: 'FinTech', desc: 'Trading dashboards, payment portals, KYC flows and regulatory-compliant financial platforms.' },
  { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant patient portals, EHR integrations and telemedicine web platforms.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'High-volume storefronts, marketplace platforms and B2B ordering systems.' },
  { icon: '🚀', title: 'SaaS', desc: 'Multi-tenant SaaS products with subscription billing, analytics and onboarding flows.' },
  { icon: '📺', title: 'Media', desc: 'Content platforms, streaming portals and CMS-driven publishing systems.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Internal tools, ERPs, procurement portals and mission-critical business applications.' },
];

const faqs = [
  { q: 'How much does a website cost in Canada?', a: 'A marketing website of 10–20 pages typically runs CAD $15,000–$45,000. E-commerce platforms run higher, and larger web apps, portals and SaaS products are scoped individually. These are planning ranges based on Canadian market rates. After a discovery call we give you a fixed quote for your scope.' },
  { q: 'How long does it take to build a website or web app?', a: 'A marketing website usually takes about 4–8 weeks from discovery to launch. E-commerce platforms run 8–16 weeks, and custom web apps or SaaS products take longer depending on scope. You get a timeline with the quote, and we demo working software every sprint.' },
  { q: 'Which technologies do you use?', a: 'We build with the modern stack listed on this page — Next.js and React on the frontend, Node.js, Python, GraphQL and PostgreSQL on the backend, deployed on AWS, Vercel or Cloudflare with Docker and Kubernetes where scale requires it. We pick the tools that fit your project, not the other way around.' },
  { q: 'Will my website be fast and SEO-ready?', a: 'Yes. Every site we ship is performance-tuned and ships with the SEO foundations in place — clean semantic markup, structured data, fast load times and proper metadata. Search visibility is part of the deliverable, not an afterthought, and we hand over an SEO baseline at launch.' },
  { q: 'Do you redesign existing websites?', a: 'Yes. We start with an audit of the current site — performance, SEO, analytics and conversion — then deliver a prioritised plan and a redesign that keeps what works and fixes what does not. We can also migrate content and preserve existing rankings during the transition.' },
  { q: 'Do you work with businesses in Edmonton, Calgary, Toronto and Vancouver?', a: 'Yes. We are based in Edmonton, Alberta, and work with clients across Canada — Edmonton, Calgary, Toronto, Vancouver and beyond — remotely or on site for discovery and launch.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="web-development"
      name="Web Development"
      copy={{ badge: "Web Development", title: <>Web Development<br />That <span style={{ color: 'var(--brand)' }}>Scales.</span></>, desc: <>A Canadian web development company engineering fast, secure and beautiful web platforms — from SaaS products to enterprise portals — that grow with your business.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
      faqs={faqs}
      buyerContent={(
        <section style={{ padding: 'var(--section-y-sm) 0' }}>
          <div className="cb-container">
            <h2>Choose the right web development approach</h2>
            <p className="lede">Start with what visitors or staff need to accomplish, then choose the simplest approach that supports those tasks. The number of page types, workflows and connections to other systems will shape the scope.</p>
            <div className="grid grid--3">
              <div className="tile">
                <h3>Marketing website with an editable CMS</h3>
                <p>Choose this approach when you need to explain your services, publish content and generate enquiries, while giving your team control over routine updates. A <Link href="/services/wordpress-cms">WordPress CMS website</Link> can support pages, articles and other reusable content types.</p>
                <p>For a quote, list the page types you need, such as service pages, case studies and blog posts. Identify content and images to migrate, who will edit them, any forms or CRM integrations, and your accessibility requirements. Custom layouts, languages and the condition of existing content can affect the work.</p>
              </div>
              <div className="tile">
                <h3>E-commerce storefront</h3>
                <p>A storefront fits businesses selling products online that need a catalogue, cart and checkout. Scope depends on product variants, shipping and tax rules, promotions and the systems that manage inventory or fulfilment. Explore our <Link href="/services/web-development/ecommerce-systems">e-commerce development services</Link> for more detail.</p>
                <p>Prepare a sample catalogue, product data and images, and note any content or customer data migration. List payment, shipping, accounting and inventory integrations, along with staff roles and accessibility needs for shopping and checkout.</p>
              </div>
              <div className="tile">
                <h3>Custom web application or portal</h3>
                <p>Choose a custom application when customers, partners or employees need to complete workflows, access account-specific information or use internal tools. Our <Link href="/services/web-development/enterprise-portals">enterprise portal services</Link> cover this type of connected experience.</p>
                <p>Before requesting a quote, map the main tasks and user roles, including permissions and approvals. Share examples of existing data, migration needs, integrations, security constraints and accessibility requirements. The number of workflows, business rules and external systems can significantly change the scope.</p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: 24 }}>Compare the factors behind budgets in our <Link href="/blog/website-cost-canada">Canadian website cost guide</Link>, then <Link href="/contact">contact us to discuss your web development scope</Link>.</p>
          </div>
        </section>
      )}
    />
  );
}
