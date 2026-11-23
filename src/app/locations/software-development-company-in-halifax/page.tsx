import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';

export const dynamic = 'force-static';
export const revalidate = 31536000;

export const metadata: Metadata = {
  title: 'Software Development Company in Halifax',
  description: cityDescription('Halifax', 'Nova Scotia', 'Halifax businesses'),
  openGraph: {
    title: 'Software Development Company in Halifax | Mapletech Labs',
    description: cityDescription('Halifax', 'Nova Scotia', 'Halifax businesses'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-halifax',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations/software-development-company-in-halifax'),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Halifax',
    provinceName: 'Nova Scotia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-halifax',
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
