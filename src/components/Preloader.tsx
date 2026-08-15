"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 10;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-charcoal text-ivory flex flex-col justify-between p-8 md:p-16 select-none bg-grain"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-stone-400 tracking-widest uppercase">
              NOVEXA AGENCY
            </span>
            <span className="font-mono text-xs text-gold tracking-widest">
              DESIGN × TECHNOLOGY
            </span>
          </div>

          <div className="flex flex-col items-center justify-center my-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="editorial-title text-4xl md:text-7xl lg:text-8xl tracking-tight text-center font-light"
            >
              NOVEXA<span className="text-gold font-normal">.</span>
            </motion.h1>
            <p className="font-mono text-xs md:text-sm text-stone-400 tracking-widest mt-4 uppercase text-center">
              Creative Digital Experience Studio
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-xs text-stone-400">
              <span>LOADING EXPERIENCE</span>
              <span className="text-gold">{Math.min(progress, 100)}%</span>
            </div>
            <div className="w-full h-[2px] bg-charcoal-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gold"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
