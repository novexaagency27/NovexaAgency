/**
 * NOVEXA — Lenis Smooth Scroll
 * Premium weighted scrolling. Respects prefers-reduced-motion.
 * Bridges Lenis RAF into GSAP ticker so ScrollTrigger stays in sync.
 */
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Expo-out easing — scroll decelerates luxuriously, never pops
const expoOut = (t: number) => 1 - Math.pow(2, -10 * t);

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // In reduced-motion mode: keep native scroll, still set up ScrollTrigger normally
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.35,          // weighted, luxurious — not sluggish
      easing: expoOut,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.8,    // comfortable on touch
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    // Keep GSAP ScrollTrigger synced with Lenis animated position
    lenis.on('scroll', ScrollTrigger.update);

    // RAF loop — use GSAP ticker so we never double-rAF
    const rafCallback = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    // Proxy scroll position so ScrollTrigger reads Lenis position, not native
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.animatedScroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
      // Reset scrollerProxy
      ScrollTrigger.scrollerProxy(document.body, undefined as unknown as Parameters<typeof ScrollTrigger.scrollerProxy>[1]);
    };
  }, []);

  return lenisRef;
}
