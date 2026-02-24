"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid #E6E9FF" }}>
      {faqs.map((faq, i) => (
        <div key={faq.q} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #E6E9FF" : "none" }}>
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white transition-colors hover:bg-[#F9F9FF]"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-bold text-[15px] pr-4 leading-snug" style={{ color: "#0A0F1E" }}>
              {faq.q}
            </span>
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
              style={{
                background: open === i ? "#6B5CE7" : "#EEF0FF",
                border: `1.5px solid ${open === i ? "#6B5CE7" : "#E6E9FF"}`,
              }}
            >
              <svg
                className="w-3.5 h-3.5 transition-transform"
                style={{ color: open === i ? "#fff" : "#6B5CE7" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                {open === i ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
                )}
              </svg>
            </span>
          </button>

          {open === i && (
            <div
              className="px-6 pb-6 bg-white"
              style={{ borderTop: "1px solid #F0F1FF" }}
            >
              <p className="text-[14px] leading-relaxed pt-3" style={{ color: "#5A6178" }}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
