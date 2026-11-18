import Link from 'next/link';
import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
const heroStats = pair([['120+', 'Projects in Ontario'], ['97%', 'Client Retention'], ['50+', 'FinTech Solutions']]);
const numbers = pair([
                  ['120+', 'Projects Delivered in Ontario'],
                  ['97%', 'Client Retention Rate'],
                  ['50+', 'FinTech Solutions Built'],
                  ['3+', 'Years Serving Toronto'],
                ]);
const services = [
  { title: 'Mobile App Development in Toronto', desc: 'Native and cross-platform apps for iOS and Android, built to serve Toronto\'s diverse, mobile-first consumer base.', href: '/services/mobile-app-development/toronto' },
  { title: 'Web Development in Toronto', desc: 'Scalable web applications and enterprise portals for Bay Street financial institutions and fast-growing startups.', href: '/locations/web-development-company-in-toronto' },
  { title: 'AI Development in Toronto', desc: 'Predictive analytics, NLP, and intelligent automation for FinTech platforms and data-driven enterprises.', href: '/locations/ai-development-company-in-toronto' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, DeFi protocols, and tokenization platforms for Canada\'s financial capital.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps in Toronto', desc: 'AWS, Azure, and GCP architecture with CI/CD pipelines for high-availability financial systems.', href: '/locations/toronto/cloud-devops' },
  { title: 'UI/UX Design in Toronto', desc: 'UI/UX strategy and design systems for multicultural audiences across Canada\'s largest market.', href: '/locations/ui-ux-design-company-in-toronto' },
];

const whyChoose = [
                { title: 'FinTech & Bay Street Expertise', desc: 'We understand the compliance, security, and performance requirements of financial services. From banking APIs to payment gateways, we build software that meets the standards of Canada\'s financial hub.' },
                { title: 'Shopify Ecosystem Integration', desc: 'Toronto is home to Shopify and a thriving e-commerce ecosystem. We build custom apps, integrations, and headless commerce platforms that plug into the Shopify stack and beyond.' },
                { title: 'Multicultural Market Understanding', desc: 'Toronto is the most diverse city in North America. We design and build products with multilingual support, cultural sensitivity, and accessibility that resonates with global audiences.' },
                { title: 'MaRS & Startup Ecosystem', desc: 'We partner with startups in the MaRS Discovery District and across the city, providing CTO-level guidance, MVP development, and scalable architecture from day one.' },
              ];
const whyCity = [
                { t: 'MaRS Discovery District', d: 'One of the world\'s largest urban innovation hubs — 150+ startups, accelerators, and venture capital firms under one roof.' },
                { t: 'Vector Institute for AI', d: 'World-leading AI research institute founded by Geoffrey Hinton — Toronto trains more AI talent than any other Canadian city.' },
                { t: 'Bay Street FinTech', d: 'Canada\'s financial capital is undergoing a fintech revolution — from digital banking to RegTech and blockchain settlement.' },
                { t: '#4 Tech Hub in North America', d: 'Behind only San Francisco, New York, and Seattle — Toronto added more tech jobs than all three combined in recent years.' },
              ];
const neighborhoods = [
                { n: 'Financial District', d: 'Bay Street banks, insurance firms, and fintech startups driving digital transformation.' },
                { n: 'King West', d: 'Toronto\'s startup row — adtech, SaaS, and creative agencies in converted warehouses.' },
                { n: 'Liberty Village', d: 'Design studios, game developers, and digital media companies in this creative hub.' },
                { n: 'Yorkville', d: 'Luxury brands and professional services firms embracing digital-first experiences.' },
                { n: 'Scarborough', d: 'Diverse business community with manufacturing, logistics, and healthcare tech.' },
                { n: 'North York', d: 'Enterprise offices, tech parks, and growing SaaS companies along the Yonge corridor.' },
                { n: 'Mississauga', d: 'Canada\'s 6th largest city — pharma, logistics HQs, and enterprise tech.' },
                { n: 'Markham', d: 'Canada\'s high-tech capital with IBM, Huawei, and 400+ tech companies.' },
              ];
