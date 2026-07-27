/**
 * NOVEXA — Services Comparison Section
 * Honest comparison outlining the client experience when partnering with NOVEXA.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const comparisons = [
  {
    feature: 'Tailored Solutions',
    standard: 'Generic templates and recycled layouts applied without market context.',
    novexa: 'Bespoke design systems & code built specifically around your business goals.',
  },
  {
    feature: 'Premium Design Quality',
    standard: 'Baseline stock aesthetics that blend into overcrowded market noise.',
    novexa: 'International agency-grade visual polish, typography balance, & luxury feel.',
  },
  {
    feature: 'Responsive Experiences',
    standard: 'Rigid mobile adaptations with broken layouts and slow load times.',
    novexa: 'Flawless responsive performance engineered for speed and accessibility.',
  },
  {
    feature: 'Creative Strategy',
    standard: 'Pure execution without understanding brand positioning or audience.',
    novexa: 'In-depth research and positioning strategy guiding every design decision.',
  },
  {
    feature: 'Long-Term Partnership',
    standard: 'Transactional handoffs with minimal post-launch support or alignment.',
    novexa: 'Invested creative partnership offering continuous optimization and growth.',
  },
  {
    feature: 'Attention to Detail',
    standard: 'Rushed execution missing alignment, spacing rules, and brand cohesion.',
    novexa: 'Immaculate spatial harmony, refined micro-interactions, and visual precision.',
  },
];

export const ServicesComparison: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="services-comparison"
      aria-label="The NOVEXA Advantage"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="The Advantage"
            title="What Working With NOVEXA Means"
            subtitle="An honest comparison of standard agency deliverables versus our high-craft standard."
            align="center"
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr 1.2fr',
              gap: '1.5rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--color-surface)',
              borderRadius: '4px',
              border: '1px solid var(--color-border)',
            }}
            className="comparison-header"
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-subtle)' }}>
              Core Pillar
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-subtle)' }}>
              Standard Approach
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              The NOVEXA Standard
            </span>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={item.feature}
              variants={fadeUp}
              custom={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1.2fr',
                gap: '1.5rem',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
              }}
              className="comparison-row"
            >
              {/* Feature Title */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                  }}
                >
                  {item.feature}
                </h3>
              </div>

              {/* Standard */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <RiCloseLine size={18} style={{ color: '#A8A49D', marginTop: '0.15rem', flexShrink: 0 }} aria-hidden="true" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-subtle)', lineHeight: 1.6 }}>
                  {item.standard}
                </p>
              </div>

              {/* NOVEXA Standard */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <RiCheckLine size={18} style={{ color: 'var(--color-accent)', marginTop: '0.15rem', flexShrink: 0 }} aria-hidden="true" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 500, lineHeight: 1.6 }}>
                  {item.novexa}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .comparison-header {
            display: none !important;
          }
          .comparison-row {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesComparison;
