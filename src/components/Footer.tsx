'use client';

import Link from 'next/link';
import Image from 'next/image';

const cols = [
  { title: 'Services', links: [['Mobile Apps', '/services/mobile-app-development'], ['Web Systems', '#services'], ['AI Solutions', '#services'], ['Product Design', '#services'], ['Blockchain', '#services']] },
  { title: 'Company', links: [['About Us', '#about'], ['Case Studies', '#portfolio'], ['R&D Labs', '#labs'], ['Careers', '#contact'], ['Press', '#contact']] },
  { title: 'Industries', links: [['FinTech', '#industries'], ['Healthcare', '#industries'], ['E-Commerce', '#industries'], ['Logistics', '#industries'], ['Enterprise', '#industries']] },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '100px 0 48px' }}>
      <div className="cb-container">
        <div className="footer-grid" style={{ marginBottom: 80 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <Image
                src="/logo.png"
                alt="Mapletech Labs"
                width={250}
                height={100}
                style={{ height: 'clamp(50px, 8vw, 80px)', width: 'auto', objectFit: 'contain' as const }}
              />
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 300, marginBottom: 28 }}>
              World-class software engineering for the companies shaping tomorrow. Offices across 12 countries.
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
              <a href="tel:+14036048692" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 15, transition: '0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +1 (403) 604-8692
              </a>
              <a href="mailto:hello@townmedilabs.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 15, transition: '0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                hello@townmedilabs.com
              </a>
            </div>

            {/* Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#f5290d', boxShadow: '0 0 8px #f5290d' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#f5290d', letterSpacing: '0.08em', textTransform: 'uppercase' }}>All Systems Operational</span>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.4)'; e.currentTarget.style.color = '#f5290d'; e.currentTarget.style.background = 'rgba(245,41,13,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'transparent'; }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: '0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
                  >{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2025 Mapletech Labs Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 32 }}>
            {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
              <Link key={label} href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)', textDecoration: 'none', transition: '0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
