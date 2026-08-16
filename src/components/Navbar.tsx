"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 40;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORK", href: "/work" },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    { name: "PROCESS", href: "/process" },
    { name: "LEGAL", href: "/legal" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled ? "py-3 md:py-4 px-4" : "py-6 md:py-8 px-6 md:px-12"
        }`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass-nav rounded-full px-6 py-3 shadow-glass"
              : "bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            data-cursor="NOVEXA"
          >
            <span className="editorial-title text-xl md:text-2xl font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors duration-300">
              NOVEXA<span className="text-gold font-normal">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive ? "text-gold font-semibold" : "text-stone-700 hover:text-charcoal"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/start-a-project"
              data-cursor="LET'S TALK"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-charcoal text-ivory text-xs font-mono tracking-widest overflow-hidden transition-all duration-300 hover:bg-gold hover:text-charcoal shadow-sm hover:shadow-glass-gold"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-charcoal text-ivory flex items-center justify-center transition-colors hover:bg-gold hover:text-charcoal"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-charcoal text-ivory bg-grain flex flex-col justify-between p-6 pt-28 pb-10 md:hidden"
          >
            <div className="flex flex-col gap-6 my-auto">
              <span className="font-mono text-xs text-stone-500 tracking-widest uppercase">
                NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="editorial-title text-4xl font-light hover:text-gold transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/start-a-project"
                  onClick={() => setMobileMenuOpen(false)}
                  className="editorial-title text-4xl font-light text-gold block"
                >
                  START A PROJECT
                </Link>
              </motion.div>
            </div>

            {/* Mobile Footer Links */}
            <div className="flex flex-col gap-4 border-t border-stone-800 pt-6">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>TALK DIRECTLY</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold flex items-center gap-1 hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WHATSAPP
                </a>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>INSTAGRAM</span>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory hover:text-gold transition-colors"
                >
                  {siteConfig.contact.instagram}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
