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
  fintech: { src: `${S}/work-fintech.webp`, alt: 'Live market data on a trading dashboard and companion mobile app' },
  healthcare: { src: `${S}/ind-healthcare.webp`, alt: 'Doctor reviewing a diagnostic scan on a tablet' },
  ecommerce: { src: `${S}/human-delivery.webp`, alt: 'A shopper paying by phone at a small retail counter' },
  logistics: { src: `${S}/ind-logistics.webp`, alt: 'Forklift moving pallets through a distribution centre' },
  edtech: { src: `${S}/ind-edtech.webp`, alt: 'A student working through coursework at a computer' },
  enterprise: { src: `${S}/human-boardroom.webp`, alt: 'An engineering team talking at their desks in an open studio' },
};

export const blogMedia: Media[] = [
  { src: `${S}/blog-team.webp`, alt: 'A team reviewing work together around a laptop' },
  { src: `${S}/human-planning.webp`, alt: 'A team mapping out a project across a wall of notes' },
  { src: `${S}/blog-code.webp`, alt: 'Two engineers working on code at their monitors' },
  { src: `${S}/human-whiteboard.webp`, alt: 'An engineer sketching a system diagram on a whiteboard' },
  { src: `${S}/blog-collab.webp`, alt: 'Four colleagues collaborating around a laptop' },
  { src: `${S}/human-numbers.webp`, alt: 'Two people going through the numbers together' },
  { src: `${S}/blog-desk.webp`, alt: 'A developer writing code at a workspace' },
  { src: `${S}/human-meeting.webp`, alt: 'A project meeting in progress around a long table' },
  { src: `${S}/blog-review.webp`, alt: 'A group reviewing a design on a laptop screen' },
  { src: `${S}/human-review.webp`, alt: 'Colleagues reviewing performance figures on a laptop' },
  { src: `${S}/human-app.webp`, alt: 'A mobile app open on a phone in someone\u2019s hand' },
  { src: `${S}/human-desk.webp`, alt: 'A quiet desk by the window at the start of the day' },
  { src: `${S}/human-devs.webp`, alt: 'Two developers pairing on a problem at a shared screen' },
  { src: `${S}/human-team.webp`, alt: 'A product team working across laptops around one table' },
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
export const defaultMedia: Media = { src: `${S}/human-team.webp`, alt: 'A product team working across laptops around one table' };

/* Page heroes point here. Empty rooms said nothing, so these are the
   working situations the rooms exist for. */
export const officeMedia: Record<string, Media> = {
  open: { src: `${S}/human-boardroom.webp`, alt: 'An engineering team talking through a problem at their desks' },
  meeting: { src: `${S}/human-standup.webp`, alt: 'A project review around a table in the morning light' },
  desk: { src: `${S}/human-studio.webp`, alt: 'A quiet studio corridor with glass-walled meeting rooms' },
};


/* ── Editorial human photography ──────────────────────────
   The site's story is what technology does for people, so these
   carry the image-led sections. Natural light, real working
   situations, no staged handshakes and no synthetic people. */
export const humanMedia = {
  analysts:  { src: `${S}/human-analyst.webp`,   alt: 'Two engineers reviewing code together at a bright office desk' },
  team:      { src: `${S}/human-team.webp`,      alt: 'A product team working across laptops around one table' },
  workshop:  { src: `${S}/human-workshop.webp`,  alt: 'Four colleagues talking through an idea over a tablet' },
  standup:   { src: `${S}/human-standup.webp`,   alt: 'A working session around a table, notes and coffee in the morning light' },
  office:    { src: `${S}/human-boardroom.webp`, alt: 'An engineering team talking at their desks in an open studio' },
  pairing:   { src: `${S}/human-devs.webp`,      alt: 'Two developers pairing on a problem at a shared screen' },
  designer:  { src: `${S}/human-designer.webp`,  alt: 'A designer sketching interface wireframes on a tablet' },
  studio:    { src: `${S}/human-studio.webp`,    alt: 'A calm studio corridor with glass-walled meeting rooms' },
  checkout:  { src: `${S}/human-delivery.webp`,  alt: 'A shopper paying by phone at a small retail counter' },
  founder:   { src: `${S}/human-mobile.webp`,    alt: 'A founder working through the day at her laptop' },
  planning:  { src: `${S}/human-planning.webp`,  alt: 'A team mapping out a project across a wall of notes' },
  whiteboard:{ src: `${S}/human-whiteboard.webp`,alt: 'An engineer sketching a system diagram on a whiteboard' },
  review:    { src: `${S}/human-review.webp`,    alt: 'Colleagues reviewing performance figures on a laptop' },
  meeting:   { src: `${S}/human-meeting.webp`,   alt: 'A project meeting in progress around a long table' },
  desk:      { src: `${S}/human-desk.webp`,      alt: 'A quiet desk by the window at the start of the day' },
  app:       { src: `${S}/human-app.webp`,       alt: 'A mobile app open on a phone in someone\u2019s hand' },
  numbers:   { src: `${S}/human-numbers.webp`,   alt: 'Two people going through the numbers together' },
} satisfies Record<string, Media>;

/**
 * Deterministic rotation: the same page always gets the same photograph, and
 * `nth` steps to a different one rather than re-hashing, so two calls on one
 * page can never land on the same image.
 */
const humanKeys = ['planning', 'whiteboard', 'review', 'meeting', 'desk', 'app', 'numbers', 'team', 'workshop', 'pairing', 'designer', 'studio'] as const;
export const humanPick = (seed: string, nth = 0): Media => {
  let n = 0;
  for (let i = 0; i < seed.length; i++) n = (n * 31 + seed.charCodeAt(i)) >>> 0;
  return humanMedia[humanKeys[(n + nth) % humanKeys.length]];
};

/** Deterministic pick so a card always gets the same photo across renders. */
export const blogImage = (i: number): Media => blogMedia[i % blogMedia.length];
