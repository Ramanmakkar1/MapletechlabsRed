import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['60+', 'Projects in BC'], ['96%', 'Client Satisfaction'], ['30+', 'Gaming & VFX Builds']]);
const numbers = pair([
                  ['60+', 'Projects Delivered in BC'],
                  ['96%', 'Client Satisfaction Rate'],
                  ['30+', 'Gaming & VFX Solutions'],
                  ['15+', 'Clean Tech Platforms'],
                ]);
const services = [
  { title: 'Mobile App Development', desc: 'High-performance mobile apps for gaming studios, PropTech platforms, and Pacific Rim commerce.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Scalable web platforms for film production pipelines, clean tech dashboards, and real estate marketplaces.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Computer vision for VFX workflows, predictive models for clean energy, and NLP for multilingual markets.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Decentralized applications, NFT platforms, and tokenized asset systems for Vancouver\'s forward-thinking tech scene.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Cloud-native infrastructure and CI/CD pipelines built for gaming studios and media production at scale.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'UI/UX design for consumer apps, PropTech interfaces, and immersive gaming experiences.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Gaming & Interactive Media', desc: 'Vancouver is home to EA, Relic, and hundreds of indie studios. We build backend systems, real-time multiplayer infrastructure, and toolchains that power the gaming industry.' },
                { title: 'Film VFX & Production Tech', desc: 'With Hollywood North driving billions in production spend, we build asset management systems, render pipeline tools, and production dashboards for Vancouver\'s film and VFX studios.' },
                { title: 'Clean Tech & Sustainability', desc: 'BC leads Canada in clean energy innovation. We develop IoT platforms, energy monitoring dashboards, and carbon tracking systems for the province\'s thriving green tech sector.' },
                { title: 'PropTech & Pacific Rim Trade', desc: 'Vancouver\'s real estate market and Pacific Rim trade connections demand sophisticated platforms. We build PropTech solutions, logistics software, and cross-border commerce tools.' },
              ];
const whyCity = [
                { t: '#1 Tech Hub in Western Canada', d: 'Vancouver\'s tech sector employs 120,000+ people across 12,000+ companies — from startups to Amazon, Microsoft, and Apple offices.' },
                { t: 'VFX & Gaming Corridor', d: 'Home to Industrial Light & Magic, Sony Pictures Imageworks, EA Vancouver, and 200+ VFX/game studios — the world\'s #2 VFX hub.' },
                { t: 'Clean Tech Leader', d: 'BC\'s clean energy mandate drives demand for green tech, carbon tracking, and sustainability platforms — Vancouver leads Canada in clean tech investment.' },
                { t: 'Asia-Pacific Gateway', d: 'Vancouver\'s time zone and cultural connections make it the natural bridge to Asian markets — ideal for companies targeting APAC expansion.' },
              ];
const neighborhoods = [
                { n: 'Gastown', d: 'Vancouver\'s startup row — adtech, SaaS, and creative agencies in heritage buildings.' },
                { n: 'Yaletown', d: 'Tech companies, VCs, and Hootsuite\'s HQ in this waterfront tech corridor.' },
                { n: 'Mount Pleasant', d: 'Main Street tech hub with VFX studios, game devs, and Shopify\'s Vancouver office.' },
                { n: 'Burnaby', d: 'EA Vancouver, Ballard Power, and a growing SaaS cluster near Metrotown.' },
                { n: 'Surrey', d: 'BC\'s fastest-growing city with health tech, logistics, and the new SFU campus tech hub.' },
                { n: 'Richmond', d: 'Asia-Pacific business hub with fintech, e-commerce, and cross-border trade tech.' },
                { n: 'North Vancouver', d: 'Clean tech companies, outdoor industry startups, and marine technology firms.' },
                { n: 'Kitsilano', d: 'Lululemon\'s HQ neighbourhood — DTC brands, wellness tech, and lifestyle startups.' },
              ];
const wins = [
                { title: 'Vancouver SaaS Platform', metric: '$8M ARR', desc: 'Built and scaled a B2B SaaS platform for a Gastown startup from MVP to $8M ARR, handling 500K+ API calls daily with 99.99% uptime.' },
                { title: 'BC Healthcare App', metric: '100K+ patients', desc: 'Developed a patient-facing mobile app for a BC healthcare provider with appointment booking, prescription refills, and secure messaging — serving 100K+ patients.' },
                { title: 'West Coast E-Commerce', metric: '250% international growth', desc: 'Scaled a Vancouver DTC brand into Asian markets with a multi-currency headless commerce platform, localized for Japan, Korea, and China.' },
              ];
const trends = [
                { t: 'Game Dev & VFX', d: 'Game engines, real-time rendering pipelines, and production tools for Vancouver\'s 200+ VFX and game studios.' },
                { t: 'Clean Tech & Sustainability', d: 'Carbon tracking dashboards, ESG reporting platforms, and clean energy analytics for BC\'s green tech sector.' },
                { t: 'PropTech & Real Estate', d: 'Property marketplaces, virtual tour platforms, and tenant management systems for Vancouver\'s real estate market.' },
                { t: 'Asia-Pacific Expansion', d: 'Multi-language platforms, cross-border e-commerce, and APAC market-ready applications leveraging Vancouver\'s Pacific gateway position.' },
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
      slug="vancouver"
      copy={{ badge: 'Software development in Vancouver', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Vancouver</span></>, desc: <>Vancouver is a global powerhouse in gaming, film VFX, and clean technology. Home to EA, Relic Entertainment, and a booming PropTech scene, we build custom software for companies bridging Pacific Rim trade and West Coast innovation.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Vancouver & British Columbia by the Numbers", sub: "Building world-class software on Canada's Pacific gateway.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Vancouver for Tech", intro: "Vancouver is Western Canada's #1 tech hub \u2014 a global leader in VFX, gaming, and clean tech with proximity to Silicon Valley and Asian markets.", items: whyCity }}
      neighborhoods={{ title: "Vancouver Areas We Serve", intro: "From Gastown startups to Surrey tech parks, we build software across Metro Vancouver and the Fraser Valley.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Vancouver Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
