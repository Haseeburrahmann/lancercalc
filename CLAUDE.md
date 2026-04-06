# LancerCalc — Project Context for Claude

> Full project context: what it is, what's been built, current state, and next steps.
> Read this before touching any code.

---

## ⚡ Operating Instructions (Read First, Every Session)

### Step 1 — Orient yourself
Before writing any code or making any decision, read these files in order:
1. `.project/memory/ACTIVE_CONTEXT.md` — what phase we're in, what's in progress right now
2. `.project/memory/KNOWN_ISSUES.md` — what's broken or risky
3. `.project/memory/DECISIONS.md` — what has already been decided (don't re-debate closed ADRs)

### Step 2 — When acting as a specific role
If asked to "Act as the [Agent]", read the corresponding file first:
- Product Owner → `.project/agents/product-owner.md`
- Architect → `.project/agents/architect.md`
- Frontend Developer → `.project/agents/frontend.md`
- Backend Developer → `.project/agents/backend.md`
- Analyst → `.project/agents/analyst.md`
- Security Reviewer → `.project/agents/security.md`
- Tester → `.project/agents/tester.md`

### Step 3 — Before making an architecture decision
Check `.project/memory/DECISIONS.md` first. If an ADR already covers this, follow it. If not, document the new decision there after making it.

### Step 4 — After completing a task
Update these files before ending the session:
- `.project/memory/ACTIVE_CONTEXT.md` — what was done, what's next
- `.project/memory/CHANGE_TRACKER.md` — log what changed and why
- `.project/memory/KNOWN_ISSUES.md` — log any bugs or risks found

### Non-negotiable rules
- No `any` types — run `npx tsc --noEmit` to verify
- `"use client"` on all interactive components; page files are server components
- Mobile first — test at 375px before shipping any UI
- RLS on every Supabase table — no exceptions
- Never commit secrets — `.env.local` is gitignored

---

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

## Business Model (2.0)

| Phase | Timeline | Revenue Source | Est. Monthly |
|-------|----------|---------------|--------------|
| 1 | Month 1–5 | Google AdSense (finance CPM: $15–40 RPM) | $50–$500 |
| 2 | Month 6–12 | AdSense + Pro subscriptions ($15/mo) | $500–$2,000 |
| 3 | Month 12–24 | Ads + subscriptions + affiliate partnerships | $2,000–$5,000+ |

### Pricing Tiers (2.0)
| Tier | Price | Key Features |
|------|-------|-------------|
| **Free** | $0 | All calculators, 3 invoices/mo, no save |
| **Pro** | $15/mo | Unlimited invoices, save history, tax calendar, dashboard |
| **Agency** | $29/mo | Everything in Pro + multi-client, team seats, white-label PDF |

**Free gate:** 3 invoices/month, no history saved, no recurring templates.
**Stripe Product IDs:** See `.project/agents/backend.md` for price IDs.
**Affiliates (planned):** Banking (Relay, Mercury), accounting (Wave, FreshBooks), tax (TaxAct).

---

## Tech Stack

### 1.0 (Live Now)
| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Language | TypeScript (strict) |
| Hosting | Vercel (free tier) |
| PDF | Browser `window.print()` |
| Analytics | Google Analytics 4 (G-C9E0KPBWME) |
| Domain | lancercalc.com (Namecheap → Vercel) |

### 2.0 (Target Stack — ADR-005 through ADR-010)
| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router) | Latest stable, improved caching |
| Styling | Tailwind CSS 4 + shadcn/ui | Component system, design tokens |
| Language | TypeScript strict | No `any` — non-negotiable |
| Database | Supabase (Postgres + RLS) | Auth + DB + Storage in one |
| Auth | Supabase Auth (magic link + Google) | No password friction |
| Payments | Stripe Checkout + Webhooks | Subscriptions + one-off |
| PDF | React-PDF (server-side) | Pixel-perfect, no browser quirks |
| Email | Resend + React Email | Transactional email |
| Rate limiting | Upstash Redis | API protection |
| Analytics | Plausible + PostHog | Privacy-first + product analytics |
| Hosting | Vercel (Pro when revenue hits) | Same pipeline, more limits |

**Key principle (2.0):** Free tools stay browser-only. Auth/paid features go through Supabase.
RLS on every table — no exceptions. See `.project/agents/backend.md` for full schema.

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

