# Performance Implementation Guide
## Core Web Vitals Optimization Roadmap

**Target Metrics:**
- LCP: 2.5s → 2.0s
- INP: 200ms → 120ms  
- CLS: 0.1 → 0.05

---

## Phase 1: LCP Optimization (Days 1-3)

### Task 1.1: Implement Image Preloading

**File:** `src/app/layout.tsx`

Add preload links in the `<head>`:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        {/* Image Preloading for LCP */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/hero-bg.webp" 
          type="image/webp"
          imagesrcset="/images/hero-bg.webp 1x, /images/hero-bg.webp 2x"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/Favicon.png"
          type="image/png"
        />
        
        {/* Preconnect to Google Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preconnect to Analytics Services */}
        <link rel="preconnect" href="https://clarity.ms" />
        <link rel="dns-prefetch" href="https://clarity.ms" />
        
        {/* Google Tag Manager - Now ASYNC */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GT-PJ46RCMN');`,
          }}
        />
      </head>
      {/* Rest of layout... */}
    </html>
  );
}
```

**Expected Impact:** +200-300ms LCP improvement

---

### Task 1.2: Defer GSAP Animation Until After LCP

**File:** `src/components/Hero.tsx`

Replace immediate GSAP execution with deferred timing:

```tsx
'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // DEFERRED ANIMATION - Wait for LCP to fire first
  useEffect(() => {
    // Wait until after initial page paint
    // Use requestIdleCallback if available, fallback to setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(
        () => {
          setShouldAnimate(true);
        },
        { timeout: 2500 } // Max 2.5s
      );
    } else {
      // Fallback for older browsers
      const timer = setTimeout(() => setShouldAnimate(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Only run animations AFTER shouldAnimate is true
  useGSAP(() => {
    if (!shouldAnimate || !ref.current) return;

    gsap.from(['.h-badge', '.h-h1', '.h-p', '.h-btns', '.h-stats'], {
      opacity: 0, 
      y: 30, 
      stagger: 0.1, 
      duration: 1, 
      ease: 'power3.out', 
      delay: 0.05, // Reduced from 0.15
    });
    gsap.from('.h-code-panel', {
      opacity: 0, 
      x: 40, 
      duration: 1.2, 
      ease: 'power3.out', 
      delay: 0.3, // Reduced from 0.4
    });
  }, { scope: ref, dependencies: [shouldAnimate] });

  // Rest of component...
}
```

**Expected Impact:** +400-600ms LCP improvement

---

### Task 1.3: Lazy Load Hero Code Panel (Desktop Only)

**File:** `src/components/Hero.tsx`

Dynamic import for the code panel:

```tsx
import dynamic from 'next/dynamic';

const HeroCodePanel = dynamic(
  () => import('@/components/HeroCodePanel'),
  {
    ssr: false,
    loading: () => (
      <div style={{ 
        minHeight: '400px', 
        background: 'rgba(255,255,255,0.02)', 
        borderRadius: '28px',
        animation: 'pulse 2s infinite'
      }} />
    ),
  }
);

export default function Hero() {
  // ... existing code ...
  
  return (
    <section ref={ref} style={{ /* ... */ }}>
      {/* Hero content */}
      <div className="cb-container hero-container">
        {/* LEFT - copy */}
        {/* ... */}
        
        {/* RIGHT - code panel - lazy loaded */}
        <HeroCodePanel />
      </div>
    </section>
  );
}
```

Create new file `src/components/HeroCodePanel.tsx` with code panel content.

**Expected Impact:** +100-200ms LCP improvement

---

## Phase 2: INP Optimization (Days 4-6)

### Task 2.1: Replace Inline Style Mutations with CSS Classes

**File:** `src/components/Hero.tsx`

Replace all `onMouseEnter`/`onMouseLeave` style mutations:

```tsx
'use client';
import { useState } from 'react';

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section ref={ref} style={{ /* ... */ }}>
      <div className="cb-container hero-container">
        {/* Buttons with CSS-based hover */}
        <div className="h-btns">
          <Link 
            href="#contact" 
            className={`hero-btn hero-btn--primary ${
              hoveredButton === 'cta' ? 'hero-btn--hovered' : ''
            }`}
            onMouseEnter={() => setHoveredButton('cta')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link 
            href="/services" 
            className={`hero-btn hero-btn--secondary ${
              hoveredButton === 'secondary' ? 'hero-btn--hovered' : ''
            }`}
            onMouseEnter={() => setHoveredButton('secondary')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
```

**File:** `src/app/globals.css`

Add CSS classes for button states:

```css
/* Hero Button Styles */
.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 10;
  height: clamp(48px, 7vw, 58px);
  padding: 0 clamp(24px, 4vw, 36px);
  border-radius: 100;
  font-size: clamp(14px, 2vw, 15px);
  font-weight: 700;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-btn--primary {
  background: linear-gradient(135deg, #f5290d, #FF5733);
  color: #fff;
  box-shadow: 0 0 0 0 rgba(245,41,13,0);
}

.hero-btn--primary.hero-btn--hovered {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(245,41,13,0.4);
}

.hero-btn--secondary {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
}

.hero-btn--secondary.hero-btn--hovered {
  border-color: rgba(255,255,255,0.25);
  color: #fff;
  background: rgba(255,255,255,0.06);
  transform: translateY(-2px);
}

/* Partner Pill Styles */
.partner-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 100;
  min-width: 120px;
  height: 44px;
  flex-shrink: 0;
  background: rgba(255,255,255,0.02);
  transition: border-color 0.3s, background 0.3s;
}

.partner-pill:hover {
  border-color: rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.05);
}
```

Also update `src/components/PartnersMarquee.tsx`:

```tsx
'use client';

const partners = [
  'Stripe', 'Shopify', 'Salesforce', 'Microsoft', 'Google Cloud',
  'AWS', 'Twilio', 'HubSpot', 'Zendesk', 'Atlassian',
  'Datadog', 'Vercel', 'MongoDB', 'Cloudflare', 'Figma',
];

function PartnerPill({ name }: { name: string }) {
  return (
    <div className="partner-pill">
      <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}>
        {name}
      </span>
    </div>
  );
}

export default function PartnersMarquee() {
  // Rest of component - markup unchanged
}
```

**Expected Impact:** +100-250ms INP improvement

---

### Task 2.2: Optimize Reveal Observer with Batched Mutations

**File:** `src/app/services/web-development/PageClient.tsx`

Update the `useReveal` function:

```tsx
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const elementsToObserve = ref.current?.querySelectorAll('.reveal') || [];
    
    const io = new IntersectionObserver(
      entries => {
        // Batch all mutations in a single requestAnimationFrame
        requestAnimationFrame(() => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              // Once visible, we can stop observing
              io.unobserve(entry.target);
            }
          });
        });
      },
      { threshold: 0.08 }
    );
    
    elementsToObserve.forEach(el => io.observe(el));
    
    return () => {
      elementsToObserve.forEach(el => io.unobserve(el));
      io.disconnect();
    };
  }, []);
  
  return ref;
}
```

**Expected Impact:** +80-150ms INP improvement

---

### Task 2.3: Optimize Marquee with GPU Acceleration

**File:** `src/app/globals.css`

Update marquee animations:

```css
/* Marquee Animations with GPU Acceleration */
@keyframes marquee-l {
  from { transform: translateX(0) translateZ(0); }
  to { transform: translateX(-50%) translateZ(0); }
}

