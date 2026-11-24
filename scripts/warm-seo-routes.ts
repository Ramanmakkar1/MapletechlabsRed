/**
 * Bounded SEO route cache warmup.
 *
 * Warms the audited service and service+city landing pages that are slow on a
 * cold cache. Requests are capped at 2 in flight and each request has a hard
 * 10 second deadline, so the command always finishes.
 *
 * Usage:
 *   npx tsx scripts/warm-seo-routes.ts
 *   npx tsx scripts/warm-seo-routes.ts --base-url https://staging.example.com
 *
 * Exits non-zero if any route returns a non-2xx status or times out.
 */

const DEFAULT_BASE_URL = 'https://mapletechlabs.ca';
const REQUEST_TIMEOUT_MS = 10_000;
const MAX_CONCURRENCY = 2;

/** Audited service landing pages. */
const SERVICE_ROUTES = [
  '/services/mobile-app-development',
  '/services/ai-ml',
  '/services/web-development',
  '/services/software-development',
  '/services/product-design',
  '/services/blockchain-web3',
  '/services/cloud-devops',
  '/services/ar-vr',
  '/services/digital-marketing',
  '/services/wordpress-cms',
  '/services/game-development',
  '/services/branding',
  '/services/saas-development',
];

/** Audited service+city landing pages (priority money keywords). */
const LOCATION_ROUTES = [
  // Software development city pages
  '/locations/software-development-company-in-edmonton',
  '/locations/software-development-company-in-calgary',
  '/locations/software-development-company-in-toronto',
  '/locations/software-development-company-in-vancouver',
  // Priority service+city pages
  '/locations/ai-development-company-in-edmonton',
  '/locations/ai-development-company-in-calgary',
  '/locations/ai-development-company-in-toronto',
  '/locations/ai-development-company-in-vancouver',
  '/services/mobile-app-development/edmonton',
  '/services/mobile-app-development/calgary',
  '/services/mobile-app-development/toronto',
  '/services/mobile-app-development/vancouver',
  '/locations/web-development-company-in-edmonton',
  '/locations/web-development-company-in-calgary',
  '/locations/web-development-company-in-toronto',
  '/locations/web-development-company-in-vancouver',
  '/locations/seo-company-in-edmonton',
  '/locations/seo-company-in-calgary',
  '/locations/seo-company-in-toronto',
  '/locations/seo-company-in-vancouver',
  '/locations/ui-ux-design-company-in-edmonton',
  '/locations/ui-ux-design-company-in-calgary',
  '/locations/ui-ux-design-company-in-toronto',
  '/locations/ui-ux-design-company-in-vancouver',
  '/locations/saas-development-company-in-edmonton',
  '/locations/saas-development-company-in-calgary',
  '/locations/saas-development-company-in-toronto',
  '/locations/saas-development-company-in-vancouver',
  // Digital marketing agency city pages
  '/locations/digital-marketing-agency-in-edmonton',
  '/locations/digital-marketing-agency-in-calgary',
  '/locations/digital-marketing-agency-in-toronto',
  '/locations/digital-marketing-agency-in-vancouver',
];

const ROUTES = [...SERVICE_ROUTES, ...LOCATION_ROUTES];

function parseBaseUrl(argv: string[]): string {
  const flag = argv.find(arg => arg === '--base-url' || arg.startsWith('--base-url='));
  if (!flag) return DEFAULT_BASE_URL;

  const value = flag.includes('=')
    ? flag.slice(flag.indexOf('=') + 1)
    : argv[argv.indexOf(flag) + 1];

  if (!value) {
    throw new Error('--base-url requires a value');
  }

  return value.replace(/\/+$/, '');
}

interface WarmResult {
  path: string;
  status: number | null;
  ok: boolean;
  error?: string;
}

async function warmRoute(baseUrl: string, path: string): Promise<WarmResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(`${baseUrl}${path}`, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'mapletechlabs-seo-warmup/1.0' },
    });
    // Drain the body so the response is fully generated and cached.
    await res.arrayBuffer();
    return { path, status: res.status, ok: res.status >= 200 && res.status < 300 };
  } catch (err) {
    const aborted = controller.signal.aborted;
    return {
      path,
      status: null,
      ok: false,
      error: aborted ? `timeout after ${REQUEST_TIMEOUT_MS}ms` : (err as Error).message,
    };
  } finally {
    clearTimeout(timer);
  }
}

async function runWithConcurrency(
  baseUrl: string,
  routes: string[],
  concurrency: number,
): Promise<WarmResult[]> {
  const results: WarmResult[] = [];
  let next = 0;

  async function worker(): Promise<void> {
    while (next < routes.length) {
      const path = routes[next++];
      const result = await warmRoute(baseUrl, path);
      results.push(result);
      const label = result.status === null ? 'ERR' : String(result.status);
      const detail = result.error ? ` (${result.error})` : '';
      console.log(`${label} ${path}${detail}`);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, routes.length) }, () => worker()),
  );

  return results;
}

async function main(): Promise<void> {
  const baseUrl = parseBaseUrl(process.argv.slice(2));
  console.log(`Warming ${ROUTES.length} routes at ${baseUrl} (concurrency ${MAX_CONCURRENCY})`);

  const results = await runWithConcurrency(baseUrl, ROUTES, MAX_CONCURRENCY);
  const failures = results.filter(r => !r.ok);

  console.log(
    `\nDone: ${results.length - failures.length}/${results.length} OK, ${failures.length} failed`,
  );

  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(
        `FAIL ${failure.path} -> ${failure.status ?? 'no response'}${failure.error ? ` (${failure.error})` : ''}`,
      );
    }
    process.exitCode = 1;
  }
}

main().catch(err => {
  console.error(err instanceof Error ? err.message : err);
  process.exitCode = 1;
});
