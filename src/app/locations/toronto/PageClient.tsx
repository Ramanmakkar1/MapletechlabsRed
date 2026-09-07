import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['120+', 'Projects in Ontario'], ['97%', 'Client Retention'], ['50+', 'FinTech Solutions']]);
const numbers = pair([
                  ['120+', 'Projects Delivered in Ontario'],
                  ['97%', 'Client Retention Rate'],
                  ['50+', 'FinTech Solutions Built'],
                  ['3+', 'Years Serving Toronto'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android, built to serve Toronto\'s diverse, mobile-first consumer base.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Scalable web applications and enterprise portals for Bay Street financial institutions and fast-growing startups.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Predictive analytics, NLP, and intelligent automation for FinTech platforms and data-driven enterprises.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, DeFi protocols, and tokenization platforms for Canada\'s financial capital.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'AWS, Azure, and GCP architecture with CI/CD pipelines for high-availability financial systems.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'UI/UX strategy and design systems for multicultural audiences across Canada\'s largest market.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'FinTech & Bay Street Expertise', desc: 'We understand the compliance, security, and performance requirements of financial services. From banking APIs to payment gateways, we build software that meets the standards of Canada\'s financial hub.' },
                { title: 'Shopify Ecosystem Integration', desc: 'Toronto is home to Shopify and a thriving e-commerce ecosystem. We build custom apps, integrations, and headless commerce platforms that plug into the Shopify stack and beyond.' },
                { title: 'Multicultural Market Understanding', desc: 'Toronto is the most diverse city in North America. We design and build products with multilingual support, cultural sensitivity, and accessibility that resonates with global audiences.' },
                { title: 'MaRS & Startup Ecosystem', desc: 'We partner with startups in the MaRS Discovery District and across the city, providing CTO-level guidance, MVP development, and scalable architecture from day one.' },
              ];
const whyCity = [
                { t: 'MaRS Discovery District', d: 'One of the world\'s largest urban innovation hubs — 150+ startups, accelerators, and venture capital firms under one roof.' },
                { t: 'Vector Institute for AI', d: 'World-leading AI research institute founded by Geoffrey Hinton — Toronto trains more AI talent than any other Canadian city.' },
                { t: 'Bay Street FinTech', d: 'Canada\'s financial capital is undergoing a fintech revolution — from digital banking to RegTech and blockchain settlement.' },
                { t: '#4 Tech Hub in North America', d: 'Behind only San Francisco, New York, and Seattle — Toronto added more tech jobs than all three combined in recent years.' },
              ];
const neighborhoods = [
                { n: 'Financial District', d: 'Bay Street banks, insurance firms, and fintech startups driving digital transformation.' },
                { n: 'King West', d: 'Toronto\'s startup row — adtech, SaaS, and creative agencies in converted warehouses.' },
                { n: 'Liberty Village', d: 'Design studios, game developers, and digital media companies in this creative hub.' },
                { n: 'Yorkville', d: 'Luxury brands and professional services firms embracing digital-first experiences.' },
                { n: 'Scarborough', d: 'Diverse business community with manufacturing, logistics, and healthcare tech.' },
                { n: 'North York', d: 'Enterprise offices, tech parks, and growing SaaS companies along the Yonge corridor.' },
                { n: 'Mississauga', d: 'Canada\'s 6th largest city — pharma, logistics HQs, and enterprise tech.' },
                { n: 'Markham', d: 'Canada\'s high-tech capital with IBM, Huawei, and 400+ tech companies.' },
              ];
const wins = [
                { title: 'Bay Street FinTech Platform', metric: '$12M processed monthly', desc: 'Built a regulatory-compliant trading and portfolio management platform for a Toronto financial services firm, processing $12M in monthly transactions with real-time compliance checks.' },
                { title: 'Toronto Healthcare SaaS', metric: '200+ clinics onboarded', desc: 'Developed an all-in-one clinic management platform with EHR integration, telehealth, and patient scheduling — now serving 200+ clinics across the GTA.' },
                { title: 'GTA E-Commerce Expansion', metric: '340% revenue growth', desc: 'Scaled a Toronto-based DTC brand into the US market with a custom headless commerce platform, multi-currency support, and cross-border fulfillment integration.' },
              ];
const trends = [
                { t: 'FinTech Dominance', d: 'Toronto is Canada\'s fintech capital — digital banking, RegTech, InsurTech, and blockchain settlement are reshaping Bay Street.' },
                { t: 'AI & Machine Learning', d: 'With Vector Institute and dozens of AI startups, Toronto produces more AI research papers than any Canadian city.' },
                { t: 'Enterprise Digital Transformation', d: 'Canada\'s largest enterprises are headquartered here — driving massive demand for cloud migration, SaaS, and automation.' },
                { t: 'Web3 & Crypto', d: 'Toronto leads Canada\'s crypto ecosystem with exchanges, DeFi protocols, and blockchain infrastructure companies.' },
              ];
const serviceLinks = [
                { name: 'Web Development', slug: 'web-development' },
                { name: 'Mobile App Development', slug: 'mobile-app-development' },
                { name: 'AI & Machine Learning', slug: 'ai-ml' },
                { name: 'Cloud & DevOps', slug: 'cloud-devops' },
                { name: 'SaaS Development', slug: 'saas-development' },
                { name: 'Digital Marketing', slug: 'digital-marketing' },
                { name: 'Branding', slug: 'branding' },
                { name: 'WordPress & CMS', slug: 'wordpress-cms' },
                { name: 'Blockchain & Web3', slug: 'blockchain-web3' },
                { name: 'Product Design', slug: 'product-design' },
                { name: 'Game Development', slug: 'game-development' },
                { name: 'AR & VR', slug: 'ar-vr' },
              ];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="toronto"
      copy={{ badge: 'Software development in Toronto', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Toronto</span></>, desc: <>Toronto is Canada&apos;s FinTech capital and largest tech hub. From the MaRS Discovery District to Bay Street, we build custom software for startups, scale-ups, and enterprises powering North America&apos;s most multicultural market.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Toronto & Ontario by the Numbers", sub: "Driving digital transformation across Canada's largest tech market.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Toronto for Tech", intro: "Toronto is Canada's largest tech hub, ranked #4 in North America with 15,000+ tech companies and a $52B tech sector.", items: whyCity }}
      neighborhoods={{ title: "Toronto Neighborhoods We Serve", intro: "From the Financial District to the GTA suburbs, we build software for Toronto's diverse business landscape.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Toronto Tech Trends", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
