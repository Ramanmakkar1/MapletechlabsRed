import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WordPress & CMS Development',
  description: 'WordPress and headless CMS development by Mapletech Labs. Custom themes, WooCommerce, Strapi, Sanity, and site speed optimization services.',
  openGraph: {
    title: 'WordPress & CMS Development | Mapletech Labs',
    description: 'WordPress and headless CMS development by Mapletech Labs. Custom themes, WooCommerce, Strapi, Sanity, and site speed optimization services.',
    url: 'https://www.mapletechlabs.com/services/wordpress-cms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/wordpress-cms',
  },
};

export default function Page() {
  return <PageClient />;
}
