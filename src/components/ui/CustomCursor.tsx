/**
 * NOVEXA — Custom Cursor Component
 * Desktop-only (fine pointer) interactive cursor.
 * Follows cursor with spring physics, expands over cards, and morphs over buttons/links.
 */
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverText, setHoverText] = useState('');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, .portfolio-card-item');
      if (interactiveEl) {
        setIsHovered(true);
        if (interactiveEl.tagName === 'A' && interactiveEl.getAttribute('href')?.startsWith('/project/')) {
          setHoverText('VIEW');
        } else if (interactiveEl.classList.contains('portfolio-card-item')) {
          setHoverText('OPEN');
        } else {
          setHoverText('');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 99999,
      }}
    >
      <motion.div
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(31,61,58,0.35)' : 'rgba(138,129,113,0.8)',
          borderColor: isHovered ? 'var(--color-accent)' : 'rgba(248,246,242,0.6)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: '1px solid rgba(248,246,242,0.6)',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {hoverText && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.4rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#F8F6F2',
            }}
          >
            {hoverText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
