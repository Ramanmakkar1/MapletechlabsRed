import { SITEMAP_HEADERS, buildUrlset, blogSitemapEntries } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildUrlset(blogSitemapEntries()), { headers: SITEMAP_HEADERS });
}
