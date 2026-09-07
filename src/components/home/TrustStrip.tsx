import Image from 'next/image';

/* Certifications here, awards further down in Recognition — the two were
   showing the same four badges twice on one page. */
const badges = [
  { src: '/awards/socII-icon.svg',        alt: 'SOC 2 Type II certified' },
  { src: '/awards/ISO-icon.svg',          alt: 'ISO/IEC 27001:2022 certified' },
  { src: '/awards/aws-cloud-op-icon.svg', alt: 'AWS Cloud Operations Services Competency' },
  { src: '/awards/aws-security-1.png',    alt: 'AWS Security Competency' },
];

/* A thin credibility band, not a section: recognitions read as a
   single quiet line under the hero. */
export default function TrustStrip() {
  return (
    <section aria-label="Recognition and certifications" style={{ padding: 'clamp(28px, 3vw, 40px) 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(24px, 4vw, 56px)', flexWrap: 'wrap' }}>
        <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: '30ch' }}>
          Independently audited, certified and built to standards you can check
        </p>
        <ul style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 44px)', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap' }}>
          {badges.map(b => (
            <li key={b.src} style={{ position: 'relative', width: 88, height: 52, flexShrink: 0 }}>
              <Image src={b.src} alt={b.alt} fill sizes="78px" style={{ objectFit: 'contain' }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
