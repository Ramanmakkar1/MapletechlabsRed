// Shared cache values for the repository-managed SEO templates. Both
// next.config.ts headers() and src/middleware.ts import these so the browser
// and CDN directives can never drift apart.
export const STATIC_TEMPLATE_CACHE =
  'public, max-age=0, must-revalidate, s-maxage=31536000, stale-while-revalidate=604800, stale-if-error=86400';

// CDN-only directive for the same templates. Browsers keep the Cache-Control
// above (revalidate every request); the edge/CDN holds the page for a year and
// serves stale for a week while it revalidates.
export const STATIC_TEMPLATE_CDN_CACHE =
  'public, max-age=31536000, stale-while-revalidate=604800, stale-if-error=86400';

// Service and location pages stay fresh at the CDN for a year and can serve
// stale content for the same window while the static template revalidates.
export const STATIC_SERVICE_LOCATION_CACHE =
  'public, max-age=0, must-revalidate, s-maxage=31536000, stale-while-revalidate=31536000, stale-if-error=86400';

export const STATIC_SERVICE_LOCATION_CDN_CACHE =
  'public, max-age=31536000, stale-while-revalidate=31536000, stale-if-error=86400';
