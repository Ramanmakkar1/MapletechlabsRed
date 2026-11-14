/**
 * Meta description resolution for hand-written metadata.
 *
 * Search engines truncate descriptions past ~155 characters, so long copy is
 * cut at a word boundary and stripped of trailing punctuation. The cut never
 * falls below the 140-character target: if the last word boundary is too early,
 * the copy is cut at the maximum instead. Short copy is returned unchanged:
 * padding with filler is not allowed, so a description under 140 characters
 * must be rewritten with real page facts instead.
 */
const MIN_DESCRIPTION_LENGTH = 140;
const MAX_DESCRIPTION_LENGTH = 155;

export function seoDescription(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length <= MAX_DESCRIPTION_LENGTH) return trimmed;
  const spaceIndex = trimmed.lastIndexOf(' ', MAX_DESCRIPTION_LENGTH);
  const cut = spaceIndex >= MIN_DESCRIPTION_LENGTH
    ? trimmed.slice(0, spaceIndex)
    : trimmed.slice(0, MAX_DESCRIPTION_LENGTH);
  const cleaned = cut.replace(/[.,;:!?\-–—]+$/, '').trim();
  if (cleaned.length >= MIN_DESCRIPTION_LENGTH) return cleaned;
  return trimmed.slice(0, MAX_DESCRIPTION_LENGTH).replace(/[.,;:!?\-–—]+$/, '').trim();
}
