import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Design System Services in Canada: Figma and Storybook';
const DESCRIPTION = 'Design system services in Canada from an Edmonton-based team: Figma component libraries, Storybook docs and WCAG 2.1 accessibility. 50+ systems delivered.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
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
        name={'Design System Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/product-design/design-systems'}
      />
      <PageClient />
    </>
  );
}
