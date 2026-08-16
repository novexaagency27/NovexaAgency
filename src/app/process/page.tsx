import React from "react";
import type { Metadata } from "next";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { processSteps } from "@/lib/data/process";

export const metadata: Metadata = {
  title: "Our Process | NOVEXA Creative Digital Agency",
  description:
    "Discover NOVEXA's structured 5-step methodology: Discover, Strategize, Design, Build, and Launch.",
  alternates: {
    canonical: "https://novexaagency.com/process",
  },
  openGraph: {
    title: "Our Process | NOVEXA Creative Digital Agency",
    description:
      "Discover NOVEXA's structured 5-step methodology: Discover, Strategize, Design, Build, and Launch.",
    url: "https://novexaagency.com/process",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/anaqah page.png",
        width: 1200,
        height: 630,
        alt: "NOVEXA 5-Step Process",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | NOVEXA Creative Digital Agency",
    description:
      "Discover NOVEXA's structured 5-step methodology: Discover, Strategize, Design, Build, and Launch.",
    images: ["/assets/work/ui-ux/anaqah page.png"],
  },
};

export default function ProcessPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "NOVEXA 5-Step Digital Agency Delivery Process",
    description:
      "Our structured 5-step methodology ensures zero ambiguity, transparent execution, and world-class digital delivery.",
    step: processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `${step.number} // ${step.title}`,
      text: step.description,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://novexaagency.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Process",
        item: "https://novexaagency.com/process",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <div className="space-y-6 max-w-3xl">
        <span className="font-mono text-xs text-gold tracking-widest uppercase block">
          METHODOLOGY & BLUEPRINT
        </span>
        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light text-charcoal leading-tight">
          FROM IDEA TO IMPACT.
        </h1>
        <p className="font-sans text-base md:text-lg text-stone-600 font-light leading-relaxed">
          Our structured 5-step methodology ensures zero ambiguity, transparent execution, and world-class digital delivery.
        </p>
      </div>

      <ProcessTimeline />
    </div>
  );
}
