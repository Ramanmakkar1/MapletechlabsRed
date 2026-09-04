import { SITEMAP_HEADERS, buildUrlset, localSeoSitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(localSeoSitemapEntries()), { headers: SITEMAP_HEADERS });
}
