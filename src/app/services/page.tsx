import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/lib/data/services";

export const metadata = {
  title: "Services — NOVEXA AGENCY",
  description: "Explore NOVEXA's core capabilities across Brand Strategy, UI/UX Design, Website Development, App Engineering, and Digital Experiences.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 space-y-20">
      {/* Header */}
      <div className="space-y-6 max-w-3xl">
        <span className="font-mono text-xs text-gold tracking-widest uppercase block">
          AGENCY CAPABILITIES
        </span>
        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-light text-charcoal leading-tight">
          CREATIVE THINKING.<br />
          DIGITAL EXECUTION.
        </h1>
        <p className="font-sans text-base md:text-lg text-stone-600 font-light leading-relaxed">
          We combine brand design, UI/UX architecture, frontend engineering, and digital marketing to build cohesive experience systems for ambitious brands.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-12">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="glass-card p-8 md:p-12 rounded-3xl border border-stone-200 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-sm text-gold tracking-widest font-semibold block">
                // {service.number}
              </span>
              <h2 className="editorial-title text-3xl md:text-4xl font-light text-charcoal">
                {service.title}
              </h2>
              <p className="font-sans text-sm text-stone-600 font-light leading-relaxed">
                {service.description}
              </p>
              <Link
                href="/start-a-project"
                className="inline-flex items-center gap-2 font-mono text-xs text-gold tracking-widest hover:underline pt-2"
              >
                <span>BOOK THIS SERVICE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block mb-2">
                WHAT WE DO
              </span>
              <ul className="space-y-2 font-mono text-xs text-stone-800">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block mb-2">
                DELIVERABLES
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {service.deliverables.map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-3 py-1.5 rounded-full bg-stone-200/80 text-charcoal font-medium"
                  >
                    ✦ {del}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
