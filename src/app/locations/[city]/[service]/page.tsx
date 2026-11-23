import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationMeshPage, locationMeshParams } from '@/lib/locationPages';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export function generateStaticParams() {
  return locationMeshParams;
}

export const dynamic = 'force-static';
export const dynamicParams = false;
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceCityTemplate data={data} />
    </>
  );
}
