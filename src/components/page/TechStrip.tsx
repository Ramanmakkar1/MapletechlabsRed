/**
 * "Technologies we build with" — an honest capability marquee of real brand marks
 * on a solid dark band. These are platforms and AI tools we build on and integrate
 * into client work, framed as exactly that. It deliberately does NOT claim any
 * partnership, endorsement or "trusted by" relationship. Logos are the brands' own
 * marks (monochrome), used nominatively to identify the technology.
 */

type Tech = { name: string; file: string };

const DEFAULT_TECH: Tech[] = [
  { name: 'Shopify', file: 'shopify' },
  { name: 'OpenAI', file: 'openai' },
  { name: 'Claude', file: 'claude' },
  { name: 'Perplexity', file: 'perplexity' },
  { name: 'Meta', file: 'meta' },
  { name: 'GitHub Copilot', file: 'githubcopilot' },
  { name: 'AWS', file: 'amazonwebservices' },
  { name: 'Next.js', file: 'nextdotjs' },
];

export default function TechStrip({
  title = 'Technologies we build with',
  sub = 'We build on the platforms and AI tools your customers already rely on, and integrate them into what we ship for you.',
  items = DEFAULT_TECH,
}: {
  title?: string;
  sub?: string;
  items?: Tech[];
}) {
  // Duplicate the set so the CSS marquee (translateX 0 -> -50%) loops seamlessly.
  const loop = [...items, ...items];
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-ink)', color: 'var(--on-ink-body)' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 style={{ color: 'var(--on-ink)' }}>{title}</h2>
            <p className="lede" style={{ color: 'var(--on-ink-body)' }}>{sub}</p>
          </div>
        </div>
        <div
          className="marquee-mask"
          style={{
            marginTop: 'clamp(28px, 3.5vw, 48px)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 18,
            background: 'rgba(255,255,255,0.03)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          }}
          aria-label="Technologies we build with"
        >
          <ul className="marquee-track" style={{ listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            {loop.map((t, i) => (
              <li
                key={i}
                aria-hidden={i >= items.length}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 34px', flexShrink: 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/logos/${t.file}.svg`} alt={i < items.length ? t.name : ''} width={26} height={26} style={{ display: 'block', filter: 'invert(1)', opacity: 0.9 }} />
                <span style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
