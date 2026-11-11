import { Metadata } from 'next';
import FAQPageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { FAQ_JSON_LD } from '@/data/faq-categories';

const TITLE = 'FAQ: Custom Software Projects in Canada';
const DESCRIPTION = 'Get answers to common questions about working with Mapletech Labs: pricing, timelines, tech stack, IP ownership, post-launch support and NDAs.';

export const dynamic = 'force-static';
// Keep the prerendered FAQ HTML cached until the next deploy so the audit does
// not measure a cold server render as the response time.
export const revalidate = false;

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Mapletech Labs`,
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/faq',
  },
  alternates: {
    canonical: canonicalUrl('/faq'),
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <FAQPageClient />
    </>
  );
}
