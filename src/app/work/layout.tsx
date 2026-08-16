import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Portfolio | NOVEXA Creative Digital Agency",
  description:
    "Explore selected work and case studies by NOVEXA across UI/UX, brand identity, graphic design, social media content, and motion video.",
  alternates: {
    canonical: "https://novexaagency.com/work",
  },
  openGraph: {
    title: "Work & Portfolio | NOVEXA Creative Digital Agency",
    description:
      "Explore selected work and case studies by NOVEXA across UI/UX, brand identity, graphic design, social media content, and motion video.",
    url: "https://novexaagency.com/work",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/anaqah page.png",
        width: 1200,
        height: 630,
        alt: "NOVEXA Portfolio Work",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Portfolio | NOVEXA Creative Digital Agency",
    description:
      "Explore selected work and case studies by NOVEXA across UI/UX, brand identity, graphic design, social media content, and motion video.",
    images: ["/assets/work/ui-ux/anaqah page.png"],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
