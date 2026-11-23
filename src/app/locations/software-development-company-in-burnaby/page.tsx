import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';

export const dynamic = 'force-static';
export const revalidate = 31536000;

export const metadata: Metadata = {
  title: 'Software Development Company in Burnaby',
  description: cityDescription('Burnaby', 'British Columbia', 'Metro Vancouver teams'),
  openGraph: {
    title: 'Software Development Company in Burnaby | Mapletech Labs',
    description: cityDescription('Burnaby', 'British Columbia', 'Metro Vancouver teams'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-burnaby',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-burnaby') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Burnaby',
    provinceName: 'British Columbia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-burnaby',
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
