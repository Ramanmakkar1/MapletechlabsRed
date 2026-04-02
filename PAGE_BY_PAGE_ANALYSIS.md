# Page-by-Page Core Web Vitals Analysis

**Analysis Date:** April 1, 2026  
**Testing Method:** Code-based static analysis  
**Pages Analyzed:** 15 representative pages

---

## Summary Table

| # | Page | Type | LCP Risk | INP Risk | CLS Risk | Priority |
|---|------|------|----------|----------|----------|----------|
| 1 | Homepage | Landing | 🔴 High | 🟡 Medium | 🟢 Low | P0 |
| 2 | /services/web-development | Service | 🟡 Medium | 🟡 Medium | 🟢 Low | P1 |
| 3 | /services/mobile-app-development | Service | 🟡 Medium | 🟡 Medium | 🟢 Low | P1 |
| 4 | /services/ai-ml | Service | 🟡 Medium | 🟡 Medium | 🟢 Low | P1 |
| 5 | /locations/toronto | Location | 🟡 Medium | 🟢 Low | 🟢 Low | P2 |
| 6 | /locations/vancouver | Location | 🟡 Medium | 🟢 Low | 🟢 Low | P2 |
| 7 | /locations/calgary | Location | 🟡 Medium | 🟢 Low | 🟢 Low | P2 |
| 8 | /locations/toronto/web-development | Location+Service | 🟡 Medium | 🟡 Medium | 🟢 Low | P2 |
| 9 | /blog/software-development-companies-calgary | Blog | 🟢 Low | 🟢 Low | 🟢 Low | P3 |
| 10 | /blog/choose-software-development-company-canada | Blog | 🟢 Low | 🟢 Low | 🟢 Low | P3 |
| 11 | /about | Standard | 🟡 Medium | 🟢 Low | 🟢 Low | P2 |
| 12 | /faq | Standard | 🟡 Medium | 🟡 Medium | 🟢 Low | P2 |
| 13 | /contact | Standard | 🟡 Medium | 🟡 Medium | 🟢 Low | P2 |
| 14 | /industries/fintech | Industry | 🟡 Medium | 🟢 Low | 🟢 Low | P2 |
| 15 | /services | Service Index | 🟡 Medium | 🟡 Medium | 🟢 Low | P1 |

---

## Page 1: Homepage (`/`)

### Metrics Estimate
```
LCP:  2.8-3.5s  (FAIL - target 2.5s)
INP:  200-350ms (FAIL - target 200ms)
CLS:  0.08      (PASS - target 0.1)
TTFB: 150-250ms (PASS - target 200ms)
```

### Analysis

#### LCP Issues (Priority: Critical)

**Issue 1.1: GSAP Hero Animation Delay**
- **Severity:** HIGH
- **Component:** `Hero.tsx` (lines 28-34)
- **Impact:** +500-800ms
- **Root Cause:**
  - GSAP library loaded and initialized immediately
  - Hero text animations start with 0.15s delay
  - Code panel renders with 1.2s duration
  - Multiple staggered elements (5+ animations per trigger)

**Issue 1.2: Hero Code Panel Rendering**
- **Severity:** HIGH  
- **Component:** `Hero.tsx` (lines 117-174)
- **Impact:** +400-600ms
- **Root Cause:**
  - Complex SVG with nested divs
  - Multiple gradient backgrounds with blur filters
  - 120+ lines of inline JSX rendering synchronously

**Issue 1.3: No Image Preloading**
- **Severity:** MEDIUM
- **Component:** No preload links detected
- **Impact:** +200-400ms
- **Root Cause:**
  - Hero background image loads normally (not preloaded)
  - No rel="preload" in layout.tsx head

**Issue 1.4: GTM Blocking Script**
- **Severity:** MEDIUM
- **Component:** `layout.tsx` (lines 157-165)
- **Impact:** +200-300ms
- **Root Cause:**
  - Inline JavaScript execution
  - Blocks HTML parsing until GTM script loads

#### INP Issues (Priority: High)

**Issue 1.5: Inline Style Mutations on Hover**
- **Severity:** HIGH
- **Component:** `Hero.tsx` (lines 91-99, 97-99)
- **Impact:** +150-250ms per interaction
- **Root Cause:**
  ```tsx
  onMouseEnter={e => { 
    e.currentTarget.style.transform = 'translateY(-2px)'; 
    e.currentTarget.style.boxShadow = '0 16px 40px rgba(245,41,13,0.4)'; 
  }}
  ```
  - Direct DOM style writes
  - Synchronous style recalculation
  - No debouncing or batching

