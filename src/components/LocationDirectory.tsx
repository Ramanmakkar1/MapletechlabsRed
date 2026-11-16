import Link from 'next/link';
import { locationDirectoryLinks } from '@/data/locations';

/**
 * Server-rendered directory of location pages. Plain <a>-style Next links are
 * emitted in the HTML so crawlers can discover the province and service+city
 * pages without running client-side navigation.
 */
export default function LocationDirectory() {
  return (
    <nav aria-label="More location pages">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
        {locationDirectoryLinks.map(link => (
          <li key={link.href}>
            <Link href={link.href} style={{ color: 'var(--brand)', fontWeight: 600 }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
