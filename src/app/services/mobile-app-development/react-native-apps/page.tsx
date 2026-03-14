import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'React Native App Development',
  description: 'React Native app development services by Mapletech Labs. Build cross-platform mobile apps with native performance using JavaScript and React.',
  openGraph: {
    title: 'React Native App Development | Mapletech Labs',
    description: 'React Native app development services by Mapletech Labs. Build cross-platform mobile apps with native performance using JavaScript and React.',
    url: 'https://www.mapletechlabs.com/services/mobile-app-development/react-native-apps',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/mobile-app-development/react-native-apps',
  },
};

export default function Page() {
  return <PageClient />;
}
