"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import Link from "next/link";

export function ServiceAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="w-full space-y-4">
      {servicesData.map((service, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={service.id}
            className={`transition-all duration-500 rounded-2xl border ${
              isOpen
                ? "bg-ivory border-gold/40 shadow-luxury"
                : "bg-white/40 border-stone-200 hover:border-stone-300"
            } overflow-hidden`}
          >
            <button
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
              data-cursor="EXPLORE"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs md:text-sm text-gold tracking-widest font-semibold">
                  {service.number}
                </span>
                <h3 className="editorial-title text-2xl md:text-4xl font-light text-charcoal">
                  {service.title}
                </h3>
              </div>

              <div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-charcoal transition-colors">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-stone-200/60 grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-6 space-y-4">
                      <p className="font-sans text-sm md:text-base text-stone-700 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <Link
                        href="/start-a-project"
                        className="inline-flex items-center gap-2 font-mono text-xs text-gold tracking-widest hover:underline pt-2"
                      >
                        <span>INQUIRE FOR THIS SERVICE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="md:col-span-6 space-y-4">
                      <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block">
                        CAPABILITIES & DELIVERABLES
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-stone-800">
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <span className="text-gold">•</span> {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
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