const wins = [
                { title: 'Bay Street FinTech Platform', metric: '$12M processed monthly', desc: 'Built a regulatory-compliant trading and portfolio management platform for a Toronto financial services firm, processing $12M in monthly transactions with real-time compliance checks.' },
                { title: 'Toronto Healthcare SaaS', metric: '200+ clinics onboarded', desc: 'Developed an all-in-one clinic management platform with EHR integration, telehealth, and patient scheduling — now serving 200+ clinics across the GTA.' },
                { title: 'GTA E-Commerce Expansion', metric: '340% revenue growth', desc: 'Scaled a Toronto-based DTC brand into the US market with a custom headless commerce platform, multi-currency support, and cross-border fulfillment integration.' },
              ];
const trends = [
                { t: 'FinTech Dominance', d: 'Toronto is Canada\'s fintech capital — digital banking, RegTech, InsurTech, and blockchain settlement are reshaping Bay Street.' },
                { t: 'AI & Machine Learning', d: 'With Vector Institute and dozens of AI startups, Toronto produces more AI research papers than any Canadian city.' },
                { t: 'Enterprise Digital Transformation', d: 'Canada\'s largest enterprises are headquartered here — driving massive demand for cloud migration, SaaS, and automation.' },
                { t: 'Web3 & Crypto', d: 'Toronto leads Canada\'s crypto ecosystem with exchanges, DeFi protocols, and blockchain infrastructure companies.' },
              ];
const torontoOverview = {
  title: 'What does a software development company in Toronto do?',
  lead: 'A software development company in Toronto designs, builds and maintains custom software for local businesses — the web platforms, mobile apps and AI systems that replace spreadsheets and legacy tools. Mapletech Labs does exactly that for Toronto startups, scale-ups and enterprises, with senior engineers, a fixed scope and a fixed price agreed before any code is written.',
  points: [
    { t: 'Plan and scope the product', d: 'We turn a business problem into a clear technical plan, user flows and a fixed-price proposal — including the Toronto-specific compliance, security and accessibility requirements your sector demands.' },
    { t: 'Design and build it', d: 'Senior engineers and designers build the web app, mobile app, AI feature or SaaS platform end to end, shipping working software in short iterations you can review.' },
    { t: 'Launch and support it', d: 'We handle cloud deployment, QA and handover, then stay on for support and improvements. You own all the code, infrastructure and IP from day one.' },
    { t: 'Work with Toronto teams', d: 'We work in your time zone and can meet in person across the GTA, from the Financial District and King West to North York, Markham and Mississauga.' },
  ],
  covers: ['Product strategy & UX', 'Web & mobile engineering', 'AI & automation', 'Cloud, DevOps & support'],
};

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

