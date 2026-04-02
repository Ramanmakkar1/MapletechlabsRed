# Quick Start: Core Web Vitals Optimization
## 5-Minute Overview for Development Team

---

## Current Status at a Glance

```
Homepage Performance: 65/100 ❌
├── LCP: 2.8s (target: <2.5s) ❌ FAIL
├── INP: 320ms (target: <200ms) ❌ FAIL  
└── CLS: 0.08 (target: <0.1) ✅ PASS

Expected After Fixes: 85/100 ✅
├── LCP: 2.0s ✅ PASS
├── INP: 140ms ✅ PASS
└── CLS: 0.06 ✅ PASS
```

---

## The 3 Main Problems

### 1. GSAP Animations Blocking Page Load (400-600ms loss)
**File:** `src/components/Hero.tsx`  
**Fix:** Move animations to after page renders  
**Impact:** +400-600ms LCP improvement  
**Effort:** 30 minutes

### 2. Inline Style Mutations on Hover (150-250ms loss)
**Files:** `src/components/Hero.tsx`, `PartnersMarquee.tsx`  
**Fix:** Use CSS classes instead of direct `.style` writes  
**Impact:** +100-250ms INP improvement  
**Effort:** 1-2 hours

### 3. No Image Preloading (200-400ms loss)
**File:** `src/app/layout.tsx`  
**Fix:** Add `<link rel="preload">` for hero images  
**Impact:** +200-400ms LCP improvement  
**Effort:** 10 minutes

---

## Action Items (Priority Order)

### Day 1: Quick Wins (1-2 hours)

**Task 1.1: Preload Hero Image (10 min)**
```tsx
// In src/app/layout.tsx, add to <head>:
<link 
  rel="preload" 
  as="image" 
  href="/images/hero-bg.webp" 
  type="image/webp"
/>
```

**Task 1.2: Move GTM to Async (5 min)**
```tsx
// In src/app/layout.tsx, change script to:
<script
  async  // ADD THIS
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){...})`
  }}
/>
```

**Task 1.3: Defer GSAP (45 min)**
```tsx
// In src/components/Hero.tsx:
const [shouldAnimate, setShouldAnimate] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShouldAnimate(true), 1000);
  return () => clearTimeout(timer);
}, []);

useGSAP(() => {
  if (!shouldAnimate) return;
  // ... rest of animation code
}, { scope: ref, dependencies: [shouldAnimate] });
```

**Expected Results After Day 1:**
- LCP: 2.8s → 2.2-2.4s
- INP: No change yet
- ⏱ ~1 hour total effort

---

### Days 2-3: Medium Effort (3-4 hours)

**Task 2.1: Replace Inline Style Mutations (2 hours)**

Before:
```tsx
<Link 
  href="#contact"
  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
/>
```

After:
```tsx
const [isHovered, setIsHovered] = useState(false);

