'use client';
import { useRef, useEffect } from 'react';

const features = [
  { title: 'Spatial Computing & AR/VR', desc: 'Immersive 3D environments bridging physical and digital — built for Apple Vision Pro, Meta Quest and custom hardware.' },
  { title: 'AI & Neural Systems', desc: 'Custom LLM integrations, computer vision pipelines and predictive analytics that automate intelligent decision-making.' },
  { title: 'Blockchain Infrastructure', desc: 'Production-grade dApps, DeFi protocols and smart contracts audited and battle-tested for enterprise use.' },
];

export default function AdvancedLabs() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="labs" className="section-padding" style={{ background: 'var(--surface-ink)', borderTop: '1px solid var(--line-ink)' , position: 'relative', overflow: 'hidden'}}>
      <div className="cb-container">
        <div className="advanced-labs-grid">
          <div className="reveal">
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none', color: 'rgba(255,255,255,0.38)', marginBottom: 20 }}>R&D Labs</div>
            <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--on-ink)', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>
              Pioneering the<br /><span style={{ color: 'rgba(255,255,255,0.38)' }}>Edge of Innovation.</span>
            </h2>
            <p style={{ fontSize: 'clamp(14px, 3vw, 17px)', color: 'var(--on-ink-body)', lineHeight: 1.7, marginBottom: 'clamp(28px, 6vw, 56px)' }}>
              Our dedicated R&D division builds the emerging technology that will define the next decade of software.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 36px)' }}>
              {features.map(f => (
                <div key={f.title} style={{ display: 'flex', gap: 20, padding: '16px 16px 16px 0', borderRadius: 16, transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', cursor: 'default' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 0 20px transparent'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: 2, flexShrink: 0, background: 'var(--surface-alt)', borderRadius: 10, minHeight: 60 }} />
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 600, color: 'var(--on-ink)', marginBottom: 8, letterSpacing: '-0.02em' }}>{f.title}</h4>
                    <p style={{ fontSize: 14, color: 'var(--on-ink-body)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 'clamp(28px, 5vw, 52px)', display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 clamp(20px, 4vw, 28px)', borderRadius: 100, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--line-ink)', color: 'var(--on-ink)', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: '0.3s', fontFamily: 'inherit', minHeight: 44 }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.color = 'var(--brand)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'var(--line-ink)'; e.currentTarget.style.color = 'var(--on-ink)'; }}
            >
              Explore R&D Labs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="reveal reveal-d1" style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'clamp(24px, 6vw, 48px)', overflow: 'hidden', border: '1px solid var(--line-ink)', background: 'var(--surface-ink)', aspectRatio: '4/5', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%', background: 'transparent', filter: 'blur(60px)' }} />
              <div style={{ position: 'relative', zIndex: 2, width: '80%', aspectRatio: '1' }}>
                <svg viewBox="0 0 400 400" style={{ width: '100%', opacity: 0.6 }}>
                  <circle cx="200" cy="200" r="160" fill="none" stroke="transparent" strokeWidth="1" strokeDasharray="4 8" />
                  <circle cx="200" cy="200" r="110" fill="none" stroke="transparent" strokeWidth="1" strokeDasharray="3 6" />
                  {([[200,40],[340,120],[340,280],[200,360],[60,280],[60,120]] as [number,number][]).map(([cx, cy], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="8" fill="rgba(0,0,0,0.16)" />
                      <circle cx={cx} cy={cy} r="16" fill="none" stroke="transparent" strokeWidth="1" />
                      <line x1={cx} y1={cy} x2="200" y2="200" stroke="transparent" strokeWidth="1" />
                    </g>
                  ))}
                  <circle cx="200" cy="200" r="30" fill="transparent" />
                  <circle cx="200" cy="200" r="14" fill="#E11900" opacity="0.4" />
                  <circle cx="200" cy="200" r="6" fill="#E11900" />
                </svg>
              </div>
              <div style={{ position: 'absolute', bottom: 28, left: 28, display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--line-ink)', borderRadius: 100, padding: '9px 18px' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand)' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Neural Core Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
