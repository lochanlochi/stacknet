import type { Metadata, Viewport } from "next";
import { Manrope, DM_Mono, Instrument_Serif } from "next/font/google";
import { founder, contact } from "@/lib/data";
import "./globals.css";
import "./components.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const SITE_URL = "https://stacknet.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Stacknet.dev — Web Development & AI Product Studio",
  description:
    "Stacknet.dev is a web development and AI product studio building edge-fast, AI-ready websites, web applications and AI-powered digital products on modern and latest web technologies.",
  keywords: [
    "web development studio",
    "AI product studio",
    "AI product development",
    "AI-powered applications",
    "web applications",
    "SaaS development",
    "modern web development",
    "AI-ready websites",
    "edge-rendered websites",
    "high-performance websites",
    "Core Web Vitals",
  ],
  authors: [{ name: "Stacknet.dev" }],
  creator: "Stacknet.dev",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Stacknet.dev — Web Development & AI Product Studio",
    description:
      "Stacknet.dev is a web development and AI product studio building edge-fast, AI-ready websites, web applications and AI-powered digital products on modern and latest web technologies.",
    siteName: "Stacknet.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stacknet.dev — Web Development & AI Product Studio",
    description:
      "Stacknet.dev is a web development and AI product studio building edge-fast, AI-ready websites, web applications and AI-powered digital products on modern and latest web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0a",
  width: "device-width",
  initialScale: 1,
};

const founderEntity = {
  "@type": "Person",
  name: founder,
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: "Stacknet.dev", url: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stacknet.dev",
  url: SITE_URL,
  description:
    "Stacknet.dev is a web development and AI product studio building edge-fast, AI-ready websites, web applications and AI-powered digital products on modern and latest web technologies.",
  logo: `${SITE_URL}/stacknet-logo.png`,
  email: contact.email,
  telephone: "+91-8073919088",
  founder: founderEntity,
  founders: [founderEntity],
  employee: [founderEntity],
  sameAs: ["https://github.com/lochanlochi/stacknet"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
