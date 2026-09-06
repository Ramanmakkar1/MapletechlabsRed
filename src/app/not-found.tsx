import type { Metadata } from 'next';
import Link from 'next/link';

/*
 * Server-rendered 404. The previous version was a client component that
 * counted down and router.replace()'d to the homepage — Google classifies a
 * 404 that immediately redirects to a 200 page as a soft 404. This one
 * returns a real 404 status, stays put, and offers navigation instead.
 */
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
  // Clear any canonical that could be inherited — a 404 must not canonicalise
  // to another URL.
  alternates: { canonical: null },
};

const HUB_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface)',
        color: 'var(--ink)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      <h1
        style={{
          fontSize: 'var(--fs-display)',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          margin: 0,
          background: 'var(--brand)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </h1>
      <p style={{ fontSize: 20, color: 'var(--muted)', marginTop: 16, marginBottom: 32 }}>
        This page doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          height: 48,
          padding: '0 32px',
          borderRadius: 100,
          background: 'var(--brand)',
          color: '#fff',
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'opacity 0.3s',
        }}
      >
        Go to Homepage
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
      <nav aria-label="Popular pages" style={{ marginTop: 32 }}>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          {HUB_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  color: 'var(--muted)',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'underline',
                  textUnderlineOffset: 4,
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
