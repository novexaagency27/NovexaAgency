import React from "react";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export const metadata = {
  title: "Process — NOVEXA AGENCY",
  description: "Explore NOVEXA's 5-step structured delivery process: Discover, Strategize, Design, Build, Launch.",
};

export default function ProcessPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-16">
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
