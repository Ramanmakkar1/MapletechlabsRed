import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import type { Media } from '@/data/media';
import type { Crumb, HeroCopy, Stat } from './types';

/* Inner-page hero. With a quote form: clean white, copy left, form right —
   the media band below carries the imagery. Without one: copy left, the
   photograph itself on the right, unscrimmed. */
export default function PageHero({ crumbs, copy, stats, photo, form = true, serviceName }: {
  crumbs: Crumb[]; copy: HeroCopy; stats?: Stat[]; photo: Media; form?: boolean; serviceName?: string;
}) {
  return (
    <section style={{ background: 'var(--surface)', padding: 'var(--hero-top) 0 var(--section-y)' }}>
      <div className="cb-container">
        <Breadcrumb items={crumbs} />
        <div className="hero-split" style={{ marginTop: 'clamp(20px, 3vw, 36px)' }}>
          <div>
            <span className="section-tag">{copy.badge}</span>
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '0 0 20px' }}>{copy.title}</h1>
            <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'var(--body)', lineHeight: 1.7, maxWidth: '58ch', margin: '0 0 30px' }}>{copy.desc}</p>
            <div className="btn-group" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: stats?.length ? 36 : 0 }}>
              <Link href="/contact" className="btn btn--primary btn--lg">Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
              </Link>
              <Link href="/case-studies" className="btn btn--ghost btn--lg">View Our Work</Link>
            </div>
            {stats?.length ? (
              <div style={{ display: 'flex', gap: 'clamp(20px, 3vw, 40px)', flexWrap: 'wrap' }}>
                {stats.slice(0, 3).map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {form
            ? <div><ServiceHeroForm service={serviceName} /></div>
            : <div className="media media--lg" style={{ aspectRatio: '4 / 3' }}><Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 1023px) 100vw, 46vw" style={{ objectFit: 'cover' }} /></div>}
        </div>
      </div>
    </section>
  );
}
