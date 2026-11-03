import Link from 'next/link';
import { services } from '@/data/services';
import { serviceCityPath, isIndexableCityService } from '@/data/serviceCity';

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
        <Link href={`/locations/software-development-company-in-${citySlug}`} className="pill">
          Software development in {cityName}
        </Link>
        {links.map(s => (
          <Link key={s.slug} href={serviceCityPath(s.slug, citySlug)} className="pill">
            {s.name} in {cityName}
          </Link>
        ))}
      </div>
    </div>
  );
}
