import Image from 'next/image';
import Link from 'next/link';
import { humanMedia } from '@/data/media';

const caps = [
  { t: 'Generative AI', d: 'Copilots, agents and assistants wired into the systems your team already uses.' },
  { t: 'Machine learning', d: 'Forecasting, scoring and classification models trained on your own operational data.' },
  { t: 'Computer vision', d: 'Document parsing, quality inspection and image analysis in production settings.' },
  { t: 'Data engineering', d: 'The pipelines, warehouses and governance that make any of the above trustworthy.' },
];

/* Image-led split: the AI practice gets one section, not a card wall. */
export default function AiPractice() {
  const m = humanMedia.pairing;
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container split">
        <div className="media media--lg fade" style={{ aspectRatio: '4 / 3.4' }}>
          <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1023px) 100vw, 46vw" style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <h2 style={{ marginBottom: 16, maxWidth: '16ch' }}>
            AI that fits how your business already works
          </h2>
          <p className="lede" style={{ marginTop: 0, marginBottom: 34 }}>
            MapleAI is our applied AI practice. We are interested in the places where a
            model removes real work &mdash; and honest about the places where it does not.
          </p>

          <div className="grid grid--2" style={{ marginBottom: 34 }}>
            {caps.map(c => (
              <div key={c.t} style={{ paddingTop: 18, borderTop: '1px solid var(--line)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{c.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{c.d}</p>
              </div>
            ))}
          </div>

          <div className="btn-group" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/services/ai-ml" className="btn btn--dark">Explore AI services</Link>
            <Link href="/contact" className="btn btn--ghost">Book an advisory session</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
