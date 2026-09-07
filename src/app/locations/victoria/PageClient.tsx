import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['25+', 'BC Gov Projects'], ['95%', 'Client Satisfaction'], ['10+', 'Clean Tech Builds']]);
const services = [
  { title: 'Mobile App Development', desc: 'Tourism apps, government field tools, and marine industry solutions for Vancouver Island and beyond.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'BC government portals, tourism booking platforms, and clean tech dashboards built to provincial standards.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Environmental monitoring AI, ocean data analytics, and intelligent automation for provincial services.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Carbon credit tracking, transparent procurement systems, and decentralized identity for government services.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'BC government cloud compliance, disaster recovery systems, and scalable infrastructure for tourism peaks.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Accessible, citizen-focused UI/UX for government services, tourism experiences, and environmental platforms.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'BC Provincial Government', desc: 'Victoria is the seat of the BC government, and we build digital services that meet provincial accessibility, security, and procurement standards. From citizen portals to internal workflow tools, we deliver compliant solutions.' },
                { title: 'Clean Tech & Sustainability', desc: 'Vancouver Island is a leader in clean energy and environmental innovation. We develop renewable energy monitoring platforms, carbon tracking systems, and environmental data analytics tools.' },
                { title: 'Tourism & Hospitality Tech', desc: 'Victoria welcomes millions of visitors annually. We build booking platforms, visitor management systems, and mobile experiences that help tourism operators deliver exceptional guest experiences at scale.' },
                { title: 'Marine & Ocean Technology', desc: 'With Ocean Networks Canada and a thriving marine sector, Victoria is at the forefront of ocean tech. We build sensor data platforms, vessel tracking systems, and marine research applications.' },
              ];
const whyCity = [
                { t: 'VIATEC Community', d: 'Victoria Innovation, Advanced Technology and Entrepreneurship Council supports 800+ tech companies with events, mentorship, and talent programs.' },
                { t: 'Clean Tech Leader', d: 'BC\'s clean energy mandate and Victoria\'s sustainability focus make it Canada\'s top city for green tech startups and clean energy platforms.' },
                { t: 'Highest Tech Density', d: 'Victoria has more tech workers per capita than any Canadian city — a concentrated talent pool ideal for specialized software projects.' },
                { t: 'Quality of Life Advantage', d: 'Canada\'s mildest climate and outdoor lifestyle attract top remote-first talent — Victoria\'s tech sector grows 10%+ annually.' },
              ];
const neighborhoods = [
                { n: 'Downtown Victoria', d: 'Government district with GovTech companies and startup co-working spaces.' },
                { n: 'James Bay', d: 'Provincial legislature area — government contractors and civic tech firms.' },
                { n: 'Langford', d: 'Fast-growing West Shore with tech parks and new commercial development.' },
                { n: 'Sidney', d: 'Marine science hub with ocean tech and aerospace companies.' },
                { n: 'Sooke', d: 'Emerging community with remote-first tech workers and clean energy.' },
                { n: 'Saanich', d: 'UVic campus area — research spinoffs and student startups.' },
                { n: 'Esquimalt', d: 'CFB Esquimalt — naval base driving defence tech and security software.' },
                { n: 'Nanaimo', d: 'Mid-Island hub with growing tech scene and Vancouver Island University talent.' },
              ];
const wins = [
                { title: 'Clean Tech Dashboard', metric: '60% emissions visibility', desc: 'Built a carbon tracking and ESG reporting platform for a Victoria clean tech company, providing real-time emissions visibility across 200+ corporate clients.' },
                { title: 'Island Tourism Platform', metric: '45K+ bookings/year', desc: 'Developed a booking and experience marketplace for Vancouver Island tourism operators, processing 45,000+ annual bookings with dynamic pricing.' },
                { title: 'BC Gov Digital Service', metric: '2M+ citizens served', desc: 'Created a citizen-facing digital service portal for a BC government department, replacing paper-based processes and serving 2M+ residents.' },
              ];
const trends = [
                { t: 'Clean Technology', d: 'Carbon tracking, ESG reporting, renewable energy dashboards, and sustainability platforms for BC\'s green economy.' },
                { t: 'Tourism Tech', d: 'Booking platforms, experience marketplaces, and visitor analytics for Vancouver Island\'s $2B+ tourism industry.' },
                { t: 'Government Digital Services', d: 'Citizen portals, internal workflow automation, and accessibility-compliant platforms for BC provincial and municipal governments.' },
                { t: 'Remote Work Tools', d: 'Collaboration platforms, project management tools, and async communication systems for Victoria\'s remote-first tech workforce.' },
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
      slug="victoria"
      copy={{ badge: 'Software development in Victoria', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Victoria</span></>, desc: <>Victoria is British Columbia&apos;s capital and a growing hub for clean technology, government digital services, and the marine industry. We build custom software that serves the provincial government, tourism operators, and Vancouver Island&apos;s innovative tech community.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Victoria & Vancouver Island by the Numbers", sub: "Serving BC's capital and Vancouver Island's growing tech community.", stats: pair([
                  ['25+', 'BC Government Projects'],
                  ['95%', 'Client Satisfaction Rate'],
                  ['10+', 'Clean Tech Platforms'],
                  ['3+', 'Years Serving Victoria'],
                ]) }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Victoria for Tech", intro: "Victoria is BC's second tech hub \u2014 a clean tech leader with the highest density of tech workers per capita in Canada and VIATEC driving the ecosystem.", items: whyCity }}
      neighborhoods={{ title: "Vancouver Island Areas We Serve", intro: "", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Victoria Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
