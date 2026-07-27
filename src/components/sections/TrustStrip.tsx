/**
 * NOVEXA — Trust Strip / Marquee Section
 * Social proof via service capabilities marquee.
 * Immediately below hero — builds instant credibility.
 */
import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  'Brand Identity',
  'Website Design',
  'Website Development',
  'Video Editing',
  'Social Media Management',
  'Graphic Design',
  'UI/UX Design',
  'Creative Direction',
  'Visual Storytelling',
  'Digital Growth',
];

const Dot: React.FC = () => (
  <span
    aria-hidden="true"
    style={{
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: 'var(--color-accent)',
      display: 'inline-block',
      flexShrink: 0,
    }}
  />
);

const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <>
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
    <Dot />
  </>
);

export const TrustStrip: React.FC = () => {
  const doubled = [...capabilities, ...capabilities]; // double for seamless loop

  return (
    <section
      id="trust-strip"
      aria-label="NOVEXA capabilities"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
        overflow: 'hidden',
        padding: '1.25rem 0',
      }}
    >
      <div className="marquee-wrapper" aria-hidden="true">
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
            width: 'max-content',
          }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: 'linear',
          }}
        >
          {doubled.map((cap, i) => (
            <MarqueeItem key={`${cap}-${i}`} text={cap} />
          ))}
        </motion.div>
      </div>

      {/* Screen-reader accessible list */}
      <ul style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        <li>NOVEXA specialises in: {capabilities.join(', ')}</li>
      </ul>
    </section>
  );
};

export default TrustStrip;
