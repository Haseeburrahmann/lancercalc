"use client";

import { useState, useRef, useCallback } from "react";

// ── Types ───────────────────────────────────────────────────────────────────
interface LineItem {
  id: string;
  description: string;
  qty: string;
  rate: string;
}

type Currency = { symbol: string; code: string; label: string };
type PaymentTerm = { label: string; days: number | null };

// ── Constants ───────────────────────────────────────────────────────────────
const CURRENCIES: Currency[] = [
  { symbol: "$", code: "USD", label: "USD — US Dollar" },
  { symbol: "£", code: "GBP", label: "GBP — British Pound" },
  { symbol: "€", code: "EUR", label: "EUR — Euro" },
  { symbol: "$", code: "CAD", label: "CAD — Canadian Dollar" },
  { symbol: "$", code: "AUD", label: "AUD — Australian Dollar" },
  { symbol: "₹", code: "INR", label: "INR — Indian Rupee" },
];

const PAYMENT_TERMS: PaymentTerm[] = [
  { label: "Due on Receipt", days: 0 },
  { label: "Net 7",          days: 7 },
  { label: "Net 15",         days: 15 },
  { label: "Net 30",         days: 30 },
  { label: "Net 45",         days: 45 },
  { label: "Net 60",         days: 60 },
  { label: "Custom",         days: null },
];

const DEFAULT_NOTES =
  "Payment is due within the agreed terms. Late payments may incur a 1.5% monthly fee.\nThank you for your business!";

function genId() { return Math.random().toString(36).slice(2, 9); }

