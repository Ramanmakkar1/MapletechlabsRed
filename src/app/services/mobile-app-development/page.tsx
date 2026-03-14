import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Mobile App Development Services',
  description: 'Expert mobile app development services by Mapletech Labs. iOS, Android, Flutter, and React Native apps. 300+ apps shipped with 4.9-star average rating.',
  openGraph: {
    title: 'Mobile App Development Services | Mapletech Labs',
    description: 'Expert mobile app development services by Mapletech Labs. iOS, Android, Flutter, and React Native apps. 300+ apps shipped with 4.9-star average rating.',
    url: 'https://mapletechlabs.com/services/mobile-app-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/mobile-app-development',
  },
};

export default function Page() {
  return <PageClient />;
}
