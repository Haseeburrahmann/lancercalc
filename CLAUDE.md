# LancerCalc — Project Context for Claude

> Full project context: what it is, what's been built, current state, and next steps.
> Read this before touching any code.

---

## What Is LancerCalc?

A **free, fast financial toolkit built exclusively for freelancers** — no sign-up, no paywalls,
no bloat. Think Calculator.net but laser-focused on the 1.57 billion freelancers worldwide.

**Core insight:** Calculator sites like Calculator.net (56M visits/month) prove the model —
pure SEO, display ads, simple tools. Nobody has done this specifically for freelancers.
Existing tools are either generic (TurboTax, NerdWallet) or full $30/month platforms (Bonsai, Keeper).
We sit in the middle: free, focused, fast.

**Domain:** lancercalc.com (LIVE — connected to Vercel, DNS configured)
**Owner:** Haseeb (solo developer, AI-assisted coding)
**Started:** February 2026
**Status:** LIVE — 4 tools + blog + custom domain + GA4 + Search Console

---

## Business Model

| Phase | Timeline | Revenue Source | Est. Monthly |
|-------|----------|---------------|--------------|
| 1 | Month 1–5 | Google AdSense (finance CPM: $15–40 RPM) | $50–$500 |
| 2 | Month 6–12 | AdSense scale + freemium tier ($5–8/mo) | $500–$2,000 |
| 3 | Month 12–24 | Ads + subscriptions + affiliate partnerships | $2,000–$5,000+ |

