import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Logo & Visual Identity Design in Canada';
const DESCRIPTION = 'Logo and visual identity design in Canada: memorable logos, colour systems and typography that define your brand, with 200+ logos designed by our team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/branding/logo-visual-identity',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding/logo-visual-identity'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'logo-visual-identity');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Logo & Visual Identity Design'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/branding/logo-visual-identity'}
      />
      <PageClient />
    </>
  );
}
