/**
 * City × service intersection content.
 *
 * The 144 pages under /locations/[city]/[service] used to be a pure matrix
 * recombination: a city block (context, stats, testimonials) stacked on a
 * service block (capabilities, process, pricing, FAQs). Nothing on the page
 * was written for the *pairing*, so every "AI/ML in X" page carried the same
 * body as every other, and Google's Search Console reported 201 of them as
 * "Discovered - currently not indexed" and 28 as "Crawled - currently not
 * indexed" — the standard verdict on templated pages that add no new value.
 *
 * This module supplies the part that is genuinely specific to a pairing: what
 * a given service actually does for the industries that particular city runs
 * on. The city's own `localIndustries` are the join key, so Edmonton + AI/ML
 * talks about oil & gas and agri-tech, while Halifax + AI/ML talks about ocean
 * tech and defence.
 */

import type { CityData } from './cities';
import type { ServiceData } from './services';

/**
 * The 37 distinct `localIndustries` labels across the 12 cities collapse into
 * 14 economic groups. Grouping keeps the authored angle set tractable (12
 * services x 14 groups) while still letting each page name the city's own
 * industry label verbatim in the heading.
 */
export type IndustryGroup =
  | 'energy' | 'agriculture' | 'public' | 'health' | 'finance'
  | 'media' | 'manufacturing' | 'education' | 'tech' | 'logistics'
  | 'marine' | 'tourism' | 'realestate' | 'commerce';

const INDUSTRY_GROUP_OF: Record<string, IndustryGroup> = {
  'Oil & Gas': 'energy', 'Energy': 'energy', 'Clean Energy': 'energy',
  'Clean Tech': 'energy', 'Mining': 'energy',
  'Agriculture': 'agriculture', 'Agriculture Tech': 'agriculture', 'AgriFood': 'agriculture',
  'Government': 'public', 'Defence': 'public',
  'Healthcare': 'health', 'Biotech': 'health',
  'FinTech': 'finance', 'Banking': 'finance', 'Finance': 'finance',
  'Insurance': 'finance', 'Insurance Tech': 'finance',
  'Media & Entertainment': 'media', 'Film & VFX': 'media',
  'Creative Industries': 'media', 'Gaming': 'media',
  'Manufacturing': 'manufacturing', 'Automotive': 'manufacturing', 'Aerospace': 'manufacturing',
  'Education': 'education',
  'SaaS': 'tech', 'AI/ML': 'tech', 'AI & Deep Learning': 'tech',
  'Cybersecurity': 'tech', 'Telecom': 'tech',
  'Logistics': 'logistics', 'Transportation': 'logistics',
  'Marine': 'marine', 'Ocean Tech': 'marine',
  'Tourism': 'tourism',
  'Real Estate': 'realestate',
  'Retail': 'commerce',
  // Labels from the expanded 24-city set, mapped to the closest existing group.
  'Corporate Head Offices': 'finance', 'Finance & Insurance': 'finance', 'Insurance & Finance': 'finance',
  'Pharmaceuticals & Life Sciences': 'health', 'Life Sciences': 'health', 'Health Sciences': 'health',
  'Health Technology': 'health', 'Health': 'health', 'Biotech & Pharmaceuticals': 'health',
  'Logistics & Supply Chain': 'logistics', 'Logistics & Port': 'logistics', 'Logistics & Distribution': 'logistics',
  'Cross-Border Trade': 'logistics',
  'Advanced Manufacturing': 'manufacturing', 'Food Processing': 'manufacturing', 'Optics & Photonics': 'manufacturing',
  'Creative & Tech': 'media', 'Film & Visual Effects': 'media', 'Video Games': 'media', 'Gaming & Tech': 'media',
  'Clean Technology': 'energy', 'Energy & Potash': 'energy',
  'Government & Crown Corporations': 'public', 'Federal Government': 'public', 'Public Administration': 'public',
  'Agriculture & Agri-Tech': 'agriculture', 'Agriculture & Wine': 'agriculture', 'Agri-Food': 'agriculture',
  'Technology & Software': 'tech', 'Telecommunications': 'tech', 'IT Services': 'tech',
};

export function industryGroupOf(label: string): IndustryGroup | undefined {
  return INDUSTRY_GROUP_OF[label];
}

type AngleMap = Partial<Record<IndustryGroup, string>>;

/**
 * What each service concretely does for each industry group. One authored
 * sentence per pair — specific enough that the sentence could not be swapped
 * for another service's without becoming wrong.
 */
