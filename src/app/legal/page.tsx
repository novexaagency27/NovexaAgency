import React from "react";
import type { Metadata } from "next";
import { LegalCenter } from "@/components/LegalCenter";

export const metadata: Metadata = {
  title: "Legal Center | NOVEXA Creative Digital Agency",
  description:
    "Read NOVEXA's terms and conditions, payment policy, revision policy, refund and cancellation policy, intellectual property terms, and privacy policy.",
  alternates: {
    canonical: "https://novexaagency.com/legal",
  },
  openGraph: {
    title: "Legal Center | NOVEXA Creative Digital Agency",
    description:
      "Read NOVEXA's terms and conditions, payment policy, revision policy, refund and cancellation policy, intellectual property terms, and privacy policy.",
    url: "https://novexaagency.com/legal",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/anaqah page.png",
        width: 1200,
        height: 630,
        alt: "NOVEXA Legal Center",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Center | NOVEXA Creative Digital Agency",
    description:
      "Read NOVEXA's terms and conditions, payment policy, revision policy, refund and cancellation policy, intellectual property terms, and privacy policy.",
    images: ["/assets/work/ui-ux/anaqah page.png"],
  },
};

export default function LegalPage() {
  const legalSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "NOVEXA Legal Center — Terms & Policies",
    url: "https://novexaagency.com/legal",
    description:
      "Read NOVEXA's terms and conditions, payment policy, revision policy, refund and cancellation policy, intellectual property terms, and privacy policy.",
    publisher: {
      "@type": "Organization",
      name: "NOVEXA AGENCY",
      url: "https://novexaagency.com",
    },
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
        name: "Legal",
        item: "https://novexaagency.com/legal",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalCenter />
    </>
  );
}
