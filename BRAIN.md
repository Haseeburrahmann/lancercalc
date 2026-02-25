# LancerCalc — Project Brain Document

**Last updated:** February 24, 2026 · **Site:** lancercalc.com · **Owner:** Haseeb

---

## 1. Project Overview

**LancerCalc** is a free, open-access financial toolkit built for the world's 1.57 billion freelancers. The mission is simple: give freelancers the same financial clarity that salaried employees take for granted — without paywalls, sign-ups, or hidden fees.

The site lives at **lancercalc.com** and is built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, deployed on Vercel for instant global edge delivery.

### Core Principles

- **100% free, forever** — no freemium tricks, no watermarks, no account walls
- **Privacy-first** — all calculations run client-side; zero data sent to servers
- **SEO-driven growth** — every page is optimized to rank for high-intent freelancer searches
- **Professional quality** — 2025 IRS brackets, real tax math, clean modern UI

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, React Server Components) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS (gray-* palette, custom brand-* colors) |
| Hosting | Vercel (Edge Network, automatic CI/CD from GitHub) |
| Analytics | Google Analytics 4 (GA4) — Measurement ID: G-C9E0KPBWME |
| SEO | Static metadata, JSON-LD FAQ schema, sitemap.ts, robots.ts |
| Fonts | Plus Jakarta Sans (Google Fonts, preconnected) |
| Icons | Custom LC favicon (multi-size ICO + PNG set + webmanifest) |

---

## 3. What We've Built — Live Tools

All four core tools are live in production and fully functional:

| Tool | Route | Status |
|------|-------|--------|
| Freelance Tax Calculator | `/freelance-tax-calculator` | ✅ LIVE |
| Hourly Rate Calculator | `/hourly-rate-calculator` | ✅ LIVE |
| 1099 vs W-2 Calculator | `/1099-vs-w2-calculator` | ✅ LIVE |
| Invoice Generator | `/invoice-generator` | ✅ LIVE |

### Freelance Tax Calculator
- Calculates federal income tax using 2025 IRS brackets (Rev. Proc. 2024-40)
- Self-employment tax: 15.3% on 92.35% of net earnings (Social Security cap: $176,100)
- State income tax for all 50 states + DC with correct brackets
- QBI deduction (20% qualified business income deduction)
- Standard deduction applied automatically ($15,000 single / $30,000 MFJ for 2025)
- Effective tax rate and marginal rate display

### Hourly Rate Calculator
- Input: desired annual income, business expenses, profit margin, billable hours/week, weeks/year
- Accounts for non-billable time (admin, marketing, learning)
- Shows minimum viable rate vs. target rate with profit margin

### 1099 vs W-2 Calculator
- Side-by-side after-tax comparison of contract vs. salary offers
- Values employer benefits: health insurance, 401(k) match, PTO
- Calculates break-even 1099 rate needed to match W-2 compensation
- Includes all 50 state tax rates for accurate comparison

### Invoice Generator
- Live preview with real-time updates
- Logo upload (client-side only, never sent to server)
- Custom tax label (VAT, GST, Sales Tax, HST) with percentage rate
- Discount field (percentage or fixed amount)
- PAID stamp toggle
- 6 currencies supported (USD, EUR, GBP, CAD, AUD, INR)
- PDF download via browser print — no watermark, no branding

---

## 4. Content & SEO Strategy

### Blog (5 Published Posts)

Each blog post is 2,000–3,500+ words, SEO-optimized with long-tail keywords, and links back to the relevant calculator tool. All posts have JSON-LD FAQ schema for rich snippets.

| Post Title | Category | Read Time | Linked Tool |
|-----------|----------|-----------|-------------|
| How to Calculate & Pay Quarterly Estimated Taxes as a Freelancer in 2025 | Tax Guide | 8 min | Tax Calculator |
| Self-Employment Tax Explained: The Complete 2025 Guide | Tax Guide | 10 min | Tax Calculator |
| 1099 vs W-2: Why Your $130K Contract Might Pay Less Than a $100K Salary | Career | 9 min | 1099 vs W-2 |
| How Much Should You Charge? The 2025 Rate Guide | Pricing | 8 min | Rate Calculator |
| 25 Tax Deductions Every Freelancer Should Claim in 2025 | Tax Guide | 11 min | Tax Calculator |