export const SERVICE_INDUSTRY_ANGLES: Record<string, AngleMap> = {
  'mobile-app-development': {
    energy: 'Field-crew apps for inspections, lone-worker safety check-ins and asset tagging that keep working offline at remote sites and reconcile when the crew regains signal.',
    agriculture: 'In-cab and in-field apps for spray records, scouting and equipment telemetry, designed for gloved hands and built to function with no connectivity for hours at a time.',
    public: 'Resident-facing service apps and inspector tooling built to WCAG 2.1 AA, with the audit trails and records retention provincial privacy rules require.',
    health: 'Patient intake, remote monitoring and clinician apps that handle personal health information under PIPEDA and the relevant provincial health act.',
    finance: 'Banking, claims-capture and advisor apps with biometric authentication, device attestation and the transaction audit trail auditors expect.',
    media: 'Ticketing, second-screen and fan apps engineered for launch-day traffic spikes and heavy media streaming without draining the battery.',
    manufacturing: 'Shop-floor tablet apps for work orders, quality checks and machine data that run reliably on plant networks and tolerate dead zones.',
    education: 'Student, parent and campus apps with institutional SSO, downloadable offline coursework and accessibility built in from the first sprint.',
    tech: 'The mobile surface of an existing SaaS product, sharing the API contract and release cadence of the web app rather than drifting from it.',
    logistics: 'Driver and dispatch apps with route optimisation, proof-of-delivery capture and offline-first sync for long stretches without coverage.',
    marine: 'Vessel and dockside apps that keep collecting data through long offline passages, then reconcile cleanly the moment the ship is back in range.',
    tourism: 'Booking, itinerary and wayfinding apps built for sharp seasonal peaks, multilingual visitors and patchy connectivity at the destination.',
    realestate: 'Listing, showing-management and tenant apps with fast map search, in-app document signing and two-way sync to the brokerage CRM.',
    commerce: 'Retail and loyalty apps with scan-and-go, in-store pickup and the payment and inventory integrations that keep online and shelf stock honest.',
  },

  'ai-ml': {
    energy: 'Predictive maintenance on rotating equipment, production forecasting and automated regulatory reporting built from existing sensor and historian data.',
    agriculture: 'Yield prediction, disease detection from field imagery and input optimisation across variable soil zones, validated against a real season of data.',
    public: 'Document triage, multilingual resident support and case-backlog prioritisation, with explainable decisions and a full audit trail for review.',
    health: 'Triage support, imaging pre-reads and administrative automation, deployed with clinical validation and strict controls over personal health information.',
    finance: 'Fraud scoring, underwriting support and claims automation, with the model documentation and monitoring that survive a regulator or auditor review.',
    media: 'Content tagging, recommendation, automated localisation and generative tooling wired into the production pipeline your team already uses.',
    manufacturing: 'Vision inspection on the line, scrap-rate reduction and demand forecasting built from ERP and machine data rather than a greenfield dataset.',
    education: 'Adaptive learning paths, marking support and early-warning models for student retention, designed so staff can see why a flag was raised.',
    tech: 'LLM features inside your product — retrieval, agents, evaluation harnesses — plus the cost and latency engineering that makes them viable at scale.',
    logistics: 'ETA prediction, load matching and exception detection across telematics, order and yard data, surfaced where dispatchers already work.',
    marine: 'Acoustic and imagery classification, route and fuel optimisation, and survey-data processing at volumes that defeat manual review.',
    tourism: 'Demand forecasting, dynamic pricing and multilingual conversational booking assistants tuned for a short, high-stakes booking window.',
    realestate: 'Automated valuation models, lead scoring and structured extraction from leases, disclosures and inspection reports.',
    commerce: 'Demand forecasting, personalised merchandising and returns-fraud detection unified across in-store and online channels.',
  },

  'web-development': {
    energy: 'Operator portals, production dashboards and compliance reporting that consolidate SCADA, historian and ERP data into one reviewable surface.',
    agriculture: 'Grower portals, traceability systems and marketplace platforms engineered for the load concentration of a short growing season.',
    public: 'Accessible public services meeting WCAG 2.1 AA, with the audit trails, uptime commitments and documentation procurement requires.',
    health: 'Patient portals, referral workflows and clinician tooling built to PIPEDA and provincial privacy requirements from the architecture up.',
    finance: 'Secure client portals, application flows and back-office systems built with SOC 2-aligned access controls and change management.',
    media: 'High-traffic editorial and streaming sites engineered for launch spikes and for Core Web Vitals under real ad and video payloads.',
    manufacturing: 'Customer and dealer portals, configure-price-quote tooling and order systems wired directly into the existing ERP.',
    education: 'Enrolment journeys, LMS integration and campus web estates with institutional SSO and accessibility compliance across every template.',
    tech: 'The marketing site and application shell for a SaaS product, sharing one design system and one deployment pipeline instead of diverging.',
    logistics: 'Shipper and carrier portals with live tracking, rate management and the EDI and API integrations partners actually ask for.',
    marine: 'Survey-data portals, fleet management systems and regulatory submission workflows that handle very large datasets predictably.',
    tourism: 'Booking engines and destination sites built for seasonal peaks, multilingual content and map-heavy pages that still load fast.',
    realestate: 'MLS-connected listing portals with fast map search, saved-search alerts and lead routing straight into the brokerage CRM.',
    commerce: 'Storefronts and headless commerce builds tuned for conversion, Core Web Vitals and peak-season load rather than for the demo.',
  },

  'product-design': {
    energy: 'Control-room and field interfaces where glanceability and error prevention matter far more than decoration.',
    agriculture: 'Interfaces designed for gloved hands, direct sunlight and in-cab use during the few weeks a year when the work actually happens.',
    public: 'Service design meeting accessibility standards, tested with the full range of residents who have no alternative but to use it.',
    health: 'Clinical workflows designed to cut clicks per encounter and to close the error paths that cause real patient harm.',
    finance: 'Onboarding and application flows designed to lift completion rates while still meeting every disclosure obligation.',
    media: 'Audience-facing experiences where retention and session depth are the explicit design targets, measured after launch.',
    manufacturing: 'Operator interfaces built for the plant floor — high contrast, minimal text, and little to no training required.',
    education: 'Learner interfaces designed around attention, accessibility and an extremely wide range of device quality and connection speed.',
    tech: 'Design systems, activation flows and dashboards that measurably reduce time-to-value for a SaaS product.',
    logistics: 'Dispatch and driver interfaces designed for speed under pressure and safe one-handed use in a cab.',
    marine: 'Bridge and survey interfaces that stay legible in poor light, constant motion and heavy weather.',
    tourism: 'Booking flows designed to survive comparison shopping, with multilingual and accessible content design throughout.',
    realestate: 'Search and listing experiences designed around how buyers actually shortlist, not around how the data happens to be stored.',
    commerce: 'Discovery, cart and checkout design measured against conversion rate rather than aesthetics.',
  },

  'blockchain-web3': {
    energy: 'Carbon-credit registries, renewable energy certificate tracking and settlement rails for commodity trades that currently reconcile by spreadsheet.',
    agriculture: 'Farm-to-fork traceability and grain provenance systems that hold up when a buyer or regulator audits the chain of custody.',
    public: 'Tamper-evident public records, credential verification and procurement transparency where the audit trail is the whole point.',
    health: 'Consent management, clinical-trial data integrity and practitioner credential verification across institutions that do not share a database.',
    finance: 'Tokenised assets, settlement rails and stablecoin payment flows, with compliance and reporting designed in rather than bolted on.',
    media: 'Royalty distribution, rights management and provenance for digital assets, so payouts stop depending on quarterly manual reconciliation.',
    manufacturing: 'Parts provenance, counterfeit prevention and supplier attestation across a multi-tier supply chain.',
    education: 'Verifiable credentials and tamper-proof transcripts that an employer can check instantly without contacting the registrar.',
    tech: 'Wallet infrastructure, protocol integration and the security audit work that has to happen before anything touches mainnet.',
    logistics: 'Shipment provenance, digitised bills of lading and customs documentation that removes a week of paper from each crossing.',
    marine: 'Catch documentation, vessel compliance records and cargo chain-of-custody accepted by the authorities that inspect them.',
    tourism: 'Anti-fraud ticketing and loyalty schemes that stay interoperable across operators rather than trapping value in one brand.',
    realestate: 'Title records, fractional ownership structures and escrow automation that shorten a closing.',
    commerce: 'Authenticity verification for premium goods, loyalty tokens and resale provenance that protects margin in the secondary market.',
  },

  'cloud-devops': {
    energy: 'High-availability architecture for operations-adjacent workloads, data pipelines out of remote sites, and disaster recovery that has actually been tested.',
    agriculture: 'Infrastructure that scales hard for a ten-week season and costs almost nothing for the rest of the year, plus IoT ingestion from field sensors.',
    public: 'Canadian data residency, compliance-ready landing zones and the documentation procurement asks for before it will sign.',
    health: 'Architecture safe for personal health information — encryption, audit logging and availability targets appropriate to clinical systems.',
    finance: 'SOC 2 and PCI-aligned pipelines with segregation of duties, change control and disaster recovery you can evidence to an auditor.',
    media: 'CDN and transcoding infrastructure with elastic capacity for launches and live events, sized so a spike is not an incident.',
    manufacturing: 'Edge-to-cloud data pipelines off plant equipment, with the OT and IT separation your security team requires.',
    education: 'Capacity for the term-start surge and aggressive cost control through the quiet months.',
    tech: 'Multi-tenant infrastructure with per-tenant cost visibility, real CI/CD and observability that shortens incident response.',
    logistics: 'Real-time telematics ingestion, event streaming and integrations that degrade gracefully when a partner API goes down.',
    marine: 'Sync designed around intermittent connectivity, plus storage and processing for survey datasets measured in terabytes.',
    tourism: 'Seasonal scaling and booking-engine resilience, so the busiest hour of the year is not the one that fails.',
    realestate: 'Image-heavy storage and delivery, and MLS synchronisation that stays reliable when the upstream feed misbehaves.',
    commerce: 'Peak-season capacity planning, checkout resilience and zero-downtime deploys during the weeks that make the year.',
  },

  'ar-vr': {
    energy: 'Maintenance training on turbines and pipeline assets, plus remote expert guidance overlaid on what the technician is actually looking at.',
    agriculture: 'Equipment operation training and facility walkthroughs that cut the cost of teaching seasonal staff.',
    public: 'Emergency-response training and public consultation visualisation that lets residents see a proposal before it is built.',
    health: 'Surgical and clinical simulation, patient education and rehabilitation programmes with measurable adherence.',
    finance: 'Immersive data visualisation and remote advisory environments for conversations that do not work over a phone call.',
    media: 'Immersive content, virtual production workflows and location-based entertainment built for repeat throughput.',
    manufacturing: 'Assembly guidance, maintenance overlays and digital twins tied to live line data rather than to a static model.',
    education: 'Lab simulations and immersive modules that give students access to equipment the institution cannot afford to buy.',
    tech: 'WebXR product demonstrations and spatial interfaces that run in a browser with no install step.',
    logistics: 'Warehouse pick guidance, load optimisation and yard training that reduce error rates in the first week.',
    marine: 'Bridge simulation, dive and ROV training, and vessel walkthroughs for crews who cannot practise on the real asset.',
    tourism: 'Virtual destination previews that convert browsers into bookings, and on-site AR guides that work without a data plan.',
    realestate: 'Virtual tours, off-plan visualisation and staging that lets a buyer shortlist without a physical showing.',
    commerce: 'Virtual try-on, product visualisation and in-store AR wayfinding, measured by return rate as well as conversion.',
  },

  'digital-marketing': {
    energy: 'B2B demand generation matched to long procurement cycles, with technical content that survives scrutiny by an engineering buyer.',
    agriculture: 'Campaign timing built around the season, plus dealer and co-op marketing that does not compete with your own channel.',
    public: 'Public awareness campaigns with accessible creative and reporting that stands up to a scrutiny request.',
    health: 'Compliant health marketing and patient acquisition, with the local search work that decides who gets the appointment.',
    finance: 'Regulated advertising with the trust signals that matter in finance, optimised for lead quality rather than raw volume.',
    media: 'Audience growth, subscription funnels and retention work, because acquisition alone does not fix churn.',
    manufacturing: 'Distributor and dealer lead generation, trade-show pipeline, and technical SEO for the spec-driven searches buyers actually run.',
    education: 'Enrolment funnels built around fixed intake deadlines, including international student acquisition.',
    tech: 'Product-led growth content, SaaS SEO and trial-to-paid funnel work tied to activation metrics rather than traffic.',
    logistics: 'Shipper acquisition, capacity marketing and visibility in the RFP processes that award the contracts worth having.',
    marine: 'Narrow B2B targeting and tender visibility in a market where the total buyer list is short and known.',
    tourism: 'Seasonal demand capture and a direct-booking strategy that reduces dependence on OTA commission.',
    realestate: 'Local search dominance, listing visibility and agent brand building in the neighbourhoods you actually serve.',
    commerce: 'Performance marketing, product feed optimisation and lifecycle retention measured on contribution margin.',
  },

  'wordpress-cms': {
    energy: 'Corporate and investor-relations sites with controlled publishing for safety and regulatory documentation across regions.',
    agriculture: 'Grower resource hubs, dealer locators and seasonal campaign content that non-technical staff can update mid-season.',
    public: 'WCAG 2.1 AA-compliant sites with content governance and publishing workflows that work across many departments.',
    health: 'Clinic and hospital sites with appointment integration and accessible patient information that meets accessibility policy.',
    finance: 'Editorial workflows with compliance review built into the publishing path, plus advisor and branch directories.',
    media: 'High-volume editorial publishing with paywalls, syndication and an editor experience that holds up at pace.',
    manufacturing: 'Product catalogues, spec-sheet libraries and distributor portals kept in sync with the source data.',
    education: 'Department sites and programme catalogues under one governed template set, accessible by default.',
    tech: 'Headless WordPress behind a Next.js front end, so marketing keeps its editor and engineering keeps its stack.',
    logistics: 'Service pages, quote-request flows and tracking integrations that route enquiries to the right desk.',
    marine: 'Technical documentation libraries and tender-ready compliance content with strict version control.',
    tourism: 'Multilingual destination content with booking-widget integration and seasonal campaign scheduling.',
    realestate: 'Agent and brokerage sites with IDX integration and listing feeds that stay current without manual re-entry.',
    commerce: 'WooCommerce storefronts with clean product data, and checkout optimisation aimed at measured conversion gains.',
  },

  'game-development': {
    energy: 'Simulation-based training and gamified safety onboarding that measurably improve retention over classroom delivery.',
    agriculture: 'Equipment operation simulators and gamified training for a workforce that turns over every season.',
    public: 'Civic engagement games and emergency-preparedness training that reach audiences a pamphlet never will.',
    health: 'Therapeutic and rehabilitation games with adherence tracking, plus simulation for clinical training.',
    finance: 'Financial literacy games and gamified onboarding that lift completion of otherwise dry mandatory content.',
    media: 'Full game production, licensed IP work and the LiveOps cadence that keeps a title earning after launch.',
    manufacturing: 'Assembly and process training simulators that shorten time-to-competency on the line.',
    education: 'Curriculum-aligned learning games with engagement mechanics that hold attention without gimmicks.',
    tech: 'Gamification layers and engine integration inside an existing product, not a separate app to maintain.',
    logistics: 'Warehouse, forklift and yard training simulators that cut incident rates during onboarding.',
    marine: 'Navigation, safety and emergency simulators for crews who cannot rehearse on the real vessel.',
    tourism: 'Destination games, AR treasure hunts and promotional experiences that extend visitor dwell time.',
    realestate: 'Interactive property explorers that let a buyer walk a development that has not been built yet.',
    commerce: 'Gamified loyalty and advergames measured on repeat purchase rather than on impressions.',
  },

  'branding': {
    energy: 'Identity that carries credibility with regulators and investors, with a safety-first and ESG narrative that is defensible.',
    agriculture: 'Positioning that balances heritage with innovation, because producers buy from brands they believe will still exist in ten years.',
    public: 'Accessible identity systems and plain-language standards that stay consistent across every department that uses them.',
    health: 'Identity built on trust and empathy, designed to stay within accreditation and advertising constraints.',
    finance: 'Trust and stability signals expressed through a system that survives regulated-communications review.',
    media: 'Distinctive, IP-driven identity with franchise systems that extend across titles and formats.',
    manufacturing: 'B2B credibility with spec-driven communication and a trade-show presence that generates real conversations.',
    education: 'Recruitment-oriented brand work spanning domestic intake, international students and alumni engagement.',
    tech: 'Category definition and developer credibility, with a product-led brand rather than a decorative one.',
    logistics: 'Reliability signalling from fleet livery through to sales collateral, because reliability is the entire proposition.',
    marine: 'Heritage, certification and technical authority communicated to a small, expert and skeptical buying audience.',
    tourism: 'Destination brand and seasonal campaign systems with visual storytelling built for a short decision window.',
    realestate: 'Brokerage and agent brand with genuine neighbourhood positioning instead of interchangeable luxury language.',
    commerce: 'Retail identity, packaging and omnichannel consistency so the shelf and the storefront read as one brand.',
  },

  'saas-development': {
    energy: 'Asset management and compliance reporting platforms with tenancy that separates operators cleanly.',
    agriculture: 'Farm management platforms with cooperative tenancy models and billing aligned to the season, not the calendar month.',
    public: 'Govtech platforms with procurement-friendly licensing, Canadian data residency and the security documentation to match.',
    health: 'Clinical SaaS with per-tenant isolation of personal health information and audit logging that satisfies review.',
    finance: 'Regulated multi-tenant platforms with the reporting, audit and access controls a financial institution requires.',
    media: 'Content and rights management platforms with usage-based billing and predictable performance on large libraries.',
    manufacturing: 'Quality and production platforms with plant-level tenancy and deep ERP integration.',
    education: 'Institution-tenanted platforms with SSO, role hierarchies and billing aligned to the academic year.',
    tech: 'The core build — multi-tenant architecture, billing, authentication and analytics — designed to survive the second and third pricing model.',
    logistics: 'Transport management and visibility platforms with carrier onboarding and usage-based billing.',
    marine: 'Fleet and survey-data platforms with clients that tolerate long offline periods without losing data.',
    tourism: 'Booking and property management platforms with seasonal pricing and channel-manager integration.',
    realestate: 'Brokerage and property management platforms with MLS integration and per-office tenancy.',
    commerce: 'Retail operations platforms with multi-store tenancy and POS integration that reconciles to the cent.',
  },
};

