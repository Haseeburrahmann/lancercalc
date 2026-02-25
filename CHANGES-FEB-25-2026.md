# LancerCalc — Changes Log: February 25, 2026

> Summary of all work completed in this session. Use this as a reference before touching related code.

---

## 1. Email Capture — Switched from Beehiiv to Google Sheets

**Why:** Beehiiv requires Stripe identity verification to generate API keys. Switched to Google Sheets via Apps Script — zero verification, free, instant.

**How it works:**
- User submits email on site → POST to `/api/subscribe` → Next.js API route proxies to Google Sheets webhook → email stored in spreadsheet with columns: Email, Date, Source
- The `source` field tracks which page each signup came from (e.g. `"tax-calculator"`, `"blog"`, `"homepage"`)

**Files:**
- `app/api/subscribe/route.ts` — server-side POST handler, validates email, calls Google Sheets
- `components/EmailCapture.tsx` — reusable client component, two variants: `dark` (tool pages) and `light` (blog)

**Google Apps Script webhook URL:**
```
https://script.google.com/macros/s/AKfycbzr6qj5Q4U2VWKgtCGZeY6e4WPnKFVmM6Ky6s-5wfAMUgItkBHLD_r-vVDnuXzAhu73mA/exec
```

---

## 2. New Tools Built — Quarterly Tax Scheduler & Project Pricing Calculator

Both tools are fully live with SEO, FAQ JSON-LD, BreadcrumbList, and BottomCTA.

### Quarterly Tax Scheduler (`/quarterly-tax-scheduler`)
- **Component:** `components/calculators/QuarterlyTaxScheduler.tsx`
- **Page:** `app/quarterly-tax-scheduler/page.tsx`
- **Inputs:** estimated annual income, filing status, prior year tax (safe harbor)
- **Output:** 4 quarter cards (Q1–Q4) with due dates and amounts, IRS Direct Pay link
- Uses same 2025 IRS constants as the main Tax Calculator

### Project Pricing Calculator (`/project-pricing-calculator`)
- **Component:** `components/calculators/ProjectPricingCalculator.tsx`
- **Page:** `app/project-pricing-calculator/page.tsx`
- **Inputs:** hours, hourly rate, expenses, profit margin (slider), revisions, rush toggle
- **Output:** suggested quote (rounded to nearest $50), floor price, effective hourly rate, full breakdown

**Also updated:**
- `app/page.tsx` — changed both tools from "Coming Soon" to live with real hrefs + `New` tag
- `components/Header.tsx` — added both tools to the nav
- `app/sitemap.ts` — added both new tool URLs

---

## 3. State-Specific Landing Pages (51 pages)

**Route:** `/freelance-tax-calculator/[state]` — pre-renders all 50 states + DC at build time.

**Files:**
- `lib/stateData.ts` — `StateData` interface + `STATE_DATA` array (51 entries) + `getStateBySlug()` + `getStateParams()` helpers
- `app/freelance-tax-calculator/[state]/page.tsx` — dynamic page with `generateStaticParams()` + `generateMetadata()`

**What each state page has:**
- Unique title, description, keywords, and canonical URL
- State-specific hero blurb + tax rate badge (green = no-tax state, amber = taxed)
- `<SETaxCalculator defaultState={abbr} />` — pre-selects the correct state
- Info cards: state tax rate, SE tax rate, top city, recommended set-aside %
- State-specific FAQ JSON-LD (4 questions)
- BreadcrumbList: Home → Freelance Tax Calculator → [State]
- "All States" pill nav linking all 51 states to each other
- BottomCTA (email + related tools)

**SETaxCalculator change:** Added `defaultState` prop so state pages pre-select the correct state without duplicating any calculator logic.

**Sitemap:** `app/sitemap.ts` updated — 51 state URLs added at priority `0.8`.

---

## 4. Blog Updates

### BreadcrumbList on Blog Index
- `app/blog/page.tsx` — added `breadcrumbSchema` JSON-LD (Home → Blog)

### 3 New Blog Posts
Added to `app/blog/posts.ts` and content switch in `app/blog/[slug]/page.tsx`:

