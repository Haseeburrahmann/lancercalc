import type { Metadata } from "next";
import InvoiceGenerator from "@/components/calculators/InvoiceGenerator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Invoice Generator 2025 — No Sign-Up, No Watermark | LancerCalc",
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
  alternates: {
    canonical: "https://lancercalc.com/invoice-generator",
  },
  openGraph: {
    title: "Free Invoice Generator — No Sign-Up, No Watermark | LancerCalc",
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

export default function InvoiceGeneratorPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Page header ───────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#8B90A0] mb-6">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 text-[#C8CAD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-brand font-semibold">Invoice Generator</span>
          </div>

          <div className="max-w-[720px]">
            <div className="section-label">Invoice Tool</div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4" style={{ color: "#0A0F1E" }}>
              Free Invoice Generator
              <span className="text-brand"> No Sign-Up, No Watermark</span>
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#5A6178" }}>
              Fill in your details, add line items, and download a professional
              PDF invoice — in under 60 seconds. Free forever.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["No watermark","No sign-up","Logo upload","Custom tax (VAT/GST)","Discount field","PAID stamp","6 currencies","Live preview"].map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Generator ─────────────────────────────────────────────────── */}
      <section className="bg-[#F7F8FB] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <InvoiceGenerator />
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Comparison</div>
          <div className="section-title">Why LancerCalc Invoice Generator?</div>
          <div className="rounded-2xl border border-[#E8EAF0] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F7F8FB] border-b border-[#E8EAF0]">
                  <th className="text-left px-5 py-4 font-semibold text-[#5A6178]">Feature</th>
                  <th className="text-center px-5 py-4 font-semibold text-[#5A6178]">LancerCalc</th>
                  <th className="text-center px-5 py-4 font-semibold text-[#5A6178]">InvoiceSimple Free</th>
                  <th className="text-center px-5 py-4 font-semibold text-[#5A6178]">invoice-generator.com</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#F0F1F5]">
                {[
                  ["No sign-up required",        "✅","❌ (account needed)","✅"],
                  ["No watermark on PDF",         "✅","❌ (paid to remove)","✅"],
                  ["Logo upload",                 "✅","✅","❌"],
                  ["Custom tax label (VAT/GST)",  "✅","❌","❌"],
                  ["Discount field (% or fixed)", "✅","❌","❌"],
                  ["PAID stamp",                  "✅","❌","❌"],
                  ["Multiple currencies",         "✅","❌","✅"],
                  ["Live preview",                "✅","❌","❌"],
                  ["Privacy (no server upload)",  "✅","❌","✅"],
                  ["Always free, no limit",       "✅","❌ (50/mo cap)","✅"],
                ].map(([feat, lc, is, ig]) => (
                  <tr key={feat}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: "#0A0F1E" }}>{feat}</td>
                    <td className="px-5 py-3.5 text-center font-semibold text-emerald-600">{lc}</td>
                    <td className="px-5 py-3.5 text-center text-[#5A6178]">{is}</td>
                    <td className="px-5 py-3.5 text-center text-[#5A6178]">{ig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F8FB] py-16 md:py-20">
        <div className="max-w-[860px] mx-auto px-4 sm:px-8">
          <div className="section-label">FAQ</div>
          <div className="section-title">Frequently asked questions</div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <div className="px-6 py-5">
                  <h3 className="font-bold text-[15px] mb-2" style={{ color: "#0A0F1E" }}>{faq.q}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related tools ─────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Related Tools</div>
          <h2 className="text-[24px] font-extrabold tracking-tight mb-6" style={{ color: "#0A0F1E" }}>
            More free calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/freelance-tax-calculator" className="related-card">
              <div className="w-[42px] h-[42px] bg-[#F7F8FB] border border-[#E8EAF0] rounded-lg flex items-center justify-center text-lg flex-shrink-0">🧾</div>
              <div>
                <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>Freelance Tax Calculator</div>
                <div className="text-xs" style={{ color: "#8B90A0" }}>Estimate your self-employment tax</div>
              </div>
            </Link>
            <Link href="/hourly-rate-calculator" className="related-card">
              <div className="w-[42px] h-[42px] bg-[#F7F8FB] border border-[#E8EAF0] rounded-lg flex items-center justify-center text-lg flex-shrink-0">⏱️</div>
              <div>
                <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>Hourly Rate Calculator</div>
                <div className="text-xs" style={{ color: "#8B90A0" }}>Find your minimum hourly rate</div>
              </div>
            </Link>
            <Link href="/1099-vs-w2-calculator" className="related-card">
              <div className="w-[42px] h-[42px] bg-[#F7F8FB] border border-[#E8EAF0] rounded-lg flex items-center justify-center text-lg flex-shrink-0">⚖️</div>
              <div>
                <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>1099 vs W-2 Calculator</div>
                <div className="text-xs" style={{ color: "#8B90A0" }}>Compare contract vs salary</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