export interface IndustryApplication {
  /** The city's own industry label, used verbatim in the heading. */
  industry: string;
  title: string;
  desc: string;
}

export interface CityServiceLocalSection {
  heading: string;
  body: string;
}

export interface CityServiceIntersection {
  intro: string;
  applications: IndustryApplication[];
  localSections: CityServiceLocalSection[];
  localFaqs: { q: string; a: string }[];
}

/** Hand-written copy for thin /locations/<city>/<service> pairs that need more than the matrix template. */
interface CityServicePairOverride {
  intro?: string;
  applications?: IndustryApplication[];
  localSections?: CityServiceLocalSection[];
  localFaqs?: { q: string; a: string }[];
}

const CITY_SERVICE_PAIR_OVERRIDES: Record<string, CityServicePairOverride> = {
  'montreal/digital-marketing': {
    intro:
      'Digital marketing in Montreal is not the same playbook as Toronto or Vancouver. Buyers search in French and English, Quebec’s Law 25 shapes how you collect leads, and the city’s economy mixes AI research labs, game launches and aerospace suppliers — each with different buying cycles. Mapletech Labs runs SEO, paid search and content for Montreal teams from a Canadian company with fixed-scope pricing, bilingual delivery when you need it, and technical SEO on modern Next.js and WordPress stacks.',
    applications: [
      {
        industry: 'AI & Deep Learning',
        title: 'SEO and demand gen for Montreal AI products',
        desc: 'Thought-leadership content, technical landing pages and LinkedIn campaigns that reach enterprise buyers evaluating copilots and ML platforms, without generic “AI agency” filler.',
      },
      {
        industry: 'Gaming',
        title: 'Launch campaigns for studios and live-service titles',
        desc: 'Seasonal paid social, influencer coordination and store-page SEO timed to launch windows, with analytics wired so you can see which channels actually drive installs.',
      },
      {
        industry: 'Aerospace',
        title: 'B2B marketing for long-cycle aerospace sales',
        desc: 'Technical SEO, spec-driven content and ABM-style landing pages that survive scrutiny from engineering buyers at Bombardier-tier suppliers and their procurement teams.',
      },
      {
        industry: 'Creative Industries',
        title: 'Bilingual brand visibility for Quebec audiences',
        desc: 'French and English keyword maps, hreflang-ready site structure and local SEO so Montreal creative firms show up for both language markets without duplicate-content penalties.',
      },
    ],
    localSections: [
      {
        heading: 'Bilingual SEO and Quebec privacy (Law 25)',
        body:
          'We build keyword and content plans in French and English, align hreflang and on-page signals for Quebec search behaviour, and keep forms and analytics compliant with Law 25 consent expectations. That includes clear privacy copy, opt-in for remarketing and documentation your team can hand to a privacy officer.',
      },
      {
        heading: 'Technical SEO on fast modern sites',
        body:
          'Montreal companies often ship on Next.js, headless WordPress or Webflow. We audit Core Web Vitals, indexation, schema and internal linking on those stacks — the same technical work described in our SEO services — so rankings are not blocked by performance or crawl issues.',
      },
    ],
    localFaqs: [
      {
        q: 'Do you run French and English SEO for Montreal businesses?',
        a: 'Yes. We research and optimize for both language markets, structure pages for hreflang where needed, and can produce or coordinate French copy with your team. Many Montreal clients need Quebec French, not European French, and we plan keywords accordingly.',
      },
      {
        q: 'How does Quebec Law 25 affect digital marketing in Montreal?',
        a: 'Law 25 requires clear consent for personal information collected through forms, cookies and ad pixels. We configure tags, consent banners and lead flows with privacy in mind and document what data each campaign collects. Your privacy officer should confirm the final compliance position.',
      },
      {
        q: 'What does SEO or digital marketing cost in Montreal?',
        a: 'Using the ranges in our Canadian digital marketing cost guide, SEO retainers often run about $1,500-$10,000 CAD per month depending on scope, while one-off audits or landing-page projects start lower. You get a fixed scope in CAD after discovery. See our pricing page for project-style work.',
      },
      {
        q: 'Can you improve rankings for competitive Montreal keywords?',
        a: 'We focus on keywords that match your services and proof — service pages, case studies and technical fixes — not vanity traffic. Our SEO team has ranked 500+ keywords to page one for Canadian clients; timelines depend on competition, site health and how much content you can approve each month.',
      },
    ],
  },
  'edmonton/branding': {
    intro:
      'Branding in Edmonton means earning trust in energy, agriculture and public-sector markets where buyers are skeptical of flashy agencies. Mapletech Labs is headquartered here, so Edmonton branding projects get in-person strategy workshops, identity systems that work on hard hats and board slides alike, and the same senior team from discovery through launch. We build brand strategy, visual identity and guidelines with fixed pricing in CAD — no open-ended hourly billing.',
    applications: [
      {
        industry: 'Oil & Gas',
        title: 'Brand systems for energy and oilfield services',
        desc: 'Identity and messaging that carry safety-first and ESG credibility with regulators, investors and field crews — not generic “tech startup” aesthetics pasted onto an industrial business.',
      },
      {
        industry: 'Agriculture Tech',
        title: 'Positioning for Alberta agri-tech and equipment brands',
        desc: 'Visual identity and narrative that balance farm heritage with innovation, because producers buy from brands they believe will still be here in ten years.',
      },
      {
        industry: 'Government',
        title: 'Accessible identity for public-facing Edmonton programs',
        desc: 'Plain-language standards, bilingual-ready templates and visual systems that stay consistent across departments and meet accessibility expectations on every touchpoint.',
      },
      {
        industry: 'Healthcare',
        title: 'Trust-led healthcare branding in Alberta',
        desc: 'Empathetic identity and patient-facing materials designed to stay within accreditation and advertising constraints while still feeling human.',
      },
    ],
    localSections: [
      {
        heading: 'Workshops at our Edmonton head office',
        body:
          'Brand strategy works best in the room with your leadership. We run positioning and visual direction workshops in Edmonton — at your office or ours — so decisions are made with the people who live the brand every day. After the workshop you get a written scope and fixed price before creative production starts.',
      },
      {
        heading: 'From logo to field-ready templates',
        body:
          'Energy and construction clients need more than a PDF brand guide: truck decals, site signage, PowerPoint templates and sales decks that crews and executives actually use. We deliver identity systems with real application examples, not only logo files.',
      },
    ],
    localFaqs: [
      {
        q: 'How much does branding cost in Edmonton?',
        a: 'A logo and basic identity package often runs about $700-$5,000 CAD, a full brand strategy and identity system about $5,000-$20,000, and enterprise rebrands higher depending on research depth and touchpoints. Because we are headquartered in Edmonton, workshops and reviews happen locally without travel markup. You get a fixed quote after discovery.',
      },
      {
        q: 'Can we meet your branding team in person in Edmonton?',
        a: 'Yes. Mapletech Labs is headquartered in Edmonton. Kickoffs, stakeholder interviews and major creative reviews can all happen in person here, with ongoing work on shared boards and scheduled calls between milestones.',
      },
      {
        q: 'When should an Edmonton energy company consider rebranding?',
        a: 'Common triggers are a shift into clean energy or new service lines, a merger, outdated visuals that no longer match capability, or a safety/ESG story that the current brand cannot tell. We start with a short brand audit to recommend a full rebrand versus a focused refresh.',
      },
      {
        q: 'Do you handle rebrands without losing Alberta brand equity?',
        a: 'Yes. We document what to keep — colour recognition, taglines, heritage marks — and what to evolve, then roll out with templates so field and office teams adopt the new system consistently.',
      },
    ],
  },
  'toronto/cloud-devops': {
    intro:
      'Cloud and DevOps work in Toronto usually sits under financial, media or retail uptime pressure: SOC 2 questions from Bay Street buyers, launch-day traffic for streaming and e-commerce, and integration with stacks that already run in AWS or Azure. Mapletech Labs designs landing zones, CI/CD and observability for Toronto teams with Canadian data residency, fixed-scope pricing and senior engineers on the project from day one.',
    applications: [
      {
        industry: 'FinTech',
        title: 'SOC 2-aligned pipelines for Toronto fintech',
        desc: 'Segregation of duties, change control, encrypted secrets and disaster recovery you can show an auditor — not a demo environment that never reaches production.',
      },
      {
        industry: 'Banking',
        title: 'Hybrid cloud for regulated banking workloads',
        desc: 'Landing zones and deployment automation that respect internal security review, with documentation procurement and vendor risk teams expect.',
      },
      {
        industry: 'Media & Entertainment',
        title: 'Elastic infra for Toronto media launches',
        desc: 'CDN, autoscaling and transcoding pipelines sized for premiere-night spikes and sustained streaming load without treating every traffic bump as an incident.',
      },
      {
        industry: 'Retail',
        title: 'Peak-season checkout resilience',
        desc: 'Zero-downtime deploys, cache strategy and load testing before Black Friday-scale events so Toronto retailers do not learn about bottlenecks from customers.',
      },
    ],
    localSections: [
      {
        heading: 'AWS and Kubernetes for production Toronto workloads',
        body:
          'We implement AWS Well-Architected patterns, EKS or ECS deployments, Terraform or CloudFormation baselines and GitHub Actions or GitLab CI pipelines your team can run after handoff. Work starts with a short architecture review of what you run today and what must change for scale or compliance.',
      },
      {
        heading: 'Observability and incident response',
        body:
          'Dashboards, alerting and runbooks tied to business metrics — not only CPU graphs — so Toronto on-call teams know when checkout, API latency or batch jobs actually fail, and can trace root cause quickly.',
      },
    ],
    localFaqs: [
      {
        q: 'Do you help Toronto fintech teams pass SOC 2 or PCI reviews?',
        a: 'We implement the infrastructure controls auditors commonly ask for: access management, logging, encryption, backup and tested disaster recovery. We do not issue SOC 2 reports ourselves, but we deliver the evidence and runbooks your assessor needs.',
      },
      {
        q: 'Can our cloud data stay in Canada for Toronto users?',
        a: 'Yes. We default to Canadian AWS or Azure regions where your workload allows, document data flows and configure services so primary storage and backups remain in-country unless you explicitly need a global edge.',
      },
      {
        q: 'What does cloud and DevOps work cost in Toronto?',
        a: 'A focused migration or CI/CD engagement often starts in the mid tens of thousands CAD; larger multi-environment platforms run higher. Pricing is the same across Canada — no Toronto premium. You receive a fixed scope and price after an architecture review.',
      },
      {
        q: 'Do you have engineers in Toronto?',
        a: 'Mapletech Labs is headquartered in Edmonton, and we serve Toronto clients remotely with overlapping hours. We travel to Toronto for kickoffs and major architecture reviews when in-person work helps, with travel agreed up front.',
      },
    ],
  },
  'calgary/cloud-devops': {
    intro:
      'Calgary cloud projects often connect field data, SCADA historians and corporate ERPs across the energy corridor — with seasonal load on logistics platforms and strict expectations around Canadian data residency. Mapletech Labs is an Alberta company headquartered in Edmonton, about three hours from Calgary, so Calgary clients get the same senior engineers with Alberta-aligned hours and on-site architecture workshops when a migration or launch needs them.',
    applications: [
      {
        industry: 'Energy',
        title: 'High-availability cloud for operations-adjacent workloads',
        desc: 'Pipelines that ingest sensor and historian data from remote sites, with disaster recovery that has been tested — not only documented — before production cutover.',
      },
      {
        industry: 'Finance',
        title: 'Secure cloud for Calgary finance and insurance teams',
        desc: 'Encrypted landing zones, audit logging and backup policies aligned with how Alberta financial firms actually run vendor and internal reviews.',
      },
      {
        industry: 'Transportation',
        title: 'Real-time telematics and event streaming',
        desc: 'Ingestion and API layers that keep dispatch and fleet systems running when partner feeds lag or fail, instead of silent data gaps in the yard.',
      },
      {
        industry: 'Logistics',
        title: 'Seasonal scaling for corridor logistics platforms',
        desc: 'Infrastructure that scales for harvest and construction peaks and scales down in quiet months so Calgary operators are not paying peak prices year-round.',
      },
    ],
    localSections: [
      {
        heading: 'Field-to-cloud data pipelines',
        body:
          'We design ingestion from plants, wells and vehicles through secure edge gateways into AWS or Azure, with OT/IT separation your security team can approve and monitoring that flags sync backlog before operations notice.',
      },
      {
        heading: 'Tested disaster recovery for Alberta operators',
        body:
          'Runbooks, backup verification and game-day failover exercises — especially for energy and logistics clients — so a region outage does not become a multi-day manual recovery on spreadsheets.',
      },
    ],
    localFaqs: [
      {
        q: 'Do you work on-site with Calgary energy and logistics teams?',
        a: 'Yes. We travel to Calgary for discovery, architecture workshops and major cutovers. Day-to-day delivery runs on shared boards and calls in the Mountain time zone, with the same engineers throughout the project.',
      },
      {
        q: 'Can Calgary cloud workloads stay in Canadian regions?',
        a: 'Yes. We host primary workloads and backups in Canadian cloud regions by default and document cross-border flows if a global CDN or SaaS tool is required.',
      },
      {
        q: 'What does cloud migration cost for a Calgary company?',
        a: 'Cost depends on how many environments, integrations and compliance controls you need. A bounded migration with CI/CD often lands in the mid tens of thousands CAD; larger multi-site energy platforms run higher. You get a fixed CAD quote after an architecture review, not open-ended hourly billing.',
      },
      {
        q: 'Why hire an Alberta team for Calgary cloud work?',
        a: 'We are headquartered in Edmonton and understand Alberta procurement, data residency expectations and the operational rhythm of energy and logistics clients. Calgary projects get senior engineers directly — no offshore handoff — and pricing in CAD with scope fixed up front.',
      },
    ],
  },
};

