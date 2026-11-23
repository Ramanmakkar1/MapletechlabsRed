import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from './schema.ts';

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
