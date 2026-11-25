import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  coreCitiesAreaServed,
  safeJsonLd,
} from './schema.ts';
import { localServiceSchema } from './business.ts';

test('buildServiceSchema emits the required Service fields', () => {
  const schema = buildServiceSchema({
    name: 'Custom Software Development | Toronto',
    description: 'Custom software for Toronto teams.',
    url: 'https://mapletechlabs.ca/services/custom-software-development',
    serviceType: 'Custom Software Development',
    areaServed: 'Toronto',
    areaServedType: 'AdministrativeArea',
  });

  assert.equal(schema['@context'], 'https://schema.org');
  assert.equal(schema['@type'], 'Service');
  assert.equal(schema.name, 'Custom Software Development');
  assert.equal(schema.description, 'Custom software for Toronto teams.');
  assert.equal(
    schema.url,
    'https://mapletechlabs.ca/services/custom-software-development',
  );
  assert.equal(schema.provider['@id'], 'https://mapletechlabs.ca/#organization');
  assert.equal(schema.areaServed.name, 'Toronto');
  assert.equal(schema.areaServed['@type'], 'AdministrativeArea');
});

test('buildServiceSchema adds CAD offers for a priced service page', () => {
  const schema = buildServiceSchema({
    name: 'Website Development',
    description: 'Websites for Canadian businesses.',
    url: 'https://mapletechlabs.ca/services/web-development',
  });

  assert.deepEqual(schema.offers, {
    '@type': 'AggregateOffer',
    priceCurrency: 'CAD',
    lowPrice: 10_000,
    highPrice: 100_000,
    offerCount: 2,
  });
});

test('buildServiceSchema adds no offers for an industry page', () => {
  const schema = buildServiceSchema({
    name: 'Custom Software Development | Toronto',
    description: 'Custom software for Toronto teams.',
    url: 'https://mapletechlabs.ca/services/custom-software-development',
  });

  assert.equal(schema.offers, undefined);
});

test('buildFaqSchema returns null for an empty list', () => {
  assert.equal(buildFaqSchema([]), null);
});

test('buildFaqSchema maps a one-item FAQ to mainEntity', () => {
  const schema = buildFaqSchema([
    { q: 'How much does an app cost?', a: 'It depends on scope.' },
  ]);

  assert.ok(schema);
  assert.equal(schema['@type'], 'FAQPage');
  assert.equal(schema.mainEntity[0]['@type'], 'Question');
  assert.equal(schema.mainEntity[0].name, 'How much does an app cost?');
  assert.equal(schema.mainEntity[0].acceptedAnswer.text, 'It depends on scope.');
});

test('buildBreadcrumbSchema maps position, name and item', () => {
  const schema = buildBreadcrumbSchema([
    { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { position: 2, name: 'Services' },
  ]);

  assert.equal(schema['@context'], 'https://schema.org');
  assert.equal(schema['@type'], 'BreadcrumbList');
  assert.deepEqual(schema.itemListElement[0], {
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: 'https://mapletechlabs.ca',
  });
  assert.deepEqual(schema.itemListElement[1], {
    '@type': 'ListItem',
    position: 2,
    name: 'Services',
  });
});

test('coreCitiesAreaServed lists all four core cities with the page city first', () => {
  const nodes = coreCitiesAreaServed('Calgary');
  assert.deepEqual(nodes.map(node => node.name), ['Calgary', 'Edmonton', 'Toronto', 'Vancouver']);
  assert.ok(nodes.every(node => node['@type'] === 'City' && node.containedInPlace.name));
  assert.deepEqual(
    coreCitiesAreaServed('Halifax').map(node => node.name),
    ['Edmonton', 'Calgary', 'Toronto', 'Vancouver'],
  );
});

test('safeJsonLd escapes < to \\u003c in JSON-LD output without HTML entities', () => {
  const output = safeJsonLd({
    name: '<Special & Unique> Service',
    description: 'Apps built in <3 weeks with <script> tags & HTML',
  });

  assert.ok(output.includes('\\u003cSpecial & Unique> Service'), 'escapes < to \\u003c');
  assert.ok(output.includes('\\u003c3 weeks with \\u003cscript> tags & HTML'), 'escapes all < to \\u003c');
  assert.ok(!output.includes('<'), 'contains no unescaped <');
  assert.ok(!output.includes('&lt;'), 'does not use HTML entities');

  // Must remain valid JSON that parses cleanly
  const parsed = JSON.parse(output);
  assert.equal(parsed.name, '<Special & Unique> Service');
  assert.equal(parsed.description, 'Apps built in <3 weeks with <script> tags & HTML');
});

test('safeJsonLd serializes Service, LocalBusiness and Organization schemas with \\u003c escaping', () => {
  const service = buildServiceSchema({
    name: 'Web Development <Next.js>',
    description: 'Enterprise portals & webapps with <1s load times.',
    url: 'https://mapletechlabs.ca/services/web-development',
  });
  const serviceJsonLd = safeJsonLd(service);
  assert.ok(serviceJsonLd.includes('\\u003cNext.js>'));
  assert.ok(serviceJsonLd.includes('\\u003c1s load times.'));
  assert.ok(!serviceJsonLd.includes('<'));

  const localBiz = localServiceSchema({
    cityName: 'Edmonton <HQ>',
    provinceName: 'Alberta',
    url: 'https://mapletechlabs.ca/locations/edmonton',
  });
  const localBizJsonLd = safeJsonLd(localBiz);
  assert.ok(localBizJsonLd.includes('\\u003cHQ>'));
  assert.ok(!localBizJsonLd.includes('<'));

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mapletech Labs <Canada>',
    description: 'Top-tier software agency <established 2020>',
  };
  const orgJsonLd = safeJsonLd(org);
  assert.ok(orgJsonLd.includes('\\u003cCanada>'));
  assert.ok(orgJsonLd.includes('\\u003cestablished 2020>'));
  assert.ok(!orgJsonLd.includes('<'));
});
