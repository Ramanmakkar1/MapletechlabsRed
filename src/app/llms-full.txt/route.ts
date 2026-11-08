import { getArticle } from '@/data/articles';
import { buyerGuideSlugs } from '@/data/buyer-guides';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import {
  agencyCombos,
  isIndexableCityService,
  isPriorityService,
  priorityCompanyHeadline,
  serviceCityCombos,
} from '@/data/serviceCity';
import { BUSINESS, HQ_ADDRESS, LOCAL_BUSINESS_AREA_SERVED } from '@/lib/seo/business';
import { canonicalUrl } from '@/lib/seo/canonical';
import { SITEMAP_CHILDREN } from '@/lib/sitemap-data';

export const revalidate = 86400;

/** Titles of legacy guide posts that are not in src/data/articles.ts (copied from each page's TITLE). */
const LEGACY_GUIDE_TITLES: Record<string, string> = {
  'ai-development-companies-canada': 'Top 10 AI Development Companies in Canada',
  'app-development-companies-edmonton': 'Top 10 App Development Companies in Edmonton (2026)',
  'choose-software-development-company-canada': 'How to Choose a Software Development Company in Canada',
  'software-development-companies-calgary': 'Top 10 Software Development Companies in Calgary (2026)',
  'top-seo-companies-canada': 'Top 10 SEO Companies in Canada (2026)',
  'web-development-companies-toronto': 'Top Web Development Companies in Toronto',
};

function buildText(): string {
  // Only URLs listed in the sitemap (which already excludes noindex pages) are emitted.
  const inSitemap = new Set(SITEMAP_CHILDREN.flatMap(child => child.entries().map(e => e.loc)));
  const link = (label: string, path: string, note?: string): string | null => {
    const url = canonicalUrl(path);
    if (!inSitemap.has(url)) return null;
    return `- [${label}](${url})${note ? `: ${note}` : ''}`;
  };
  const lines = (items: (string | null)[]) => items.filter((l): l is string => Boolean(l));

  const cityName = new Map(cities.map(c => [c.slug, c.name]));
  const serviceName = new Map(services.map(s => [s.slug, s.name]));

  const out: string[] = [];
  out.push(`# ${BUSINESS.name}: full entity and buyer-guide index`);
  out.push('');
  out.push(`> Full index for AI assistants. Summary version: ${canonicalUrl('/llms.txt')}`);
  out.push('');

  out.push('## Company facts');
  out.push('');
  out.push(`- Name: ${BUSINESS.name}`);
  out.push(`- Headquarters: ${HQ_ADDRESS.addressLocality}, ${HQ_ADDRESS.addressRegion} ${HQ_ADDRESS.postalCode}, Canada`);
  out.push(`- Phone: ${BUSINESS.telephone}`);
  out.push(`- Email: ${BUSINESS.email}`);
  out.push(`- Website: ${canonicalUrl('/')}`);
  out.push(`- Main cities served: ${LOCAL_BUSINESS_AREA_SERVED.map(a => `${a.name} (${a.containedInPlace.name})`).join(', ')}`);
  out.push(`- Profiles: ${BUSINESS.sameAs.join(', ')}`);
  out.push(...lines([
    link('About', '/about'),
    link('Founder: Raman Makkar', '/about/raman-makkar'),
    link('All locations', '/locations'),
    link('Pricing', '/pricing'),
    link('Case studies', '/case-studies'),
    link('Contact', '/contact'),
  ]));
  out.push('');

  out.push('## Services');
  out.push('');
  out.push(...lines([link('All services', '/services')]));
  out.push(...lines(services.map(s =>
    link(s.name, `/services/${s.slug}`, s.relatedSubServices.map(r => r.name).join(', '))
  )));
  out.push('');

  out.push('## Software development by city');
  out.push('');
  out.push(...lines(cities.map(c =>
    link(`Software Development Company in ${c.name}`, `/locations/software-development-company-in-${c.slug}`)
  )));
  out.push('');

  out.push('## Service + city pages');
  for (const c of cities) {
    const items = lines([
      ...serviceCityCombos
        .filter(sc => sc.citySlug === c.slug)
        .map(sc => link(`${priorityCompanyHeadline(sc.serviceSlug, sc.label)} Company in ${c.name}`, `/locations/${sc.slug}`)),
      ...agencyCombos
        .filter(ac => ac.citySlug === c.slug)
        .map(ac => link(`${ac.label} in ${c.name}`, `/locations/${ac.slug}`)),
      ...services
        .filter(s => !isPriorityService(s.slug) && isIndexableCityService(c.slug, s.slug))
        .map(s => link(`${serviceName.get(s.slug)} in ${cityName.get(c.slug)}`, `/locations/${c.slug}/${s.slug}`)),
    ]);
    if (items.length === 0) continue;
    out.push('');
    out.push(`### ${c.name}${c.isHQ ? ' (headquarters)' : ''}`);
    out.push('');
    out.push(...items);
  }
  out.push('');

  out.push('## Buyer guides');
  out.push('');
  out.push(...lines(buyerGuideSlugs.map(slug => {
    const title = getArticle(slug)?.title ?? LEGACY_GUIDE_TITLES[slug];
    return title ? link(title, `/blog/${slug}`) : null;
  })));
  out.push('');

  return out.join('\n');
}

export function GET() {
  return new Response(buildText(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
