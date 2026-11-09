import Link from 'next/link';
import { services } from '@/data/services';
import { serviceCityPath, isIndexableCityService } from '@/data/serviceCity';

const navigationLinkStyle = {
  height: 'auto', minHeight: 44, maxWidth: '100%', boxSizing: 'border-box',
  padding: '10px 16px', whiteSpace: 'normal', overflowWrap: 'anywhere', lineHeight: 1.4,
} as const;

/**
 * Sidebar box for city-focused blog posts: links straight to our service pages
 * in that city, so the posts pass crawl paths to the local service pages.
 */
export default function LocalServiceLinks({ citySlug, cityName }: { citySlug: string; cityName: string }) {
  const links = services.filter(s => isIndexableCityService(citySlug, s.slug));
  return (
    <div style={{
      background: 'var(--surface-alt)', border: '1px solid var(--line)',
      borderRadius: 20, padding: 24, marginTop: 24,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--faint)', marginBottom: 16 }}>
        Our services in {cityName}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Link href="/" className="pill" style={navigationLinkStyle}>
          Mapletech Labs home
        </Link>
        <Link href="/services" className="pill" style={navigationLinkStyle}>
          All software services
        </Link>
        <Link href={`/locations/software-development-company-in-${citySlug}`} className="pill" style={navigationLinkStyle}>
          Software development in {cityName}
        </Link>
        {links.map(s => (
          <Link key={s.slug} href={serviceCityPath(s.slug, citySlug)} className="pill" style={navigationLinkStyle}>
            {s.name} in {cityName}
          </Link>
        ))}
      </div>
    </div>
  );
}
