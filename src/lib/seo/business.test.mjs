import assert from 'node:assert/strict';
import test from 'node:test';

import { localServiceSchema } from './business.ts';

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
