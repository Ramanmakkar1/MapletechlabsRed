/**
 * Shared metadata normalisation for blog articles.
 *
 * Every blog route reads its title and description from `getArticle()`, so the
 * limits are enforced once here instead of in each page:
 *
 *   - titles render at 50-60 characters with the primary keyword first and the
 *     brand last (the brand is dropped only when it cannot fit);
 *   - descriptions render at 140-155 characters, using the article dek as real
 *     fallback copy when the stored description is too short.
 *
 * The helpers return the *base* title (without the brand) so the existing
 * `seoTitle()` resolver still owns branding and the 60-character clamp.
 */
import { BRAND_SUFFIX, MAX_TITLE_LENGTH } from './title';
import { articleDescription } from './description';

const MIN_TITLE_LENGTH = 50;

/** Leading words that are not part of the search keyword. */
const LEADING_FILLER =
  /^(?:(?:top\s+\d+|\d+)\s+|(?:best|the|a|an)\s+|(?:what|how|why|when|where|which|who|is|are|can|should|do|does)\b[\s:,-]*|(?:to\s+)?(?:build\s+a|run|use|choose|pick|find)\s+|(?:practical\s+)?guide\s+to\s+)+/i;

/** Words that end the keyword phrase in a blog title. */
const KEYWORD_STOP_WORDS = new Set([
  'in', 'for', 'with', 'on', 'at', 'to', 'vs', 'and', 'or', 'of',
  'worth', 'get', 'gets', 'right', 'guide', 'canada', '2026',
  'locally', 'free', 'how', 'what', 'why', 'when', 'where', 'which',
  'who', 'is', 'are', 'can', 'should', 'do', 'does',
]);

function clean(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Derive the primary keyword from an article title: drop the brand, leading
 * question/list/superlative filler and any trailing qualifier, leaving the
 * search phrase the article should lead with.
 */
export function derivePrimaryKeyword(title: string): string {
  let text = clean(title).replace(/\s*[|—–]\s*Mapletech.*$/i, '');
  text = text.replace(LEADING_FILLER, '');
  const head = text.split(/\s*[:?|(]\s*/)[0];
  const words = head.split(/\s+/);
  const kept: string[] = [];
  for (const word of words) {
    if (KEYWORD_STOP_WORDS.has(word.toLowerCase())) break;
    kept.push(word);
  }
  return clean(kept.join(' ') || head);
}

/** Find a whole-word occurrence of the keyword, ignoring case. */
function keywordIndex(title: string, keyword: string): number {
  const lowerTitle = title.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();
  const isWord = (ch: string) => /[a-z0-9]/i.test(ch);
  let from = 0;
  while (from <= lowerTitle.length) {
    const at = lowerTitle.indexOf(lowerKeyword, from);
    if (at === -1) return -1;
    const before = at === 0 ? '' : lowerTitle[at - 1];
    const after = lowerTitle[at + lowerKeyword.length] ?? '';
    if ((!before || !isWord(before)) && (!after || !isWord(after))) return at;
    from = at + 1;
  }
  return -1;
}

/** Put the primary keyword first, dropping any leading filler before it. */
function normalizeKeywordFirst(title: string, keyword: string): string {
  const cleaned = clean(title);
  if (!keyword) return cleaned;
  const at = keywordIndex(cleaned, keyword);
  if (at === 0) return cleaned;
  if (at > 0) return clean(cleaned.slice(at));
  return clean(`${keyword}: ${cleaned}`);
}

/** Cut at a word boundary so the branded title never exceeds 60 characters. */
function trimToFit(text: string, max: number): string {
  if (text.length <= max) return text;
  const space = text.lastIndexOf(' ', max);
  const cut = space === -1 ? text.slice(0, max) : text.slice(0, space);
  return cut.replace(/[ :|\-,&(]+$/, '').trim();
}

/**
 * Return a keyword-first base title that `seoTitle()` can brand into the
 * 50-60 character window. The primary keyword is passed in (or derived from
 * the title) and moved to the front before any length or branding logic runs.
 * Titles that are already long enough keep every word (the brand is dropped
 * when it would overflow); short titles are trimmed to leave room for the
 * brand instead of rendering below 50 characters.
 */
export function blogTitle(title: string, keyword?: string, fallbackTitle?: string): string {
  const cleaned = clean(title);
  const primary = clean(keyword || derivePrimaryKeyword(cleaned));
  let normalized = normalizeKeywordFirst(cleaned, primary);

  // A keyword-first title can be shorter than the 50-character target. Use the
  // article's longer on-page title (same facts) when it fits better.
  if (normalized.length + BRAND_SUFFIX.length < MIN_TITLE_LENGTH && fallbackTitle) {
    const fallback = normalizeKeywordFirst(clean(fallbackTitle), primary);
    if (fallback.length > normalized.length) normalized = fallback;
  }

  // Branding is owned by seoTitle(); strip any brand mention from the base so
  // it can never bypass the length rules below.
  let base = clean(
    normalized
      .replace(/\s*[|—–-]\s*Mapletech Labs.*$/i, '')
      .replace(/Mapletech Labs/gi, '')
      .replace(/\s*[|—–-]\s*$/, ''),
  );
  if (!base) base = normalized;

  // Hard cap: always trim an over-long title at a word boundary, keeping the
  // keyword-first prefix. The brand is dropped when it cannot fit.
  if (base.length > MAX_TITLE_LENGTH) base = trimToFit(base, MAX_TITLE_LENGTH);

  // Titles that already render at 50-60 characters keep every word; seoTitle()
  // drops the brand when adding it would overflow.
  if (base.length >= MIN_TITLE_LENGTH) return base;

  // A short title needs the brand to reach 50. Trim to leave room for it.
  const maxBase = MAX_TITLE_LENGTH - BRAND_SUFFIX.length;
  base = trimToFit(base, maxBase);

  // A very short title still needs to reach 50 rendered characters. "Guide" is
  // accurate for every article and keeps the keyword at the front.
  if (base.length + BRAND_SUFFIX.length < MIN_TITLE_LENGTH && !/guide/i.test(base)) {
    const withGuide = `${base} Guide`;
    if (withGuide.length + BRAND_SUFFIX.length <= MAX_TITLE_LENGTH) base = withGuide;
  }

  return base;
}

/**
 * Return a 140-155 character description. Long copy is trimmed at a word
 * boundary; short copy is extended with the article dek (real page facts) and,
 * as a last resort, real company facts rather than filler.
 */
export function blogDescription(description: string, fallback?: string): string {
  return articleDescription(description, fallback);
}
