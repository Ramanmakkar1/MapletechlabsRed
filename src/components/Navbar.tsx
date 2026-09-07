'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { serviceCategories, industryLinks, companyLinks } from '@/data/nav';

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform .25s ease', transform: open ? 'rotate(180deg)' : 'none', opacity: .55 }}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setActiveMenu(null);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const open = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  };
  const hold = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const solid = scrolled || activeMenu !== null;

  const navLink: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    height: 40, padding: '0 14px', borderRadius: 100,
    fontSize: 14.5, fontWeight: 600, color: 'var(--ink)',
    background: 'transparent', border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', letterSpacing: '-0.01em',
    transition: 'background-color .2s ease, color .2s ease',
  };

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: solid ? 'rgba(255,255,255,.88)' : 'transparent',
          backdropFilter: solid ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: solid ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: `1px solid ${solid ? 'var(--line)' : 'transparent'}`,
          transition: 'background-color .3s ease, border-color .3s ease, backdrop-filter .3s ease',
        }}
        onMouseLeave={close}
      >
        <div className="cb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76, gap: 20 }}>
          {/* logo */}
          <Link href="/" aria-label="Mapletech Labs — home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image src="/logo.png" alt="Mapletech Labs" width={52} height={52} priority style={{ height: 52, width: 52 }} />
          </Link>

          {/* desktop nav */}
          <nav className="nav-desktop" style={{ alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}>
            <button
              style={{ ...navLink, background: activeMenu === 'services' ? 'var(--surface-sunk)' : 'transparent' }}
              onMouseEnter={() => open('services')}
              onFocus={() => open('services')}
              aria-expanded={activeMenu === 'services'}
              aria-haspopup="true"
            >
              Services <Chevron open={activeMenu === 'services'} />
            </button>

            <button
              style={{ ...navLink, background: activeMenu === 'industries' ? 'var(--surface-sunk)' : 'transparent' }}
              onMouseEnter={() => open('industries')}
              onFocus={() => open('industries')}
              aria-expanded={activeMenu === 'industries'}
              aria-haspopup="true"
            >
              Industries <Chevron open={activeMenu === 'industries'} />
            </button>

            <button
              style={{ ...navLink, background: activeMenu === 'company' ? 'var(--surface-sunk)' : 'transparent' }}
              onMouseEnter={() => open('company')}
              onFocus={() => open('company')}
              aria-expanded={activeMenu === 'company'}
              aria-haspopup="true"
            >
              Company <Chevron open={activeMenu === 'company'} />
            </button>

            <Link href="/case-studies" style={navLink} onMouseEnter={close}>Work</Link>
            <Link href="/blog" style={navLink} onMouseEnter={close}>Insights</Link>
            <Link href="/locations" style={navLink} onMouseEnter={close}>Locations</Link>
          </nav>

          {/* right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <a
              href="tel:+14036048692"
              className="hide-mobile"
              style={{ alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 600, color: 'var(--body)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +1 (403) 604-8692
            </a>

            <Link href="/contact" className="btn btn--primary btn--sm">
              Get a Quote <Arrow />
            </Link>

            {/* mobile toggle */}
            <button
              className="nav-mobile"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{
                width: 44, height: 44, borderRadius: 12, border: '1px solid var(--line)',
                background: 'var(--surface)', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexDirection: 'column', gap: 5,
              }}
            >
              <span style={{ display: 'block', width: 18, height: 2, borderRadius: 2, background: 'var(--ink)', transition: '.3s', transform: menuOpen ? 'translateY(3.5px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: 18, height: 2, borderRadius: 2, background: 'var(--ink)', transition: '.3s', transform: menuOpen ? 'translateY(-3.5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* ── MEGA PANELS ─────────────────────────── */}
        {activeMenu && (
          <div
            onMouseEnter={hold}
            onMouseLeave={close}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--surface)',
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              boxShadow: '0 24px 60px rgba(0,0,0,.10)',
              animation: 'mega-in .22s cubic-bezier(.16,1,.3,1)',
              maxHeight: 'calc(100vh - 76px)', overflowY: 'auto',
            }}
          >
            <div className="cb-container" style={{ padding: '36px 48px 40px' }}>
              {activeMenu === 'services' && (
                <>
                  <MegaHead title="What we build" href="/services" cta="All services" />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '28px 32px' }}>
                    {serviceCategories.map((c) => (
                      <div key={c.title}>
                        <Link
                          href={c.href}
                          onClick={() => setActiveMenu(null)}
                          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
                          className="mega-cat"
                        >
                          <span style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--surface-alt)', color: 'var(--brand)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                            {c.icon}
                          </span>
                          <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{c.title}</span>
                        </Link>
                        <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 44px', display: 'grid', gap: 7 }}>
                          {c.links.map((l) => (
                            <li key={l.href}>
                              <Link href={l.href} onClick={() => setActiveMenu(null)} className="mega-link">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeMenu === 'industries' && (
                <>
                  <MegaHead title="Sectors we serve" href="/industries" cta="All industries" />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                    {industryLinks.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setActiveMenu(null)} className="mega-card">
                        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{l.label}</span>
                        <span style={{ color: 'var(--brand)', display: 'flex' }}><Arrow /></span>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {activeMenu === 'company' && (
                <>
                  <MegaHead title="About Mapletech Labs" href="/about" cta="Our story" />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                    {companyLinks.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setActiveMenu(null)} className="mega-card">
                        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{l.label}</span>
                        <span style={{ color: 'var(--brand)', display: 'flex' }}><Arrow /></span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ── MOBILE DRAWER ───────────────────────── */}
      {menuOpen && (
        <div
          className="nav-mobile-drawer"
          style={{
            position: 'fixed', inset: '76px 0 0', zIndex: 999,
            background: 'var(--surface)', overflowY: 'auto',
            animation: 'drawer-in .25s cubic-bezier(.16,1,.3,1)',
          }}
        >
          <div className="cb-container" style={{ padding: '24px 24px 56px' }}>
            {[
              { key: 'services', label: 'Services', items: serviceCategories.map((c) => ({ label: c.title, href: c.href })) },
              { key: 'industries', label: 'Industries', items: industryLinks },
              { key: 'company', label: 'Company', items: companyLinks },
            ].map((grp) => (
              <div key={grp.key} style={{ borderBottom: '1px solid var(--line)' }}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === grp.key ? null : grp.key)}
                  aria-expanded={mobileExpanded === grp.key}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 17, fontWeight: 700, color: 'var(--ink)', fontFamily: 'inherit',
                  }}
                >
                  {grp.label} <Chevron open={mobileExpanded === grp.key} />
                </button>
                {mobileExpanded === grp.key && (
                  <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 18px', display: 'grid', gap: 2 }}>
                    {grp.items.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setMenuOpen(false)}
                          style={{ display: 'block', padding: '11px 14px', borderRadius: 10, fontSize: 15, fontWeight: 500, color: 'var(--body)', background: 'var(--surface-alt)' }}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {[
              { label: 'Work', href: '/case-studies' },
              { label: 'Insights', href: '/blog' },
              { label: 'Locations', href: '/locations' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '18px 0', borderBottom: '1px solid var(--line)', fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}
              >
                {l.label}
              </Link>
            ))}

            <div style={{ display: 'grid', gap: 12, marginTop: 28 }}>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                Get a Quote <Arrow />
              </Link>
              <a href="tel:+14036048692" className="btn btn--ghost btn--lg" style={{ width: '100%' }}>
                +1 (403) 604-8692
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes mega-in { from { opacity: 0; transform: translateY(-8px) } to { opacity: 1; transform: none } }
        @keyframes drawer-in { from { opacity: 0; transform: translateY(-10px) } to { opacity: 1; transform: none } }
        .mega-link { font-size: 13.5px; color: var(--muted); transition: color .18s ease; }
        .mega-link:hover { color: var(--brand); }
        .mega-cat:hover span:last-child { color: var(--brand); }
        .mega-card {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 16px 18px; border: 1px solid var(--line); border-radius: var(--r-md);
          background: var(--surface-alt); transition: .22s ease;
        }
        .mega-card:hover { border-color: var(--brand-line); background: var(--brand-tint); transform: translateY(-2px); }
        .nav-mobile-drawer { display: block; }
        @media (min-width: 1024px) { .nav-mobile-drawer { display: none; } }
      `}</style>
    </>
  );
}

function MegaHead({ title, href, cta }: { title: string; href: string; cta: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 26, paddingBottom: 16, borderBottom: '1px solid var(--line)' }}>
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        {title}
      </span>
      <Link href={href} className="link-arrow" style={{ fontSize: 14 }}>
        {cta} <Arrow />
      </Link>
    </div>
  );
}
