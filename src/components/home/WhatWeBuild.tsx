import Link from 'next/link';

/* Six capabilities, three and three. Every card holds the same
   shape of content so a row can never end ragged. */
const build = [
  { href: '/services/web-development',        t: 'Web platforms',      d: 'Cloud-native web applications and enterprise portals on React, Next.js and Node.' },
  { href: '/services/mobile-app-development', t: 'Mobile apps',        d: 'Native iOS and Android alongside Flutter and React Native, built to pass review and scale.' },
  { href: '/services/ai-ml',                  t: 'AI & automation',    d: 'LLM integrations, agents and machine learning applied where they remove real work.' },
  { href: '/services/saas-development',       t: 'SaaS products',      d: 'Multi-tenant products with billing, analytics and the operational tooling to run them.' },
  { href: '/services/cloud-devops',           t: 'Cloud & DevOps',     d: 'AWS and Google Cloud environments on zero-trust foundations, with CI/CD that holds.' },
  { href: '/services/product-design',         t: 'Product design',     d: 'Research, interface design and prototypes that settle the hard questions before build.' },
];

const also = [
  { href: '/services/blockchain-web3', t: 'Blockchain & Web3' },
  { href: '/services/ar-vr', t: 'AR / VR' },
  { href: '/services/game-development', t: 'Game development' },
  { href: '/services/digital-marketing', t: 'Digital marketing' },
  { href: '/services/branding', t: 'Branding' },
  { href: '/services/wordpress-cms', t: 'WordPress & CMS' },
];

export default function WhatWeBuild() {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2>What we build</h2>
            <p className="lede">Six core capabilities, one team. Most engagements combine two or three of them.</p>
          </div>
          <Link href="/services" className="btn btn--ghost">View all services</Link>
        </div>

        <div className="grid grid--3">
          {build.map(b => (
            <Link key={b.href} href={b.href} className="tile rise">
              <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12 }}>{b.t}</h3>
              <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7 }}>{b.d}</p>
              <span className="tile__foot link-arrow" style={{ paddingTop: 22, fontSize: 14 }}>
                Explore
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
              </span>
            </Link>
          ))}
        </div>

        <p style={{ marginTop: 28, fontSize: 14, color: 'var(--muted)', lineHeight: 2 }}>
          Also delivered:{' '}
          {also.map((a, i) => (
            <span key={a.href}>
              <Link href={a.href} style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>{a.t}</Link>
              {i < also.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
