/**
 * NOVEXA — Project Collaboration Section
 * Explains client touchpoints, feedback loops, and milestone approvals.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const touchpoints = [
  {
    step: '01',
    title: 'Regular Status Updates',
    description: 'Scheduled weekly check-ins keeping you informed on milestone progress, upcoming deliverables, and timeline status.',
  },
  {
    step: '02',
    title: 'Structured Design Reviews',
    description: 'Guided walkthrough sessions presenting visual concepts, wireframes, and production builds with strategic context.',
  },
  {
    step: '03',
    title: 'Iterative Feedback Cycles',
    description: 'Clear, collaborative review rounds where your input is refined into actionable design and technical adjustments.',
  },
  {
    step: '04',
    title: 'Formal Approval Sign-Offs',
    description: 'Defined milestone sign-offs before moving into execution, preventing surprises and ensuring total scope alignment.',
  },
];

export const ProjectCollaboration: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="project-collaboration"
      aria-label="Client Collaboration"
      style={{ backgroundColor: 'var(--color-surface)' }}
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
            gridTemplateColumns: '1fr 1.2fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="collaboration-grid"
        >
          {/* Left Column */}
          <div>
            <SectionHeading
              label="Client Partnership"
              title="How You Stay Involved Throughout"
              subtitle="We believe the best creative work happens when clients are active, informed partners in the process."
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
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  lineHeight: 1.5,
                }}
              >
                No black boxes. No radio silence. Just clear milestones and open collaboration from start to launch.
              </p>
            </div>
          </div>

          {/* Right Column: Touchpoint List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {touchpoints.map((t, i) => (
              <motion.div
                key={t.step}
                variants={fadeUp}
                custom={i}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--color-accent)',
                    marginTop: '0.2rem',
                    flexShrink: 0,
                  }}
                >
                  {t.step}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {t.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .collaboration-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectCollaboration;
