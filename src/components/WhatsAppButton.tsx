"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {hovered && (
        <div className="hidden sm:block glass-card text-charcoal px-3 py-1.5 rounded-full text-xs font-mono tracking-wider shadow-glass animate-pulse">
          Chat on WhatsApp
        </div>
      )}

      {/* Button */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Contact NOVEXA AGENCY on WhatsApp"
        data-cursor="TALK"
        className="glass-card hover:bg-gold p-3.5 rounded-full text-charcoal hover:text-charcoal shadow-glass transition-all duration-300 transform hover:scale-110 flex items-center justify-center border border-stone-300 hover:border-gold"
      >
        <MessageCircle className="w-6 h-6 text-charcoal fill-current opacity-90" />
      </a>
    </div>
  );
}
