import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '80+', label: 'Stores Built' },
  { value: '$50M+', label: 'GMV Processed' },
  { value: '3.2%', label: 'Avg Conversion Rate' },
  { value: '4wk', label: 'Storefront Delivery' },
];

const services = [
  { icon: '🛍️', title: 'Custom Storefront (Next.js Commerce)', desc: 'We build blazing-fast custom storefronts using Next.js Commerce or bespoke architecture — fully tailored to your brand with perfect Core Web Vitals, mobile-first design, and conversion-optimised product pages.' },
  { icon: '💳', title: 'Payment Gateway Integration', desc: 'We integrate Stripe, PayPal, Klarna, Afterpay, and regional payment providers with secure tokenisation, 3D Secure, multi-currency support, and automatic tax calculation for global commerce.' },
  { icon: '📦', title: 'Inventory & Order Management', desc: 'End-to-end order management: real-time inventory tracking, multi-warehouse support, automated fulfilment workflows, return/refund processing, and integrations with 3PL providers and ERP systems.' },
  { icon: '🔍', title: 'Product Search & Filtering', desc: 'We implement lightning-fast product search using Algolia or Elasticsearch with faceted filtering, typo-tolerance, personalised ranking, and predictive search — dramatically improving product discoverability.' },
  { icon: '🛒', title: 'Checkout Optimisation', desc: 'Every friction point in your checkout is analysed and eliminated — guest checkout, address autocomplete, saved payment methods, one-click upsells, and abandoned cart recovery flows that recover lost revenue.' },
  { icon: '🏗️', title: 'Headless Commerce Architecture', desc: 'We decouple your storefront from your commerce backend using headless architecture with Shopify, Commercetools, or custom APIs — giving you complete frontend freedom while retaining powerful commerce tooling.' },
];

const steps = [
  { num: '01', title: 'Store Strategy', desc: 'We define your product catalogue structure, checkout flow, payment and fulfilment strategy, and technology stack — ensuring the architecture supports your current catalogue size and future growth trajectory.' },
  { num: '02', title: 'Design & UX', desc: 'Our designers create conversion-focused storefronts with data-driven layouts — optimised product listing pages, persuasive product detail pages, and a frictionless checkout funnel tested against best-practice patterns.' },
  { num: '03', title: 'Build & Integrate', desc: 'We build the storefront and wire up every integration — payment gateways, inventory system, shipping providers, email marketing, analytics, and any ERP or PIM system — with full end-to-end testing.' },
  { num: '04', title: 'Launch & Optimise', desc: 'We manage the go-live process, monitor performance and error rates closely in the first 48 hours, and then continuously optimise conversion rates through A/B testing, heatmap analysis, and funnel analytics.' },
];

const faqs = [
  { q: 'Should we use Shopify or build a custom store?', a: 'Shopify is excellent for standard retail with straightforward requirements — fast time to market, rich app ecosystem, and manageable complexity. Custom builds (headless or bespoke) are better when you need unique UX, complex B2B workflows, unusual pricing models, or deep ERP integration. We evaluate both options objectively based on your specific requirements and budget.' },
  { q: 'How do you handle high-traffic events like Black Friday?', a: 'We architect e-commerce platforms with horizontal scaling, edge caching via CDN for product pages, database read replicas, async order processing queues, and load testing up to 5x expected peak traffic before major events. We also set up real-time monitoring with alerts so we can respond instantly if anything degrades.' },
  { q: 'Which payment gateway do you recommend?', a: 'Stripe is our default recommendation — it has the best developer experience, the broadest payment method support (cards, wallets, buy now pay later, bank transfers), and excellent fraud tooling with Stripe Radar. For international markets we sometimes supplement with local gateways or Adyen for enterprise-scale merchants.' },
  { q: 'Can you migrate our existing WooCommerce store?', a: 'Yes. We have a structured migration process covering product catalogue and media, customer accounts, order history, SEO URL preservation with redirects, and payment method migration. We run parallel systems during the transition to ensure zero downtime and validate every product, price, and image before cutover.' },
  { q: 'How do you improve conversion rates?', a: 'We analyse your funnel using session recordings, heatmaps, and Google Analytics to identify drop-off points, then run structured A/B tests on high-impact elements — hero images, CTA copy, checkout steps, trust badges, and upsell placement. Our clients typically see 15–40% conversion rate improvements within 90 days of launch.' },
  { q: 'Is my store a good fit for a custom e-commerce build?', a: 'A custom build fits when your storefront needs unique UX, complex B2B or multi-vendor workflows, unusual pricing, or deep ERP, PIM or 3PL integration. A standard retail catalogue with straightforward requirements is often better served by Shopify. We assess your catalogue, order flow and integrations before recommending either path.' },
  { q: 'Which commerce systems can you integrate with?', a: 'We integrate payment gateways such as Stripe, PayPal, Klarna and Afterpay, plus inventory, order management, shipping, email marketing, analytics, ERP, PIM and 3PL systems. We also connect product search through Algolia or Elasticsearch and commerce backends such as Shopify or Commercetools.' },
  { q: 'Who owns the storefront code and accounts?', a: 'You do. We sign an IP assignment agreement on day one, and on final payment you receive full source code, design files, documentation and credentials. Repositories and infrastructure access transfer to you, so you can take the store to another team without lock-in.' },
  { q: 'How do you price an e-commerce project?', a: 'We work on a fixed-scope, fixed-price model. After discovery we share a scoped, fixed-price proposal covering deliverables, milestones and timeline before any build starts, so you know the cost before we write code.' },
];