**Freemium tier (planned):** Save invoices, recurring templates, quarterly tax calendar, dashboard.
**Affiliates (planned):** Banking (Relay, Mercury), accounting (Wave, FreshBooks), tax filing (TaxAct).

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14 (App Router) | Static generation = fast SEO pages |
| Styling | Tailwind CSS | Rapid UI, no CSS files to manage |
| Language | TypeScript (strict) | Type safety for tax calculation logic |
| Hosting | Vercel (free tier) | Auto-deploy from GitHub, global CDN |
| PDF | Browser `window.print()` | No library needed for invoice generation |
| Analytics | Google Analytics 4 (G-C9E0KPBWME) | Full traffic analytics |
| Search Console | Verified (SC4nTGns8dCZ...) | Sitemap submitted |
| Domain | lancercalc.com (Namecheap) | A: 216.198.79.1, CNAME: vercel-dns |
| Favicon | Custom LC icon (indigo #4f46e5) | ico + png + apple-touch-icon |

**Key principle:** No database, no auth, no backend. Everything runs in the browser.

---

## Domain & Hosting Setup (COMPLETE ✅)

- ✅ GitHub repo: `Haseeburrahmann/lancercalc`
- ✅ Vercel connected, auto-deploys on push
- ✅ lancercalc.com → Primary Production domain
- ✅ www.lancercalc.com → 301 redirect to lancercalc.com
- ✅ lancercalc.vercel.app → covered by canonical tags
- ✅ Namecheap DNS: A record `@` → `216.198.79.1`, CNAME `www` → Vercel
- ✅ Google Search Console verified
- ✅ Google Analytics 4 installed (layout.tsx)
- ✅ Sitemap at /sitemap.xml (auto-generated via app/sitemap.ts)
- ✅ Robots.txt at /robots.txt (auto-generated via app/robots.ts)

---

## Brand & Design

- **Primary color:** Indigo (`#4f46e5` / `brand-600`) — professional, trustworthy
- **Success/money color:** Emerald (`#10B981`)
- **Warning/highlight:** Amber (`#F59E0B`)
- **Font:** Inter (Google Fonts)
- **Design language:** Clean white cards, soft shadows, large result numbers, no dark patterns
- **Logo:** "LC" monogram in indigo rounded square + "Lancer**Calc**" wordmark
- **Favicon:** LC icon in indigo square (16/32/48/64/128/180/192/256/512px sizes)
- **Theme color:** `#4f46e5` (matches mobile browser chrome)

---

## Project Structure

```
lancercalc/
├── app/
│   ├── layout.tsx                             # Root layout, GA4, SEO metadata, favicons
│   ├── globals.css                            # Tailwind + reusable component classes
│   ├── favicon.ico                            # App Router favicon auto-detection
│   ├── page.tsx                               # Homepage — hero, stats, tools grid, CTA
│   ├── sitemap.ts                             # Auto-generates /sitemap.xml
│   ├── robots.ts                              # Auto-generates /robots.txt
│   ├── freelance-tax-calculator/page.tsx      # Tax calculator (SEO + FAQ + JSON-LD)
│   ├── hourly-rate-calculator/page.tsx        # Hourly rate (SEO + FAQ + JSON-LD)
│   ├── 1099-vs-w2-calculator/page.tsx         # 1099 vs W-2 (SEO + FAQ + JSON-LD)
│   ├── invoice-generator/page.tsx             # Invoice gen (SEO + FAQ + JSON-LD)
│   ├── blog/page.tsx                          # Blog index
│   ├── blog/[slug]/page.tsx                   # Individual blog posts
│   ├── privacy/page.tsx                       # Privacy policy
│   └── terms/page.tsx                         # Terms of use
├── components/
│   ├── Header.tsx                             # Sticky nav (all 4 tools), mobile hamburger
│   ├── Footer.tsx                             # Brand, tool links, legal links, disclaimer
│   └── calculators/
│       ├── SETaxCalculator.tsx                # ✅ Self-employment tax logic
│       ├── HourlyRateCalculator.tsx           # ✅ Hourly rate logic
│       ├── W2vsContractCalculator.tsx         # ✅ 1099 vs W-2 comparison logic
│       └── InvoiceGenerator.tsx               # ✅ Invoice generator with PDF export
├── public/
│   ├── favicon.ico                            # Multi-size ICO (16–256px)
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png                   # 180x180 for iOS
│   ├── icon-192.png                           # Android/PWA
│   └── icon-512.png                           # Android/PWA
├── CLAUDE.md                                  # ← You are here
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## What's Built & Live (February 2026)

### ✅ 4 Live Tools

| Tool | Route | Status |
|------|-------|--------|
| Freelance Tax Calculator | `/freelance-tax-calculator` | ✅ Live |
| Hourly Rate Calculator | `/hourly-rate-calculator` | ✅ Live |
| 1099 vs W-2 Calculator | `/1099-vs-w2-calculator` | ✅ Live |
| Invoice Generator | `/invoice-generator` | ✅ Live |

### ✅ SEO Infrastructure
- metadataBase set to lancercalc.com
- Canonical tags on all pages
- JSON-LD FAQPage schema on all 4 tool pages
- JSON-LD WebSite schema on homepage
- Breadcrumb navigation on all tool pages
- Open Graph + Twitter Card metadata on all pages
- 10+ keywords per page (long-tail targeted)
- googleBot max-snippet/max-image-preview set

### ✅ Blog (5 posts)
- Blog index at `/blog`
- 5 SEO-optimized posts targeting high-volume keywords
- JSON-LD Article schema on each post
- Internal links to calculators from every post

### ✅ Legal Pages
- Privacy Policy (`/privacy`) — accurately reflects GA4 usage
- Terms of Use (`/terms`) — no-tax-advice disclaimer

---

## Tax Calculation Logic (Critical Reference)

### Self-Employment Tax (used in Tax Calc + 1099 vs W-2):
- **SE_ADJUSTMENT**: 0.9235 (multiply net income by 92.35%)
- **SS_RATE**: 0.124 (12.4% Social Security)
- **SS_WAGE_BASE**: $176,100 (SS tax capped here in 2025)
- **MEDICARE_RATE**: 0.029 (2.9% Medicare, no cap)
- **ADDL_MEDICARE_RATE**: 0.009 (0.9% above $200K single / $250K married)
- **SE_DEDUCTION**: 50% of SE tax deductible from AGI
- **Source**: IRS Rev. Proc. 2024-40, IRS Topic 554, SSA 2025 COLA

### Federal Brackets (2025):
- Single: 10% up to $11,925 → 37% over $626,350
- Married: 10% up to $23,850 → 37% over $751,600
- Standard deduction: $15,000 single / $30,000 married

### State Tax:
- All 50 states + DC included
- 9 no-tax states: AK, FL, NV, NH, SD, TN, TX, WA, WY
- Rates range from 0% to 11% (HI)

---

## Reusable CSS Classes (globals.css)

| Class | Usage |
|-------|-------|
| `.calc-card` | White card with border and shadow |
| `.input-field` | Styled form input |
| `.select-field` | Styled dropdown |
| `.label` | Form field label |
| `.result-row` | Row in results breakdown |
| `.result-label` | Left side of result-row |
| `.result-value` | Right side of result-row |
| `.btn-primary` | Full-width indigo CTA button |
| `.tag` | Small pill badge |

---

## Planned Next Steps

| Priority | Task | Status |
|----------|------|--------|
| 🔴 High | Build Quarterly Tax Scheduler tool | Not started |
| 🔴 High | Build Project Pricing Calculator tool | Not started |
| 🟡 Medium | Email capture (quarterly tax deadline reminders) | Not started |
| 🟡 Medium | Product Hunt launch | Waiting for 5+ tools |
| 🟡 Medium | Apply for Google AdSense (~1K visits/month) | Waiting for traffic |
| 🟢 Later | UK/India/Canada tax calculators | Not started |
| 🟢 Later | Late Fee Calculator | Not started |

---

## Git Workflow Notes

- **macOS mounted volume**: `.git/index.lock` files get stuck frequently
- **Fix**: Run `rm .git/index.lock` from the user's terminal before committing
- **The VM cannot push**: User must run `git push` from their own terminal
- **Auto-deploy**: Vercel auto-deploys on every push to `main`

---

## Coding Guidelines

- **No `any` types** — keep TypeScript strict (`npx tsc --noEmit` to verify)
- **Calculator logic lives in the component** — move to `/lib/` when shared
- **All tax data is hardcoded** with year labels — update annually
- **`"use client"`** on all calculator components (useState/useMemo)
- **Page files are server components** — metadata exports, no interactivity
- **Formatting:** `fmt()` for currency (no decimals), `fmtDec()` for 2 decimals
- **Mobile first** — test every UI change at 375px width
- **Print CSS** — Invoice uses `@page { size: A4 }` + visibility trick for 1-page PDF

---

*Last updated: February 2026 — 4 tools live + blog + full SEO + domain configured*
