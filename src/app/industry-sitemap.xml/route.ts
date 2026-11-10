import { SITEMAP_HEADERS, buildUrlset, industrySitemapEntries } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildUrlset(industrySitemapEntries()), { headers: SITEMAP_HEADERS });
}
