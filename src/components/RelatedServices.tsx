import Link from 'next/link';

type RelatedServiceLink = { href: string; label: string };

export default function RelatedServices({ links }: { links: RelatedServiceLink[] }) {
  return (
    <nav aria-label="Related services" style={{ marginTop: 'clamp(40px, 5vw, 60px)' }}>
      <h2 style={{ fontSize: 'var(--fs-h4)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>Related services</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))' }}>
        {links.map(link => (
          <li key={link.href} style={{ minWidth: 0 }}>
            <Link href={link.href} style={{ display: 'block', padding: '16px 18px', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', background: 'var(--surface-alt)', color: 'var(--ink)', fontWeight: 600, fontSize: 15, lineHeight: 1.4, textDecoration: 'none', overflowWrap: 'anywhere' }}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
