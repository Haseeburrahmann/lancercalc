# LancerCalc — Project Context for Claude

> This file gives Claude full context about the project: what it is, what's been built,
> decisions made, and what comes next. Read this before touching any code.

---

## What Is LancerCalc?

A **free, fast financial toolkit built exclusively for freelancers** — no sign-up, no paywalls,
no bloat. Think Calculator.net but laser-focused on the 1.57 billion freelancers worldwide.

**Core insight:** Calculator sites like Calculator.net (56M visits/month) prove the model —
pure SEO, display ads, simple tools. Nobody has done this specifically for freelancers.
Existing tools are either generic (TurboTax, NerdWallet) or full $30/month platforms (Bonsai, Keeper).
We sit in the middle: free, focused, fast.

**Domain:** lancercalc.com (registered, to be connected to Vercel)
**Owner:** Haseeb (solo developer, AI-assisted coding)
**Started:** February 2026

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
| Language | TypeScript | Type safety for tax calculation logic |
| Hosting | Vercel (free tier) | Auto-deploy from GitHub, global CDN |
| PDF (planned) | jsPDF (client-side) | No server needed for invoice generation |
| Analytics (planned) | Plausible | Privacy-first, no cookie banners needed |

**Key principle:** No database, no auth, no backend at launch. Everything runs in the browser.

---

## Brand & Design

- **Primary color:** Indigo (`#6366F1` / `brand-600`) — professional, trustworthy
- **Success/money color:** Emerald (`#10B981`)
- **Warning/highlight:** Amber (`#F59E0B`)
- **Font:** Inter (Google Fonts)
- **Design language:** Clean white cards, soft shadows, large result numbers, no dark patterns
- **Logo:** "LC" monogram in indigo square + "Lancer**Calc**" wordmark

---

## Project Structure

