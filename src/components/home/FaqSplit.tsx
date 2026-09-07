'use client';
import { useState } from 'react';
import Link from 'next/link';
import { defaultFaqs } from '@/data/faqs';


/* Questions on divider rows, answers expanding in place. The answer text
   stays in the DOM for crawlers; only its height is animated. */
export default function FaqSplit({ faqs = defaultFaqs, title = 'Frequently asked questions' }: { faqs?: { q: string; a: string }[]; title?: string } = {}) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container faq-split">
        <div style={{ position: 'sticky', top: 110 }}>
          <h2 style={{ maxWidth: '12ch' }}>{title}</h2>
          <p className="lede" style={{ marginBottom: 28 }}>
            If your question is not here, a senior engineer will answer it within four hours.
          </p>
          <Link href="/contact" className="btn btn--ghost">Ask our team</Link>
        </div>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <li key={f.q} style={{ borderBottom: '1px solid var(--line)' }}>
                <h3 style={{ margin: 0 }}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    aria-controls={`faq-answer-${i}`}
                    style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 16, padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                  >
                    <span style={{ fontSize: 'clamp(16px, 1.3vw, 17.5px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{f.q}</span>
                    <span aria-hidden style={{ color: 'var(--brand)', fontSize: 24, lineHeight: 1, transform: on ? 'rotate(45deg)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}>+</span>
                  </button>
                </h3>
                <div id={`faq-answer-${i}`} hidden={!on}>
                  <p style={{ padding: '0 0 26px', color: 'var(--body)', lineHeight: 1.75, maxWidth: '66ch' }}>{f.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
