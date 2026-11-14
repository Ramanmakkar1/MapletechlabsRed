import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

export const dynamic = 'force-static';

const TITLE = 'Software Development by Industry in Canada';
const DESCRIPTION = 'Specialized software development for FinTech, healthcare, e-commerce, enterprise, EdTech and logistics. Deep domain expertise in every vertical we serve.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/industries',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries'),
  },
};

export default function Page() {
  return <PageClient />;
}
