import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locationPageSlugs, getLocationPage } from '@/lib/locationPages';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';

interface PageProps {
  params: Promise<{ city: string }>;
}

// Single-segment /locations/<slug> handles the priority "[service] company in [city]"
// keyword pages. Static city-landing and province folders take precedence for their
// own paths; old bare /locations/<city> paths are 301-redirected in next.config.
// All page data is precomputed from local catalog data in src/lib/locationPages.ts.
export function generateStaticParams() {
  return locationPageSlugs.map(slug => ({ city: slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;
// Match the catch-all location route: never let a render opt into uncached
// fetch work, which would turn a static page back into a slow on-demand render.
export const fetchCache = 'force-cache';
// Keep the prerendered keyword pages in the cache until the next deploy. Use a
// numeric window (not `false`) so the host emits a long s-maxage instead of its
// 300 s default.
export const revalidate = 31536000;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const page = getLocationPage(slug);
  return page?.metadata ?? {};
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { city: slug } = await params;
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
