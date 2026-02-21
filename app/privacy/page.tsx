import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LancerCalc",
  description: "LancerCalc privacy policy. Your financial data never leaves your browser — we don't collect, store, or sell any of your information.",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Data we do NOT collect",
      body: `LancerCalc calculators run entirely in your browser. When you enter income figures, tax rates, invoice amounts, or any other financial information, that data is never transmitted to our servers. We have no database of user inputs. We cannot see what numbers you enter. When you close or refresh the page, your data is gone.`,
    },
    {
      title: "Analytics",
      body: `We may use privacy-respecting, cookie-free analytics (such as Plausible Analytics) to understand aggregate traffic patterns — for example, which tools are most used, which countries visitors come from, and which pages are most popular. This data is anonymised and never tied to individuals. No personal data is collected for analytics purposes.`,
    },
    {
      title: "Cookies",
      body: `LancerCalc does not use advertising cookies, tracking cookies, or any third-party cookies that follow you across the web. Any cookies set are strictly functional (e.g., remembering a theme preference) and contain no personal information.`,
    },
    {
      title: "Invoice Generator",
      body: `When you upload a logo image in the Invoice Generator, that image is loaded directly into your browser's memory using the FileReader API. It is never uploaded to our servers. When you generate a PDF, that PDF is produced entirely in your browser via the browser's built-in print engine. No invoice data leaves your device.`,
    },
    {
      title: "Third-party services",
      body: `LancerCalc is hosted on Vercel. Vercel may process your IP address and request metadata as part of serving our website, in accordance with their own privacy policy (vercel.com/legal/privacy-policy). We do not share any user data with advertisers or data brokers.`,
    },
    {
      title: "Children's privacy",
      body: `LancerCalc is not directed at children under the age of 13. We do not knowingly collect any personal information from children.`,
    },
    {
      title: "Changes to this policy",
      body: `We may update this privacy policy from time to time. Material changes will be noted on this page with an updated effective date. Continued use of LancerCalc after changes constitutes acceptance of the updated policy.`,
    },
    {
      title: "Contact",
      body: `Questions about this privacy policy? You can reach us via the feedback link in the site footer.`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex items-center gap-2 text-brand-600 text-sm font-medium mb-6">
          <Link href="/" className="hover:text-brand-700 transition-colors">← Back to LancerCalc</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Effective date: January 1, 2025 · Last updated: February 2026</p>

        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-10 flex gap-3">
          <span className="text-xl mt-0.5">🔒</span>
          <div>
            <p className="font-semibold text-brand-900 mb-1">Short version</p>
            <p className="text-sm text-brand-800 leading-relaxed">
              Your financial data <strong>never leaves your browser</strong>. We don&apos;t store, sell, or have access to any numbers you enter into our calculators or invoice generator. Ever.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="font-bold text-slate-900 text-lg mb-3">{s.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
