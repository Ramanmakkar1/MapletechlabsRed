export type PricingRange = { low: number; high: number; weeksLow: number; weeksHigh: number };

export const PROJECT_PRICING = {
  website: { label: 'Website', low: 10_000, high: 50_000, weeksLow: 4, weeksHigh: 10, serviceHref: '/services/web-development', guideHref: '/blog/website-cost-canada' },
  webapp: { label: 'Web app', low: 25_000, high: 100_000, weeksLow: 8, weeksHigh: 16, serviceHref: '/services/web-development', guideHref: '/blog/website-cost-canada' },
  saas: { label: 'SaaS MVP', low: 30_000, high: 75_000, weeksLow: 8, weeksHigh: 13, serviceHref: '/services/saas-development', guideHref: '/blog/saas-development-cost-canada' },
  mobile: { label: 'Mobile app', low: 30_000, high: 200_000, weeksLow: 10, weeksHigh: 24, serviceHref: '/services/mobile-app-development', guideHref: '/blog/app-development-cost-canada' },
  ai: { label: 'AI feature', low: 10_000, high: 35_000, weeksLow: 3, weeksHigh: 3, serviceHref: '/services/ai-ml', guideHref: '/blog/ai-development-cost-canada' },
} satisfies Record<string, PricingRange & { label: string; serviceHref?: string; guideHref?: string }>;

export type ProjectPricingKey = keyof typeof PROJECT_PRICING;
export type Platform = 'ios' | 'android' | 'cross' | 'native-both';

export const MOBILE_PLATFORM_PRICING: Record<Platform, PricingRange> = {
  ios: { low: 40_000, high: 180_000, weeksLow: 12, weeksHigh: 24 },
  android: { low: 35_000, high: 160_000, weeksLow: 12, weeksHigh: 24 },
  cross: { low: 30_000, high: 200_000, weeksLow: 10, weeksHigh: 24 },
  'native-both': { low: 75_000, high: 340_000, weeksLow: 16, weeksHigh: 32 },
};