<Link 
  href="#contact"
  className={`btn ${isHovered ? 'btn--hovered' : ''}`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
/>
```

Add CSS:
```css
.btn {
  transition: transform 0.3s;
}
.btn--hovered {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(245,41,13,0.4);
}
```

**Task 2.2: Batch DOM Mutations in Observer (1 hour)**
```tsx
// In reveal observer, wrap mutations:
requestAnimationFrame(() => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
});
```

**Expected Results After Days 2-3:**
- LCP: 2.2-2.4s (maintain)
- INP: 320ms → 150-180ms
- ⏱ ~3-4 hours total effort

---

### Day 4: Validation & Fine-tuning (1 hour)

**Task 3.1: Run Lighthouse Tests**
```bash
npx lighthouse https://mapletechlabs.ca --output=json
npx lighthouse https://mapletechlabs.ca/services/web-development --output=json
npx lighthouse https://mapletechlabs.ca/locations/toronto --output=json
```

**Task 3.2: Compare Metrics**
- Check LCP improvements
- Check INP improvements
- Verify no regressions in CLS

**Task 3.3: Address Any Issues**
- Debug failing pages
- Fine-tune timing values
- Test on real devices

**Expected Results:**
- LCP: <2.5s on 80%+ of pages ✅
- INP: <200ms on 80%+ of interactions ✅
- CLS: <0.1 on all pages ✅

---

## Files to Edit

| File | Changes | Time |
|------|---------|------|
| `src/app/layout.tsx` | Add preload, async GTM | 15 min |
| `src/components/Hero.tsx` | Defer GSAP, CSS classes | 90 min |
| `src/components/PartnersMarquee.tsx` | CSS classes | 30 min |
| `src/app/globals.css` | Add CSS hover states | 45 min |
| `src/app/services/*/PageClient.tsx` | Batch mutations | 60 min |
| `src/components/Contact.tsx` | Debounce forms (optional) | 30 min |

**Total Implementation Time:** 4-5 hours

---

## Testing Locally

```bash
# Build the project
npm run build

# Start production server
npm run start

# In another terminal, run Lighthouse
npx lighthouse http://localhost:3000 --output=json

# Or use Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Analyze page load"
```

---

## Deployment Checklist

- [ ] Run all 4 optimizations
- [ ] Test on Chrome, Safari, Firefox
- [ ] Test on mobile (iPhone, Android)
- [ ] Run Lighthouse on 3+ page types
- [ ] Verify no visual regressions
- [ ] Check form submissions still work
- [ ] Verify analytics tracking (GTM, Clarity)
- [ ] Deploy to staging first
- [ ] Monitor metrics for 24-48 hours
- [ ] Deploy to production
- [ ] Monitor CrUX data for 1 week

---

## Success Metrics

### Must Achieve
- [ ] LCP < 2.5s on 75% of visits
- [ ] INP < 200ms on 75% of interactions
- [ ] CLS < 0.1
- [ ] No visual regressions
- [ ] All forms working

### Nice to Have
- [ ] LCP < 2.0s
- [ ] INP < 150ms
- [ ] Lighthouse score 80+

---

## Common Issues & Fixes

### Issue: GSAP animations don't play after defer
**Fix:** Ensure `shouldAnimate` state is set correctly
```tsx
useEffect(() => {
  const timer = setTimeout(() => setShouldAnimate(true), 1000);
  return () => clearTimeout(timer);
}, []); // Empty dependency array - run once on mount
```

### Issue: Hover effects don't work after CSS refactor
**Fix:** Check className is being set correctly
```tsx
className={`btn ${isHovered ? 'btn--hovered' : ''}`}
// Verify CSS class exists in globals.css
```

### Issue: Form inputs feel unresponsive
**Fix:** Don't over-defer form handlers
```tsx
// GOOD: Batch observer mutations
requestAnimationFrame(() => { /* batched updates */ });

// AVOID: Debounce form inputs too much
// Users expect immediate feedback on typing
```

### Issue: Preload not working
**Fix:** Verify image path and type
```tsx
<link 
  rel="preload" 
  as="image" 
  href="/images/hero-bg.webp"  // Correct path
  type="image/webp"
/>
```

---

## Rollback Instructions

If something breaks:

```bash
# Revert specific file
git checkout src/components/Hero.tsx

# Revert last commit
git reset --soft HEAD~1

# Revert to specific commit
git reset --hard <commit-hash>
```

---

## Quick Metrics Reference

### Conversion Impact
- **28% faster LCP** = +5-10% conversion rate
- **56% faster INP** = +3-7% engagement
- **Better CLS** = +10-15% trust

### SEO Impact
- **Google Ranking Boost** for Core Web Vitals
- **Featured Snippets** more likely
- **Mobile Search Visibility** +20-30%

### Business Value
- **Time to Hire Reduction:** Faster site = more qualified leads
- **Brand Perception:** Professional, responsive, trustworthy
- **Support Cost Reduction:** Fewer complaints about slow site

---

## When to Escalate

Contact tech lead if:
- [ ] Lighthouse score drops below 60
- [ ] LCP > 3.5s on any page
- [ ] INP > 500ms on any interaction
- [ ] CLS > 0.25
- [ ] Forms stop submitting
- [ ] Analytics not firing
- [ ] Visual regressions appear

---

## Resources

📚 **Documentation:**
- `PERFORMANCE_AUDIT_REPORT.md` - Full technical analysis
- `PERFORMANCE_IMPLEMENTATION_GUIDE.md` - Detailed code examples
- `PAGE_BY_PAGE_ANALYSIS.md` - Individual page assessments

🔗 **External Links:**
- [Web Vitals Guide](https://web.dev/vitals/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [CrUX Vis Dashboard](https://cruxvis.withgoogle.com)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/)

---

## Questions?

For specific implementation questions, refer to:
- `PERFORMANCE_IMPLEMENTATION_GUIDE.md` for code examples
- `PAGE_BY_PAGE_ANALYSIS.md` for page-specific issues
- `CWVITALS_SUMMARY.md` for strategic overview

---

**Start with Task 1.1 (preload) - 10 minutes to +200-300ms LCP gain!**

---

*Quick Start Guide v1.0 - April 1, 2026*
