import React from "react";
import type { Metadata } from "next";
import { StartAProjectForm } from "@/components/StartAProjectForm";

export const metadata: Metadata = {
  title: "Start a Project | NOVEXA Creative Digital Agency",
  description:
    "Tell NOVEXA about your project, goals, timeline, and requirements. Prepare your project brief and connect directly with our team.",
  alternates: {
    canonical: "https://novexaagency.com/start-a-project",
  },
  openGraph: {
    title: "Start a Project | NOVEXA Creative Digital Agency",
    description:
      "Tell NOVEXA about your project, goals, timeline, and requirements. Prepare your project brief and connect directly with our team.",
    url: "https://novexaagency.com/start-a-project",
    siteName: "NOVEXA",
    images: [
      {
        url: "/assets/work/ui-ux/anaqah page.png",
        width: 1200,
        height: 630,
        alt: "Start a Project with NOVEXA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Project | NOVEXA Creative Digital Agency",
    description:
      "Tell NOVEXA about your project, goals, timeline, and requirements. Prepare your project brief and connect directly with our team.",
    images: ["/assets/work/ui-ux/anaqah page.png"],
  },
};

export default function StartAProjectPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Start a Project with NOVEXA",
    url: "https://novexaagency.com/start-a-project",
    description:
      "Tell NOVEXA about your project, goals, timeline, and requirements. Prepare your project brief and connect directly with our team.",
    mainEntity: {
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
        name: "Start a Project",
        item: "https://novexaagency.com/start-a-project",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StartAProjectForm />
    </>
  );
}