/**
 * Lowercase a name for mid-sentence use, but leave acronyms and internally
 * capitalised names intact: "Mobile Apps" -> "mobile apps", while "AI / ML",
 * "AR / VR", "SaaS" and "WordPress" are kept exactly as written.
 */
function proseName(name: string): string {
  return name
    .split(' ')
    .map(w => (/^[A-Z][a-z]+$/.test(w) ? w.toLowerCase() : w))
    .join(' ');
}

/** "a, b and c" — Oxford-free, matches the prose style used across the site. */
function humanList(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/**
 * The content that belongs to this city *and* this service, rather than to
 * either one alone. Everything here changes when you change either axis.
 */
export function getCityServiceIntersection(
  city: CityData,
  service: ServiceData
): CityServiceIntersection {
  const angles = SERVICE_INDUSTRY_ANGLES[service.slug] ?? {};

  const applications: IndustryApplication[] = [];
  const seenGroups = new Set<IndustryGroup>();
  for (const label of city.localIndustries) {
    const group = industryGroupOf(label);
    const desc = group ? angles[group] : undefined;
    if (!group || !desc || seenGroups.has(group)) continue;
    seenGroups.add(group);
    applications.push({
      industry: label,
      title: `${service.shortName} for ${city.name}'s ${label} sector`,
      desc,
    });
  }

  const industryList = humanList(city.localIndustries);
  const shortLower = proseName(service.shortName);

  const intro =
    `${service.name} in ${city.name} runs into a different set of constraints than it does elsewhere in ` +
    `${city.province}. The local economy leans on ${industryList}, and each of those carries its own ` +
    `regulatory, operational and seasonal realities that shape what gets built and how it gets delivered. ` +
    `Below is how we approach ${shortLower} for each of them` +
    (city.isHQ
      ? `, from our head office here in ${city.name}.`
      : `, with a delivery model built around ${city.name} clients.`);

  const firstStep = service.steps[0];
  const lastStep = service.steps[service.steps.length - 1];
  const entryTier = service.pricingTiers[0];

  const localFaqs = [
    {
      q: `Which ${city.name} industries do you build ${shortLower} for?`,
      a:
        `We work across ${city.name}'s core sectors — ${industryList}. ` +
        `Each one needs something different from ${shortLower}: ${applications
          .slice(0, 2)
          .map(a => `${proseName(a.industry)} work centres on ${a.desc.charAt(0).toLowerCase()}${a.desc.slice(1, a.desc.indexOf(',') > 0 ? a.desc.indexOf(',') : 80).trim()}`)
          .join(', while ')}. ` +
        `We scope against the sector, not against a generic template.`,
    },
    {
      q: `Do you work on-site with ${city.name} teams?`,
      a: city.isHQ
        ? `Yes. ${city.name} is our head office, so ${city.name} clients get in-person kickoffs, sprint reviews and workshops as standard, ` +
          `with the same engineers on the project from discovery through launch.`
        : `Yes. We run ${city.name} projects with remote-first delivery and travel in for kickoffs, major reviews and launch support. ` +
          `Working hours are aligned to ${city.province}, so you are not waiting overnight for answers, and the same engineers stay on the project throughout.`,
    },
    {
      q: `What does a ${shortLower} project cost and how long does it take in ${city.name}?`,
      a:
        `${entryTier ? `Engagements typically start in the ${entryTier.range} range for a ${entryTier.name.toLowerCase()} scope` : 'Pricing depends on scope'}, ` +
        `and pricing is the same wherever you are in Canada — there is no ${city.name} premium. ` +
        `${firstStep ? `We begin with ${firstStep.title.toLowerCase()} (${firstStep.duration})` : 'We begin with a discovery phase'}` +
        `${lastStep ? ` and finish at ${lastStep.title.toLowerCase()}` : ''}. ` +
        `You get a fixed scope and timeline in writing before any build work starts.`,
    },
  ];

  const pairKey = `${city.slug}/${service.slug}`;
  const override = CITY_SERVICE_PAIR_OVERRIDES[pairKey];

  return {
    intro: override?.intro ?? intro,
    applications: override?.applications ?? applications,
    localSections: override?.localSections ?? [],
    localFaqs: override?.localFaqs ?? localFaqs,
  };
}
