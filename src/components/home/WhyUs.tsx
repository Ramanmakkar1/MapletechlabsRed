import Image from 'next/image';
import { humanMedia } from '@/data/media';

/**
 * Statement and photograph on the left, six differentiators on the right.
 * The points were previously title-over-body with nothing between them, so
 * the column read as one grey block; each now sits in its own row with the
 * title carrying the weight.
 */
const reasons = [
  { t: 'Fixed scope, fixed price',  d: 'You know the cost and the timeline before a line of code is written.' },
  { t: 'You own everything',        d: 'Source code, credentials and IP transfer to you on final payment.' },
  { t: 'Senior engineers only',     d: 'Every project is staffed by engineers with production experience.' },
  { t: 'Canadian data residency',   d: 'Built for PIPEDA and provincial privacy law, hosted where it matters.' },
  { t: '8-week MVP programme',      d: 'A fixed-price path from idea to a product real users can try.' },
  { t: 'Support after launch',      d: 'Tiered SLAs from monitoring to a dedicated team on 24/7 response.' },
];

export default function WhyUs() {
  const m = humanMedia.planning;
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container why-split">
        <div>
          <h2 style={{ maxWidth: '14ch' }}>Why teams choose Mapletech Labs</h2>
          <p className="lede" style={{ marginBottom: 'clamp(28px, 3vw, 40px)' }}>
            We work as an accountable partner, not an outsourced vendor. That shows up in
            how we price, who we staff and what happens after launch.
          </p>
          <div className="media media--lg fade hide-mobile" style={{ aspectRatio: '4 / 3' }}>
            <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1023px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <ul className="reasons">
          {reasons.map(r => (
            <li key={r.t}>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
