import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceHubSchema } from '@/lib/seo/serviceHubSchema';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Canada',
  description: 'iOS, Android, Flutter & React Native app development by Mapletech Labs. 300+ apps shipped across Canada. Get a free consultation for your project today.',
  openGraph: {
    title: 'Mobile App Development Company in Canada | Mapletech Labs',
    description: 'iOS, Android, Flutter & React Native app development by Mapletech Labs. 300+ apps shipped across Canada.',
    url: 'https://mapletechlabs.ca/services/mobile-app-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/mobile-app-development'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'mobile-app-development',
  name: 'Mobile App Development',
  serviceType: 'Mobile App Development',
  description: 'iOS, Android, Flutter & React Native app development by Mapletech Labs. 300+ apps shipped across Canada. Get a free consultation for your project today.',
});

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: 'https://mapletechlabs.ca/services/mobile-app-development' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
