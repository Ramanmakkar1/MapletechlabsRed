import assert from 'node:assert/strict';
import test from 'node:test';

import { localServiceSchema } from './business.ts';

test('localServiceSchema emits a LocalBusiness node with full NAP', () => {
  const schema = localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton',
  });

  assert.equal(schema['@type'], 'LocalBusiness');
  assert.equal(schema.name, 'Mapletech Labs');
  assert.equal(schema.url, 'https://mapletechlabs.ca');
  assert.equal(schema.telephone, '+1-403-604-8692');
  assert.equal(schema.email, 'hello@mapletechlabs.ca');
  assert.equal(schema.address.addressLocality, 'Edmonton');
  assert.equal(schema.address.addressRegion, 'AB');
  assert.equal(schema.address.postalCode, 'T5J 1B9');
  assert.equal(schema.address.addressCountry, 'CA');
  assert.equal(schema.logo, 'https://mapletechlabs.ca/logo.png');
  assert.ok(Array.isArray(schema.sameAs) && schema.sameAs.length > 0);
  assert.equal(schema.parentOrganization['@id'], 'https://mapletechlabs.ca/#organization');
});

test('localServiceSchema includes the page city in areaServed', () => {
  const schema = localServiceSchema({
    cityName: 'Halifax',
    provinceName: 'Nova Scotia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-halifax',
  });

  const halifax = schema.areaServed.find(
    (area) => area['@type'] === 'City' && area.name === 'Halifax',
  );
  assert.ok(halifax, 'areaServed should contain a City named Halifax');
  assert.equal(halifax.containedInPlace.name, 'Nova Scotia');
});

test('localServiceSchema dedupes areaServed by name', () => {
  const schema = localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton',
  });

  const names = schema.areaServed.map((area) => area.name);
  assert.equal(names.filter((name) => name === 'Edmonton').length, 1);
  assert.equal(new Set(names).size, names.length);
});

test('localServiceSchema mainEntity:false leaves out mainEntityOfPage', () => {
  const url = 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton';
  const schema = localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url,
    mainEntity: false,
  });
  assert.equal(Object.prototype.hasOwnProperty.call(schema, 'mainEntityOfPage'), false);
});

test('localServiceSchema default omits mainEntityOfPage', () => {
  const url = 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton';
  const schema = localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url,
  });
  assert.equal(Object.prototype.hasOwnProperty.call(schema, 'mainEntityOfPage'), false);
});

test('localServiceSchema mainEntity:true sets mainEntityOfPage to url', () => {
  const url = 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton';
  const schema = localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url,
    mainEntity: true,
  });
  assert.equal(schema.mainEntityOfPage, url);
});

test('localServiceSchema emits knowsAbout instead of serviceType', () => {
  const schema = localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url: 'https://mapletechlabs.ca/x',
    serviceType: ['Web Development'],
  });
  assert.deepEqual(schema.knowsAbout, ['Web Development']);
  assert.equal(Object.prototype.hasOwnProperty.call(schema, 'serviceType'), false);
});
