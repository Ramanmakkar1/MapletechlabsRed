/**
 * Province-level location pages.
 *
 * The site jumped from "Canada" straight to twelve cities, skipping the level
 * a lot of buyers actually search: "software development company Alberta",
 * "custom software Ontario". These pages fill that gap and give the location
 * tree a real hub → province → city hierarchy.
 *
 * Every province here has at least one city we run engagements from, so none
 * of these is a thin "we serve you remotely" placeholder. The economic and
 * regulatory context is real: the provincial privacy statute that governs
 * private-sector data, the innovation and digital-media tax programmes that
 * fund the work, and the industries that actually drive each province's
 * economy. Tax programmes are named, not quoted at specific rates, because
 * rates and thresholds change and a wrong number is worse than none.
 */

export interface ProvinceCity {
  name: string;
  slug: string;
  role: string; // one line on what that city is known for
}

export interface ProvinceData {
  slug: string;
  name: string;
  abbr: string;
  /** Meta + hero */
  metaTitle: string;
  metaDescription: string;
  heroSummary: string;
  /** Two to three paragraphs on the province's economy and why software matters here */
  economy: string[];
  cities: ProvinceCity[];
  /** Industry groups that genuinely drive the province */
  industries: { title: string; desc: string }[];
  /** Real regulatory footing */
  privacy: { law: string; body: string };
  incentives: { programme: string; body: string }[];
  /** Why choose Mapletech here — provincial, not generic */
  whyHere: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const provinces: ProvinceData[] = [
  {
    slug: 'alberta',
    name: 'Alberta',
    abbr: 'AB',
    metaTitle: 'Software Development Company in Alberta',
    metaDescription:
      'Custom software, web and mobile app development across Alberta. Mapletech Labs is headquartered in Edmonton, serving Calgary and the wider province.',
    heroSummary:
      'We are an Alberta software company, headquartered in Edmonton and delivering across Calgary and the province. Custom software, web platforms, mobile apps and AI, built for the industries Alberta runs on.',
    economy: [
      'Alberta’s economy is built on energy, agriculture and a fast-diversifying technology sector, and every one of them is digitising at once. Oil, gas and clean-energy operators are replacing paper field inspections with mobile apps, connecting pipeline and site sensors to real-time dashboards, and moving safety-compliance records off spreadsheets. Agri-tech companies are building precision-farming platforms and supply-chain tools that Alberta’s farms and food processors depend on.',
      'That mix is exactly where custom software pays for itself: the off-the-shelf products built for other markets rarely fit how an Alberta energy or agriculture operation actually works. As a company headquartered in Edmonton, with delivery across Calgary’s finance and logistics sector, we build the systems that do fit — and we can meet you in person to do it.',
    ],
    cities: [
      { name: 'Edmonton', slug: 'edmonton', role: 'Our head office — energy, agri-tech, government and health software' },
      { name: 'Calgary', slug: 'calgary', role: 'Energy, finance, transportation and logistics platforms' },
    ],
    industries: [
      { title: 'Energy & clean tech', desc: 'Field operations apps, pipeline and site monitoring, safety-compliance platforms and emissions reporting for oil, gas and renewables.' },
      { title: 'Agriculture technology', desc: 'Precision-farming apps, IoT-connected equipment, and supply-chain platforms for Alberta’s farms, processors and agri-food exporters.' },
      { title: 'Logistics & transportation', desc: 'Fleet tracking, dispatch and route-optimisation systems built for the distances Alberta operations actually cover.' },
      { title: 'Finance & professional services', desc: 'Secure client platforms, reporting tools and workflow automation for Calgary’s finance and services firms.' },
      { title: 'Healthcare & public sector', desc: 'PIPEDA-compliant patient and civic platforms for Alberta health providers and government offices.' },
      { title: 'Startups & SaaS', desc: 'Fixed-price MVPs and multi-tenant SaaS products for Alberta founders taking a product to market.' },
    ],
    privacy: {
      law: 'Alberta PIPA',
      body: 'Private-sector data in Alberta is governed by the province’s own Personal Information Protection Act (PIPA), not only federal law. We design for PIPA consent, access and breach-notification obligations from the first architecture decision, and keep data on Canadian infrastructure where residency matters.',
    },
    incentives: [
      { programme: 'Federal SR&ED', body: 'The Scientific Research & Experimental Development programme funds a large share of genuine software R&D across Canada. We build with clean commit history and technical documentation so an SR&ED claim on the work is straightforward to support.' },
      { programme: 'Alberta Innovation Employment Grant', body: 'Alberta’s IEG rewards small and medium companies for R&D spending in the province. We structure engagements so the eligible development work is easy to identify.' },
    ],
    whyHere: [
      { title: 'Headquartered in Edmonton', desc: 'Not a remote vendor with an Alberta phone number — our head office is here. In-person sprint reviews and a team that knows the provincial market.' },
      { title: 'Energy-sector fluency', desc: 'We have shipped field, pipeline and compliance software for Alberta energy operators, so we start knowing the domain rather than learning on your budget.' },
      { title: 'Alberta data residency', desc: 'Built for PIPA and kept on Canadian infrastructure, with the audit trail your compliance team expects.' },
    ],
    faqs: [
      { q: 'Do you have an office in Alberta?', a: 'Yes. Mapletech Labs is headquartered in Edmonton, and we deliver across Calgary and the province. You can meet the team in person and attend sprint reviews on site.' },
      { q: 'Which Alberta industries do you build software for?', a: 'Most of our Alberta work is in energy and clean tech, agriculture technology, logistics, finance and healthcare — the sectors that drive the provincial economy. We build custom software, mobile apps, web platforms and AI systems for each.' },
      { q: 'Does Alberta have its own privacy law for software?', a: 'Yes. Alberta’s Personal Information Protection Act (PIPA) governs private-sector personal data in the province, alongside federal PIPEDA. We design consent, access and breach-notification handling to meet it from day one.' },
      { q: 'Can development work in Alberta qualify for tax credits?', a: 'Genuine software R&D can be eligible for the federal SR&ED programme and Alberta’s Innovation Employment Grant. We keep the technical documentation and history that make a claim straightforward, though your accountant should confirm current eligibility.' },
    ],
  },

  {
    slug: 'ontario',
    name: 'Ontario',
    abbr: 'ON',
    metaTitle: 'Software Development Company in Ontario',
    metaDescription:
      'Custom software, web and mobile development across Ontario — Toronto, Ottawa, Kitchener-Waterloo and London. Fintech, government, SaaS and healthcare.',
    heroSummary:
      'We build software for companies across Ontario, from Toronto’s financial sector to Ottawa’s government and security firms, the Kitchener-Waterloo SaaS corridor and London’s health and insurance sector.',
    economy: [
      'Ontario is Canada’s largest technology market, and it is really four markets in one. Toronto is the financial capital — Bay Street banks, fintech challengers and the insurers behind them all need secure, compliant, high-throughput platforms. Ottawa runs on the federal government and the cybersecurity, telecom and defence firms that serve it, where security clearance and Canadian data residency are non-negotiable.',
      'The Kitchener-Waterloo corridor is one of the densest software clusters on the continent, fed by the University of Waterloo and a deep bench of SaaS and insurtech companies. London anchors the province’s southwest with healthcare, insurance and agri-food. Each of those markets buys custom software for a different reason, and we build for all four.',
    ],
    cities: [
      { name: 'Toronto', slug: 'toronto', role: 'Fintech, banking, media and enterprise platforms' },
      { name: 'Ottawa', slug: 'ottawa', role: 'Government, cybersecurity, telecom and SaaS' },
      { name: 'Kitchener-Waterloo', slug: 'kitchener', role: 'SaaS, insurtech and AI/ML product engineering' },
      { name: 'London', slug: 'london-on', role: 'Healthcare, insurance, education and agri-food' },
      { name: 'Mississauga', slug: 'mississauga', role: 'Corporate head offices, pharma, aerospace and logistics' },
      { name: 'Hamilton', slug: 'hamilton', role: 'Advanced manufacturing, health sciences and logistics' },
    ],
    industries: [
      { title: 'Fintech & banking', desc: 'Payment platforms, trading systems and compliance tooling built for OSFI and PCI DSS — the core of Toronto’s financial sector.' },
      { title: 'Government & cybersecurity', desc: 'Secure civic platforms and security tooling for Ottawa’s public sector and the firms that serve it, with Canadian data residency built in.' },
      { title: 'SaaS & insurtech', desc: 'Multi-tenant SaaS products, billing and analytics for the Kitchener-Waterloo corridor and beyond.' },
      { title: 'Healthcare', desc: 'PHIPA- and PIPEDA-compliant patient platforms, telehealth and clinical tools for Ontario health providers.' },
      { title: 'Insurance', desc: 'Quoting, claims and policy-administration systems for London and GTA insurers.' },
      { title: 'Retail & enterprise', desc: 'Commerce platforms, ERP integration and workflow automation for Ontario retailers and enterprises.' },
    ],
    privacy: {
      law: 'PIPEDA & PHIPA',
      body: 'Ontario’s private sector is governed by the federal PIPEDA, and health information by Ontario’s Personal Health Information Protection Act (PHIPA). We design consent, access and audit handling to meet both, and keep regulated data on Canadian infrastructure.',
    },
    incentives: [
      { programme: 'Federal SR&ED', body: 'The federal Scientific Research & Experimental Development credit funds a large share of eligible software R&D. We keep the technical history and documentation that make a claim defensible.' },
      { programme: 'Ontario Interactive Digital Media Tax Credit', body: 'The OIDMTC supports eligible interactive digital media products developed in Ontario. Where your product qualifies, we structure the work so the eligible portion is easy to evidence.' },
    ],
    whyHere: [
      { title: 'Built for Ontario’s regulators', desc: 'Fintech to OSFI and PCI DSS, health to PHIPA, government to Canadian residency — compliance is a design input, not an afterthought.' },
      { title: 'Four markets, one team', desc: 'We understand that Toronto finance, Ottawa government and Waterloo SaaS buy for different reasons, and we build accordingly.' },
      { title: 'Senior engineers only', desc: 'Every Ontario engagement is staffed by engineers with years of production experience — no juniors learning on your budget.' },
    ],
    faqs: [
      { q: 'Which Ontario cities do you work in?', a: 'We deliver across Ontario, with dedicated pages for Toronto, Ottawa, Kitchener-Waterloo and London. Our distributed team model means local delivery backed by a national engineering bench.' },
      { q: 'Do you build compliant fintech software for Toronto firms?', a: 'Yes. We build payment platforms, trading systems and compliance tooling to OSFI and PCI DSS standards, which is core to our Toronto financial-sector work.' },
      { q: 'Can you meet Canadian data-residency requirements for Ottawa government work?', a: 'Yes. We architect for Canadian data residency and the security posture public-sector and defence-adjacent work requires, and design to PIPEDA from the first decision.' },
      { q: 'Do you work with Kitchener-Waterloo SaaS startups?', a: 'Regularly. We run fixed-price MVP programmes and build multi-tenant SaaS products with billing, analytics and the operational tooling to run them.' },
    ],
  },

  {
    slug: 'british-columbia',
    name: 'British Columbia',
    abbr: 'BC',
    metaTitle: 'Software Development in British Columbia',
    metaDescription:
      'Custom software, web and mobile development across British Columbia — Vancouver and Victoria. Gaming, film tech, clean tech, marine and government.',
    heroSummary:
      'We build software for companies across British Columbia, from Vancouver’s film, gaming and clean-tech sector to Victoria’s government, marine and education technology.',
    economy: [
      'British Columbia has one of Canada’s most distinctive technology economies. Vancouver is a global centre for film, VFX and video games, and the studios and tools companies around them push some of the most demanding real-time and media software anywhere. Alongside them sits a serious clean-tech sector and a real-estate technology market that reflects one of the country’s most active property markets.',
      'Victoria, the provincial capital, pairs government technology with a growing marine and ocean-tech cluster and a strong education-technology base. Both cities buy custom software because their industries — media pipelines, clean-energy systems, ocean sensing, civic platforms — are too specific for off-the-shelf tools. British Columbia also has its own private-sector privacy law, which shapes how any of it gets built.',
    ],
    cities: [
      { name: 'Vancouver', slug: 'vancouver', role: 'Film & VFX, gaming, clean tech and real-estate technology' },
      { name: 'Victoria', slug: 'victoria', role: 'Government, marine and ocean tech, education and clean tech' },
      { name: 'Surrey', slug: 'surrey', role: 'Health tech, manufacturing, education and agriculture' },
      { name: 'Burnaby', slug: 'burnaby', role: 'Games, VFX, telecom and clean tech' },
    ],
    industries: [
      { title: 'Gaming & media technology', desc: 'Real-time tools, media pipelines and platforms for Vancouver’s game studios, VFX houses and the tools companies around them.' },
      { title: 'Clean technology', desc: 'Monitoring, analytics and control platforms for BC’s clean-energy and environmental-technology companies.' },
      { title: 'Marine & ocean tech', desc: 'Sensing, data and operations software for Victoria’s marine and ocean-technology sector.' },
      { title: 'Government & public sector', desc: 'Secure civic platforms for Victoria’s provincial government offices, designed for BC PIPA.' },
      { title: 'Real estate technology', desc: 'Listing, transaction and analytics platforms for one of Canada’s most active property markets.' },
      { title: 'Education technology', desc: 'Learning platforms and assessment tools for BC’s education-technology companies and institutions.' },
    ],
    privacy: {
      law: 'BC PIPA',
      body: 'British Columbia has its own Personal Information Protection Act (PIPA) governing private-sector personal data, separate from federal law. We build to its consent, access and residency expectations from the start, and keep data on Canadian infrastructure.',
    },
    incentives: [
      { programme: 'Federal SR&ED', body: 'The federal SR&ED credit funds eligible software R&D. We keep the commit history and technical documentation that make a claim straightforward.' },
      { programme: 'BC Interactive Digital Media Tax Credit', body: 'BC’s IDMTC supports eligible interactive digital media products developed in the province — relevant to much of Vancouver’s games and media work. We structure engagements so the eligible development is easy to evidence.' },
    ],
    whyHere: [
      { title: 'Media and real-time fluency', desc: 'We understand the performance demands of BC’s film, VFX and gaming sector, where "good enough" latency is not good enough.' },
      { title: 'Built for BC PIPA', desc: 'British Columbia’s own privacy act shapes consent and data handling; we design for it rather than retrofitting.' },
      { title: 'Canadian data residency', desc: 'Regulated and sensitive data kept on Canadian infrastructure, with the audit trail your team expects.' },
    ],
    faqs: [
      { q: 'Do you build software for Vancouver game and film studios?', a: 'Yes. We build real-time tools, media pipelines and platforms for the demands of Vancouver’s gaming, film and VFX sector, where performance is a hard requirement.' },
      { q: 'Does British Columbia have its own privacy law?', a: 'Yes. BC’s Personal Information Protection Act (PIPA) governs private-sector personal data in the province. We design consent, access and residency handling to meet it.' },
      { q: 'Which BC cities do you serve?', a: 'We deliver across British Columbia, with dedicated pages for Vancouver and Victoria, backed by a national engineering bench.' },
      { q: 'Can BC development work qualify for tax credits?', a: 'Eligible R&D can qualify for federal SR&ED, and interactive digital media products for BC’s IDMTC. We keep the documentation that supports a claim; confirm current eligibility with your accountant.' },
    ],
  },

  {
    slug: 'quebec',
    name: 'Quebec',
    abbr: 'QC',
    metaTitle: 'Software Development Company in Quebec',
    metaDescription:
      'Custom software, web and mobile development in Quebec and Montréal. AI, gaming, aerospace and biotech — built for Law 25 and French-language requirements.',
    heroSummary:
      'We build software for companies in Quebec and Montréal — one of the world’s leading AI and gaming hubs — with Law 25 privacy and French-language requirements designed in, not bolted on.',
    economy: [
      'Montréal is a global centre for artificial intelligence and deep learning, home to one of the largest concentrations of AI research anywhere, and to a games industry that ranks among the biggest in the world. Around them sit aerospace, biotech and a deep creative-industries sector. It is a market that produces genuinely advanced software and expects partners who can keep up.',
      'Building for Quebec also means building for two things other provinces do not impose the same way: Law 25, the province’s strict modernised privacy regime, and French-language requirements that reach into product interfaces and customer communication. We treat both as design inputs from the first decision, so a Quebec product is compliant and properly bilingual by construction rather than by retrofit.',
    ],
    cities: [
      { name: 'Montréal', slug: 'montreal', role: 'AI & deep learning, gaming, aerospace, biotech and creative industries' },
      { name: 'Quebec City', slug: 'quebec-city', role: 'Government, insurance, games and optics-photonics' },
    ],
    industries: [
      { title: 'AI & machine learning', desc: 'Applied AI, LLM integration and machine-learning systems for Montréal’s deep AI ecosystem — in production, not just research.' },
      { title: 'Gaming & interactive', desc: 'Tools, platforms and real-time systems for one of the world’s largest game-development sectors.' },
      { title: 'Aerospace', desc: 'Operations, maintenance and data platforms for Quebec’s aerospace manufacturers and their supply chains.' },
      { title: 'Biotech & life sciences', desc: 'Data, compliance and research platforms for Montréal’s biotech and life-sciences sector.' },
      { title: 'Creative industries', desc: 'Content, media and platform work for Quebec’s creative and cultural technology companies.' },
      { title: 'SaaS & startups', desc: 'Fixed-price MVPs and multi-tenant products, built bilingual and Law 25-ready from day one.' },
    ],
    privacy: {
      law: 'Quebec Law 25',
      body: 'Quebec’s Law 25 is the strictest privacy regime in Canada, with explicit consent, privacy-by-default, breach reporting and data-portability obligations. We design to it from the first decision, and account for French-language requirements that reach into product interfaces and user communication.',
    },
    incentives: [
      { programme: 'Federal SR&ED', body: 'The federal SR&ED credit funds eligible software R&D. We keep the technical history and documentation a claim needs.' },
      { programme: 'Quebec e-business & multimedia credits', body: 'Quebec offers among the most generous digital tax programmes in the country, including the tax credit for the development of e-business (CDAE) and the multimedia production credit. Where the work qualifies, we structure it so the eligible portion is clear.' },
    ],
    whyHere: [
      { title: 'Built for Law 25', desc: 'Quebec’s modernised privacy law is strict and enforced; we design consent, retention and breach handling to meet it from the start.' },
      { title: 'Bilingual by construction', desc: 'French-language requirements are a design input, so a Quebec product ships properly bilingual rather than translated as an afterthought.' },
      { title: 'AI in production', desc: 'We put machine learning into production systems, which fits a market that leads the world in applied AI.' },
    ],
    faqs: [
      { q: 'Do you build software that complies with Quebec’s Law 25?', a: 'Yes. Law 25 is Canada’s strictest privacy regime, and we design its consent, privacy-by-default, breach-reporting and portability requirements in from the first architecture decision.' },
      { q: 'Can you build bilingual French and English products?', a: 'Yes. Quebec’s French-language requirements reach into product interfaces and customer communication, so we build bilingual by construction rather than retrofitting a translation.' },
      { q: 'Do you work with Montréal AI and gaming companies?', a: 'Yes. Montréal is a world leader in both, and we build applied AI systems and real-time gaming tools for the sector — in production, not just prototypes.' },
      { q: 'What tax programmes support software work in Quebec?', a: 'Quebec has among Canada’s most generous digital programmes, including the CDAE e-business credit and the multimedia credit, alongside federal SR&ED. We structure work so eligible development is clear; confirm current terms with your accountant.' },
    ],
  },

  {
    slug: 'manitoba',
    name: 'Manitoba',
    abbr: 'MB',
    metaTitle: 'Software Development Company in Manitoba',
    metaDescription:
      'Custom software, web and mobile development across Manitoba and Winnipeg. Agriculture, manufacturing, insurance, aerospace and transportation platforms.',
    heroSummary:
      'We build software for companies across Manitoba and Winnipeg — agriculture, manufacturing, insurance and aerospace — with a distributed team and national engineering bench.',
    economy: [
      'Manitoba’s economy is anchored by agriculture, advanced manufacturing, insurance and a notable aerospace sector, with Winnipeg at its centre as a major transportation and distribution hub. These are established, operations-heavy industries, and their software needs are practical: connect the equipment, digitise the paperwork, move goods and claims through the system faster and with fewer errors.',
      'That is squarely where custom software earns its keep. Grain and food companies need supply-chain and traceability platforms; manufacturers need production and quality systems; insurers need quoting, claims and policy-administration tools built for how they actually operate. We build those systems for Manitoba businesses, backed by a national engineering bench.',
    ],
    cities: [
      { name: 'Winnipeg', slug: 'winnipeg', role: 'Agriculture, manufacturing, insurance, aerospace and transportation' },
    ],
    industries: [
      { title: 'Agriculture & agri-food', desc: 'Supply-chain, traceability and operations platforms for Manitoba’s grain, food and agri-business companies.' },
      { title: 'Manufacturing', desc: 'Production, quality and inventory systems for Manitoba’s advanced-manufacturing base.' },
      { title: 'Insurance', desc: 'Quoting, claims and policy-administration platforms for Manitoba insurers.' },
      { title: 'Aerospace', desc: 'Operations, maintenance and data platforms for Winnipeg’s aerospace sector and its supply chain.' },
      { title: 'Transportation & logistics', desc: 'Fleet, dispatch and distribution software for Winnipeg’s role as a national transport hub.' },
      { title: 'SaaS & startups', desc: 'Fixed-price MVPs and multi-tenant products for Manitoba founders.' },
    ],
    privacy: {
      law: 'PIPEDA',
      body: 'Private-sector personal data in Manitoba is governed by the federal PIPEDA. We design consent, access and breach-notification handling to meet it, and keep regulated data on Canadian infrastructure.',
    },
    incentives: [
      { programme: 'Federal SR&ED', body: 'The federal SR&ED credit funds eligible software R&D. We keep the technical history and documentation that support a claim.' },
      { programme: 'Manitoba R&D and interactive media programmes', body: 'Manitoba offers provincial research-and-development and interactive-media incentives that can stack with federal SR&ED. Where the work qualifies, we structure it so the eligible portion is easy to identify.' },
    ],
    whyHere: [
      { title: 'Operations-first engineering', desc: 'Manitoba’s industries are practical and operations-heavy; we build software that fits how the work is actually done.' },
      { title: 'Canadian data residency', desc: 'Regulated data kept on Canadian infrastructure and built to PIPEDA, with a clear audit trail.' },
      { title: 'Fixed scope, fixed price', desc: 'You know the cost and timeline before a line of code is written — no hourly billing, no surprises.' },
    ],
    faqs: [
      { q: 'Do you work with Manitoba businesses?', a: 'Yes. We deliver across Manitoba, with a dedicated Winnipeg page, using a distributed team model that pairs local delivery with a national engineering bench.' },
      { q: 'Which Manitoba industries do you build for?', a: 'Mostly agriculture and agri-food, manufacturing, insurance, aerospace and transportation — the sectors that anchor the provincial economy.' },
      { q: 'What privacy law applies to software in Manitoba?', a: 'Manitoba’s private sector is governed by federal PIPEDA. We design consent, access and breach handling to meet it, and keep regulated data in Canada.' },
      { q: 'How do you price Manitoba projects?', a: 'Fixed scope, fixed price. You get a precise timeline and a fixed cost before we write any code — no hourly billing and no scope-creep surprises.' },
    ],
  },

  {
    slug: 'nova-scotia',
    name: 'Nova Scotia',
    abbr: 'NS',
    metaTitle: 'Software Development Company in Nova Scotia',
    metaDescription:
      'Custom software, web and mobile development across Nova Scotia and Halifax. Ocean tech, defence, healthcare, education and tourism platforms.',
    heroSummary:
      'We build software for companies across Nova Scotia and Halifax — ocean technology, defence, healthcare and education — backed by a national engineering bench.',
    economy: [
      'Halifax anchors one of Canada’s most distinctive technology economies. The city is a national centre for ocean technology, pairing a working port and a deep marine-research base with a growing cluster of ocean-data and sensing companies. Alongside it sits a significant defence and security presence and a university sector that makes Halifax a serious education and research town.',
      'Those industries produce software problems you do not see elsewhere: ocean sensing and data platforms, secure systems for defence-adjacent work, research and clinical tools for the health and university sector. We build for all of them, with a distributed team and the engineering depth these domains demand.',
    ],
    cities: [
      { name: 'Halifax', slug: 'halifax', role: 'Ocean tech, defence, healthcare, education and tourism' },
    ],
    industries: [
      { title: 'Ocean technology', desc: 'Sensing, data and operations platforms for Halifax’s ocean-tech and marine-research sector.' },
      { title: 'Defence & security', desc: 'Secure systems and platforms built to the residency and security posture defence-adjacent work requires.' },
      { title: 'Healthcare', desc: 'PIPEDA-compliant patient and clinical platforms for Nova Scotia health providers.' },
      { title: 'Education & research', desc: 'Learning, assessment and research platforms for Halifax’s university and research sector.' },
      { title: 'Tourism', desc: 'Booking, experience and operations platforms for Nova Scotia’s tourism economy.' },
      { title: 'SaaS & startups', desc: 'Fixed-price MVPs and multi-tenant products for Atlantic-Canadian founders.' },
    ],
    privacy: {
      law: 'PIPEDA',
      body: 'Private-sector personal data in Nova Scotia is governed by federal PIPEDA. We design consent, access and breach-notification handling to meet it, and keep regulated and defence-adjacent data on Canadian infrastructure.',
    },
    incentives: [
      { programme: 'Federal SR&ED', body: 'The federal SR&ED credit funds eligible software R&D. We keep the technical documentation and history a claim needs.' },
      { programme: 'Nova Scotia digital media & innovation programmes', body: 'Nova Scotia offers provincial digital-media and innovation incentives that can complement federal SR&ED. Where the work qualifies, we structure it so the eligible development is clear.' },
    ],
    whyHere: [
      { title: 'Ocean and marine fluency', desc: 'We understand the sensing and data challenges of Halifax’s ocean-tech sector, so we start closer to the problem.' },
      { title: 'Security-conscious by default', desc: 'Defence-adjacent and health work demands Canadian residency and a serious security posture; we design for both from the start.' },
      { title: 'Atlantic reach, national bench', desc: 'Local delivery in Halifax backed by a national engineering team, so scale is never the constraint.' },
    ],
    faqs: [
      { q: 'Do you build ocean-technology software in Halifax?', a: 'Yes. Halifax is a national ocean-tech centre, and we build sensing, data and operations platforms for the marine and ocean-technology sector.' },
      { q: 'Can you handle security requirements for defence-adjacent work?', a: 'Yes. We design for Canadian data residency and the security posture defence and security work requires, and build to PIPEDA from the first decision.' },
      { q: 'Which Nova Scotia cities do you serve?', a: 'We deliver across Nova Scotia, with a dedicated Halifax page, backed by a national engineering bench.' },
      { q: 'What privacy law applies in Nova Scotia?', a: 'Nova Scotia’s private sector is governed by federal PIPEDA. We design consent, access and breach handling to meet it and keep regulated data in Canada.' },
    ],
  },

  {
    slug: 'saskatchewan',
    name: 'Saskatchewan',
    abbr: 'SK',
    metaTitle: 'Software Development in Saskatchewan',
    metaDescription:
      'Custom software, web and mobile development across Saskatchewan and Saskatoon. Mining, agriculture, biotech and energy platforms, built to PIPEDA.',
    heroSummary:
      'We build software for companies across Saskatchewan and Saskatoon — mining, agriculture, biotech and energy — with a distributed team and national engineering bench.',
    economy: [
      'Saskatchewan’s economy runs on resources and agriculture at a scale that shapes global markets — the province is one of the world’s largest potash and agricultural producers — with Saskatoon as its research and technology centre. Around the mines and farms sits a real biotech and agricultural-research base, much of it connected to the University of Saskatchewan.',
      'These industries need software that works at industrial scale and in remote conditions: mine-site operations and safety systems, precision-agriculture and supply-chain platforms, research and data tools for biotech. Off-the-shelf products rarely fit, which is exactly where custom engineering pays off. We build those systems for Saskatchewan businesses, backed by a national bench.',
    ],
    cities: [
      { name: 'Saskatoon', slug: 'saskatoon', role: 'Mining, agriculture, biotech, energy and education' },
      { name: 'Regina', slug: 'regina', role: 'Government, agriculture, energy and insurance' },
    ],
    industries: [
      { title: 'Mining & resources', desc: 'Site operations, safety and logistics platforms built for the scale and conditions of Saskatchewan’s mining sector.' },
      { title: 'Agriculture & agri-food', desc: 'Precision-agriculture, traceability and supply-chain platforms for one of the world’s largest agricultural producers.' },
      { title: 'Biotech & research', desc: 'Data, compliance and research platforms for Saskatoon’s biotech and agricultural-research sector.' },
      { title: 'Energy', desc: 'Monitoring, operations and reporting platforms for Saskatchewan’s energy companies.' },
      { title: 'Education & research', desc: 'Learning and research platforms connected to the University of Saskatchewan and the wider sector.' },
      { title: 'SaaS & startups', desc: 'Fixed-price MVPs and multi-tenant products for Saskatchewan founders.' },
    ],
    privacy: {
      law: 'PIPEDA',
      body: 'Private-sector personal data in Saskatchewan is governed by federal PIPEDA. We design consent, access and breach-notification handling to meet it, and keep regulated data on Canadian infrastructure.',
    },
    incentives: [
      { programme: 'Federal SR&ED', body: 'The federal SR&ED credit funds eligible software R&D. We keep the technical history and documentation a claim needs.' },
      { programme: 'Saskatchewan technology & innovation programmes', body: 'Saskatchewan offers provincial technology and innovation incentives, including support aimed at growing the tech sector, that can complement federal SR&ED. Where the work qualifies, we structure it so eligible development is clear.' },
    ],
    whyHere: [
      { title: 'Industrial-scale engineering', desc: 'Mining and large-scale agriculture demand software that holds up in remote, high-stakes conditions; we build for that reality.' },
      { title: 'Canadian data residency', desc: 'Regulated data kept on Canadian infrastructure and built to PIPEDA, with a clear audit trail.' },
      { title: 'Fixed scope, fixed price', desc: 'A precise timeline and fixed cost before any code is written — no hourly billing, no surprises.' },
    ],
    faqs: [
      { q: 'Do you build software for Saskatchewan’s mining and agriculture sectors?', a: 'Yes. We build site-operations, safety, precision-agriculture and supply-chain platforms designed for the scale and remote conditions of Saskatchewan’s resource and agricultural industries.' },
      { q: 'Which Saskatchewan cities do you serve?', a: 'We deliver across Saskatchewan, with a dedicated Saskatoon page, backed by a national engineering bench.' },
      { q: 'What privacy law applies to software in Saskatchewan?', a: 'Saskatchewan’s private sector is governed by federal PIPEDA. We design consent, access and breach handling to meet it and keep regulated data in Canada.' },
      { q: 'How do you price Saskatchewan projects?', a: 'Fixed scope, fixed price. You get a precise timeline and fixed cost before we write any code, with no hourly billing or scope-creep surprises.' },
    ],
  },
];

export const provinceSlugs = provinces.map(p => p.slug);
export function getProvince(slug: string): ProvinceData | undefined {
  return provinces.find(p => p.slug === slug);
}

/** City pages know their province by name; this maps it to the province slug. */
export function provinceSlugForName(name: string): string | undefined {
  return provinces.find(p => p.name === name)?.slug;
}
