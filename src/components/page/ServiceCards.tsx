import Link from 'next/link';
import type { ReactNode } from 'react';

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
);

const S = { fill: 'none' as const, stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

/* Simple line icons keyed by service slug (derived from the href). */
const ICONS: Record<string, ReactNode> = {
  'mobile-app-development': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><line x1="10.5" y1="18.5" x2="13.5" y2="18.5" /></svg>,
  'web-development': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><rect x="2.5" y="4" width="19" height="16" rx="2.5" /><path d="M2.5 8.5h19" /><polyline points="8 12.5 6 14.5 8 16.5" /><polyline points="14 12.5 16 14.5 14 16.5" /></svg>,
  'ai-ml': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><rect x="6" y="6" width="12" height="12" rx="2.5" /><path d="M9.5 2.5v3M14.5 2.5v3M9.5 18.5v3M14.5 18.5v3M2.5 9.5h3M2.5 14.5h3M18.5 9.5h3M18.5 14.5h3" /></svg>,
  'blockchain-web3': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><path d="M12 2.5 3.5 7v10L12 21.5 20.5 17V7z" /><path d="M12 21.5V12M3.5 7 12 12l8.5-5" /></svg>,
  'cloud-devops': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A3.5 3.5 0 0 0 6.5 19z" /></svg>,
  'product-design': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>,
  'saas-development': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" /><path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>,
  'digital-marketing': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><path d="m3 11 18-5v12L3 13v6H6l-.6-6" /></svg>,
  'branding': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /></svg>,
  'wordpress-cms': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M8 4v16" /></svg>,
  'game-development': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><rect x="2.5" y="7" width="19" height="10" rx="5" /><path d="M7 11v2M6 12h2" /><circle cx="16" cy="11.5" r=".6" /><circle cx="18" cy="13.5" r=".6" /></svg>,
  'ar-vr': <svg width="26" height="26" viewBox="0 0 24 24" {...S}><rect x="2.5" y="7.5" width="19" height="9" rx="3" /><path d="M9 12h6M12 12c0 2-1.2 3.5-2.7 3.5S7 14 7 12M12 12c0 2 1.2 3.5 2.7 3.5S17 14 17 12" /></svg>,
  _default: <svg width="26" height="26" viewBox="0 0 24 24" {...S}><path d="M12 3v18M3 12h18" /></svg>,
};
const iconFor = (href: string): ReactNode => ICONS[href.split('/').filter(Boolean).pop() ?? ''] ?? ICONS._default;

/* Centered service cards with an icon per service — used for the "Our services in {city}" grid. */
export default function ServiceCards({ title, sub, items }: { title: string; sub?: string; items: { title: string; desc: string; href: string }[] }) {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head" style={{ textAlign: 'center', justifyItems: 'center' }}>
          <div>
            <h2>{title}</h2>
            {sub && <p className="lede" style={{ marginInline: 'auto' }}>{sub}</p>}
          </div>
        </div>
        <div className="grid grid--3">
          {items.map(it => (
            <Link key={it.title} href={it.href} className="tile rise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ width: 58, height: 58, borderRadius: 16, display: 'grid', placeItems: 'center', background: 'var(--surface-alt)', color: 'var(--brand)', marginBottom: 20, flexShrink: 0 }}>
                {iconFor(it.href)}
              </span>
              <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{it.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.75, marginBottom: 18 }}>{it.desc}</p>
              <span className="link-arrow" style={{ marginTop: 'auto', fontSize: 14 }}>Learn more <Arrow /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
