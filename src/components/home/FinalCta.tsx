import Link from 'next/link';

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
);

/* One headline, one line of copy, one action. Every page closes here. */
export default function FinalCta({
  title = 'Let\u2019s build something worth keeping.',
  sub = 'Tell us what you are trying to build. A senior engineer will come back within four hours with a scope, a timeline and a fixed price.',
  cta = 'Start a project',
}: { title?: string; sub?: string; cta?: string } = {}) {
  return (
    <section style={{ padding: 'var(--section-y-lg) 0', background: 'var(--surface-ink)', color: 'var(--on-ink-body)', textAlign: 'center' }}>
      <div className="cb-container" style={{ maxWidth: 900 }}>
        <h2 style={{ color: 'var(--on-ink)', fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', marginBottom: 22 }}>
          {title}
        </h2>
        <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.7, margin: '0 auto 36px', maxWidth: '52ch' }}>
          {sub}
        </p>
        <div className="btn-group" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn--on-ink btn--lg">{cta} <Arrow /></Link>
          <a href="tel:+14036048692" className="btn btn--ghost-on-ink btn--lg">+1 (403) 604-8692</a>
        </div>
      </div>
    </section>
  );
}
