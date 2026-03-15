import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "@/components/CookieConsent";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mapletechlabs.ca"),
  title: {
    default: "Mapletech Labs | Custom Software Development Company",
    template: "%s | Mapletech Labs",
  },
  description:
    "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Founded by Raman Makkar in Edmonton — ruling across Canada.",
  keywords:
    "custom software development, web development, mobile app development, AI solutions, blockchain, Edmonton, Canada",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mapletechlabs.ca",
    siteName: "Mapletech Labs",
    title: "Mapletech Labs | Custom Software Development Company",
    description:
      "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Founded by Raman Makkar in Edmonton — ruling across Canada.",
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
      "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Founded by Raman Makkar in Edmonton — ruling across Canada.",
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
    canonical: "https://mapletechlabs.ca",
  },
  verification: {
    google: "bk5xt83LIShhQ9QrejYXCOg9lXhZubSY9ksIEtYrIVs",
  },
  icons: {
    icon: "/Favicon.png",
    apple: "/Favicon.png",
  },
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Edmonton",
    "theme-color": "#000000",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mapletech Labs",
  url: "https://mapletechlabs.ca",
  logo: "https://mapletechlabs.ca/logo.png",
  description:
    "Custom software development company founded by Raman Makkar in Edmonton, Canada. 12 locations across Canada. Best agents from around the world working virtually.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.linkedin.com/company/canadamapletechlabs/",
    "https://www.facebook.com/Mapletechlabs/",
    "https://www.instagram.com/mapletechlabs/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "French"],
  },
  foundingDate: "2018",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "Alberta",
      addressCountry: "CA",
    },
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 25,
    maxValue: 50,
  },
  founder: {
    "@type": "Person",
    name: "Raman Makkar",
    jobTitle: "CEO & Founder",
    url: "https://mapletechlabs.ca/about",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Web Development",
        url: "https://mapletechlabs.ca/services/web-development",
      },
      {
        "@type": "OfferCatalog",
        name: "Mobile App Development",
        url: "https://mapletechlabs.ca/services/mobile-app-development",
      },
      {
        "@type": "OfferCatalog",
        name: "AI & Machine Learning",
        url: "https://mapletechlabs.ca/services/ai-ml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GT-PJ46RCMN');`,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LLHNY6HD88" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLHNY6HD88');`,
          }}
        />
      </head>
      <body className={poppins.className}>
        <a href="#main-content" className="sr-only-focusable">Skip to main content</a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-PJ46RCMN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
        <CookieConsent />
        <ClarityAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
