import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Industrial AR Solutions | HoloLens Development',
  description: 'Enterprise industrial AR for manufacturing and maintenance. HoloLens 2, digital twins, and IoT overlays by Mapletech Labs in Toronto, Canada.',
  openGraph: {
    title: 'Industrial AR Solutions | Mapletech Labs',
    description: 'Enterprise industrial AR for manufacturing and maintenance with HoloLens 2 and digital twins.',
    url: 'https://www.mapletechlabs.com/services/ar-vr/industrial-ar',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/ar-vr/industrial-ar',
  },
};

export default function Page() {
  return <PageClient />;
}
