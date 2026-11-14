import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const PATH = '/services/software-development';
const TITLE = 'Custom Software Development Company Canada | Mapletech Labs';
const DESCRIPTION = seoDescription(
  'Mapletech Labs builds custom software in Canada: web, mobile, SaaS and AI products, fixed-price scopes and support. See process, pricing and case studies.'
);
const URL = canonicalUrl(PATH);

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: TITLE,
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
          { position: 3, name: 'Software Development', item: URL },
        ]}
      />
      <ServiceSchema
        name={TITLE}
        description={DESCRIPTION}
        url={URL}
        serviceType="Custom software development"
      />
      <PageClient />
    </>
  );
}