## Brand & Design (2.0 — Updated April 2026)

- **Primary color:** Deep Navy `#200B56` — professional, premium SaaS feel (from Sasico CRM design system)
- **Primary hover:** `#180840` (darker navy for button states)
- **Primary accent:** `#4B2D8C` (lighter purple for secondary elements)
- **Primary light tint:** `#EDE8F5` (backgrounds, badges, highlights)
- **Success/money color:** Emerald (`#10B981`)
- **Warning/highlight:** Amber (`#F59E0B`)
- **Text primary:** `#0A0F1E` (near-black)
- **Text secondary:** `#4B5563`
- **Text muted:** `#8B90A0`
- **Surface bg:** `#F7F8FB`
- **Border:** `#E8EAF0`
- **Font headings:** Plus Jakarta Sans (700–800) — loaded via Google Fonts
- **Font body:** Inter (400–600) — loaded via Google Fonts
- **Design language:** Clean white cards, soft shadows, navy primary CTA, no dark patterns
- **Logo:** "A + swoosh" mark in `#200B56` + "LancerCalc" wordmark (finalized April 2026)
- **Favicon:** Logo icon exported at 16/32/180/192/512px
- **Theme color:** `#200B56` (matches mobile browser chrome)

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

## 2.0 Build Plan — 4 Stages (Frontend-First)

> Strategy: Build and perfect the UI first. Wire up backend (Supabase + Stripe + auth) last.
> This way we see the full product early and avoid backend complexity blocking UI work.
> See ADR-011 in `.project/memory/DECISIONS.md` for full rationale.

---

### Stage 1 — Redesign Public Site 🔴 IN PROGRESS
**Goal:** lancercalc.com looks like a 2.0 product. New brand throughout. No new features yet.

| Task | Status |
|------|--------|
| Logo finalized (A + swoosh) | ✅ Done |
| Brand colors updated (`#200B56`) | ✅ Done |
| tailwind.config.ts + globals.css updated | ✅ Done |
| Update layout.tsx (theme-color, Google Fonts — Inter + Plus Jakarta Sans) | ⬜ |
| Favicon exports saved to `/public/` (16, 32, 180, 192, 512px) | ⬜ |
| New homepage — hero, tools grid, features section, pricing preview, footer | ⬜ |
| Header — new brand, nav links for all tools + "Sign in" placeholder | ⬜ |
| Footer — updated with all tool links + new brand | ⬜ |
| Reskin: Freelance Tax Calculator | ⬜ |
| Reskin: Hourly Rate Calculator | ⬜ |
| Reskin: 1099 vs W-2 Calculator | ⬜ |
| Reskin: Invoice Generator (basic) | ⬜ |
| Reskin: Quarterly Tax Scheduler | ⬜ |
| Reskin: Project Pricing Calculator | ⬜ |
| Pricing page (static — no Stripe yet) | ⬜ |
| Blog index + post pages reskinned | ⬜ |

---

### Stage 2 — Build the 6 New Features (Browser-Only, No Auth)
**Goal:** All 6 features exist, work, and generate PDFs. No save, no login required yet.
**Key rule:** Design form data structures to match the future Supabase schema — swap in Stage 4 is just replacing local state with a DB insert.

| Task | Status |
|------|--------|
| **NDA Generator** — mutual/one-way, 6 jurisdictions, download PDF | ⬜ |
| **Proposal Builder** — 6 industry templates, multi-step form, PDF download | ⬜ |
| **Contract Generator** — 8-question wizard, 4 contract types, PDF download | ⬜ |
| **Invoice 2.0** — multi-currency, line items, download PDF (no Stripe link yet) | ⬜ |
| **Project Handover Builder** — 7 sections, credentials masked, PDF + mock public URL | ⬜ |
| **Dashboard shell** — static layout with mock data showing what Pro looks like | ⬜ |
| Internal funnel links: Pricing Calc → Proposal → Contract → Invoice → Handover | ⬜ |

---

### Stage 3 — Test Everything
**Goal:** Every flow works perfectly before any backend complexity is added.

