import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Freelance Finance Blog — Tax Tips, Rate Guides & More",
  description:
    "Expert guides on freelance taxes, pricing, invoicing, and financial planning. Practical advice backed by real numbers and free calculators.",
  alternates: {
    canonical: "https://lancercalc.com/blog",
  },
  openGraph: {
    title: "Freelance Finance Blog | LancerCalc",
    description: "Expert guides on freelance taxes, pricing, invoicing, and financial planning.",
    url: "https://lancercalc.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-14 md:py-20" style={{ background: "#0C0A2E" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% -5%, rgba(107,92,231,0.40) 0%, transparent 65%)" }} />
        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
            <Link href="/" className="transition-colors" style={{ color: "rgba(255,255,255,0.40)" }}>Home</Link>
            <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.20)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold" style={{ color: "#A89EFF" }}>Blog</span>
          </div>

          <div className="max-w-[720px]">
            <div className="section-label">Blog</div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.08] tracking-tight mb-4 text-white">
              Freelance Finance
              <span style={{
                background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}> Blog</span>
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
              Practical guides on taxes, pricing, invoicing, and making smarter
              financial decisions as a freelancer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <section className="py-12 md:py-16" style={{ background: "#EEF0FF" }}>
        <div className="max-w-[860px] mx-auto px-4 sm:px-8">
          <div className="space-y-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl p-7 transition-all group"
                style={{ background: "#fff", border: "1.5px solid #E6E9FF" }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wide"
                    style={{ background: "#EEF0FF", color: "#6B5CE7" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-[12px]" style={{ color: "#8B90A0" }}>{post.readTime}</span>
                  <span className="text-[12px]" style={{ color: "#8B90A0" }}>
                    &middot; {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h2 className="text-[15px] font-bold mb-2 transition-colors" style={{ color: "#0A0F1E" }}>
                  {post.title}
                </h2>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: "#5A6178" }}>
                  {post.description}
                </p>
                <div className="flex items-center gap-1 text-[13px] font-bold" style={{ color: "#6B5CE7" }}>
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
