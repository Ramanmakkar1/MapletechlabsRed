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
];

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
    />
  );
}
