import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['55+', 'Startup MVPs Built'], ['96%', 'Client Retention'], ['20+', 'InsurTech Solutions']]);
const numbers = pair([
                  ['55+', 'Startup MVPs Delivered'],
                  ['96%', 'Client Retention Rate'],
                  ['20+', 'InsurTech Solutions Built'],
                  ['1,800+', 'Tech Startups in KW'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Startup MVPs, InsurTech mobile platforms, and enterprise apps built with the speed and rigor of Waterloo engineering.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'SaaS platforms, InsurTech portals, and enterprise web applications for Canada\'s most innovative tech corridor.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Risk modeling, claims automation, and intelligent underwriting systems powered by machine learning and NLP.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Smart contract platforms, parametric insurance protocols, and decentralized identity solutions for the InsurTech sector.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Scalable cloud architecture for high-growth startups, CI/CD automation, and multi-tenant SaaS infrastructure.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Lean startup design sprints, rapid prototyping, and design systems for Communitech-backed ventures.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'University of Waterloo Talent', desc: 'The University of Waterloo produces more tech talent than any school in Canada. Our team draws from this world-class talent pool, and we understand the co-op culture that makes KW startups move fast.' },
                { title: 'InsurTech Capital of Canada', desc: 'KW is home to Canada\'s largest concentration of insurance companies. We build claims automation systems, underwriting platforms, risk modeling tools, and digital-first policy management solutions.' },
                { title: 'Communitech & Startup Ecosystem', desc: 'As part of the Communitech-powered ecosystem, we help startups go from idea to MVP in weeks. Lean sprints, technical architecture guidance, and scalable code from day one.' },
                { title: 'Rapid MVP to Scale-Up', desc: 'KW startups need to move fast. We specialize in building production-ready MVPs that can scale to millions of users without rewriting. Proven architecture patterns from dozens of successful launches.' },
              ];
const whyCity = [
                { t: 'Communitech Hub', d: 'Canada\'s largest innovation hub supports 4,000+ companies from startups to Fortune 500 with mentorship and resources.' },
                { t: 'Google\'s Canadian HQ', d: 'Google, Shopify, and 20+ major tech firms have engineering offices in KW, creating a deep talent ecosystem.' },
                { t: 'UWaterloo Co-op Pipeline', d: 'The world\'s largest co-op program produces 7,000+ tech graduates annually — a direct pipeline for hiring.' },
                { t: 'Quantum Valley', d: 'Home to the Institute for Quantum Computing (IQC) and Perimeter Institute — Canada\'s quantum computing epicenter.' },
              ];
const neighborhoods = [
                { n: 'Downtown Kitchener', d: 'Innovation district with Google\'s HQ, Communitech, and a booming startup scene.' },
                { n: 'Uptown Waterloo', d: 'University-adjacent tech corridor with SaaS companies and AI startups.' },
                { n: 'Cambridge', d: 'Manufacturing hub transitioning to smart factory and IoT innovation.' },
                { n: 'Guelph', d: 'AgriFood tech capital with strong university research programs.' },
                { n: 'Elmira', d: 'Growing commercial centre serving rural Southwestern Ontario businesses.' },
                { n: 'New Hamburg', d: 'Small-town business community with insurance and manufacturing roots.' },
                { n: 'Stratford', d: 'Digital media hub with the University of Waterloo Stratford campus.' },
                { n: 'Brantford', d: 'Revitalizing downtown with new tech incubators and Laurier campus.' },
              ];
const wins = [
                { title: 'KW SaaS Startup — Series A', metric: '$4M raised', desc: 'Built the MVP and scaled the platform for a Waterloo-based B2B SaaS company, helping them close a $4M Series A round within 14 months of launch.' },
                { title: 'Waterloo AI Research Spinoff', metric: '10x model performance', desc: 'Partnered with a UWaterloo research group to productize their ML model into a commercial SaaS platform serving enterprise clients across North America.' },
                { title: 'Cambridge Manufacturing IoT', metric: '28% efficiency gain', desc: 'Deployed IoT sensors and a real-time analytics dashboard for a Cambridge automotive parts manufacturer, reducing waste and optimizing production lines.' },
              ];
const trends = [
                { t: 'AI & Quantum Computing', d: 'Leveraging KW\'s world-leading quantum and AI research ecosystem — IQC, Perimeter Institute, Vector Institute partnerships.' },
                { t: 'Insurance Tech', d: 'Custom platforms for Waterloo Region\'s insurance giants — Manulife, Sun Life, Equitable Life — modernizing claims and underwriting.' },
                { t: 'Autonomous Vehicles', d: 'Sensor fusion, computer vision, and fleet management systems for KW\'s autonomous vehicle corridor.' },
                { t: 'Deep Tech & SaaS', d: 'Scaling research spinoffs into production-grade SaaS platforms — from UWaterloo labs to global enterprise customers.' },
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
      slug="kitchener"
      copy={{ badge: 'Software development in Kitchener', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Kitchener-Waterloo</span></>, desc: <>Kitchener-Waterloo is Canada&apos;s Silicon Valley — home to the University of Waterloo, Communitech, and over 1,800 tech startups. From InsurTech to quantum computing, we build custom software for the most innovative companies in Canada&apos;s fastest-growing tech corridor.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Kitchener-Waterloo by the Numbers", sub: "Fueling innovation in Canada's Silicon Valley.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Kitchener-Waterloo for Tech", intro: "Known as Canada's Silicon Valley, the KW region is home to 1,800+ tech companies and some of the world's top talent.", items: whyCity }}
      neighborhoods={{ title: "Kitchener-Waterloo Areas We Serve", intro: "We partner with businesses across the Waterloo Region and Southwestern Ontario corridor.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Kitchener-Waterloo Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
