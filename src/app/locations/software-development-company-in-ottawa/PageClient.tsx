import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['45+', 'Government Projects'], ['100%', 'Security Compliant'], ['10+', 'Federal Departments']]);
const numbers = pair([
                  ['45+', 'Government Projects Delivered'],
                  ['100%', 'Security Compliance Rate'],
                  ['10+', 'Federal Departments Served'],
                  ['Protected B', 'Cloud Certified'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'Secure mobile applications for government field workers, defence personnel, and public-facing citizen services.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'WCAG-compliant web portals, internal government systems, and bilingual public service platforms.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Document classification, fraud detection, and intelligent automation for federal departments and defence agencies.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Identity verification systems, secure voting platforms, and transparent procurement tracking for the public sector.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Protected B cloud environments, zero-trust architecture, and GC Cloud compliance on AWS and Azure.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Accessible, bilingual UI/UX design that meets Government of Canada standards and WCAG 2.1 AA requirements.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Government & Public Sector', desc: 'We understand the procurement process, security requirements, and accessibility standards that federal and provincial government projects demand. Our team has delivered solutions across multiple departments.' },
                { title: 'Cybersecurity First', desc: 'Ottawa\'s Kanata corridor is Canada\'s cybersecurity capital. We build with zero-trust architecture, end-to-end encryption, and compliance frameworks including ITSG-33 and Protected B cloud standards.' },
                { title: 'Telecom & 5G Infrastructure', desc: 'With Nokia, Ciena, and Ericsson in the region, Ottawa drives Canada\'s telecom innovation. We build network management tools, OSS/BSS platforms, and 5G-ready applications.' },
                { title: 'Defence & National Security', desc: 'We develop secure applications for defence contractors and agencies, with strict adherence to Canadian security protocols, data sovereignty requirements, and controlled goods regulations.' },
              ];
const whyCity = [
                { t: 'Kanata North Tech Park', d: 'Canada\'s largest tech park — 540+ companies, 35,000 workers, and anchors like Nokia, Ciena, and Mitel.' },
                { t: 'Government & Defence', d: 'Federal government contracts drive massive demand for secure platforms, compliance tools, and GovTech solutions.' },
                { t: 'Shopify Headquarters', d: 'Shopify\'s HQ anchors Ottawa\'s e-commerce ecosystem — plus hundreds of Shopify app developers and partners.' },
                { t: 'Cybersecurity Hub', d: 'Home to the Canadian Centre for Cyber Security — Ottawa leads the nation in security tech and defence innovation.' },
              ];
const neighborhoods = [
                { n: 'Kanata / Kanata North', d: 'Canada\'s largest tech park — telecom, cybersecurity, and SaaS companies.' },
                { n: 'Downtown / ByWard Market', d: 'Government offices, consulting firms, and GovTech startups.' },
                { n: 'Nepean', d: 'Mixed commercial district with defence contractors and IT services.' },
                { n: 'Barrhaven', d: 'Growing suburban tech community with remote-first companies.' },
                { n: 'Orléans', d: 'East-end commercial hub with bilingual business services.' },
                { n: 'Gatineau', d: 'Quebec side of the NCR — federal agencies and bilingual tech firms.' },
                { n: 'Gloucester', d: 'Emerging tech corridor with affordable office space and logistics.' },
                { n: 'Stittsville', d: 'West-end community with growing small business and startup activity.' },
              ];
const wins = [
                { title: 'GovTech Compliance Platform', metric: '12 federal departments', desc: 'Built a WCAG 2.1 and Official Languages Act-compliant digital platform for a federal agency, now used across 12 departments for citizen service delivery.' },
                { title: 'Defence Tech Contractor', metric: 'Secret-level clearance', desc: 'Developed a secure data analytics and reporting platform for an Ottawa defence contractor, meeting ITSG-33 and PBMM security requirements.' },
                { title: 'Kanata Telecom Startup', metric: '5G-ready in 6 months', desc: 'Built the network management dashboard for a Kanata North telecom startup, enabling 5G network monitoring and automated fault detection.' },
              ];
const trends = [
                { t: 'Cybersecurity', d: 'Threat detection, compliance automation, and security platforms for government and defence — Ottawa\'s #1 tech vertical.' },
                { t: 'GovTech', d: 'Citizen-facing portals, internal workflow automation, and bilingual digital services for federal and provincial agencies.' },
                { t: '5G & Telecom', d: 'Network management, IoT infrastructure, and telecom analytics for Kanata North\'s 100+ telecom companies.' },
                { t: 'Defence & Aerospace', d: 'Secure analytics, satellite data processing, and logistics platforms for Canada\'s defence and aerospace sector.' },
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
      slug="ottawa"
      copy={{ badge: 'Software development in Ottawa', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Ottawa</span></>, desc: <>Ottawa is Canada&apos;s capital and the epicentre of government technology, cybersecurity, and defence innovation. With Kanata&apos;s tech corridor and major telecom players like Nokia and Ciena, we build secure, compliant software for the public and private sectors.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Ottawa & the National Capital Region by the Numbers", sub: "Trusted by government and defence organizations across the capital.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Ottawa for Tech", intro: "Ottawa is Canada's government tech and cybersecurity capital, with Kanata North as the country's largest tech park.", items: whyCity }}
      neighborhoods={{ title: "Ottawa Areas We Serve", intro: "From Kanata's tech park to the ByWard Market, we serve businesses across the National Capital Region.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Ottawa Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
