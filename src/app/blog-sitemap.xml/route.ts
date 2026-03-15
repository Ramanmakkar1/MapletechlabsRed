import { BASE_URL, blogSlugs, buildUrlset } from '@/lib/sitemap-data';

/* Realistic lastmod dates staggered across the last 3 months so Google
   sees organic content updates rather than a single bulk-publish date. */
const blogLastmod: Record<string, string> = {
  'top-10-unicorn-apps-2026':                    '2026-03-15',
  'saas-guide':                                  '2026-03-12',
  'top-seo-companies-canada':                    '2026-03-08',
  'top-software-development-companies-canada':   '2026-03-04',
  'app-development-cost-canada':                 '2026-02-27',
  'ai-development-companies-canada':             '2026-02-21',
  'app-development-companies-edmonton':          '2026-02-14',
  'website-cost-canada':                         '2026-02-07',
  'choose-software-development-company-canada':  '2026-01-30',
  'web-development-companies-toronto':           '2026-01-22',
  'saas-development-cost-canada':                '2026-01-15',
  'blockchain-development-companies-canada':     '2026-01-08',
  'digital-marketing-cost-canada':               '2025-12-28',
  'software-development-companies-calgary':      '2025-12-19',
};

export function GET() {
  const xml = buildUrlset(
    blogSlugs.map(slug => ({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: blogLastmod[slug] ?? '2026-03-15',
      changefreq: 'monthly',
      priority: '0.6',
    }))
  );
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
