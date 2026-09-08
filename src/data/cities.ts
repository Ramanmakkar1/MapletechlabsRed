export interface CityData {
  slug: string;
  name: string;
  province: string;
  provinceAbbr: string;
  isHQ: boolean;
  localIndustries: string[];
  heroContext: string;
  whyCity: { icon: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
}

export const cities: CityData[] = [
  {
    slug: 'edmonton',
    name: 'Edmonton',
    province: 'Alberta',
    provinceAbbr: 'AB',
    isHQ: true,
    localIndustries: ['Oil & Gas', 'Agriculture Tech', 'Government', 'Healthcare', 'Clean Energy'],
    heroContext:
      'Edmonton is rapidly transforming into a technology hub, with the city\'s tech sector growing 30% year-over-year. From energy companies modernizing their operations to agri-tech startups disrupting traditional farming, Edmonton businesses are investing heavily in custom software to stay competitive. As a company headquartered right here in Edmonton, we understand the local market better than anyone.',
    whyCity: [
      {
        icon: '🏢',
        title: 'Headquartered in Edmonton',
        desc: 'Our head office is right here in Edmonton. Meet our team face-to-face, attend in-person sprint reviews, and work with engineers who understand Alberta\'s business landscape.',
      },
      {
        icon: '⚡',
        title: 'Energy Sector Expertise',
        desc: 'Alberta runs on energy. We\'ve built field operations apps, pipeline monitoring dashboards, and safety compliance platforms for Edmonton\'s oil, gas, and clean energy companies.',
      },
      {
        icon: '🌾',
        title: 'Agri-Tech & Innovation',
        desc: 'Edmonton\'s agriculture technology sector is booming. We build precision farming apps, supply chain platforms, and IoT-connected systems for Alberta\'s agricultural industry.',
      },
      {
        icon: '🏥',
        title: 'Healthcare & Government',
        desc: 'With the University of Alberta Hospital and major government offices, Edmonton needs HIPAA-compliant health apps and secure civic platforms. We deliver both.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '85+', label: 'Alberta Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'David Chen',
        company: 'PrairieFlow Energy',
        role: 'CTO',
        quote: 'Mapletech Labs built our field operations app in 10 weeks. Our crews went from paper-based inspections to real-time digital reporting. Efficiency up 40%.',
      },
      {
        name: 'Sarah Thompson',
        company: 'Alberta AgriTech Co.',
        role: 'Founder',
        quote: 'As a startup, we needed a team that moved fast without cutting corners. Mapletech delivered our MVP on time and on budget. The app now has 5,000 active farmers.',
      },
      {
        name: 'Michael Okafor',
        company: 'NorthStar Health',
        role: 'Product Lead',
        quote: 'Building a health app requires serious security expertise. Mapletech handled PIPEDA compliance, encryption, and audit trails flawlessly. Zero security incidents since launch.',
      },
    ],
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['FinTech', 'Banking', 'Media & Entertainment', 'Real Estate', 'Retail'],
    heroContext:
      'Toronto is Canada\'s largest tech hub, home to over 15,000 tech companies and a thriving startup ecosystem. From Bay Street fintech disruption to Shopify-scale e-commerce, Toronto businesses demand world-class software engineering. Our Toronto team delivers enterprise-grade solutions to companies across the GTA and beyond.',
    whyCity: [
      {
        icon: '🏦',
        title: 'FinTech Capital of Canada',
        desc: 'Toronto\'s Bay Street is the financial heart of Canada. We\'ve built trading platforms, payment processors, and banking apps that handle millions in daily transactions.',
      },
      {
        icon: '🚀',
        title: 'Startup Ecosystem',
        desc: 'MaRS Discovery District, DMZ, and Communitech alumni trust us. We help Toronto startups go from idea to funded MVP in 8-12 weeks.',
      },
      {
        icon: '🏙️',
        title: 'Enterprise & Scale',
        desc: 'From Rogers to TD Bank, Toronto\'s enterprise companies need partners who can handle scale. We build systems serving millions of users with 99.99% uptime.',
      },
      {
        icon: '🌍',
        title: 'Multicultural Market',
        desc: 'Toronto is the most multicultural city in the world. We build apps with multi-language support, cultural UX considerations, and global-ready architecture.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '120+', label: 'Ontario Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Jennifer Liu',
        company: 'PayNorth Financial',
        role: 'CEO',
        quote: 'We needed a payment app that met Canadian banking regulations. Mapletech built it in 12 weeks with PCI-DSS compliance baked in from day one.',
      },
      {
        name: 'Amir Patel',
        company: 'ShopLocal GTA',
        role: 'Founder',
        quote: 'Our marketplace app connects 2,000+ local Toronto businesses with customers. Mapletech handled everything from UX to backend scaling.',
      },
      {
        name: 'Rachel Kim',
        company: 'MedConnect Ontario',
        role: 'VP Product',
        quote: 'The telemedicine app Mapletech built for us now serves 50,000+ patients across Ontario. Rock-solid reliability and beautiful design.',
      },
    ],
  },
  {
    slug: 'vancouver',
    name: 'Vancouver',
    province: 'British Columbia',
    provinceAbbr: 'BC',
    isHQ: false,
    localIndustries: ['Film & VFX', 'Gaming', 'Clean Tech', 'Real Estate', 'Tourism'],
    heroContext:
      'Vancouver is a global leader in gaming, film VFX, and clean technology. The city\'s tech sector employs over 120,000 professionals and continues to attract top talent from around the world. Whether you\'re building the next indie game hit or a sustainability platform, our Vancouver team delivers cutting-edge solutions.',
    whyCity: [
      {
        icon: '🎮',
        title: 'Gaming & Entertainment Hub',
        desc: 'Home to EA, Relic, and hundreds of indie studios. We build gaming companion apps, streaming platforms, and interactive entertainment experiences.',
      },
      {
        icon: '🌲',
        title: 'Clean Tech Innovation',
        desc: 'Vancouver leads Canada in clean technology. We build carbon tracking apps, EV charging networks, and sustainability dashboards for BC\'s green economy.',
      },
      {
        icon: '🏠',
        title: 'PropTech & Real Estate',
        desc: 'Vancouver\'s real estate market demands digital transformation. We build property management apps, virtual tour platforms, and market analytics tools.',
      },
      {
        icon: '🎬',
        title: 'Film & VFX Industry',
        desc: 'Hollywood North needs production management tools, asset tracking systems, and crew scheduling apps. We build them with the reliability the industry demands.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '65+', label: 'BC Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Chris Wong',
        company: 'GreenPath Solutions',
        role: 'CTO',
        quote: 'Our carbon footprint tracking app needed to process real-time data from thousands of IoT sensors. Mapletech built it to handle 10x our projected load.',
      },
      {
        name: 'Laura Mitchell',
        company: 'Pacific Realty Tech',
        role: 'Founder',
        quote: 'The property management platform Mapletech built streamlined our operations across 200+ buildings in Metro Vancouver. Game-changer for our business.',
      },
      {
        name: 'Tyler Nguyen',
        company: 'Indie Game Collective',
        role: 'Studio Lead',
        quote: 'Mapletech helped us build a cross-platform companion app for our game. Downloads exceeded 100K in the first month. Incredible quality.',
      },
    ],
  },
  {
    slug: 'calgary',
    name: 'Calgary',
    province: 'Alberta',
    provinceAbbr: 'AB',
    isHQ: false,
    localIndustries: ['Energy', 'Finance', 'Transportation', 'Logistics', 'Agriculture'],
    heroContext:
      'Calgary is Canada\'s energy capital and a fast-growing technology center. With major companies like Enbridge, TC Energy, and Suncor driving digital transformation, Calgary businesses need robust, scalable software solutions. Our team serves Calgary from our Edmonton headquarters — just 3 hours away — with the same quality and speed.',
    whyCity: [
      {
        icon: '🛢️',
        title: 'Energy Capital of Canada',
        desc: 'Calgary\'s energy giants are going digital. We build asset management systems, safety compliance apps, and operational dashboards for the energy sector.',
      },
      {
        icon: '📊',
        title: 'Financial Services Hub',
        desc: 'Calgary\'s financial district demands secure, compliant software. We build trading platforms, wealth management apps, and fintech solutions.',
      },
      {
        icon: '🚛',
        title: 'Logistics & Transportation',
        desc: 'Calgary is a major logistics corridor. We build fleet management apps, route optimization tools, and supply chain platforms.',
      },
      {
        icon: '🤝',
        title: 'Close to Our HQ',
        desc: 'Just 3 hours from our Edmonton headquarters. We offer in-person meetings, on-site workshops, and same-timezone collaboration for all Calgary projects.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '85+', label: 'Alberta Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'James Reid',
        company: 'PrairieLink Logistics',
        role: 'Operations Director',
        quote: 'The fleet management app Mapletech built reduced our fuel costs by 22% and cut dispatch time in half. ROI within 4 months.',
      },
      {
        name: 'Priya Sharma',
        company: 'CalgaryFin Capital',
        role: 'CEO',
        quote: 'We needed a wealth management platform that met IIROC standards. Mapletech delivered on time with zero compliance issues.',
      },
      {
        name: 'Robert Blackwood',
        company: 'Foothills Energy',
        role: 'Digital Lead',
        quote: 'Mapletech modernized our field inspection process. 500+ inspectors now use the app daily across Alberta. Zero downtime in 18 months.',
      },
    ],
  },
  {
    slug: 'ottawa',
    name: 'Ottawa',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['Government', 'Cybersecurity', 'Telecom', 'Defence', 'SaaS'],
    heroContext:
      'Ottawa — Canada\'s capital — is home to the federal government, major telecom companies like Nokia and Ciena, and a thriving cybersecurity sector. Ottawa businesses need software that meets the highest security and compliance standards. We build government-grade applications with the reliability the capital demands.',
    whyCity: [
      {
        icon: '🏛️',
        title: 'Government & Public Sector',
        desc: 'Ottawa runs Canada. We build GC Cloud-compliant applications, citizen portals, and internal government systems that meet Treasury Board standards.',
      },
      {
        icon: '🔐',
        title: 'Cybersecurity Hub',
        desc: 'Kanata\'s tech corridor is a cybersecurity powerhouse. We build security-first applications with SOC2, FedRAMP, and Protected B compliance.',
      },
      {
        icon: '📡',
        title: 'Telecom & 5G',
        desc: 'Nokia, Ciena, and Ericsson call Ottawa home. We build telecom management platforms, network monitoring tools, and 5G-ready applications.',
      },
      {
        icon: '🛡️',
        title: 'Defence & Security',
        desc: 'Ottawa\'s defence sector needs mission-critical software. We deliver secure, reliable systems with the clearance-ready engineering standards required.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '120+', label: 'Ontario Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Catherine Tremblay',
        company: 'GovTech Solutions',
        role: 'Director',
        quote: 'Mapletech built a citizen services portal that handles 100K+ requests monthly. Fully accessible (WCAG 2.1 AA) and bilingual from day one.',
      },
      {
        name: 'Daniel Osei',
        company: 'SecureNet Ottawa',
        role: 'CTO',
        quote: 'Their security-first approach was exactly what we needed. The app passed penetration testing on the first attempt. Rare for a development shop.',
      },
      {
        name: 'Marie-Claire Dubois',
        company: 'Ottawa SaaS Inc.',
        role: 'Founder',
        quote: 'We went from idea to paying customers in 10 weeks. Mapletech\'s SaaS expertise saved us 6 months of development time.',
      },
    ],
  },
  {
    slug: 'montreal',
    name: 'Montreal',
    province: 'Quebec',
    provinceAbbr: 'QC',
    isHQ: false,
    localIndustries: ['AI & Deep Learning', 'Gaming', 'Aerospace', 'Biotech', 'Creative Industries'],
    heroContext:
      'Montreal is the AI capital of the world, home to Mila, Element AI, and hundreds of AI startups. The city\'s gaming industry (Ubisoft, Warner Bros.) and aerospace sector (Bombardier, CAE) drive massive demand for cutting-edge software. Our Montreal team builds intelligent, scalable applications for one of the world\'s most innovative cities.',
    whyCity: [
      {
        icon: '🧠',
        title: 'AI Capital of the World',
        desc: 'Montreal is home to MILA and the world\'s densest concentration of AI researchers. We build production-ready AI applications that leverage this ecosystem.',
      },
      {
        icon: '🎮',
        title: 'Gaming Industry Giant',
        desc: 'Ubisoft Montreal, WB Games — the city is a gaming powerhouse. We build companion apps, live services platforms, and gaming infrastructure.',
      },
      {
        icon: '✈️',
        title: 'Aerospace & Defence',
        desc: 'Bombardier, CAE, and Pratt & Whitney need precision software. We build simulation platforms, maintenance tracking systems, and flight operations tools.',
      },
      {
        icon: '🌐',
        title: 'Bilingual Excellence',
        desc: 'Montreal is bilingual by nature. Every app we build here ships with full English and French support, proper localization, and cultural UX considerations.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '45+', label: 'Quebec Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Jean-Philippe Lavoie',
        company: 'MontrealAI Labs',
        role: 'Co-Founder',
        quote: 'Mapletech turned our research prototype into a production ML platform serving 10,000+ API calls daily. They understand AI infrastructure deeply.',
      },
      {
        name: 'Sophie Martin',
        company: 'Aero Maintenance QC',
        role: 'Digital Director',
        quote: 'The maintenance tracking app handles 50+ aircraft with real-time status updates. Fully bilingual and compliant with Transport Canada regulations.',
      },
      {
        name: 'Alexandre Roy',
        company: 'Pixel Studios MTL',
        role: 'Studio Director',
        quote: 'Our game companion app hit 200K downloads in 3 months. Mapletech\'s understanding of the gaming community made all the difference.',
      },
    ],
  },
  {
    slug: 'winnipeg',
    name: 'Winnipeg',
    province: 'Manitoba',
    provinceAbbr: 'MB',
    isHQ: false,
    localIndustries: ['Agriculture', 'Manufacturing', 'Insurance', 'Transportation', 'Aerospace'],
    heroContext:
      'Winnipeg is Manitoba\'s economic engine, with strong sectors in agriculture, manufacturing, and transportation. The city\'s growing tech community and competitive business costs make it an ideal market for digital transformation. We help Winnipeg businesses build the software they need to compete nationally and globally.',
    whyCity: [
      {
        icon: '🌾',
        title: 'Agriculture & Food Processing',
        desc: 'Manitoba is Canada\'s breadbasket. We build precision agriculture apps, grain trading platforms, and food supply chain systems for Prairie businesses.',
      },
      {
        icon: '🏭',
        title: 'Manufacturing Innovation',
        desc: 'Winnipeg\'s manufacturing sector needs Industry 4.0 solutions. We build IoT monitoring, quality control apps, and production management platforms.',
      },
      {
        icon: '🛡️',
        title: 'Insurance & Financial Services',
        desc: 'Home to Great-West Lifeco and Wawanesa. We build insurance claims platforms, underwriting tools, and customer portals.',
      },
      {
        icon: '🚂',
        title: 'Transportation Gateway',
        desc: 'Winnipeg is Canada\'s rail hub. We build logistics management, fleet tracking, and warehouse automation systems.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '25+', label: 'Manitoba Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Brandon Fehr',
        company: 'Prairie Grain Co.',
        role: 'CEO',
        quote: 'The grain trading app Mapletech built handles $10M+ in monthly transactions. Reliable, fast, and our farmers love the simplicity.',
      },
      {
        name: 'Lisa Flett',
        company: 'WinnipegTech Solutions',
        role: 'Founder',
        quote: 'We needed a partner who could work virtually but still feel like a local team. Mapletech delivered on every promise.',
      },
      {
        name: 'Mark Henderson',
        company: 'ManitobaFirst Insurance',
        role: 'VP Digital',
        quote: 'Claims processing time dropped 60% after launching the app. Our agents and customers both love the new experience.',
      },
    ],
  },
  {
    slug: 'halifax',
    name: 'Halifax',
    province: 'Nova Scotia',
    provinceAbbr: 'NS',
    isHQ: false,
    localIndustries: ['Ocean Tech', 'Defence', 'Education', 'Healthcare', 'Tourism'],
    heroContext:
      'Halifax is Atlantic Canada\'s tech hub, with a booming ocean technology sector and major defence contracts. The city\'s universities (Dalhousie, SMU) produce top engineering talent, and its startup ecosystem is one of the fastest-growing in Canada. We help Halifax businesses build world-class software.',
    whyCity: [
      {
        icon: '🌊',
        title: 'Ocean Technology Leader',
        desc: 'Halifax leads global ocean tech innovation. We build maritime monitoring systems, aquaculture management apps, and marine data platforms.',
      },
      {
        icon: '🛡️',
        title: 'Defence & Shipbuilding',
        desc: 'Irving Shipbuilding and the Canadian Navy drive demand for secure, mission-critical software. We build defence-grade applications.',
      },
      {
        icon: '🎓',
        title: 'Education & Research',
        desc: 'Dalhousie and SMU need edtech platforms, research tools, and student engagement apps. We build them with accessibility-first design.',
      },
      {
        icon: '💊',
        title: 'Healthcare Innovation',
        desc: 'Atlantic Canada\'s healthcare system is going digital. We build telemedicine apps, patient portals, and clinical data systems.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '15+', label: 'Atlantic Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Emily MacDonald',
        company: 'OceanTrack Systems',
        role: 'CTO',
        quote: 'Our maritime monitoring app tracks 500+ vessels in real-time. Mapletech\'s backend architecture handles the data load flawlessly.',
      },
      {
        name: 'John Murphy',
        company: 'Halifax HealthTech',
        role: 'Founder',
        quote: 'The patient portal now serves 30,000+ Nova Scotians. Fully bilingual and PHIA-compliant. Mapletech understood our regulatory needs perfectly.',
      },
      {
        name: 'Dr. Anya Petrova',
        company: 'Dalhousie Research Lab',
        role: 'Lead Researcher',
        quote: 'The research data platform Mapletech built accelerated our analysis pipeline by 5x. Publication-ready visualizations out of the box.',
      },
    ],
  },
  {
    slug: 'victoria',
    name: 'Victoria',
    province: 'British Columbia',
    provinceAbbr: 'BC',
    isHQ: false,
    localIndustries: ['Government', 'Tourism', 'Clean Tech', 'Education', 'Marine'],
    heroContext:
      'Victoria — British Columbia\'s capital — blends government services with a vibrant tech startup scene. The city\'s quality of life attracts top talent, and its focus on sustainability drives clean tech innovation. We help Victoria businesses build elegant, efficient software solutions.',
    whyCity: [
      {
        icon: '🏛️',
        title: 'BC Government Hub',
        desc: 'Victoria is BC\'s seat of government. We build citizen service portals, internal workflow apps, and public data platforms.',
      },
      {
        icon: '🌿',
        title: 'Sustainability Focus',
        desc: 'Victoria leads in green initiatives. We build carbon tracking apps, electric vehicle platforms, and environmental monitoring systems.',
      },
      {
        icon: '🏖️',
        title: 'Tourism & Hospitality',
        desc: 'Victoria\'s tourism industry needs booking platforms, experience apps, and guest management systems. We build them beautifully.',
      },
      {
        icon: '⚓',
        title: 'Marine & Maritime',
        desc: 'Victoria\'s harbour and maritime industry need vessel tracking, port management, and marine logistics applications.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '65+', label: 'BC Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Sarah Lawson',
        company: 'BC Tourism Digital',
        role: 'Director',
        quote: 'The booking platform Mapletech built handles 50,000+ reservations annually. Beautiful UI and zero downtime during peak season.',
      },
      {
        name: 'Ian McLeod',
        company: 'VictoriaGreen Tech',
        role: 'CEO',
        quote: 'Our sustainability reporting app is now used by 100+ BC businesses. Mapletech made complex environmental data simple and actionable.',
      },
      {
        name: 'Kelly Huang',
        company: 'Island EdTech',
        role: 'Founder',
        quote: 'The learning platform serves students across Vancouver Island. Responsive, accessible, and loved by teachers and parents alike.',
      },
    ],
  },
  {
    slug: 'saskatoon',
    name: 'Saskatoon',
    province: 'Saskatchewan',
    provinceAbbr: 'SK',
    isHQ: false,
    localIndustries: ['Mining', 'Agriculture', 'Biotech', 'Energy', 'Education'],
    heroContext:
      'Saskatoon is Saskatchewan\'s innovation capital, home to the Canadian Light Source synchrotron and a thriving biotech sector. The city\'s mining and agriculture industries are driving major digital transformation initiatives. We help Saskatoon businesses build the software to compete in the modern economy.',
    whyCity: [
      {
        icon: '⛏️',
        title: 'Mining & Resources',
        desc: 'Saskatchewan\'s potash and uranium mines need digital operations. We build mine safety apps, resource tracking systems, and equipment monitoring platforms.',
      },
      {
        icon: '🌾',
        title: 'Prairie Agriculture',
        desc: 'Saskatchewan feeds the world. We build precision farming apps, crop monitoring systems, and grain logistics platforms for Prairie producers.',
      },
      {
        icon: '🔬',
        title: 'Biotech & Research',
        desc: 'Home to the Canadian Light Source and Innovation Place. We build research data platforms, lab management systems, and biotech applications.',
      },
      {
        icon: '🎓',
        title: 'University of Saskatchewan',
        desc: 'USask drives innovation. We build edtech platforms, research collaboration tools, and student engagement apps for Saskatchewan\'s institutions.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '15+', label: 'Saskatchewan Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Grant Wilson',
        company: 'PotashTech SK',
        role: 'Operations Manager',
        quote: 'The mine operations app replaced 3 legacy systems. Safety incident reporting is now real-time and our compliance scores improved 35%.',
      },
      {
        name: 'Dr. Meera Singh',
        company: 'SaskBio Research',
        role: 'Lead Scientist',
        quote: 'Mapletech built a lab information management system that integrates with our analytical instruments. Data integrity and traceability are now effortless.',
      },
      {
        name: 'Tyler Makokis',
        company: 'Prairie Ventures',
        role: 'CEO',
        quote: 'From concept to launch in 8 weeks. Mapletech helped us validate our idea with a beautiful MVP that attracted our first round of funding.',
      },
    ],
  },
  {
    slug: 'kitchener',
    name: 'Kitchener',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['SaaS', 'Insurance Tech', 'Automotive', 'Manufacturing', 'AI/ML'],
    heroContext:
      'Kitchener-Waterloo is Canada\'s Silicon Valley — home to the University of Waterloo, Communitech, and hundreds of tech startups. From Shopify to BlackBerry\'s legacy, KW produces world-class technology companies. We help Kitchener businesses build software that scales from startup to unicorn.',
    whyCity: [
      {
        icon: '🦄',
        title: 'Canada\'s Silicon Valley',
        desc: 'KW has produced more startups per capita than anywhere in Canada. We build MVPs that attract funding and scale to millions of users.',
      },
      {
        icon: '🎓',
        title: 'University of Waterloo Talent',
        desc: 'UWaterloo produces Canada\'s best engineers. We work alongside this talent pool to build cutting-edge software.',
      },
      {
        icon: '🏭',
        title: 'Manufacturing & Automotive',
        desc: 'KW\'s manufacturing roots meet Industry 4.0. We build factory automation apps, quality control systems, and supply chain platforms.',
      },
      {
        icon: '📊',
        title: 'InsurTech Hub',
        desc: 'Sun Life, Manulife, and dozens of insurtechs call KW home. We build claims processing apps, underwriting platforms, and customer portals.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '120+', label: 'Ontario Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Angela Wu',
        company: 'KW InsurTech',
        role: 'CEO',
        quote: 'Mapletech built our AI-powered claims assessment platform. Processing time dropped from 5 days to 4 hours. Our investors were thrilled.',
      },
      {
        name: 'Marcus Schmidt',
        company: 'UWaterloo Spinoff',
        role: 'Co-Founder',
        quote: 'As a UW spinoff, we had high standards. Mapletech exceeded them. Our SaaS platform now has 500+ enterprise customers.',
      },
      {
        name: 'Dave Fraser',
        company: 'Precision Manufacturing KW',
        role: 'Plant Manager',
        quote: 'The factory floor app reduced defects by 28%. Real-time quality monitoring across 3 production lines. Mapletech understood manufacturing.',
      },
    ],
  },
  {
    slug: 'london-on',
    name: 'London',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['Healthcare', 'Insurance', 'Education', 'Manufacturing', 'AgriFood'],
    heroContext:
      'London, Ontario is a healthcare and education powerhouse, anchored by Western University and London Health Sciences Centre. The city\'s growing tech sector and affordable business environment make it an emerging hotspot for digital innovation. We help London businesses build the software that drives growth.',
    whyCity: [
      {
        icon: '🏥',
        title: 'Healthcare & Life Sciences',
        desc: 'London Health Sciences Centre and Robarts Research Institute drive demand for health-tech. We build EMR integrations, clinical trial apps, and patient platforms.',
      },
      {
        icon: '🎓',
        title: 'Western University Ecosystem',
        desc: 'Western\'s Ivey Business School and engineering faculty fuel innovation. We build edtech platforms and research commercialization tools.',
      },
      {
        icon: '🛡️',
        title: 'Insurance & Financial',
        desc: 'London is Canada\'s insurance capital (Intact, Co-operators). We build policy management systems, claims apps, and customer self-service portals.',
      },
      {
        icon: '🌱',
        title: 'AgriFood & Innovation',
        desc: 'Southwestern Ontario\'s agricultural heartland needs digital tools. We build food traceability apps, farm management platforms, and distribution systems.',
      },
    ],
    stats: [
      { value: '300+', label: 'Apps Shipped' },
      { value: '4.9★', label: 'App Store Avg' },
      { value: '120+', label: 'Ontario Projects' },
      { value: '98%', label: 'Client Retention' },
    ],
    testimonials: [
      {
        name: 'Dr. Susan Chen',
        company: 'LHSC Digital Health',
        role: 'Digital Lead',
        quote: 'The patient intake app reduced wait times by 40%. Integrates seamlessly with our existing Epic EHR system. Mapletech\'s healthcare expertise shows.',
      },
      {
        name: 'Tom Richards',
        company: 'Ontario AgriTech',
        role: 'Founder',
        quote: 'Our farm-to-table traceability app now tracks produce across 200+ Ontario farms. Consumers love the transparency. Mapletech made it happen.',
      },
      {
        name: 'Patricia Moore',
        company: 'London Insurance Group',
        role: 'CIO',
        quote: 'Policy management went from paper-heavy to fully digital. Our brokers save 2 hours per day. The ROI was immediate.',
      },
    ],
  },
  {
    slug: 'mississauga',
    name: 'Mississauga',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['Corporate Head Offices', 'Pharmaceuticals & Life Sciences', 'Aerospace', 'Finance & Insurance', 'Logistics & Supply Chain'],
    heroContext: 'Mississauga hosts more corporate head offices than almost any Canadian city outside Toronto, with deep clusters in pharmaceuticals and life sciences, aerospace and logistics around Pearson, and finance and insurance.',
    whyCity: [
      { icon: '', title: 'Corporate HQ density', desc: 'A large base of national head offices means demand for enterprise platforms, internal tools and integrations that connect complex organisations.' },
      { icon: '', title: 'Pearson, aerospace and logistics', desc: 'Proximity to Canada’s busiest airport drives aerospace, supply-chain and logistics software — tracking, scheduling and operations systems built for scale.' },
      { icon: '', title: 'Pharma and life sciences', desc: 'A concentration of pharmaceutical and health-sciences companies needing compliant, well-engineered data and workflow systems.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['Advanced Manufacturing', 'Health Sciences', 'Education', 'Logistics & Port', 'Creative & Tech'],
    heroContext: 'Hamilton has moved from steel town to a diversified economy anchored by advanced manufacturing, a major health-sciences sector around McMaster University and its hospitals, and a fast-growing creative and tech scene.',
    whyCity: [
      { icon: '', title: 'Health sciences hub', desc: 'McMaster University and Hamilton’s hospital network drive demand for research, clinical and patient-facing software built to PHIPA and PIPEDA.' },
      { icon: '', title: 'Advanced manufacturing', desc: 'A modern manufacturing base needs IoT, monitoring and operations platforms — the systems that make a plant floor measurable and predictable.' },
      { icon: '', title: 'Affordable growth corridor', desc: 'Lower costs than downtown Toronto with a growing talent pool make Hamilton a practical base for startups and scale-ups.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'surrey',
    name: 'Surrey',
    province: 'British Columbia',
    provinceAbbr: 'BC',
    isHQ: false,
    localIndustries: ['Health Technology', 'Advanced Manufacturing', 'Education', 'Agriculture', 'Clean Technology'],
    heroContext: 'Surrey is one of the fastest-growing cities in Canada, with a health-technology cluster along Innovation Boulevard, Simon Fraser University’s Surrey campus, and strengths in advanced manufacturing, agriculture and clean tech.',
    whyCity: [
      { icon: '', title: 'Health-tech cluster', desc: 'Innovation Boulevard and Surrey’s hospitals anchor a genuine health-technology sector needing secure, compliant clinical and patient software.' },
      { icon: '', title: 'Fastest-growing in BC', desc: 'Rapid population and business growth create demand for platforms that scale — from municipal services to consumer apps.' },
      { icon: '', title: 'SFU Surrey talent', desc: 'A university campus focused on technology and engineering feeds a young, growing local talent pool.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'burnaby',
    name: 'Burnaby',
    province: 'British Columbia',
    provinceAbbr: 'BC',
    isHQ: false,
    localIndustries: ['Film & Visual Effects', 'Video Games', 'Telecommunications', 'Clean Technology', 'Education'],
    heroContext: 'Burnaby is a technology and media centre — home to Simon Fraser University, one of Canada’s largest video-game and visual-effects clusters, major telecommunications operations, and a growing clean-tech sector.',
    whyCity: [
      { icon: '', title: 'Games and VFX', desc: 'One of Canada’s densest games and visual-effects clusters means real demand for real-time, high-performance and pipeline tooling.' },
      { icon: '', title: 'Telecom and clean tech', desc: 'Major telecommunications and clean-technology operations need robust data platforms, dashboards and integrations.' },
      { icon: '', title: 'SFU research base', desc: 'Simon Fraser University drives research spin-offs and a steady pipeline of engineering talent.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'regina',
    name: 'Regina',
    province: 'Saskatchewan',
    provinceAbbr: 'SK',
    isHQ: false,
    localIndustries: ['Government & Crown Corporations', 'Agriculture & Agri-Tech', 'Energy & Potash', 'Insurance', 'Manufacturing'],
    heroContext: 'Regina is Saskatchewan’s capital, with an economy built on government and Crown corporations, a large agriculture and agri-tech sector, energy and potash, and insurance.',
    whyCity: [
      { icon: '', title: 'Government and Crown corps', desc: 'As the provincial capital, Regina needs accessible, secure citizen-facing services and internal systems built to public-sector standards.' },
      { icon: '', title: 'Agriculture and agri-tech', desc: 'Saskatchewan’s agricultural core drives demand for precision-farming, traceability and supply-chain platforms.' },
      { icon: '', title: 'Insurance and energy', desc: 'Established insurance and energy sectors need reliable, well-integrated data and workflow systems.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'quebec-city',
    name: 'Quebec City',
    province: 'Quebec',
    provinceAbbr: 'QC',
    isHQ: false,
    localIndustries: ['Government', 'Insurance & Finance', 'Video Games', 'Optics & Photonics', 'Tourism'],
    heroContext: 'Quebec City is the provincial capital, with a stable economy led by government and a strong insurance and finance sector, a well-known video-game cluster, and a world-recognised optics and photonics industry.',
    whyCity: [
      { icon: '', title: 'Government and insurance', desc: 'A capital-city base of public-sector and insurance organisations needs compliant, French-and-English software built to Quebec’s Law 25.' },
      { icon: '', title: 'Games and optics', desc: 'An established games cluster and a globally recognised optics-photonics sector drive demand for specialised, high-performance software.' },
      { icon: '', title: 'Bilingual delivery', desc: 'We build and ship in both French and English, with data residency and Law 25 compliance handled from the start.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'brampton',
    name: 'Brampton',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['Logistics & Distribution', 'Advanced Manufacturing', 'Food Processing', 'Healthcare', 'Life Sciences'],
    heroContext: 'Brampton is one of Canada’s largest and fastest-growing cities, with a huge logistics and distribution sector near Pearson, a strong advanced-manufacturing and food-processing base, and a growing health and life-sciences presence.',
    whyCity: [
      { icon: '', title: 'Logistics and distribution', desc: 'Proximity to Pearson and major highways makes Brampton a national distribution hub — fleet, warehouse and shipment-tracking software is in constant demand.' },
      { icon: '', title: 'Advanced manufacturing', desc: 'A large manufacturing and food-processing base needs IoT, quality and operations platforms built for the plant floor.' },
      { icon: '', title: 'Young, diverse workforce', desc: 'One of the youngest and most diverse populations in Canada — an advantage for products serving multilingual and global markets.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'markham',
    name: 'Markham',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['Technology & Software', 'Fintech', 'Life Sciences', 'Advanced Manufacturing', 'Corporate Head Offices'],
    heroContext: 'Markham is often called Canada’s high-tech capital, home to one of the country’s highest concentrations of technology companies, along with strong fintech, life-sciences and advanced-manufacturing sectors.',
    whyCity: [
      { icon: '', title: 'Canada’s high-tech capital', desc: 'One of the densest clusters of technology employers in Canada means a market that understands software and expects it done well.' },
      { icon: '', title: 'Fintech and enterprise', desc: 'A strong fintech and corporate base drives demand for secure platforms, integrations and data systems.' },
      { icon: '', title: 'Life sciences and manufacturing', desc: 'Established life-sciences and advanced-manufacturing sectors need compliant, well-engineered software.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    province: 'Ontario',
    provinceAbbr: 'ON',
    isHQ: false,
    localIndustries: ['Automotive', 'Advanced Manufacturing', 'Cross-Border Trade', 'Agriculture', 'Gaming & Tech'],
    heroContext: 'Windsor is the heart of Canada’s automotive industry, with a world-class advanced-manufacturing and tool-and-die base, a busy cross-border trade corridor with Detroit, and a growing tech and gaming scene.',
    whyCity: [
      { icon: '', title: 'Automotive and manufacturing', desc: 'A deep automotive and tool-and-die base needs industrial software — monitoring, automation and operations platforms built for precision manufacturing.' },
      { icon: '', title: 'Cross-border trade', desc: 'Canada’s busiest trade corridor drives demand for logistics, customs and supply-chain systems.' },
      { icon: '', title: 'Growing tech and gaming', desc: 'A rising tech and gaming scene, supported by the University of Windsor and St. Clair College, is diversifying the local economy.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'kelowna',
    name: 'Kelowna',
    province: 'British Columbia',
    provinceAbbr: 'BC',
    isHQ: false,
    localIndustries: ['Technology & Software', 'Aerospace', 'Agriculture & Wine', 'Tourism', 'Health'],
    heroContext: 'Kelowna anchors the Okanagan and has one of the fastest-growing technology sectors in British Columbia outside Vancouver, alongside aerospace, a well-known agriculture and wine industry, and tourism.',
    whyCity: [
      { icon: '', title: 'Okanagan tech hub', desc: 'A fast-growing technology cluster — startups and scale-ups drawn by lifestyle and lower costs — needs product engineering that keeps pace.' },
      { icon: '', title: 'Aerospace and agriculture', desc: 'Established aerospace and a major agriculture and wine sector drive demand for specialised operations and traceability software.' },
      { icon: '', title: 'Lifestyle talent draw', desc: 'The Okanagan attracts remote-first and relocating tech talent, deepening the local engineering pool.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'laval',
    name: 'Laval',
    province: 'Quebec',
    provinceAbbr: 'QC',
    isHQ: false,
    localIndustries: ['Biotech & Pharmaceuticals', 'Life Sciences', 'Manufacturing', 'Agri-Food', 'Retail'],
    heroContext: 'Laval is the second-largest city in Quebec, with a nationally significant biotechnology and pharmaceutical cluster around the Cité de la Biotech, plus manufacturing and agri-food.',
    whyCity: [
      { icon: '', title: 'Biotech and pharma', desc: 'The Cité de la Biotech anchors a serious life-sciences cluster needing compliant, well-engineered data and research software.' },
      { icon: '', title: 'Manufacturing and agri-food', desc: 'A strong manufacturing and agri-food base drives demand for operations, traceability and supply-chain platforms.' },
      { icon: '', title: 'Bilingual, Law 25 ready', desc: 'We build and ship in French and English, with Quebec’s Law 25 privacy requirements designed in from the start.' },
    ],
    stats: [],
    testimonials: [],
  },
  {
    slug: 'gatineau',
    name: 'Gatineau',
    province: 'Quebec',
    provinceAbbr: 'QC',
    isHQ: false,
    localIndustries: ['Federal Government', 'Public Administration', 'IT Services', 'Tourism', 'Manufacturing'],
    heroContext: 'Gatineau sits across the river from Ottawa and hosts a large share of the federal public service, making government and public administration the anchor of its bilingual economy, alongside IT services and tourism.',
    whyCity: [
      { icon: '', title: 'Federal government base', desc: 'A major federal-government presence needs secure, accessible, bilingual platforms built with Canadian data residency.' },
      { icon: '', title: 'Bilingual delivery', desc: 'We design, build and ship in both French and English — essential for the National Capital Region.' },
      { icon: '', title: 'Law 25 and PIPEDA', desc: 'Quebec’s Law 25 and federal privacy rules are designed into the work from the first decision, not bolted on.' },
    ],
    stats: [],
    testimonials: [],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(c => c.slug === slug);
}
