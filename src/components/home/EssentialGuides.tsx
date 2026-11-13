import Link from 'next/link';

/* Six high-intent guides, linked from the homepage so crawlers reach the
   money pages through a strong hub instead of only through the blog index. */
const guides = [
  {
    href: '/about',
    t: 'About Mapletech Labs',
    d: 'Who we are, the team behind the work, and how we deliver software across Canada.',
  },
  {
    href: '/blog/app-development-cost-canada',
    t: 'App development cost in Canada',
    d: 'What drives the price of an app, with realistic ranges for each build stage.',
  },
  {
    href: '/blog/build-saas-mvp-8-weeks',
    t: 'How to build a SaaS MVP in 8 weeks',
    d: 'A practical week-by-week plan for scoping, building and launching a focused SaaS product.',
  },
  {
    href: '/blog/agentic-ai-in-production',
    t: 'Agentic AI in production: what works',
    d: 'Where AI agents earn their keep, where they fail and how to deploy them with the right guardrails.',
  },
  {
    href: '/blog/saas-development-company-canada',
    t: 'Choosing a SaaS development company',
    d: 'How to compare Canadian SaaS teams on proof, process and long-term support.',
  },
  {
    href: '/blog/choose-software-development-company-canada',
    t: 'How to choose a software company',
    d: 'The questions, red flags and contract terms that separate a partner from a vendor.',
  },
  {
    href: '/blog/custom-software-vs-off-the-shelf',
    t: 'Custom software vs off-the-shelf',
    d: 'When a packaged tool is the right call, and when custom software pays for itself.',
  },
];

export default function EssentialGuides() {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2>Essential guides</h2>
            <p className="lede">Start with the reading that answers the questions buyers ask us most.</p>
          </div>
          <Link href="/blog" className="btn btn--ghost">Browse all guides</Link>
        </div>
        <div className="grid grid--3">
          {guides.map(g => (
            <Link key={g.href} href={g.href} className="tile rise">
              <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12 }}>{g.t}</h3>
              <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7 }}>{g.d}</p>
              <span className="tile__foot link-arrow" style={{ paddingTop: 22, fontSize: 14 }}>
                Read the guide
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
