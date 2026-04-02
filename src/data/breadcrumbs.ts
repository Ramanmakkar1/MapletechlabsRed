/**
 * Utility functions to generate breadcrumb data for different page types
 */

interface BreadcrumbItem {
  position: number;
  name: string;
  item?: string;
}

/**
 * Convert slug to title case
 * Example: "nextjs-development" -> "Next.js Development"
 */
function slugToTitle(slug: string): string {
  // Define special cases
  const specialCases: Record<string, string> = {
    'nextjs-development': 'Next.js Development',
    'nextjs': 'Next.js',
    'react-native-apps': 'React Native Apps',
    'react-native-development': 'React Native Development',
    'react': 'React',
    'react-development': 'React Development',
    'llm-integration': 'LLM Integration',
    'ai-ml': 'AI & Machine Learning',
    'ai-chatbots': 'AI Chatbots',
    'ai-automation': 'AI Automation',
    'ai-development-companies-canada': 'AI Development Companies in Canada',
    'ar-vr': 'AR/VR',
    'web3': 'Web3',
    'blockchain-web3': 'Blockchain & Web3',
    'crypto-wallets': 'Crypto Wallets',
    'web3-dapps': 'Web3 DApps',
    'nft-platforms': 'NFT Platforms',
    'smart-contracts': 'Smart Contracts',
    'defi-protocols': 'DeFi Protocols',
    'ui-ux-strategy': 'UI/UX Strategy',
    'seo-services': 'SEO Services',
    'google-ads-ppc': 'Google Ads & PPC',
    'social-media-marketing': 'Social Media Marketing',
    'content-marketing': 'Content Marketing',
    'performance-analytics': 'Performance Analytics',
    'ios-app-development': 'iOS App Development',
    'android-app-development': 'Android App Development',
    'cross-platform-apps': 'Cross-Platform Apps',
    'flutter-development': 'Flutter Development',
    'mobile-app-development': 'Mobile App Development',
    'web-development': 'Web Development',
    'ecommerce-systems': 'E-Commerce Systems',
    'ecommerce-development': 'E-Commerce Development',
    'api-backend': 'API & Backend',
    'api-development': 'API Development',
    'enterprise-portals': 'Enterprise Portals',
    'saas-platforms': 'SaaS Platforms',
    'saas-development': 'SaaS Development',
    'saas-mvp-development': 'SaaS MVP Development',
    'multi-tenant-architecture': 'Multi-Tenant Architecture',
    'auth-sso': 'Auth & SSO',
    'analytics-dashboards': 'Analytics Dashboards',
    'billing-subscriptions': 'Billing & Subscriptions',
    'cloud-devops': 'Cloud & DevOps',
    'ci-cd-pipelines': 'CI/CD Pipelines',
    'aws-architecture': 'AWS Architecture',
    'kubernetes-docker': 'Kubernetes & Docker',
    'infrastructure-as-code': 'Infrastructure as Code',
    'performance-scaling': 'Performance Scaling',
    'wordpress-cms': 'WordPress & CMS',
    'site-speed-optimisation': 'Site Speed Optimisation',
    'headless-wordpress': 'Headless WordPress',
    'strapi-sanity-cms': 'Strapi & Sanity CMS',
    'custom-wordpress-themes': 'Custom WordPress Themes',
    'woocommerce-stores': 'WooCommerce Stores',
    'product-design': 'Product Design',
    'wireframing': 'Wireframing',
    'prototyping': 'Prototyping',
    'brand-identity': 'Brand Identity',
    'ui-ux-strategy': 'UI/UX Strategy',
    'design-systems': 'Design Systems',
    'game-development': 'Game Development',
    'unreal-engine': 'Unreal Engine',
    'unity-development': 'Unity Development',
    'mobile-games': 'Mobile Games',
    'hyper-casual-games': 'Hyper-Casual Games',
    'multiplayer-liveops': 'Multiplayer & LiveOps',
    'branding': 'Branding',
    'brand-strategy': 'Brand Strategy',
    'logo-visual-identity': 'Logo & Visual Identity',
    'motion-video-branding': 'Motion & Video Branding',
    'brand-guidelines': 'Brand Guidelines',
    'rebranding': 'Rebranding',
    'digital-marketing': 'Digital Marketing',
    'vr-applications': 'VR Applications',
    'webxr-experiences': 'WebXR Experiences',
    'mobile-ar': 'Mobile AR',
    'industrial-ar': 'Industrial AR',
    'apple-vision-pro': 'Apple Vision Pro',
    'computer-vision': 'Computer Vision',
    'predictive-analytics': 'Predictive Analytics',
  };

  if (specialCases[slug]) {
    return specialCases[slug];
  }

  // Fallback: split by dash and capitalize each word
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate breadcrumb for service sub-pages
 * Example: Home > Services > Web Development > Next.js Development
 */
export function getServiceBreadcrumbs(
  parentServiceSlug: string,
  subServiceSlug: string,
): BreadcrumbItem[] {
  const parentService = slugToTitle(parentServiceSlug);
  const subService = slugToTitle(subServiceSlug);

  return [
    { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    {
      position: 3,
      name: parentService,
      item: `https://mapletechlabs.ca/services/${parentServiceSlug}`,
    },
    {
      position: 4,
      name: subService,
      item: `https://mapletechlabs.ca/services/${parentServiceSlug}/${subServiceSlug}`,
    },
  ];
}

/**
 * Generate breadcrumb for industry pages
 * Example: Home > Industries > Fintech
 */
export function getIndustryBreadcrumbs(
  industryName: string,
  industrySlug: string,
): BreadcrumbItem[] {
  return [
    { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { position: 2, name: 'Industries', item: 'https://mapletechlabs.ca/industries' },
    {
      position: 3,
      name: industryName,
      item: `https://mapletechlabs.ca/industries/${industrySlug}`,
    },
  ];
}

/**
 * Generate breadcrumb for location pages
 * Example: Home > Locations > Toronto
 */
export function getLocationBreadcrumbs(
  cityName: string,
  citySlug: string,
): BreadcrumbItem[] {
  return [
    { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    {
      position: 3,
      name: cityName,
      item: `https://mapletechlabs.ca/locations/${citySlug}`,
    },
  ];
}

/**
 * Generate breadcrumb for blog pages
 * Example: Home > Blog > Post Title
 */
export function getBlogBreadcrumbs(postTitle: string, postSlug: string): BreadcrumbItem[] {
  return [
    { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { position: 2, name: 'Blog', item: 'https://mapletechlabs.ca/blog' },
    {
      position: 3,
      name: postTitle,
      item: `https://mapletechlabs.ca/blog/${postSlug}`,
    },
  ];
}
