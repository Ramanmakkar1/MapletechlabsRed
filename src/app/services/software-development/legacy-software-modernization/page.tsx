import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import PageClient from './PageClient';

const PATH = '/services/software-development/legacy-software-modernization';
const TITLE = 'Legacy Software Modernization Services';
const DESCRIPTION =
  'Modernize legacy software with a clear refactor, replatform or rebuild plan covering discovery, migration, testing and rollout, priced in CAD.';
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
          { position: 4, name: 'Legacy Software Modernization', item: URL },
        ]}
      />
      <ServiceSchema
        name={TITLE}
        description={DESCRIPTION}
        url={URL}
        serviceType="Legacy software modernization"
      />
      <PageClient />
    </>
  );
}
