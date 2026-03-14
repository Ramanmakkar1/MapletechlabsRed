import { BASE_URL, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();
  const xml = buildUrlset([
    { loc: BASE_URL, lastmod: now, changefreq: 'weekly', priority: '1.0' },
    { loc: `${BASE_URL}/about`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
    { loc: `${BASE_URL}/contact`, lastmod: now, changefreq: 'monthly', priority: '0.9' },
    { loc: `${BASE_URL}/services`, lastmod: now, changefreq: 'weekly', priority: '0.9' },
    { loc: `${BASE_URL}/blog`, lastmod: now, changefreq: 'weekly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/fintech-trading-platform`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/healthcare-telehealth`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/ecommerce-platform`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/logistics-platform`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/locations`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
    { loc: `${BASE_URL}/faq`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
  ]);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
