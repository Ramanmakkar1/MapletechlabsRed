import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BLOG_DIR = join(process.cwd(), 'src/app/blog');
const AUTHOR_LINE = '  author: BLOG_AUTHOR,';
const IMPORT_RE = /import\s*\{([^}]*)\}\s*from\s*'@\/lib\/seo\/business';/;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name === 'page.tsx') out.push(full);
  }
  return out;
}

let changed = 0;
for (const file of walk(BLOG_DIR)) {
  let src = readFileSync(file, 'utf8');
  if (!src.includes(AUTHOR_LINE)) continue;
  if (src.includes('image: BLOG_IMAGE')) continue;

  // (a) insert image line after the author line, same indentation
  src = src.replace(
    /^([ \t]*)author: BLOG_AUTHOR,(\r?\n)/m,
    (_m, indent, nl) => `${indent}author: BLOG_AUTHOR,${nl}${indent}image: BLOG_IMAGE,${nl}`,
  );
  if (!src.includes('image: BLOG_IMAGE')) continue;

  // (b) add BLOG_IMAGE to the business import
  src = src.replace(IMPORT_RE, (match, names) => {
    if (/\bBLOG_IMAGE\b/.test(names)) return match;
    const updated = names.trim().length ? `${names.trimEnd()}, BLOG_IMAGE ` : ' BLOG_IMAGE ';
    return match.replace(`{${names}}`, `{${updated}}`);
  });

  writeFileSync(file, src);
  changed++;
}

console.log(`Updated ${changed} blog page(s).`);
