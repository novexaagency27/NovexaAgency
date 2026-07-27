/**
 * NOVEXA — Process Intro Section
 * Explains consistency, transparency, and structured efficiency.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const ProcessIntro: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="process-intro"
      aria-label="Process Overview"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="process-intro-grid"
        >
          {/* Left Column: Heading & Pull Quote */}
          <div>
            <SectionHeading
              label="Structured Quality"
              title="Predictable Excellence at Every Stage"
            />
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-secondary)',
                  lineHeight: 1.4,
                }}
              >
                "Creative work thrives when backed by transparent structure and open collaboration."
              </p>
            </div>
          </div>

          {/* Right Column: Copy */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p
              className="type-body-lg"
              style={{
                color: 'var(--color-primary)',
                fontWeight: 500,
                fontSize: '1.15rem',
                lineHeight: 1.75,
              }}
            >
              While every client engagement brings unique market challenges and creative requirements,
              our overarching methodology remains steadfast.
            </p>

            <p className="type-body" style={{ color: 'var(--color-text-muted)' }}>
              By adhering to a disciplined 6-stage workflow, we eliminate ambiguity, maintain transparent communication,
              and ensure every deliverable—from brand guidelines to web architecture—meets international high-end standards.
            </p>

            <p className="type-body" style={{ color: 'var(--color-text-muted)' }}>
              You will always know precisely where your project stands, what deliverables are next, and how your feedback
              shapes the final creative outcome.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessIntro;
