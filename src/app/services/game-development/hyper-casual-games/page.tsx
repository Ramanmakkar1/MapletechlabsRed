import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Hyper-Casual Game Development Services';
const DESCRIPTION = 'Hyper-casual game development from 3-day prototypes to CPI-validated launches: 40+ games shipped and 50M+ downloads by our Toronto-based game studio.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/game-development/hyper-casual-games',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/game-development/hyper-casual-games'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('game-development', 'hyper-casual-games');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/services/game-development/hyper-casual-games'}
      />
      <PageClient />
    </>
  );
}
