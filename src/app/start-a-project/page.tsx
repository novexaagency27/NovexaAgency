import React from "react";
import { Metadata } from "next";
import { StartAProjectForm } from "@/components/StartAProjectForm";

export const metadata: Metadata = {
  title: "Start a Project — NOVEXA Agency",
  description:
    "Tell NOVEXA about your project, goals, timeline, and requirements. Prepare your project brief and send it directly through WhatsApp or Email.",
  alternates: {
    canonical: "https://novexaagency.com/start-a-project",
  },
  openGraph: {
    title: "Start a Project — NOVEXA Agency",
    description:
      "Tell NOVEXA about your project, goals, timeline, and requirements. Prepare your project brief and send it directly through WhatsApp or Email.",
    url: "https://novexaagency.com/start-a-project",
  },
};

export default function StartAProjectPage() {
  return <StartAProjectForm />;
}
