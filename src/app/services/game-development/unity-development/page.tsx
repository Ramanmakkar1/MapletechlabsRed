import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Unity Game Development Company in Canada';
const DESCRIPTION = 'Unity game development company in Canada: C# experts for mobile, PC and console, with HDRP, URP and multiplayer. 80+ Unity projects delivered. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/game-development/unity-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/game-development/unity-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('game-development', 'unity-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/game-development/unity-development'}
      />
      <PageClient />
    </>
  );
}
