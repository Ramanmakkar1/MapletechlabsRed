/**
 * The fallback FAQ set, in a plain data module rather than inside the
 * client component that renders it. A `'use client'` module's exports become
 * client references across a server boundary, so importing the array from
 * FaqSplit gave the schema component nothing to serialise.
 */
export interface Faq {
  q: string;
  a: string;
}

export const defaultFaqs: Faq[] = [
  {
    q: 'How long does a typical project take?',
    a: 'A focused MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. Every project starts with a scoping session where we give you a precise timeline with fixed milestones.',
  },
  {
    q: 'How do you price your projects?',
    a: 'We work on a fixed-scope, fixed-price model. No hourly billing, no scope-creep surprises. You know exactly what you are getting and what it costs before we write a line of code.',
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'Both. We have a Rapid Launch programme for early-stage startups (8 weeks, fixed price) and dedicated enterprise teams for complex multi-year engagements.',
  },
  {
    q: 'Who owns the code and IP?',
    a: 'You do — 100%. Full source code, all intellectual property and credentials transfer to you on final payment. We sign an IP assignment agreement on day one.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. Tiered SLAs from Essential (bug fixes and monitoring) to Scale (a dedicated engineering team with 24/7 response). Most clients stay with us long after launch.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely. We regularly augment internal teams, do code reviews, architect complex systems and fill specialist gaps — a full partner or an extension of your team.',
  },
];
