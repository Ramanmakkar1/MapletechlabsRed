import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const DESCRIPTION = 'Data-driven UI/UX strategy by Edmonton-based Mapletech Labs: user research, UX audits and design sprints that lift conversions by 40%. Free consultation.';

export const metadata: Metadata = {
  title: seoTitle('UI/UX Strategy & Design Services in Canada'),
  description: DESCRIPTION,
  openGraph: {
    title: 'UI/UX Strategy & Design Services in Canada | Mapletech Labs',
    description: DESCRIPTION,
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
        name={'UI/UX Strategy & Design'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/product-design/ui-ux-strategy'}
      />
      <PageClient />
    </>
  );
}
