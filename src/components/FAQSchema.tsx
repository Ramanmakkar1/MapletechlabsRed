'use client';

export default function FAQSchema() {
  const faqs = [
    {
      q: 'How long does a typical project take?',
      a: 'A focused MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. Every project starts with a scoping session where we give you a precise timeline with fixed milestones.'
    },
    {
      q: 'How do you price your projects?',
      a: 'We work on a fixed-scope, fixed-price model. No hourly billing, no scope creep surprises. You know exactly what you\'re getting and what it costs before we write a single line of code.'
    },
    {
      q: 'Do you work with startups or only enterprises?',
      a: 'Both. We have a Rapid Launch programme specifically for early-stage startups (8 weeks, fixed price), and dedicated enterprise teams for complex multi-year engagements. We adapt to your stage.'
    },
    {
      q: 'Who owns the code and IP?',
      a: 'You do. 100%. Full source code, all intellectual property and credentials are transferred to you upon final payment. We sign an IP assignment agreement on day one.'
    },
    {
      q: 'Do you provide post-launch support?',
      a: 'Yes. We offer tiered SLAs from Essential (bug fixes + monitoring) to Scale (dedicated engineering team + 24/7 response). Most clients stay with us long after launch.'
    },
    {
      q: 'Can you work with our existing team?',
      a: 'Absolutely. We regularly augment internal teams, do code reviews, architect complex systems and fill specialist gaps. We can be a full outsourced partner or a specialist extension of your team.'
    }
  ];

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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
