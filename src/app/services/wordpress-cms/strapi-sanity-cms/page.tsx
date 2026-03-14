import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Strapi & Sanity CMS Development Services',
  description: 'Expert Strapi and Sanity headless CMS setup with Next.js integration, live preview, and content migration. Mapletech Labs, Toronto. 30+ CMS projects.',
  openGraph: {
    title: 'Strapi & Sanity CMS Development | Mapletech Labs',
    description: 'Modern headless CMS solutions with Strapi and Sanity — flexible schemas, real-time preview, and seamless Next.js integration.',
    url: 'https://mapletechlabs.com/services/wordpress-cms/strapi-sanity-cms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/wordpress-cms/strapi-sanity-cms',
  },
};

export default function Page() {
  return <PageClient />;
}
