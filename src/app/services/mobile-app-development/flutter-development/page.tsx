import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Flutter App Development Services',
  description: 'Cross-platform Flutter app development by Mapletech Labs. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.',
  openGraph: {
    title: 'Flutter App Development Services | Mapletech Labs',
    description: 'Cross-platform Flutter app development by Mapletech Labs. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.',
    url: 'https://mapletechlabs.com/services/mobile-app-development/flutter-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/mobile-app-development/flutter-development',
  },
};

export default function Page() {
  return <PageClient />;
}
