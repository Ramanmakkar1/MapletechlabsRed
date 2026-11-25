/**
 * Serialize a schema object to JSON-LD, escaping `<` characters as `\u003c`
 * so the output cannot close or confuse the enclosing `<script type="application/ld+json">` tag
 * (and avoids raw HTML tags or premature script closing), while remaining valid JSON
 * that parses cleanly in search engine validators.
 */
export function safeJsonLd(obj: unknown): string {
  const json = JSON.stringify(obj);
  return json ? json.replace(/</g, '\\u003c') : '';
}
