import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Software Development Services in Canada';
const DESCRIPTION = 'Software development services in Canada: 12 service lines, from custom software, mobile apps and AI to UI/UX, cloud and SaaS, by one Edmonton-based team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services'),
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Services', item: canonicalUrl('/services') },
      ]} />
      <PageClient />
    </>
  );
}
