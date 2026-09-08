'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * Every link column holds exactly six items in a single column, so the four
 * columns are the same width and end on the same line. The services and
 * cities that do not fit the six keep their links on the overflow row below,
 * rather than making one column twice as long as its neighbours.
 */
const columns: { title: string; links: { label: string; href: string; lang?: string }[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Apps', href: '/services/mobile-app-development' },
      { label: 'AI & Machine Learning', href: '/services/ai-ml' },
      { label: 'SaaS Development', href: '/services/saas-development' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { label: 'Product Design', href: '/services/product-design' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'FinTech', href: '/industries/fintech' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'E-Commerce', href: '/industries/ecommerce' },
      { label: 'Logistics', href: '/industries/logistics' },
      { label: 'EdTech', href: '/industries/edtech' },
      { label: 'Enterprise', href: '/industries/enterprise' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Toronto', href: '/locations/software-development-company-in-toronto' },
      { label: 'Vancouver', href: '/locations/software-development-company-in-vancouver' },
      { label: 'Calgary', href: '/locations/software-development-company-in-calgary' },
      { label: 'Edmonton', href: '/locations/software-development-company-in-edmonton' },
      { label: 'Ottawa', href: '/locations/software-development-company-in-ottawa' },
      { label: 'Montréal', href: '/locations/software-development-company-in-montreal', lang: 'fr' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'All Services', href: '/services' },
      { label: 'All Locations', href: '/locations' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

/* The remaining services and cities, kept as links on one quiet line. */
const more: { label: string; href: string }[] = [
  { label: 'Blockchain & Web3', href: '/services/blockchain-web3' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'AR / VR', href: '/services/ar-vr' },
  { label: 'Game Development', href: '/services/game-development' },
  { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
  { label: 'Branding', href: '/services/branding' },
  { label: 'Kitchener-Waterloo', href: '/locations/software-development-company-in-kitchener' },
  { label: 'London, ON', href: '/locations/software-development-company-in-london-on' },
  { label: 'Winnipeg', href: '/locations/software-development-company-in-winnipeg' },
  { label: 'Halifax', href: '/locations/software-development-company-in-halifax' },
  { label: 'Victoria', href: '/locations/software-development-company-in-victoria' },
  { label: 'Saskatoon', href: '/locations/software-development-company-in-saskatoon' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/canadamapletechlabs/',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Mapletechlabs/',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mapletechlabs/',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>,
  },
];

const contacts = [
  {
    label: '+1 (403) 604-8692',
    href: 'tel:+14036048692',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    label: 'hello@mapletechlabs.ca',
    href: 'mailto:hello@mapletechlabs.ca',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

const legal: [string, string][] = [
  ['Privacy Policy', '/privacy'],
  ['Terms of Service', '/terms'],
  ['Cookie Policy', '/cookies'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="cb-container" style={{ paddingTop: 'clamp(44px, 5vw, 68px)', paddingBottom: 'clamp(28px, 3vw, 40px)' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Image
              src="/logo.png"
              alt="Mapletech Labs"
              width={250}
              height={100}
              style={{ height: 40, width: 'auto', objectFit: 'contain' }}
            />
            <p>World-class software engineering for companies ready to lead their industry. Based in Canada, building globally.</p>
            <ul className="footer-contact">
              {contacts.map(c => (
                <li key={c.href}>
                  <a href={c.href}>{c.icon}{c.label}</a>
                </li>
              ))}
            </ul>
            <ul className="footer-socials">
              {socials.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Four columns, six links each */}
          {columns.map(col => (
            <nav key={col.title} className="footer-col" aria-label={`Footer ${col.title.toLowerCase()} links`}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.lang ? <span lang={l.lang}>{l.label}</span> : l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Everything that did not fit the six, on one line */}
        <nav className="footer-more" aria-label="More services and locations">
          {more.map((m, i) => (
            <span key={m.href}>
              <Link href={m.href}>{m.label}</Link>
              {i < more.length - 1 && <i aria-hidden>·</i>}
            </span>
          ))}
        </nav>
      </div>

      <div className="footer-bar">
        <div className="cb-container">
          <span>&copy; {new Date().getFullYear()} Mapletech Labs Inc. All rights reserved.</span>
          <nav aria-label="Legal">
            {legal.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
