/** Buyer-guide blog posts linked from service+city money pages (slug must exist under src/app/blog). */
const BLOG_SLUGS = new Set([
  'ai-development-companies-canada',
  'ai-development-companies-toronto',
  'ai-development-companies-edmonton',
  'ai-development-companies-calgary',
  'ai-development-companies-vancouver',
  'app-development-companies-calgary',
  'app-development-companies-edmonton',
  'app-development-companies-toronto',
  'app-development-companies-vancouver',
  'choose-software-development-company-canada',
  'digital-marketing-agencies-edmonton',
  'digital-marketing-agencies-ottawa',
  'flutter-vs-react-native-canada',
  'wordpress-vs-headless-cms-canada',
  'digital-marketing-agencies-calgary',
  'digital-marketing-agencies-toronto',
  'digital-marketing-agencies-vancouver',
  'saas-development-company-canada',
  'seo-companies-calgary',
  'seo-companies-edmonton',
  'seo-companies-toronto',
  'seo-companies-vancouver',
  'software-development-companies-calgary',
  'software-development-companies-edmonton',
  'software-development-companies-montreal',
  'software-development-companies-ottawa',
  'software-development-companies-toronto',
  'software-development-companies-vancouver',
  'top-seo-companies-canada',
  'ui-ux-design-companies-canada',
  'ui-ux-design-companies-toronto',
  'ui-ux-design-companies-vancouver',
  'ui-ux-design-companies-edmonton',
  'ui-ux-design-companies-calgary',
  'web-development-companies-toronto',
  'web-development-companies-edmonton',
  'web-development-companies-vancouver',
  'website-development-company-canada',
]);

/** Every live buyer-guide blog slug (used by /llms-full.txt). */
export const buyerGuideSlugs: readonly string[] = [...BLOG_SLUGS];

const CITY_GUIDE_SLUG: Record<string, Partial<Record<string, string>>> = {
  'mobile-app-development': {
    toronto: 'app-development-companies-toronto',
    calgary: 'app-development-companies-calgary',
    edmonton: 'app-development-companies-edmonton',
    vancouver: 'app-development-companies-vancouver',
  },
  'ai-ml': { toronto: 'ai-development-companies-toronto', edmonton: 'ai-development-companies-edmonton', calgary: 'ai-development-companies-calgary', vancouver: 'ai-development-companies-vancouver' },
  'digital-marketing': {
    calgary: 'seo-companies-calgary',
    edmonton: 'seo-companies-edmonton',
    toronto: 'seo-companies-toronto',
    vancouver: 'seo-companies-vancouver',
  },
  'product-design': {
    toronto: 'ui-ux-design-companies-toronto',
    vancouver: 'ui-ux-design-companies-vancouver',
    edmonton: 'ui-ux-design-companies-edmonton',
    calgary: 'ui-ux-design-companies-calgary',
  },
  'web-development': {
    toronto: 'web-development-companies-toronto',
    edmonton: 'web-development-companies-edmonton',
    vancouver: 'web-development-companies-vancouver',
  },
};

/** Per-page overrides keyed by the /locations/<page-key> slug; they win over CITY_GUIDE_SLUG. */
const PAGE_GUIDE: Partial<Record<string, { slug: string; label: string; linkText: string }>> = {
  'digital-marketing-agency-in-edmonton': {
    slug: 'digital-marketing-agencies-edmonton',
    label: 'digital marketing',
    linkText: 'Read our guide to choosing a digital marketing agency in Edmonton',
  },
  'digital-marketing-agency-in-ottawa': {
    slug: 'digital-marketing-agencies-ottawa',
    label: 'digital marketing',
    linkText: 'Read our guide to choosing a digital marketing agency in Ottawa',
  },
  'digital-marketing-agency-in-calgary': {
    slug: 'digital-marketing-agencies-calgary',
    label: 'digital marketing',
    linkText: 'Read our guide to choosing a digital marketing agency in Calgary',
  },
  'digital-marketing-agency-in-toronto': {
    slug: 'digital-marketing-agencies-toronto',
    label: 'digital marketing',
    linkText: 'Read our guide to choosing a digital marketing agency in Toronto',
  },
  'digital-marketing-agency-in-vancouver': {
    slug: 'digital-marketing-agencies-vancouver',
    label: 'digital marketing',
    linkText: 'Read our guide to choosing a digital marketing agency in Vancouver',
  },
};

const NATIONAL_GUIDE_SLUG: Partial<Record<string, string>> = {
  'ai-ml': 'ai-development-companies-canada',
  'product-design': 'ui-ux-design-companies-canada',
  'digital-marketing': 'top-seo-companies-canada',
  'saas-development': 'saas-development-company-canada',
  'web-development': 'website-development-company-canada',
  'wordpress-cms': 'wordpress-vs-headless-cms-canada',
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
  'wordpress-cms': 'WordPress & CMS',
};

export type BuyerGuide = { href: string; label: string; isCity: boolean; linkText?: string };

function slugToHref(slug: string | undefined): string | undefined {
  if (!slug || !BLOG_SLUGS.has(slug)) return undefined;
  return `/blog/${slug}`;
}

/** City-specific buyer guide when live, otherwise the national guide for that service. */
export function buyerGuideFor(serviceSlug: string, citySlug: string, pageKey?: string): BuyerGuide | undefined {
  const compareLabel = COMPARE_LABEL[serviceSlug];
  if (!compareLabel) return undefined;

  const pageGuide = pageKey ? PAGE_GUIDE[pageKey] : undefined;
  const pageHref = slugToHref(pageGuide?.slug);
  if (pageGuide && pageHref) {
    return { href: pageHref, label: pageGuide.label, isCity: true, linkText: pageGuide.linkText };
  }

  const cityHref = slugToHref(CITY_GUIDE_SLUG[serviceSlug]?.[citySlug]);
  const href = cityHref ?? slugToHref(NATIONAL_GUIDE_SLUG[serviceSlug]);
  if (!href) return undefined;

  return { href, label: compareLabel, isCity: Boolean(cityHref) };
}

/** Descriptive anchor text for the buyer-guide card link. National guides say "in Canada", not the city. */
export function buyerGuideLinkText(serviceSlug: string, cityName: string, isCity: boolean): string {
  const place = isCity ? cityName : 'Canada';
  switch (serviceSlug) {
    case 'digital-marketing':
      return `Read our guide to choosing an SEO company in ${place}`;
    case 'ai-ml':
      return `Read our guide to choosing an AI development company in ${place}`;
    case 'web-development':
      return `Read our guide to choosing a web development company in ${place}`;
    case 'product-design':
      return `Read our guide to choosing a UI/UX design company in ${place}`;
    case 'saas-development':
      return `Read our guide to choosing a SaaS development company in ${place}`;
    case 'wordpress-cms':
      return `Read our WordPress vs headless CMS comparison for ${place}`;
    default:
      return `Read our guide to choosing an app development company in ${place}`;
  }
}
