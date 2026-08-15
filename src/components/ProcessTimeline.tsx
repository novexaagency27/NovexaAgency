"use client";

import React, { useState } from "react";
import { processSteps } from "@/lib/data/process";
import { motion } from "framer-motion";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Step Selectors */}
      <div className="lg:col-span-5 space-y-4">
        {processSteps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`w-full p-6 rounded-2xl text-left transition-all duration-500 border ${
                isActive
                  ? "bg-charcoal text-ivory border-gold shadow-glass-gold"
                  : "bg-white/60 text-charcoal border-stone-200 hover:border-stone-400"
              }`}
              data-cursor="SELECT"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-4">
                  <span className={`font-mono text-xs ${isActive ? "text-gold" : "text-stone-400"}`}>
                    {step.number}
                  </span>
                  <h3 className="editorial-title text-xl md:text-2xl font-light">
                    {step.title}
                  </h3>
                </div>
                <span className={`font-mono text-xs ${isActive ? "text-gold" : "text-stone-400"}`}>
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Active Step Details */}
      <div className="lg:col-span-7">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-stone-200 shadow-luxury space-y-8 min-h-[380px] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-gold tracking-widest font-semibold uppercase">
                PHASE {processSteps[activeStep].number} // METHODOLOGY
              </span>
              <span className="font-mono text-xs text-stone-400">
                0{activeStep + 1} OF 05
              </span>
            </div>

            <h3 className="editorial-title text-3xl md:text-5xl font-light text-charcoal mb-4">
              {processSteps[activeStep].title}
            </h3>

            <p className="font-sans text-base text-stone-700 font-light leading-relaxed mb-6">
              {processSteps[activeStep].subtitle}
            </p>

            <p className="font-sans text-sm text-stone-600 font-light leading-relaxed">
              {processSteps[activeStep].description}
            </p>
          </div>

          <div className="pt-6 border-t border-stone-200">
            <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block mb-3">
              KEY DELIVERABLES & OUTPUTS
            </span>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {processSteps[activeStep].outputs.map((out, oIdx) => (
                <span
                  key={oIdx}
                  className="px-3 py-1.5 rounded-full bg-stone-200/80 text-charcoal font-medium"
                >
                  ✦ {out}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
