"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data/siteConfig";

export function FounderCard() {
  const founders = [
    {
      name: siteConfig.founders.founder.name,
      title: siteConfig.founders.founder.title,
      image: siteConfig.founders.founder.image,
      role: "FOUNDER",
      bio: siteConfig.founders.founder.bio,
    },
    {
      name: siteConfig.founders.coFounder.name,
      title: siteConfig.founders.coFounder.title,
      image: siteConfig.founders.coFounder.image,
      role: "CO-FOUNDER",
      bio: siteConfig.founders.coFounder.bio,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {founders.map((founder, idx) => (
        <div
          key={idx}
          className="group relative rounded-3xl overflow-hidden glass-card border border-stone-200 shadow-luxury transition-all duration-700 hover:-translate-y-2"
          data-cursor={founder.role}
        >
          {/* Portrait Image Container */}
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-200">
            <Image
              src={founder.image}
              alt={`${founder.name} — ${founder.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
          </div>

          {/* Info Card Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-ivory flex flex-col justify-end">
            <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2">
              {founder.role}
            </span>
            <h3 className="editorial-title text-4xl md:text-5xl font-light tracking-tight mb-2">
              {founder.name}
            </h3>
            <p className="font-sans text-xs md:text-sm text-stone-300 font-light leading-relaxed">
              {founder.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
