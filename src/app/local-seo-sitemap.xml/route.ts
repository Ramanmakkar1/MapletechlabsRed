import { SITEMAP_HEADERS, buildUrlset, localSeoSitemapEntries } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildUrlset(localSeoSitemapEntries()), { headers: SITEMAP_HEADERS });
}
