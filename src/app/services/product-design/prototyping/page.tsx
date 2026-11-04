import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Prototyping & Usability Testing in Canada'),
  description: 'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints and real-user testing. 300+ prototypes built in Canada.',
  openGraph: {
    title: 'Prototyping & Usability Testing in Canada | Mapletech Labs',
    description: 'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints and real-user testing. 300+ prototypes built in Canada.',
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
        name={'Prototyping & Usability Testing'}
        description={'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints, and real-user testing. 300+ prototypes built across Canada.'}
        url={'https://mapletechlabs.ca/services/product-design/prototyping'}
      />
      <PageClient />
    </>
  );
}