| Task | Status |
|------|--------|
| All forms validate correctly (required fields, number ranges) | ⬜ |
| Every PDF generates + downloads cleanly | ⬜ |
| All pages work on mobile at 375px | ⬜ |
| Funnel links work end-to-end (calc → proposal pre-fills price) | ⬜ |
| No TypeScript errors (`npx tsc --noEmit` passes clean) | ⬜ |
| No ESLint errors (`npx next lint` passes clean) | ⬜ |
| Core Web Vitals — LCP under 2.5s, no layout shift | ⬜ |
| Cross-browser: Chrome, Safari, Firefox | ⬜ |
| SEO — metadata, canonical tags, JSON-LD on all new pages | ⬜ |

---

### Stage 4 — Wire Up the Backend
**Goal:** Real SaaS. Users can sign up, save work, and pay for Pro.

| Task | Status |
|------|--------|
| Next.js 15 upgrade | ⬜ |
| shadcn/ui installed | ⬜ |
| Supabase project created | ⬜ |
| SQL migrations: users, subscriptions, clients, documents, handovers, usage_events, templates | ⬜ |
| RLS policies on every table | ⬜ |
| User sync trigger (handle_new_user) | ⬜ |
| Supabase TypeScript types generated | ⬜ |
| Auth middleware protecting `/dashboard/*` | ⬜ |
| Sign in / sign up pages (email + Google OAuth + magic link) | ⬜ |
| Stripe products created (Free / Pro $15 / Agency $29) | ⬜ |
| Stripe Checkout + Portal + Webhook handler | ⬜ |
| Free tier gates: 1 proposal/mo, 1 contract/mo, 1 handover/mo | ⬜ |
| Upgrade wall modal (triggered when free limit hit) | ⬜ |
| Save functionality: documents → Supabase instead of local state | ⬜ |
| Invoice 2.0: add Stripe payment link + Resend auto-reminders | ⬜ |
| Handover: real public URL `/handover/[token]` + view tracking | ⬜ |
| Upstash Redis rate limiting on all `/api/` routes | ⬜ |
| Resend domain verified + email sequences (welcome, reminders) | ⬜ |
| Plausible + PostHog analytics | ⬜ |
| Sentry error tracking | ⬜ |

---

### After Stage 4 — Growth & Scale
| Task | Status |
|------|--------|
| Google AdSense application (~1K visits) | ⬜ Waiting for traffic |
| Product Hunt launch | ⬜ |
| Affiliate integrations (Relay, Mercury, Wave, FreshBooks, TaxAct) | ⬜ |
| UK/Canada tax calculators | ⬜ |
| Agency tier: multi-client, team seats, white-label PDF | ⬜ |
| Show HN + Reddit (r/freelance, r/webdev, r/indiehackers) | ⬜ |

---

## Git Workflow — Branch Strategy (2.0)

### Branch Structure
```
main                    ← LIVE production (lancercalc.com auto-deploys from here)
 └── lancercalc-2.0     ← 2.0 development branch (all Stage 1–4 work happens here)
      ├── feature/new-homepage
      ├── feature/reskin-calculators
      ├── feature/pricing-page
      └── ... (merge each back to lancercalc-2.0)
```

### Hard Rules
- **`main` = live site.** Only push to `main` for critical hotfixes on the current live site.
- **`lancercalc-2.0` = 2.0 staging.** All 2.0 work merges here first.
- **Feature branches** branch off `lancercalc-2.0`, NOT `main`.
- **Naming:** `feature/description`, `fix/description`, `refactor/description`
- **When 2.0 is fully ready and tested** → merge `lancercalc-2.0` into `main` → goes live.
- **Never force push** to `main` or `lancercalc-2.0`.
- **GitHub account:** Use `Haseeburrahmann` (not `growthmasala`) for this repo.

### Workflow
1. `git checkout lancercalc-2.0`
2. `git checkout -b feature/my-feature`
3. Do the work, commit
4. `git checkout lancercalc-2.0 && git merge feature/my-feature`
5. Push `lancercalc-2.0` to remote
6. When ALL of 2.0 is done → merge `lancercalc-2.0` into `main`

### Notes
- **macOS mounted volume**: `.git/index.lock` files get stuck frequently — run `rm .git/index.lock`
- **Auto-deploy**: Vercel auto-deploys on every push to `main` (not `lancercalc-2.0`)

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

*Last updated: April 2026 — 2.0 planning complete, brand updated (#200B56), Phase 1 in progress*
