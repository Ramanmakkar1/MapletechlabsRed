import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';

export const dynamic = 'force-static';
export const revalidate = 31536000;

export const metadata: Metadata = {
  title: 'Software Development Company in Kelowna',
  description: cityDescription('Kelowna', 'British Columbia', 'Okanagan businesses'),
  openGraph: {
    title: 'Software Development Company in Kelowna | Mapletech Labs',
    description: cityDescription('Kelowna', 'British Columbia', 'Okanagan businesses'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-kelowna',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-kelowna') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Kelowna',
    provinceName: 'British Columbia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-kelowna',
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
