import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationMeshPage, locationMeshParams } from '@/lib/locationPages';
import { isServedCityService } from '@/data/serviceCity';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { safeJsonLd } from '@/lib/seo/jsonLd';

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export function generateStaticParams() {
  // Niche mesh pages (blockchain-web3, ar-vr, game-development) in non-major
  // cities are 301'd to the core service page by next.config.ts and the
  // middleware. Prerendering them here made the host serve a slow 200 render
  // (the audited /locations/laval/blockchain-web3, 3.9 s) on hosts that skip
  // the config redirect table, so keep the prerender list in sync with the
  // redirect rules: only the pairs that are actually served get prerendered.
  return locationMeshParams.filter(({ city, service }) => isServedCityService(city, service));
}

export const dynamic = 'force-static';
export const dynamicParams = false;
// Match the keyword location route: never let a render opt into uncached fetch
// work, which would turn a static page back into a slow on-demand render.
export const fetchCache = 'force-cache';
// Keep the prerendered city+service pages in the cache until the next deploy.
// The slow-page audit was measuring a cold ISR render (7-40 s) as the server
// response time when these pages expired in place. Use a numeric window (not
// `false`) so the host emits a long s-maxage instead of its 300 s default.
export const revalidate = 31536000;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  return getLocationMeshPage(city, service)?.metadata ?? {};
}

export default async function CityServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const page = getLocationMeshPage(city, service);
  if (!page) notFound();

  const { data, jsonLd, breadcrumbItems } = page;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceCityTemplate data={data} />
    </>
  );
}
