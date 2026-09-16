import type { Metadata, Viewport } from "next";
import { Manrope, DM_Mono, Instrument_Serif } from "next/font/google";
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
  title: "Stacknet.dev — Web Development Studio",
  description:
    "Stacknet.dev builds fast, elegant and scalable websites, web applications and digital products.",
  keywords: [
    "web development studio",
    "web applications",
    "SaaS development",
    "frontend engineering",
    "backend engineering",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Stacknet.dev" }],
  creator: "Stacknet.dev",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Stacknet.dev — Web Development Studio",
    description:
      "Stacknet.dev builds fast, elegant and scalable websites, web applications and digital products.",
    siteName: "Stacknet.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stacknet.dev — Web Development Studio",
    description:
      "Stacknet.dev builds fast, elegant and scalable websites, web applications and digital products.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stacknet.dev",
  url: SITE_URL,
  description:
    "Stacknet.dev builds fast, elegant and scalable websites, web applications and digital products.",
  email: "hello@stacknet.dev",
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
