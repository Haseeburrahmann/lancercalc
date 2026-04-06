# Active Context

> Updated at the START and END of every session.
> This is the single source of truth for "what are we doing right now."

---

## Current Status

| Field | Value |
|---|---|
| **Project** | LancerCalc 2.0 |
| **Build Strategy** | Frontend-First — UI before backend (see ADR-011) |
| **Current Stage** | Stage 1 — Redesign Public Site |
| **Current Sprint** | layout.tsx → favicon → homepage |
| **Last Session** | April 6, 2026 |
| **Next Action** | Update layout.tsx (fonts + theme-color), then build new homepage |

---

## The 4-Stage Plan (Summary)

| Stage | What | Backend needed? |
|-------|------|----------------|
| **1** | Redesign public site — homepage + reskin all 6 calculators | ❌ No |
| **2** | Build 6 new features browser-only — NDA, Proposal, Contract, Invoice 2.0, Handover, Dashboard shell | ❌ No |
| **3** | Test everything thoroughly — forms, PDFs, mobile, TypeScript, SEO | ❌ No |
| **4** | Wire up backend — Supabase, Stripe, auth, save functionality | ✅ Yes |

---

## Stage 1 — What's Done vs What's Next

### ✅ Done
- Logo finalized — "A + swoosh" mark, "LancerCalc" wordmark
- Brand color locked — `#200B56` deep navy
- `tailwind.config.ts` — full brand palette, Plus Jakarta Sans + Inter
- `globals.css` — all CSS variables, all component classes updated
- `CLAUDE.md` — full 2.0 plan documented
- All `.project/` memory + agent files created and populated

### ⬜ Immediate Next (Stage 1 remaining)

**First task when opening VS Code:**
1. `app/layout.tsx` — update Google Fonts import (add Inter, keep Plus Jakarta Sans), change `theme-color` meta from `#4f46e5` → `#200B56`
2. `public/` — add favicon files from finalized logo (16, 32, 180, 192, 512px)
3. `app/page.tsx` — new homepage (hero, tools grid, features, pricing preview, footer)
4. `components/Header.tsx` — new brand nav
5. `components/Footer.tsx` — new brand footer
6. Reskin each of the 6 calculator pages

---

## Stage 2 — Feature Build Order (When Stage 1 is Done)

Build in this order — simplest to most complex:

1. **NDA Generator** — simplest form, always free, best lead gen
2. **Proposal Builder** — multi-step, 6 templates, PDF
3. **Contract Generator** — 8-question wizard, PDF
4. **Invoice 2.0** — multi-currency, line items, PDF
5. **Project Handover Builder** — most complex, 7 sections, credentials, PDF
6. **Dashboard shell** — static layout, mock data, shows Pro UX

---

## Key Rules for Stage 2 (Critical)

When building form components in Stage 2:
- **Design data structures to match the future Supabase schema** — when Stage 4 arrives, we just swap `useState` for a `supabase.from('documents').insert()` call
- **No auth required** — everything works as a guest
- **PDF generation** — use React-PDF for all document output
- **URL pre-fill** — Proposal Builder reads price from query params (`?price=5000&currency=USD`) so Pricing Calc can link to it

---

## Brand Token Quick Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#200B56` | Primary buttons, links, active states |
| `--brand-hover` | `#180840` | Button hover |
| `--brand-dark` | `#0D0524` | Hero backgrounds |
| `--brand-accent` | `#4B2D8C` | Secondary accents, gradients |
| `--brand-soft` | `#8B74C4` | Muted accents, icons |
| `--brand-light` | `#EDE8F5` | Pill fills, badges, highlights |
| `--text-primary` | `#0A0F1E` | Body text |
| `--text-secondary` | `#4B5563` | Subtext, labels |
| `--text-muted` | `#8B90A0` | Placeholder, helper text |
| `--surface` | `#F7F8FB` | Input bg, light fills |
| `--border` | `#E8EAF0` | Card borders, input borders |
| Success | `#10B981` | Paid status, completed |
| Warning | `#F59E0B` | Due soon, attention |
| Danger | `#EF4444` | Overdue, errors |

---

## The 6 New Features (Stage 2 Reference)

| # | Feature | Free gate | Route |
|---|---------|-----------|-------|
| 1 | NDA Generator | Always free | `/nda-generator` |
| 2 | Proposal Builder | 1/month free | `/dashboard/proposals/new` |
| 3 | Contract Generator | 1/month free | `/dashboard/contracts/new` |
| 4 | Invoice 2.0 | Pro only | `/dashboard/invoices/new` |
| 5 | Project Handover | 1/month free | `/dashboard/handovers/new` |
| 6 | Dashboard | Requires account (Stage 4) | `/dashboard` |

---

## Git Branch Strategy

```
main                    ← LIVE production (do NOT push 2.0 work here)
 └── lancercalc-2.0     ← All 2.0 development (current working branch)
      └── feature/*      ← Feature branches merge back to lancercalc-2.0
```

- Always verify you're on `lancercalc-2.0` (or a feature branch off it) before working.
- Only touch `main` for critical hotfixes on the live 1.0 site.
- Use GitHub account `Haseeburrahmann` for pushes.

---

## Blockers

None. Ready to start Stage 1 on `lancercalc-2.0` branch.

---

## How to Update This File

At the **start** of every session — read this file first (it tells you exactly where to pick up).
At the **end** of every session — update "What's Done", "Immediate Next", and any new blockers.
