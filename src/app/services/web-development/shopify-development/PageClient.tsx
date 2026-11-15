import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '80+', label: 'Stores Built' },
  { value: '$50M+', label: 'GMV Processed' },
  { value: '3.2%', label: 'Avg Conversion Rate' },
  { value: '4wk', label: 'Storefront Delivery' },
];

const services = [
  { icon: '🎨', title: 'Custom Shopify Theme Development', desc: 'We build custom Online Store 2.0 themes in Liquid — flexible sections, fast templates and a design that matches your brand instead of a stock theme everyone else uses.' },
  { icon: '⚡', title: 'Headless Shopify', desc: 'We decouple the storefront from Shopify using Hydrogen or Next.js with the Storefront API, giving you full frontend control, edge speed and a checkout that still runs on Shopify.' },
  { icon: '🔌', title: 'Shopify Apps & Integrations', desc: 'We build private apps and connect Shopify to your ERP, inventory, fulfilment, Klaviyo and analytics stack so orders, stock and customer data stay in sync.' },
  { icon: '🔁', title: 'Migration to Shopify', desc: 'We migrate from WooCommerce, Magento or a custom platform — products, customers, order history and content — with 301 redirects so your existing rankings are kept.' },
  { icon: '💼', title: 'Shopify Plus Checkout & B2B', desc: 'We configure Shopify Plus checkout, B2B catalogues, company accounts, volume pricing and custom wholesale flows for Canadian brands selling to trade buyers.' },
  { icon: '🇨🇦', title: 'Speed, Tax & Bilingual Setup', desc: 'We tune Core Web Vitals, set up Canadian tax and shipping rules, and build English/French storefronts so your Shopify store performs and complies across Canada.' },
];

const steps = [
  { num: '01', title: 'Discovery & scope', desc: 'We review your catalogue, current platform, integrations and goals, then agree the theme, headless or migration path and a fixed CAD scope before any build starts.' },
  { num: '02', title: 'Design & theme build', desc: 'We design conversion-focused templates and build them as an Online Store 2.0 theme or a Hydrogen/Next.js storefront, with mobile-first product and checkout flows.' },
  { num: '03', title: 'Integrations & migration', desc: 'We connect payments, ERP, inventory, email and analytics, and migrate products, customers and orders with 301 redirects and parallel testing to protect rankings.' },
  { num: '04', title: 'Launch & optimise', desc: 'We manage go-live, monitor performance and errors, then improve speed, Core Web Vitals and conversion through structured testing after launch.' },
];

const faqs = [
  {
    q: 'How much does Shopify development cost in Canada?',
    a: 'Cost depends on theme complexity, number of templates, apps, integrations and migration scope. Our website cost guide for Canada and our pricing page list typical ranges in CAD; we confirm a fixed quote after discovery.',
    aNode: (
      <>
        Cost depends on theme complexity, number of templates, apps, integrations and migration scope. Our{' '}
        <Link href="/blog/website-cost-canada" style={{ color: 'var(--brand)' }}>website cost guide for Canada</Link>{' '}
        and our <Link href="/pricing" style={{ color: 'var(--brand)' }}>pricing page</Link> list typical ranges in CAD; we confirm a fixed quote after discovery.
      </>
    ),
  },
  { q: 'Shopify or custom ecommerce: which should I choose?', a: 'Shopify is usually the faster, lower-risk choice for standard retail catalogues, while a custom or headless build fits unusual UX, complex B2B workflows or deep ERP integration. Our Shopify vs custom ecommerce guide for Canada compares both paths, and we recommend one objectively after reviewing your requirements.' },
  { q: 'Can you migrate my store to Shopify without losing SEO?', a: 'Yes. We map every existing URL, migrate products, collections, customers and order history, and set up 301 redirects from old pages to their Shopify equivalents. We also preserve titles, descriptions, structured data and internal links, then monitor Search Console after launch so rankings are protected.' },
  { q: 'Do you build headless Shopify stores?', a: 'Yes. We build headless storefronts with Hydrogen or Next.js and the Shopify Storefront API, keeping Shopify for commerce and checkout while giving you a custom, fast frontend. This suits brands that need unique UX, multi-market content or tight integration with other systems.' },
  { q: 'Do you support Shopify Plus and B2B?', a: 'Yes. We configure Shopify Plus checkout, B2B catalogues, company accounts, volume and customer-specific pricing, and wholesale order flows. We also connect Plus stores to ERP, inventory and fulfilment systems so trade orders run through the same back office as retail.' },
];

function BuyerContent() {
  return (
    <section aria-labelledby="shopify-buyer-guide" style={{ padding: 'var(--section-y-sm) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ maxWidth: 960, color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="shopify-buyer-guide">Shopify vs WooCommerce vs custom ecommerce</h2>
        <p className="lede">Shopify is usually the fastest route to a reliable store, WooCommerce gives you more control on WordPress, and a custom build fits complex or unusual commerce models. The right choice depends on your catalogue, integrations and how much flexibility you need.</p>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Platform</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Best for</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Monthly platform cost</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Flexibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Shopify</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Standard retail that wants fast launch and low maintenance</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Subscription plus app fees</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Moderate — themes, apps and Storefront API</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>WooCommerce</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>WordPress sites that want ownership and plugin control</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Hosting plus plugin licences</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>High — open source, but you manage updates and security</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Custom / headless</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Complex B2B, multi-market or unusual pricing and UX</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Hosting and infrastructure only</td>
                <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)' }}>Highest — built around your exact workflows</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="lede">Compare our <Link href="/services/wordpress-cms/woocommerce-stores" style={{ color: 'var(--brand)' }}>WooCommerce store development service</Link>, our <Link href="/services/web-development/ecommerce-systems" style={{ color: 'var(--brand)' }}>custom e-commerce development service</Link>, and the full <Link href="/blog/shopify-vs-custom-ecommerce-canada" style={{ color: 'var(--brand)' }}>Shopify vs custom ecommerce guide for Canada</Link> before choosing a platform.</p>
        <p className="lede"><Link href="/contact?service=web-development">Book a Shopify consultation</Link> with your catalogue size, current platform and integration list so we can recommend the right path and provide a fixed quote.</p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: '/services/web-development', label: 'Web Development' }}
      name="Shopify Development"
      copy={{ badge: 'WEB DEVELOPMENT', title: <>Shopify <span style={{ color: 'var(--brand)' }}>Development</span></>, desc: <>We build and migrate Shopify stores for Canadian brands — custom themes, headless storefronts, apps and integrations, delivered at a fixed CAD price with SEO protected.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Shopify Development Services"
      buyerContent={<BuyerContent />}
      caseStudySlugs={['ecommerce-platform']}
    />
  );
}
