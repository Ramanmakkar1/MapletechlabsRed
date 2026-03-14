import { BASE_URL, blogSlugs, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();
  const xml = buildUrlset(
    blogSlugs.map(slug => ({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.6',
    }))
  );
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
