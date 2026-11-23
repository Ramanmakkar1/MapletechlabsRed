'use client';
import { useState } from 'react';
import Image from 'next/image';
import { quotes } from '@/data/testimonials';
import { humanMedia } from '@/data/media';

/* One quote at a time, set large. No slider full of paragraphs. */
export default function Testimonial() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  const m = humanMedia.office;

  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container split split--tight">
        <div className="media media--lg fade" style={{ aspectRatio: '4 / 3.6' }}>
          <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1023px) 100vw, 42vw" style={{ objectFit: 'cover' }} />
        </div>

        <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
          <blockquote style={{ margin: 0, fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', color: 'var(--ink)', lineHeight: 1.45, fontWeight: 500, letterSpacing: '-0.02em' }}>
            &ldquo;{q.text}&rdquo;
          </blockquote>
          <figcaption style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--ink)' }}>{q.name}</div>
              <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>{q.role}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.9rem', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.045em', lineHeight: 1 }}>{q.metric}</div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 4 }}>{q.label}</div>
            </div>
          </figcaption>

          <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
            {quotes.map((qq, n) => (
              <button
                key={qq.name}
                onClick={() => setI(n)}
                aria-label={`Read what ${qq.name} said`}
                aria-pressed={n === i}
                style={{ width: 34, height: 4, padding: 0, borderRadius: 4, border: 'none', cursor: 'pointer', background: n === i ? 'var(--brand)' : 'var(--line-strong)', transition: 'background-color .25s ease' }}
              />
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
