import Image from 'next/image';
import Link from 'next/link';
import { serviceMedia } from '@/data/media';

export default function CrossSell() {
  const m = serviceMedia['digital-marketing'];
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container split-cta">
        <div>
          <h2 style={{ marginBottom: 14 }}><span style={{ color: 'var(--brand)' }}>Built It?</span><br />Now Let&apos;s Market It.</h2>
          <p style={{ color: 'var(--body)', lineHeight: 1.7, marginBottom: 28, maxWidth: '52ch' }}>From the team that understands your tech stack to the marketing specialists who know your audience — complete your digital success story with Mapletech Labs Digital.</p>
          <Link href="/services/digital-marketing" className="btn btn--primary">Complete Your Success Story</Link>
        </div>
        <div className="media media--lg" style={{ aspectRatio: '16 / 11' }}>
          <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
