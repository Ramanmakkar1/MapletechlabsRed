import { SITEMAP_HEADERS, buildUrlset, serviceSitemapEntries } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildUrlset(serviceSitemapEntries()), { headers: SITEMAP_HEADERS });
}
