import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | LancerCalc",
  description: "LancerCalc terms of use. Free financial calculators for freelancers — no warranties, no tax advice.",
};

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of terms",
      body: `By accessing or using LancerCalc (lancercalc.com), you agree to be bound by these Terms of Use. If you do not agree, please do not use the site. We reserve the right to update these terms at any time; continued use after changes constitutes acceptance.`,
    },
    {
      title: "No tax, legal, or financial advice",
      body: `LancerCalc provides calculators and tools for general informational and estimation purposes only. Nothing on this site constitutes tax advice, legal advice, financial advice, or accounting advice. The results produced by our calculators are estimates based on publicly available IRS data and simplified assumptions. They may not reflect your actual tax liability. Always consult a qualified tax professional, CPA, or financial advisor for advice specific to your situation.`,
    },
    {
      title: "Accuracy of calculations",
      body: `We make every effort to keep our calculators accurate and up to date with current IRS data (tax brackets, SE tax rates, Social Security wage bases, standard deductions). However, we do not guarantee the accuracy, completeness, or fitness for any particular purpose of any calculation result. Tax laws change, and individual circumstances vary. Use results as a starting point, not a final answer.`,
    },
    {
      title: "Free to use — no warranties",
      body: `LancerCalc is provided "as is" and "as available" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the site will be error-free, uninterrupted, or free of viruses.`,
    },
    {
      title: "Limitation of liability",
      body: `To the maximum extent permitted by law, LancerCalc and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of — or inability to use — this site or its calculators, including any tax underpayments, penalties, or interest incurred as a result of relying on our estimates.`,
    },
    {
      title: "Intellectual property",
      body: `All content, design, code, and text on LancerCalc is the property of LancerCalc and its developers. You may not reproduce, distribute, or create derivative works without prior written permission, except for personal, non-commercial use.`,
    },
    {
      title: "Links to external sites",
      body: `LancerCalc may link to IRS.gov, SSA.gov, and other third-party sources for reference. These links are provided for convenience. We are not responsible for the content or accuracy of external sites.`,
    },
    {
      title: "Governing law",
      body: `These terms are governed by the laws of the United States. Any disputes arising from your use of LancerCalc shall be resolved in accordance with applicable US law.`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex items-center gap-2 text-brand-600 text-sm font-medium mb-6">
          <Link href="/" className="hover:text-brand-700 transition-colors">← Back to LancerCalc</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Terms of Use</h1>
        <p className="text-slate-500 text-sm mb-10">Effective date: January 1, 2025 · Last updated: February 2026</p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-3">
          <span className="text-xl mt-0.5">⚠️</span>
          <div>
            <p className="font-semibold text-amber-900 mb-1">Key point</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              LancerCalc is a <strong>free estimation tool</strong>, not a tax advisor. Results are starting points for planning — always verify with a qualified tax professional before making financial decisions.
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
