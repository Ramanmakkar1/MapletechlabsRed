import { SITEMAP_HEADERS, buildUrlset, legalSitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(legalSitemapEntries()), { headers: SITEMAP_HEADERS });
}
