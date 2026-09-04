import { SITEMAP_HEADERS, buildUrlset, locationSitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(locationSitemapEntries()), { headers: SITEMAP_HEADERS });
}
