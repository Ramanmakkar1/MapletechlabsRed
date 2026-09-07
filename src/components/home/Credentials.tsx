/* Recognition and compliance in one band instead of two card walls —
   both are credibility content, so they belong together. */
const awards = [
  { s: 'Clutch',           y: '2026', n: 'Top Generative AI Company' },
  { s: 'Clutch',           y: '2024', n: 'Top App Development Company' },
  { s: 'The Webby Awards', y: '2024', n: 'Webby Honoree' },
  { s: 'Google',           y: '2024', n: 'Best App Award — Personal Growth' },
  { s: 'AWS',              y: '2024', n: 'Advanced Tier Services Partner' },
  { s: 'Red Herring',      y: '2023', n: 'Top 100 North America' },
];

const compliance = [
  { t: 'Privacy',      i: ['PIPEDA', 'GDPR', 'HIPAA', 'CCPA'] },
  { t: 'Security',     i: ['SOC 2 Type II', 'ISO 27001', 'Zero trust'] },
  { t: 'AI governance',i: ['ISO 42001', 'AIDA-ready', 'Model cards'] },
  { t: 'Sector',       i: ['PCI DSS', 'HL7 / FHIR', 'OSFI'] },
  { t: 'Cloud',        i: ['Canadian data residency', 'AWS Well-Architected'] },
  { t: 'Accessibility',i: ['WCAG 2.2 AA', 'AODA'] },
];

export default function Credentials() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-ink)', color: 'var(--on-ink-body)' }}>
      <div className="cb-container credentials">
        <div>
          <h2 style={{ color: 'var(--on-ink)', marginBottom: 28 }}>Recognition</h2>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {awards.map(a => (
              <li key={a.n} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'baseline', padding: '16px 0', borderTop: '1px solid var(--line-ink)' }}>
                <span style={{ color: 'var(--on-ink)', fontWeight: 600 }}>{a.n}</span>
                <span style={{ fontSize: 13.5, color: 'var(--on-ink-muted)', whiteSpace: 'nowrap' }}>{a.s} · {a.y}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 style={{ color: 'var(--on-ink)', marginBottom: 28 }}>Compliance</h2>
          <p style={{ lineHeight: 1.7, marginBottom: 24, maxWidth: '46ch' }}>
            Regulation is a design constraint here, accounted for from the first
            architectural decision rather than audited in at the end.
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {compliance.map(c => (
              <li key={c.t} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20, padding: '16px 0', borderTop: '1px solid var(--line-ink)', alignItems: 'baseline' }}>
                <span style={{ color: 'var(--on-ink)', fontWeight: 600, fontSize: 14.5 }}>{c.t}</span>
                <span style={{ fontSize: 14, color: 'var(--on-ink-body)' }}>{c.i.join(' · ')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
