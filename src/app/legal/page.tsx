import React from "react";
import { Metadata } from "next";
import { LegalCenter } from "@/components/LegalCenter";

export const metadata: Metadata = {
  title: "NOVEXA Legal Center — Terms, Policies & Agreements",
  description:
    "Read NOVEXA's terms and conditions, payment policy, revision policy, refund and cancellation policy, intellectual property terms, privacy policy, and other operational policies.",
  alternates: {
    canonical: "https://novexaagency.com/legal",
  },
  openGraph: {
    title: "NOVEXA Legal Center — Terms, Policies & Agreements",
    description:
      "Read NOVEXA's terms and conditions, payment policy, revision policy, refund and cancellation policy, intellectual property terms, privacy policy, and other operational policies.",
    url: "https://novexaagency.com/legal",
  },
};

export default function LegalPage() {
  return <LegalCenter />;
}
