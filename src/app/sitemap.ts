import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.mapletechlabs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const serviceCategories = [
    'mobile-app-development',
    'ai-ml',
    'web-development',
    'product-design',
    'blockchain-web3',
    'cloud-devops',
    'ar-vr',
    'digital-marketing',
    'wordpress-cms',
    'game-development',
    'branding',
    'saas-development',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const subServices: Record<string, string[]> = {
    'mobile-app-development': [
      'ios-app-development',
      'android-app-development',
      'flutter-development',
      'react-native-apps',
      'cross-platform-apps',
    ],
    'ai-ml': [
      'llm-integration',
      'ai-automation',
      'computer-vision',
      'predictive-analytics',
      'ai-chatbots',
    ],
    'web-development': [
      'nextjs-development',
      'saas-platforms',
      'ecommerce-systems',
      'api-backend',
      'enterprise-portals',
    ],
    'product-design': [
      'ui-ux-strategy',
      'wireframing',
      'prototyping',
      'design-systems',
      'brand-identity',
    ],
    'blockchain-web3': [
      'smart-contracts',
      'defi-protocols',
      'nft-platforms',
      'crypto-wallets',
      'web3-dapps',
    ],
    'cloud-devops': [
      'aws-architecture',
      'kubernetes-docker',
      'ci-cd-pipelines',
      'infrastructure-as-code',
      'performance-scaling',
    ],
    'ar-vr': [
      'mobile-ar',
      'vr-applications',
      'webxr-experiences',
      'apple-vision-pro',
      'industrial-ar',
    ],
    'digital-marketing': [
      'seo-services',
      'google-ads-ppc',
      'social-media-marketing',
      'content-marketing',
      'performance-analytics',
    ],
    'wordpress-cms': [
      'custom-wordpress-themes',
      'woocommerce-stores',
      'headless-wordpress',
      'strapi-sanity-cms',
      'site-speed-optimisation',
    ],
    'game-development': [
      'mobile-games',
      'unity-development',
      'unreal-engine',
      'hyper-casual-games',
      'multiplayer-liveops',
    ],
    'branding': [
      'brand-strategy',
      'logo-visual-identity',
      'brand-guidelines',
      'rebranding',
      'motion-video-branding',
    ],
    'saas-development': [
      'saas-mvp-development',
      'multi-tenant-architecture',
      'billing-subscriptions',
      'auth-sso',
      'analytics-dashboards',
    ],
  };

  const subServicePages: MetadataRoute.Sitemap = Object.entries(subServices).flatMap(
    ([category, slugs]) =>
      slugs.map((slug) => ({
        url: `${BASE_URL}/services/${category}/${slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
  );

  const industryPages: MetadataRoute.Sitemap = [
    'fintech',
    'healthcare',
    'ecommerce',
    'logistics',
    'edtech',
    'enterprise',
  ].map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog/top-10-unicorn-apps-2026`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/saas-guide`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    'privacy',
    'terms',
    'cookies',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // Location pages
  const locationCities = [
    'edmonton', 'toronto', 'vancouver', 'calgary', 'ottawa', 'montreal',
    'winnipeg', 'halifax', 'victoria', 'saskatoon', 'kitchener', 'london-on',
  ];

  const locationPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/locations`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    ...locationCities.map((city) => ({
      url: `${BASE_URL}/locations/${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // City + Service combo pages (local SEO)
  const serviceSlugs = [
    'mobile-app-development', 'ai-ml', 'web-development', 'product-design',
    'blockchain-web3', 'cloud-devops', 'ar-vr', 'digital-marketing',
    'wordpress-cms', 'game-development', 'branding', 'saas-development',
  ];

  const cityServicePages: MetadataRoute.Sitemap = locationCities.flatMap((city) =>
    serviceSlugs.map((service) => ({
      url: `${BASE_URL}/locations/${city}/${service}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }))
  );

  return [
    ...mainPages,
    ...serviceCategories,
    ...subServicePages,
    ...industryPages,
    ...blogPosts,
    ...legalPages,
    ...locationPages,
    ...cityServicePages,
  ];
}
