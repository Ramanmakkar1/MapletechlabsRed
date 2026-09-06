/* Original device mockups drawn in markup — the "showing the work" graphic
   the reference sites get from client app footage we cannot reuse. Pure
   CSS/SVG: nothing to download, crisp on any display, themeable in red. */

type Tone = 'red' | 'ink' | 'warm';

const TONES: Record<Tone, { bg: string; accent: string; soft: string; text: string; sub: string }> = {
  red:  { bg: '#FFFFFF', accent: 'var(--brand)',      soft: '#FFE9E3', text: 'var(--ink)', sub: 'rgba(20,17,24,.08)' },
  ink:  { bg: '#191318', accent: 'var(--brand-bright)', soft: 'rgba(255,255,255,.10)', text: '#fff', sub: 'rgba(255,255,255,.10)' },
  warm: { bg: '#FFF8F5', accent: '#C81700',           soft: '#FFDDD2', text: 'var(--ink)', sub: 'rgba(20,17,24,.07)' },
};

/* ── PHONE ─────────────────────────────────────────────────── */
export function PhoneMock({
  tone = 'red', label = 'Today', metric = '12,480', caption = 'Active sessions', bars = [42, 68, 51, 84, 73, 96],
  style,
}: {
  tone?: Tone; label?: string; metric?: string; caption?: string; bars?: number[];
  style?: React.CSSProperties;
}) {
  const t = TONES[tone];
  return (
    <div
      aria-hidden
      style={{
        width: 218, aspectRatio: '218 / 442', borderRadius: 34, padding: 9,
        background: 'linear-gradient(160deg, #2A2430, #141118)',
        boxShadow: '0 24px 60px rgba(20,17,24,.22), 0 2px 6px rgba(20,17,24,.16)',
        flexShrink: 0, ...style,
      }}
    >
      <div style={{ position: 'relative', height: '100%', borderRadius: 26, background: t.bg, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* notch */}
        <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 62, height: 17, borderRadius: 100, background: '#141118', zIndex: 2 }} />

        <div style={{ padding: '34px 15px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: t.accent }}>{label}</div>

          <div>
            <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: '-.04em', color: t.text, lineHeight: 1 }}>{metric}</div>
            <div style={{ fontSize: 9.5, fontWeight: 600, color: t.text, opacity: .5, marginTop: 4 }}>{caption}</div>
          </div>

          {/* chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 74 }}>
            {bars.map((h, i) => (
              <div key={i} style={{
                flex: 1, height: `${h}%`, borderRadius: '4px 4px 2px 2px',
                background: i === bars.length - 1 ? t.accent : t.soft,
              }} />
            ))}
          </div>

          {/* rows */}
          <div style={{ display: 'grid', gap: 7, marginTop: 2 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 22, height: 22, borderRadius: 7, background: i === 0 ? t.accent : t.soft, flexShrink: 0 }} />
                <span style={{ flex: 1, display: 'grid', gap: 4 }}>
                  <span style={{ display: 'block', height: 5, width: `${86 - i * 16}%`, borderRadius: 100, background: t.sub }} />
                  <span style={{ display: 'block', height: 5, width: `${58 - i * 12}%`, borderRadius: 100, background: t.sub, opacity: .6 }} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* tab bar */}
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', padding: '11px 0 14px', borderTop: `1px solid ${t.sub}` }}>
          {[0, 1, 2, 3].map(i => (
            <span key={i} style={{ width: 15, height: 4, borderRadius: 100, background: i === 0 ? t.accent : t.sub }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── BROWSER / DASHBOARD ───────────────────────────────────── */
export function BrowserMock({
  tone = 'red', title = 'mapletechlabs.ca', style,
}: { tone?: Tone; title?: string; style?: React.CSSProperties }) {
  const t = TONES[tone];
  return (
    <div
      aria-hidden
      style={{
        width: '100%', borderRadius: 16, overflow: 'hidden',
        background: t.bg, border: `1px solid ${tone === 'ink' ? 'rgba(255,255,255,.12)' : 'var(--line)'}`,
        boxShadow: '0 22px 54px rgba(20,17,24,.14)', ...style,
      }}
    >
      {/* chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 7, padding: '10px 14px',
        borderBottom: `1px solid ${t.sub}`, background: tone === 'ink' ? 'rgba(255,255,255,.04)' : 'var(--surface-alt)',
      }}>
        {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
          <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: .9 }} />
        ))}
        <span style={{
          marginLeft: 8, flex: 1, maxWidth: 220, height: 18, borderRadius: 100,
          background: tone === 'ink' ? 'rgba(255,255,255,.07)' : '#fff',
          border: `1px solid ${t.sub}`, fontSize: 9, color: t.text, opacity: .55,
          display: 'flex', alignItems: 'center', paddingLeft: 9,
        }}>{title}</span>
      </div>

      {/* body: sidebar + content */}
      <div style={{ display: 'flex', minHeight: 208 }}>
        <div style={{ width: 62, borderRight: `1px solid ${t.sub}`, padding: '14px 10px', display: 'grid', gap: 8, alignContent: 'start' }}>
          {[0, 1, 2, 3, 4].map(i => (
            <span key={i} style={{ height: 8, borderRadius: 100, background: i === 0 ? t.accent : t.sub, width: i === 0 ? '100%' : `${82 - i * 9}%` }} />
          ))}
        </div>

        <div style={{ flex: 1, padding: 16, display: 'grid', gap: 12 }}>
          {/* stat row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[['98.6%', 1], ['1.2k', 0], ['24ms', 0]].map(([v, hot], i) => (
              <div key={i} style={{
                borderRadius: 10, padding: '10px 11px',
                background: hot ? t.accent : (tone === 'ink' ? 'rgba(255,255,255,.05)' : 'var(--surface-alt)'),
                border: hot ? 'none' : `1px solid ${t.sub}`,
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-.03em', color: hot ? '#fff' : t.text }}>{v}</div>
                <div style={{ height: 4, width: '62%', borderRadius: 100, marginTop: 6, background: hot ? 'rgba(255,255,255,.45)' : t.sub }} />
              </div>
            ))}
          </div>

          {/* area chart */}
          <div style={{ position: 'relative', height: 92, borderRadius: 10, border: `1px solid ${t.sub}`, overflow: 'hidden', background: tone === 'ink' ? 'rgba(255,255,255,.03)' : '#fff' }}>
            <svg viewBox="0 0 300 92" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="mk-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5290D" stopOpacity=".26" />
                  <stop offset="100%" stopColor="#F5290D" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 74 L38 62 L76 68 L114 44 L152 52 L190 30 L228 36 L266 16 L300 22 L300 92 L0 92 Z" fill="url(#mk-area)" />
              <path d="M0 74 L38 62 L76 68 L114 44 L152 52 L190 30 L228 36 L266 16 L300 22"
                    fill="none" stroke="#E11900" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="266" cy="16" r="4" fill="#E11900" />
              <circle cx="266" cy="16" r="8" fill="#E11900" opacity=".18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ABSTRACT SERVICE GLYPHS ───────────────────────────────── */
/* One geometric mark per capability. Deliberately abstract so they never
   look like clip-art, and they inherit the brand red. */
export function ServiceGlyph({ kind, size = 92 }: { kind: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    mobile: (<>
      <rect x="26" y="10" width="36" height="68" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
      <rect x="33" y="22" width="22" height="4" rx="2" fill="currentColor" opacity=".35" />
      <rect x="33" y="32" width="22" height="26" rx="4" fill="currentColor" />
      <circle cx="44" cy="68" r="3" fill="currentColor" opacity=".5" />
    </>),
    web: (<>
      <rect x="10" y="18" width="68" height="52" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M10 32h68" stroke="currentColor" strokeWidth="3" />
      <circle cx="19" cy="25" r="2.4" fill="currentColor" />
      <rect x="20" y="42" width="20" height="18" rx="4" fill="currentColor" />
      <rect x="46" y="42" width="24" height="4" rx="2" fill="currentColor" opacity=".4" />
      <rect x="46" y="51" width="16" height="4" rx="2" fill="currentColor" opacity=".25" />
    </>),
    ai: (<>
      <circle cx="44" cy="44" r="13" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="44" cy="44" r="4.5" fill="currentColor" />
      {[0, 60, 120, 180, 240, 300].map(a => {
        const r = (a * Math.PI) / 180;
        return <g key={a}>
          <line x1={44 + Math.cos(r) * 13} y1={44 + Math.sin(r) * 13} x2={44 + Math.cos(r) * 30} y2={44 + Math.sin(r) * 30} stroke="currentColor" strokeWidth="2.4" opacity=".55" />
          <circle cx={44 + Math.cos(r) * 33} cy={44 + Math.sin(r) * 33} r="4" fill="currentColor" opacity=".8" />
        </g>;
      })}
    </>),
    cloud: (<>
      <path d="M26 60a13 13 0 0 1 1-26 18 18 0 0 1 34-4 13 13 0 0 1 3 30z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <path d="M36 66v8M44 66v12M52 66v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".55" />
    </>),
    chain: (<>
      <rect x="12" y="32" width="26" height="24" rx="7" stroke="currentColor" strokeWidth="3" fill="none" />
      <rect x="50" y="32" width="26" height="24" rx="7" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M38 44h12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="25" cy="44" r="3.6" fill="currentColor" />
      <circle cx="63" cy="44" r="3.6" fill="currentColor" />
    </>),
    design: (<>
      <path d="M44 12 74 44 44 76 14 44z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <path d="M44 28 60 44 44 60 28 44z" fill="currentColor" />
    </>),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none" aria-hidden style={{ color: 'var(--brand)' }}>
      {paths[kind] ?? paths.web}
    </svg>
  );
}

/* ── WORK STAGE ────────────────────────────────────────────── */
/* The agency "here is the product" composition: a dashboard turned
   slightly into the page with a phone overlapping its lower-right. */
export function WorkStage({
  tile = 1, title, label, metric, caption,
}: {
  tile?: 1 | 2 | 3 | 4;
  title?: string; label?: string; metric?: string; caption?: string;
}) {
  return (
    <div className={`tile tile--${tile}`} style={{ position: 'relative', width: '100%', height: '100%', display: 'grid', placeItems: 'center', padding: 'clamp(30px, 4vw, 62px) clamp(24px, 4vw, 56px) clamp(56px, 6vw, 82px)' }}>
      <div className="tile__grid" aria-hidden />
      <div className="tile__sheen" aria-hidden />

      <div style={{ position: 'relative', width: '100%', maxWidth: 500 }}>
        <div style={{ width: '86%', transform: 'perspective(1500px) rotateY(8deg) rotateX(1.5deg)', transformOrigin: 'left center', filter: 'drop-shadow(0 20px 44px rgba(20,17,24,.30))' }}>
          <BrowserMock tone="ink" title={title} />
        </div>
        <div
          className="hide-mobile"
          style={{
            position: 'absolute', right: -6, bottom: -46,
            transform: 'perspective(1500px) rotateY(-9deg) scale(.72)',
            transformOrigin: 'bottom right',
            filter: 'drop-shadow(0 18px 38px rgba(20,17,24,.34))',
          }}
        >
          <PhoneMock tone="red" label={label} metric={metric} caption={caption} />
        </div>
      </div>
    </div>
  );
}
