"use client";

import React from "react";

interface MarqueeProps {
  items?: string[];
  speed?: "normal" | "fast";
}

export function Marquee({
  items = [
    "DESIGN × TECHNOLOGY",
    "BRAND IDENTITY",
    "DIGITAL EXPERIENCES",
    "UI/UX ARCHITECTURE",
    "HIGH-END WEBSITES",
    "STRATEGIC IMPACT",
  ],
}: MarqueeProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-6 bg-charcoal text-ivory border-y border-stone-800 select-none bg-grain">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 px-6 font-mono text-xs md:text-sm tracking-widest text-stone-300">
            <span>{item}</span>
            <span className="text-gold font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
