import Link from 'next/link';
import { serviceCityPath, isIndexableCityService } from '@/data/serviceCity';

const CITIES = [
  { slug: 'edmonton', name: 'Edmonton' },
  { slug: 'calgary', name: 'Calgary' },
  { slug: 'toronto', name: 'Toronto' },
  { slug: 'vancouver', name: 'Vancouver' },
  { slug: 'ottawa', name: 'Ottawa' },
  { slug: 'montreal', name: 'Montreal' },
];

export default function ServiceCityLinks({ serviceSlug, serviceName }: { serviceSlug: string; serviceName: string }) {
  const links = CITIES.filter(c => isIndexableCityService(c.slug, serviceSlug));
  if (!links.length) return null;
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>{serviceName} by city</h2>
        <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 18px', maxWidth: 680 }}>Local teams, local pricing guidance and case studies for each city we serve across Canada.</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {links.map(c => (
            <Link key={c.slug} href={serviceCityPath(serviceSlug, c.slug)} className="pill">{serviceName} in {c.name}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
