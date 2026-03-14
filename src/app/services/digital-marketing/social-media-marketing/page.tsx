import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services Toronto',
  description: 'Full-service social media marketing in Toronto. Strategy, content creation, community management, and paid social campaigns. 50M+ impressions generated.',
  openGraph: {
    title: 'Social Media Marketing Services | Mapletech Labs',
    description: 'Full-service social media marketing in Toronto. Strategy, content creation, community management, and paid social campaigns.',
    url: 'https://mapletechlabs.com/services/digital-marketing/social-media-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/digital-marketing/social-media-marketing',
  },
};

export default function Page() {
  return <PageClient />;
}
