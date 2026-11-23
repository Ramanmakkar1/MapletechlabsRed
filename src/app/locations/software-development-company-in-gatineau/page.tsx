import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';

export const dynamic = 'force-static';
export const revalidate = 31536000;
// Cache-only: this page is built from local data, so never fall back to an
// uncached render-time fetch on this route.
export const fetchCache = 'force-cache';

export const metadata: Metadata = {
  title: 'Software Development Company in Gatineau',
  description: cityDescription('Gatineau', 'Quebec', 'Outaouais businesses'),
  openGraph: {
    title: 'Software Development Company in Gatineau | Mapletech Labs',
    description: cityDescription('Gatineau', 'Quebec', 'Outaouais businesses'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-gatineau',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-gatineau') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Gatineau',
    provinceName: 'Quebec',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-gatineau',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <PageClient />
    </>
  );
}
