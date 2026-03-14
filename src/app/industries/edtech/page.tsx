import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'EdTech Software Development',
  description: 'Custom EdTech software development by Mapletech Labs. Learning management systems, virtual classrooms, assessment tools, and educational apps.',
  openGraph: {
    title: 'EdTech Software Development | Mapletech Labs',
    description: 'Custom EdTech software development by Mapletech Labs. Learning management systems, virtual classrooms, assessment tools, and educational apps.',
    url: 'https://www.mapletechlabs.com/industries/edtech',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/industries/edtech',
  },
};

export default function Page() {
  return <PageClient />;
}
