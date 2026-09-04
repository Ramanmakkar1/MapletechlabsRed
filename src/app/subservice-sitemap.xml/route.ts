import { SITEMAP_HEADERS, buildUrlset, subserviceSitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(subserviceSitemapEntries()), { headers: SITEMAP_HEADERS });
}
