/**
 * Meta description resolution for hand-written metadata.
 *
 * Search engines truncate descriptions past ~155 characters, so long copy is
 * cut at a word boundary and stripped of trailing punctuation. Short copy is
 * returned unchanged: padding with filler is not allowed, so a description
 * under 140 characters must be rewritten with real page facts instead.
 */
const MAX_DESCRIPTION_LENGTH = 155;

export function seoDescription(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length <= MAX_DESCRIPTION_LENGTH) return trimmed;
  const spaceIndex = trimmed.lastIndexOf(' ', MAX_DESCRIPTION_LENGTH);
  const cut = spaceIndex === -1 ? trimmed.slice(0, MAX_DESCRIPTION_LENGTH) : trimmed.slice(0, spaceIndex);
  return cut.replace(/[.,;:!?\-–—]+$/, '').trim();
}
