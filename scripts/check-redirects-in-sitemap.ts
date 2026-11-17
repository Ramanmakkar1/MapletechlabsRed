import nextConfig from '../next.config';
import { BASE_URL, SITEMAP_CHILDREN } from '../src/lib/sitemap-data';
import { canonicalPath } from '../src/lib/seo/canonical';

async function main() {
  const redirects = await nextConfig.redirects!();
  const exactRedirectSources = new Set(
    redirects.map(r => r.source).filter(s => !s.includes(':') && !s.includes('*'))
  );

  const urls = SITEMAP_CHILDREN.flatMap(child => child.entries().map(e => e.loc));
  let found = false;
  for (const entry of urls) {
    const path = canonicalPath(entry);
    if (exactRedirectSources.has(path)) {
      console.log('FOUND REDIRECT SOURCE IN SITEMAP:', entry);
      found = true;
    }
  }
  if (!found) console.log('No redirect sources found in sitemap');
}

main();