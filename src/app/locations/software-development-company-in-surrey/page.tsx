import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';

export const dynamic = 'force-static';
export const revalidate = 31536000;

export const metadata: Metadata = {
  title: 'Software Development Company in Surrey',
  description: cityDescription('Surrey', 'British Columbia', 'Surrey businesses'),
  openGraph: {
    title: 'Software Development Company in Surrey | Mapletech Labs',
    description: cityDescription('Surrey', 'British Columbia', 'Surrey businesses'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-surrey',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-surrey') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Surrey',
    provinceName: 'British Columbia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-surrey',
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
