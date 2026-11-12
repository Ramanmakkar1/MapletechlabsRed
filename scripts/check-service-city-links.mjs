#!/usr/bin/env node
/**
 * Regression check: the SEO service pages must render the ServiceCityLinks
 * block so they link to the "SEO company in <city>" money pages.
 *
 * The block is rendered once by SubServicePageTemplate (commit a991dc76), so
 * both pages get it through the shared template. This guards against the
 * template dropping the block or a page moving off the template.
 */
import { readFileSync } from 'node:fs';

const template = readFileSync('src/components/page/SubServicePageTemplate.tsx', 'utf8');
const pages = [
  'src/app/services/digital-marketing/seo-services/PageClient.tsx',
  'src/app/services/digital-marketing/local-seo/page.tsx',
];

const failures = [];

if (!template.includes('<ServiceCityLinks serviceSlug={parentSlug} serviceName={parent.label} />')) {
  failures.push('SubServicePageTemplate no longer renders <ServiceCityLinks serviceSlug={parentSlug} ... />');
}

for (const page of pages) {
  const src = readFileSync(page, 'utf8');
  if (!src.includes('SubServicePageTemplate')) {
    failures.push(`${page} no longer uses SubServicePageTemplate`);
  }
  if (!src.includes("href: '/services/digital-marketing'") && !src.includes('href: "/services/digital-marketing"')) {
    failures.push(`${page} no longer sets the digital-marketing parent (city links would point elsewhere)`);
  }
}

if (failures.length) {
  console.error('Service city link regression check failed:');
  for (const f of failures) console.error(` - ${f}`);
  process.exit(1);
}

console.log('OK: SEO service pages render ServiceCityLinks via SubServicePageTemplate.');
