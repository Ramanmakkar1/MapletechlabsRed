/**
 * Meta description resolution for hand-written metadata.
 *
 * Search engines truncate descriptions past ~155 characters, so long copy is
 * cut at a word boundary and stripped of trailing punctuation. The cut never
 * falls below the 140-character target: if the last word boundary is too early,
 * the copy is cut at the maximum instead. Short copy is extended with real
 * company/service context by `seoDescription()`; `articleDescription()` keeps
 * its article fallback (and, when that is still too short, real company facts)
 * so blog metadata always lands in the 140-155 character window.
 */
const MIN_DESCRIPTION_LENGTH = 140;
const MAX_DESCRIPTION_LENGTH = 155;

/** Real entity facts used only when every article source is missing or short. */
const COMPANY_FACT_FALLBACK =
  'Mapletech Labs is a Canadian software development company building web, mobile and AI products for businesses in Edmonton, Calgary, Toronto and Vancouver.';

/** Real company/service context appended to short hand-written descriptions. */
const COMPANY_CONTEXT = COMPANY_FACT_FALLBACK;
const COMPANY_CONTEXT_NO_BRAND =
  'We are a Canadian software development company building web, mobile and AI products for businesses in Edmonton, Calgary, Toronto and Vancouver.';

function truncateAtWordBoundary(text: string): string {
  const spaceIndex = text.lastIndexOf(' ', MAX_DESCRIPTION_LENGTH);
  const cut = spaceIndex >= MIN_DESCRIPTION_LENGTH
    ? text.slice(0, spaceIndex)
    : text.slice(0, MAX_DESCRIPTION_LENGTH);
  return cut.replace(/[.,;:!?\-–—]+$/, '').trim();
}

export function seoDescription(text: string): string {
  const trimmed = text.trim();

  // Long copy keeps the existing word-boundary trim.
  if (trimmed.length > MAX_DESCRIPTION_LENGTH) {
    const cleaned = truncateAtWordBoundary(trimmed);
    if (cleaned.length >= MIN_DESCRIPTION_LENGTH) return cleaned;
    return trimmed
      .slice(0, MAX_DESCRIPTION_LENGTH)
      .replace(/[.,;:!?\-–—]+$/, '')
      .trim();
  }

  if (trimmed.length >= MIN_DESCRIPTION_LENGTH) return trimmed;

  // Short copy is extended with real company/service context, then trimmed at
  // a word boundary so the result still lands in the 140-155 window.
  const context = /mapletech/i.test(trimmed) ? COMPANY_CONTEXT_NO_BRAND : COMPANY_CONTEXT;
  const extended = `${trimmed} ${context}`.trim();
  if (extended.length <= MAX_DESCRIPTION_LENGTH) return extended;

  const cleaned = truncateAtWordBoundary(extended);
  if (cleaned.length >= MIN_DESCRIPTION_LENGTH) return cleaned;
  return extended
    .slice(0, MAX_DESCRIPTION_LENGTH)
    .replace(/[.,;:!?\-–—]+$/, '')
    .trim();
}

/**
 * Return a 140-155 character description for an article, keeping each source's
 * own wording so descriptions stay unique. The primary copy is used as-is when
 * it already fits; otherwise the fallback is appended, and only when both are
 * missing or too short is the company-fact sentence used to reach 140.
 */
export function articleDescription(
  description: string,
  fallback?: string,
  extra?: string,
): string {
  const sources = [description, fallback, extra]
    .map((source) => (source ?? '').replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  let combined = sources[0] ?? '';
  for (let index = 1; index < sources.length && combined.length < MIN_DESCRIPTION_LENGTH; index++) {
    combined = `${combined} ${sources[index]}`.trim();
  }

  if (combined.length < MIN_DESCRIPTION_LENGTH) {
    combined = `${combined} ${COMPANY_FACT_FALLBACK}`.trim();
  }

  const cleaned = seoDescription(combined);
  if (cleaned.length >= MIN_DESCRIPTION_LENGTH) return cleaned;

  // Pathological copy (for example a single unbroken token) can lose the tail
  // to punctuation cleanup. Fall back to the full-width cut so the result is
  // still inside the required window.
  return combined
    .slice(0, MAX_DESCRIPTION_LENGTH)
    .replace(/[.,;:!?\-–—]+$/, '')
    .trim();
}
