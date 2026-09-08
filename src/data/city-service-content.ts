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

export interface CityServiceIntersection {
  intro: string;
  applications: IndustryApplication[];
  localFaqs: { q: string; a: string }[];
}

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

  return { intro, applications, localFaqs };
}
