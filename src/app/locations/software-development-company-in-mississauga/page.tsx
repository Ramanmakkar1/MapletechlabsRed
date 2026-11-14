import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';
import { ogTitle, seoTitle } from '@/lib/seo/title';

export const dynamic = 'force-static';
export const revalidate = false;

const TITLE = 'Software Development Company in Mississauga';

export const metadata: Metadata = {
  title: TITLE,
  description: cityDescription('Mississauga', 'Ontario', 'Greater Toronto Area teams'),
  openGraph: {
    title: ogTitle(TITLE),
    description: cityDescription('Mississauga', 'Ontario', 'Greater Toronto Area teams'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-mississauga',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-mississauga') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Mississauga',
    provinceName: 'Ontario',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-mississauga',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Mississauga' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
