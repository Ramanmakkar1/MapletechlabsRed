'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogMedia } from '@/data/media';

const quotes = [
  { name: 'Jessica Chen', role: 'VP Engineering, Axion Capital · Toronto', text: 'Mapletech Labs rebuilt our trading infrastructure from scratch. Went from 100ms latency to sub-50ms, processing 75K transactions daily with zero data loss. Their engineering is meticulous.', metric: '75K+', label: 'daily transactions' },
  { name: 'Dr. Ravinder Patel', role: 'Chief Medical Officer, ClinicFlow Health · Vancouver', text: 'They built our patient management system with HIPAA compliance baked in from day one. Reduced our admin overhead by 40% and our patients actually use it. Worth every penny.', metric: '40%', label: 'less admin overhead' },
  { name: 'Marcus Thompson', role: 'CEO, NorthStar E-Commerce · Montréal', text: 'Redesigned our entire checkout flow. Conversion rate jumped from 2.1% to 3.8% within 90 days. The team understood our business better than we did — strategic partners, not just devs.', metric: '3.8%', label: 'conversion rate' },
];

/* Large media left, quote panel right — the reference's testimonial reel. */
export default function TestimonialsReel() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
          <h2 style={{ margin: 0 }}>Words From Our Clients</h2>
          <Link href="/case-studies" className="btn btn--ghost btn--sm">View All Client Stories</Link>
        </div>
        <div className="reel">
          <div className="media media--lg" style={{ aspectRatio: '4 / 5', maxHeight: 520 }}>
            <Image src={blogMedia[0].src} alt={blogMedia[0].alt} fill sizes="(max-width: 1023px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            <Link href="/case-studies" className="btn btn--on-ink btn--sm" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', letterSpacing: '.12em', textTransform: 'uppercase', fontSize: 12, boxShadow: 'var(--shadow-lg)' }}>
              ▶&nbsp; Read the Story
            </Link>
          </div>
          <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 'clamp(28px, 4vw, 52px)', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: 'clamp(1.15rem, 1.7vw, 1.45rem)', color: 'var(--ink)', lineHeight: 1.55, fontWeight: 500, marginBottom: 28 }}>&ldquo;{q.text}&rdquo;</p>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--ink)' }}>{q.name}</div>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>{q.role}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.04em', lineHeight: 1 }}>{q.metric}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{q.label}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 28 }}>
              {quotes.map((_, n) => (
                <button key={n} onClick={() => setI(n)} aria-label={`Testimonial ${n + 1}`} style={{ width: n === i ? 28 : 10, height: 10, borderRadius: 100, border: 'none', cursor: 'pointer', background: n === i ? 'var(--brand)' : 'var(--line-strong)', transition: 'width .25s' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
