import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'UI/UX Strategy Services | Toronto, Canada',
  description: 'Data-driven UI/UX strategy from Mapletech Labs in Toronto. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.',
  openGraph: {
    title: 'UI/UX Strategy Services | Mapletech Labs',
    description: 'Data-driven UI/UX strategy from Mapletech Labs in Toronto. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.',
    url: 'https://mapletechlabs.ca/services/product-design/ui-ux-strategy',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design/ui-ux-strategy'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('product-design', 'ui-ux-strategy');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'UI/UX Strategy Services | Toronto, Canada'}
        description={'Data-driven UI/UX strategy from Mapletech Labs in Toronto. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.'}
        url={'https://mapletechlabs.ca/services/product-design/ui-ux-strategy'}
      />
      <PageClient />
    </>
  );
}
