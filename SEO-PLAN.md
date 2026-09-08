# Mapletech Labs — search programme

Working document. Phases run in order; each one is verifiable before the next
starts. Status is updated as work lands.

## One thing to be straight about first

No one can guarantee a #1 ranking, and anyone who promises it is selling
something. Position depends on domain authority, backlinks, competitor
behaviour and Google's own systems — none of which are controlled from inside
this repository. What *is* controlled here is everything Google measures on
the site: content depth and accuracy, information architecture, internal
linking, structured data, crawlability, page experience and topical coverage.
This plan makes all of those best-in-class for the Canadian market. Rankings
follow from that plus off-site work (citations, reviews, links, a Google
Business Profile) that has to happen outside the codebase.

---

## Baseline, measured 2026-09-07

| Signal | State |
|---|---|
| Routes in the app | 124 |
| Pages generated | 279 |
| Cities | 12 |
| Provinces with a page | **0** |
| Provinces covered by a city | 7 of 10 |
| Territories covered | 0 of 3 |
| City × service pages | 144 |
| Sub-service pages | 60 |
| Blog posts | 14 |
| Segmented XML sitemaps | 9 |

Structured data emitted today:

| Page type | Schema present | Missing |
|---|---|---|
| Home | Organization, FAQPage | — |
| Service category | Organization, Service, BreadcrumbList | FAQPage |
| Sub-service | Organization, BreadcrumbList | **Service**, FAQPage |
| Industry | Organization, BreadcrumbList | **Service**, FAQPage |
| City | Organization, ProfessionalService, BreadcrumbList | — |
| City × service | Organization, Service, ProfessionalService, FAQPage, BreadcrumbList | — |
| Blog post | Organization, BlogPosting, BreadcrumbList | — |
| Case study | Organization, Article | BreadcrumbList |

Metadata outliers: `/services` description is 266 characters (truncates at
~160); `/blog/saas-guide` is 80 (wastes the slot).

---

## Phase 1 — technical foundation — **done 2026-09-07**

1. ✅ `Service` schema on all 60 sub-service pages and 6 industry pages.
2. ✅ `FAQPage` schema on service, sub-service, industry and city pages —
   generated from the same array the page renders, so the two can never drift.
3. ✅ `BreadcrumbList` on all 6 case studies.
4. ✅ Every title ≤60 characters, every description 120–165. Eight outliers
   rewritten, including a 266-character description on `/services`.
5. ✅ No orphans: all 60 sub-service pages reachable from `/services` and from
   their own category page.

Fixed along the way: the fallback FAQ array lived inside a `'use client'`
module, so importing it across the server boundary yielded a client reference
rather than the data and the schema silently emitted nothing. It now lives in
`src/data/faqs.ts` and both the renderer and the schema read the same source.

Schema after Phase 1:

| Page type | Emitted |
|---|---|
| Home | Organization, FAQPage |
| Service category | Organization, Service, FAQPage, BreadcrumbList |
| Sub-service | Organization, Service, FAQPage, BreadcrumbList |
| Industry | Organization, Service, FAQPage, BreadcrumbList |
| City | Organization, ProfessionalService, FAQPage, BreadcrumbList |
| City × service | Organization, Service, ProfessionalService, FAQPage, BreadcrumbList |
| Blog post | Organization, BlogPosting, BreadcrumbList |
| Case study | Organization, Article, BreadcrumbList |

Every JSON-LD block parses, and every FAQPage question count matches the
questions rendered on the page.

## Phase 2 — the province layer

The site jumps from "Canada" straight to 12 cities. That skips the level
people actually search: *"software development company Alberta"*.

- 10 province pages plus a national page for the 3 territories.
- Each links down to its cities and up to `/locations`.
- Province × top-service pages **only where there is something true to say** —
  provincial regulation, procurement rules, industry mix. A province page that
  is a city page with the noun swapped is the thin-content pattern Google's
  helpful-content system targets, and it would drag the good pages down with
  it. Quality gate before quantity.

## Phase 3 — content depth on the money pages

Service × city is where commercial intent lives. Per page: a real local
proof point, the local regulatory or market context, pricing honesty, and
an FAQ answering what people actually type.

Order of work, by search volume and margin:

1. Toronto, Vancouver, Calgary, Edmonton, Montréal, Ottawa
2. Web development, mobile apps, AI/ML, SaaS, cloud
3. Remaining cities, remaining services

## Phase 4 — editorial — **in progress**

Runs on one reusable ArticleTemplate (content-as-data) so posts stay
consistent and are fast to add. Shipped:

- ✅ **Agentic AI in Production (2026)** — 1,757 words. The agentic-AI cluster,
  model-agnostic and honest about hype. Names no unverifiable product.
- ✅ **12 SaaS Ideas Worth Building in 2026** — 1,589 words.
- ✅ **What Profitable SaaS Products Get Right** — 1,311 words.

Already on the site and covering the rest of the cluster: the SaaS build
guide, the "choosing a partner" post, and the cost guides (app, website,
SaaS, digital marketing).

Blocked, needs the user:
- The **"Astra 6"** posts. I will not publish invented specifications about a
  product I cannot verify. Confirm what it refers to and they get written.

**Open question before writing:** the brief mentions "Fable 5" and "Astra 6".
Fable 5 is a Claude model. "Astra 6" is not something I can verify, and I will
not publish invented specifications, benchmarks or release dates about a named
product — that is the fastest way to lose the E-E-A-T this whole plan depends
on. Confirm what it refers to and I will write it properly; otherwise those
posts cover agentic patterns without naming unverifiable products.

## Phase 5 — measurement and off-site

- Google Search Console and Bing Webmaster verification
- Google Business Profile per city where there is a real address
- Citation and review programme
- Rank tracking per service × city, reviewed monthly

Phases 1–4 are code and content, and happen here. Phase 5 needs accounts and
real-world business details, and needs the user in the loop.

---

## Progress log

**2026-09-07 — technical foundation + province layer + hub enrichment shipped**

- Phase 1 (structured data, metadata) complete and re-verified sitewide.
- Phase 2 province layer live: 7 province pages (~1,000 words each), /locations
  rebuilt as a real hub, every city links up to its province.
- Sitewide meta sweep: every title ≤60 chars (a length-aware generator keeps
  "Company" in city×service titles wherever it fits, drops it only for the
  longest prefixes so none truncate), every description 118–163, one h1 per
  page, all JSON-LD valid, canonicals everywhere.
- Thin hubs fixed with real FAQs (not padding): /industries 280→598,
  /case-studies 288→578, /locations 228→605.
- Fixed the active case-study filter pill contrast (4.09→4.84).

Verified across a 26-URL sample spanning every page type: 0 SEO defects
except directory hubs, which are link-dense by design and now carry real
intro prose plus an FAQ.

**Still open (needs the user):**
- Phase 4 editorial: the "Astra 6" posts are blocked — I will not publish
  invented specifications about a product I cannot verify. Confirm what it
  refers to and those get written properly. The SaaS and agentic-AI posts
  that do not name unverifiable products can proceed on request.
- Phase 5 off-site: Search Console / Bing verification, a Google Business
  Profile per real address, and a reviews + citations programme. None of
  these live in the repo, and daily leads depend on them as much as on the
  on-page work now in place.