### SEO Infrastructure
- Every page has unique `<title>`, `<meta description>`, and canonical URL
- Open Graph and Twitter Card metadata on all pages
- JSON-LD FAQ schema on calculator pages (eligible for rich snippets)
- Dynamic sitemap.ts auto-includes all pages + blog posts
- robots.ts configured for full crawling
- Google Search Console verified (site verification meta tag in layout.tsx)
- Target keywords: "freelance tax calculator", "1099 vs w2 calculator", "free invoice generator no watermark", etc.

### Social Media Content
6 ready-to-post Facebook group posts created, targeting different freelancer pain points: quarterly taxes, undercharging, 1099 vs W-2 decisions, tax deductions, general launch announcement, and invoice generation. Targeting groups like Freelancers Union, r/freelance cross-posts, and niche communities.

---

## 5. Achievements & Completed Work

### Core Product
1. Built and deployed 4 fully functional financial calculators
2. All calculators use 2025 IRS tax data and real math (not estimates)
3. Invoice generator with logo upload, 6 currencies, live preview, PDF export
4. Responsive design across all breakpoints (mobile, tablet, desktop)

### Design & Branding
1. Modern UI with brand-blue (#155DEE) accent color and gray-* Tailwind palette
2. Custom LC favicon generated: multi-size ICO (16–256px) + PNG set + webmanifest
3. Design consistency audit: migrated all pages from slate-* to gray-* palette
4. Removed placeholder Sign In / Start Free buttons from header
5. Plus Jakarta Sans font for clean, professional typography

### SEO & Content
1. 5 long-form SEO blog posts (each 2,000–3,500+ words)
2. JSON-LD FAQ schema on all calculator pages
3. Complete metadata (OG, Twitter, canonical) on every page
4. Dynamic sitemap including all pages and blog posts
5. Google Search Console verification

### Infrastructure
1. Google Analytics 4 integrated (afterInteractive strategy)
2. Privacy policy and Terms of Service pages
3. Blog with dynamic routing ([slug]/page.tsx with generateStaticParams)
4. Header with responsive mobile menu + Blog navigation link
5. Footer with 4-column layout (Tools, Legal, Resources, Brand)

### Bug Fixes
1. Fixed blog readTime type mismatch (number → string)
2. Fixed blog canonical metadata format (alternates: { canonical })
3. Fixed favicon.ico corruption (234 bytes → 8,031 bytes proper multi-size ICO)
4. Generated missing apple-touch-icon.png, icon-192.png, icon-512.png
5. All TypeScript strict-mode checks passing clean

---

## 6. Pending Items & Roadmap

### Immediate (This Week)

| Task | Priority | Status |
|------|----------|--------|
| Git commit & push all recent changes to GitHub | High | ⏳ PENDING |
| Verify Vercel deployment after push | High | ⏳ PENDING |
| Post social media content to 3–5 Facebook groups | High | ⏳ PENDING |
| Submit sitemap to Google Search Console | Medium | ⏳ PENDING |
| Wait for Google to re-crawl favicon (may take days/weeks) | Low | 🔄 IN PROGRESS |

### Short-Term (Next 2–4 Weeks)
- **Quarterly Tax Payment Scheduler** — calculates estimated quarterly payments with IRS due dates, payment reminders, and safe harbor calculations
- **Project Pricing Calculator** — helps freelancers price fixed-bid projects based on hours, complexity, and risk multiplier
- **Expense Tracker / Profit & Loss** — simple monthly income vs. expenses tracker for freelancers
- Write 3–5 more SEO blog posts targeting new long-tail keywords
- Add Open Graph images (og:image) for better social media sharing
- Set up Google Search Console performance monitoring

### Medium-Term (1–3 Months)
- **Retirement Calculator for Self-Employed** — SEP IRA, Solo 401(k), SIMPLE IRA comparison
- **Freelance Contract Value Calculator** — total contract value including taxes, benefits gap
- Build backlinks through guest posts on freelancer blogs and forums
- Explore Product Hunt launch for visibility spike
- Consider email newsletter for tax deadline reminders (optional)
- A/B test landing page headlines and CTA copy

### Long-Term Vision
- Become the #1 Google result for "freelance tax calculator" and related queries
- 10+ free tools covering every financial decision a freelancer faces
- 100K+ monthly organic visitors from SEO content
- Potential monetization: premium PDF reports, affiliate partnerships with accounting software, or sponsored tools (while keeping core tools free forever)
- Community features: freelancer salary database, rate benchmarks by industry

---

## 7. Traffic & Growth Strategy

### Phase 1: Organic SEO (Current)
- Target high-intent keywords: "freelance tax calculator 2025", "1099 vs w2 calculator", "free invoice generator no watermark"
- 5 blog posts live, each targeting 3–5 long-tail keyword clusters
- FAQ schema for rich snippet eligibility on all calculator pages
- Internal linking: every blog post links to its related calculator tool

### Phase 2: Social Media Seeding
- Post in Facebook groups: Freelancers Union, Freelance to Freedom, Freelancing Females, etc.
- Reddit: r/freelance, r/selfemployed, r/smallbusiness (value-first, not spammy)
- LinkedIn: personal posts about freelancer financial challenges + link to tools
- Twitter/X: engage in freelancer finance discussions, share calculator results

### Phase 3: Content Scaling
- Publish 2–3 new blog posts per month on evergreen freelance finance topics
- Create comparison pages: "LancerCalc vs FreshBooks vs Wave" style content
- Build topical authority around freelance tax and finance
- Guest post outreach to freelancer blogs for backlinks

---

## 8. Project File Structure

| File / Path | Purpose |
|------------|---------|
| `app/layout.tsx` | Root layout: GA4, fonts, favicon links, Header/Footer |
| `app/page.tsx` | Homepage with hero, tool cards, testimonials |
| `app/freelance-tax-calculator/page.tsx` | Tax calculator page with SEO metadata + FAQ schema |
| `app/hourly-rate-calculator/page.tsx` | Rate calculator page with SEO metadata + FAQ schema |
| `app/1099-vs-w2-calculator/page.tsx` | 1099 vs W-2 page with SEO metadata + FAQ schema |
| `app/invoice-generator/page.tsx` | Invoice generator page with SEO metadata + FAQ schema |
| `app/blog/page.tsx` | Blog listing page |
| `app/blog/[slug]/page.tsx` | Dynamic blog post template with generateStaticParams |
| `app/blog/posts.ts` | Blog post data (5 posts with full content + metadata) |
| `app/sitemap.ts` | Dynamic sitemap generation (all pages + blog posts) |
| `app/robots.ts` | Robots.txt configuration |
| `components/Header.tsx` | Responsive header with navigation + mobile menu |
| `components/Footer.tsx` | 4-column footer (Tools, Legal, Resources, Brand) |
| `components/calculators/*.tsx` | 4 calculator client components |
| `public/favicon.ico` | Multi-size ICO favicon (16–256px) |
| `public/site.webmanifest` | PWA manifest with icon references |
| `app/globals.css` | Tailwind imports + custom brand color definitions |

---

## 9. Key Metrics to Track

- Organic search impressions and clicks (Google Search Console)
- Keyword rankings for target terms (freelance tax calculator, 1099 vs w2, etc.)
- Monthly unique visitors (Google Analytics)
- Calculator usage / engagement rate (time on page, scroll depth)
- Blog post traffic and top-performing content
- Backlink count and domain authority growth
- Invoice PDF downloads (proxy for tool adoption)

---

*This document is a living reference. Update it as the project evolves.*

**lancercalc.com — Free financial tools for freelancers.**
