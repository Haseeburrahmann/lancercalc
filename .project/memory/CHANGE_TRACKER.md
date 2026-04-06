# Change Tracker

> Log of what changed, when, and why. One entry per meaningful change.
> Think of this as a human-readable changelog tied to the project phases.

---

## Format
```
### [Date] — [Area] — [What changed]
**Why:** [reason]
**Files affected:** [list]
**Phase:** [1–5]
```

---

## 2026 — LancerCalc 1.0 (Pre-2.0)

### February 2026 — Foundation — Project created and launched
**Why:** Initial launch of LancerCalc
**What shipped:**
- Next.js 14 App Router setup
- 4 tools: Tax Calculator, Hourly Rate, 1099 vs W-2, Invoice Generator
- Custom domain lancercalc.com connected to Vercel
- Google Analytics 4 + Search Console
- Favicon + brand identity (indigo `#4f46e5`)

### March 2026 — Tools — 2 new calculators added
**Why:** Expanding the free tool suite for SEO and user value
**What shipped:**
- Quarterly Tax Scheduler (`/quarterly-tax-scheduler`)
- Project Pricing Calculator (`/project-pricing-calculator`)
- 15 blog posts across tax, pricing, and tools categories
- Email capture component (dark + light variants)
- `/api/subscribe` endpoint for newsletter

### April 2026 — Planning — LancerCalc 2.0 planning
**Why:** Ready to evolve from calculator site to full freelancer back office
**What shipped:**
- `lancercalc-2.0.md` — full product plan (14 sections)
- `.project/` system created:
  - 7 agent definition files
  - 5 memory files (ACTIVE_CONTEXT, ARCHITECTURE, DECISIONS, KNOWN_ISSUES, CHANGE_TRACKER)
  - Report templates
- `CLAUDE.md` updated with operating instructions
- Sasico CRM design system extracted and documented

---

### April 6, 2026 — Design + Planning — Brand system applied + 2.0 plan locked
**Why:** Kicking off LancerCalc 2.0. Brand redesigned, full product plan documented, build strategy decided.
**What changed:**
- Logo finalized: "A + swoosh" mark + "LancerCalc" wordmark (Canva)
- Brand color locked: `#200B56` deep navy (Sasico CRM design system)
- `tailwind.config.ts` — complete rewrite with brand palette, font families, shadows, gradients
- `globals.css` — complete rewrite: CSS custom properties at `:root`, all components updated to `#200B56`, added `btn-secondary`, `pricing-card`, `upgrade-banner` components
- `CLAUDE.md` — full 2.0 plan: 4-stage frontend-first build, tech stack (1.0 vs 2.0), pricing tiers, phase roadmap with checkboxes
- `.project/memory/ACTIVE_CONTEXT.md` — stage 1 as current focus, full token reference, feature build order
- `.project/memory/DECISIONS.md` — ADR-011 added: frontend-first build strategy
- All agent files created: product-owner, architect, frontend, backend, analyst, security, tester
**Phase:** Pre-Stage 1
**Files affected:** `CLAUDE.md`, `tailwind.config.ts`, `app/globals.css`, `.project/memory/*`

---

## How to Add an Entry

At the end of every work session, add a brief entry here:
1. Date
2. Area (Tools / Design / Backend / Auth / Payments / SEO / Infra)
3. What changed (1–3 sentences)
4. Why it changed
5. Files affected
6. Which phase this belongs to
