"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "explore" | "talk">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorAttr) {
        setCursorText(cursorAttr);
        if (cursorAttr === "VIEW") setCursorVariant("view");
        else if (cursorAttr === "EXPLORE") setCursorVariant("explore");
        else if (cursorAttr === "LET'S TALK") setCursorVariant("talk");
        else setCursorVariant("hover");
        return;
      }

      if (target.closest("a, button, input, textarea, [role='button']")) {
        setCursorVariant("hover");
        setCursorText("");
        return;
      }

      setCursorVariant("default");
      setCursorText("");
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "#C5A059",
      mixBlendMode: "difference" as const,
      borderRadius: "50%",
    },
    hover: {
      x: position.x - 24,
      y: position.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(197, 160, 89, 0.15)",
      border: "1px solid rgba(197, 160, 89, 0.6)",
      borderRadius: "50%",
    },
    view: {
      x: position.x - 40,
      y: position.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#0D0D0D",
      color: "#FAF8F5",
      borderRadius: "50%",
    },
    explore: {
      x: position.x - 40,
      y: position.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#C5A059",
      color: "#0D0D0D",
      borderRadius: "50%",
    },
    talk: {
      x: position.x - 45,
      y: position.y - 45,
      width: 90,
      height: 90,
      backgroundColor: "#0D0D0D",
      border: "1px solid #C5A059",
      color: "#C5A059",
      borderRadius: "50%",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-sans font-medium text-[10px] tracking-widest uppercase overflow-hidden"
      animate={cursorVariant}
      variants={variants}
      transition={{ type: "spring", damping: 30, stiffness: 350, mass: 0.5 }}
    >
      {cursorText && (
        <span className="text-center px-1 font-semibold">{cursorText}</span>
      )}
    </motion.div>
  );
}


