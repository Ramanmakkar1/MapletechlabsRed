import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

export const dynamic = 'force-static';
export const revalidate = 31536000;

const TITLE = 'Custom Software Development Edmonton: Fixed-Price Builds';
const DESCRIPTION = 'Custom software development in Edmonton by Mapletech Labs, headquartered here. Fixed price, and a senior engineer replies in 1 day. Get a free quote.';

export const metadata: Metadata = {
  // seoTitle adds the brand only while the result stays within 60 chars.
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: seoTitle(TITLE).absolute,
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations/software-development-company-in-edmonton'),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton',
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
