import { serviceCityPath } from '@/data/serviceCity';
import Link from 'next/link';
import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';
import { industryFaqs } from '@/data/industry-faqs';

const heroStats = ([['500K', 'Concurrent Users'], ['2.1s', 'Avg Load Time'], ['38%', 'Avg Conv. Lift']] as [string, string][]).map(([value, label]) => ({ value, label }));
const challenges = [
                { icon: '🚀', title: 'Peak Traffic Scaling', desc: 'Black Friday, flash sales, viral moments — your storefront stays fast and available when it matters most, no matter the load.' },
                { icon: '🛒', title: 'Cart Abandonment', desc: 'Optimised checkout flows, smart recovery sequences, and frictionless payment options that turn browsers into buyers.' },
                { icon: '🎯', title: 'Personalisation at Scale', desc: 'AI-powered product recommendations, dynamic pricing, and tailored search results that increase average order value.' },
              ];
const solutions = [
                { icon: '🛍️', title: 'Headless Commerce Platforms', desc: 'Next.js-powered, composable storefronts with sub-2s load times, Lighthouse 95+ scores, and CMS-driven content that marketers can manage without developers.' },
                { icon: '🤖', title: 'AI-Powered Merchandising', desc: 'Recommendation engines trained on your customer data, dynamic pricing algorithms, intelligent search with semantic understanding, and automated upsell flows.' },
                { icon: '📱', title: 'Mobile Commerce', desc: 'Native and PWA shopping experiences with one-tap checkout, push notifications, and offline browsing that drive mobile conversion rates.' },
                { icon: '🔄', title: 'Subscription Billing', desc: 'Recurring payment management with flexible plans, dunning automation, proration, and analytics that reduce churn and maximise lifetime value.' },
                { icon: '🏪', title: 'Marketplace Platforms', desc: 'Multi-vendor marketplace infrastructure with seller onboarding, commission management, split payments, and dispute resolution workflows.' },
                { icon: '📊', title: 'Analytics & Attribution', desc: 'End-to-end conversion tracking, multi-touch attribution modelling, and real-time revenue dashboards that reveal what drives your sales.' },
              ];
const tech = [
                { cat: 'Commerce', items: ['Shopify', 'Commercetools', 'BigCommerce', 'Medusa'] },
                { cat: 'Frontend', items: ['Next.js', 'Remix', 'React', 'Vercel'] },
                { cat: 'Payments', items: ['Stripe', 'Adyen', 'Braintree', 'Klarna'] },
                { cat: 'Analytics', items: ['GA4', 'Mixpanel', 'Segment', 'Heap'] },
              ];
const whyUs = [
                { icon: '⚡', title: 'Commerce Performance Experts', desc: 'We obsess over Core Web Vitals, load times, and checkout friction. Every millisecond we save you translates directly to revenue.' },
                { icon: '💰', title: 'Revenue-First Design', desc: 'Every design decision is tested against conversion metrics. We don\'t build beautiful pages — we build pages that sell.' },
                { icon: '📈', title: 'Scale Tested', desc: 'Our platforms have survived Black Friday, Super Bowl ads, and influencer drops without a single incident. We plan for your biggest day from day one.' },
              ];
