/**
 * NOVEXA — Quality Standards Section
 * Editorial commitment grid highlighting agency production standards.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const standards = [
  {
    title: 'Visual Consistency',
    detail: 'Enforcing strict typographic scales, color harmony, and grid alignments across all brand touchpoints.',
  },
  {
    title: 'Fluid Responsiveness',
    detail: 'Designing and building digital interfaces that adapt seamlessly to every screen size and mobile viewport.',
  },
  {
    title: 'Strategic Brand Alignment',
    detail: 'Ensuring every visual artifact, graphic, and line of code reinforces your core market positioning.',
  },
  {
    title: 'User Experience Excellence',
    detail: 'Prioritizing intuitive navigation, fast load speeds, accessible contrasts, and effortless interaction.',
  },
  {
    title: 'Spatial Precision',
    detail: 'Sweating the details—from letter spacing to micro-interaction timing—to deliver a luxury finish.',
  },
  {
    title: 'Production Execution',
    detail: 'Delivering clean, maintainable code structures and master design files ready for immediate deployment.',
  },
];

export const QualityStandards: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="quality-standards"
      aria-label="Quality Standards"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeading
            label="Commitment"
            title="Our Production Standards"
            subtitle="The quality benchmarks every project must satisfy before client delivery."
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="standards-grid"
        >
          {standards.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2rem 1.75rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                0{i + 1}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                }}
              >
                {s.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .standards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .standards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default QualityStandards;
