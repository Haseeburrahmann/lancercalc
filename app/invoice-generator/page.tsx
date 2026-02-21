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
      <section className="bg-gradient-to-br from-slate-900 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex items-center gap-2 text-brand-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span>Invoice Generator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Free Invoice Generator
            <span className="block text-brand-400 text-2xl sm:text-3xl font-semibold mt-1">No sign-up · No watermark · Download PDF</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Fill in your details, add line items, and download a professional
            PDF invoice — in under 60 seconds. Free forever.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["No watermark","No sign-up","Logo upload","Custom tax (VAT/GST)","Discount field","PAID stamp","6 currencies","Live preview"].map((tag) => (
              <span key={tag} className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Generator ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <InvoiceGenerator />
      </section>

      {/* ── Why this one ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Why LancerCalc Invoice Generator?</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Feature</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">LancerCalc</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">InvoiceSimple Free</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">invoice-generator.com</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
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
                    <td className="px-4 py-3 text-slate-700">{feat}</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-600">{lc}</td>
                    <td className="px-4 py-3 text-center text-slate-500">{is}</td>
                    <td className="px-4 py-3 text-center text-slate-500">{ig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related tools ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Related calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/freelance-tax-calculator" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm">
              🧾 Freelance Tax Calculator
            </Link>
            <Link href="/hourly-rate-calculator" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm">
              ⏱️ Hourly Rate Calculator
            </Link>
            <Link href="/1099-vs-w2-calculator" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm">
              ⚖️ 1099 vs W-2 Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
