# Known Issues & Technical Debt

> Track bugs, debt, and risks. Updated by any agent that discovers an issue.
> Severity: 🔴 Critical | 🟡 Medium | 🟢 Low | ✅ Resolved

---

## Open Issues

### 1.0 Codebase

| ID | Severity | Area | Issue | Found | Owner |
|---|---|---|---|---|---|
| ISS-001 | 🟢 | Git | `.git/index.lock` files get stuck on macOS mounted volume | Feb 2026 | Haseeb |
| ISS-002 | 🟢 | DevOps | VM cannot push — user must run `git push` from their own terminal | Feb 2026 | Known limitation |
| ISS-003 | 🟡 | SEO | 1.0 URL structure (`/freelance-tax-calculator`) will need 301 redirects when migrating to 2.0 `/tools/tax` — must not lose SEO rankings | April 2026 | Architect |
| ISS-004 | 🟡 | Design | Heavy use of inline `style={}` objects in 1.0 instead of Tailwind classes — hard to maintain at scale | April 2026 | Frontend |
| ISS-005 | 🟢 | Content | Blog articles stored as TypeScript data in `posts.ts`, not as MDX files — limits content formatting options | April 2026 | Frontend |
| ISS-006 | 🔴 | Legal | Privacy policy doesn't disclose email collection via `/api/subscribe` → Google Sheets. Violates GDPR/CAN-SPAM/CCPA | Feb 2026 | Frontend |
| ISS-007 | 🟡 | SEO | Homepage JSON-LD has `SearchAction` pointing to `/?q=` — no search feature exists. Could hurt structured data | Feb 2026 | Frontend |
| ISS-008 | 🟡 | Accuracy | QuarterlyTaxScheduler Q2 period label misleading — IRS Q2 is only 2 months (Apr–May), not 3 | Feb 2026 | Frontend |
| ISS-009 | 🟢 | Perf | Google Fonts loaded twice — `@import` in globals.css AND `<link>` in layout.tsx | Feb 2026 | Frontend |
| ISS-010 | 🟡 | SEO | No Open Graph image (`og:image`) on any page — blank preview on social shares | Feb 2026 | Frontend |
| ISS-011 | 🟢 | UX | No custom 404 page (`app/not-found.tsx`) — shows generic Next.js 404 | Feb 2026 | Frontend |
| ISS-012 | 🟢 | Analytics | GA4 uses deprecated `page_path` param — should use `page_location` + `page_title` | Feb 2026 | Frontend |
| ISS-013 | 🟢 | SEO | Blog pages use raw `<img>` instead of `next/image` — hurts Core Web Vitals | Feb 2026 | Frontend |

---

## 2.0 Pre-Implementation Risks

| ID | Severity | Area | Risk | Mitigation |
|---|---|---|---|---|
| RISK-001 | 🔴 | Security | Handover credentials stored in Supabase JSONB — must be encrypted, not plain text | Encrypt before insert, decrypt client-side reveal-on-click |
| RISK-002 | 🔴 | Payments | Stripe webhook must be idempotent — same event processed twice could double-upgrade a user | Use Stripe event ID as idempotency key |
| RISK-003 | 🟡 | SEO | Migrating from 1.0 to 2.0 URL structure could lose existing Search Console rankings | Implement 301 redirects before cutover, monitor GSC |
| RISK-004 | 🟡 | Auth | Supabase user sync trigger — if `handle_new_user` fails, user exists in auth.users but not public.users | Add error handling + retry logic |
| RISK-005 | 🟡 | PDF | React-PDF server-side runs in Vercel Edge — must stay under 50MB memory limit | Test PDF size for complex proposals |
| RISK-006 | 🟢 | UX | Free tier gate (1/month) might frustrate users — needs a clear, non-annoying upgrade wall | Design gate as a positive prompt, not a blocker |

---

## Resolved Issues

| ID | Severity | Area | Issue | Resolution Date |
|---|---|---|---|---|
| — | — | — | — | — |

---

## How to Add an Issue

```
| ISS-NNN | 🔴/🟡/🟢 | Area | Description | Date | Owner |
```

Severity guide:
- 🔴 **Critical** — blocks shipping, security vulnerability, data loss risk
- 🟡 **Medium** — degrades user experience or developer velocity
- 🟢 **Low** — minor, cosmetic, or easily worked around
