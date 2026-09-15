"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface BrandingFAQProps {
  items: FAQItem[];
}

export function BrandingFAQ({ items }: BrandingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`transition-all duration-500 rounded-2xl border ${
              isOpen
                ? "bg-ivory border-gold/40 shadow-luxury"
                : "bg-white/40 border-stone-200 hover:border-stone-300"
            } overflow-hidden`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
              data-cursor="EXPAND"
              aria-expanded={isOpen}
            >
              <div className="flex items-baseline gap-4 md:gap-8 pr-4">
                <span className="font-mono text-xs md:text-sm text-gold tracking-widest font-semibold">
                  0{index + 1}
                </span>
                <h3 className="editorial-title text-xl md:text-2xl font-light text-charcoal">
                  {item.question}
                </h3>
              </div>

              <div className="w-9 h-9 rounded-full border border-stone-300 shrink-0 flex items-center justify-center text-charcoal transition-colors">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-stone-200/60">
                    <p className="font-sans text-sm md:text-base text-stone-700 leading-relaxed font-light max-w-3xl pt-4">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
