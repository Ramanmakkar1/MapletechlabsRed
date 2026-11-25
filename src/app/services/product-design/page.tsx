import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { safeJsonLd } from '@/lib/seo/jsonLd';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'UI/UX Design Company in Canada: Apps & SaaS Products';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: 'UI/UX design company in Canada: user research, wireframes, prototypes and design systems for apps & SaaS, with fixed CAD pricing. Get a free design audit.',
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: 'UI/UX design company in Canada: user research, wireframes, prototypes and design systems for apps & SaaS, with fixed CAD pricing. Get a free design audit.',
    url: 'https://mapletechlabs.ca/services/product-design',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'product-design',
  name: 'UI/UX Design Services',
  serviceType: 'UI/UX Design',
  description: 'UI/UX design company in Canada: user research, wireframes, prototypes and design systems for apps & SaaS, with fixed CAD pricing. Get a free design audit.',
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'product-design', label: 'UI/UX Design' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
