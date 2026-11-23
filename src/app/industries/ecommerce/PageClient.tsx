import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';

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
                { name: 'Web Development', href: '/services/web-development', desc: 'Headless storefronts with sub-2s load times, Lighthouse 95+ and CMS-driven content.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Native shopping apps with one-tap checkout, push notifications and offline browsing.' },
                { name: 'Digital Marketing', href: '/services/digital-marketing', desc: 'SEO, paid ads and email campaigns that drive traffic and maximise conversion rates.' },
                { name: 'WordPress & CMS', href: '/services/wordpress-cms', desc: 'WooCommerce stores and headless CMS setups for content-rich commerce experiences.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Subscription billing platforms and marketplace infrastructure with multi-vendor support.' },
              ];

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
    />
  );
}
