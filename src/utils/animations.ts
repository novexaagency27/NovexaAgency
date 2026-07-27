/**
 * NOVEXA — Framer Motion Animation Variants
 * Cinematic. Elegant. Never distracting.
 */
import type { Variants, Transition } from 'framer-motion';

// ============================================================
// EASING CURVES
// ============================================================
export const ease = {
  elegant:  [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  power:    [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut:    [0.4, 0, 0.2, 1] as [number, number, number, number],
  outExpo:  [0.16, 1, 0.3, 1] as [number, number, number, number],
  spring: { type: 'spring', damping: 30, stiffness: 150 } as Transition,
} as const;

// ============================================================
// FADE IN
// ============================================================
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: ease.elegant },
  },
};

// ============================================================
// FADE UP — Most used. Minimal vertical travel.
// ============================================================
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.power },
  },
};

export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: ease.power },
  },
};

// ============================================================
// FADE DOWN
// ============================================================
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.power },
  },
};

// ============================================================
// FADE LEFT
// ============================================================
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.power },
  },
};

// ============================================================
// FADE RIGHT
// ============================================================
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.power },
  },
};

// ============================================================
// SCALE REVEAL
// ============================================================
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: ease.power },
  },
};

// ============================================================
// MASK / CLIP REVEAL — Text sliding up from clip
// ============================================================
export const maskReveal: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.8, ease: ease.power },
  },
};

export const maskRevealSlow: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 1.1, ease: ease.power },
  },
};

// ============================================================
// IMAGE REVEAL — Scale + opacity combo
// ============================================================
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: ease.elegant },
  },
};

// ============================================================
// STAGGER CONTAINER — Parent wrapping staggered children
// ============================================================
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// ============================================================
// SLIDE UP (for mobile menus, drawers)
// ============================================================
export const slideUp: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.5, ease: ease.power },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.35, ease: ease.inOut },
  },
};

// ============================================================
// MENU OVERLAY — Full screen mobile menu
// ============================================================
export const menuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: ease.inOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: ease.inOut },
  },
};

export const menuItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.power },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: ease.inOut },
  },
};

// ============================================================
// LINE DRAW — For decorative dividers
// ============================================================
export const drawLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: ease.power, delay: 0.3 },
  },
};

// ============================================================
// COUNTER — Number counting animation container
// ============================================================
export const counterReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.power },
  },
};

// ============================================================
// CARD HOVER — Subtle lift on hover
// ============================================================
export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 1px 3px rgba(13, 17, 23, 0.06)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  hover: {
    y: -4,
    boxShadow: '0 12px 32px rgba(13, 17, 23, 0.10)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

// ============================================================
// BUTTON HOVER — Micro-interaction
// ============================================================
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: 'easeInOut' } },
  tap: { scale: 0.98 },
};

// ============================================================
// ARROW (for CTA buttons)
// ============================================================
export const arrowHover: Variants = {
  rest: { x: 0 },
  hover: { x: 5, transition: { duration: 0.2, ease: 'easeInOut' } },
};

// ============================================================
// LOGO
// ============================================================
export const logoReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: ease.power },
  },
};

// ============================================================
// NAV BAR
// ============================================================
export const navReveal: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: ease.power, delay: 0.1 },
  },
};
