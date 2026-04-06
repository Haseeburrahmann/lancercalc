# Decision Log (ADR)

> Architecture Decision Records — every major tech and product decision with context, options considered, and outcome.
> Format: ADR-NNN | Date | Status | Decision

---

## ADR-001 | Feb 2026 | ✅ Accepted
**Decision:** Use Next.js App Router with static generation for calculator pages

**Context:** Needed fast-loading SEO pages. Calculator sites like Calculator.net (56M/mo) prove static generation wins for this model.

**Options considered:**
- Next.js Pages Router — rejected (legacy, moving to App Router)
- Remix — rejected (smaller ecosystem, less Vercel integration)
- SvelteKit — rejected (TypeScript maturity lower for tax logic)

**Outcome:** Next.js 14 App Router. All calculator pages are server components with metadata exports. Calculator logic runs client-side via `"use client"` components.

---

## ADR-002 | Feb 2026 | ✅ Accepted
**Decision:** No backend, no database, no auth for LancerCalc 1.0

**Context:** Solo developer, fastest time to market. Calculators don't need to store data. "Zero data stored" is a feature, not a limitation — it's a trust signal for freelancers.

**Options considered:**
- Supabase from day one — rejected (over-engineering for calculators)
- Firebase — rejected (vendor lock-in, pricing concerns at scale)

**Outcome:** Fully client-side app. Tax constants hardcoded with year labels. No API calls. No auth. Ships in days, not weeks.

---

## ADR-003 | Feb 2026 | ✅ Accepted
**Decision:** Single `taxConstants2025.ts` file as source of truth for all tax data

**Context:** Tax logic is shared across 3 calculators (Tax, 1099 vs W-2, Quarterly Scheduler). Duplicating data causes drift.

**Outcome:** `lib/taxConstants2025.ts` — all brackets, rates, state taxes, SS wage base in one file. All calculators import from here. Update annually.

---

## ADR-004 | Feb 2026 | ✅ Accepted
**Decision:** Use browser `window.print()` for invoice PDF in 1.0

**Context:** No library needed. Print CSS hides form, shows only invoice. Works perfectly. No dependency.

**Trade-off:** No server-side branding control. Upgrading to React-PDF for Invoice 2.0 (Pro feature).

---

## ADR-005 | April 2026 | ✅ Accepted
**Decision:** LancerCalc 2.0 uses Supabase as single platform for DB + Auth + Storage

**Context:** Original plan considered Neon (DB) + Clerk (auth) + Cloudflare R2 (storage) + Drizzle (ORM). That's 4 services to manage.

**Options considered:**
- Neon + Clerk + R2 + Drizzle — rejected (4x operational complexity)
- PlanetScale + NextAuth + S3 — rejected (MySQL, not Postgres)
- **Supabase** — selected (Postgres + Auth + Storage + RLS in one platform)

**Trade-off:** Clerk has more polished pre-built UI. For a solo product with no team features in v1, Supabase Auth is sufficient and operational simplicity wins.

---

## ADR-006 | April 2026 | ✅ Accepted
**Decision:** Stripe for payments (not Paddle, not Lemon Squeezy)

**Context:** Need subscription management, webhook reliability, customer portal.

**Options considered:**
- Paddle — rejected (merchant of record model complicates tax reporting; slower webhook reliability)
- Lemon Squeezy — rejected (newer, less proven at scale)
- **Stripe** — selected (industry standard, best webhook reliability, Customer Portal built-in)

---

## ADR-007 | April 2026 | ✅ Accepted
**Decision:** Use Resend + React Email for transactional email

**Context:** Need invoice reminders, handover notifications, welcome sequences.

**Options considered:**
- SendGrid — rejected (complex UI, expensive, not TypeScript-native)
- Postmark — rejected (no React Email integration)
- **Resend + React Email** — selected (TypeScript-native, same codebase, clean API)

---

## ADR-008 | April 2026 | ✅ Accepted
**Decision:** React-PDF for server-side document generation in 2.0

**Context:** Proposals, contracts, invoices need branded, consistent PDFs. Browser print is not good enough for Pro tier.

**Options considered:**
- Puppeteer (headless Chrome) — rejected (too heavy for Vercel serverless)
- PDFKit — rejected (not React-native, harder to style)
- **React-PDF** — selected (React components → PDF, runs in Node.js, server-side)

---

## ADR-009 | April 2026 | ✅ Accepted
**Decision:** NDA generator is always free, no account required

**Context:** NDA is the best lead generation tool — every project starts with one. Making it free with optional email capture maximizes top-of-funnel.

**Outcome:** NDA generator → free forever → optional email capture at end → newsletter list growth.

---

## ADR-010 | April 2026 | ✅ Accepted
**Decision:** Design system based on Sasico CRM template (ibthemespro)

**Context:** LancerCalc 2.0 needs a professional SaaS aesthetic. Sasico CRM was identified as the reference design.

**Extracted tokens:**
- Primary: `#200B56`, Heading font: Plus Jakarta Sans, Body font: Inter
- Button: pill shape 100px radius, 50px height
- Section spacing: 120px, Container: 1310px max-width

---

## ADR-011 | April 2026 | ✅ Accepted
**Decision:** Frontend-first build order — UI and features built before backend is wired up

**Context:** Solo developer building a complex SaaS with 6 new features, auth, payments, and database. Two possible build orders:
- Backend-first: set up Supabase + Stripe + auth, then build UI on top
- Frontend-first: build all UI with local state, wire backend in last stage

**Options considered:**
- Backend-first — rejected. Every UI task is blocked by "you must be logged in", auth errors, DB migrations. Slows everything down and reduces visibility of progress.
- **Frontend-first** — selected. All UI/UX built with local state or mock data. Full product is visible and testable before backend is touched. In Stage 4, swapping `useState` for Supabase inserts is mechanical work, not creative work.

**Outcome:** 4-stage plan:
1. Redesign public site (homepage + 6 calculator reskins)
2. Build 6 new features (NDA, Proposal, Contract, Invoice 2.0, Handover, Dashboard shell) — all browser-only
3. Test everything thoroughly
4. Wire up Supabase + Stripe + auth + save functionality

**Key rule from this decision:** When building Stage 2 form components, data structures must match the future Supabase schema so Stage 4 is a clean swap, not a rebuild.

---

## Template for New Decisions

```
## ADR-NNN | Date | Status
**Decision:** [one-line summary]
**Context:** [why this decision was needed]
**Options considered:** [what else was evaluated]
**Outcome:** [what was chosen and why]
**Trade-off:** [what we gave up]
```
