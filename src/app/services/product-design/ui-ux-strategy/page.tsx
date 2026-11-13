import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'UI/UX Strategy & Design Services in Canada';
const DESCRIPTION = 'UI/UX strategy and design services in Canada: user research, UX audits and design sprints that boost conversions by 40%, from our Edmonton team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
