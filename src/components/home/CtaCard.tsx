import Image from 'next/image';
import Link from 'next/link';
import { officeMedia } from '@/data/media';

/* Dark accent card inside a white section — the "You've seen how we helped…" block. */
export default function CtaCard() {
  return (
    <section style={{ padding: 'var(--section-y-sm) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <div className="cta-card" style={{ background: 'var(--surface-ink)', color: 'var(--on-ink-body)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'clamp(32px, 4.5vw, 60px)' }}>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h3)', lineHeight: 1.3, marginBottom: 16 }}>
              You&apos;ve seen how we helped <strong style={{ fontWeight: 700 }}>Axion Capital, ClinicFlow</strong> and <strong style={{ fontWeight: 700 }}>NorthStar</strong> reclaim their market edge.
            </h2>
            <p style={{ lineHeight: 1.7, marginBottom: 28, maxWidth: '50ch' }}>
              From 40% less admin overhead to a 3.8% conversion rate, our engineering goes beyond code to deliver measurable ROI.
            </p>
            <Link href="/contact" className="btn btn--on-ink">Consult Our Experts for a Growth Roadmap</Link>
          </div>
          <div style={{ position: 'relative', minHeight: 280 }}>
            <Image src={officeMedia.desk.src} alt={officeMedia.desk.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
