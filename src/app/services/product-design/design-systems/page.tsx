import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Design System Development | Figma & Storybook',
  description: 'Scalable design systems built by Mapletech Labs in Toronto. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in Canada.',
  openGraph: {
    title: 'Design System Development | Mapletech Labs',
    description: 'Scalable design systems built by Mapletech Labs in Toronto. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in Canada.',
    url: 'https://mapletechlabs.ca/services/product-design/design-systems',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design/design-systems'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('product-design', 'design-systems');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Design System Development | Figma & Storybook'}
        description={'Scalable design systems built by Mapletech Labs in Toronto. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in Canada.'}
        url={'https://mapletechlabs.ca/services/product-design/design-systems'}
      />
      <PageClient />
    </>
  );
}
