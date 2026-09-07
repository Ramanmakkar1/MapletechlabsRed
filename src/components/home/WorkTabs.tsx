'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { work } from '@/data/work';

const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>;

/* Client tab strip with a featured case card — the reference's portfolio block. */
export default function WorkTabs() {
  const [i, setI] = useState(0);
  const p = work[i];
  const go = (d: number) => setI(n => (n + d + work.length) % work.length);

  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container">
        <h2 style={{ textAlign: 'center', marginBottom: 'clamp(24px, 3vw, 36px)' }}>Innovation, Engineered by Mapletech Labs</h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <button onClick={() => go(-1)} aria-label="Previous project" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--line-strong)', background: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', flexShrink: 0 }}>‹</button>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', flex: 1, paddingBottom: 4 }}>
            {work.map((w, n) => (
              <button key={w.slug} onClick={() => setI(n)} className="pill" style={{ whiteSpace: 'nowrap', cursor: 'pointer', background: n === i ? 'var(--ink)' : '#fff', color: n === i ? '#fff' : 'var(--body)', borderColor: n === i ? 'var(--ink)' : 'var(--line)' }}>
                {w.client}
              </button>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next project" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--line-strong)', background: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', flexShrink: 0 }}>›</button>
        </div>

        <article className="work-card" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', marginBottom: 14 }}>{p.category} · {p.city}</span>
            <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 12 }}>{p.client}</h3>
            <p style={{ color: 'var(--body)', lineHeight: 1.7, marginBottom: 28, maxWidth: '52ch' }}>{p.desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
              {p.metrics.map(mt => (
                <div key={mt.label} style={{ borderLeft: '3px solid var(--brand)', paddingLeft: 14 }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1 }}>{mt.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>{mt.label}</div>
                </div>
              ))}
            </div>
            <Link href={p.href} className="link-arrow" style={{ marginTop: 'auto' }}>Read the case study <Arrow /></Link>
          </div>
          <div className="media media--flat" style={{ minHeight: 320 }}>
            <Image src={p.media.src} alt={p.media.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </article>
      </div>
    </section>
  );
}
