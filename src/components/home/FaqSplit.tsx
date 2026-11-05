import Link from 'next/link';
import { defaultFaqs } from '@/data/faqs';

/* Questions on divider rows, answers expanding in place. Native
   details/summary keep every answer reachable before JavaScript loads. */
export default function FaqSplit({ faqs = defaultFaqs, title = 'Frequently asked questions' }: { faqs?: { q: string; a: string }[]; title?: string } = {}) {
  return (
    <section id="faq" style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container faq-split">
        <div style={{ position: 'sticky', top: 110 }}>
          <h2 style={{ maxWidth: '12ch' }}>{title}</h2>
          <p className="lede" style={{ marginBottom: 28 }}>
            If your question is not here, a senior engineer will answer it within one working day.
          </p>
          <Link href="/contact" className="btn btn--ghost">Ask our team</Link>
        </div>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
          {faqs.map((f, i) => (
            <li key={f.q} style={{ borderBottom: '1px solid var(--line)' }}>
              <details className="faq-item" open={i === 0}>
                <summary className="faq-question-btn">
                  <h3 className="faq-q">{f.q}</h3>
                  <span aria-hidden className="faq-plus">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
