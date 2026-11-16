import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locationPageSlugs, getLocationPage } from '@/lib/locationPages';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

// Catch-all for /locations/<slug> keyword pages. Static city-landing and
// province folders take precedence for their own paths; old bare
// /locations/<city> paths are 301-redirected in next.config.
// All page data is precomputed from local catalog data in src/lib/locationPages.ts.
export function generateStaticParams() {
  return locationPageSlugs.map(slug => ({ slug: [slug] }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;
// Match the locations layout cache convention: never let a render opt into
// uncached fetch work.
export const fetchCache = 'force-cache';
// Keep the prerendered keyword pages in the cache until the next deploy.
export const revalidate = 31536000;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: segments } = await params;
  const page = getLocationPage(segments.join('/'));
  return page?.metadata ?? {};
}

export default async function LocationCatchAllPage({ params }: PageProps) {
  const { slug: segments } = await params;
  const slug = segments.join('/');
  const page = getLocationPage(slug);
  if (!page) notFound();

  const { data, local } = page;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page.jsonLd) }} />
      <ServiceCityTemplate
        data={data}
        local={local}
        pageKey={slug}
        heroTitle={page.heroTitle}
        heroDesc={page.heroDesc}
        crossPromo={page.crossLink}
      />
    </>
  );
}
