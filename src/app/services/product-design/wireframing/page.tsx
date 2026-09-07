import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Wireframing & UX Design Services | Canada',
  description: 'Wireframing and UX design from Mapletech Labs. Low- and high-fidelity wireframes and clickable prototypes that settle the hard questions before build.',
  openGraph: {
    title: 'Wireframing & UX Design Services | Mapletech Labs',
    description: 'Wireframing and UX design from Mapletech Labs. Low- and high-fidelity wireframes and clickable prototypes that settle the hard questions before build.',
    url: 'https://mapletechlabs.ca/services/product-design/wireframing',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design/wireframing'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('product-design', 'wireframing');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Wireframing & UX Design Services | Canada'}
        description={'Professional wireframing and UX design by Mapletech Labs. Lo-fi to hi-fi wireframes in Figma, user flow mapping, and handoff-ready specs. 200+ products wireframed.'}
        url={'https://mapletechlabs.ca/services/product-design/wireframing'}
      />
      <PageClient />
    </>
  );
}
