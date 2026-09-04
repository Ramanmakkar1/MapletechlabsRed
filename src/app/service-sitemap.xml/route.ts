import { SITEMAP_HEADERS, buildUrlset, serviceSitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(serviceSitemapEntries()), { headers: SITEMAP_HEADERS });
}
