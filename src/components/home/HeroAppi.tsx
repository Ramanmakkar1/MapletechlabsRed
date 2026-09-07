import Image from 'next/image';
import Link from 'next/link';
import { officeMedia } from '@/data/media';

const badges = [
  { src: '/awards/top_clutch.co_app_development.webp', alt: 'Clutch Top App Development Company' },
  { src: '/awards/Clutch-Top-GenerativeAI-Company2026.png', alt: 'Clutch Top Generative AI Company 2026' },
  { src: '/awards/aws-advance-tier.svg', alt: 'AWS Advanced Tier Services Partner' },
];

/* Full-bleed photograph, headline anchored bottom-left, floating award
   badges bottom-right — the reference hero, on a white ground. */
export default function HeroAppi() {
  return (
    <section style={{ background: 'var(--surface)', padding: 'var(--hero-top) 0 var(--section-y)' }}>
      <div className="cb-container hero-split">
        <div style={{ maxWidth: 640 }}>
          <span className="section-tag">Canadian Software &amp; AI Engineering Partner</span>
          <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.035em', margin: '0 0 22px' }}>
            Engineering the Next Generation of Digital Systems with AI
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'var(--body)', lineHeight: 1.7, maxWidth: 560, margin: '0 0 30px' }}>
            Mapletech Labs engineers secure, scalable digital products by combining strong architecture, data engineering and AI — taking Canadian businesses from strategy to reliable systems in production.
          </p>
          <div className="btn-group" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Consult Our Engineering Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
            </Link>
            <Link href="/case-studies" className="btn btn--ghost btn--lg">View Our Work</Link>
          </div>
        </div>

        {/* the photograph, uncovered, with the award badges on it */}
        <div className="media media--lg" style={{ position: 'relative', aspectRatio: '4 / 4.6', maxHeight: 620 }}>
          <Image src={officeMedia.open.src} alt={officeMedia.open.alt} fill priority sizes="(max-width: 1023px) 100vw, 46vw" style={{ objectFit: 'cover', objectPosition: '60% 40%' }} />
          <ul className="hide-mobile" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 10, position: 'absolute', left: 18, bottom: 18 }}>
            {badges.map(b => (
              <li key={b.src} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, width: 104, height: 72, position: 'relative', boxShadow: 'var(--shadow-md)' }}>
                <Image src={b.src} alt={b.alt} fill sizes="104px" style={{ objectFit: 'contain', padding: 10 }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