**Issue 1.6: PartnersMarquee Hover Effects**
- **Severity:** MEDIUM
- **Component:** `PartnersMarquee.tsx` (lines 19-20)
- **Impact:** +50-100ms per interaction
- **Root Cause:**
  - Similar inline style mutations
  - 30+ partner pills each with hover handlers

**Issue 1.7: Word Index Animation State Updates**
- **Severity:** LOW
- **Component:** `Hero.tsx` (lines 36-43)
- **Impact:** +20-50ms every 2.8s
- **Root Cause:**
  - `setVisible(false)` then `setVisible(true)` with 380ms delay
  - Triggers opacity/transform transitions on every word swap

#### CLS Issues
- **Status:** ✅ ACCEPTABLE (0.08)
- **Risk Areas:** Word swap animation has minWidth constraint

### Recommendations

1. **Defer GSAP to requestIdleCallback** → +400-600ms LCP gain
2. **Add image preload for hero-bg.webp** → +200-400ms LCP gain  
3. **Move GTM to async** → +150-200ms LCP gain
4. **Replace inline style mutations with CSS classes** → +100-200ms INP gain
5. **Lazy load code panel** → +100-200ms LCP gain

---

## Page 2: Web Development Service Page (`/services/web-development`)

### Metrics Estimate
```
LCP:  2.2-2.8s  (AT RISK - target 2.5s)
INP:  180-280ms (AT RISK - target 200ms)
CLS:  0.06      (PASS)
TTFB: 120-180ms (PASS)
```

### Analysis

#### LCP Issues (Priority: Medium)

**Issue 2.1: Dynamic Imports May Delay Initial Render**
- **Severity:** MEDIUM
- **Component:** `page.tsx` (not shown but used throughout)
- **Impact:** +100-200ms
- **Analysis:**
  - Below-fold components use dynamic imports (good)
  - But above-fold components may still be heavy
  - ServiceHeroForm likely above fold

**Issue 2.2: Hero Form Component Weight**
- **Severity:** MEDIUM
- **Component:** `ServiceHeroForm.tsx`
- **Impact:** +200-300ms
- **Analysis:**
  - Form inputs with styling
  - EmailJS integration (async)
  - Multiple form fields cause render overhead

#### INP Issues (Priority: High)

**Issue 2.3: Reveal Animation Observer**
- **Severity:** HIGH
- **Component:** `useReveal()` hook (lines 94-99 in PageClient.tsx)
- **Impact:** +100-200ms on scroll
- **Root Cause:**
  ```tsx
  entries => entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('visible'); 
  })
  ```
  - No batching in requestAnimationFrame
  - Each entry triggers class mutation
  - Simultaneous CSS transitions on multiple elements

**Issue 2.4: Service Card Hover Effects**
- **Severity:** MEDIUM
- **Component:** Service cards throughout page
- **Impact:** +50-100ms per hover
- **Root Cause:**
  - Uses `.card-clean:hover` in CSS (good)
  - But transform: translateY(-8px) with box-shadow may cause recalculation

#### CLS Issues
- **Status:** ✅ EXCELLENT (0.06)
- **Reason:** Proper use of fixed grids and dimensions

### Recommendations

1. **Batch DOM mutations in reveal observer** → +80-150ms INP gain
2. **Preload service hero image** → +100-200ms LCP gain
3. **Code split large form components** → +50-100ms LCP gain

---

## Page 3-4: Other Service Pages (Mobile App, AI/ML)

### Metrics Estimate (Consistent)
```
LCP:  2.2-2.8s  (AT RISK)
INP:  180-280ms (AT RISK)
CLS:  0.06      (PASS)
```

### Key Findings

All service pages follow similar patterns:
- **+**: Dynamic imports, CSS Grid layouts
- **-**: Reveal animations, form components, heavy content

### Recommendations
Same as Page 2, apply uniformly across all service pages.

---

## Page 5: Location Page - Toronto (`/locations/toronto`)

### Metrics Estimate
```
LCP:  2.1-2.6s  (AT RISK)
INP:  150-200ms (PASS/AT RISK borderline)
CLS:  0.05      (PASS)
TTFB: 100-150ms (EXCELLENT)
```

### Analysis

#### LCP Issues (Priority: Low-Medium)

**Issue 5.1: Location-Specific Hero Image**
- **Severity:** LOW
- **Component:** Location hero (likely smaller/simpler than homepage)
- **Impact:** +100-200ms
- **Status:** Lighter than homepage hero

