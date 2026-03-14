import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mapletechlabs.ca';

/**
 * Sitemap Index — generates categorized sub-sitemaps like RankMath/Yoast:
 *   /sitemap/0.xml → Core pages (home, about, contact, etc.)
 *   /sitemap/1.xml → Service category pages (12)
 *   /sitemap/2.xml → Sub-service pages (60)
 *   /sitemap/3.xml → Industry pages (6)
 *   /sitemap/4.xml → Blog posts
 *   /sitemap/5.xml → Location city pages (12)
 *   /sitemap/6.xml → Location + Service SEO pages (144)
 *   /sitemap/7.xml → Legal pages
 */
export async function generateSitemaps() {
  return [
    { id: 0 }, // Core pages
    { id: 1 }, // Service categories
    { id: 2 }, // Sub-services
    { id: 3 }, // Industries
    { id: 4 }, // Blog
    { id: 5 }, // Location cities
    { id: 6 }, // Location + Service combos
    { id: 7 }, // Legal
  ];
}

// ── Data ─────────────────────────────────────────────────────────────────────

const serviceSlugs = [
  'mobile-app-development', 'ai-ml', 'web-development', 'product-design',
  'blockchain-web3', 'cloud-devops', 'ar-vr', 'digital-marketing',
  'wordpress-cms', 'game-development', 'branding', 'saas-development',
];

const subServices: Record<string, string[]> = {
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

const industrySlugs = ['fintech', 'healthcare', 'ecommerce', 'logistics', 'edtech', 'enterprise'];

const blogSlugs = ['top-10-unicorn-apps-2026', 'saas-guide', 'top-seo-companies-canada'];

const citySlugs = [
  'edmonton', 'toronto', 'vancouver', 'calgary', 'ottawa', 'montreal',
  'winnipeg', 'halifax', 'victoria', 'saskatoon', 'kitchener', 'london-on',
];

// ── Sitemap Generator ────────────────────────────────────────────────────────

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  switch (id) {
    // 0: Core pages
    case 0:
      return [
        { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      ];

    // 1: Service category pages
    case 1:
      return serviceSlugs.map(slug => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }));

    // 2: Sub-service pages
    case 2:
      return Object.entries(subServices).flatMap(([category, slugs]) =>
        slugs.map(slug => ({
          url: `${BASE_URL}/services/${category}/${slug}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        }))
      );

    // 3: Industry pages
    case 3:
      return industrySlugs.map(slug => ({
        url: `${BASE_URL}/industries/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));

    // 4: Blog posts
    case 4:
      return blogSlugs.map(slug => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));

    // 5: Location city pages
    case 5:
      return citySlugs.map(slug => ({
        url: `${BASE_URL}/locations/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));

    // 6: Location + Service combo pages (144 local SEO pages)
    case 6:
      return citySlugs.flatMap(city =>
        serviceSlugs.map(service => ({
          url: `${BASE_URL}/locations/${city}/${service}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.85,
        }))
      );

    // 7: Legal pages
    case 7:
      return ['privacy', 'terms', 'cookies'].map(slug => ({
        url: `${BASE_URL}/${slug}`,
        lastModified: now,
        changeFrequency: 'yearly' as const,
        priority: 0.3,
      }));

    default:
      return [];
  }
}
