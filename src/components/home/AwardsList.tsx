import Image from 'next/image';

const awards = [
  { source: 'Clutch',            year: '2026', name: 'Top Generative AI Company' },
  { source: 'Clutch',            year: '2024', name: 'Top App Development Company' },
  { source: 'The Webby Awards',  year: '2024', name: 'Webby Honoree' },
  { source: 'Google',            year: '2024', name: 'Best App Award — Personal Growth' },
  { source: 'AWS',               year: '2024', name: 'Advanced Tier Services Partner' },
  { source: 'AWS',               year: '2024', name: 'Cloud Operations Services Competency' },
  { source: 'AICPA',             year: '2024', name: 'SOC 2 Type II Certified' },
  { source: 'ISO',               year: '2024', name: 'ISO/IEC 27001:2022 Certified' },
  { source: 'Red Herring',       year: '2023', name: 'Top 100 North America' },
];
const floating = [
  { src: '/awards/Clutch-Top-GenerativeAI-Company2026.png', alt: 'Clutch Top Generative AI Company 2026', top: 0,   rot: -4 },
  { src: '/awards/bw_webby_honoree.webp',                   alt: 'Webby Honoree 2024',                    top: 150, rot: 3 },
  { src: '/awards/google-app-award-1.png',                  alt: 'Google Best App Award 2024',            top: 300, rot: -2 },
];
const Laurel = ({ flip }: { flip?: boolean }) => (
  <svg width="30" height="42" viewBox="0 0 30 42" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" style={{ transform: flip ? 'scaleX(-1)' : undefined }} aria-hidden>
    <path d="M25 3c-12 4-20 14-20 26 0 5 1 8 3 11" /><path d="M8 14c4 0 7 2 9 5M5 22c4 0 7 2 9 6M6 30c4 0 7 2 9 6" />
  </svg>
);

/* Award rows fading down the list, with badges floating alongside. */
export default function AwardsList() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container">
        <h2 style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginBottom: 'clamp(28px, 4vw, 48px)' }}>
          <Laurel /> <span>Proven Expertise.<br />Globally Recognised.</span> <Laurel flip />
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 40, alignItems: 'start' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {awards.map((a, i) => (
              <li key={a.name} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1.2fr', gap: 18, alignItems: 'center', padding: '18px 0', borderBottom: '1px solid var(--line)', opacity: 1 - i * 0.07 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--brand)" aria-hidden><path d="M7 3h10v2h3v3a5 5 0 0 1-4 4.9A5 5 0 0 1 13 16v2h3v2H8v-2h3v-2a5 5 0 0 1-3-3.1A5 5 0 0 1 4 8V5h3zM4 5v3a3 3 0 0 0 3 3V5zm13 0v6a3 3 0 0 0 3-3V5z" /></svg>
                <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{a.source} — {a.year}</span>
                <span style={{ color: 'var(--body)', fontSize: 15 }}>{a.name}</span>
              </li>
            ))}
          </ul>
          <div className="hide-mobile" style={{ position: 'relative', height: 420 }}>
            {floating.map(f => (
              <div key={f.src} style={{ position: 'absolute', top: f.top, right: 0, width: 200, height: 130, background: '#fff', borderRadius: 14, border: '1px solid var(--line)', boxShadow: 'var(--shadow-lg)', transform: `rotate(${f.rot}deg)` }}>
                <Image src={f.src} alt={f.alt} fill sizes="200px" style={{ objectFit: 'contain', padding: 18 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
