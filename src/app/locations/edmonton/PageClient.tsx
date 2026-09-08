import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({ value, label }));
// Honest hero figures: the company's own verifiable facts, not invented client metrics.
const heroStats = pair([['2018', 'Founded in Edmonton'], ['12', 'Canadian cities served'], ['1 day', 'To a senior-engineer reply']]);
const services = [
  { title: 'Mobile App Development', desc: 'Native iOS and Android and cross-platform apps built for performance and the app stores — from field-crew tools to consumer products your users keep on the home screen.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Fast, secure web platforms and enterprise portals engineered to scale — from marketing sites to the complex internal systems that replace spreadsheets and legacy tools.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'LLM integration, intelligent automation and predictive analytics built for production — wired into the systems your team already uses, where a model removes real work.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, DeFi protocols and decentralized apps engineered for security and audit — practical Web3 that solves a real problem rather than chasing a trend.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'AWS and Azure architecture, Kubernetes and CI/CD pipelines for zero-downtime releases — infrastructure that scales with demand and costs less to run.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'UX research, product strategy, prototyping and design systems that convert — interfaces your customers find obvious and your engineers can build on.', href: '/services/product-design' },
];

const whyChoose = [
                { title: 'Our Headquarters', desc: 'Edmonton is home to our founding team and core operations. When you work with Mapletech Labs in Edmonton, you work directly with our leadership and most experienced engineers.' },
                { title: 'Virtual Team of World-Class Agents', desc: 'Our distributed model gives you access to top-tier talent across Canada without geographic limitations. The best person for the job, every time.' },
                { title: '12 Locations Across Canada', desc: 'From Halifax to Victoria, our coast-to-coast presence means we understand Canadian markets and can support your growth nationally.' },
                { title: 'Canadian Company, Canadian Values', desc: 'We are proudly Canadian. Your data stays in Canada, your IP is protected by Canadian law, and we build with the reliability this country is known for.' },
              ];
const whyCity = [
                { t: 'AI & Machine Learning Hub', d: 'University of Alberta\'s Amii institute is a global leader in reinforcement learning — Edmonton trains more AI researchers per capita than almost any city worldwide.' },
                { t: 'ICE District Innovation', d: 'Edmonton\'s $2.5B ICE District is attracting tech companies, co-working spaces, and venture capital to the downtown core.' },
                { t: 'Energy Tech Transformation', d: 'Alberta\'s oil & gas sector is driving massive demand for data analytics, IoT, predictive maintenance, and clean energy tech.' },
                { t: 'Cost Advantage', d: 'No provincial sales tax, lower operating costs than Toronto or Vancouver, and generous R&D tax credits for tech companies.' },
              ];
const neighborhoods = [
                { n: 'Downtown / ICE District', d: 'Edmonton\'s innovation core — tech startups, co-working spaces, and the $2.5B ICE District.' },
                { n: 'Old Strathcona / Whyte Ave', d: 'Creative tech hub with indie studios, digital agencies, and startup incubators.' },
                { n: 'South Edmonton Common', d: 'Commercial district with retail tech, e-commerce fulfillment, and logistics companies.' },
                { n: 'West Edmonton', d: 'Growing tech corridor near West Edmonton Mall with mixed commercial and tech offices.' },
                { n: 'Sherwood Park', d: 'Strathcona County\'s tech centre — energy companies, engineering firms, and SaaS startups.' },
                { n: 'St. Albert', d: 'Fast-growing city north of Edmonton with healthcare, education, and professional services tech.' },
                { n: 'Spruce Grove', d: 'Western suburb with emerging small business tech and agriculture services.' },
                { n: 'Windermere / Heritage Valley', d: 'Southwest Edmonton\'s newest business park with healthcare and professional services.' },
              ];
// Honest commitments in place of invented client metrics — every figure here is true of how we work.
const commitments = [
                { title: 'Scope and price up front', metric: 'Fixed', desc: 'You approve a fixed scope and a fixed price before we write a line of code — no open-ended hourly billing and no surprises at the end.' },
                { title: 'A senior engineer replies', metric: '1 day', desc: 'Tell us about your Edmonton project and a senior engineer comes back within one working day with how we would approach it, what it takes and what it costs.' },
                { title: 'You own the code and IP', metric: '100%', desc: 'Every repository, cloud account and asset we set up is yours to keep. No lock-in, no hostage-taking — your software is your property.' },
              ];
const trends = [
                { t: 'AI & Machine Learning', d: 'Production ML pipelines, computer vision, and NLP solutions — leveraging Edmonton\'s Amii institute and U of A AI talent pipeline.' },
                { t: 'Energy & CleanTech', d: 'IoT dashboards, predictive maintenance, and emissions tracking platforms for Alberta\'s energy sector transformation.' },
                { t: 'Healthcare & BioTech', d: 'Patient portals, telehealth platforms, and clinical data systems for Alberta Health Services and private clinics.' },
                { t: 'E-Commerce & Retail', d: 'Headless commerce, subscription platforms, and omnichannel solutions for Edmonton\'s growing DTC and retail brands.' },
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
      slug="edmonton"
      copy={{ badge: 'Software development in Edmonton', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Edmonton</span></>, desc: <>Edmonton is where Mapletech Labs was founded, and it is still our headquarters. We are a custom software development company serving Alberta&apos;s energy sector, the University of Alberta&apos;s AI ecosystem and a fast-growing base of Edmonton startups.</> }}
      heroStats={heroStats}
      services={services}
      overview={{
        title: 'Your software and app development partner in Edmonton',
        lead: 'Mapletech Labs is a custom software development company based in Edmonton, building web platforms, mobile apps and AI systems for Alberta businesses. From our headquarters here we work with energy and clean-tech operators, University of Alberta and Amii-adjacent AI teams, healthcare providers, public-sector groups and a fast-growing base of local startups &mdash; the Edmonton organisations that need software built properly the first time.',
        points: [
          { t: 'Senior engineers, directly', d: 'You work with senior engineers from day one, never a sales layer in front of a junior team.' },
          { t: 'Fixed scope, fixed price', d: 'Every engagement is scoped and priced up front, so there are no open-ended hours or surprises.' },
          { t: 'Your data stays in Canada', d: 'Canadian data residency by default, with your IP protected under Canadian law.' },
          { t: 'You own everything we build', d: 'All the code, infrastructure and intellectual property we produce is yours to keep.' },
        ],
        covers: ['Product strategy & UX', 'Mobile & web engineering', 'Cloud & DevOps', 'Ongoing support'],
      }}
      whyChoose={whyChoose}
      whyCity={{ title: "Why Edmonton for Tech", intro: "Edmonton is Alberta's fastest-growing tech hub, home to the University of Alberta's world-leading Amii AI institute and the $2.5B ICE District downtown.", items: whyCity }}
      neighborhoods={{ title: "Edmonton Neighborhoods We Serve", intro: "From downtown startups to suburban enterprises, we build software across the Edmonton metro area.", items: neighborhoods }}
      winsTitle="What working with us looks like"
      wins={commitments}
      trends={{ title: "Edmonton Tech Focus", items: trends }}
      serviceLinks={serviceLinks}
    />
  );
}
