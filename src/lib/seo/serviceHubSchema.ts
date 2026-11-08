import { canonicalUrl } from '@/lib/seo/canonical';
import { LOCAL_BUSINESS_AREA_SERVED } from '@/lib/seo/business';
import { services } from '@/data/services';

const SUB_SERVICE_FOLDERS: Record<string, string[]> = {
  'web-development': [
    'nextjs-development',
    'saas-platforms',
    'ecommerce-systems',
    'api-backend',
    'enterprise-portals',
  ],
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
  'product-design': [
    'ui-ux-strategy',
    'wireframing',
    'prototyping',
    'design-systems',
    'brand-identity',
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

export function serviceHubSchema(opts: {
  slug: string;
  name: string;
  serviceType: string;
  description: string;
}) {
  const { slug, name, serviceType, description } = opts;
  const serviceData = services.find((s) => s.slug === slug);
  const allowedFolders = SUB_SERVICE_FOLDERS[slug] ?? [];
  const sub = (serviceData?.relatedSubServices ?? []).filter((s) =>
    allowedFolders.includes(s.slug)
  );

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://mapletechlabs.ca/services/${slug}#service`,
    name,
    serviceType,
    description,
    url: canonicalUrl(`/services/${slug}`),
    provider: { '@id': 'https://mapletechlabs.ca/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'Canada' },
      ...LOCAL_BUSINESS_AREA_SERVED,
    ],
  };

  if (sub.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${name} services`,
      itemListElement: sub.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: canonicalUrl(`/services/${slug}/${s.slug}`),
        },
      })),
    };
  }

  return schema;
}