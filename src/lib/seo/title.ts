/**
 * Page <title> resolution for hand-written metadata.
 *
 * The root layout applies `title.template = "%s | Mapletech Labs"` to every
 * string title. Two cases must opt out of that template (via `{ absolute }`):
 *
 *   1. The title already names the brand ("Contact Mapletech Labs | …"),
 *      otherwise the brand is emitted twice.
 *   2. Branding would push the rendered title past 60 characters — Bing
 *      Webmaster flags those, and the useful part gets truncated in SERPs.
 *
 * Titles that fit are returned unchanged so the template still brands them.
 */
export const BRAND_SUFFIX = ' | Mapletech Labs';
export const MAX_TITLE_LENGTH = 60;

export function ogTitle(title: string): string {
  const trimmed = title.trim();
  const branded = `${trimmed}${BRAND_SUFFIX}`;
  return branded.length <= MAX_TITLE_LENGTH ? branded : trimmed;
}

export function seoTitle(title: string): string | { absolute: string } {
  const trimmed = title.trim();
  if (/Mapletech Labs/i.test(trimmed)) return { absolute: trimmed };
  if (trimmed.length + BRAND_SUFFIX.length > MAX_TITLE_LENGTH) return { absolute: trimmed };
  return trimmed;
}

/**
 * Lengthen short local service titles toward 50-60 chars (branded) without
 * keyword stuffing: add the province code, then a click hook, only while the
 * branded title still fits MAX_TITLE_LENGTH.
 */
export function localServiceTitle(title: string, cityName: string, provinceAbbr: string): string {
  const t = title.trim();
  const fits = (s: string) => s.length + BRAND_SUFFIX.length <= MAX_TITLE_LENGTH;
  let out = t;
  if (provinceAbbr && t.endsWith(` in ${cityName}`) && fits(`${t}, ${provinceAbbr}`)) out = `${t}, ${provinceAbbr}`;
  if (!/[|$]|quote/i.test(out) && fits(`${out} | Free Quote`)) out = `${out} | Free Quote`;
  return out;
}
