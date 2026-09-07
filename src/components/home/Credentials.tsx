import Image from 'next/image';

/**
 * Recognition and compliance were two columns of plain text, which is the
 * least convincing way to present proof. The awards now show the actual
 * badges, and each compliance area is its own tile with the standards set
 * as chips — two different shapes in one band.
 */
const awards: { src: string; n: string; s: string; y: string; light?: boolean }[] = [
  { src: '/awards/Clutch-Top-GenerativeAI-Company2026.png', n: 'Top Generative AI Company', s: 'Clutch', y: '2026' },
  { src: '/awards/top_clutch.co_app_development.webp',      n: 'Top App Development Company', s: 'Clutch', y: '2024' },
  { src: '/awards/bw_webby_honoree.webp',                   n: 'Webby Honoree', s: 'The Webby Awards', y: '2024' },
  { src: '/awards/google-app-award-1.png',                  n: 'Best App Award, Personal Growth', s: 'Google', y: '2024' },
  { src: '/awards/aws-advance-tier.svg',                    n: 'Advanced Tier Services Partner', s: 'AWS', y: '2024' },
  { src: '/awards/red-hirring.webp',                        n: 'Top 100 North America', s: 'Red Herring', y: '2023' },
];

const compliance = [
  { t: 'Privacy',        d: 'Personal data handled to the letter of Canadian and international law.', i: ['PIPEDA', 'GDPR', 'HIPAA', 'CCPA'] },
  { t: 'Security',       d: 'Threat modelling, least-privilege access and audited controls.',         i: ['SOC 2 Type II', 'ISO 27001', 'Zero trust'] },
  { t: 'AI governance',  d: 'Model evaluation, human oversight and an audit trail.',                  i: ['ISO 42001', 'AIDA-ready', 'Model cards'] },
  { t: 'Sector',         d: 'The regulations your industry answers to, designed in from day one.',    i: ['PCI DSS', 'HL7 / FHIR', 'OSFI'] },
  { t: 'Cloud',          d: 'Regional residency, encryption in transit and at rest, tenant isolation.', i: ['Canadian data residency', 'AWS Well-Architected'] },
  { t: 'Accessibility',  d: 'Built and tested so the people who need it can actually use it.',        i: ['WCAG 2.2 AA', 'AODA'] },
];

export default function Credentials() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-ink)', color: 'var(--on-ink-body)' }}>
      <div className="cb-container">

        {/* Recognition — the badges themselves, six across */}
        <div className="head">
          <div>
            <h2 style={{ color: 'var(--on-ink)' }}>Recognition</h2>
            <p className="lede" style={{ color: 'var(--on-ink-body)' }}>
              Independent awards and partner tiers, each one earned on delivered work.
            </p>
          </div>
        </div>

        <ul className="award-row">
          {awards.map(a => (
            <li key={a.n} className="rise">
              <div className={a.light ? 'award-badge award-badge--light' : 'award-badge'}>
                <Image src={a.src} alt={`${a.n}, ${a.s} ${a.y}`} fill sizes="200px" style={{ objectFit: 'contain' }} />
              </div>
              <p className="award-name">{a.n}</p>
              <p className="award-meta">{a.s} &middot; {a.y}</p>
            </li>
          ))}
        </ul>

        {/* Compliance — one tile per area, standards as chips */}
        <div className="head" style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <div>
            <h2 style={{ color: 'var(--on-ink)' }}>Compliance</h2>
            <p className="lede" style={{ color: 'var(--on-ink-body)' }}>
              Regulation is a design constraint here, accounted for from the first
              architectural decision rather than audited in at the end.
            </p>
          </div>
        </div>

        <div className="grid grid--3">
          {compliance.map(c => (
            <article key={c.t} className="tile tile--ink rise">
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <div className="tile__foot chips">
                {c.i.map(x => <span key={x}>{x}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
