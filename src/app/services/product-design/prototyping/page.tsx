import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Prototyping & User Testing Services | Toronto',
  description: 'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints, and real-user testing. 300+ prototypes built across Canada.',
  openGraph: {
    title: 'Prototyping & User Testing Services | Mapletech Labs',
    description: 'Interactive prototyping and usability testing by Mapletech Labs. Figma prototypes, design sprints, and real-user testing. 300+ prototypes built across Canada.',
    url: 'https://www.mapletechlabs.com/services/product-design/prototyping',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/product-design/prototyping',
  },
};

export default function Page() {
  return <PageClient />;
}
