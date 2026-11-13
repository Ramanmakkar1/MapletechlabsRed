import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import nextConfig from '../next.config';

// The IndexNow key file must be served verbatim at the site root so Bing and
// other engines accept change notifications. It lives in public/ and must not
// be redirected, rewritten or given a trailing newline.
const KEY = '256d45ce06e9b3c83b56832d9730ac34';
const KEY_PATH = `/${KEY}.txt`;

test('IndexNow key file is served verbatim from public/', async () => {
  const body = readFileSync(join(process.cwd(), 'public', `${KEY}.txt`), 'utf8');
  assert.equal(body, KEY, 'the key file must contain only the key, with no trailing newline');

  assert.equal(typeof nextConfig.redirects, 'function');
  const redirects = await nextConfig.redirects!();
  const unconditional = redirects.filter((redirect) => !redirect.has);
  assert.equal(
    unconditional.some((redirect) => redirect.source === KEY_PATH),
    false,
    `${KEY_PATH} must not be redirected`,
  );
});