const related = [
  { name: 'Edmonton', href: serviceCityPath('web-development', 'edmonton'), desc: 'E-Commerce Software Development services in Edmonton.' },
  { name: 'Calgary', href: serviceCityPath('web-development', 'calgary'), desc: 'E-Commerce Software Development services in Calgary.' },
  { name: 'Toronto', href: serviceCityPath('web-development', 'toronto'), desc: 'E-Commerce Software Development services in Toronto.' },
  { name: 'Vancouver', href: serviceCityPath('web-development', 'vancouver'), desc: 'E-Commerce Software Development services in Vancouver.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'Headless storefronts with sub-2s load times, Lighthouse 95+ and CMS-driven content.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Native shopping apps with one-tap checkout, push notifications and offline browsing.' },
                { name: 'Digital Marketing', href: '/services/digital-marketing', desc: 'SEO, paid ads and email campaigns that drive traffic and maximise conversion rates.' },
                { name: 'WordPress & CMS', href: '/services/wordpress-cms', desc: 'WooCommerce stores and headless CMS setups for content-rich commerce experiences.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Subscription billing platforms and marketplace infrastructure with multi-vendor support.' },
              ];

const cityLinks = [
  { label: 'Web Development Company in Edmonton', href: serviceCityPath('web-development', 'edmonton') },
  { label: 'Web Development Company in Toronto', href: serviceCityPath('web-development', 'toronto') },
  { label: 'Web Development Company in Montreal', href: serviceCityPath('web-development', 'montreal') },
  { label: 'SEO Company in Toronto', href: serviceCityPath('digital-marketing', 'toronto') },
  { label: 'SEO Company in Vancouver', href: serviceCityPath('digital-marketing', 'vancouver') },
];

const linkStyle = { color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } as const;
const cardStyle = { border: '1px solid var(--line, #e5e7eb)', borderRadius: 12, padding: 'clamp(16px, 4vw, 28px)', scrollMarginTop: 96, minWidth: 0 } as const;
const pStyle = { fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 12px' } as const;

const projectTypes = [
  {
    id: 'headless-storefronts',
    title: 'Headless storefronts',
    desc: 'Fast, composable storefronts that separate the shopping experience from the commerce back end, so marketing can ship pages without waiting on a release.',
    extra: <>See the <Link href="/case-studies/ecommerce-platform" style={linkStyle}>e-commerce platform case study</Link> for a build that handled 500K concurrent users and a 38% conversion lift.</>,
  },
  {
    id: 'shopify-woocommerce',
    title: 'Shopify and WooCommerce builds',
    desc: 'New stores, theme and app work, and migrations on platforms your team already knows, with checkout and catalogue set up for Canadian selling.',
    extra: <>Delivered by our <Link href="/services/wordpress-cms" style={linkStyle}>WordPress and CMS development</Link> team.</>,
  },
  {
    id: 'marketplaces',
    title: 'Multi-vendor marketplaces',
    desc: 'Seller onboarding, commission management, split payments and dispute workflows for platforms that host many merchants.',
    extra: <>Built with our <Link href="/services/saas-development" style={linkStyle}>SaaS development</Link> practice.</>,
  },
  {
    id: 'mobile-commerce',
    title: 'Mobile commerce apps',
    desc: 'Native and progressive web shopping apps with one-tap checkout, push notifications and offline browsing.',
    extra: <>See our <Link href="/services/mobile-app-development" style={linkStyle}>mobile app development</Link> service for iOS and Android.</>,
  },
  {
    id: 'subscriptions',
    title: 'Subscription and recurring billing',
    desc: 'Recurring plans, proration, dunning and churn analytics for stores that sell on a subscription basis.',
    extra: <>Scoped as a fixed-price build with your plans, billing rules and cancellation policy agreed up front.</>,
  },
  {
    id: 'store-seo',
    title: 'Store SEO and conversion optimisation',
    desc: 'Technical SEO, product and category page structure, and checkout testing that turn existing traffic into more revenue.',
    extra: <>Handled by our <Link href="/services/digital-marketing/seo-services" style={linkStyle}>SEO services</Link> team.</>,
  },
];

const buildVsBuy = [
  ['Storefront platform', 'Buy Shopify or BigCommerce when speed to market matters', 'Build a custom headless storefront when experience is your edge', 'Buy, then customise the front end'],
  ['Checkout and payments', 'Use Stripe or Shopify Payments for proven, compliant rails', 'Build a bespoke checkout only for unusual flows', 'Buy the rails'],
  ['Product search and recommendations', 'Buy a search or recommendations service', 'Build when your catalogue and data are the differentiator', 'Buy, then tune the data'],
  ['Inventory and order management', 'Buy or keep your ERP and integrate it', 'Build only the workflows the ERP cannot express', 'Buy the ERP, build the integration'],
  ['Marketplace and multi-vendor logic', 'Buy a marketplace platform for a standard model', 'Build when commissions, payouts or seller rules are unique', 'Build when it is the product'],
  ['Analytics and attribution', 'Buy GA4, Segment or a similar tool', 'Build the warehouse models and dashboards on top', 'Buy the collection, build the reporting'],
];

const buyerContent = (
  <section aria-labelledby="ecommerce-buyer-guide" style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 id="ecommerce-buyer-guide" style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>What a Canadian e-commerce development company builds</h2>
      <p style={{ ...pStyle, maxWidth: 760 }}>A Canadian e-commerce development company builds the online stores, headless storefronts, marketplaces and mobile shopping apps that Canadian retailers sell through, including the checkout and payment integrations behind them. At Mapletech Labs that means a store your team can run day to day, built to stay fast through peak sales and to meet Canadian tax and bilingual requirements.</p>
      <p style={{ ...pStyle, maxWidth: 760 }}>We scope the work as a fixed-price project in CAD and hand over the source code on final payment. Start with our <Link href="/services/web-development" style={linkStyle}>web development services</Link>, or jump to <a href="#ecommerce-project-types" style={linkStyle}>common project types</a>, <a href="#ecommerce-platform-choice" style={linkStyle}>platform choice</a>, <a href="#ecommerce-build-vs-buy" style={linkStyle}>build versus buy</a>, <a href="#ecommerce-process" style={linkStyle}>how we work</a> or <a href="#ecommerce-cost" style={linkStyle}>what affects cost</a>.</p>

      <h2 id="ecommerce-project-types" style={{ fontSize: 'var(--fs-h3)', margin: '32px 0 8px' }}>Common e-commerce project types</h2>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', marginTop: 20 }}>
        {projectTypes.map(t => (
          <article key={t.id} id={t.id} style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 10 }}>{t.title}</h3>
            <p style={pStyle}>{t.desc}</p>
            <p style={{ ...pStyle, marginBottom: 0 }}>{t.extra}</p>
          </article>
        ))}
      </div>

      <div id="ecommerce-platform-choice" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>Shopify, WooCommerce or custom: how to choose</h2>
        <p style={pStyle}>There is no single right platform. The choice comes down to how unusual your store is and how much control you need. We weigh these factors in discovery:</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Catalogue size:</strong> a few hundred products suits a hosted platform; tens of thousands with complex variants often points to a custom or headless build.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Checkout customisation:</strong> standard checkout is fine for most stores; unusual flows, bundles or approvals may need a custom checkout.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>B2B pricing:</strong> customer-specific price lists, quotes and net terms usually need more than a consumer storefront offers.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Integrations with ERP and POS:</strong> the more systems your store must talk to, the more the platform&apos;s integration options matter.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Canadian tax and bilingual stores:</strong> GST/HST/PST/QST handling and English/French storefronts should be planned in, not bolted on.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Total running cost:</strong> compare subscription, app and transaction fees against build and hosting costs over several years, not just month one.</li>
        </ul>
      </div>

      <div id="ecommerce-build-vs-buy" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>Build versus buy</h2>
        <p style={pStyle}>Most stores are a mix. Buy the proven, commodity layers where a provider already carries the maintenance burden, and build the experience, data and workflows that make you different. This is the split we usually recommend:</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, lineHeight: 1.6 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Capability</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Buy when</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Build when</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Usual call</th>
              </tr>
            </thead>
            <tbody>
              {buildVsBuy.map(([capability, buy, build, call]) => (
                <tr key={capability}>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)', fontWeight: 600 }}>{capability}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{buy}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{build}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{call}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="ecommerce-process" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>How we work with retail teams</h2>
        <ol style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Discovery:</strong> we map your catalogue, customer journeys, integrations and peak-sales calendar, and agree what success looks like.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Architecture and fixed quote:</strong> you get a written scope, fixed milestones and a CAD price before code starts.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Design and build in two-week increments:</strong> working storefront and checkout features every two weeks, with your team reviewing as it develops.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Data and catalogue migration:</strong> products, variants, customers and order history move across with redirects and checks so nothing is lost.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Load testing before peak sales:</strong> we test the store against expected Black Friday and campaign traffic so it holds up on the biggest day.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Launch and handover:</strong> repositories, credentials and runbooks transfer to you on final payment, with optional support after launch.</li>
        </ol>
      </div>

      <div id="ecommerce-cost" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>What affects e-commerce project cost</h2>
        <p style={pStyle}>Two stores with the same page count can differ by several times in cost. The drivers we price in discovery are:</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Platform choice:</strong> a hosted Shopify or WooCommerce build is usually simpler than a custom headless storefront.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Catalogue size and migration:</strong> moving thousands of products, variants and images from a legacy store is often its own workstream.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Integrations:</strong> ERP, POS, inventory, shipping and tax systems each add mapping, access approvals and testing.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Custom checkout and payments:</strong> unusual flows, subscriptions or multi-currency support take more design and testing than a standard checkout.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Design:</strong> a bespoke brand experience and content-heavy pages cost more than a tuned theme.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Post-launch support:</strong> monitoring, releases and ongoing optimisation after launch.</li>
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>We quote fixed-scope projects in CAD. The FAQ below covers typical ranges and timelines. For a first release, see our <Link href="/services/saas-development/saas-mvp-development" style={linkStyle}>SaaS MVP development</Link> service.</p>
      </div>
    </div>
  </section>
);

const extra = (
  <section style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Related work</h2>
      <ul style={{ margin: '0 0 16px', paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/case-studies/ecommerce-platform" style={linkStyle}>E-commerce platform case study</Link></li>
      </ul>
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Services for this sector</h2>
      <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/services/web-development" style={linkStyle}>Web development</Link></li>
        <li><Link href="/services/mobile-app-development" style={linkStyle}>Mobile app development</Link></li>
        <li><Link href="/services/digital-marketing" style={linkStyle}>Digital marketing</Link></li>
      </ul>
    </div>
  </section>
);

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="ecommerce"
      name="E-Commerce"
      copy={{ badge: "E-Commerce", title: <>E-Commerce Development That <span style={{ color: 'var(--brand)' }}>Converts.</span></>, desc: <>E-commerce software development for Canadian retailers — high-performance headless commerce, mobile-first checkout and AI-powered merchandising that maximises revenue.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "E-Commerce Client", headline: "500K concurrent users, 38% conversion lift, $4.2M revenue increase", text: "We migrated their legacy storefront to a headless Next.js architecture with real-time inventory, AI search, and a one-page checkout.", quote: "Our Black Friday sale broke records. The platform didn't even flinch.", cite: "VP Engineering, Major Canadian Retailer" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your Commerce Platform.", sub: "Performance-engineered storefronts that convert visitors into revenue." }}
      faqs={industryFaqs.ecommerce}
      cityLinks={cityLinks}
      buyerContent={buyerContent}
      extra={extra}
    />
  );
}
