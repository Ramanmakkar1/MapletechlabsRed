import Link from 'next/link';

const CITY_LINKS = [
  { slug: 'edmonton', name: 'Edmonton' },
  { slug: 'calgary', name: 'Calgary' },
  { slug: 'toronto', name: 'Toronto' },
  { slug: 'vancouver', name: 'Vancouver' },
  { slug: 'ottawa', name: 'Ottawa' },
  { slug: 'montreal', name: 'Montreal' },
];

const SERVICE_LINKS = [
  { href: '/services/saas-development', label: 'Custom software & SaaS development' },
  { href: '/services/web-development', label: 'Web development' },
  { href: '/services/mobile-app-development', label: 'Mobile app development' },
  { href: '/services/ai-ml', label: 'AI development' },
  { href: '/services/product-design', label: 'UI/UX design' },
];

/**
 * Sidebar box for the national "software development company Canada" guides:
 * links straight to the city pages and the service money pages.
 */
export default function SoftwareCompanyLinks() {
  return (
    <div style={{
      background: 'var(--surface-alt)', border: '1px solid var(--line)',
      borderRadius: 20, padding: 24, marginTop: 24,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--faint)', marginBottom: 16 }}>
        Software development company by city
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {CITY_LINKS.map(c => (
          <Link key={c.slug} href={`/locations/software-development-company-in-${c.slug}`} className="pill" style={{ height: 'auto', minHeight: 44, maxWidth: '100%', boxSizing: 'border-box', padding: '10px 16px', whiteSpace: 'normal', overflowWrap: 'anywhere' }}>
            {`Software development company in ${c.name}`}
          </Link>
        ))}
      </div>
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--faint)', marginBottom: 16, marginTop: 20 }}>
        Our services
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {SERVICE_LINKS.map(s => (
          <Link key={s.href} href={s.href} className="pill" style={{ height: 'auto', minHeight: 44, maxWidth: '100%', boxSizing: 'border-box', padding: '10px 16px', whiteSpace: 'normal', overflowWrap: 'anywhere' }}>
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
