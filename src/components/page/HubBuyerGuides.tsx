import Link from 'next/link';
import { hubBuyerGuides } from '@/data/buyer-guides';

export default function HubBuyerGuides({ serviceSlug, heading }: { serviceSlug: string; heading: string }) {
  const { national, cities } = hubBuyerGuides(serviceSlug);
  if (!national && cities.length === 0) return null;

  return (
    <section aria-labelledby={`${serviceSlug}-buyer-guides`} style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <h2 id={`${serviceSlug}-buyer-guides`}>{heading}</h2>
        <p className="lede">Comparing agencies before you hire? These guides cover costs, questions to ask and what to check in each city.</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
          {national && (
            <li><Link href={national.href}>{national.text}</Link></li>
          )}
          {cities.map((city) => (
            <li key={city.href}><Link href={city.href}>{city.text}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
