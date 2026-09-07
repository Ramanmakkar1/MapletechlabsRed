'use client';
import { useState } from 'react';
import Link from 'next/link';

const defaultFaqs = [
  { q: 'How long does a typical project take?', a: 'A focused MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. Every project starts with a scoping session where we give you a precise timeline with fixed milestones.' },
  { q: 'How do you price your projects?', a: 'We work on a fixed-scope, fixed-price model. No hourly billing, no scope-creep surprises. You know exactly what you are getting and what it costs before we write a line of code.' },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. We have a Rapid Launch programme for early-stage startups (8 weeks, fixed price) and dedicated enterprise teams for complex multi-year engagements.' },
  { q: 'Who owns the code and IP?', a: 'You do — 100%. Full source code, all intellectual property and credentials transfer to you on final payment. We sign an IP assignment agreement on day one.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. Tiered SLAs from Essential (bug fixes and monitoring) to Scale (a dedicated engineering team with 24/7 response). Most clients stay with us long after launch.' },
  { q: 'Can you work with our existing team?', a: 'Absolutely. We regularly augment internal teams, do code reviews, architect complex systems and fill specialist gaps — a full partner or an extension of your team.' },
];

/* Ink CTA card left, numbered accordion right. */
export default function FaqSplit({ faqs = defaultFaqs, title = 'Frequently Asked Questions' }: { faqs?: { q: string; a: string }[]; title?: string } = {}) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <h2 style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>{title}</h2>
        <div className="faq-split">
          <div style={{ background: 'var(--surface-ink)', color: 'var(--on-ink-body)', borderRadius: 'var(--r-lg)', padding: 'clamp(28px, 4vw, 44px)', position: 'sticky', top: 100 }}>
            <h3 style={{ color: '#fff', fontSize: 'var(--fs-h3)', marginBottom: 12 }}>Didn&apos;t find what you were looking for?</h3>
            <p style={{ lineHeight: 1.7, marginBottom: 24 }}>We have more answers waiting. If your question did not make the list, a senior engineer will get back to you within four hours.</p>
            <Link href="/contact" className="btn btn--on-ink">Ask Our Team</Link>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {faqs.map((f, i) => {
              const on = open === i;
              return (
                <li key={f.q} style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', marginBottom: 10 }}>
                  <button className="faq-question-btn" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} style={{ width: '100%', display: 'grid', gridTemplateColumns: '48px 1fr auto', alignItems: 'center', gap: 12, padding: '20px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                    <span className="idx">[ {i + 1} ]</span>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>{f.q}</span>
                    <span style={{ color: 'var(--brand)', fontSize: 22, lineHeight: 1, transform: on ? 'rotate(45deg)' : 'none', transition: 'transform .25s' }}>+</span>
                  </button>
                  {on && <p style={{ padding: '0 22px 22px 82px', color: 'var(--body)', lineHeight: 1.7 }}>{f.a}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
