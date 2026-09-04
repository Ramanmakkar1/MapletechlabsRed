import { BASE_URL, SITEMAP_CHILDREN, SITEMAP_HEADERS, newestLastmod, xmlEscape } from '@/lib/sitemap-data';

export function GET() {
  // A child's lastmod is the newest lastmod among its own URLs. Children whose
  // URLs carry no real dates are listed without <lastmod> rather than with the
  // request time, which previously marked every child as modified on every fetch.
  const entries = SITEMAP_CHILDREN.map(child => {
    const lastmod = newestLastmod(child.entries());
    const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
    return `  <sitemap>\n    <loc>${xmlEscape(`${BASE_URL}/${child.file}`)}</loc>${lastmodTag}\n  </sitemap>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

  return new Response(xml, { headers: SITEMAP_HEADERS });
}
