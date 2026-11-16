/**
 * Location pages that sit in the sitemap but had no descriptive crawlable
 * anchor from /locations. Every entry below is an existing route:
 *   - province pages: /locations/<province>
 *   - city landing pages: /locations/software-development-company-in-<city>
 *   - service + city pages: keyword URLs from serviceCityPath()
 *
 * Keep labels descriptive ("SaaS development company in Regina") so Google and
 * Bing see the target search phrase in the anchor text, not just the city name.
 */
export interface LocationDirectoryLink {
  href: string;
  label: string;
}

export const locationDirectoryLinks: LocationDirectoryLink[] = [
  {
    href: '/locations/nova-scotia',
    label: 'Software development company in Nova Scotia — Halifax and Atlantic Canada',
  },
  {
    href: '/locations/quebec',
    label: 'Software development company in Quebec — Montreal, Quebec City and Laval',
  },
  {
    href: '/locations/saskatchewan',
    label: 'Software development company in Saskatchewan — Regina and Saskatoon',
  },
  {
    href: '/locations/manitoba',
    label: 'Software development company in Manitoba — Winnipeg',
  },
  {
    href: '/locations/software-development-company-in-burnaby',
    label: 'Software development company in Burnaby, British Columbia',
  },
  {
    href: '/locations/saas-development-company-in-regina',
    label: 'SaaS development company in Regina, Saskatchewan',
  },
  {
    href: '/locations/app-development-company-in-laval',
    label: 'App development company in Laval, Quebec',
  },
];
