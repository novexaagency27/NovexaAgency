import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FounderCard } from "@/components/FounderCard";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata = {
  title: "About — NOVEXA AGENCY",
  description: "Learn about NOVEXA AGENCY, our founders Hetvi & Krish, our philosophy, and our commitment to design excellence.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-24">
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <span className="font-mono text-xs text-gold tracking-widest uppercase block">
          ABOUT NOVEXA AGENCY
        </span>
        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light text-charcoal leading-tight">
          A CREATIVE STUDIO BUILT AT THE INTERSECTION OF <span className="italic font-normal text-gold">DESIGN</span> AND <span className="italic font-normal text-gold">TECHNOLOGY.</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-stone-700 font-light leading-relaxed">
          NOVEXA brings creative thinking and digital technology together to help brands communicate better, look sharper, and create experiences people remember.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-stone-200">
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block">
            OUR ESSENCE
          </span>
          <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
            WE BELIEVE PREMIUM DESIGN IS A STRATEGIC ADVANTAGE.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 font-sans text-stone-700 font-light text-base leading-relaxed">
          <p>
            In a digital world crowded with generic templates, standing out requires strong design direction and modern technology.
          </p>
          <p>
            At NOVEXA, we build complete brand environments. From visual branding and packaging to custom web applications, every project is built to project clarity, authority, and quality.
          </p>
        </div>
      </div>

      {/* Leadership / Founders */}
      <div className="space-y-12 pt-12 border-t border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">
              FOUNDERS
            </span>
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-charcoal">
              THE PEOPLE BEHIND NOVEXA
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-600 max-w-md font-light">
            Founded by Hetvi and Krish, combining brand visual direction and modern technology engineering.
          </p>
        </div>

        <FounderCard />
      </div>
    </div>
  );
}
