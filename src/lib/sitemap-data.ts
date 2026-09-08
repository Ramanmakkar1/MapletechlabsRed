import { provinceSlugs } from '@/data/provinces';
import { serviceCityCombos, isPriorityService } from '@/data/serviceCity';
import { siteOrigin } from '@/lib/seo/canonical';

export const BASE_URL = siteOrigin();

export const serviceSlugs = [
  'mobile-app-development', 'ai-ml', 'web-development', 'product-design',
  'blockchain-web3', 'cloud-devops', 'ar-vr', 'digital-marketing',
  'wordpress-cms', 'game-development', 'branding', 'saas-development',
];

export const subServices: Record<string, string[]> = {
  'mobile-app-development': ['ios-app-development', 'android-app-development', 'flutter-development', 'react-native-apps', 'cross-platform-apps'],
  'ai-ml': ['llm-integration', 'ai-automation', 'computer-vision', 'predictive-analytics', 'ai-chatbots'],
  'web-development': ['nextjs-development', 'saas-platforms', 'ecommerce-systems', 'api-backend', 'enterprise-portals'],
  'product-design': ['ui-ux-strategy', 'wireframing', 'prototyping', 'design-systems', 'brand-identity'],
  'blockchain-web3': ['smart-contracts', 'defi-protocols', 'nft-platforms', 'crypto-wallets', 'web3-dapps'],
  'cloud-devops': ['aws-architecture', 'kubernetes-docker', 'ci-cd-pipelines', 'infrastructure-as-code', 'performance-scaling'],
  'ar-vr': ['mobile-ar', 'vr-applications', 'webxr-experiences', 'apple-vision-pro', 'industrial-ar'],
  'digital-marketing': ['seo-services', 'google-ads-ppc', 'social-media-marketing', 'content-marketing', 'performance-analytics'],
  'wordpress-cms': ['custom-wordpress-themes', 'woocommerce-stores', 'headless-wordpress', 'strapi-sanity-cms', 'site-speed-optimisation'],
  'game-development': ['mobile-games', 'unity-development', 'unreal-engine', 'hyper-casual-games', 'multiplayer-liveops'],
  'branding': ['brand-strategy', 'logo-visual-identity', 'brand-guidelines', 'rebranding', 'motion-video-branding'],
  'saas-development': ['saas-mvp-development', 'multi-tenant-architecture', 'billing-subscriptions', 'auth-sso', 'analytics-dashboards'],
};

export const industrySlugs = ['fintech', 'healthcare', 'ecommerce', 'logistics', 'edtech', 'enterprise'];

export const blogSlugs = [
  'use-claude-for-free', 'run-ai-models-locally-free',
  'saas-development-company-canada', 'website-development-company-canada',
  'agentic-ai-in-production', 'saas-ideas-2026', 'what-profitable-saas-gets-right',
  'top-10-unicorn-apps-2026', 'saas-guide', 'top-seo-companies-canada',
  'top-software-development-companies-canada',
  'app-development-cost-canada', 'ai-development-companies-canada',
  'app-development-companies-edmonton', 'website-cost-canada',
  'choose-software-development-company-canada', 'web-development-companies-toronto',
  'saas-development-cost-canada', 'blockchain-development-companies-canada',
  'digital-marketing-cost-canada', 'software-development-companies-calgary',
];

export const citySlugs = [
  'edmonton', 'toronto', 'vancouver', 'calgary', 'ottawa', 'montreal',
  'winnipeg', 'halifax', 'victoria', 'saskatoon', 'kitchener', 'london-on',
  'mississauga', 'hamilton', 'surrey', 'burnaby', 'regina', 'quebec-city',
  'brampton', 'markham', 'windsor', 'kelowna', 'laval', 'gatineau',
];

export type SitemapEntry = {
  loc: string;
  /** ISO date. Omitted when there is no real modification date for the URL. */
  lastmod?: string;
  changefreq: string;
  priority: string;
};

/** Escape the five XML-significant characters for use inside element text. */
export function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Newest lastmod among a set of entries, or undefined when none carries one. */
export function newestLastmod(entries: SitemapEntry[]): string | undefined {
  let newest: string | undefined;
  for (const entry of entries) {
    if (!entry.lastmod) continue;
    if (!newest || new Date(entry.lastmod) > new Date(newest)) newest = entry.lastmod;
  }
  return newest;
}

/*
 * Per-child entry builders. Only page-sitemap and blog-sitemap carry real
 * per-URL dates; the remaining children deliberately omit lastmod rather than
 * stamping the request time on every URL, which told crawlers that hundreds of
 * unchanged pages were modified on every fetch.
 */

