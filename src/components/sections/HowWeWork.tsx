/**
 * NOVEXA — How We Work Section (About Timeline)
 * Detailed 6-stage workflow timeline with subtle motion.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const workflowSteps = [
  {
    step: '01',
    title: 'Discover',
    detail: 'Deep-dive discovery session to align on business objectives, target audience, brand challenges, and strategic direction.',
  },
  {
    step: '02',
    title: 'Research',
    detail: 'Comprehensive market analysis, competitor audit, and visual inspiration curation to identify white space opportunities.',
  },
  {
    step: '03',
    title: 'Strategy',
    detail: 'Defining core brand positioning, key messaging pillars, and a clear project roadmap before initiating design work.',
  },
  {
    step: '04',
    title: 'Design',
    detail: 'Crafting bespoke visual concepts, typography systems, user interfaces, or motion assets tailored to your brand identity.',
  },
  {
    step: '05',
    title: 'Refinement',
    detail: 'Iterative feedback rounds to polish every detail, ensuring seamless aesthetic cohesion and operational precision.',
  },
  {
    step: '06',
    title: 'Delivery',
    detail: 'Final asset handover, web deployment, brand guideline delivery, and ongoing support for continuous digital growth.',
  },
];

export const HowWeWork: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="how-we-work"
      aria-label="How We Work Timeline"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeading
            label="Methodology"
            title="How We Execute Projects"
            subtitle="A structured 6-stage framework designed for predictability, clarity, and exceptional quality."
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{ position: 'relative' }}
        >
          {/* Vertical central timeline line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '1px',
              backgroundColor: 'var(--color-border)',
              transform: 'translateX(-50%)',
            }}
            className="timeline-central-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {workflowSteps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  custom={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 60px 1fr',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                  className="timeline-row"
                >
                  {/* Left Column */}
                  <div style={{ textAlign: isEven ? 'right' : 'left', order: isEven ? 1 : 3 }} className="timeline-content">
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                        display: 'block',
                        marginBottom: '0.3rem',
                      }}
                    >
                      Stage {item.step}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        letterSpacing: '-0.01em',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text-muted)',
                        maxWidth: '420px',
                        marginLeft: isEven ? 'auto' : 0,
                        marginRight: isEven ? 0 : 'auto',
                      }}
                    >
                      {item.detail}
                    </p>
                  </div>

                  {/* Center Node */}
                  <div
                    style={{
                      order: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        border: '3px solid var(--color-surface)',
                        color: 'var(--color-bg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                      }}
                    >
                      {item.step}
                    </div>
                  </div>

                  {/* Right Column (Empty spacer for alternate side) */}
                  <div style={{ order: isEven ? 3 : 1 }} className="timeline-spacer" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-central-line {
            left: 20px !important;
          }
          .timeline-row {
            grid-template-columns: 40px 1fr !important;
            gap: 1.5rem !important;
          }
          .timeline-spacer {
            display: none !important;
          }
          .timeline-content {
            order: 2 !important;
            text-align: left !important;
          }
          .timeline-content p {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWork;
