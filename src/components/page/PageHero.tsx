import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import type { Media } from '@/data/media';
import type { Crumb, HeroCopy, Stat } from './types';

/* Inner-page hero: photograph behind a white scrim, copy left, quote form
   right — the reference's service hero, on a white ground. */
export default function PageHero({ crumbs, copy, stats, photo, form = true, serviceName }: {
  crumbs: Crumb[]; copy: HeroCopy; stats?: Stat[]; photo: Media; form?: boolean; serviceName?: string;
}) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface)', padding: 'var(--hero-top) 0 var(--section-y)' }}>
      <Image src={photo.src} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: '70% 40%' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.95) 40%, rgba(255,255,255,.82) 70%, rgba(255,255,255,.6) 100%)' }} />
      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        <Breadcrumb items={crumbs} />
        <div style={{ display: 'grid', gridTemplateColumns: form ? 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))' : '1fr', gap: 'clamp(28px, 5vw, 72px)', alignItems: 'center', marginTop: 28 }}>
          <div>
            <span className="section-tag">{copy.badge}</span>
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '0 0 20px' }}>{copy.title}</h1>
            <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'var(--body)', lineHeight: 1.7, maxWidth: 560, margin: '0 0 30px' }}>{copy.desc}</p>
            <div className="btn-group" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: stats?.length ? 40 : 0 }}>
              <Link href="/contact" className="btn btn--primary btn--lg">Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
              </Link>
              <Link href="/case-studies" className="btn btn--ghost btn--lg">View Our Work</Link>
            </div>
            {stats?.length ? (
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {stats.slice(0, 3).map(s => (
                  <span key={s.label} className="pill" style={{ background: '#fff', gap: 10 }}>
                    <strong style={{ color: 'var(--brand)' }}>{s.value}</strong> <span style={{ fontWeight: 500 }}>{s.label}</span>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          {form && <div><ServiceHeroForm service={serviceName} /></div>}
        </div>
      </div>
    </section>
  );
}
