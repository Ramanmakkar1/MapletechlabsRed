import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Prototyping & Usability Testing in Canada';
const DESCRIPTION = 'Prototyping and usability testing in Canada: interactive Figma prototypes, design sprints and real-user testing, with 300+ prototypes built by our team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/product-design/prototyping'}
      />
      <PageClient />
    </>
  );
}
