import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Next.js Development Services',
  description: 'Expert Next.js development by Mapletech Labs. Build fast, SEO-friendly React applications with server-side rendering and static site generation.',
  openGraph: {
    title: 'Next.js Development Services | Mapletech Labs',
    description: 'Expert Next.js development by Mapletech Labs. Build fast, SEO-friendly React applications with server-side rendering and static site generation.',
    url: 'https://mapletechlabs.ca/services/web-development/nextjs-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development/nextjs-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'nextjs-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
