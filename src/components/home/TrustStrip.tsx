import Image from 'next/image';

const badges = [
  { src: '/awards/top_clutch.co_app_development.webp',        alt: 'Clutch Top App Development Company' },
  { src: '/awards/Clutch-Top-GenerativeAI-Company2026.png',   alt: 'Clutch Top Generative AI Company 2026' },
  { src: '/awards/aws-advance-tier.svg',                      alt: 'AWS Advanced Tier Services Partner' },
  { src: '/awards/bw_webby_honoree.webp',                     alt: 'Webby Awards Honoree 2024' },
  { src: '/awards/socII-icon.svg',                            alt: 'SOC 2 Type II certified' },
  { src: '/awards/ISO-icon.svg',                              alt: 'ISO/IEC 27001:2022 certified' },
];

/* A thin credibility band, not a section: recognitions read as a
   single quiet line under the hero. */
export default function TrustStrip() {
  return (
    <section aria-label="Recognition and certifications" style={{ padding: 'clamp(28px, 3vw, 40px) 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(24px, 4vw, 56px)', flexWrap: 'wrap' }}>
        <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: '30ch' }}>
          Trusted by founders and enterprise teams across Canada
        </p>
        <ul style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 44px)', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap' }}>
          {badges.map(b => (
            <li key={b.src} style={{ position: 'relative', width: 78, height: 44, flexShrink: 0 }}>
              <Image src={b.src} alt={b.alt} fill sizes="78px" style={{ objectFit: 'contain' }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
