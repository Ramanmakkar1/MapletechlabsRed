'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const ROTATING = ['Mobile Apps', 'Web Platforms', 'AI Systems', 'SaaS Products', 'Fintech Tools'];

const STATS = [
  ['500+', 'Projects delivered'],
  ['150+', 'Clients served'],
  ['99%', 'Client satisfaction'],
  ['8 wk', 'Average MVP'],
] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((n) => (n + 1) % ROTATING.length);
        setShow(true);
      }, 340);
    }, 2900);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        background: 'var(--surface)',
        overflow: 'hidden',
        paddingTop: 'clamp(96px, 12vw, 132px)',
      }}
    >
      {/* Faint engineering grid, and a soft hand-off into the band below. */}
      <div aria-hidden className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
      <div
        aria-hidden
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 140,
          background: 'linear-gradient(to bottom, transparent, var(--surface-alt))',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      <div className="cb-container hero-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ── LEFT: copy ───────────────────────────── */}
        <div>
          <div
            className="reveal visible"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 18px', marginBottom: 'clamp(20px, 3vw, 30px)',
              border: '1px solid var(--line-strong)', borderRadius: 100,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand-bright)', boxShadow: '0 0 0 4px rgba(245,41,13,.14)' }} />
            <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--brand-deep)', letterSpacing: '.12em', textTransform: 'uppercase' }}>
              Canadian Software &amp; AI Engineering Partner
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.4vw, 4.7rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.03,
              color: 'var(--ink)',
              margin: '0 0 24px',
            }}
          >
            We build{' '}
            <span
              style={{
                display: 'inline-block',
                color: 'var(--brand)',
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity .32s ease, transform .32s ease',
              }}
            >
              {ROTATING[i]}
            </span>
            <br />
            that scale.
          </h1>

          <p style={{ fontSize: 'clamp(16px, 1.5vw, 18.5px)', color: 'var(--body)', maxWidth: 520, lineHeight: 1.7, margin: '0 0 clamp(28px, 4vw, 40px)' }}>
            Mapletech Labs engineers world-class digital products for companies ready to lead
            their industry — on time, on budget, every time.
          </p>

          <div className="h-btns btn-group" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Start a Project
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/case-studies" className="btn btn--ghost btn--lg">
              View Our Work
            </Link>
          </div>

          <div
            className="h-stats"
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: 'clamp(18px, 3vw, 44px)',
              justifyContent: 'start', paddingTop: 'clamp(22px, 3vw, 32px)', borderTop: '1px solid var(--line)',
            }}
          >
            {STATS.map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.045em', lineHeight: 1 }}>
                  {val}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: 8 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: original product visual ───────── */}
        <HeroVisual />
      </div>
    </section>
  );
}

/* An original, code-drawn product surface: a delivery dashboard with a
   red accent, plus two floating metric cards. No third-party artwork. */
function HeroVisual() {
  const bars = [38, 55, 44, 72, 61, 88, 76];

  return (
    <div className="hero-visual" style={{ position: 'relative', minHeight: 440 }} aria-hidden>
      {/* main panel */}
      <div
        style={{
          position: 'relative',
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--r-xl)',
          boxShadow: 'var(--shadow-lg)',
          padding: 26,
          overflow: 'hidden',
        }}
      >
        {/* window chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 22 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: .85 }} />
          ))}
          <span style={{ marginLeft: 12, fontSize: 12, fontWeight: 600, color: 'var(--faint)', letterSpacing: '.02em' }}>
            mapletechlabs / delivery
          </span>
        </div>

        {/* headline metric */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, marginBottom: 6 }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.045em', lineHeight: 1 }}>98.6%</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12.5, fontWeight: 700, color: '#0F9960', background: 'rgba(15,153,96,.09)', padding: '4px 10px', borderRadius: 100, marginBottom: 4 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
            12.4%
          </div>
        </div>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 26 }}>
          On-time delivery rate
        </div>

        {/* bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 9, height: 128, marginBottom: 20 }}>
          {bars.map((h, n) => (
            <div
              key={n}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: '7px 7px 3px 3px',
                background: n === bars.length - 2 ? 'var(--brand)' : 'var(--surface-sunk)',
                boxShadow: n === bars.length - 2 ? '0 6px 18px rgba(245,41,13,.28)' : 'none',
                animation: `hv-rise .9s cubic-bezier(.16,1,.3,1) ${n * 0.07}s both`,
                transformOrigin: 'bottom',
              }}
            />
          ))}
        </div>

        {/* rows */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 16, display: 'grid', gap: 11 }}>
          {[['Discovery & architecture', 100], ['Sprint delivery', 82], ['QA & hardening', 46]].map(([label, pct]) => (
            <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ flex: '0 0 148px', fontSize: 12.5, fontWeight: 600, color: 'var(--body)' }}>{label}</span>
              <span style={{ flex: 1, height: 6, borderRadius: 100, background: 'var(--surface-sunk)', overflow: 'hidden' }}>
                <span style={{ display: 'block', height: '100%', width: `${pct}%`, borderRadius: 100, background: 'var(--brand)' }} />
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', fontVariantNumeric: 'tabular-nums' }}>{pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* floating card — top right */}
      <div
        className="hide-mobile"
        style={{
          position: 'absolute', top: -22, right: -26,
          background: 'var(--surface-ink)', color: '#fff',
          borderRadius: 'var(--r-md)', padding: '14px 18px',
          boxShadow: 'var(--shadow-lg)',
          animation: 'hv-float 6s ease-in-out infinite',
          display: 'flex', alignItems: 'center', gap: 12,
        }}
      >
        <span style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--brand)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
        <span>
          <span style={{ display: 'block', fontSize: 13.5, fontWeight: 700, lineHeight: 1.2 }}>Sprint 14 shipped</span>
          <span style={{ display: 'block', fontSize: 11.5, color: 'rgba(255,255,255,.55)', marginTop: 2 }}>2 days early</span>
        </span>
      </div>

      {/* floating card — bottom left */}
      <div
        className="hide-mobile"
        style={{
          position: 'absolute', bottom: -26, left: -30,
          background: 'var(--surface)', border: '1px solid var(--line)',
          borderRadius: 'var(--r-md)', padding: '14px 18px',
          boxShadow: 'var(--shadow-lg)',
          animation: 'hv-float 6s ease-in-out 1.6s infinite',
        }}
      >
        <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>
          Now building
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 7 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand-bright)', animation: 'hv-pulse 1.8s ease-in-out infinite' }} />
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>7 active products</span>
        </span>
      </div>

      <style>{`
        @keyframes hv-rise { from { transform: scaleY(.2); opacity: 0 } to { transform: scaleY(1); opacity: 1 } }
        @keyframes hv-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-11px) } }
        @keyframes hv-pulse { 0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(245,41,13,.5) } 50% { opacity: .75; box-shadow: 0 0 0 6px rgba(245,41,13,0) } }
        @media (prefers-reduced-motion: reduce) {
          .hero-visual * { animation: none !important }
        }
        @media (max-width: 1024px) { .hero-visual { min-height: 0 } }
      `}</style>
    </div>
  );
}
