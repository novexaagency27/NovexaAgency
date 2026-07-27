/**
 * NOVEXA — useGSAPReveal Hook
 * GSAP-powered scroll-triggered reveal for elements.
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  start?: string;
}

/**
 * Reveals a single element on scroll with GSAP.
 */
export function useGSAPReveal(options: GSAPRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      ease = 'power3.out',
      start = 'top 85%',
    } = options;

    gsap.fromTo(
      el,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return ref;
}

/**
 * Reveals multiple child elements in a stagger on scroll.
 */
export function useGSAPStagger(
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  options: GSAPRevealOptions = {}
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const {
      y = 30,
      opacity = 0,
      duration = 0.7,
      stagger = 0.1,
      delay = 0,
      ease = 'power3.out',
      start = 'top 80%',
    } = options;

    const children = container.querySelectorAll(childSelector);

    if (!children.length) return;

    gsap.fromTo(
      children,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease,
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [containerRef, childSelector]);
}

/**
 * Text mask reveal — letters slide up.
 */
export function useGSAPTextReveal(
  containerRef: React.RefObject<HTMLElement>,
  options: { start?: string; delay?: number } = {}
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = container.querySelectorAll('.reveal-line');
    if (!lines.length) return;

    const { start = 'top 80%', delay = 0 } = options;

    gsap.fromTo(
      lines,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: 'play none none none',
        },
      }
    );
  }, [containerRef]);
}
