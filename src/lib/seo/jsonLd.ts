/**
 * Serialize a schema object to JSON-LD, escaping only the `</script>` sequence
 * so it cannot close the enclosing `<script type="application/ld+json">` tag.
 * Other `<` characters are left intact: they are valid inside JSON strings and
 * are not a script-injection vector on their own. Use this instead of
 * `JSON.stringify(obj).replace(/</g, '\\u003c')` in every schema renderer.
 */
export function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/<\/script>/g, '<\\/script>');
}