function fmt(n: number, sym: string): string {
  return sym + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function today(): string {
  return new Date().toISOString().split("T")[0];
}
function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}
function fmtDate(dateStr: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[parseInt(m)-1]} ${parseInt(d)}, ${y}`;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function InvoiceGenerator() {
  // From (sender)
  const [fromName,    setFromName]    = useState("Your Name / Business");
  const [fromEmail,   setFromEmail]   = useState("you@email.com");
  const [fromPhone,   setFromPhone]   = useState("");
  const [fromAddress, setFromAddress] = useState("");

  // To (client)
  const [toName,    setToName]    = useState("Client Name");
  const [toEmail,   setToEmail]   = useState("client@email.com");
  const [toAddress, setToAddress] = useState("");

  // Invoice meta
  const [invoiceNo, setInvoiceNo]       = useState("INV-001");
  const [invoiceDate, setInvoiceDate]   = useState(today());
  const [termKey, setTermKey]           = useState("Net 30");
  const [customDue, setCustomDue]       = useState("");
  const [currency, setCurrency]         = useState<Currency>(CURRENCIES[0]);

  // Logo
  const [logoUrl, setLogoUrl]   = useState<string | null>(null);
  const fileRef                 = useRef<HTMLInputElement>(null);

  // Line items
  const [items, setItems] = useState<LineItem[]>([
    { id: genId(), description: "Service / Project Description", qty: "1", rate: "0.00" },
  ]);

  // Financials
  const [discountType,  setDiscountType]  = useState<"none" | "pct" | "fixed">("none");
  const [discountVal,   setDiscountVal]   = useState("0");
  const [taxEnabled,    setTaxEnabled]    = useState(true);
  const [taxLabel,      setTaxLabel]      = useState("Tax");
  const [taxRate,       setTaxRate]       = useState("0");

  // Notes
  const [notes, setNotes] = useState(DEFAULT_NOTES);

  // Paid stamp
  const [paid, setPaid] = useState(false);

  // ── Computed ──────────────────────────────────────────────────────────────
  const subtotal = items.reduce((acc, item) => {
    const q = parseFloat(item.qty) || 0;
    const r = parseFloat(item.rate) || 0;
    return acc + q * r;
  }, 0);

  let discountAmt = 0;
  if (discountType === "pct")   discountAmt = subtotal * ((parseFloat(discountVal) || 0) / 100);
  if (discountType === "fixed") discountAmt = parseFloat(discountVal) || 0;

  const afterDiscount = subtotal - discountAmt;
  const taxAmt  = taxEnabled ? afterDiscount * ((parseFloat(taxRate) || 0) / 100) : 0;
  const total   = afterDiscount + taxAmt;

  // Due date
  const term = PAYMENT_TERMS.find(t => t.label === termKey)!;
  const dueDate = term.days === null
    ? customDue
    : term.days === 0 ? invoiceDate : addDays(invoiceDate, term.days);

  const sym = currency.symbol;

  // ── Logo upload ───────────────────────────────────────────────────────────
  const handleLogo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setLogoUrl(ev.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  // ── Line item helpers ─────────────────────────────────────────────────────
  const updateItem = (id: string, field: keyof LineItem, val: string) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, [field]: val } : it));
  };
  const addItem = () =>
    setItems(prev => [...prev, { id: genId(), description: "", qty: "1", rate: "0.00" }]);
  const removeItem = (id: string) =>
    setItems(prev => prev.filter(it => it.id !== id));

  // ── Print ─────────────────────────────────────────────────────────────────
  const handlePrint = () => window.print();

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Print styles ─────────────────────────────────────────────────── */}
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 10mm; }
          /* Collapse body height to kill blank pages caused by min-h-screen */
          html, body {
            height: 1px !important;
            min-height: 0 !important;
            overflow: hidden !important;
          }
          body * { visibility: hidden !important; }
          #invoice-preview, #invoice-preview * { visibility: visible !important; }
          #invoice-preview {
            position: fixed !important;
            top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 8mm !important;
            background: white !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            border: none !important;
            overflow: hidden !important;
            font-size: 11px !important;
          }
          #invoice-preview .text-5xl,
          #invoice-preview .text-4xl { font-size: 18px !important; }
          #invoice-preview .text-2xl { font-size: 15px !important; }
          #invoice-preview .text-xl  { font-size: 13px !important; }
          #invoice-preview .text-lg  { font-size: 12px !important; }
          #invoice-preview .mb-8     { margin-bottom: 12px !important; }
          #invoice-preview .mb-6     { margin-bottom: 8px !important; }
          #invoice-preview .p-8      { padding: 0 !important; }
          #invoice-preview .py-2\\.5 { padding-top: 4px !important; padding-bottom: 4px !important; }
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* ═══════════════ LEFT: FORM ═══════════════ */}
        <div className="space-y-5 no-print">

          {/* Currency */}
          <div className="calc-card">
            <h2 className="text-base font-bold text-slate-900 mb-4">Invoice Settings</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Currency</label>
                <select
                  value={currency.code}
                  onChange={e => setCurrency(CURRENCIES.find(c => c.code === e.target.value)!)}
                  className="select-field"
                >
                  {CURRENCIES.map(c => (
                    <option key={c.code} value={c.code}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Invoice #</label>
                <input
                  type="text"
                  value={invoiceNo}
                  onChange={e => setInvoiceNo(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="label">Invoice date</label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={e => setInvoiceDate(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="label">Payment terms</label>
                <select
                  value={termKey}
                  onChange={e => setTermKey(e.target.value)}
                  className="select-field"
                >
                  {PAYMENT_TERMS.map(t => (
                    <option key={t.label} value={t.label}>{t.label}</option>
                  ))}
                </select>
              </div>
              {termKey === "Custom" && (
                <div className="col-span-2">
                  <label className="label">Custom due date</label>
                  <input
                    type="date"
                    value={customDue}
                    onChange={e => setCustomDue(e.target.value)}
                    className="input-field"
                  />
                </div>
              )}
            </div>
          </div>

          {/* From */}
          <div className="calc-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900">From (You)</h2>
              <button
                onClick={() => fileRef.current?.click()}
                className="text-xs text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1.5 border border-brand-200 rounded-lg px-3 py-1.5 hover:bg-brand-50 transition-all"
              >
                {logoUrl ? "Change Logo" : "+ Add Logo"}
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleLogo} />
            </div>
            <div className="space-y-3">
              <input type="text" placeholder="Your name or business name" value={fromName} onChange={e => setFromName(e.target.value)} className="input-field" />
              <input type="email" placeholder="Email address" value={fromEmail} onChange={e => setFromEmail(e.target.value)} className="input-field" />
              <input type="text" placeholder="Phone (optional)" value={fromPhone} onChange={e => setFromPhone(e.target.value)} className="input-field" />
              <textarea placeholder="Address (optional)" value={fromAddress} onChange={e => setFromAddress(e.target.value)} rows={2} className="input-field resize-none" />
            </div>
          </div>

          {/* To */}
          <div className="calc-card">
            <h2 className="text-base font-bold text-slate-900 mb-4">Bill To (Client)</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Client name or company" value={toName} onChange={e => setToName(e.target.value)} className="input-field" />
              <input type="email" placeholder="Client email" value={toEmail} onChange={e => setToEmail(e.target.value)} className="input-field" />
              <textarea placeholder="Client address (optional)" value={toAddress} onChange={e => setToAddress(e.target.value)} rows={2} className="input-field resize-none" />
            </div>
          </div>

          {/* Line items */}
          <div className="calc-card">
            <h2 className="text-base font-bold text-slate-900 mb-4">Line Items</h2>
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-start">
                  <div className="col-span-6">
                    {idx === 0 && <label className="label text-xs mb-1">Description</label>}
                    <input
                      type="text"
                      placeholder="Service or item description"
                      value={item.description}
                      onChange={e => updateItem(item.id, "description", e.target.value)}
                      className="input-field text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    {idx === 0 && <label className="label text-xs mb-1">Qty</label>}
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="1"
                      value={item.qty}
                      onChange={e => updateItem(item.id, "qty", e.target.value)}
                      className="input-field text-sm text-center"
                    />
                  </div>
                  <div className="col-span-3">
                    {idx === 0 && <label className="label text-xs mb-1">Rate ({sym})</label>}
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="0.00"
                      value={item.rate}
                      onChange={e => updateItem(item.id, "rate", e.target.value)}
                      className="input-field text-sm"
                    />
                  </div>
                  <div className={`col-span-1 flex items-center ${idx === 0 ? "mt-6" : ""}`}>
                    {items.length > 1 && (
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-300 hover:text-red-400 transition-colors text-lg font-bold w-full text-center"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={addItem}
              className="mt-4 text-sm text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1.5"
            >
              + Add line item
            </button>
          </div>

          {/* Discount & Tax */}
          <div className="calc-card">
            <h2 className="text-base font-bold text-slate-900 mb-4">Discount & Tax</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Discount</label>
                <select
                  value={discountType}
                  onChange={e => setDiscountType(e.target.value as "none" | "pct" | "fixed")}
                  className="select-field mb-2"
                >
                  <option value="none">No discount</option>
                  <option value="pct">Percentage (%)</option>
                  <option value="fixed">Fixed amount ({sym})</option>
                </select>
                {discountType !== "none" && (
                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder={discountType === "pct" ? "e.g. 10" : "e.g. 50"}
                    value={discountVal}
                    onChange={e => setDiscountVal(e.target.value)}
                    className="input-field"
                  />
                )}
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="label mb-0">Tax</label>
                  <button
                    onClick={() => setTaxEnabled(v => !v)}
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-colors ${
                      taxEnabled ? "bg-brand-100 text-brand-700" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {taxEnabled ? "On" : "Off"}
                  </button>
                </div>
                {taxEnabled && (
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Tax label (e.g. VAT, GST, Sales Tax)"
                      value={taxLabel}
                      onChange={e => setTaxLabel(e.target.value)}
                      className="input-field"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="Rate, e.g. 10"
                        value={taxRate}
                        onChange={e => setTaxRate(e.target.value)}
                        className="input-field pr-8"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="calc-card">
            <h2 className="text-base font-bold text-slate-900 mb-4">Notes / Payment Instructions</h2>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={4}
              placeholder="Payment terms, bank details, thank-you message..."
              className="input-field resize-none text-sm"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button onClick={handlePrint} className="btn-primary flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
            <button
              onClick={() => setPaid(v => !v)}
              className={`flex items-center gap-2 font-semibold px-5 py-3 rounded-xl border transition-all text-sm ${
                paid
                  ? "bg-emerald-50 border-emerald-400 text-emerald-700 hover:bg-emerald-100"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {paid ? "✓ Remove PAID stamp" : "✓ Mark as PAID"}
            </button>
          </div>
        </div>

        {/* ═══════════════ RIGHT: LIVE PREVIEW ═══════════════ */}
        <div className="sticky top-4">
          <div className="no-print">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Live Preview</p>
          </div>
          <div
            id="invoice-preview"
            className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 relative overflow-hidden"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            {/* PAID stamp */}
            {paid && (
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ zIndex: 10 }}
              >
                <div
                  style={{
                    border: "6px solid #16a34a",
                    color: "#16a34a",
                    fontSize: "72px",
                    fontWeight: 900,
                    letterSpacing: "0.15em",
                    padding: "8px 24px",
                    borderRadius: "8px",
                    opacity: 0.18,
                    transform: "rotate(-20deg)",
                    userSelect: "none",
                    lineHeight: 1,
                  }}
                >
                  PAID
                </div>
              </div>
            )}

            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                {logoUrl
                  ? <img src={logoUrl} alt="Logo" className="h-14 max-w-[160px] object-contain mb-2" />
                  : <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-lg">
                        {fromName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                }
                <div className="text-sm font-bold text-slate-900">{fromName || "Your Name"}</div>
                {fromEmail && <div className="text-xs text-slate-500">{fromEmail}</div>}
                {fromPhone && <div className="text-xs text-slate-500">{fromPhone}</div>}
                {fromAddress && (
                  <div className="text-xs text-slate-500 whitespace-pre-line mt-0.5">{fromAddress}</div>
                )}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900">INVOICE</div>
                <div className="text-sm font-semibold text-brand-600 mt-1">{invoiceNo}</div>
                <div className="text-xs text-slate-500 mt-2">
                  <span className="text-slate-400">Date: </span>{fmtDate(invoiceDate)}
                </div>
                {dueDate && (
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-400">Due: </span>
                    <span className={new Date(dueDate) < new Date() && !paid ? "text-red-500 font-semibold" : ""}>
                      {fmtDate(dueDate)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bill To */}
            <div className="bg-slate-50 rounded-xl px-5 py-4 mb-6">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Bill To</div>
              <div className="font-bold text-slate-900 text-sm">{toName || "Client Name"}</div>
              {toEmail && <div className="text-xs text-slate-500">{toEmail}</div>}
              {toAddress && <div className="text-xs text-slate-500 whitespace-pre-line mt-0.5">{toAddress}</div>}
            </div>

            {/* Line items table */}
            <table className="w-full text-sm mb-4">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Description</th>
                  <th className="text-center pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wide w-12">Qty</th>
                  <th className="text-right pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wide w-20">Rate</th>
                  <th className="text-right pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wide w-24">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  const q = parseFloat(item.qty) || 0;
                  const r = parseFloat(item.rate) || 0;
                  const amt = q * r;
                  return (
                    <tr key={item.id} className="border-b border-slate-100">
                      <td className="py-2.5 text-slate-700 pr-4">{item.description || <span className="text-slate-300 italic">Description</span>}</td>
                      <td className="py-2.5 text-center text-slate-500">{item.qty}</td>
                      <td className="py-2.5 text-right text-slate-500">{fmt(r, sym)}</td>
                      <td className="py-2.5 text-right font-medium text-slate-800">{fmt(amt, sym)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Totals */}
            <div className="ml-auto w-64 space-y-1.5 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-medium text-slate-700">{fmt(subtotal, sym)}</span>
              </div>
              {discountType !== "none" && discountAmt > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Discount {discountType === "pct" ? `(${discountVal}%)` : ""}
                  </span>
                  <span className="text-red-500">−{fmt(discountAmt, sym)}</span>
                </div>
              )}
              {taxEnabled && parseFloat(taxRate) > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{taxLabel || "Tax"} ({taxRate}%)</span>
                  <span className="text-slate-700">{fmt(taxAmt, sym)}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-2 border-t-2 border-slate-200 mt-2">
                <span className="font-bold text-slate-900 text-base">Total</span>
                <span className="font-bold text-brand-600 text-xl">{fmt(total, sym)}</span>
              </div>
            </div>

            {/* Notes */}
            {notes && (
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Notes</div>
                <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-line">{notes}</p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-300">Generated with LancerCalc.com · Free forever</span>
              <span className="text-xs font-semibold text-slate-400">{currency.code}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center mt-3 no-print">
            Click <strong>Download PDF</strong> → your browser&apos;s print dialog → Save as PDF.
            No watermarks. No sign-up.
          </p>
        </div>
      </div>
    </>
  );
}
