import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── Replace with your GA4 Measurement ID from analytics.google.com ──────────
const GA_ID = "G-C9E0KPBWME";

export const metadata: Metadata = {
  metadataBase: new URL("https://lancercalc.com"),
  title: {
    default: "LancerCalc — Free Financial Calculators for Freelancers",
    template: "%s | LancerCalc",
  },
  description:
    "Free, fast financial tools built for freelancers. Calculate self-employment tax, find your ideal hourly rate, compare 1099 vs W-2, and generate invoices — no sign-up required.",
  keywords: [
    "freelance tax calculator",
    "self employment tax calculator 2025",
    "1099 tax calculator",
    "freelancer hourly rate calculator",
    "1099 vs w2 calculator",
    "free invoice generator no watermark",
    "freelance finance tools",
    "quarterly tax estimator freelancer",
    "how much tax do freelancers pay",
    "self employed tax calculator",
  ],
  authors: [{ name: "LancerCalc" }],
  creator: "LancerCalc",
  alternates: {
    canonical: "https://lancercalc.com",
  },
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
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-16x16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicon-32x32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/icon-192.png",       sizes: "192x192",type: "image/png" },
      { url: "/icon-512.png",       sizes: "512x512",type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
        <link rel="icon"             href="/favicon.ico" sizes="any" />
        <link rel="icon"             href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon"             href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest"        href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color"     content="#0A0F1E" />
        <meta name="google-site-verification" content="SC4nTGns8dCZ_jUEMjn9LuZUn6vip3Ybp8qXLa_PNMI" />
      </head>
      <body>
        {/* ── Google Analytics 4 ───────────────────────────────────────── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}</Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