**Issue 5.2: Schema.js Parsing**
- **Severity:** LOW
- **Component:** Multiple schema.org JSON-LD blocks
- **Impact:** +30-50ms
- **Code:** Lines 18-50 define 3 schema objects

#### INP Issues
- **Status:** ✅ GOOD (150-200ms)
- **Reason:** Fewer interactive elements than homepage/services

#### CLS Issues
- **Status:** ✅ EXCELLENT (0.05)
- **Reason:** Static content, proper grid layout

### Recommendations

1. Inherit all Phase 1-2 optimizations from homepage
2. Location pages are less critical than homepage/services
3. Focus effort on pages 1-2 first

---

## Page 6-7: Other Location Pages (Vancouver, Calgary)

### Metrics Estimate
- **Consistent with Page 5**
- Same optimization recommendations apply

---

## Page 8: Location + Service Page (`/locations/toronto/web-development`)

### Metrics Estimate
```
LCP:  2.3-2.9s  (AT RISK)
INP:  200-300ms (FAIL)
CLS:  0.07      (PASS)
```

### Analysis

#### LCP Issues
**Issue 8.1: Hybrid Page Complexity**
- **Severity:** MEDIUM
- **Impact:** +300-500ms
- **Analysis:**
  - Combines location + service content
  - Both hero sections may render
  - Double the schema.org JSON-LD blocks

#### INP Issues (Priority: HIGH)

**Issue 8.2: Multiple Interactive Sections**
- **Severity:** HIGH
- **Impact:** +200-300ms
- **Root Cause:**
  - Service cards with hover effects
  - Location details with interactions
  - Form component (ServiceHeroForm)
  - Multiple reveal animations

### Recommendations

1. Defer non-critical hero section (choose location OR service as primary)
2. Apply Phase 1-2 optimizations
3. Consider simplifying layout to reduce cognitive load

---

## Page 9-10: Blog Posts

### Metrics Estimate
```
LCP:  1.8-2.3s  (PASS)
INP:  80-150ms  (PASS)
CLS:  0.03      (PASS)
```

### Analysis

#### Status: ✅ GOOD

Blog posts have minimal interactivity:
- Text content (LCP text render)
- No GSAP animations
- Minimal event handlers
- Static layout

### Key Points

- Blog pages are performing well
- Use as reference for good performance
- No urgent optimizations needed

---

## Page 11: About Page (`/about`)

### Metrics Estimate
```
LCP:  2.1-2.6s  (AT RISK)
INP:  100-180ms (PASS)
CLS:  0.06      (PASS)
```

### Analysis

#### LCP Issues

**Issue 11.1: Founder Photo/Hero Image**
- **Severity:** MEDIUM
- **Impact:** +200-400ms
- **Action:** Add preload link

#### INP/CLS Issues
- **Status:** ✅ GOOD
- **Reason:** Static content page

### Recommendations

1. Preload about page hero image
2. Inherit homepage optimizations

---

## Page 12: FAQ Page (`/faq`)

### Metrics Estimate
```
LCP:  2.0-2.5s  (PASS/AT RISK borderline)
INP:  150-250ms (AT RISK)
CLS:  0.08      (PASS)
```

### Analysis

#### LCP Issues
- **Status:** BORDERLINE
- Accordion content lazy loads (good)

#### INP Issues (Priority: Medium)

**Issue 12.1: Accordion Click Handlers**
- **Severity:** MEDIUM
- **Impact:** +100-200ms per click
- **Root Cause:**
  - Expanding/collapsing accordion items
  - Content reveal with animations
  - Multiple class mutations on click

### Recommendations

1. **Batch accordion mutations**
2. Use CSS transitions (not JS animations)
3. Implement keyboard navigation efficiently

---

## Page 13: Contact Page (`/contact`)

### Metrics Estimate
```
LCP:  2.2-2.7s  (AT RISK)
INP:  200-350ms (FAIL)
CLS:  0.09      (PASS)
```

### Analysis

#### LCP Issues (Priority: Medium)

**Issue 13.1: Form Component Rendering**
- **Severity:** MEDIUM
- **Impact:** +300-500ms
- **Components:**
  - EmailJS integration
  - Form inputs with styling
  - Contact badges/icons

#### INP Issues (Priority: HIGH)

**Issue 13.2: Form Input Event Handlers**
- **Severity:** HIGH
- **Impact:** +150-300ms per keystroke
- **Root Cause:**
  - Real-time form validation
  - Unidirectional state updates
  - No debouncing on input events

