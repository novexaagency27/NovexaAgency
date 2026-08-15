"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-ivory bg-grain pt-20 md:pt-32 pb-12 border-t border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Editorial Callout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-20 border-b border-stone-800">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-4">
              NEXT STEPS
            </span>
            <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              LET&apos;S MAKE SOMETHING <span className="italic text-gold">REMARKABLE.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/start-a-project"
              data-cursor="START"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold text-charcoal font-mono text-xs tracking-widest font-semibold hover:bg-ivory hover:text-charcoal transition-all duration-300 shadow-glass-gold"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Middle Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-b border-stone-800">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="editorial-title text-2xl font-bold tracking-tight text-ivory hover:text-gold transition-colors">
                NOVEXA<span className="text-gold font-normal">.</span>
              </span>
            </Link>
            <p className="font-sans text-xs text-stone-400 leading-relaxed">
              A premium creative digital agency blending strategy, visual design, and technology to build memorable digital products.
            </p>
          </div>

          {/* Col 2: Sitemap */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-stone-400 tracking-widest uppercase mb-4">
              SITEMAP
            </h3>
            <ul className="space-y-2 font-mono text-xs text-stone-300">
              <li>
                <Link href="/work" className="hover:text-gold transition-colors">
                  01 // WORK
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  02 // SERVICES
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  03 // ABOUT
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-gold transition-colors">
                  04 // PROCESS
                </Link>
              </li>
              <li>
                <Link href="/start-a-project" className="hover:text-gold transition-colors">
                  05 // START A PROJECT
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-gold transition-colors">
                  06 // LEGAL CENTER
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-stone-400 tracking-widest uppercase mb-4">
              DIRECT CONTACT
            </h3>
            <ul className="space-y-3 font-mono text-xs text-stone-300">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gold" />
                  {siteConfig.contact.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Location */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-stone-400 tracking-widest uppercase mb-4">
              SOCIAL & STUDIO
            </h3>
            <ul className="space-y-3 font-mono text-xs text-stone-300">
              <li>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-gold" />
                  {siteConfig.contact.instagram}
                </a>
              </li>
              <li className="text-stone-500 font-sans text-xs pt-2">
                FOUNDER: {siteConfig.founders.founder.name}
                <br />
                CO-FOUNDER: {siteConfig.founders.coFounder.name}
              </li>
            </ul>
          </div>
        </div>

        {/* Large Decorative Wordmark */}
        <div className="py-12 flex justify-center items-center opacity-10 hover:opacity-25 transition-opacity duration-700 select-none">
          <span className="editorial-title text-[12vw] tracking-tighter leading-none text-stone-300 font-extralight">
            NOVEXA AGENCY
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-stone-500">
          <p>© 2026 NOVEXA AGENCY. ALL RIGHTS RESERVED.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-gold transition-colors flex items-center gap-1 uppercase"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
