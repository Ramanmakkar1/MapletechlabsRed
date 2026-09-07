import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['85+', 'Projects in Alberta'], ['98%', 'Client Satisfaction'], ['40+', 'Team Members']]);
const numbers = pair([
                  ['85+', 'Projects Delivered in Alberta'],
                  ['98%', 'Client Satisfaction Rate'],
                  ['40+', 'Team Members'],
                  ['5+', 'Years Serving Edmonton'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Native and cross-platform apps built for iOS and Android.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Scalable web applications and enterprise portals.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Intelligent automation, predictive analytics, and LLM integration.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, DeFi protocols, and decentralized applications.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'AWS, Azure, Kubernetes, and CI/CD pipeline architecture.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'UI/UX strategy, prototyping, and design systems.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Our Headquarters', desc: 'Edmonton is home to our founding team and core operations. When you work with Mapletech Labs in Edmonton, you work directly with our leadership and most experienced engineers.' },
                { title: 'Virtual Team of World-Class Agents', desc: 'Our distributed model gives you access to top-tier talent across Canada without geographic limitations. The best person for the job, every time.' },
                { title: '12 Locations Across Canada', desc: 'From Halifax to Victoria, our coast-to-coast presence means we understand Canadian markets and can support your growth nationally.' },
                { title: 'Canadian Company, Canadian Values', desc: 'We are proudly Canadian. Your data stays in Canada, your IP is protected by Canadian law, and we build with the reliability this country is known for.' },
              ];
const whyCity = [
                { t: 'AI & Machine Learning Hub', d: 'University of Alberta\'s Amii institute is a global leader in reinforcement learning — Edmonton trains more AI researchers per capita than almost any city worldwide.' },
                { t: 'ICE District Innovation', d: 'Edmonton\'s $2.5B ICE District is attracting tech companies, co-working spaces, and venture capital to the downtown core.' },
                { t: 'Energy Tech Transformation', d: 'Alberta\'s oil & gas sector is driving massive demand for data analytics, IoT, predictive maintenance, and clean energy tech.' },
                { t: 'Cost Advantage', d: 'No provincial sales tax, 30-50% lower operating costs than Toronto or Vancouver, and generous R&D tax credits for tech companies.' },
              ];
const neighborhoods = [
                { n: 'Downtown / ICE District', d: 'Edmonton\'s innovation core — tech startups, co-working spaces, and the $2.5B ICE District.' },
                { n: 'Old Strathcona / Whyte Ave', d: 'Creative tech hub with indie studios, digital agencies, and startup incubators.' },
                { n: 'South Edmonton Common', d: 'Commercial district with retail tech, e-commerce fulfillment, and logistics companies.' },
                { n: 'West Edmonton', d: 'Growing tech corridor near West Edmonton Mall with mixed commercial and tech offices.' },
                { n: 'Sherwood Park', d: 'Strathcona County\'s tech centre — energy companies, engineering firms, and SaaS startups.' },
                { n: 'St. Albert', d: 'Fast-growing city north of Edmonton with healthcare, education, and professional services tech.' },
                { n: 'Spruce Grove', d: 'Western suburb with emerging small business tech and agriculture services.' },
                { n: 'Windermere / Heritage Valley', d: 'Southwest Edmonton\'s newest business park with healthcare and professional services.' },
              ];
const wins = [
                { title: 'Edmonton FinTech Startup', metric: '300% user growth', desc: 'Built a mobile banking and payments platform for an Edmonton fintech startup, growing from 5,000 to 20,000 active users within 8 months of launch.' },
                { title: 'Alberta Healthcare Provider', metric: '50% faster onboarding', desc: 'Developed a patient intake and telehealth platform for a multi-clinic healthcare provider, cutting patient onboarding time in half across 12 Alberta locations.' },
                { title: 'Edmonton E-Commerce Brand', metric: '$2M+ annual revenue', desc: 'Created a custom headless commerce platform with subscription management for an Edmonton DTC brand, driving $2M+ in annual online revenue.' },
              ];
const trends = [
                { t: 'AI & Machine Learning', d: 'Production ML pipelines, computer vision, and NLP solutions — leveraging Edmonton\'s Amii institute and U of A AI talent pipeline.' },
                { t: 'Energy & CleanTech', d: 'IoT dashboards, predictive maintenance, and emissions tracking platforms for Alberta\'s energy sector transformation.' },
                { t: 'Healthcare & BioTech', d: 'Patient portals, telehealth platforms, and clinical data systems for Alberta Health Services and private clinics.' },
                { t: 'E-Commerce & Retail', d: 'Headless commerce, subscription platforms, and omnichannel solutions for Edmonton\'s growing DTC and retail brands.' },
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
      slug="edmonton"
      copy={{ badge: 'Software development in Edmonton', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Edmonton</span></>, desc: <>Edmonton is where Mapletech Labs was founded. As our headquarters, this is the heart of our operations — serving Alberta&apos;s growing tech ecosystem and energy sector with custom software solutions.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Edmonton & Alberta by the Numbers", sub: "Our impact across the province since founding our headquarters here.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Edmonton for Tech", intro: "Edmonton is Alberta's fastest-growing tech hub with 1,000+ tech companies, a $3B+ tech sector, and world-leading AI research at the University of Alberta.", items: whyCity }}
      neighborhoods={{ title: "Edmonton Neighborhoods We Serve", intro: "From downtown startups to suburban enterprises, we build software across the Edmonton metro area.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Edmonton Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
