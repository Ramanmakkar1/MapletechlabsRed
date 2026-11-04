export interface Quote { name: string; role: string; text: string; metric: string; label: string; city?: string }
export const quotes: Quote[] = [
  { city: 'toronto', name: 'Jessica Chen', role: 'VP Engineering, Axion Capital · Toronto', text: 'Mapletech Labs rebuilt our trading infrastructure from scratch. Went from 100ms latency to sub-50ms, processing 75K transactions daily with zero data loss. Their engineering is meticulous.', metric: '75K+', label: 'daily transactions' },
  { city: 'vancouver', name: 'Dr. Ravinder Patel', role: 'Chief Medical Officer, ClinicFlow Health · Vancouver', text: 'They built our patient management system with HIPAA compliance baked in from day one. Reduced our admin overhead by 40% and our patients actually use it. Worth every penny.', metric: '40%', label: 'less admin overhead' },
  { city: 'montreal', name: 'Marcus Thompson', role: 'CEO, NorthStar E-Commerce · Montréal', text: 'Redesigned our entire checkout flow. Conversion rate jumped from 2.1% to 3.8% within 90 days. The team understood our business better than we did — strategic partners, not just devs.', metric: '3.8%', label: 'conversion rate' },
];

export function quoteForCity(citySlug: string): Quote | undefined {
  return quotes.find(quote => quote.city === citySlug);
}

export function reviewForQuote(quote: Quote) {
  return {
    '@type': 'Review',
    itemReviewed: { '@id': 'https://mapletechlabs.ca/#organization' },
    author: { '@type': 'Person', name: quote.name },
    reviewBody: quote.text,
    publisher: { '@type': 'Organization', name: quote.role.split(', ')[1].split(' \u00b7 ')[0] },
  };
}
