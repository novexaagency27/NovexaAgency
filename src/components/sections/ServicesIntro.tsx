/**
 * NOVEXA — Services Introduction Section
 * Explains customized strategy & non-templated creative execution.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const ServicesIntro: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="services-intro"
      aria-label="Services Overview"
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
          className="services-intro-grid"
        >
          {/* Left Column: Heading & Pull Statement */}
          <div>
            <SectionHeading
              label="Tailored Capabilities"
              title="Built Around Your Commercial Goals"
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
                "Off-the-shelf packages produce forgettable brands. We engineer bespoke creative solutions."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
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
              We do not believe in one-size-fits-all service tiers. Every brand operates in a unique market environment
              with distinct competitive demands, target demographics, and growth ambitions.
            </p>

            <p className="type-body" style={{ color: 'var(--color-text-muted)' }}>
              At NOVEXA, every project begins with strategic research to understand what will drive meaningful outcomes
              for your business. Whether developing an international web presence, crafting cinematic video campaigns, or
              structuring an end-to-end brand identity, our execution is tailored with precision.
            </p>

            <p className="type-body" style={{ color: 'var(--color-text-muted)' }}>
              We eliminate unnecessary friction and fluff, focusing exclusively on high-end creative craft and functional
              performance that elevate your brand's market authority.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesIntro;
