/**
 * Utility functions to generate breadcrumb data for different page types
 */

import { canonicalUrl } from '@/lib/seo/canonical';

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
    'ai-agent-development': 'AI Agent Development',
    'ai-automation': 'AI Automation',
    'ai-development-companies-canada': 'AI Development Companies in Canada',
    'ar-vr': 'AR & VR Development',
    'web3': 'Web3',
    'blockchain-web3': 'Blockchain & Web3',
    'crypto-wallets': 'Crypto Wallet Development',
    'web3-dapps': 'Web3 dApp Development',
    'nft-platforms': 'NFT Platform Development',
    'smart-contracts': 'Smart Contract Development',
    'defi-protocols': 'DeFi Protocol Development',
    'ui-ux-strategy': 'UI/UX Strategy',
    'ux-audit': 'UX Audit',
    'seo-services': 'SEO Services',
    'google-ads-ppc': 'Google Ads & PPC',
    'social-media-marketing': 'Social Media Marketing',
    'content-marketing': 'Content Marketing',
    'performance-analytics': 'Performance Analytics',
    'ios-app-development': 'iOS App Development',
    'android-app-development': 'Android App Development',
    'cross-platform-apps': 'Cross-Platform App Development',
    'flutter-development': 'Flutter Development',
    'mobile-app-development': 'Mobile App Development',
    'web-development': 'Web Development',
    'web-design': 'Web Design',
    'ecommerce-systems': 'E-Commerce Development',
    'shopify-development': 'Shopify Development',
    'ecommerce-development': 'E-Commerce Development',
    'api-backend': 'API & Backend Development',
    'api-development': 'API Development',
    'enterprise-portals': 'Enterprise Portal Development',
    'saas-platforms': 'SaaS Platform Development',
    'saas-development': 'SaaS Development',
    'saas-mvp-development': 'SaaS MVP Development',
    'multi-tenant-architecture': 'Multi-Tenant Architecture',
    'auth-sso': 'Authentication & SSO',
    'analytics-dashboards': 'Analytics & Dashboards',
    'billing-subscriptions': 'Billing & Subscriptions',
    'cloud-devops': 'Cloud & DevOps',
    'ci-cd-pipelines': 'CI/CD Pipeline Development',
    'aws-architecture': 'AWS Architecture',
    'kubernetes-docker': 'Kubernetes & Docker',
    'infrastructure-as-code': 'Infrastructure as Code',
    'performance-scaling': 'Performance & Scaling',
    'wordpress-cms': 'WordPress & CMS',
    'site-speed-optimisation': 'Site Speed Optimisation',
    'headless-wordpress': 'Headless WordPress',
    'strapi-sanity-cms': 'Strapi & Sanity CMS',
    'custom-wordpress-themes': 'Custom WordPress Themes',
    'woocommerce-stores': 'WooCommerce Stores',
    'product-design': 'Product Design',
    'wireframing': 'Wireframing & UX Design',
    'prototyping': 'Prototyping & User Testing',
    'brand-identity': 'Brand Identity Design',
    'design-systems': 'Design Systems',
    'game-development': 'Game Development',
    'unreal-engine': 'Unreal Engine Development',
    'unity-development': 'Unity Game Development',
    'mobile-games': 'Mobile Game Development',
    'hyper-casual-games': 'Hyper-Casual Game Development',
    'multiplayer-liveops': 'Multiplayer & LiveOps Development',
    'branding': 'Branding & Identity',
    'brand-strategy': 'Brand Strategy',
    'logo-visual-identity': 'Logo & Visual Identity',
    'motion-video-branding': 'Motion & Video Branding',
    'brand-guidelines': 'Brand Guidelines',
    'rebranding': 'Rebranding Services',
    'digital-marketing': 'Digital Marketing',
    'vr-applications': 'VR Application Development',
    'webxr-experiences': 'WebXR Development',
    'mobile-ar': 'Mobile AR Development',
    'industrial-ar': 'Industrial AR Solutions',
    'apple-vision-pro': 'Apple Vision Pro Development',
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
      item: `https://mapletechlabs.ca/locations/software-development-company-in-${citySlug}`,
    },
  ];
}

/**
 * Generate breadcrumb for blog pages
 * Example: Home > Blog > Post Title
 */
export function getBlogBreadcrumbs(postTitle: string, postSlug: string): BreadcrumbItem[] {
  return [
    { position: 1, name: 'Home', item: canonicalUrl('/') },
    { position: 2, name: 'Blog', item: canonicalUrl('/blog') },
    {
      position: 3,
      name: postTitle,
      item: canonicalUrl(`/blog/${postSlug}`),
    },
  ];
}

export function getCaseStudyBreadcrumbs(title: string, slug: string): BreadcrumbItem[] {
  return [
    { position: 1, name: 'Home', item: canonicalUrl('/') },
    { position: 2, name: 'Case Studies', item: canonicalUrl('/case-studies') },
    { position: 3, name: title, item: canonicalUrl(`/case-studies/${slug}`) },
  ];
}
