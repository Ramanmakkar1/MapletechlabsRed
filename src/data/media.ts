/**
 * Central image manifest.
 *
 * Every photo below is from Unsplash under the Unsplash Licence: free for
 * commercial use, no attribution required, no permission needed.
 * https://unsplash.com/license
 *
 * These are placeholders standing in for real work. When Mapletech project
 * screenshots, team photos or office shots are available, drop the file into
 * public/images/ and change the `src` here — nothing else needs to change.
 */

export interface Media {
  src: string;
  alt: string;
  /** true once this points at genuine Mapletech material rather than stock */
  own?: boolean;
}

const S = '/images/stock';

export const workMedia: Record<string, Media> = {
  fintech: { src: `${S}/work-fintech.webp`, alt: 'Live market data on a trading dashboard and companion mobile app' },
  healthcare: { src: `${S}/work-healthcare.webp`, alt: 'Two clinicians reviewing patient data on a tablet' },
  logistics: { src: `${S}/work-logistics.webp`, alt: 'Warehouse operator handling a package during fulfilment' },
  retail: { src: `${S}/work-retail.webp`, alt: 'Customer paying by contactless card at checkout' },
  ecommerce: { src: `${S}/work-ecommerce.webp`, alt: 'Shopper completing an online purchase by card' },
  realestate: { src: `${S}/work-realestate.webp`, alt: 'Modern apartment tower shot from street level' },
};

/** Case-study slug -> photo. */
export const caseStudyMedia: Record<string, Media> = {
  'fintech-trading-platform': workMedia.fintech,
  'healthcare-telehealth': workMedia.healthcare,
  'ecommerce-platform': workMedia.ecommerce,
  'logistics-platform': workMedia.logistics,
  'payments-api-platform': workMedia.retail,
  'real-estate-portal': workMedia.realestate,
};

export const industryMedia: Record<string, Media> = {
  fintech: { src: `${S}/ind-fintech.webp`, alt: 'Desk with a keyboard, calculator and tablet showing market charts' },
  healthcare: { src: `${S}/ind-healthcare.webp`, alt: 'Doctor reviewing a diagnostic scan on a tablet' },
  ecommerce: { src: `${S}/ind-ecommerce.webp`, alt: 'Packed cartons ready for despatch' },
  logistics: { src: `${S}/ind-logistics.webp`, alt: 'Forklift moving pallets through a distribution centre' },
  edtech: { src: `${S}/ind-edtech.webp`, alt: 'Student working through coursework at a computer' },
  enterprise: { src: `${S}/ind-enterprise.webp`, alt: 'Open-plan enterprise office with rows of workstations' },
};

export const blogMedia: Media[] = [
  { src: `${S}/blog-team.webp`, alt: 'Team reviewing work together around a laptop' },
  { src: `${S}/blog-code.webp`, alt: 'Two engineers working on code at their monitors' },
  { src: `${S}/blog-collab.webp`, alt: 'Four colleagues collaborating around a laptop' },
  { src: `${S}/blog-desk.webp`, alt: 'Developer writing code at a workspace' },
  { src: `${S}/blog-review.webp`, alt: 'Group reviewing a design on a laptop screen' },
];

/** Service category slug -> photo, for the band under each service hero. */
export const serviceMedia: Record<string, Media> = {
  'mobile-app-development': { src: `${S}/svc-mobile.webp`,     alt: 'Mobile dashboard running on a smartphone' },
  'web-development':        { src: `${S}/blog-code.webp`,      alt: 'Engineers building a web platform at their monitors' },
  'ai-ml':                  { src: `${S}/svc-ai.webp`,         alt: 'Source code on a developer monitor' },
  'cloud-devops':           { src: `${S}/svc-cloud.webp`,      alt: 'Network cabling inside a data centre' },
  'blockchain-web3':        { src: `${S}/svc-blockchain.webp`, alt: 'Abstract distributed-ledger node network' },
  'product-design':         { src: `${S}/svc-design.webp`,     alt: 'Designer sketching interface concepts' },
  'saas-development':       { src: `${S}/svc-saas.webp`,       alt: 'SaaS analytics dashboard on a laptop' },
  'digital-marketing':      { src: `${S}/svc-marketing.webp`,  alt: 'Campaign performance metrics on screen' },
  'ar-vr':                  { src: `${S}/blog-team.webp`,      alt: 'Team reviewing an immersive prototype' },
  'game-development':       { src: `${S}/svc-game.webp`,       alt: 'Game controller lit in red' },
  'wordpress-cms':          { src: `${S}/blog-desk.webp`,      alt: 'Developer working on a content site' },
  'branding':               { src: `${S}/blog-collab.webp`,    alt: 'Team working through brand direction' },
};

/** Fallback so a page never renders an empty band. */
export const defaultMedia: Media = { src: `${S}/office-open.webp`, alt: 'Mapletech Labs studio' };

export const officeMedia: Record<string, Media> = {
  open: { src: `${S}/office-open.webp`, alt: 'Open-plan studio with white desks and glass partitions' },
  meeting: { src: `${S}/office-meeting.webp`, alt: 'Conference room set for a project review' },
  desk: { src: `${S}/office-desk.webp`, alt: 'Engineer working across multiple monitors' },
};

/** Deterministic pick so a card always gets the same photo across renders. */
export const blogImage = (i: number): Media => blogMedia[i % blogMedia.length];
