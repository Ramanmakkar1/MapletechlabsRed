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
 * Brand-containing titles are also clamped to 60 characters.
 */
export const BRAND_SUFFIX = ' | Mapletech Labs';
export const MAX_TITLE_LENGTH = 60;

function decodeEntities(title: string): string {
  return title
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function cleanTitle(title: string): string {
  return decodeEntities(title).replace(/\s+/g, ' ').trim();
}

function hasBrand(title: string): boolean {
  return /Mapletech Labs/i.test(title);
}

/** Keep the first brand mention and remove any extra ones, then tidy separators. */
function dedupeBrand(title: string): string {
  let kept = false;
  return cleanTitle(
    title
      .replace(/Mapletech Labs/gi, (match) => {
        if (kept) return '';
        kept = true;
        return match;
      })
      .replace(/(\s*[|:\-–—]\s*){2,}/g, ' | ')
      .replace(/\s*[|:\-–—]\s*$/, ''),
  );
}

function clampTitle(title: string): string {
  if (title.length <= MAX_TITLE_LENGTH) return title;
  const spaceIndex = title.lastIndexOf(' ', MAX_TITLE_LENGTH);
  const cut = spaceIndex === -1 ? title.slice(0, MAX_TITLE_LENGTH) : title.slice(0, spaceIndex);
  return cut.replace(/[ :|\-,&(]+$/, '').trim();
}

/**
 * Resolve the final branded string for both plain ("SEO Services in Canada")
 * and already-branded ("Contact Mapletech Labs") inputs. The brand is added at
 * most once, and an over-long title is clamped instead of overflowing 60
 * characters, keeping the leading keyword intact.
 *
 * The brand is only appended when the rendered result still fits within
 * MAX_TITLE_LENGTH, so short titles are lengthened toward the 50-60 range
 * without ever pushing a keyword-first title past 60.
 */
export function resolveBrandedTitle(title: string): string {
  const cleaned = cleanTitle(title);
  if (hasBrand(cleaned)) return clampTitle(dedupeBrand(cleaned));
  const branded = `${cleaned}${BRAND_SUFFIX}`;
  return branded.length > MAX_TITLE_LENGTH ? clampTitle(cleaned) : branded;
}

export function ogTitle(title: string): string {
  return resolveBrandedTitle(title);
}

/**
 * Return the exact string Next.js should render. The root layout's
 * `title.template` is bypassed with `{ absolute }` because the brand has
 * already been resolved here: this keeps the keyword prefix first, adds the
 * brand only when the result stays within 60 characters, and never emits the
 * brand twice.
 */
export function seoTitle(title: string): { absolute: string } {
  return { absolute: resolveBrandedTitle(title) };
}

/**
 * Lengthen short local service titles toward 50-60 chars (branded) without
 * keyword stuffing: add the province code, then a click hook, only while the
 * branded title still fits MAX_TITLE_LENGTH.
 */
export function localServiceTitle(title: string, cityName: string, provinceAbbr: string): string {
  const t = decodeEntities(title).trim();
  const fits = (s: string) => s.length + BRAND_SUFFIX.length <= MAX_TITLE_LENGTH;
  let out = t;
  if (provinceAbbr && t.endsWith(` in ${cityName}`) && fits(`${t}, ${provinceAbbr}`)) out = `${t}, ${provinceAbbr}`;
  if (!/[|$]|quote/i.test(out) && fits(`${out} | Free Quote`)) out = `${out} | Free Quote`;
  return out;
}
