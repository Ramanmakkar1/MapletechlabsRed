# Hreflang Tags Implementation - Testing Guide

## Overview
Hreflang tags have been added to mapletechlabs.ca to support bilingual content (English and French). The implementation uses a reusable client component that dynamically generates the correct language alternates based on the current URL path.

## Implementation Details

### Component Location
- **File**: `/src/components/HrefLangTags.tsx`
- **Type**: Client component ('use client')
- **Hook**: Uses `usePathname()` from Next.js to get the current path

### Supported Language/Region Combinations
- `hreflang="en-ca"` → English (Canada)
- `hreflang="fr-ca"` → French (Canada)
- `hreflang="x-default"` → Default language

### Integration
The component is imported in `/src/app/layout.tsx` and rendered in the `<head>` section, ensuring it applies to all pages across the site.

## Example URL Mappings

### English Pages
When visiting any English page (without /fr prefix), hreflang tags will be:
```html
<link rel="alternate" hreflang="en-ca" href="https://mapletechlabs.ca/services/web-development" />
<link rel="alternate" hreflang="fr-ca" href="https://mapletechlabs.ca/fr/services/web-development" />
<link rel="alternate" hreflang="x-default" href="https://mapletechlabs.ca/services/web-development" />
```

### French Pages
When visiting `/fr/services/web-development`:
```html
<link rel="alternate" hreflang="en-ca" href="https://mapletechlabs.ca/services/web-development" />
<link rel="alternate" hreflang="fr-ca" href="https://mapletechlabs.ca/fr/services/web-development" />
<link rel="alternate" hreflang="x-default" href="https://mapletechlabs.ca/services/web-development" />
```

### Homepage
When visiting the homepage `/`:
```html
<link rel="alternate" hreflang="en-ca" href="https://mapletechlabs.ca/" />
<link rel="alternate" hreflang="fr-ca" href="https://mapletechlabs.ca/fr/" />
<link rel="alternate" hreflang="x-default" href="https://mapletechlabs.ca/" />
```

## How to Test

### 1. Local Development
```bash
npm run dev
```

### 2. Check Homepage
1. Navigate to `http://localhost:3000`
2. Open DevTools (F12) → Sources → Elements
3. Look in the `<head>` section for the hreflang tags
4. Verify you see three `<link rel="alternate">` tags with correct hrefs

### 3. Check Service Pages
1. Navigate to `http://localhost:3000/services/web-development`
2. Check the `<head>` for hreflang tags
3. Verify the fr-ca URL contains `/fr/services/web-development`

### 4. Check Location Pages
1. Navigate to `http://localhost:3000/locations/edmonton/web-development`
2. Verify hreflang tags show:
   - en-ca: `https://mapletechlabs.ca/locations/edmonton/web-development`
   - fr-ca: `https://mapletechlabs.ca/fr/locations/edmonton/web-development`

### 5. Production Testing
Once deployed, you can use SEO tools to verify hreflang implementation:
- Google Search Console (Coverage > Hreflang)
- Screaming Frog SEO Spider (filter by hreflang)
- SEMrush or Ahrefs hreflang audits

## Bilingual Routing Setup

To fully support bilingual content, you'll need to:

1. **Create French routes** (if not already present):
   ```
   src/app/fr/layout.tsx (with lang="fr-CA")
   src/app/fr/page.tsx
   src/app/fr/services/[service]/page.tsx
   src/app/fr/locations/[city]/[service]/page.tsx
   ```

2. **Update locale detection** (optional middleware):
   - Detect user's preferred language
   - Redirect to appropriate language version

3. **Translate content** for all French pages

## Code Explanation

The component works as follows:

```typescript
const pathname = usePathname(); // Get current path (e.g., /fr/services or /services)

// Strip /fr prefix to get canonical path
const canonicalPath = pathname.startsWith('/fr/')
  ? pathname.slice(3)
  : pathname === '/fr'
    ? '/'
    : pathname;

// Build URLs
const enUrl = `https://mapletechlabs.ca${canonicalPath}`;
const frUrl = `https://mapletechlabs.ca/fr${canonicalPath}`;

// Always output both language links (Google can determine which is canonical)
```

## SEO Benefits

1. **Improved Content Discovery**: Search engines know about both language versions
2. **Proper Indexation**: Google indexes the correct language version for each region
3. **Reduced Duplicate Content Issues**: Hreflang tells Google these are intentional alternates
4. **Better User Experience**: Users see content in their preferred language
5. **International SEO**: Helps with ranking in French and English Canadian searches

## Notes

- The component uses `'use client'` because it needs the `usePathname()` hook which only works in client components
- Hreflang tags are placed in the `<head>` section of every page via the root layout
- The x-default hreflang points to the English version (primary language)
- No modifications to next.config.ts are required for this implementation