```
lancercalc/
├── app/
│   ├── layout.tsx                        # Root layout, global SEO metadata
│   ├── globals.css                       # Tailwind + reusable component classes
│   ├── page.tsx                          # Homepage — hero, stats, tools grid, CTA
│   ├── freelance-tax-calculator/
│   │   └── page.tsx                      # Tax calculator page (SEO + FAQ)
│   └── hourly-rate-calculator/
│       └── page.tsx                      # Hourly rate page (SEO + FAQ)
├── components/
│   ├── Header.tsx                        # Sticky nav, mobile hamburger
│   ├── Footer.tsx                        # Links, disclaimer, branding
│   └── calculators/
│       ├── SETaxCalculator.tsx           # ✅ Self-employment tax logic
│       └── HourlyRateCalculator.tsx      # ✅ Hourly rate logic
├── public/                               # Static assets (favicon etc.)
├── CLAUDE.md                             # ← You are here
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## Reusable CSS Classes (globals.css)

These are defined in `@layer components` — use them everywhere for consistency:

| Class | Usage |
|-------|-------|
| `.calc-card` | White card with border and shadow — wraps all calculator UI |
| `.input-field` | Styled form input — number and text fields |
| `.select-field` | Styled dropdown — extends input-field |
| `.label` | Form field label — small, medium weight, slate-600 |
| `.result-row` | Row in a results breakdown — flex between, border-bottom |
| `.result-label` | Left side of result-row — small, slate-500 |
| `.result-value` | Right side of result-row — small, semibold, slate-800 |
| `.btn-primary` | Full-width indigo CTA button |
| `.tag` | Small pill badge — used on tool cards |

---

## What's Built (February 2026)

### ✅ Homepage (`/`)
- Hero section with dark gradient background, animated badge
- Stats bar: 1.57B freelancers, Free, 2026 data, 0 dark patterns
- Tools grid: 2 live tools + 4 "coming soon" cards
- "Why LancerCalc" section (instant results, freelancer-specific, privacy first)
- Bottom CTA section

### ✅ Self-Employment Tax Calculator (`/freelance-tax-calculator`)
**What it calculates:**
- Self-employment tax: 15.3% × 92.35% of gross income
- SE tax deduction: 50% of SE tax (reduces federal AGI)
- Federal income tax: 2025 IRS brackets (single + married filing jointly)
- State income tax: All 50 states + DC with current rates
- Optional: business deductions reduce taxable income
- Outputs: total tax, effective rate, take-home pay, quarterly payment, % to set aside

**Key data (all sourced from official IRS/SSA documents):**
- 2025 Federal brackets (single): 10% up to $11,925 → 37% over $626,350 (IRS Rev. Proc. 2024-40)
- 2025 Standard deduction: $15,000 single / $30,000 married
- SS wage base: $176,100 — Social Security (12.4%) is CAPPED here (SSA 2025 COLA fact sheet)
- Medicare: 2.9% flat, no cap
- Additional Medicare: 0.9% above $200K single / $250K married
- All 50 state rates included (9 no-tax states flagged)
- IRS citations shown inline in results panel and page header with direct links to source PDFs

**Page also includes:**
- 3-step "How we calculate" section
- 5 FAQs (SEO-targeted long-tail keywords)
- Related tools links

### ✅ Hourly Rate Calculator (`/hourly-rate-calculator`)
**What it calculates:**
- Target take-home salary → gross needed (after tax)
- Adds: health insurance (monthly × 12), retirement savings (% of salary)
- Divides by billable hours/year (hours/week × working weeks)
- Adds profit margin buffer on top
- Outputs: hourly rate, daily rate, weekly rate, monthly rate, full cost breakdown

**Page also includes:**
- "Why freelancers undercharge" section with real $100K example table
- 5 FAQs (SEO-targeted)
- Related tools links

### ✅ Shared Components
- **Header:** Sticky, blur backdrop, mobile hamburger menu, "All Tools" CTA
- **Footer:** Brand, tool links, disclaimer, copyright
- **Layout:** Global SEO metadata, Open Graph, Twitter card, robots config

---

## Planned Tools (Roadmap)

| Priority | Tool | Route | Status |
|----------|------|--------|--------|
| 🔴 High | 1099 vs W-2 Comparison | `/1099-vs-w2-calculator` | Not started |
| 🔴 High | Invoice Generator (PDF) | `/invoice-generator` | Not started |
| 🟡 Medium | Quarterly Tax Scheduler | `/quarterly-tax-calculator` | Not started |
| 🟡 Medium | Project Pricing Calculator | `/project-pricing-calculator` | Not started |
| 🟡 Medium | Late Fee Calculator | `/late-fee-calculator` | Not started |
| 🟢 Later | Freelancer vs Salary (UK) | `/uk/freelance-tax-calculator` | Not started |
| 🟢 Later | Freelancer vs Salary (India) | `/in/freelance-tax-calculator` | Not started |
| 🟢 Later | Freelancer vs Salary (Canada) | `/ca/freelance-tax-calculator` | Not started |

---

## SEO Strategy

Every calculator is its own static page targeting a specific long-tail keyword cluster.
The pattern for every new tool page:

1. **URL:** descriptive slug (`/freelance-tax-calculator-by-state`)
2. **Title tag:** `[Tool Name] [Year] — [Benefit/Hook] | LancerCalc`
3. **Meta description:** Action-oriented, mentions free + no sign-up
4. **H1:** Matches title intent, year-stamped for freshness signals
5. **Content above fold:** Tool immediately usable
6. **Content below fold:** "How it works" section (3 steps), 5 FAQs targeting questions
7. **Internal links:** Each page links to 2–3 related tools
8. **Structured data (TODO):** Add FAQ schema JSON-LD to all tool pages

**Target keyword clusters:**
- "freelance tax calculator" + state variants
- "self employment tax calculator 2025 2026"
- "1099 tax calculator"
- "freelance hourly rate calculator"
- "what should I charge as a freelancer"
- "quarterly tax estimator for freelancers"

---

## Deployment Setup (TODO — Haseeb to complete)

- [ ] Push to GitHub repo: `Haseeburrahmann/lancercalc`
- [ ] Connect repo to Vercel (already has account + other projects)
- [ ] Add custom domain `lancercalc.com` in Vercel project settings
- [ ] In Namecheap DNS: A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`
- [ ] Set up Google Search Console (submit sitemap)
- [ ] Install Plausible Analytics (privacy-first)
- [ ] Apply for Google AdSense (once traffic hits ~1K visits/month)

---

## Coding Guidelines

- **No `any` types** — keep TypeScript strict
- **Calculator logic lives in the component** for now; move to `/lib/calculators/` when shared
- **All tax data is hardcoded** with year labels — update annually (2026 brackets TBD in Nov 2025)
- **`"use client"`** on all calculator components (they use useState/useMemo)
- **Page files are server components** — metadata exports work, no interactivity
- **Formatting:** `fmt()` for currency (no decimals), `fmtDec()` for hourly rates (2 decimals)
- **Mobile first** — test every UI change at 375px width

---

## Competitive Moat (Why We Win)

1. **SEO compounding** — Each tool = standalone ranking page. 20 tools = 20 SEO assets.
2. **Toolkit effect** — Users who find one tool discover others. Avg 3 pages/visit (Calculator.net model).
3. **Multi-country** — Building UK/India/Canada versions that US-focused competitors ignore.
4. **Brand trust** — "The Calculator.net for freelancers." Built in public, no dark patterns.

---

## Key Metrics to Track

| Metric | Tool | Target (Month 12) |
|--------|------|-------------------|
| Monthly organic visits | Google Search Console | 100,000 |
| Average pages/visit | Plausible | 2.5+ |
| Ad revenue | AdSense | $1,000+/mo |
| Paid subscribers | Stripe | 100+ |
| Tools live | — | 20+ |

---

*Last updated: February 2026 — MVP shipped (Tax Calculator + Hourly Rate Calculator)*
*Next session: Build 1099 vs W-2 Comparison tool*
