import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Unreal Engine 5 Development Studio in Canada';
const DESCRIPTION = 'Unreal Engine 5 development studio in Canada: AAA-quality games, simulations and archviz with Lumen, Nanite and Chaos Physics. 30+ UE5 projects delivered.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/game-development/unreal-engine',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/game-development/unreal-engine'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('game-development', 'unreal-engine');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/game-development/unreal-engine'}
      />
      <PageClient />
    </>
  );
}
