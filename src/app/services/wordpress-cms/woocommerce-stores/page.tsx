import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WooCommerce Store Development',
  description: 'WooCommerce store development services. Mapletech Labs builds high-converting online stores with custom plugins, payment gateways, and integrations.',
  openGraph: {
    title: 'WooCommerce Store Development | Mapletech Labs',
    description: 'WooCommerce store development services. Mapletech Labs builds high-converting online stores with custom plugins, payment gateways, and integrations.',
    url: 'https://mapletechlabs.ca/services/wordpress-cms/woocommerce-stores',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/wordpress-cms/woocommerce-stores',
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('wordpress-cms', 'woocommerce-stores');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