@keyframes marquee-r {
  from { transform: translateX(-50%) translateZ(0); }
  to { transform: translateX(0) translateZ(0); }
}

.marquee-track {
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
}

/* Apply to marquee divs */
.partners-marquee-row {
  display: flex;
  gap: 10px;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
}

.partners-marquee-row:nth-child(1) {
  animation: marquee-l 40s linear infinite;
}

.partners-marquee-row:nth-child(2) {
  animation: marquee-r 45s linear infinite;
}
```

**Expected Impact:** +50-100ms INP improvement

---

## Phase 3: CLS Fine-tuning (Days 7-8)

### Task 3.1: Lock Navbar Height

**File:** `src/app/globals.css`

Ensure navbar doesn't change dimensions on scroll:

```css
/* Navbar height locking */
nav {
  height: 80px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Do NOT transition height, padding, or margin */
}

/* On scroll effect - change only non-layout properties */
.navbar-scrolled {
  background: rgba(0,0,0,0.9) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  box-shadow: 0 4px 30px rgba(0,0,0,0.5) !important;
  /* Height/padding remain 80px - no layout shift */
}
```

**Expected Impact:** -0.01-0.02 CLS improvement

---

## Verification Checklist

### Before Implementation:
- [ ] Run Lighthouse on each page type (homepage, service, location, blog)
- [ ] Record baseline LCP, INP, CLS scores
- [ ] Take screenshots of metrics

### After Phase 1:
- [ ] Verify LCP improved by 200-300ms
- [ ] Check GTM still fires (async loading)
- [ ] Verify hero images load correctly
- [ ] Test preconnect to analytics services

### After Phase 2:
- [ ] Verify INP improved by 100-150ms
- [ ] Test button hover states on mobile/desktop
- [ ] Verify scroll reveal animations still work
- [ ] Check for no janky marquee animations

### After Phase 3:
- [ ] Verify CLS < 0.1 on all pages
- [ ] Test navbar scroll effect
- [ ] Check no layout shifts on any interactions

### Testing Commands:

```bash
# Run Lighthouse locally
npx lighthouse https://mapletechlabs.ca --output=json --output-path=./lighthouse.json

