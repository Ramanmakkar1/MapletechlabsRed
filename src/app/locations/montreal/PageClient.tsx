import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['80+', 'Projects in Quebec'], ['40+', 'AI Solutions Built'], ['100%', 'Bilingual Delivery']]);
const numbers = pair([
                  ['80+', 'Projects Delivered in Quebec'],
                  ['40+', 'AI & ML Solutions Built'],
                  ['100%', 'Bilingual Delivery'],
                  ['15+', 'Gaming Studio Partnerships'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Bilingual mobile apps for Quebec consumers, gaming companions, and aerospace field tools.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Scalable web platforms for AI research labs, gaming studios, and aerospace manufacturers.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Deep learning, computer vision, and NLP solutions leveraging Montreal\'s world-leading AI research ecosystem.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'DeFi protocols, NFT marketplaces, and decentralized identity systems for Quebec\'s growing Web3 community.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'High-performance cloud infrastructure for AI training workloads, game servers, and simulation environments.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Bilingual UI/UX design for French and English audiences, gaming interfaces, and complex aerospace dashboards.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'AI & Deep Learning Leadership', desc: 'Montreal is home to MILA, the world\'s largest academic deep learning lab. We leverage this ecosystem to build production-grade AI systems including computer vision, NLP, and reinforcement learning solutions.' },
                { title: 'Gaming Industry Expertise', desc: 'With Ubisoft Montreal, Warner Bros. Games, and hundreds of indie studios, the city is a global gaming hub. We build game backends, matchmaking systems, analytics platforms, and live ops toolchains.' },
                { title: 'Aerospace & Simulation', desc: 'Bombardier and CAE call Montreal home. We develop simulation platforms, flight training software, predictive maintenance systems, and supply chain tools for the aerospace industry.' },
                { title: 'Fully Bilingual Delivery', desc: 'We deliver every project in both English and French. From bilingual user interfaces to French-language documentation and support, we meet Quebec\'s linguistic requirements with native fluency.' },
              ];
const whyCity = [
                { t: 'AI Capital of Canada', d: 'Home to Mila (Yoshua Bengio), IVADO, and Element AI — Montréal produces more AI research than any other Canadian city.' },
                { t: 'Game Dev Powerhouse', d: 'Ubisoft, EA, Warner Bros Games, and 200+ studios make Montréal the world\'s #3 game development hub.' },
                { t: 'Bilingual Market Advantage', d: 'Build products for both English and French Canadian markets — Montréal is the gateway to Quebec\'s 8.5M consumers.' },
                { t: 'VFX & Creative Tech', d: 'World-class VFX studios (Framestore, DNEG, Rodeo FX) and a $1.5B creative tech sector drive innovation in visual media.' },
              ];
const neighborhoods = [
                { n: 'Mile End', d: 'Montréal\'s startup row — AI labs, indie game studios, and creative tech companies.' },
                { n: 'Plateau Mont-Royal', d: 'Freelancers, agencies, and SaaS companies in Montréal\'s cultural heart.' },
                { n: 'Old Montréal', d: 'Fintech firms, enterprise offices, and tourism tech companies in the historic core.' },
                { n: 'Griffintown', d: 'Montréal\'s newest tech district — converted lofts housing AI and VR startups.' },
                { n: 'Laval', d: 'Growing suburban tech park with biotech, pharma, and logistics companies.' },
                { n: 'Longueuil', d: 'South Shore commercial hub with aerospace (Pratt & Whitney) and defence tech.' },
                { n: 'Saint-Laurent', d: 'Industrial zone transitioning to aerospace tech, IoT, and smart manufacturing.' },
                { n: 'Westmount', d: 'Professional services, wealth management tech, and boutique digital agencies.' },
              ];
const wins = [
                { title: 'Montréal AI Startup', metric: '10x model accuracy', desc: 'Built the production ML pipeline and web dashboard for a Mile End AI startup, enabling real-time anomaly detection for industrial IoT sensors across North America.' },
                { title: 'Quebec Healthcare Platform', metric: 'FR + EN bilingual', desc: 'Developed a fully bilingual (French/English) patient portal and telehealth platform for a Quebec healthcare network, meeting RAMQ compliance requirements.' },
                { title: 'Gaming Studio Analytics', metric: '2M+ DAU tracked', desc: 'Created a real-time analytics and player behavior platform for a Montréal game studio, tracking 2M+ daily active users across mobile and console titles.' },
              ];
const trends = [
                { t: 'AI & Deep Learning', d: 'Production ML pipelines, computer vision, NLP, and AI-powered SaaS — leveraging Montréal\'s world-leading AI research ecosystem.' },
                { t: 'Game Development', d: 'Mobile games, console titles, gamification platforms, and player analytics for Montréal\'s 200+ game studios.' },
                { t: 'VFX & Creative Tech', d: 'Real-time rendering tools, production pipelines, and asset management systems for Montréal\'s VFX and animation industry.' },
                { t: 'Bilingual SaaS', d: 'French-English SaaS platforms, bilingual customer portals, and Quebec market-ready applications with Bill 96 compliance.' },
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
      slug="montreal"
      copy={{ badge: 'Software development in Montreal', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Montreal</span></>, desc: <>Montreal is the AI capital of the world, home to MILA and pioneers like Yoshua Bengio. With Ubisoft, Bombardier, and CAE headquartered here, we build custom software at the intersection of artificial intelligence, gaming, and aerospace innovation.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Montreal & Quebec by the Numbers", sub: "Driving AI innovation and bilingual software development across Quebec.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Montr&eacute;al for Tech", intro: "Montr&eacute;al is the AI capital of Canada and a global game development hub, home to Mila, Ubisoft, and a thriving bilingual tech scene.", items: whyCity }}
      neighborhoods={{ title: "Montr&eacute;al Neighborhoods We Serve", intro: "From Mile End startups to Old Montr&eacute;al enterprises, we build software across the Greater Montr&eacute;al Area.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Montr&eacute;al Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
