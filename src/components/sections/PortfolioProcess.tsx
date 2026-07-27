/**
 * NOVEXA — Portfolio Process Section
 * Workflow methodology for creative projects.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const workflowSteps = [
  { step: '01', title: 'Research', text: 'Auditing target markets, user expectations, and competitor landscapes.' },
  { step: '02', title: 'Strategy', text: 'Defining clear positioning, messaging hierarchy, and execution architecture.' },
  { step: '03', title: 'Concept', text: 'Exploring visual directions, creative concepts, and layout mechanics.' },
  { step: '04', title: 'Design', text: 'Crafting high-fidelity UI screens, brand guidelines, and motion assets.' },
  { step: '05', title: 'Refinement', text: 'Finetuning micro-interactions, responsive behavior, and visual polish.' },
  { step: '06', title: 'Delivery', text: 'Handing over production code, digital assets, and post-launch guidelines.' },
];

export const PortfolioProcess: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="portfolio-process"
      aria-label="Creative Process"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Methodology"
            title="How We Bring Concepts to Life"
            subtitle="A disciplined 6-stage creative workflow designed for predictable quality."
            align="center"
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1rem',
          }}
          className="portfolio-workflow-grid"
        >
          {workflowSteps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              custom={i}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  marginBottom: '0.75rem',
                }}
              >
                {s.step}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: '0.4rem',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  color: 'var(--color-text-muted)',
                }}
              >
                {s.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-workflow-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 600px) {
          .portfolio-workflow-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioProcess;
