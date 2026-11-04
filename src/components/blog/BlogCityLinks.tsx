import type { CSSProperties } from 'react';
import Link from 'next/link';
import { PRIORITY_SERVICES, priorityCompanyHeadline, serviceCityPath } from '@/data/serviceCity';

const CITIES = [
  { slug: 'edmonton', name: 'Edmonton' },
  { slug: 'calgary', name: 'Calgary' },
  { slug: 'toronto', name: 'Toronto' },
  { slug: 'vancouver', name: 'Vancouver' },
  { slug: 'ottawa', name: 'Ottawa' },
  { slug: 'montreal', name: 'Montreal' },
];

const card: CSSProperties = {
  display: 'block', padding: '16px 18px', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)',
  background: 'var(--surface-alt)', color: 'var(--ink)', fontWeight: 600, fontSize: 15, lineHeight: 1.4, textDecoration: 'none', overflowWrap: 'anywhere',
};

/**
 * "Hire us in your city" block for commercial blog posts: links to the
 * priority city pages for one service, plus the national service page.
 * Without a serviceSlug it links the /locations/software-development-company-in-<city> pages.
 */
export default function BlogCityLinks({ serviceSlug, heading = 'Hire us in your city' }: { serviceSlug?: string; heading?: string }) {
  const ps = serviceSlug ? PRIORITY_SERVICES.find(p => p.serviceSlug === serviceSlug) : undefined;
  if (serviceSlug && !ps) return null;
  const name = ps ? priorityCompanyHeadline(ps.serviceSlug, ps.label) : 'Software Development';
  const links = CITIES.map(c => ({
    href: ps ? serviceCityPath(ps.serviceSlug, c.slug) : `/locations/software-development-company-in-${c.slug}`,
    label: `${name} Company in ${c.name}`,
  }));
  return (
    <nav aria-label={heading} style={{ marginTop: 'clamp(40px, 5vw, 60px)' }}>
      <h2 style={{ fontSize: 'var(--fs-h4)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>{heading}</h2>
      <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 16px', maxWidth: '68ch' }}>
        Local teams, pricing guidance and case studies for the Canadian cities we serve most.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))' }}>
        {links.map(l => (
          <li key={l.href} style={{ minWidth: 0 }}><Link href={l.href} style={card}>{l.label}</Link></li>
        ))}
      </ul>
      {ps && (
        <p style={{ margin: '16px 0 0', fontSize: 15 }}>
          <Link href={`/services/${ps.serviceSlug}`} className="link-arrow">{ps.label} services across Canada &rarr;</Link>
        </p>
      )}
    </nav>
  );
}
