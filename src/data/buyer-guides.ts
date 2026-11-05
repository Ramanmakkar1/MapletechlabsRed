/** Buyer-guide blog posts linked from service+city money pages (slug must exist under src/app/blog). */
const BLOG_SLUGS = new Set([
  'ai-development-companies-canada',
  'ai-development-companies-toronto',
  'app-development-companies-calgary',
  'app-development-companies-edmonton',
  'app-development-companies-toronto',
  'choose-software-development-company-canada',
  'saas-development-company-canada',
  'seo-companies-calgary',
  'seo-companies-edmonton',
  'top-seo-companies-canada',
  'ui-ux-design-companies-canada',
  'web-development-companies-toronto',
  'web-development-companies-edmonton',
  'website-development-company-canada',
]);

const CITY_GUIDE_SLUG: Record<string, Partial<Record<string, string>>> = {
  'mobile-app-development': {
    toronto: 'app-development-companies-toronto',
    calgary: 'app-development-companies-calgary',
    edmonton: 'app-development-companies-edmonton',
  },
  'ai-ml': { toronto: 'ai-development-companies-toronto' },
  'digital-marketing': {
    calgary: 'seo-companies-calgary',
    edmonton: 'seo-companies-edmonton',
  },
  'web-development': {
    toronto: 'web-development-companies-toronto',
    edmonton: 'web-development-companies-edmonton',
  },
};

const NATIONAL_GUIDE_SLUG: Partial<Record<string, string>> = {
  'ai-ml': 'ai-development-companies-canada',
  'product-design': 'ui-ux-design-companies-canada',
  'digital-marketing': 'top-seo-companies-canada',
  'saas-development': 'saas-development-company-canada',
  'web-development': 'website-development-company-canada',
  'mobile-app-development': 'choose-software-development-company-canada',
};

/** Short phrase for “Comparing {label} companies in {city}?” */
const COMPARE_LABEL: Partial<Record<string, string>> = {
  'mobile-app-development': 'app development',
  'ai-ml': 'AI development',
  'digital-marketing': 'SEO',
  'web-development': 'web development',
  'product-design': 'UI/UX design',
  'saas-development': 'SaaS development',
};

export type BuyerGuide = { href: string; label: string };

function slugToHref(slug: string | undefined): string | undefined {
  if (!slug || !BLOG_SLUGS.has(slug)) return undefined;
  return `/blog/${slug}`;
}

/** City-specific buyer guide when live, otherwise the national guide for that service. */
export function buyerGuideFor(serviceSlug: string, citySlug: string): BuyerGuide | undefined {
  const compareLabel = COMPARE_LABEL[serviceSlug];
  if (!compareLabel) return undefined;

  const citySlugKey = CITY_GUIDE_SLUG[serviceSlug]?.[citySlug];
  const href =
    slugToHref(citySlugKey) ??
    slugToHref(NATIONAL_GUIDE_SLUG[serviceSlug]);
  if (!href) return undefined;

  return { href, label: compareLabel };
}

/** Descriptive anchor text for the buyer-guide card link. */
export function buyerGuideLinkText(serviceSlug: string, cityName: string): string {
  switch (serviceSlug) {
    case 'digital-marketing':
      return `Read our guide to choosing an SEO company in ${cityName}`;
    case 'ai-ml':
      return `Read our guide to choosing an AI development company in ${cityName}`;
    case 'web-development':
      return `Read our guide to choosing a web development company in ${cityName}`;
    case 'product-design':
      return `Read our guide to choosing a UI/UX design company in ${cityName}`;
    case 'saas-development':
      return `Read our guide to choosing a SaaS development company in ${cityName}`;
    default:
      return `Read our guide to choosing an app development company in ${cityName}`;
  }
}