| Slug | Category | Related Tool |
|------|----------|-------------|
| `freelance-tax-filing-deadlines-2025` | Tax Guide | Quarterly Tax Scheduler |
| `best-accounting-software-freelancers-2025` | Tools & Software | Invoice Generator |
| `how-to-pay-estimated-taxes-online-2025` | Tax Guide | Quarterly Tax Scheduler |

All posts include 2 Unsplash images, EmailCapture (light variant), and internal links to calculators.

---

## 5. BottomCTA — Consolidated Bottom Section (Major UI Change)

**Problem:** Every tool page had 3 separate dark sections stacked at the bottom:
1. `EmailCapture` — `py-14 md:py-20` (~136px padding)
2. Related Tools grid — `py-14 md:py-16` (~120px padding)
3. Footer CTA ("Stop guessing. Start planning.") — `py-[80px]` (160px padding)

Combined: ~600px+ of dark navy content before the footer links. Repetitive, heavy, bad UX.

**Solution:** Replaced all 3 with a single `<BottomCTA>` component.

### New Component: `components/BottomCTA.tsx`
- **Props:** `relatedTools[]`, `source`, `emailHeading`
- **Layout:** 2-column grid on desktop (stacked on mobile)
  - Left: "Stop guessing. Start planning." headline + CTA button
  - Right: email form in a subtle card
  - Bottom strip: tool pill links separated by a thin divider
- **Padding:** `py-12 md:py-14` — total height ~350–400px
- One background, one glow, no repetition

### Pages Updated (removed EmailCapture + Related Tools, added BottomCTA):
- `app/freelance-tax-calculator/page.tsx`
- `app/hourly-rate-calculator/page.tsx`
- `app/1099-vs-w2-calculator/page.tsx`
- `app/invoice-generator/page.tsx`
- `app/quarterly-tax-scheduler/page.tsx`
- `app/project-pricing-calculator/page.tsx`
- `app/freelance-tax-calculator/[state]/page.tsx`

### Footer Updated:
- `components/Footer.tsx` — removed the standalone Footer CTA section entirely (it now lives inside BottomCTA on each page)

---

## 6. Known Issues / Notes

- **Git lock files:** `.git/index.lock` and `.git/HEAD.lock` get stuck on macOS. Always run `rm -f .git/index.lock .git/HEAD.lock` before committing from the VM.
- **VM cannot push:** Run `git push` from your own terminal, not the VM.
- **EmailCapture component** (`components/EmailCapture.tsx`) is still used on the **blog posts** (light variant) and the **homepage** (dark variant). It was only replaced on tool pages by BottomCTA.
- **TypeScript:** All changes pass `npx tsc --noEmit` with zero errors.

---

## Current Site Status (End of Session)

| Page / Feature | Status |
|---------------|--------|
| Freelance Tax Calculator | ✅ Live |
| Hourly Rate Calculator | ✅ Live |
| 1099 vs W-2 Calculator | ✅ Live |
| Invoice Generator | ✅ Live |
| Quarterly Tax Scheduler | ✅ Live |
| Project Pricing Calculator | ✅ Live |
| 51 State Landing Pages | ✅ Live |
| Blog (8 posts total) | ✅ Live |
| Email Capture (Google Sheets) | ✅ Live |
| BottomCTA (consolidated) | ✅ Live |
| GA4 + Search Console | ✅ Configured |
| Sitemap + Robots | ✅ Auto-generated |

---

## Pending Tasks (Not Done Yet)

| Priority | Task |
|----------|------|
| 🟡 User | Add UTM parameters to social post links |
| 🟡 User | Enable Google Signals in GA4 |
| 🟡 User | Submit sitemap + request indexing in Search Console |
| 🟡 User | Set up GA4 key events |
| 🟡 User | Investigate bot traffic |
| 🟡 Medium | Product Hunt launch (waiting for 5+ tools — now ready) |
| 🟡 Medium | Apply for Google AdSense (~1K visits/month threshold) |
| 🟢 Later | UK / India / Canada tax calculators |
| 🟢 Later | Late Fee Calculator |
| 🟢 Later | Freemium tier (save invoices, recurring templates, dashboard) |

---

*Last updated: February 25, 2026*