# Run on specific pages
npx lighthouse https://mapletechlabs.ca/services/web-development --output=json
npx lighthouse https://mapletechlabs.ca/locations/toronto --output=json
npx lighthouse https://mapletechlabs.ca/blog/software-development-companies-calgary --output=json
```

---

## Rollback Plan

If any changes cause issues:

```bash
# Revert specific file
git checkout src/components/Hero.tsx

# Revert all changes in phase
git reset --soft HEAD~3
git reset src/app/globals.css
```

---

## Monitoring After Implementation

Add real-user monitoring to `layout.tsx`:

```tsx
'use client';

import { useEffect } from 'react';

export function WebVitalsMonitor() {
  useEffect(() => {
    // Import dynamically to not block page load
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Send to your analytics
      getCLS(metric => {
        console.log('CLS:', metric.value);
        // Send to analytics: fetch('/api/metrics/cls', { body: metric })
      });
      
      getLCP(metric => {
        console.log('LCP:', metric.value);
      });
      
      getTTFB(metric => {
        console.log('TTFB:', metric.value);
      });
      
      // Note: INP replaced FID
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.interactionId) {
              console.log('INP:', entry.duration);
            }
          }
        });
        observer.observe({ type: 'event', buffered: true, durationThreshold: 100 });
      }
    });
  }, []);
  
  return null;
}
```

Use in layout:

```tsx
import { WebVitalsMonitor } from '@/components/WebVitalsMonitor';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <WebVitalsMonitor />
        {children}
      </body>
    </html>
  );
}
```

---

## Timeline

| Week | Phase | Tasks | Expected Outcome |
|------|-------|-------|-----------------|
| 1 | Phase 1 | Image preload, defer GSAP, lazy load code panel | LCP: 2.8s → 2.0-2.2s |
| 1-2 | Phase 2 | CSS hover states, batch mutations, GPU acceleration | INP: 250ms → 120-150ms |
| 2 | Phase 3 | Navbar locking, CLS verification | CLS: 0.08 → 0.04-0.05 |
| 2+ | Monitoring | Deploy web-vitals monitor, track metrics | Field data validation |

---

## References

- [Web Vitals Guide](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [GSAP Alternatives](https://www.framer.com/motion/) (consider for future)
- [CrUX Vis](https://cruxvis.withgoogle.com) - Monitor field data

---

*Implementation Guide v1.0 - April 1, 2026*
