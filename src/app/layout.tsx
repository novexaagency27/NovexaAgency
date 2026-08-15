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
  title: {
    default: `${siteConfig.name} — Creative Digital Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "NOVEXA AGENCY",
    "Creative Digital Agency",
    "UI UX Design Studio",
    "Brand Strategy",
    "Website Development",
    "Luxury Editorial Design",
    "App Development",
  ],
  authors: [
    { name: siteConfig.founders.founder.name, url: siteConfig.url },
    { name: siteConfig.founders.coFounder.name, url: siteConfig.url },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Creative Digital Agency`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Creative Digital Agency`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable} bg-ivory text-charcoal bg-grain min-h-screen flex flex-col antialiased selection:bg-gold/30 font-sans`}
      >
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
