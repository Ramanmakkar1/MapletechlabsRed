/**
 * Page <title> resolution for hand-written metadata.
 *
 * The root layout applies `title.template = "%s | Mapletech Labs"` to every
 * string title. Two cases must opt out of that template (via `{ absolute }`):
 *
 *   1. The title already names the brand ("Contact Mapletech Labs | …"),
 *      otherwise the brand is emitted twice.
 *   2. Branding would push the rendered title past 70 characters — Bing
 *      Webmaster flags those, and the useful part gets truncated in SERPs.
 *
 * Titles that fit are returned unchanged so the template still brands them.
 */
export const BRAND_SUFFIX = ' | Mapletech Labs';
export const MAX_TITLE_LENGTH = 70;

export function seoTitle(title: string): string | { absolute: string } {
  const trimmed = title.trim();
  if (/Mapletech Labs/i.test(trimmed)) return { absolute: trimmed };
  if (trimmed.length + BRAND_SUFFIX.length > MAX_TITLE_LENGTH) return { absolute: trimmed };
  return trimmed;
}
