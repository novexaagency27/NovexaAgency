/**
 * NOVEXA — Portfolio Statement Section
 * Editorial quote block on dark background.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp } from '@/utils/animations';

export const PortfolioStatement: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="portfolio-statement"
      aria-label="Portfolio Philosophy Quote"
      style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              display: 'block',
              marginBottom: '2rem',
            }}
          >
            Creative Philosophy
          </span>

          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-bg)',
              margin: '0 0 2rem 0',
            }}
          >
            "Exceptional design is never superficial decoration. It is the strategic language through which ambitious brands command authority, communicate value, and build lasting trust."
          </blockquote>

          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(248,246,242,0.45)',
            }}
          >
            — NOVEXA Creative Direction
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioStatement;
