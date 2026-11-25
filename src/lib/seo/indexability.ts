import { getServiceCityCombo, isIndexableCityService, isIndexableLocationSlug, serviceCityHref } from '@/data/serviceCity';
import { canonicalPath } from './canonical';
import { isCityListiclePath } from './listicles';

/**
 * Paths that must never appear in a sitemap: they 301 elsewhere or are known
 * removed URLs. Keep this list next to the redirect rules in next.config.ts so
 * a URL cannot be redirected for visitors and still advertised to crawlers.
 */
export const NON_INDEXABLE_PATHS = new Set([
  '/locations/toronto/game-development',
  '/locations/saas-development-company-in-windsor',
  '/locations/kitchener/blockchain-web3',
  // Merged into /services/branding and /services/saas-development (owner decision).
  '/services/product-design/brand-identity',
  '/services/web-development/saas-platforms',
  // 301'd to service pages in next.config.ts (owner decision).
  '/blog/ai-development-companies-canada',
  '/blog/digital-marketing-cost-canada',
  // Canonicalised to /services/mobile-app-development/<city> (owner decision:
  // keep the services pages, stop the competing /locations app-development
  // keyword pages from appearing in the index and sitemap).
  '/locations/app-development-company-in-edmonton',
  '/locations/app-development-company-in-calgary',
  '/locations/app-development-company-in-toronto',
  '/locations/app-development-company-in-vancouver',
]);

/**
 * Paths whose own route metadata sets `robots: { index: false }`. They are live
 * and reachable (200) but must never be advertised to crawlers, so the sitemap,
 * llms.txt and internal-link helpers all drop them. Keep this list next to the
 * `robots` export of each page so a noindex page cannot be re-advertised by a
 * sitemap or link change.
 */
export const NOINDEX_PATHS = new Set([
  '/blog/app-development-companies-edmonton',
  '/blog/software-development-companies-calgary',
  '/blog/web-development-companies-toronto',
]);

/**
 * Shared indexability rule for sitemap entries. A canonical path is eligible
 * only when it is not redirected/removed, not marked noindex, and its route
 * metadata does not mark it noindex (city/service mesh pages use
 * isIndexableCityService for that).
 */
export function isIndexableSitemapPath(pathname: string): boolean {
  if (NON_INDEXABLE_PATHS.has(pathname)) return false;
  if (NOINDEX_PATHS.has(pathname)) return false;
  if (isCityListiclePath(pathname)) return false;

  const mesh = pathname.match(/^\/locations\/([^/]+)\/([^/]+)$/);
  if (mesh && !isIndexableCityService(mesh[1], mesh[2])) return false;

  const kw = pathname.match(/^\/locations\/([^/]+)$/);
  if (kw && !isIndexableLocationSlug(kw[1])) return false;

  return true;
}

export function isIndexableHref(href: string): boolean {
  return isIndexableSitemapPath(canonicalPath(href));
}

export function indexableLinkHref(href: string): string {
  if (!href.startsWith('/locations/')) return href;
  if (isIndexableHref(href)) return href;

  const m = href.match(/^\/locations\/([^/?#]+)(?:\/([^/?#]+))?\/?$/);
  if (!m) return href;

  if (m[2]) {
    return serviceCityHref(m[2], m[1]);
  }

  const combo = getServiceCityCombo(m[1]);
  return combo ? serviceCityHref(combo.serviceSlug, combo.citySlug) : href;
}

/**
 * Redirect map for 301'd blog posts. When we link to a non-indexable post,
 * send crawlers to the redirect destination instead.
 */
const BLOG_REDIRECT_MAP: Record<string, string> = {
  '/blog/ai-development-companies-canada': '/services/ai-ml',
  '/blog/digital-marketing-cost-canada': '/services/digital-marketing',
};

/**
 * Returns the correct href for a blog post slug. If the post 301s elsewhere,
 * returns the redirect destination; otherwise returns /blog/<slug>.
 */
export function blogPostHref(slug: string): string {
  const path = `/blog/${slug}`;
  if (isIndexableHref(path)) return path;
  return BLOG_REDIRECT_MAP[path] ?? path;
}

export function rewriteLocationLinks(html: string): string {
  return html.replace(/(href=["'])(\/locations\/[^"']+)([^"']*["'])/g, (_match, quote: string, href: string, rest: string) =>
    quote + indexableLinkHref(href) + rest
  );
}
