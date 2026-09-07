'use client';
import { useState } from 'react';

const items = [
  { t: 'Data Privacy & Protection',     d: 'Personal data is handled to the letter of Canadian and international law, with privacy reviews built into every sprint.', tags: ['PIPEDA', 'GDPR', 'HIPAA', 'CCPA'] },
  { t: 'Security & Risk Management',    d: 'Threat modelling, least-privilege access and audited controls across every environment we operate.', tags: ['SOC 2 Type II', 'ISO 27001', 'Zero Trust'] },
  { t: 'AI & Technology Governance',    d: 'Model evaluation, human oversight and audit trails so AI systems stay transparent and accountable.', tags: ['ISO 42001', 'AIDA-ready', 'Model cards'] },
  { t: 'Industry-Specific Standards',   d: 'The regulations your sector answers to are designed in from the first architecture decision.', tags: ['PCI DSS', 'HL7 / FHIR', 'OSFI'] },
  { t: 'Cloud & SaaS Compliance',       d: 'Regional data residency, encryption at rest and in transit, and tenant isolation on every platform we ship.', tags: ['Canadian data residency', 'AWS Well-Architected'] },
  { t: 'Accessibility',                 d: 'Every interface we deliver is built and tested against WCAG so it works for everyone, and passes AODA audits.', tags: ['WCAG 2.2 AA', 'AODA'] },
];

/* Numbered [ 1 ]–[ 6 ] accordion beside the section copy. */
export default function ComplianceAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
        <div>
          <h2 style={{ marginBottom: 14 }}>Building With Compliance and Security in Mind</h2>
          <p style={{ color: 'var(--body)', lineHeight: 1.7, maxWidth: '52ch' }}>We integrate compliance into every layer of the engineering process, so your business can meet complex regulations while keeping both security and performance.</p>
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((it, i) => {
            const on = open === i;
            return (
              <li key={it.t} style={{ borderTop: '1px solid var(--line)' }}>
                <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} style={{ width: '100%', display: 'grid', gridTemplateColumns: '56px 1fr auto', alignItems: 'center', gap: 12, padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                  <span className="idx">[ {i + 1} ]</span>
                  <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)' }}>{it.t}</span>
                  <span style={{ color: 'var(--brand)', fontSize: 22, lineHeight: 1, transform: on ? 'rotate(45deg)' : 'none', transition: 'transform .25s' }}>+</span>
                </button>
                {on && (
                  <div style={{ padding: '0 0 22px 56px' }}>
                    <p style={{ color: 'var(--body)', lineHeight: 1.7, marginBottom: 14 }}>{it.d}</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{it.tags.map(t => <span key={t} className="pill pill--brand">{t}</span>)}</div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
