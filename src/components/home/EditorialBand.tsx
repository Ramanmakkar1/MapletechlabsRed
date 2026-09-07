import Image from 'next/image';
import { humanMedia } from '@/data/media';

/* The page stops being a list of cards here: one photograph at full
   width and one statement about why any of this matters. */
export default function EditorialBand() {
  const m = humanMedia.workshop;
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="media media--lg fade" style={{ aspectRatio: '21 / 9', minHeight: 260 }}>
          <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1400px) 100vw, 1320px" style={{ objectFit: 'cover' }} />
        </div>
        <div className="editorial-copy">
          <h2 style={{ maxWidth: '18ch' }}>Technology should move your business forward.</h2>
          <div>
            <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'var(--body)', lineHeight: 1.75 }}>
              Most software fails for human reasons, not technical ones &mdash; it solves the
              wrong problem, or nobody wants to use it. We start with the people who will
              live with the system every day, then engineer it to hold up for years.
            </p>
            <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'var(--body)', lineHeight: 1.75, marginTop: 20 }}>
              That is the whole job: understand the business, ship something people
              actually use, and stay accountable for how it performs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
