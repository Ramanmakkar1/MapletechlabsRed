import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Software Development Services in Canada';
const DESCRIPTION = 'Software development services in Canada: 12 service lines, from custom software, mobile apps and AI to UI/UX, cloud and SaaS, by one Edmonton-based team.';

const SERVICE_HUBS = [
  'software-development',
  'web-development',
  'mobile-app-development',
  'ai-ml',
  'product-design',
  'saas-development',
  'cloud-devops',
  'blockchain-web3',
  'ar-vr',
  'game-development',
  'branding',
  'wordpress-cms',
  'digital-marketing',
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl('/services')}#collection`,
      url: canonicalUrl('/services'),
      name: TITLE,
      description: DESCRIPTION,
    },
    {
      '@type': 'ItemList',
      itemListElement: SERVICE_HUBS.map((slug, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: canonicalUrl(`/services/${slug}`),
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services'),
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Services', item: canonicalUrl('/services') },
      ]} />
      <nav aria-label="Core services" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Explore our core service hubs
        </h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li><a href="/services/software-development" className="underline hover:no-underline">Custom software development services</a></li>
          <li><a href="/services/web-development" className="underline hover:no-underline">Web development company</a></li>
          <li><a href="/services/web-development/ecommerce-systems" className="underline hover:no-underline">Ecommerce systems development</a></li>
          <li><a href="/services/mobile-app-development" className="underline hover:no-underline">Mobile app development services</a></li>
          <li><a href="/services/mobile-app-development/flutter-development" className="underline hover:no-underline">Flutter app development</a></li>
          <li><a href="/services/mobile-app-development/cross-platform-apps" className="underline hover:no-underline">Cross-platform app development</a></li>
          <li><a href="/services/ai-ml" className="underline hover:no-underline">AI and machine learning development</a></li>
          <li><a href="/services/ai-ml/ai-automation" className="underline hover:no-underline">AI automation services</a></li>
          <li><a href="/services/blockchain-web3" className="underline hover:no-underline">Blockchain and Web3 development</a></li>
          <li><a href="/services/cloud-devops" className="underline hover:no-underline">Cloud and DevOps consulting</a></li>
          <li><a href="/services/ar-vr" className="underline hover:no-underline">AR/VR development services</a></li>
          <li><a href="/services/game-development" className="underline hover:no-underline">Game development services</a></li>
          <li><a href="/services/product-design" className="underline hover:no-underline">UI/UX and product design services</a></li>
          <li><a href="/services/product-design/design-systems" className="underline hover:no-underline">Design systems and component libraries</a></li>
          <li><a href="/services/branding" className="underline hover:no-underline">Branding and brand identity design</a></li>
          <li><a href="/services/saas-development" className="underline hover:no-underline">SaaS platform development</a></li>
          <li><a href="/services/wordpress-cms" className="underline hover:no-underline">WordPress and CMS development</a></li>
          <li><a href="/services/software-maintenance" className="underline hover:no-underline">Software maintenance and support</a></li>
          <li><a href="/services/digital-marketing" className="underline hover:no-underline">Digital marketing services</a></li>
        </ul>
      </nav>
      <PageClient />
    </>
  );
}
