import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['70+', 'Energy Sector Projects'], ['99%', 'Uptime Guarantee'], ['24/7', 'Field Support']]);
const numbers = pair([
                  ['70+', 'Energy Sector Projects'],
                  ['99%', 'System Uptime Delivered'],
                  ['24/7', 'Field Operations Support'],
                  ['$2B+', 'Client Revenue Impacted'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Field-ready mobile apps for energy crews, logistics teams, and fleet operators across Alberta.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Enterprise web platforms for oil and gas operators, pipeline companies, and energy trading desks.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Predictive maintenance for drilling rigs, pipeline anomaly detection, and production optimization models.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Supply chain transparency, carbon credit tokenization, and decentralized energy trading platforms.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Secure cloud infrastructure for SCADA systems, real-time telemetry, and enterprise resource planning.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'UI/UX for complex operational dashboards, GIS mapping interfaces, and field service applications.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Oil & Gas Digital Transformation', desc: 'We build SCADA integrations, production reporting platforms, and field data capture systems that help energy companies reduce downtime and optimize output across their operations.' },
                { title: 'Close to Our Edmonton HQ', desc: 'Calgary is just three hours from our headquarters in Edmonton. This proximity means faster response times, in-person meetings when needed, and a deep understanding of Alberta\'s business landscape.' },
                { title: 'Logistics & Supply Chain', desc: 'Calgary is a major logistics hub connecting Western Canada. We develop fleet management systems, warehouse automation tools, and supply chain visibility platforms for the corridor.' },
                { title: 'Enterprise Modernization', desc: 'Many Calgary enterprises run on legacy systems built decades ago. We modernize these platforms with cloud migration, API-first architecture, and modern frontends without disrupting operations.' },
              ];
const whyCity = [
                { t: 'Energy Sector Digital Transformation', d: 'Canada\'s energy capital is investing billions in digital — IoT, AI, predictive maintenance, and emissions tracking are reshaping oil & gas.' },
                { t: 'Calgary Economic Development', d: 'CED\'s tech strategy is attracting companies like Infosys, Mphasis, and RBC\'s innovation lab to Calgary\'s growing tech corridor.' },
                { t: 'Platform Calgary', d: 'Calgary\'s flagship innovation hub supports 200+ startups with mentorship, funding access, and enterprise partnerships.' },
                { t: 'No Provincial Sales Tax', d: 'Alberta\'s tax advantage — no PST, competitive corporate rates, and generous SR&ED credits make Calgary ideal for scaling tech companies.' },
              ];
const neighborhoods = [
                { n: 'Downtown / Stephen Ave', d: 'Calgary\'s business core — energy company HQs, fintech startups, and Platform Calgary.' },
                { n: 'Beltline', d: 'Creative district with digital agencies, SaaS companies, and tech co-working spaces.' },
                { n: 'University District', d: 'Mixed-use innovation zone adjacent to U of C with research spinoffs and startups.' },
                { n: 'East Village', d: 'Revitalized neighbourhood attracting tech companies and the National Music Centre.' },
                { n: 'Kensington', d: 'Boutique tech firms, design studios, and indie developers in Calgary\'s creative hub.' },
                { n: 'Airdrie', d: 'Fast-growing satellite city north of Calgary with logistics and small business tech.' },
                { n: 'Cochrane', d: 'Western suburb with remote-first tech companies and outdoor industry startups.' },
                { n: 'Okotoks', d: 'Southern community with agricultural tech and renewable energy companies.' },
              ];
const wins = [
                { title: 'Oil & Gas Analytics Platform', metric: '45% cost reduction', desc: 'Built a predictive maintenance and production analytics dashboard for a Calgary energy company, reducing unplanned downtime by 45% across 200+ well sites.' },
                { title: 'Calgary Real Estate Marketplace', metric: '10,000+ listings', desc: 'Developed a custom property marketplace with 3D virtual tours, mortgage calculators, and agent matching — now the largest independent platform in Alberta.' },
                { title: 'Alberta Logistics Fleet Management', metric: '22% fuel savings', desc: 'Created a real-time fleet tracking and route optimization platform for a Calgary logistics company, cutting fuel costs by 22% across 500+ vehicles.' },
              ];
const trends = [
                { t: 'Energy & Data Analytics', d: 'Production dashboards, SCADA integration, emissions tracking, and ESG reporting for Calgary\'s energy sector.' },
                { t: 'IoT & Predictive Maintenance', d: 'Sensor networks, digital twins, and predictive analytics for oil & gas, mining, and infrastructure operations.' },
                { t: 'FinTech for Western Canada', d: 'Payment platforms, lending apps, and wealth management tools serving Calgary\'s financial services sector.' },
                { t: 'PropTech & Real Estate', d: 'Property marketplaces, virtual tour platforms, and property management systems for Calgary\'s real estate market.' },
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
      slug="calgary"
      copy={{ badge: 'Software development in Calgary', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Calgary</span></>, desc: <>Calgary is Canada&apos;s energy capital, and the oil and gas sector is undergoing a massive digital transformation. Just three hours from our Edmonton headquarters, we deliver custom software that modernizes operations across Alberta&apos;s energy corridor and logistics networks.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Calgary & Alberta by the Numbers", sub: "Powering digital transformation across Canada's energy capital.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Calgary for Tech", intro: "Calgary is Western Canada's energy tech capital, leading the digital transformation of oil & gas while building a diversified tech ecosystem.", items: whyCity }}
      neighborhoods={{ title: "Calgary Areas We Serve", intro: "From Stephen Ave towers to suburban business parks, we build software across the Calgary region.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Calgary Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
