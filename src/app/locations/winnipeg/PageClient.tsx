import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([
                ['50+', 'Projects Delivered in Manitoba'],
                ['98%', 'Client Satisfaction Rate'],
                ['40+', 'Team Members Across Canada'],
                ['12', 'Locations Nationwide'],
              ]);
const services = [
  { title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android built for Winnipeg businesses.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Scalable web applications and platforms using modern frameworks like Next.js and React.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Intelligent automation, predictive analytics, and custom AI models for Manitoba enterprises.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Decentralized applications, smart contracts, and tokenization solutions.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Cloud migration, infrastructure automation, and CI/CD pipelines on AWS, Azure, and GCP.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'User-centered UI/UX design, prototyping, and design systems that convert.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Local Expertise', desc: 'We understand Manitoba\'s industries -- from agriculture and manufacturing to financial services and healthcare. Our solutions are built for the local market while scaling globally.' },
                { title: 'Virtual Team of World-Class Agents', desc: 'Access a curated network of senior engineers, designers, and AI specialists who work as an extension of your Winnipeg team, without the overhead of full-time hires.' },
                { title: '12 Locations Across Canada', desc: 'From coast to coast, Mapletech Labs operates in 12 Canadian cities. Winnipeg clients benefit from national resources with a local touch.' },
                { title: 'Proudly Canadian', desc: 'We are a Canadian company that keeps data, IP, and operations within Canada. Your project is protected by Canadian privacy laws and business standards.' },
              ];
const whyCity = [
                { t: 'North Forge Technology Exchange', d: 'Manitoba\'s premier tech incubator — supporting 100+ startups with mentorship, lab space, and investor connections.' },
                { t: 'University of Manitoba', d: 'Strong engineering and CS programs producing talent in AI, data science, and biomedical engineering.' },
                { t: 'Lowest Operating Costs', d: 'Winnipeg offers some of Canada\'s lowest commercial rents and energy costs — up to 60% cheaper than Toronto.' },
                { t: 'Agri-Tech Capital', d: 'Manitoba\'s $7B agriculture sector creates massive demand for precision farming, supply chain, and commodity trading platforms.' },
              ];
const neighborhoods = [
                { n: 'Exchange District', d: 'Creative and tech hub — heritage buildings housing startups and digital agencies.' },
                { n: 'Downtown', d: 'Financial services, insurance companies, and government tech offices.' },
                { n: 'South Winnipeg', d: 'Growing commercial corridor with retail tech and healthcare services.' },
                { n: 'St. Boniface', d: 'Bilingual business district with manufacturing and health tech.' },
                { n: 'Transcona', d: 'Rail and logistics hub embracing supply chain tech and automation.' },
                { n: 'Brandon', d: 'Manitoba\'s second city — agriculture tech and food processing.' },
              ];
const wins = [
                { title: 'Agriculture Analytics Platform', metric: '30% yield improvement', desc: 'Built a precision farming dashboard for a Manitoba grain operation, integrating satellite imagery, soil sensors, and weather data.' },
                { title: 'Manitoba Healthcare App', metric: '25K+ patients served', desc: 'Developed a bilingual patient portal for a Winnipeg health network with appointment booking, lab results, and secure messaging.' },
                { title: 'Winnipeg Logistics Tool', metric: '18% cost reduction', desc: 'Created a freight management and route optimization platform for a Manitoba logistics company serving the Prairie provinces.' },
              ];
const trends = [
                { t: 'Agri-Tech', d: 'Precision farming, grain trading tools, and agricultural supply chain analytics for Manitoba\'s farming sector.' },
                { t: 'Insurance Tech', d: 'Claims automation and underwriting platforms for Winnipeg\'s insurance companies (Great-West Life, Wawanesa).' },
                { t: 'Manufacturing Automation', d: 'Smart factory dashboards, quality control, and IoT for Manitoba\'s aerospace and bus manufacturing sector.' },
                { t: 'Indigenous Community Platforms', d: 'Custom digital solutions for First Nations — governance tools, education portals, and health service delivery apps.' },
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
      slug="winnipeg"
      copy={{ badge: 'Software development in Winnipeg', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Winnipeg.</span></>, desc: <>Mapletech Labs partners with Winnipeg businesses to build custom software, mobile apps, and AI-powered solutions. From the Exchange District to Portage Avenue, we help Manitoba companies compete with world-class technology.</> }}
      heroStats={heroStats}
      services={services}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Winnipeg for Tech", intro: "Winnipeg is Manitoba's innovation hub with North Forge Technology Exchange leading a growing agri-tech, insurance, and manufacturing ecosystem.", items: whyCity }}
      neighborhoods={{ title: "Winnipeg Areas We Serve", intro: "", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Winnipeg Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
