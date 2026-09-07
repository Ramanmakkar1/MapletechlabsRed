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
    <section style={{ position: 'relative', minHeight: 'min(88vh, 820px)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: 'var(--surface)' }}>
      <Image src={officeMedia.open.src} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: '70% 40%' }} />
      {/* white scrim so the headline reads over the photo */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.92) 34%, rgba(255,255,255,.55) 60%, rgba(255,255,255,.08) 100%)' }} />
      <div aria-hidden style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 200, background: 'linear-gradient(to top, rgba(255,255,255,.9), transparent)' }} />

      <div className="cb-container" style={{ paddingTop: 'var(--hero-top)', paddingBottom: 'clamp(48px, 6vw, 80px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
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

        <ul className="hide-mobile" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 12 }}>
          {badges.map(b => (
            <li key={b.src} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 10, width: 108, height: 78, position: 'relative', boxShadow: 'var(--shadow-md)' }}>
              <Image src={b.src} alt={b.alt} fill sizes="108px" style={{ objectFit: 'contain', padding: 10 }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