const localFaqs = [
  {
    q: 'What does a software development company in Toronto do?',
    a: 'A software development company in Toronto designs, builds and maintains custom software — web applications, mobile apps, AI features and SaaS platforms. Mapletech Labs scopes the work, agrees a fixed price, then designs, engineers, tests and launches the product, and supports it afterwards. You own all the code, infrastructure and IP.',
  },
  {
    q: 'How much does software development cost in Toronto?',
    a: 'In Canadian dollars, a typical Toronto website runs $10,000–$50,000, a web app $25,000–$100,000, a mobile app $30,000–$200,000, a SaaS MVP $30,000–$75,000 and an AI feature $10,000–$35,000. These are scope-dependent ballparks, not quotes; after discovery we agree a fixed price before any code is written. See our full CAD pricing and engagement models for details.',
  },
  {
    q: 'How long does a software project take in Toronto?',
    a: 'A website usually takes 4–10 weeks, a web app 8–16 weeks, a mobile app 10–24 weeks, a SaaS MVP 8–13 weeks and a first AI feature about 3 weeks. Timelines depend on scope and integrations, and you get a dated plan with the fixed-price proposal.',
  },
  {
    q: 'Why choose Mapletech Labs for software development in Toronto?',
    a: 'You work directly with senior engineers, not a sales layer in front of a junior team. Every project is fixed in scope and price up front, your data stays in Canada, and you keep all the code and IP. We have delivered 120+ projects in Ontario — including fintech and real-estate work — with a 97% client retention rate.',
  },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="toronto"
      overview={torontoOverview}
      copy={{ badge: 'Software development in Toronto', title: <>Software Development in <span style={{ color: 'var(--brand)' }}>Toronto</span></>, desc: <>A software development company in Toronto builds and maintains custom software — we build web platforms, mobile apps and AI systems for Toronto startups, scale-ups, and enterprises. Toronto is Canada&apos;s FinTech capital and largest tech hub; from the MaRS Discovery District to Bay Street, we serve North America&apos;s most multicultural market.</> }}
      heroStats={heroStats}
      services={services}
      numbers={{ title: "Toronto & Ontario by the Numbers", sub: "Driving digital transformation across Canada's largest tech market.", stats: numbers }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Toronto for Tech", intro: "Toronto is Canada's largest tech hub, ranked #4 in North America with 15,000+ tech companies and a $52B tech sector.", items: whyCity }}
      neighborhoods={{ title: "Toronto Neighborhoods We Serve", intro: "From the Financial District to the GTA suburbs, we build software for Toronto's diverse business landscape.", items: neighborhoods }}
      wins={wins}
      trends={{ title: "Toronto Tech Trends", items: trends }}
      serviceLinks={serviceLinks}
      localContent={
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container prose-body">
            <h2>How does our software development process work in Toronto?</h2>
            <p>Every engagement follows the same four stages: discovery and fixed-price scoping, design and build in short reviewable iterations, QA and launch, then ongoing support. You see working software early and often, rather than a single handover at the end. We can run the whole process remotely or meet your team in person anywhere in the GTA.</p>

            <h2>How much does software development cost in Toronto (CAD)?</h2>
            <p>We price in Canadian dollars and agree a fixed scope and fixed price before coding starts. As a guide, a website typically runs $10,000–$50,000, a web app $25,000–$100,000, a mobile app $30,000–$200,000, a SaaS MVP $30,000–$75,000 and an AI feature $10,000–$35,000. The exact number depends on complexity, integrations and compliance needs. See the <Link href="/pricing">full pricing and engagement models</Link>, or <Link href="/contact">contact us for a free fixed-price quote</Link>.</p>

            <h2>Which Toronto industries do we build software for?</h2>
            <p>Toronto&apos;s economy is concentrated in financial services, real estate, healthcare, e-commerce and SaaS, and that is where most of our Toronto work sits. Our <Link href="/case-studies/fintech-trading-platform">Toronto fintech trading platform case study</Link> covers a compliance-heavy financial build, and our <Link href="/case-studies/real-estate-portal">real-estate listing platform case study</Link> shows a property-tech project. For AI work, see <Link href="/services/ai-ml">AI and machine learning development</Link>; for consumer or field apps, <Link href="/services/mobile-app-development/toronto">mobile app development in Toronto</Link>; and for web platforms, <Link href="/services/web-development">web development services</Link>.</p>
            <p>Need cloud migration, CI/CD or Kubernetes in the GTA? See our page on <Link href="/locations/toronto/cloud-devops">cloud and DevOps in Toronto</Link>, or read our <Link href="/blog/software-development-companies-toronto">guide to Toronto software companies</Link> for costs and vetting questions. Planning a mobile app? Compare <Link href="/services/mobile-app-development/toronto">mobile app development in Toronto</Link>, or read our guide on <Link href="/blog/app-development-companies-toronto">choosing an app development company in Toronto</Link>.</p>

            <h2>Why choose Mapletech Labs in Toronto?</h2>
            <p>Toronto companies choose us for senior engineers, fixed pricing and full ownership of the code. We have delivered 120+ projects in Ontario with a 97% client retention rate, including 50+ fintech solutions, and we understand the compliance, security and performance standards of Bay Street. Every repository, cloud account and asset we create is yours, and your data stays in Canada. <Link href="/contact">Tell us about your project</Link> and a senior engineer will reply within one working day with a fixed-price plan.</p>
          </div>
        </section>
      }
      localFaqs={localFaqs}
    />
  );
}
