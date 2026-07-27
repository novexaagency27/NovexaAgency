/**
 * NOVEXA — ScrollProgress Indicator Component
 * Ultra-thin accent progress bar at the top of the viewport.
 */
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: 'var(--color-accent)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ScrollProgress;
