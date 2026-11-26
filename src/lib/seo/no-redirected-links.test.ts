import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { NON_INDEXABLE_PATHS } from './indexability';

function walkDir(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (file.isFile() && (file.name.endsWith('.ts') || file.name.endsWith('.tsx'))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

test('no source files hardcode links to non-indexable/redirected paths', () => {
  const srcRoot = path.resolve(process.cwd(), 'src');
  const allFiles = walkDir(srcRoot);

  const errors: string[] = [];

  for (const nonIndexable of NON_INDEXABLE_PATHS) {
    // Determine route folder for this path under src/app
    // e.g., '/services/web-development/saas-platforms' -> 'src/app/services/web-development/saas-platforms'
    const routeFolder = path.resolve(srcRoot, 'app', nonIndexable.replace(/^\//, '')).toLowerCase();

    const patterns = [
      `href="${nonIndexable}"`,
      `href='${nonIndexable}'`,
      `href: '${nonIndexable}'`,
    ];

    for (const filePath of allFiles) {
      const normalizedPath = filePath.replace(/\\/g, '/');

      // Skip *.test.ts and *.test.tsx
      if (normalizedPath.endsWith('.test.ts') || normalizedPath.endsWith('.test.tsx')) {
        continue;
      }

      // Skip src/lib/seo/indexability.ts and src/lib/sitemap-data.ts
      if (
        normalizedPath.endsWith('src/lib/seo/indexability.ts') ||
        normalizedPath.endsWith('src/lib/sitemap-data.ts')
      ) {
        continue;
      }

      // Skip each path's own route folder under src/app
      const resolvedDir = path.dirname(path.resolve(filePath)).toLowerCase();
      if (resolvedDir === routeFolder || resolvedDir.startsWith(routeFolder + path.sep)) {
        continue;
      }

      const content = fs.readFileSync(filePath, 'utf-8');
      for (const pattern of patterns) {
        if (content.includes(pattern)) {
          errors.push(`File ${normalizedPath} hardcodes ${pattern}`);
        }
      }
    }
  }

  assert.equal(
    errors.length,
    0,
    `Found hardcoded redirected or removed paths:\n${errors.join('\n')}`
  );
});
