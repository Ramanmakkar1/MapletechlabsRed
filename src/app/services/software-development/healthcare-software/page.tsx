import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';

const PATH = '/services/software-development/healthcare-software';
const TITLE = 'Healthcare Software Development Canada';
const DESCRIPTION = seoDescription(
  'Healthcare software development in Canada for telehealth, patient portals and EHR integration, with privacy, security and clinical workflow planned in.'
);
const URL = canonicalUrl(PATH);

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Mapletech Labs`,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  alternates: {
    canonical: URL,
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'Services', item: canonicalUrl('/services') },
          { position: 3, name: 'Software Development', item: canonicalUrl('/services/web-development') },
          { position: 4, name: 'Healthcare Software Development', item: URL },
        ]}
      />
      <ServiceSchema
        name={TITLE}
        description={DESCRIPTION}
        url={URL}
        serviceType="Healthcare software development"
      />
      <PageClient />
    </>
  );
}
