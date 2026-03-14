import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Unity Game Development Services | C# Experts',
  description: 'Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, multiplayer, and cross-platform game studio in Canada.',
  openGraph: {
    title: 'Unity Game Development Services | Mapletech Labs',
    description: 'Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, and multiplayer.',
    url: 'https://mapletechlabs.ca/services/game-development/unity-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/game-development/unity-development',
  },
};

export default function Page() {
  return <PageClient />;
}
