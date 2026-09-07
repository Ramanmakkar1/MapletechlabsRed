import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['30+', 'Prairie Projects'], ['98%', 'Client Satisfaction'], ['15+', 'Mining & Ag Solutions']]);
const numbers = pair([
                  ['30+', 'Projects in Saskatchewan'],
                  ['98%', 'Client Satisfaction Rate'],
                  ['15+', 'Mining & Ag Platforms'],
                  ['5+', 'Biotech Research Tools'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Field-ready mobile apps for mining operations, agricultural monitoring, and remote site management across Saskatchewan.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Enterprise web platforms for mining companies, agricultural cooperatives, and University of Saskatchewan research labs.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Precision agriculture AI, mineral exploration models, and biotech data analysis powered by machine learning.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Supply chain traceability for potash exports, grain trading platforms, and transparent resource royalty tracking.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Reliable cloud infrastructure for remote mining sites, real-time agricultural telemetry, and research computing.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Rugged, practical UI/UX for field operations, lab information systems, and agricultural decision-support tools.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Potash & Uranium Mining', desc: 'Saskatchewan produces over 30% of the world\'s potash and is a major uranium producer. We build mine management systems, safety compliance platforms, and production analytics tools for the province\'s mining giants.' },
                { title: 'Precision Agriculture', desc: 'From GPS-guided seeding to yield prediction models, we develop precision agriculture platforms that help Saskatchewan farmers maximize output and reduce waste across millions of acres of farmland.' },
                { title: 'Biotech & Life Sciences', desc: 'The University of Saskatchewan and Innovation Place drive world-class biotech research. We build laboratory information systems, clinical trial platforms, and research data management tools for the life sciences sector.' },
                { title: 'Remote & Rugged Operations', desc: 'Saskatchewan\'s resource operations span vast, remote territories. We build offline-first mobile apps, satellite-connected IoT systems, and rugged field tools that work reliably in extreme conditions.' },
              ];
const whyCity = [
                { t: 'Innovation Place', d: 'One of Canada\'s premier research parks, home to 130+ companies and 4,000+ workers driving tech innovation.' },
                { t: 'University of Saskatchewan', d: 'World-class AI, agriculture, and mining research programs produce top engineering talent every year.' },
                { t: 'Resource Tech Hub', d: 'Saskatchewan\'s mining and agriculture sectors create massive demand for IoT, analytics, and automation solutions.' },
                { t: 'Cost Advantage', d: '40-60% lower operating costs than Toronto or Vancouver with comparable talent quality and strong government incentives.' },
              ];
const neighborhoods = [
                { n: 'Downtown', d: 'Saskatoon\'s business core with growing startup activity and professional services.' },
                { n: 'Innovation Place', d: 'Canada\'s top research park — biotech, cleantech, and AI companies.' },
                { n: 'Stonebridge', d: 'Fast-growing commercial district with retail tech and service businesses.' },
                { n: 'University Area', d: 'Student startups and research spinoffs near the U of S campus.' },
                { n: 'Warman', d: 'Rapidly expanding satellite city with small business and agriculture tech.' },
                { n: 'Martensville', d: 'Growing community north of Saskatoon with emerging commercial services.' },
              ];
const wins = [
                { title: 'Mining Analytics Platform', metric: '35% cost reduction', desc: 'Built a real-time mining operations dashboard for a Saskatchewan potash producer, reducing equipment downtime and optimizing extraction workflows.' },
                { title: 'Agriculture IoT System', metric: '2x crop yield insights', desc: 'Developed a field sensor network and analytics platform for a large Saskatchewan grain farm, enabling precision agriculture and data-driven planting decisions.' },
                { title: 'Health Services App', metric: '50% faster booking', desc: 'Created a patient scheduling and telehealth platform for a Saskatoon medical clinic network, serving 15,000+ patients across rural Saskatchewan.' },
              ];
const trends = [
                { t: 'Mining & Resources', d: 'IoT sensors, predictive maintenance dashboards, and resource extraction analytics for Saskatchewan\'s mining sector.' },
                { t: 'Agriculture Tech', d: 'Precision farming platforms, crop monitoring systems, and supply chain tools for Canada\'s breadbasket.' },
                { t: 'Uranium & Energy Analytics', d: 'Data visualization and compliance platforms for Saskatchewan\'s uranium and energy producers.' },
                { t: 'Indigenous Community Platforms', d: 'Custom digital solutions for First Nations communities — governance portals, education platforms, and service delivery apps.' },
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
      slug="saskatoon"
      copy={{ badge: 'Software development in Saskatoon', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Saskatoon</span></>, desc: <>Saskatoon sits at the heart of Saskatchewan&apos;s resource economy — from the world&apos;s largest potash reserves to cutting-edge agricultural research at the University of Saskatchewan. We build custom software that digitizes mining, agriculture, and biotech operations across the Prairies.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Saskatoon & Saskatchewan by the Numbers", sub: "Digitizing the resource and agricultural sectors across the Prairies.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Saskatoon for Tech", intro: "Saskatoon is emerging as a tech hub fueled by world-class research institutions and resource-sector innovation.", items: whyCity }}
      neighborhoods={{ title: "Saskatoon Areas We Serve", intro: "We work with businesses across Saskatoon and surrounding Saskatchewan communities.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Saskatoon Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
