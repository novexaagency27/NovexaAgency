/**
 * NOVEXA — useScrollReveal Hook
 * Controls element scroll reveal triggers cleanly as elements enter the viewport.
 */
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number | 'some' | 'all';
  once?: boolean;
  margin?: string;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    once = true,
    margin = '0px 0px -40px 0px',
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    margin: margin as any,
  });

  return { ref, isInView };
}
