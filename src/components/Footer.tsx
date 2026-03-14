'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI & Machine Learning', href: '/services/ai-ml' },
  { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { label: 'Blockchain & Web3', href: '/services/blockchain-web3' },
  { label: 'Product Design', href: '/services/product-design' },
  { label: 'SaaS Development', href: '/services/saas-development' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'AR / VR', href: '/services/ar-vr' },
  { label: 'Game Development', href: '/services/game-development' },
  { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
  { label: 'Branding', href: '/services/branding' },
];

const industries = [
  { label: 'FinTech', href: '/industries/fintech' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-Commerce', href: '/industries/ecommerce' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'EdTech', href: '/industries/edtech' },
  { label: 'Enterprise', href: '/industries/enterprise' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Locations', href: '/locations' },
  { label: 'All Services', href: '/services' },
];

const locations = [
  { label: 'Toronto', href: '/locations/toronto' },
  { label: 'Vancouver', href: '/locations/vancouver' },
  { label: 'Calgary', href: '/locations/calgary' },
  { label: 'Edmonton', href: '/locations/edmonton' },
  { label: 'Ottawa', href: '/locations/ottawa' },
  { label: 'Montreal', href: '/locations/montreal' },
  { label: 'Kitchener-Waterloo', href: '/locations/kitchener' },
  { label: 'London, ON', href: '/locations/london-on' },
  { label: 'Winnipeg', href: '/locations/winnipeg' },
  { label: 'Halifax', href: '/locations/halifax' },
  { label: 'Victoria', href: '/locations/victoria' },
  { label: 'Saskatoon', href: '/locations/saskatoon' },
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

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.4, display: 'block' }}
      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
    >
      {children}
    </Link>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* CTA Banner */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ padding: 'clamp(48px, 8vw, 80px) 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              Ready to build something great?
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>
              Let&apos;s turn your idea into a world-class digital product.
            </p>
          </div>
          <Link
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 32px', borderRadius: 100, background: '#f5290d', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s', whiteSpace: 'nowrap', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d9220b'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(245,41,13,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f5290d'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="cb-container" style={{ padding: 'clamp(48px, 8vw, 80px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(32px, 5vw, 48px)' }}>

          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Image
              src="/logo.png"
              alt="Mapletech Labs"
              width={250}
              height={100}
              style={{ height: 'clamp(40px, 6vw, 60px)', width: 'auto', objectFit: 'contain' as const, marginBottom: 20 }}
            />
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              World-class software engineering for companies ready to lead their industry. Based in Canada, building globally.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              <a href="tel:+14036048692" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +1 (403) 604-8692
              </a>
              <a href="mailto:hello@mapletechlabs.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hello@mapletechlabs.com
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: '0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.4)'; e.currentTarget.style.color = '#f5290d'; e.currentTarget.style.background = 'rgba(245,41,13,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'transparent'; }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <ColTitle>Services</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {services.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Industries Column */}
          <div>
            <ColTitle>Industries</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {industries.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <ColTitle>Company</ColTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {company.map(s => (
                  <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
                ))}
              </div>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <ColTitle>Locations</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {locations.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            &copy; {new Date().getFullYear()} Mapletech Labs Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap' }}>
            {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
