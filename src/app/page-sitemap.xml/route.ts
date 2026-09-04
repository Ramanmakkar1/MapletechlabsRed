import { SITEMAP_HEADERS, buildUrlset, pageSitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(pageSitemapEntries()), { headers: SITEMAP_HEADERS });
}
