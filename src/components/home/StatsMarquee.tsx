import Image from 'next/image';
import { blogMedia, officeMedia, workMedia } from '@/data/media';

const stats = [
  { n: '8+',   label: 'Years of experience',        desc: 'as a Canadian software consulting and engineering firm',           media: officeMedia.open },
  { n: '500+', label: 'Systems engineered',          desc: 'apps, platforms and enterprise tools shipped for clients',        media: blogMedia[1] },
  { n: '150+', label: 'Enterprise partners',         desc: 'from Series A startups to established Canadian enterprises',    media: blogMedia[2] },
  { n: '99%',  label: 'Client satisfaction',         desc: 'measured across post-launch surveys on every engagement',       media: blogMedia[4] },
  { n: '12',   label: 'Cities across Canada',        desc: 'engineering teams from Vancouver to Halifax',                    media: officeMedia.meeting },
  { n: '15+',  label: 'Industry recognitions',       desc: 'from Clutch, Webby, Google and AWS for engineering excellence',  media: workMedia.retail },
];

/* Scrolling stat cards with an image tile — the reference's marquee showcase. */
export default function StatsMarquee() {
  const items = [...stats, ...stats];
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)', overflow: 'hidden' }}>
      <div className="marquee-mask">
        <div className="marquee-track" aria-label="Company statistics">
          {items.map((s, i) => (
            <article key={i} className="stat-card" aria-hidden={i >= stats.length} style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
              <div style={{ padding: '26px 26px 22px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 'clamp(2.2rem, 3vw, 2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.05em', lineHeight: 1 }}>{s.n}</div>
                <div>
                  <div className="eyebrow" style={{ color: 'var(--ink)', marginBottom: 6 }}>{s.label}</div>
                  <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
              <div className="media media--flat" style={{ height: 190 }}>
                <Image src={s.media.src} alt={s.media.alt} fill sizes="340px" style={{ objectFit: 'cover' }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
