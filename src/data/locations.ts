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
    href: '/locations/alberta',
    label: 'Software development company in Alberta — Edmonton, Calgary and the wider province',
  },
  {
    href: '/locations/british-columbia',
    label: 'Software development company in British Columbia — Vancouver, Victoria, Surrey and Kelowna',
  },
  {
    href: '/locations/ontario',
    label: 'Software development company in Ontario — Toronto, Ottawa, Mississauga and the GTA',
  },
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
    href: '/locations/software-development-company-in-edmonton',
    label: 'Software development company in Edmonton, Alberta (our headquarters)',
  },
  {
    href: '/locations/software-development-company-in-calgary',
    label: 'Software development company in Calgary, Alberta',
  },
  {
    href: '/locations/software-development-company-in-toronto',
    label: 'Software development company in Toronto, Ontario',
  },
  {
    href: '/locations/software-development-company-in-vancouver',
    label: 'Software development company in Vancouver, British Columbia',
  },
  {
    href: '/locations/software-development-company-in-ottawa',
    label: 'Software development company in Ottawa, Ontario',
  },
  {
    href: '/locations/software-development-company-in-montreal',
    label: 'Software development company in Montreal, Quebec',
  },
  {
    href: '/locations/software-development-company-in-winnipeg',
    label: 'Software development company in Winnipeg, Manitoba',
  },
  {
    href: '/locations/software-development-company-in-halifax',
    label: 'Software development company in Halifax, Nova Scotia',
  },
  {
    href: '/locations/software-development-company-in-victoria',
    label: 'Software development company in Victoria, British Columbia',
  },
  {
    href: '/locations/software-development-company-in-saskatoon',
    label: 'Software development company in Saskatoon, Saskatchewan',
  },
  {
    href: '/locations/software-development-company-in-kitchener',
    label: 'Software development company in Kitchener, Ontario',
  },
  {
    href: '/locations/software-development-company-in-london-on',
    label: 'Software development company in London, Ontario',
  },
  {
    href: '/locations/software-development-company-in-mississauga',
    label: 'Software development company in Mississauga, Ontario',
  },
  {
    href: '/locations/software-development-company-in-hamilton',
    label: 'Software development company in Hamilton, Ontario',
  },
  {
    href: '/locations/software-development-company-in-surrey',
    label: 'Software development company in Surrey, British Columbia',
  },
  {
    href: '/locations/software-development-company-in-regina',
    label: 'Software development company in Regina, Saskatchewan',
  },
  {
    href: '/locations/software-development-company-in-quebec-city',
    label: 'Software development company in Quebec City, Quebec',
  },
  {
    href: '/locations/software-development-company-in-brampton',
    label: 'Software development company in Brampton, Ontario',
  },
  {
    href: '/locations/software-development-company-in-markham',
    label: 'Software development company in Markham, Ontario',
  },
  {
    href: '/locations/software-development-company-in-windsor',
    label: 'Software development company in Windsor, Ontario',
  },
  {
    href: '/locations/software-development-company-in-kelowna',
    label: 'Software development company in Kelowna, British Columbia',
  },
  {
    href: '/locations/software-development-company-in-laval',
    label: 'Software development company in Laval, Quebec',
  },
  {
    href: '/locations/software-development-company-in-gatineau',
    label: 'Software development company in Gatineau, Quebec',
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
