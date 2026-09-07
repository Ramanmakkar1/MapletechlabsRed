const items = [
  { t: 'Data Privacy & Protection',     d: 'Personal data is handled to the letter of Canadian and international law, with privacy reviews built into every sprint.', tags: ['PIPEDA', 'GDPR', 'HIPAA', 'CCPA'] },
  { t: 'Security & Risk Management',    d: 'Threat modelling, least-privilege access and audited controls across every environment we operate.', tags: ['SOC 2 Type II', 'ISO 27001', 'Zero Trust'] },
  { t: 'AI & Technology Governance',    d: 'Model evaluation, human oversight and audit trails so AI systems stay transparent and accountable.', tags: ['ISO 42001', 'AIDA-ready', 'Model cards'] },
  { t: 'Industry-Specific Standards',   d: 'The regulations your sector answers to are designed in from the first architecture decision.', tags: ['PCI DSS', 'HL7 / FHIR', 'OSFI'] },
  { t: 'Cloud & SaaS Compliance',       d: 'Regional data residency, encryption at rest and in transit, and tenant isolation on every platform we ship.', tags: ['Canadian data residency', 'AWS Well-Architected'] },
  { t: 'Accessibility',                 d: 'Every interface we deliver is built and tested against WCAG so it works for everyone, and passes AODA audits.', tags: ['WCAG 2.2 AA', 'AODA'] },
];

/* Six compliance areas as a level three-across grid — every item's copy
   and tags visible, instead of an accordion that shows one and hides five.
   Keeps its filename so nothing that imports it has to change. */
export default function ComplianceAccordion() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(26px, 3.5vw, 44px)' }}>
          <span className="section-tag">Compliance</span>
          <h2 style={{ margin: 0 }}>Building With Compliance and Security in Mind</h2>
          <p style={{ color: 'var(--body)', lineHeight: 1.7, marginTop: 14, maxWidth: '60ch' }}>We integrate compliance into every layer of the engineering process, so your business can meet complex regulations while keeping both security and performance.</p>
        </div>
        <div className="svc-grid">
          {items.map((it, i) => (
            <article key={it.t} className="card card--flat" style={{ display: 'flex', flexDirection: 'column', background: 'var(--surface-alt)' }}>
              <span className="idx">[ {String(i + 1).padStart(2, '0')} ]</span>
              <h3 className="clamp-2" style={{ fontSize: 'var(--fs-h4)', margin: '14px 0 8px' }}>{it.t}</h3>
              <p className="clamp-3" style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7, marginBottom: 16 }}>{it.d}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
                {it.tags.map(t => <span key={t} className="pill pill--brand" style={{ height: 28, fontSize: 12 }}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
