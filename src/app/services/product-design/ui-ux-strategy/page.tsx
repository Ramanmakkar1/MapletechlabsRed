import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'UI/UX Strategy Services | Toronto, Canada',
  description: 'Data-driven UI/UX strategy from Mapletech Labs in Toronto. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.',
  openGraph: {
    title: 'UI/UX Strategy Services | Mapletech Labs',
    description: 'Data-driven UI/UX strategy from Mapletech Labs in Toronto. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.',
    url: 'https://mapletechlabs.com/services/product-design/ui-ux-strategy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/product-design/ui-ux-strategy',
  },
};

export default function Page() {
  return <PageClient />;
}
