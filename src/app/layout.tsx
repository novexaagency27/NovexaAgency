import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data/siteConfig";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novexaagency.com"),
  title: {
    default: "NOVEXA | Creative Digital Agency for Design, Social Media & Websites",
    template: "%s",
  },
  description:
    "NOVEXA is a creative digital agency helping brands grow through graphic design, social media, UI/UX, branding and website development.",
  alternates: {
    canonical: "https://novexaagency.com",
  },
  keywords: [
    "NOVEXA",
    "NOVEXA AGENCY",
    "Creative Digital Agency",
    "Graphic Design Agency",
    "Social Media Marketing",
    "UI UX Design Studio",
    "Website Development",
    "Brand Identity Design",
    "Motion Graphics",
  ],
  authors: [
    { name: siteConfig.founders.founder.name, url: siteConfig.url },
    { name: siteConfig.founders.coFounder.name, url: siteConfig.url },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novexaagency.com",
    title: "NOVEXA | Creative Digital Agency for Design, Social Media & Websites",
    description:
      "NOVEXA is a creative digital agency helping brands grow through graphic design, social media, UI/UX, branding and website development.",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/anaqah page.png",
        width: 1200,
        height: 630,
        alt: "NOVEXA Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVEXA | Creative Digital Agency for Design, Social Media & Websites",
    description:
      "NOVEXA is a creative digital agency helping brands grow through graphic design, social media, UI/UX, branding and website development.",
    images: ["/assets/work/ui-ux/anaqah page.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOVEXA AGENCY",
    alternateName: "NOVEXA",
    url: "https://novexaagency.com",
    logo: "https://novexaagency.com/assets/work/logo/MAIN.jpg",
    description:
      "NOVEXA is a creative digital agency helping brands grow through graphic design, social media, UI/UX, branding and website development.",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.whatsappNumber,
    sameAs: [
      siteConfig.contact.instagramUrl,
      siteConfig.contact.whatsappUrl,
    ],
    founder: [
      {
        "@type": "Person",
        name: siteConfig.founders.founder.name,
        jobTitle: siteConfig.founders.founder.title,
      },
      {
        "@type": "Person",
        name: siteConfig.founders.coFounder.name,
        jobTitle: siteConfig.founders.coFounder.title,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NOVEXA",
    url: "https://novexaagency.com",
    description:
      "NOVEXA is a creative digital agency helping brands grow through graphic design, social media, UI/UX, branding and website development.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body
        className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable} bg-ivory text-charcoal bg-grain min-h-screen flex flex-col antialiased selection:bg-gold/30 font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Preloader />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
