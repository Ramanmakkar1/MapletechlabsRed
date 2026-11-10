import { SITEMAP_HEADERS, buildUrlset, legalSitemapEntries } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildUrlset(legalSitemapEntries()), { headers: SITEMAP_HEADERS });
}
