/**
 * Canonical-URL helpers — the single place the site's public origin and the
 * shape of a canonical path are decided.
 *
 * Rule: every indexable page's canonical is its own URL. The root layout sets
 * `metadataBase` only and never a canonical (a root canonical is inherited by
 * every child page that forgets to set its own, which collapses the whole site
 * onto the homepage in Google's eyes).
 */

const PRODUCTION_ORIGIN = 'https://mapletechlabs.ca';

/** Public site origin, no trailing slash. Honours NEXT_PUBLIC_SITE_URL. */
export function siteOrigin(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();
  const candidate = /^https?:\/\//i.test(raw) ? raw : PRODUCTION_ORIGIN;
  return candidate.replace(/\/+$/, '');
}

/**
 * Normalise a path (or an absolute URL on this origin) into canonical form:
 * no query string, no hash, no trailing slash (except the root "/"), no
 * duplicate slashes, always a leading "/".
 */
export function canonicalPath(input: string): string {
  let path = (input || '').trim();

  if (/^https?:\/\//i.test(path)) {
    try {
      path = new URL(path).pathname;
    } catch {
      path = '/';
    }
  }

  path = path.split('#')[0].split('?')[0];
  path = path.replace(/\/{2,}/g, '/');
  if (!path.startsWith('/')) path = `/${path}`;
  if (path.length > 1) path = path.replace(/\/+$/, '');

  return path || '/';
}

/** Absolute canonical URL: origin + normalised path. */
export function canonicalUrl(input: string): string {
  return `${siteOrigin()}${canonicalPath(input)}`;
}

/**
 * False on Vercel preview/development deployments and when NEXT_PUBLIC_NOINDEX
 * is "1"; true otherwise (including plain self-hosted production builds).
 */
export function isProductionDeployment(): boolean {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv && vercelEnv !== 'production') return false;
  if (process.env.NEXT_PUBLIC_NOINDEX === '1') return false;
  return true;
}

/** Robots directive for non-production deployments, else undefined. */
export function previewRobots(): { index: false; follow: false } | undefined {
  return isProductionDeployment() ? undefined : { index: false, follow: false };
}
