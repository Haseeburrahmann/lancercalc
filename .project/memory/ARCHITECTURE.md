# Architecture Snapshot

> Last updated: April 6, 2026
> Source of truth for the current and planned system architecture.

---

## Current State: LancerCalc 1.0 (LIVE)

### Stack
| Layer | Current (1.0) |
|---|---|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3.4 + globals.css |
| Database | None — fully client-side |
| Auth | None |
| Payments | None |
| PDF | Browser `window.print()` |
| Analytics | Google Analytics 4 (G-C9E0KPBWME) |
| Hosting | Vercel (auto-deploy from GitHub main) |
| Domain | lancercalc.com (Namecheap, A: 216.198.79.1) |

### Live File Structure
```
lancercalc/
├── app/
│   ├── layout.tsx                          # Root layout + GA4 + SEO metadata
│   ├── page.tsx                            # Homepage (616 lines)
│   ├── globals.css                         # Tailwind + reusable component classes
│   ├── freelance-tax-calculator/page.tsx
│   ├── hourly-rate-calculator/page.tsx
│   ├── 1099-vs-w2-calculator/page.tsx
│   ├── invoice-generator/page.tsx
│   ├── quarterly-tax-scheduler/page.tsx
│   ├── project-pricing-calculator/page.tsx
│   ├── blog/page.tsx + blog/[slug]/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── EmailCapture.tsx
│   ├── FAQAccordion.tsx
│   ├── BottomCTA.tsx
│   └── calculators/
│       ├── SETaxCalculator.tsx
│       ├── HourlyRateCalculator.tsx
│       ├── W2vsContractCalculator.tsx
│       ├── InvoiceGenerator.tsx
│       ├── ProjectPricingCalculator.tsx
│       └── QuarterlyTaxScheduler.tsx
└── lib/
    └── taxConstants2025.ts                 # Single source of truth for tax data
```

### Current Colors (1.0)
- Primary: `#6B5CE7` (indigo-purple)
- Heading: `#0A0F1E`
- Body text: `#4B5563`
- Background: `#F7F8FB`
- Navy hero: `#0C0A2E`

---

## Target State: LancerCalc 2.0

### Stack
| Layer | Target (2.0) | Change from 1.0 |
|---|---|---|
| Framework | Next.js 15 (App Router) | Upgrade from 14 |
| Language | TypeScript (strict) | No change |
| Styling | Tailwind CSS 4 + shadcn/ui | Upgrade + add shadcn |
| Database | Supabase Postgres | New |
| Auth | Supabase Auth | New |
| Storage | Supabase Storage | New |
| Payments | Stripe | New |
| PDF | React-PDF (server-side) | Replaces browser print |
| Email | Resend + React Email | New |
| Rate Limiting | Upstash Redis | New |
| Analytics | Plausible + PostHog | Replaces GA4 |
| Error Tracking | Sentry | New |

### Target File Structure (2.0)
```
lancercalc/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                        # Homepage (rebuilt)
│   │   ├── tools/
│   │   │   ├── tax/page.tsx
│   │   │   ├── hourly-rate/page.tsx
│   │   │   ├── 1099-vs-w2/page.tsx
│   │   │   ├── invoice/page.tsx
│   │   │   ├── quarterly-tax/page.tsx
│   │   │   ├── project-pricing/page.tsx
│   │   │   └── nda/page.tsx                # New
│   │   ├── blog/
│   │   ├── pricing/page.tsx                # New
│   │   └── handover/[token]/page.tsx       # New — public client URL
│   ├── (auth)/
│   │   └── dashboard/
│   │       ├── page.tsx                    # Dashboard home
│   │       ├── proposals/page.tsx          # New
│   │       ├── contracts/page.tsx          # New
│   │       ├── invoices/page.tsx           # New
│   │       ├── handovers/page.tsx          # New
│   │       ├── clients/page.tsx            # New
│   │       └── settings/page.tsx           # New
│   └── api/
│       ├── stripe/
│       │   ├── checkout/route.ts
│       │   ├── portal/route.ts
│       │   └── webhook/route.ts
│       └── documents/
│           └── generate/route.ts
├── components/
│   ├── ui/                                 # shadcn/ui components
│   ├── calculators/                        # Rebuilt calculators
│   ├── documents/                          # Document builders
│   └── dashboard/                          # Dashboard layout
├── lib/
│   ├── supabase/client.ts
│   ├── supabase/server.ts
│   ├── supabase/middleware.ts
│   ├── stripe.ts
│   ├── resend.ts
│   └── taxConstants2025.ts                 # Carried over from 1.0
├── emails/
│   ├── invoice-reminder.tsx
│   ├── handover-sent.tsx
│   └── welcome.tsx
├── supabase/
│   ├── migrations/
│   └── types.ts
└── middleware.ts
```

### Design System (2.0 — from Sasico CRM analysis)
```css
--theme-color: #200B56;      /* Primary brand */
--title-color: #200B56;      /* Headings */
--body-color:  #696969;      /* Body text */
--bg-color:    #F7F8FA;      /* Alt section bg */
--border-color: #994AFF12;   /* Subtle borders */
```
- Heading font: **Plus Jakarta Sans** (700)
- Body font: **Inter** (400)
- Button style: pill shape, `border-radius: 100px`, height 50px
- Section spacing: 120px top/bottom

### URL Migration (1.0 → 2.0, NO SEO REGRESSION)
| 1.0 URL | 2.0 URL | Action |
|---|---|---|
| `/freelance-tax-calculator` | `/tools/tax` | 301 redirect |
| `/hourly-rate-calculator` | `/tools/hourly-rate` | 301 redirect |
| `/1099-vs-w2-calculator` | `/tools/1099-vs-w2` | 301 redirect |
| `/invoice-generator` | `/tools/invoice` | 301 redirect |
| `/quarterly-tax-scheduler` | `/tools/quarterly-tax` | 301 redirect |
| `/project-pricing-calculator` | `/tools/project-pricing` | 301 redirect |

---

## Data Flow

### Calculator Flow (no auth)
```
User → Page (SSR) → Client Component → useMemo calculation → Display result
```

### Document Generation Flow (auth required)
```
User fills form → POST /api/documents/generate → Auth check → Plan check
→ React-PDF renders PDF → Upload to Supabase Storage → Store metadata in documents table
→ Return PDF URL to client
```

### Stripe Upgrade Flow
```
User clicks "Upgrade" → POST /api/stripe/checkout → stripe.checkout.sessions.create()
→ Redirect to Stripe hosted page → Success → POST /api/stripe/webhook
→ Update subscriptions table → Update users.plan
```

### Auth Flow
```
User visits /dashboard/* → middleware.ts checks Supabase session
→ No session → redirect to /login
→ Session valid → allow through
```
