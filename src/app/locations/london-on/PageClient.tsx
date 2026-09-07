import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['35+', 'Healthcare Solutions'], ['97%', 'Client Satisfaction'], ['15+', 'Insurance Platforms']]);
const numbers = pair([
                  ['35+', 'Healthcare Solutions Built'],
                  ['97%', 'Client Satisfaction Rate'],
                  ['15+', 'Insurance Platforms'],
                  ['100%', 'PHIPA Compliant'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Patient-facing health apps, insurance mobile platforms, and AgriFood field tools for Southwestern Ontario.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Healthcare portals, insurance claims platforms, and research data systems for Western University and LHSC.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Medical imaging AI, clinical decision support, and predictive models for insurance risk and crop yield analysis.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Health record interoperability, insurance fraud prevention, and agricultural supply chain traceability systems.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'PHIPA-compliant cloud infrastructure, HIPAA-ready environments, and high-availability systems for healthcare.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Accessible healthcare UX, intuitive insurance interfaces, and data-rich AgriFood dashboards.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Healthcare & LHSC Ecosystem', desc: 'London Health Sciences Centre is one of Canada\'s largest research-intensive hospitals. We build EMR integrations, patient portals, clinical trial platforms, and medical imaging systems that meet PHIPA and health data standards.' },
                { title: 'Insurance Capital of Canada', desc: 'London is home to Canada Life, Intact Financial, and dozens of insurers. We develop policy administration systems, claims automation tools, underwriting platforms, and digital-first insurance experiences.' },
                { title: 'Western University & Research', desc: 'Western University drives cutting-edge research in health sciences, engineering, and business. We build research data platforms, lab management systems, and technology transfer tools for the academic community.' },
                { title: 'AgriFood & Rural Innovation', desc: 'Southwestern Ontario is Canada\'s agricultural heartland. We develop crop management platforms, food traceability systems, and IoT-powered farm monitoring tools that serve the region\'s AgriFood sector.' },
              ];
const whyCity = [
                { t: 'TechAlliance', d: 'London\'s innovation hub connects 500+ tech companies with mentorship, funding, and go-to-market support.' },
                { t: 'Western University Pipeline', d: 'Ivey Business School and Western Engineering produce top talent in AI, business analytics, and biomedical engineering.' },
                { t: 'Healthcare Innovation Corridor', d: 'London Health Sciences Centre and Lawson Research Institute drive demand for health tech, clinical trials, and patient platforms.' },
                { t: 'Affordable Growth', d: '50% lower office costs than Toronto with direct highway access to the GTA — ideal for scaling tech companies.' },
              ];
const neighborhoods = [
                { n: 'Downtown London', d: 'Revitalized core with co-working spaces, fintech startups, and TechAlliance headquarters.' },
                { n: 'Old East Village', d: 'Creative district attracting digital agencies, design studios, and indie tech companies.' },
                { n: 'Byron', d: 'Residential-commercial mix with growing small business and professional services.' },
                { n: 'Westmount', d: 'Commercial corridor with retail tech and service-based businesses.' },
                { n: 'St. Thomas', d: 'Manufacturing town pivoting to EV battery tech and advanced manufacturing.' },
                { n: 'Woodstock', d: 'Toyota manufacturing hub embracing Industry 4.0 and smart factory solutions.' },
                { n: 'Stratford', d: 'University of Waterloo digital media campus and cultural tech innovation.' },
                { n: 'Ingersoll', d: 'Growing commercial centre with CAMI assembly and automotive supply chain tech.' },
              ];
const wins = [
                { title: 'Healthcare Platform', metric: '200+ clinics served', desc: 'Built a patient management and telehealth platform for a London medical network, connecting 200+ clinics across Southwestern Ontario with secure video visits and EHR integration.' },
                { title: 'SW Ontario FinTech', metric: '3x transaction volume', desc: 'Developed a payment processing and invoicing platform for a London-based financial services firm, tripling transaction volume within the first year.' },
                { title: 'Western University Research Tool', metric: '40% faster analysis', desc: 'Created a data visualization and analysis platform for a Western University research lab, accelerating clinical trial data processing by 40%.' },
              ];
const trends = [
                { t: 'Health Tech', d: 'Patient portals, telehealth platforms, and clinical trial tools for London Health Sciences Centre and regional healthcare networks.' },
                { t: 'Insurance Tech', d: 'Claims automation, underwriting platforms, and customer portals for Southwestern Ontario\'s insurance sector.' },
                { t: 'Digital Agriculture', d: 'Precision farming tools, supply chain platforms, and agricultural marketplace apps for Ontario\'s farming communities.' },
                { t: 'Manufacturing Automation', d: 'Industry 4.0 dashboards, IoT integration, and quality control systems for London\'s automotive and manufacturing corridor.' },
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
      slug="london-on"
      copy={{ badge: 'Software development in London On', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>London, Ontario</span></>, desc: <>London, Ontario is a healthcare and insurance powerhouse — home to London Health Sciences Centre, Western University, and Canada&apos;s second-largest concentration of insurance companies. We build custom software that transforms patient care, streamlines underwriting, and powers AgriFood innovation across Southwestern Ontario.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "London & Southwestern Ontario by the Numbers", sub: "Building software that transforms healthcare and insurance in Ontario's heartland.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why London, Ontario for Tech", intro: "London is Southwestern Ontario's fastest-growing tech hub, anchored by healthcare innovation and a strong university pipeline.", items: whyCity }}
      neighborhoods={{ title: "London Areas We Serve", intro: "We serve businesses across London and Southwestern Ontario's growing tech corridor.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "London Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
