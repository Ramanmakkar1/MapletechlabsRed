import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Hyper-Casual Game Development Services';
const DESCRIPTION = 'Hyper-casual game development from 3-day prototypes to CPI-validated launches: 40+ games shipped and 50M+ downloads by our Toronto-based game studio.';

// Fully content-driven: prerender at build time and keep it cached until the
// next deployment. A numeric window (not `false`) so the host emits a long
// s-maxage instead of falling back to its 300 s default.
export const dynamic = 'force-static';
export const revalidate = 31536000;
// Cache-only: every content input is local build-time data, so never fall back
// to an uncached render-time fetch on this route.
export const fetchCache = 'force-cache';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
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
