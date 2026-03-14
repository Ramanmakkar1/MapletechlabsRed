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
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(c => c.slug === slug);
}
