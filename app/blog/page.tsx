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
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium mb-6">
            <Link href="/" className="text-brand hover:text-brand-dark transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span style={{ color: "#0A0F1E" }}>Blog</span>
          </div>

          <p className="section-label">Blog</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#0A0F1E" }}>
            Freelance Finance Blog
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#5A6178" }}>
            Practical guides on taxes, pricing, invoicing, and making smarter
            financial decisions as a freelancer.
          </p>
        </div>
      </section>

      {/* ── Posts grid ──────────────────────────────────────── */}
      <section className="bg-[#F7F8FB] py-12 md:py-16">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl border-[1.5px] border-[#F0F1F5] p-7 hover:border-brand hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-brand-light text-brand text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-[12px]" style={{ color: "#8B90A0" }}>{post.readTime}</span>
                  <span className="text-[12px]" style={{ color: "#8B90A0" }}>
                    &middot; {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h2 className="text-[15px] font-bold group-hover:text-brand transition-colors mb-2" style={{ color: "#0A0F1E" }}>
                  {post.title}
                </h2>
                <p className="text-[13px] leading-relaxed mb-3" style={{ color: "#5A6178" }}>
                  {post.description}
                </p>
                <div className="flex items-center gap-1 text-brand text-[13px] font-bold">
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
