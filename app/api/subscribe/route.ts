import { NextRequest, NextResponse } from "next/server";

const SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbzr6qj5Q4U2VWKgtCGZeY6e4WPnKFVmM6Ky6s-5wfAMUgItkBHLD_r-vVDnuXzAhu73mA/exec";

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const res = await fetch(SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: source ?? "website" }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to save. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
