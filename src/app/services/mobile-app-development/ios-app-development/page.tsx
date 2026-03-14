import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'iOS App Development Services',
  description: 'Expert iOS app development with Swift & SwiftUI. Mapletech Labs builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.',
  openGraph: {
    title: 'iOS App Development Services | Mapletech Labs',
    description: 'Expert iOS app development with Swift & SwiftUI. Mapletech Labs builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.',
    url: 'https://www.mapletechlabs.com/services/mobile-app-development/ios-app-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/mobile-app-development/ios-app-development',
  },
};

export default function Page() {
  return <PageClient />;
}
