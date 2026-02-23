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
      <section className="bg-gradient-to-br from-gray-900 to-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex items-center gap-2 text-brand-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span>Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Freelance Finance Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Practical guides on taxes, pricing, invoicing, and making smarter
            financial decisions as a freelancer.
          </p>
        </div>
      </section>

      {/* ── Posts grid ──────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
                <span className="text-xs text-gray-400">
                  &middot; {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                {post.description}
              </p>
              <div className="flex items-center gap-1 text-brand-600 text-sm font-semibold">
                Read article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
