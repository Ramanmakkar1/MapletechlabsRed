import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import { previewRobots, siteOrigin } from "@/lib/seo/canonical";
import { BUSINESS, HQ_ADDRESS, LOCAL_BUSINESS_AREA_SERVED } from "@/lib/seo/business";
import { PROJECT_PRICING } from "@/data/pricing";
import "./globals.css";

// Bounded regeneration interval for repository-managed content.
export const revalidate = false; // repository content refreshes through deployment
// Explicit static-rendering contract for every repository-managed page.
export const dynamic = 'force-static';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: "Software Development Company in Canada | Mapletech Labs",
    template: "%s | Mapletech Labs",
  },
  description:
    "Mapletech Labs builds custom software, web and mobile apps, and AI solutions for Canadian businesses. Edmonton-based, serving clients across Canada.",
  keywords:
    "custom software development, web development, mobile app development, AI solutions, blockchain, Edmonton, Canada",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteOrigin(),
    siteName: "Mapletech Labs",
    title: "Software Development Company in Canada | Mapletech Labs",
    description:
      "Mapletech Labs builds custom software, web and mobile apps, and AI solutions for Canadian businesses. Edmonton-based, serving clients across Canada.",
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
  },
  // Preview / non-production deployments must never be indexed. Production
  // keeps the permissive directive. No `alternates.canonical` here on
  // purpose: a root canonical is inherited by every child page that does not
  // set its own, so each page declares its own self-canonical instead.
  robots: previewRobots() ?? {
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
  verification: {
    google: "bk5xt83LIShhQ9QrejYXCOg9lXhZubSY9ksIEtYrIVs",
  },
  icons: {
    icon: "/Favicon.png",
    apple: "/Favicon.png",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Edmonton",
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "build-sha": process.env.BUILD_SHA || "unknown",
    "build-time": process.env.BUILD_TIME || "unknown",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteOrigin()}/#organization`,
  name: "Mapletech Labs",
  alternateName: ["TML Branding Agency"],
  url: siteOrigin(),
  logo: `${siteOrigin()}/logo.png`,
  description:
    "Mapletech Labs is a custom software development company founded by Raman Makkar in Edmonton, Alberta in 2018 (formerly TML Branding Agency). Its team of 25+ engineers, designers and strategists has delivered 500+ projects, building web and mobile apps, AI solutions, SaaS platforms, UI/UX design and SEO for clients across Canada, with 12 locations across Canada and an experienced remote engineering team.",
  address: { ...HQ_ADDRESS },
  sameAs: [...BUSINESS.sameAs],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "French"],
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
  },
  areaServed: ['CA', 'US', ...LOCAL_BUSINESS_AREA_SERVED],
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
    "@id": `${siteOrigin()}/about/raman-makkar#person`,
    name: "Raman Makkar",
    jobTitle: "Founder & CEO",
    url: `${siteOrigin()}/about/raman-makkar`,
  },
  award: [
    "Top Generative AI Company, Clutch 2026",
    "Top App Development Company, Clutch 2024",
    "Webby Honoree 2024",
    "Best App Award, Personal Growth, Google 2024",
    "Advanced Tier Services Partner, AWS 2024",
    "Top 100 North America, Red Herring 2023",
  ],
  knowsAbout: [
    "Custom software development",
    "Mobile app development",
    "AI development",
    "LLM integration",
    "UI/UX design",
    "Ecommerce systems",
    "SaaS development",
    "Search engine optimization (SEO)",
    "Digital marketing",
    "Google Ads management",
  ],
  serviceType: [
    "Software development",
    "App development",
    "AI development",
    "UI/UX design",
    "Ecommerce systems",
    "SEO",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          url: `${siteOrigin()}/services/web-development`,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: PROJECT_PRICING.website.low,
          maxPrice: PROJECT_PRICING.website.high,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          url: `${siteOrigin()}/services/mobile-app-development`,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: PROJECT_PRICING.mobile.low,
          maxPrice: PROJECT_PRICING.mobile.high,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Machine Learning",
          url: `${siteOrigin()}/services/ai-ml`,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: PROJECT_PRICING.ai.low,
          maxPrice: PROJECT_PRICING.ai.high,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          url: `${siteOrigin()}/services/product-design`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development",
          url: `${siteOrigin()}/services/saas-development`,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: PROJECT_PRICING.saas.low,
          maxPrice: PROJECT_PRICING.saas.high,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Digital Marketing",
          url: `${siteOrigin()}/services/digital-marketing`,
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteOrigin()}/#website`,
  name: "Mapletech Labs",
  url: siteOrigin(),
  inLanguage: "en-CA",
  publisher: { "@id": `${siteOrigin()}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        {/* Only a DNS prefetch for GTM is kept: it loads with strategy="lazyOnload",
            so a full early connection is wasted. The OG image is not preloaded:
            it is only used by social crawlers, so preloading it on every page
            competed with the real LCP image. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={jakarta.variable}>
        <a href="#main-content" className="sr-only-focusable">Skip to main content</a>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
        <CookieConsent />
        <ClarityAnalytics />
        {/* Google Tag Manager - moved to end of body for LCP optimization */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GT-PJ46RCMN"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'GT-PJ46RCMN');`}
        </Script>
      </body>
    </html>
  );
}
