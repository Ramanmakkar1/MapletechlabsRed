'use client';

import { defaultFaqs } from '@/data/faqs';
import { safeJsonLd } from '@/lib/seo/jsonLd';

export default function FAQSchema() {
  const faqs = defaultFaqs;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaData) }}
    />
  );
}
