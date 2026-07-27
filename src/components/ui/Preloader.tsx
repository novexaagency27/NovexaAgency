/**
 * NOVEXA — Luxury Cinematic Preloader Component
 * Shows only once per session using session-storage check.
 * Sequences logo entrance (0.9 to 1), thin progress bar fill, and subtext reveal.
 */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const visited = sessionStorage.getItem('novexa_visited');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (visited || prefersReducedMotion) {
        return false;
      }
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        try {
          sessionStorage.setItem('novexa_visited', 'true');
        } catch {
          // Ignore storage quota edge cases
        }
      }, 1600);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          id="novexa-cinematic-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          {/* Subtle ambient drifting radial glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '40vw',
              height: '40vw',
              maxWidth: '500px',
              maxHeight: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(31,61,58,0.4) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Centered NOVEXA Wordmark */}
          <motion.span
            initial={{ scale: 0.9, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.02, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '0.18em',
              color: '#F8F6F2',
              textTransform: 'uppercase',
              lineHeight: 1,
              position: 'relative',
              zIndex: 2,
            }}
          >
            NOVEXA
          </motion.span>

          {/* Thin Progress Line */}
          <div
            style={{
              width: '140px',
              height: '2px',
              backgroundColor: 'rgba(248,246,242,0.12)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-accent)',
                transformOrigin: 'left',
              }}
            />
          </div>

          {/* Loading Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#F8F6F2',
              margin: 0,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Loading Creative Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
