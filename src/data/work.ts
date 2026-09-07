import { caseStudyMedia, workMedia, type Media } from './media';

export interface WorkItem {
  slug: string;
  client: string;
  city: string;
  category: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
  media: Media;
  href: string;
}

const m = (slug: string): Media => caseStudyMedia[slug] ?? workMedia.fintech;

/** The six case studies, in the shape the home "work" tabs need. */
export const work: WorkItem[] = [
  { slug: 'fintech-trading-platform', client: 'Axion Capital', city: 'Toronto', category: 'FinTech', title: 'AI-Powered Trading Platform',
    desc: 'Rebuilt a real-time trading engine from scratch — sub-50ms latency, 75K+ transactions a day, zero data loss.',
    metrics: [{ value: '75K+', label: 'daily transactions' }, { value: '99.99%', label: 'uptime' }],
    media: m('fintech-trading-platform'), href: '/case-studies/fintech-trading-platform' },
  { slug: 'healthcare-telehealth', client: 'ClinicFlow Health', city: 'Vancouver', category: 'Healthcare', title: 'HIPAA-Compliant Telehealth Platform',
    desc: 'A patient platform with HIPAA and PIPEDA compliance built in from day one, serving 450K+ patient records.',
    metrics: [{ value: '450K+', label: 'patient records' }, { value: '40%', label: 'less admin overhead' }],
    media: m('healthcare-telehealth'), href: '/case-studies/healthcare-telehealth' },
  { slug: 'ecommerce-platform', client: 'NorthStar E-Commerce', city: 'Montréal', category: 'E-Commerce', title: 'Enterprise E-Commerce Redesign',
    desc: 'Redesigned checkout for 2M+ monthly visitors and lifted conversion from 2.1% to 3.8% in 90 days.',
    metrics: [{ value: '3.8%', label: 'conversion rate' }, { value: '2M+', label: 'monthly visitors' }],
    media: m('ecommerce-platform'), href: '/case-studies/ecommerce-platform' },
  { slug: 'logistics-platform', client: 'RouteLogic Inc.', city: 'Calgary', category: 'Logistics', title: 'Real-Time Fleet Management System',
    desc: 'IoT-integrated platform tracking 500 trucks and 15K+ daily deliveries, cutting fuel cost by 25%.',
    metrics: [{ value: '$180K', label: 'annual savings' }, { value: '25%', label: 'fuel cost reduction' }],
    media: m('logistics-platform'), href: '/case-studies/logistics-platform' },
  { slug: 'payments-api-platform', client: 'PayBridge Solutions', city: 'Ottawa', category: 'FinTech', title: 'PCI DSS Payments API',
    desc: 'A secure payments API handling 12M+ monthly transactions with full PCI DSS compliance.',
    metrics: [{ value: '12M+', label: 'monthly transactions' }, { value: 'PCI DSS', label: 'certified' }],
    media: m('payments-api-platform'), href: '/case-studies/payments-api-platform' },
  { slug: 'real-estate-portal', client: 'PropConnect Canada', city: 'Toronto', category: 'Real Estate', title: 'Multi-Listing Real Estate Platform',
    desc: 'ML-powered property recommendations across 850K+ active listings nationwide.',
    metrics: [{ value: '850K+', label: 'active listings' }, { value: 'ML', label: 'recommendation engine' }],
    media: m('real-estate-portal'), href: '/case-studies/real-estate-portal' },
];
