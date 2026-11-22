export const CITY_LISTICLE_RE = /^([a-z0-9-]+)-(companies|agencies)-([a-z-]+)$/;

export function isCityListicleSlug(slug: string): boolean {
  const m = slug.match(CITY_LISTICLE_RE);
  return !!m && m[3] !== 'canada';
}

export function isCityListiclePath(pathname: string): boolean {
  const prefix = '/blog/';
  if (!pathname.startsWith(prefix)) return false;
  return isCityListicleSlug(pathname.slice(prefix.length));
}
