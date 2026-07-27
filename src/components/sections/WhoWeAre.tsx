/**
 * NOVEXA — Who We Are Section
 * Two-column editorial layout explaining agency purpose & design philosophy.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const WhoWeAre: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="who-we-are"
      aria-label="Who We Are"
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
          className="who-we-are-grid"
        >
          {/* Left Column: Large Heading & Label */}
          <div>
            <SectionHeading
              label="Who We Are"
              title="A Design-First Agency Solving Real Business Problems"
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
                "We don't just build brands, we build legacies."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
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
              NOVEXA was founded with a singular conviction: that design is not merely aesthetic ornamentation,
              but a strategic catalyst for business growth and market distinction.
            </p>

            <p className="type-body" style={{ color: 'var(--color-text-muted)' }}>
              In an overcrowded digital landscape, generic solutions fall flat. We partner closely with visionary
              brands to craft tailor-made visual identities, high-performing websites, compelling motion graphics,
              and strategic social content that capture attention and build trust.
            </p>

            <p className="type-body" style={{ color: 'var(--color-text-muted)' }}>
              Our approach prioritizes craft, intention, and measurable impact. By maintaining a focused client
              roster, we ensure every project receives deep strategic thinking and immaculate attention to detail
              from concept through launch.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .who-we-are-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