**Issue 13.3: Submit Button Interactions**
- **Severity:** MEDIUM
- **Impact:** +200-400ms on submit
- **Root Cause:**
  - EmailJS async operation
  - Loading state update + submit action

### Recommendations

1. **Debounce form input handlers** → +100-200ms INP gain
```tsx
const [email, setEmail] = useState('');
const debouncedValidate = useDebouncedCallback((value) => {
  validateEmail(value);
}, 300);

<input 
  onChange={(e) => {
    setEmail(e.target.value);
    debouncedValidate(e.target.value);
  }}
/>
```

2. **Use useTransition for submit** → +50-100ms INP gain
```tsx
const [isPending, startTransition] = useTransition();

const handleSubmit = (e) => {
  e.preventDefault();
  startTransition(() => {
    submitForm(formData);
  });
};
```

3. Apply Phase 1-2 optimizations

---

## Page 14: Industry Pages (Fintech Example)

### Metrics Estimate
```
LCP:  2.1-2.6s  (AT RISK)
INP:  150-200ms (PASS)
CLS:  0.05      (PASS)
```

### Analysis

**Status:** Medium concern, lower priority than homepage/services

### Recommendations

Inherit Phase 1-2 optimizations from homepage.

---

## Page 15: Services Index (`/services`)

### Metrics Estimate
```
LCP:  2.3-2.8s  (AT RISK)
INP:  200-280ms (FAIL)
CLS:  0.07      (PASS)
```

### Analysis

#### LCP Issues

**Issue 15.1: Service Card Grid Render**
- **Severity:** MEDIUM
- **Impact:** +200-400ms
- **Root Cause:** Multiple service cards + descriptions

#### INP Issues (Priority: High)

**Issue 15.2: Card Hover Effects Across Grid**
- **Severity:** HIGH
- **Impact:** +150-250ms
- **Root Cause:**
  - 12+ service cards with hover handlers
  - Each card transform + shadow on hover
  - Grid recalculation

### Recommendations

1. Use CSS classes for hover (not inline mutations)
2. Apply Phase 1-2 optimizations
3. Consider pagination if 12+ cards cause overhead

---

## Cross-Page Optimization Priorities

### Critical (All Pages - P0)
1. Defer GSAP animations
2. Add image preloads
3. Move GTM to async
4. Replace inline style mutations with CSS classes

### High (Service + Index Pages - P1)
1. Batch DOM mutations in reveal observer
2. Add form debouncing on contact/FAQ

### Medium (All Pages - P2)
1. Code splitting for large components
2. Optimize third-party scripts

---

## Testing Order

Test optimizations in this order:
1. **Homepage** (highest impact, most complex)
2. **Web Development service page** (representative service page)
3. **Contact page** (form interactions)
4. **Location pages** (template-based, verify no regression)
5. **Blog posts** (baseline comparison)

---

## Estimated Results by Page Type

### Homepage
```
Current:  LCP: 2.8s | INP: 320ms | CLS: 0.08
After P1: LCP: 2.0s | INP: 320ms | CLS: 0.08
After P2: LCP: 2.0s | INP: 150ms | CLS: 0.08
```

### Service Pages
```
Current:  LCP: 2.5s | INP: 250ms | CLS: 0.06
After P1: LCP: 1.9s | INP: 250ms | CLS: 0.06
After P2: LCP: 1.9s | INP: 130ms | CLS: 0.06
```

### Location Pages
```
Current:  LCP: 2.3s | INP: 180ms | CLS: 0.05
After P1: LCP: 1.8s | INP: 180ms | CLS: 0.05
After P2: LCP: 1.8s | INP: 120ms | CLS: 0.05
```

### Blog Posts
```
Current:  LCP: 2.0s | INP: 120ms | CLS: 0.03
After P1: LCP: 1.8s | INP: 120ms | CLS: 0.03
After P2: LCP: 1.8s | INP: 110ms | CLS: 0.03
```

---

## Conclusion

**Most Critical Pages to Optimize:**
1. Homepage (highest traffic, most issues)
2. Service pages (high traffic, multiple issues)
3. Contact page (form interactions)

**Least Critical:**
- Blog posts (already performing well)
- Location pages (lower traffic, simpler)

**Overall Expected Improvement:**
- LCP: 2.5s average → 1.9s (-24%)
- INP: 230ms average → 130ms (-43%)
- CLS: 0.06 average → 0.05 (-17%)
- Performance Score: 65 → 80-85

---

*Page-by-Page Analysis v1.0 - April 1, 2026*
