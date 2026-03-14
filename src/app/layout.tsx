import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mapletechlabs.com"),
  title: {
    default: "Mapletech Labs | Custom Software Development Company",
    template: "%s | Mapletech Labs",
  },
  description:
    "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Your strategic technology partner in Toronto, Canada.",
  keywords:
    "custom software development, web development, mobile app development, AI solutions, blockchain, Toronto",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.mapletechlabs.com",
    siteName: "Mapletech Labs",
    title: "Mapletech Labs | Custom Software Development Company",
    description:
      "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Your strategic technology partner in Toronto, Canada.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Mapletech Labs - Custom Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mapletechlabs",
    creator: "@mapletechlabs",
    title: "Mapletech Labs | Custom Software Development Company",
    description:
      "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Your strategic technology partner in Toronto, Canada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mapletechlabs.com",
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "theme-color": "#000000",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mapletech Labs",
  url: "https://www.mapletechlabs.com",
  logo: "https://www.mapletechlabs.com/logo.png",
  description:
    "Custom software development company in Toronto, Canada specializing in web apps, mobile apps, AI solutions, and blockchain platforms.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.linkedin.com/company/mapletechlabs",
    "https://twitter.com/mapletechlabs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "French"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
