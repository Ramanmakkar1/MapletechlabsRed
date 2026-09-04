import { SITEMAP_HEADERS, buildUrlset, blogSitemapEntries } from '@/lib/sitemap-data';

export function GET() {
  return new Response(buildUrlset(blogSitemapEntries()), { headers: SITEMAP_HEADERS });
}
