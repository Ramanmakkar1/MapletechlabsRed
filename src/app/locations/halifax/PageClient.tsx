import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([
                ['35+', 'Projects Delivered in Nova Scotia'],
                ['97%', 'Client Satisfaction Rate'],
                ['40+', 'Team Members Across Canada'],
                ['12', 'Locations Nationwide'],
              ]);
const services = [
  { title: 'Mobile App Development', desc: 'High-performance iOS and Android apps tailored to Halifax\'s maritime and service industries.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Modern web platforms and progressive web apps built with Next.js, React, and Node.js.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Ocean-tech analytics, NLP systems, and predictive models for Atlantic Canada enterprises.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, decentralized platforms, and supply-chain traceability for the maritime sector.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Secure cloud infrastructure, Kubernetes orchestration, and automated deployments on AWS and Azure.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Research-driven UX strategy, interface design, and rapid prototyping for Nova Scotia startups.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Local Expertise', desc: 'Halifax is home to Dalhousie University, a thriving ocean-tech sector, and a growing defence industry. We build software tailored to these ecosystems and the unique needs of Atlantic Canadian businesses.' },
                { title: 'Virtual Team of World-Class Agents', desc: 'Our distributed team of senior developers, AI engineers, and product designers plug directly into your Halifax operations -- delivering Silicon Valley calibre work at Canadian rates.' },
                { title: '12 Locations Across Canada', desc: 'With offices from Victoria to Halifax, Mapletech Labs brings national-scale resources to every Atlantic Canada engagement.' },
                { title: 'Proudly Canadian', desc: 'Canadian-owned, Canadian-operated. Your data stays in Canada, your IP is protected by Canadian law, and your project is managed by people who understand local business culture.' },
              ];
const whyCity = [
                { t: 'Volta Innovation Hub', d: 'Atlantic Canada\'s premier tech incubator — 100+ startups, corporate innovation programs, and a direct pipeline to East Coast talent.' },
                { t: 'Ocean Tech Capital', d: 'Halifax leads the world in ocean technology — autonomous underwater vehicles, marine sensors, and maritime data platforms.' },
                { t: 'Defence & Security', d: 'CFB Halifax and Irving Shipbuilding drive demand for secure platforms, logistics systems, and defence technology.' },
                { t: 'Atlantic Canada Gateway', d: 'Hub for Nova Scotia, New Brunswick, PEI, and Newfoundland — one tech partner to serve all four Atlantic provinces.' },
              ];
const neighborhoods = [
                { n: 'Downtown / Waterfront', d: 'Halifax\'s tech core — Volta hub, ocean tech companies, and startup offices.' },
                { n: 'Dartmouth', d: 'The "City of Lakes" with growing tech parks and defence contractors.' },
                { n: 'Bedford', d: 'Suburban commercial hub with IT services and professional firms.' },
                { n: 'Sackville', d: 'Growing community with retail and healthcare service businesses.' },
                { n: 'Truro', d: 'Central Nova Scotia\'s commercial centre with agriculture and food tech.' },
                { n: 'Moncton (NB)', d: 'New Brunswick\'s bilingual tech hub — call centres transitioning to AI and SaaS.' },
                { n: 'Charlottetown (PEI)', d: 'PEI\'s capital with aerospace, bioscience, and government tech.' },
                { n: 'St. John\'s (NL)', d: 'Newfoundland\'s capital — oil & gas tech, ocean research, and marine innovation.' },
              ];
const wins = [
                { title: 'Maritime Logistics Platform', metric: '40% faster port clearance', desc: 'Built a real-time cargo tracking and customs documentation platform for a Halifax shipping company, cutting port clearance times by 40%.' },
                { title: 'Halifax Ocean Tech Startup', metric: '3 patents filed', desc: 'Developed the control system and data analytics dashboard for an autonomous underwater vehicle company, enabling deep-sea survey automation.' },
                { title: 'Atlantic Healthcare Network', metric: '4 provinces connected', desc: 'Created a cross-provincial telehealth platform connecting patients in NS, NB, PEI, and NL with specialists across Atlantic Canada.' },
              ];
const trends = [
                { t: 'Ocean Technology', d: 'AUV control systems, marine sensor platforms, and oceanographic data analytics for Halifax\'s world-leading ocean tech cluster.' },
                { t: 'Maritime Logistics', d: 'Port management, cargo tracking, and supply chain optimization for Atlantic Canada\'s shipping and transportation sector.' },
                { t: 'Defence Technology', d: 'Secure platforms, logistics systems, and simulation tools for CFB Halifax and Irving Shipbuilding\'s defence programs.' },
                { t: 'Clean Energy', d: 'Tidal energy dashboards, wind farm analytics, and carbon tracking platforms for Nova Scotia\'s renewable energy sector.' },
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
      slug="halifax"
      copy={{ badge: 'Software development in Halifax', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Halifax.</span></>, desc: <>Mapletech Labs empowers Halifax businesses with custom software, mobile applications, and AI-driven solutions. Anchored in Atlantic Canada&apos;s innovation hub, we help companies from the waterfront to the Halifax Innovation District scale with technology.</> }}
      heroStats={heroStats}
      services={services}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Halifax for Tech", intro: "Halifax is Atlantic Canada's tech capital \u2014 a leader in ocean technology, defence, and clean energy with Volta innovation hub driving the ecosystem.", items: whyCity }}
      neighborhoods={{ title: "Atlantic Canada Areas We Serve", intro: "", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Halifax Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
