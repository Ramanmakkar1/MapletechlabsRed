import Image from 'next/image';
import Link from 'next/link';
import { humanMedia } from '@/data/media';

const proof = [
  { v: '8+',   l: 'years building software' },
  { v: '500+', l: 'systems shipped' },
  { v: '99%',  l: 'client satisfaction' },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
);

/* Copy left, one large photograph right. Nothing decorative:
   the headline, one paragraph, two actions and the proof line. */
export default function Hero() {
  const m = humanMedia.analysts;
  return (
    <section style={{ padding: 'var(--hero-top) 0 var(--section-y)' }}>
      <div className="cb-container hero-split">
        <div>
          <h1 style={{ marginBottom: 24, maxWidth: '15ch' }}>
            Custom software that moves Canadian business forward.
          </h1>
          <p className="lede" style={{ marginTop: 0, marginBottom: 36, maxWidth: '46ch' }}>
            Mapletech Labs is a custom software development company in Canada, designing and building the digital products ambitious companies
            run on &mdash; web platforms, mobile apps and AI systems, engineered to last.
          </p>

          <div className="btn-group" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link href="/contact" className="btn btn--primary btn--lg">Start a project <Arrow /></Link>
            <Link href="/case-studies" className="btn btn--ghost btn--lg">See our work</Link>
          </div>

          {/* a grid, not a wrapping flex row: three across stays three across
              rather than breaking to 2 + 1 on a narrow screen */}
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(12px, 2vw, 32px)', margin: 0, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
            {proof.map(p => (
              <div key={p.l}>
                <dt style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1 }}>{p.v}</dt>
                <dd style={{ margin: '8px 0 0', fontSize: 13.5, color: 'var(--muted)' }}>{p.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="media media--lg fade" style={{ aspectRatio: '4 / 4.4' }}>
          <Image src={m.src} alt={m.alt} fill priority sizes="(max-width: 1023px) 100vw, 46vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
