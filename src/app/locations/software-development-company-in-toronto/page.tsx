import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';

export const dynamic = 'force-static';
export const revalidate = 31536000;
// Cache-only: this page is built from local data, so never fall back to an
// uncached render-time fetch on this route.
export const fetchCache = 'force-cache';

const TITLE = 'Software Development Company Toronto | Fixed Price';
const DESCRIPTION = 'Software development company for Toronto businesses: custom software, web and mobile apps by Mapletech Labs. Fixed-scope, fixed-price builds. Free quote.';

export const metadata: Metadata = {
  // Brand-free so the hook fits 60 chars; the OG title keeps the brand.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: 'Software Development Company in Toronto | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-toronto',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations/software-development-company-in-toronto'),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Toronto',
    provinceName: 'Ontario',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-toronto',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }} />
      <PageClient />
    </>
  );
}
