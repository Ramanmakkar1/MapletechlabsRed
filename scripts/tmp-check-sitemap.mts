import assert from 'node:assert/strict';
import test from 'node:test';
import { SITEMAP_CHILDREN } from '../src/lib/sitemap-data';
import { isIndexableSitemapPath } from '../src/lib/seo/indexability';

test('acceptance criteria', () => {
  const loc = SITEMAP_CHILDREN.find(c => c.file === 'location-sitemap.xml')!;
  const paths = loc.entries().map(e => e.loc.replace(/^https?:\/\/[^/]+/, ''));
  console.log('location-sitemap entries:', paths.length);
  console.log('seo-company-in-*:', paths.filter(p => p.includes('/seo-company-in-')).length);
  console.log('digital-marketing-agency-in-*:', paths.filter(p => p.includes('/digital-marketing-agency-in-')).length);
  console.log('app-dev-halifax:', paths.includes('/locations/app-development-company-in-halifax'));
  console.log('alberta:', paths.includes('/locations/alberta'));
  console.log('swdev-halifax:', paths.includes('/locations/software-development-company-in-halifax'));
  for (const p of ['/locations/alberta','/locations/software-development-company-in-halifax','/locations/app-development-company-in-halifax','/locations/seo-company-in-halifax','/locations/digital-marketing-agency-in-halifax']) {
    console.log(p, '=>', isIndexableSitemapPath(p));
  }
});
