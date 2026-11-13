import Link from 'next/link';
import { cities } from '@/data/cities';
import {
  serviceCityPath,
  isIndexableCityService,
  PRIORITY_SERVICES,
  priorityCompanyHeadline,
  isPriorityService,
  AGENCY_CITIES,
} from '@/data/serviceCity';

const CITIES = [
  { slug: 'edmonton', name: 'Edmonton' },
  { slug: 'calgary', name: 'Calgary' },
  { slug: 'toronto', name: 'Toronto' },
  { slug: 'vancouver', name: 'Vancouver' },
  { slug: 'ottawa', name: 'Ottawa' },
  { slug: 'montreal', name: 'Montreal' },
];

function cityLinkLabel(serviceSlug: string, serviceName: string, cityName: string): string {
  if (isPriorityService(serviceSlug)) {
    const ps = PRIORITY_SERVICES.find(p => p.serviceSlug === serviceSlug);
    if (ps) {
      return `${priorityCompanyHeadline(serviceSlug, ps.label)} Company in ${cityName}`;
    }
  }
  return `${serviceName} in ${cityName}`;
}

type CityLink = { href: string; label: string; note?: string };

type ServiceCityLinksProps =
  | { serviceSlug: string; label: string; heading?: string }
  | { serviceSlug: string; serviceName: string }
  | { id?: string; heading: string; intro?: string; links: CityLink[] };

export default function ServiceCityLinks(props: ServiceCityLinksProps) {
  if ('links' in props) return <ServiceCityLinkList {...props} />;
  if ('label' in props) return <ServiceCitySidebar {...props} />;
  const { serviceSlug, serviceName } = props;
  const links = (isPriorityService(serviceSlug) ? cities : CITIES)
    .filter(c => isIndexableCityService(c.slug, serviceSlug));
  if (!links.length) return null;
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>{serviceName} by city</h2>
        <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 18px', maxWidth: 680 }}>Local teams, local pricing guidance and case studies for each city we serve across Canada.</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {links.map(c => (
            <Link key={c.slug} href={serviceCityPath(serviceSlug, c.slug)} className="pill" style={{ height: 'auto', minHeight: 44, maxWidth: '100%', padding: '10px 16px', whiteSpace: 'normal', overflowWrap: 'anywhere' }}>{cityLinkLabel(serviceSlug, serviceName, c.name)}</Link>
          ))}
        </div>
        {serviceSlug === 'digital-marketing' ? (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
            {AGENCY_CITIES.map(slug => {
              const city = CITIES.find(c => c.slug === slug);
              if (!city) return null;
              return (
                <Link key={slug} href={`/locations/digital-marketing-agency-in-${slug}`} className="pill" style={{ height: 'auto', minHeight: 44, maxWidth: '100%', boxSizing: 'border-box', padding: '10px 16px', whiteSpace: 'normal', overflowWrap: 'anywhere' }}>
                  Digital Marketing Agency in {city.name}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Inline city links with a short factual note for each city. */
function ServiceCityLinkList({ id, heading, intro, links }: { id?: string; heading: string; intro?: string; links: CityLink[] }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 id={id ? `${id}-heading` : undefined} style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>{heading}</h2>
        {intro ? <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 18px', maxWidth: 680 }}>{intro}</p> : null}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
          {links.map(link => (
            <li key={link.href} style={{ lineHeight: 1.6 }}>
              <Link href={link.href} style={{ color: 'var(--brand)', fontWeight: 600 }}>{link.label}</Link>
              {link.note ? <span style={{ color: 'var(--body)' }}> — {link.note}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Sidebar box for service-focused blog posts: links straight to our service pages
 * across cities, so the posts pass crawl paths to the local service pages.
 */
function ServiceCitySidebar({ serviceSlug, label, heading }: { serviceSlug: string; label: string; heading?: string }) {
  return (
    <div style={{
      background: 'var(--surface-alt)', border: '1px solid var(--line)',
      borderRadius: 20, padding: 24, marginTop: 24,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--faint)', marginBottom: 16 }}>
        {heading ?? `${label} by city`}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {CITIES.map(c => (
          <Link key={c.slug} href={serviceCityPath(serviceSlug, c.slug)} className="pill" style={{ height: 'auto', minHeight: 44, maxWidth: '100%', boxSizing: 'border-box', padding: '10px 16px', whiteSpace: 'normal', overflowWrap: 'anywhere' }}>
            {`${label} in ${c.name}`}
          </Link>
        ))}
      </div>
    </div>
  );
}
