import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Freelance Finance Blog — Tax Tips, Rate Guides & Tools | LancerCalc",
  description:
    "Expert guides on freelance taxes, pricing, invoicing, and financial planning. Practical advice backed by real numbers and free calculators.",
  alternates: {
    canonical: "https://lancercalc.com/blog",
  },
  openGraph: {
    title: "Freelance Finance Blog | LancerCalc",
    description:
      "Expert guides on freelance taxes, pricing, invoicing, and financial planning.",
    url: "https://lancercalc.com/blog",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lancercalc.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://lancercalc.com/blog",
    },
  ],
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Freelance Finance Blog",
  description:
    "Expert guides on freelance taxes, pricing, invoicing, and financial planning.",
  url: "https://lancercalc.com/blog",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://lancercalc.com/blog/${post.slug}`,
      name: post.title,
    })),
  },
};

/* Category colors for pills */
const categoryColors: Record<string, { bg: string; text: string }> = {
  "Tax Guide": { bg: "rgba(107,92,231,0.12)", text: "#6B5CE7" },
  Career: { bg: "rgba(16,185,129,0.12)", text: "#059669" },
  Pricing: { bg: "rgba(245,158,11,0.12)", text: "#D97706" },
  "Tools & Software": { bg: "rgba(59,130,246,0.12)", text: "#2563EB" },
};

function getCategoryStyle(category: string) {
  return categoryColors[category] || { bg: "rgba(107,92,231,0.12)", text: "#6B5CE7" };
}

export default function BlogPage() {
  const [featured, ...rest] = posts;
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="min-h-screen">
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden py-14 md:py-20"
          style={{ background: "#0C0A2E" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% -5%, rgba(107,92,231,0.40) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
              <Link
                href="/"
                className="transition-colors hover:text-white/80"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                Home
              </Link>
              <svg
                className="w-3.5 h-3.5"
                style={{ color: "rgba(255,255,255,0.20)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="font-semibold" style={{ color: "#A89EFF" }}>
                Blog
              </span>
            </div>

            <div className="max-w-[720px]">
              <div className="section-label">Blog</div>
              <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.08] tracking-tight mb-4 text-white">
                Freelance Finance
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {" "}
                  Blog
                </span>
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed max-w-[600px]"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                Practical guides on taxes, pricing, invoicing, and making
                smarter financial decisions as a freelancer.
              </p>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className="text-[12px] font-bold px-4 py-2 rounded-full cursor-default transition-all"
                  style={
                    i === 0
                      ? {
                          background: "#6B5CE7",
                          color: "#fff",
                          boxShadow: "0 2px 8px rgba(107,92,231,0.40)",
                        }
                      : {
                          background: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.60)",
                          border: "1px solid rgba(255,255,255,0.10)",
                        }
                  }
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Post with Image ── */}
        <section className="py-10 md:py-14" style={{ background: "#F8F9FE" }}>
          <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "#fff",
                  border: "1.5px solid #E6E9FF",
                  boxShadow: "0 4px 24px rgba(107,92,231,0.07)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  {featured.images && featured.images[0] && (
                    <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                      <Image
                        src={featured.images[0].src}
                        alt={featured.images[0].alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.15) 100%)",
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-wide"
                        style={{
                          background: "#6B5CE7",
                          color: "#fff",
                        }}
                      >
                        Featured
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-wide"
                        style={{
                          background: getCategoryStyle(featured.category).bg,
                          color: getCategoryStyle(featured.category).text,
                        }}
                      >
                        {featured.category}
                      </span>
                    </div>

                    <h2
                      className="text-[22px] md:text-[28px] font-extrabold leading-tight mb-3 tracking-tight"
                      style={{ color: "#0A0F1E" }}
                    >
                      {featured.title}
                    </h2>

                    <p
                      className="text-[15px] leading-relaxed mb-5 max-w-[520px]"
                      style={{ color: "#4B5563" }}
                    >
                      {featured.description}
                    </p>

                    <div className="flex items-center gap-4 text-[13px]">
                      <span style={{ color: "#8B90A0" }}>
                        {featured.readTime}
                      </span>
                      <span style={{ color: "#E8EAF0" }}>&middot;</span>
                      <span style={{ color: "#8B90A0" }}>
                        {new Date(featured.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <div
                      className="flex items-center gap-2 text-[14px] font-bold mt-6"
                      style={{ color: "#6B5CE7" }}
                    >
                      Read full article
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* ── Post Grid ── */}
            <div className="mt-10">
              <h2
                className="text-[13px] font-bold uppercase tracking-[0.08em] mb-6"
                style={{ color: "#6B5CE7" }}
              >
                All Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => {
                  const catStyle = getCategoryStyle(post.category);
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        background: "#fff",
                        border: "1.5px solid #E6E9FF",
                      }}
                    >
                      {/* Card Image */}
                      {post.images && post.images[0] && (
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={post.images[0].src}
                            alt={post.images[0].alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)",
                            }}
                          />
                          {/* Category pill on image */}
                          <div className="absolute top-3 left-3">
                            <span
                              className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wide backdrop-blur-sm"
                              style={{
                                background: "rgba(255,255,255,0.90)",
                                color: catStyle.text,
                              }}
                            >
                              {post.category}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-[12px] mb-3">
                          <span style={{ color: "#8B90A0" }}>
                            {post.readTime}
                          </span>
                          <span style={{ color: "#E8EAF0" }}>&middot;</span>
                          <span style={{ color: "#8B90A0" }}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <h2
                          className="text-[16px] font-bold leading-snug mb-2 flex-1 group-hover:text-[#6B5CE7] transition-colors"
                          style={{ color: "#0A0F1E" }}
                        >
                          {post.title}
                        </h2>

                        <p
                          className="text-[13px] leading-relaxed mb-4 line-clamp-2"
                          style={{ color: "#4B5563" }}
                        >
                          {post.description}
                        </p>

                        {/* Related tool tag */}
                        <div className="mt-auto flex items-center justify-between">
                          <span
                            className="text-[11px] font-semibold px-3 py-1 rounded-full"
                            style={{
                              background: "rgba(107,92,231,0.08)",
                              color: "#6B5CE7",
                            }}
                          >
                            {post.relatedTool.emoji} {post.relatedTool.label}
                          </span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            style={{ color: "#6B5CE7" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ── Newsletter CTA ── */}
            <div
              className="mt-14 rounded-2xl p-8 md:p-12 text-center"
              style={{
                background: "linear-gradient(135deg, #0C0A2E 0%, #1A1650 100%)",
                border: "1px solid rgba(107,92,231,0.25)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(107,92,231,0.20)",
                  color: "#A89EFF",
                }}
              >
                Stay Updated
              </div>
              <h3 className="text-[24px] md:text-[28px] font-extrabold text-white tracking-tight mb-3">
                Never miss a tax deadline again
              </h3>
              <p
                className="text-[15px] leading-relaxed max-w-[480px] mx-auto mb-2"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                Get quarterly tax reminders, new calculator updates, and the latest
                freelance finance guides.
              </p>
              <p
                className="text-[13px] font-medium"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Coming soon — bookmark this page
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
