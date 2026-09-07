import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Prototyping & User Testing Services | Toronto',
  description: 'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints, and real-user testing. 300+ prototypes built across Canada.',
  openGraph: {
    title: 'Prototyping & User Testing Services | Mapletech Labs',
    description: 'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints, and real-user testing. 300+ prototypes built across Canada.',
    url: 'https://mapletechlabs.ca/services/product-design/prototyping',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design/prototyping'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('product-design', 'prototyping');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Prototyping & User Testing Services | Toronto'}
        description={'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints, and real-user testing. 300+ prototypes built across Canada.'}
        url={'https://mapletechlabs.ca/services/product-design/prototyping'}
      />
      <PageClient />
    </>
  );
}