function BuyerContent() {
  return (
    <section aria-labelledby="ecommerce-buyer-guide" style={{ padding: 'var(--section-y-sm) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ maxWidth: 960, color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="ecommerce-buyer-guide">Planning a custom e-commerce build or replatform</h2>
        <p className="lede">A custom e-commerce build gives you a storefront designed around your catalogue, checkout and back-office systems instead of a fixed theme. It fits when standard retail tooling cannot support your pricing, order flow or integrations; a simpler catalogue often launches faster on Shopify.</p>

        <h3>Custom storefronts</h3>
        <p className="lede">We build custom storefronts with Next.js Commerce or bespoke architecture, tailored to your brand with mobile-first product pages and a checkout built to convert. Our <Link href="/case-studies/ecommerce-platform" style={{ color: 'var(--brand)' }}>enterprise e-commerce platform case study</Link> shows a headless rebuild that tripled revenue, serves 2M+ monthly visitors at 99.9% uptime, and held zero downtime through Black Friday peak traffic.</p>

        <h3>Commerce integrations</h3>
        <p className="lede">Your storefront is only as good as the systems behind it. We connect payment gateways such as Stripe, PayPal, Klarna and Afterpay, plus inventory and order management, shipping, email marketing, analytics, ERP, PIM and 3PL providers. Product search can run on Algolia or Elasticsearch, and commerce backends can include Shopify or Commercetools.</p>

        <h3>Migration considerations</h3>
        <p className="lede">A migration has to protect revenue, rankings and customer history. We have a structured migration process covering product catalogue and media, customer accounts, order history, SEO URL preservation with redirects, and payment method migration. We run parallel systems during the transition to ensure zero downtime and validate every product, price, and image before cutover.</p>

        <h3>Project scope and delivery</h3>
        <p className="lede">Scope is driven by catalogue size, number of unique templates, checkout complexity, integrations and data migration. We define the catalogue structure, payment and fulfilment strategy and technology stack first, then build and test every integration end to end. Our storefront delivery benchmark is 4 weeks, with larger replatforms scoped separately. We share a scoped, fixed-price proposal before any build starts.</p>

        <h3>Shopify versus custom: how to evaluate</h3>
        <p className="lede">Choose Shopify for standard retail with straightforward requirements, fast time to market and a rich app ecosystem. Choose a custom or headless build when you need unique UX, complex B2B workflows, unusual pricing models or deep ERP integration. We evaluate both options objectively against your requirements and budget, and you can see the wider team&apos;s work on our <Link href="/services/web-development" style={{ color: 'var(--brand)' }}>web development services page</Link>.</p>
        <p className="lede"><Link href="/contact?service=web-development">Book an e-commerce consultation</Link> with your catalogue size, current platform and integration list so we can recommend Shopify, headless or bespoke and provide a fixed quote.</p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/web-development", label: "Web Development" }}
      name="E-Commerce Development"
      copy={{ badge: "ONLINE RETAIL & COMMERCE", title: <>E-Commerce Stores Built to{' '} <span style={{ color: 'var(--brand)' }}>Convert & Scale</span></>, desc: <>We build high-converting online stores with lightning-fast storefronts, seamless payment integration, and conversion-optimised checkout flows. From boutique brands to enterprise retail, we engineer commerce experiences that drive revenue.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Commerce Solutions That Drive Revenue"
      buyerContent={<BuyerContent />}
    />
  );
}
