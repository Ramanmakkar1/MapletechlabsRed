import { isIndexableCityService } from '@/data/serviceCity';
import { isCityListiclePath } from './listicles';

/**
 * Paths that must never appear in a sitemap: they 301 elsewhere or are known
 * removed URLs. Keep this list next to the redirect rules in next.config.ts so
 * a URL cannot be redirected for visitors and still advertised to crawlers.
 */
export const NON_INDEXABLE_PATHS = new Set([
  '/blog/ai-development-companies-canada',
  '/blog/digital-marketing-cost-canada',
  '/locations/toronto/game-development',
  '/locations/saas-development-company-in-windsor',
]);

/**
 * Shared indexability rule for sitemap entries. A canonical path is eligible
 * only when it is not redirected/removed and its route metadata does not mark
 * it noindex (city/service mesh pages use isIndexableCityService for that).
 */
export function isIndexableSitemapPath(pathname: string): boolean {
  if (NON_INDEXABLE_PATHS.has(pathname)) return false;
  if (isCityListiclePath(pathname)) return false;

  const mesh = pathname.match(/^\/locations\/([^/]+)\/([^/]+)$/);
  if (mesh && !isIndexableCityService(mesh[1], mesh[2])) return false;

  return true;
}
