import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LancerCalc — Free Financial Calculators for Freelancers",
    template: "%s | LancerCalc",
  },
  description:
    "Free, fast financial tools built for freelancers. Calculate self-employment tax, find your ideal hourly rate, compare 1099 vs W-2, and generate invoices — no sign-up required.",
  keywords: [
    "freelance tax calculator",
    "self employment tax calculator",
    "freelancer hourly rate calculator",
    "1099 tax calculator",
    "freelance finance tools",
    "quarterly tax estimator",
  ],
  authors: [{ name: "LancerCalc" }],
  creator: "LancerCalc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lancercalc.com",
    siteName: "LancerCalc",
    title: "LancerCalc — Free Financial Calculators for Freelancers",
    description:
      "Free financial tools for the world's 1.57 billion freelancers. No sign-up. No paywalls.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LancerCalc — Free Financial Calculators for Freelancers",
    description: "Free financial tools built for freelancers. No sign-up. No paywalls.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
