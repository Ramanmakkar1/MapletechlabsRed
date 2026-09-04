import { SITEMAP_HEADERS, buildUrlset, industrySitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(industrySitemapEntries()), { headers: SITEMAP_HEADERS });
}