export function pageSitemapEntries(): SitemapEntry[] {
  return [
    { loc: BASE_URL, lastmod: '2026-03-15', changefreq: 'weekly', priority: '1.0' },
    { loc: `${BASE_URL}/about`, lastmod: '2026-02-20', changefreq: 'monthly', priority: '0.8' },
    { loc: `${BASE_URL}/contact`, lastmod: '2026-02-10', changefreq: 'monthly', priority: '0.9' },
    { loc: `${BASE_URL}/services`, lastmod: '2026-03-10', changefreq: 'weekly', priority: '0.9' },
    { loc: `${BASE_URL}/blog`, lastmod: '2026-03-15', changefreq: 'weekly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies`, lastmod: '2026-01-25', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/fintech-trading-platform`, lastmod: '2026-01-18', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/healthcare-telehealth`, lastmod: '2026-01-12', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/ecommerce-platform`, lastmod: '2026-01-05', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/logistics-platform`, lastmod: '2025-12-22', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/real-estate-portal`, lastmod: '2025-12-15', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/payments-api-platform`, lastmod: '2025-12-08', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/locations`, lastmod: '2026-02-15', changefreq: 'monthly', priority: '0.8' },
    { loc: `${BASE_URL}/faq`, lastmod: '2026-03-01', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/industries`, lastmod: '2026-02-18', changefreq: 'monthly', priority: '0.8' },
    { loc: `${BASE_URL}/about/raman-makkar`, lastmod: '2026-02-20', changefreq: 'monthly', priority: '0.6' },
  ];
}

/* Real publish/update dates per post, staggered across the last 3 months. */
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

export function blogSitemapEntries(): SitemapEntry[] {
  return blogSlugs.map(slug => ({
    loc: `${BASE_URL}/blog/${slug}`,
    lastmod: blogLastmod[slug] ?? '2026-03-15',
    changefreq: 'monthly',
    priority: '0.6',
  }));
}

export function serviceSitemapEntries(): SitemapEntry[] {
  return serviceSlugs.map(slug => ({
    loc: `${BASE_URL}/services/${slug}`,
    changefreq: 'monthly',
    priority: '0.9',
  }));
}

export function subserviceSitemapEntries(): SitemapEntry[] {
  return Object.entries(subServices).flatMap(([category, slugs]) =>
    slugs.map(slug => ({
      loc: `${BASE_URL}/services/${category}/${slug}`,
      changefreq: 'monthly',
      priority: '0.8',
    }))
  );
}

export function industrySitemapEntries(): SitemapEntry[] {
  return industrySlugs.map(slug => ({
    loc: `${BASE_URL}/industries/${slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  }));
}

export function locationSitemapEntries(): SitemapEntry[] {
  const provinces = provinceSlugs.map(slug => ({
    loc: `${BASE_URL}/locations/${slug}`,
    changefreq: 'monthly' as const,
    priority: '0.75',
  }));
  const cities = citySlugs.map(slug => ({
    loc: `${BASE_URL}/locations/software-development-company-in-${slug}`,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));
  const serviceCities = serviceCityCombos.map(c => ({
    loc: `${BASE_URL}/locations/${c.slug}`,
    changefreq: 'monthly' as const,
    priority: '0.85',
  }));
  return [...provinces, ...cities, ...serviceCities];
}

export function localSeoSitemapEntries(): SitemapEntry[] {
  // Priority services now live at keyword URLs (in locationSitemapEntries), so
  // their old mesh URLs are excluded here to avoid duplicate listings.
  return citySlugs.flatMap(city =>
    serviceSlugs.filter(s => !isPriorityService(s)).map(service => ({
      loc: `${BASE_URL}/locations/${city}/${service}`,
      changefreq: 'monthly',
      priority: '0.85',
    }))
  );
}

export function legalSitemapEntries(): SitemapEntry[] {
  return ['privacy', 'terms', 'cookies'].map(slug => ({
    loc: `${BASE_URL}/${slug}`,
    changefreq: 'yearly',
    priority: '0.3',
  }));
}

/** Child sitemaps in index order, each paired with its entry builder. */
export const SITEMAP_CHILDREN: { file: string; entries: () => SitemapEntry[] }[] = [
  { file: 'page-sitemap.xml', entries: pageSitemapEntries },
  { file: 'service-sitemap.xml', entries: serviceSitemapEntries },
  { file: 'subservice-sitemap.xml', entries: subserviceSitemapEntries },
  { file: 'industry-sitemap.xml', entries: industrySitemapEntries },
  { file: 'blog-sitemap.xml', entries: blogSitemapEntries },
  { file: 'location-sitemap.xml', entries: locationSitemapEntries },
  { file: 'local-seo-sitemap.xml', entries: localSeoSitemapEntries },
  { file: 'legal-sitemap.xml', entries: legalSitemapEntries },
];

/** Sitemaps are crawler-facing and cheap; cache at the edge for 6h, serve stale for a day. */
export const SITEMAP_HEADERS = {
  'Content-Type': 'application/xml',
  'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=86400',
} as const;

export function buildUrlset(urls: SitemapEntry[]): string {
  const entries = urls.map(u => {
    const lastmod = u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${xmlEscape(u.loc)}</loc>${lastmod}\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}
