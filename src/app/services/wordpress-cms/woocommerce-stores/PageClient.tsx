import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '80+', label: 'WooCommerce Stores Built' },
  { value: '$30M+', label: 'GMV Processed' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '2.8%', label: 'Avg Conversion Rate' },
];

const services = [
  { icon: '🎨', title: 'Custom WooCommerce Theme', desc: 'Bespoke WooCommerce themes coded to your brand — product pages, cart, checkout and account pages all designed for conversion.' },
  { icon: '💳', title: 'Payment Gateway Integration', desc: 'Stripe, PayPal, Square, Klarna, Afterpay and more — we integrate the payment methods your customers prefer for frictionless checkout.' },
  { icon: '📦', title: 'Product Catalogue & Variations', desc: 'Complex product structures, variable products, bundles, digital downloads and custom attribute taxonomies — all handled cleanly.' },
  { icon: '🛒', title: 'Checkout Optimisation', desc: 'One-page checkout, guest checkout, address auto-complete, and trust signals strategically placed to reduce abandonment and lift conversions.' },
  { icon: '📊', title: 'Inventory & Order Management', desc: 'Custom order statuses, automated low-stock alerts, bulk order processing, and integrations with fulfilment platforms and ERPs.' },
  { icon: '🔄', title: 'Subscription & Membership Products', desc: 'WooCommerce Subscriptions and Memberships configured for recurring billing, content gating, member discounts and churn recovery.' },
];

const steps = [
  { num: '01', title: 'Store Strategy', desc: 'We map your product catalogue, customer journey and payment flows — identifying quick wins and defining the architecture before any design or development begins.' },
  { num: '02', title: 'Design & Theme Build', desc: 'Custom theme development with WooCommerce template overrides, mobile-first layouts, and conversion-focused UX patterns throughout the shopping journey.' },
  { num: '03', title: 'WooCommerce Configuration', desc: 'Payment gateways, shipping zones, tax settings, inventory management, and all third-party plugin integrations configured, tested and verified.' },
  { num: '04', title: 'Launch & Optimise', desc: 'Pre-launch QA checklist, performance testing, SSL and security hardening, followed by post-launch monitoring and conversion optimisation.' },
];

const faqs = [
  { q: 'WooCommerce vs Shopify — which should I choose?', a: 'Shopify is great for getting started quickly with minimal technical overhead. WooCommerce is better when you need full control — custom checkout flows, complex product structures, deep WordPress integrations, or when you want to avoid monthly platform fees as you scale. We help you make the right call based on your specific business needs.' },
  { q: 'Which payment gateways do you integrate?', a: 'We integrate with all major gateways: Stripe, PayPal, Square, Braintree, Klarna, Afterpay, Zip, and region-specific options. We also handle 3D Secure, SCA compliance, and PCI DSS best practices so your store is secure and compliant from day one.' },
  { q: 'Can WooCommerce handle 10,000+ products?', a: 'Yes, with the right infrastructure. We configure WooCommerce with proper database indexing, object caching (Redis), a CDN for media, and optimised queries. Many of our clients run catalogues of 50,000+ SKUs without performance issues. The key is server and database configuration, not WooCommerce itself.' },
  { q: 'How to reduce cart abandonment?', a: 'We implement a range of proven tactics: one-page checkout, guest checkout, exit-intent popups, abandoned cart email recovery (via Klaviyo or Mailchimp), trust badges at checkout, and streamlined address forms with auto-complete. Small UX improvements at checkout have an outsized impact on revenue.' },
  { q: 'Do you provide training after launch?', a: 'Yes. Every project includes a handover session covering order management, adding/editing products, running promotions, and managing customers. We also provide written documentation and video walkthroughs tailored to your team\'s technical level.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/wordpress-cms", label: "WordPress & CMS" }}
      name="WooCommerce Stores"
      copy={{ badge: "WORDPRESS & CMS", title: <>WooCommerce Store <span style={{ color: 'var(--brand)' }}>Development</span></>, desc: <>High-converting WooCommerce stores built for scale — custom themes, seamless payment gateways, and revenue-focused checkout optimisation.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
