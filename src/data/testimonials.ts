export interface Quote { name: string; role: string; text: string; metric: string; label: string }
export const quotes: Quote[] = [
  { name: 'Jessica Chen', role: 'VP Engineering, Axion Capital · Toronto', text: 'Mapletech Labs rebuilt our trading infrastructure from scratch. Went from 100ms latency to sub-50ms, processing 75K transactions daily with zero data loss. Their engineering is meticulous.', metric: '75K+', label: 'daily transactions' },
  { name: 'Dr. Ravinder Patel', role: 'Chief Medical Officer, ClinicFlow Health · Vancouver', text: 'They built our patient management system with HIPAA compliance baked in from day one. Reduced our admin overhead by 40% and our patients actually use it. Worth every penny.', metric: '40%', label: 'less admin overhead' },
  { name: 'Marcus Thompson', role: 'CEO, NorthStar E-Commerce · Montréal', text: 'Redesigned our entire checkout flow. Conversion rate jumped from 2.1% to 3.8% within 90 days. The team understood our business better than we did — strategic partners, not just devs.', metric: '3.8%', label: 'conversion rate' },
];
