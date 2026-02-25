import type { Metadata } from "next";
import InvoiceGenerator from "@/components/calculators/InvoiceGenerator";
import FAQAccordion from "@/components/FAQAccordion";
import BottomCTA from "@/components/BottomCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Invoice Generator 2025 — No Sign-Up, No Watermark",
  description:
    "Create a professional invoice in seconds. Add your logo, line items, tax, and discount — then download as PDF. Completely free, no account needed, no watermarks ever.",
  keywords: [
    "free invoice generator",
    "invoice generator no sign up",
    "free invoice maker freelancer",
    "invoice pdf generator free",
    "online invoice creator no watermark",
    "simple invoice generator",
    "freelance invoice template",
    "create invoice free download pdf",
    "free online invoice maker",
    "invoice generator no account",
    "free invoice template pdf",
    "make invoice online free",
  ],
  alternates: { canonical: "https://lancercalc.com/invoice-generator" },
  openGraph: {
    title: "Free Invoice Generator — No Sign-Up, No Watermark",
    description:
      "Make a professional invoice in seconds. Logo, line items, tax, discount, paid stamp — download as PDF free. No account. No watermark.",
    url: "https://lancercalc.com/invoice-generator",
  },
};

const faqs = [
  {
    q: "Is this invoice generator really free with no watermark?",
    a: "Yes — completely free, forever. We never add a watermark or branding to your PDF (other than a small 'Generated with LancerCalc.com' footer, which you can replace with your own notes). No sign-up, no credit card, no trial. Unlike InvoiceSimple's free tier which watermarks PDFs, LancerCalc does not. This is one of our core promises.",
  },
  {
    q: "How do I download my invoice as a PDF?",
    a: "Click the 'Download PDF' button. Your browser's print dialog will open — select 'Save as PDF' (or 'Microsoft Print to PDF' on Windows) as the destination. This uses your browser's built-in PDF engine, which produces a clean, print-quality PDF at no cost.",
  },
  {
    q: "Can I add my logo to the invoice?",
    a: "Yes. Click '+ Add Logo' in the From section, upload any image file (PNG, JPG, SVG), and it appears instantly on the live preview. Your logo stays private — it's loaded directly in your browser and never uploaded to our servers.",
  },
  {
    q: "What tax types does this support — VAT, GST, Sales Tax?",
    a: "The tax label is fully customizable. Type 'VAT', 'GST', 'Sales Tax', 'HST', or anything you need. Set the rate as a percentage and the calculator applies it to the subtotal after any discount. You can also turn tax off entirely if you're in a no-tax situation.",
  },
  {
    q: "Is my invoice data saved anywhere?",
    a: "No. Everything stays in your browser — your business name, client details, line items, and logo are never sent to our servers. We don't store, track, or have access to any of your invoice data. Refresh the page and it resets. For recurring invoices, keep this tab open or save your PDF as a reference.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lancercalc.com" },
    { "@type": "ListItem", "position": 2, "name": "Invoice Generator", "item": "https://lancercalc.com/invoice-generator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Invoice Generator — No Sign-Up, No Watermark",
  "url": "https://lancercalc.com/invoice-generator",
  "description": "Create and download a professional invoice PDF for free. No watermark, no sign-up. Add logo, custom tax (VAT/GST), discount, and PAID stamp. Free freelance invoice template.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function InvoiceGeneratorPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

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
            <span className="font-semibold" style={{ color: "#A89EFF" }}>Invoice Generator</span>
          </div>

          {/* Two-column hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="section-label">Invoice Tool</div>
              <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.08] tracking-tight mb-4 text-white">
                Free Invoice Generator
                <span style={{
                  background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}> No Sign-Up, No Watermark</span>
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
                Fill in your details, add line items, and download a professional
                PDF invoice — in under 60 seconds. Free forever.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["No watermark", "No sign-up", "Logo upload", "Custom tax (VAT/GST)", "Discount field", "PAID stamp", "6 currencies", "Live preview"].map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-4 py-1.5 rounded-full border"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — floating mini invoice preview card */}
            <div className="hidden lg:flex justify-center">
              <div style={{ transform: "rotate(-1.5deg)", filter: "drop-shadow(0 20px 60px rgba(107,92,231,0.40))" }}>
                <div className="rounded-2xl p-5 w-[290px]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}>

                  {/* Invoice header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(255,255,255,0.35)" }}>Invoice</p>
                      <p className="text-[13px] font-bold text-white">#INV-0042</p>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(16,185,129,0.20)", color: "#34D399", border: "1px solid rgba(16,185,129,0.30)" }}>
                      PAID
                    </span>
                  </div>

                  <div className="border-b mb-3" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

                  {/* From / To */}
                  <div className="flex justify-between mb-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wide mb-1" style={{ color: "rgba(255,255,255,0.30)" }}>From</p>
                      <p className="text-[11px] font-semibold text-white">Alex Johnson</p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.40)" }}>alex@studio.co</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-bold uppercase tracking-wide mb-1" style={{ color: "rgba(255,255,255,0.30)" }}>To</p>
                      <p className="text-[11px] font-semibold text-white">Acme Corp</p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.40)" }}>billing@acme.com</p>
                    </div>
                  </div>

                  <div className="border-b mb-3" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

                  {/* Line items */}
                  {[
                    ["Web design (40 hrs)", "$4,800"],
                    ["Brand identity kit", "$1,200"],
                    ["Revisions (3 rounds)", "$600"],
                  ].map(([desc, amt]) => (
                    <div key={desc} className="flex justify-between items-center py-1.5"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.50)" }}>{desc}</span>
                      <span className="text-[10px] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>{amt}</span>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="mt-3 rounded-xl p-4"
                    style={{ background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)", boxShadow: "0 8px 24px rgba(107,92,231,0.50)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: "rgba(255,255,255,0.65)" }}>Total due</p>
                    <p className="text-[32px] font-extrabold text-white leading-none">
                      $6,600
                      <span className="text-[13px] font-semibold ml-1" style={{ color: "rgba(255,255,255,0.60)" }}>USD</span>
                    </p>
                    <p className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>Due: Mar 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Generator ── */}
      <section className="py-12 md:py-16" style={{ background: "#EEF0FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <InvoiceGenerator />
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Comparison</div>
          <div className="section-title">Why LancerCalc Invoice Generator?</div>
          <div className="rounded-2xl border border-[#E6E9FF] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#EEF0FF", borderBottom: "1px solid #E6E9FF" }}>
                  <th className="text-left px-5 py-4 font-semibold" style={{ color: "#5A6178" }}>Feature</th>
                  <th className="text-center px-5 py-4 font-semibold" style={{ color: "#6B5CE7" }}>LancerCalc</th>
                  <th className="text-center px-5 py-4 font-semibold" style={{ color: "#5A6178" }}>InvoiceSimple Free</th>
                  <th className="text-center px-5 py-4 font-semibold" style={{ color: "#5A6178" }}>invoice-generator.com</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#F0F1F5]">
                {[
                  ["No sign-up required",        "✅", "❌ (account needed)", "✅"],
                  ["No watermark on PDF",         "✅", "❌ (paid to remove)", "✅"],
                  ["Logo upload",                 "✅", "✅", "❌"],
                  ["Custom tax label (VAT/GST)",  "✅", "❌", "❌"],
                  ["Discount field (% or fixed)", "✅", "❌", "❌"],
                  ["PAID stamp",                  "✅", "❌", "❌"],
                  ["Multiple currencies",         "✅", "❌", "✅"],
                  ["Live preview",                "✅", "❌", "❌"],
                  ["Privacy (no server upload)",  "✅", "❌", "✅"],
                  ["Always free, no limit",       "✅", "❌ (50/mo cap)", "✅"],
                ].map(([feat, lc, is, ig]) => (
                  <tr key={feat}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: "#0A0F1E" }}>{feat}</td>
                    <td className="px-5 py-3.5 text-center font-semibold text-emerald-600">{lc}</td>
                    <td className="px-5 py-3.5 text-center" style={{ color: "#5A6178" }}>{is}</td>
                    <td className="px-5 py-3.5 text-center" style={{ color: "#5A6178" }}>{ig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Invoice Template PDF section (SEO: targets "freelance invoice template pdf") ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Free Invoice Template</div>
          <h2 className="section-title">Free Freelance Invoice Template — Download as PDF Instantly</h2>
          <p className="text-[15px] leading-relaxed mb-8 max-w-[720px]" style={{ color: "#5A6178" }}>
            Looking for a freelance invoice template you can download as a PDF? You found it. Fill in your details above and click Download PDF — your browser generates a clean, print-quality PDF file on the spot. No file uploads, no servers, no watermarks. Works as an invoice template for designers, developers, consultants, writers, and any other freelancer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🖨️", title: "Download as PDF", body: "One click — your browser's print engine generates a print-quality PDF. No third-party software needed." },
              { icon: "🏷️", title: "Custom tax label", body: "Type VAT, GST, HST, Sales Tax — or leave it blank. Works for US, UK, Canada, Australia, and more." },
              { icon: "🖼️", title: "Logo upload", body: "Add your business logo in PNG, JPG, or SVG. It appears instantly on the live preview and in your PDF." },
              { icon: "✅", title: "PAID stamp", body: "Mark any invoice as PAID with a single click — perfect for record-keeping and sending final receipts." },
            ].map((item) => (
              <div key={item.title} className="step-card">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[14px] mb-2" style={{ color: "#0A0F1E" }}>{item.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20" style={{ background: "#F4F5FF" }}>
        <div className="max-w-[760px] mx-auto px-4 sm:px-8">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently asked questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <BottomCTA
        source="invoice-generator"
        emailHeading="Free Invoice & Tax Tips for Freelancers"
        relatedTools={[
          { href: "/freelance-tax-calculator", emoji: "🧾", title: "Freelance Tax Calculator" },
          { href: "/hourly-rate-calculator", emoji: "⏱️", title: "Hourly Rate Calculator" },
          { href: "/1099-vs-w2-calculator", emoji: "⚖️", title: "1099 vs W-2 Calculator" },
        ]}
      />
    </div>
  );
}
