import Image from 'next/image';
import Link from 'next/link';
import { work } from '@/data/work';

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
);

/* Three case studies at full width, alternating side to side, so the
   work reads as portfolio pieces rather than another card row. */
export default function FeaturedWork() {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2>Selected work</h2>
            <p className="lede">Three platforms we designed, built and still support.</p>
          </div>
          <Link href="/case-studies" className="btn btn--ghost">All case studies</Link>
        </div>

        <div style={{ display: 'grid', gap: 'clamp(48px, 7vw, 104px)' }}>
          {work.slice(0, 3).map((w, i) => (
            <article key={w.slug} className={`case-row rise${i % 2 ? ' case-row--flip' : ''}`}>
              <Link href={w.href} className="media media--lg media--zoom" style={{ aspectRatio: '4 / 3' }} aria-label={`${w.title} case study`}>
                <Image src={w.media.src} alt={w.media.alt} fill sizes="(max-width: 1023px) 100vw, 52vw" style={{ objectFit: 'cover' }} />
              </Link>
              <div className="case-row__copy">
                <p style={{ fontSize: 13.5, color: 'var(--brand)', fontWeight: 600, marginBottom: 14 }}>{w.category} &middot; {w.city}</p>
                <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16, maxWidth: '18ch' }}>{w.title}</h3>
                <p style={{ color: 'var(--body)', lineHeight: 1.75, marginBottom: 28, maxWidth: '46ch' }}>{w.desc}</p>
                <dl style={{ display: 'flex', gap: 'clamp(28px, 4vw, 52px)', margin: '0 0 30px', flexWrap: 'wrap' }}>
                  {w.metrics.map(m => (
                    <div key={m.label}>
                      <dt style={{ fontSize: 'clamp(1.6rem, 2.3vw, 2.1rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.045em', lineHeight: 1 }}>{m.value}</dt>
                      <dd style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--muted)' }}>{m.label}</dd>
                    </div>
                  ))}
                </dl>
                <Link href={w.href} className="link-arrow">Read the case study <Arrow /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
