/**
 * NOVEXA — What Happens Next Section
 * Post-contact timeline detailing the 4 steps after reaching out.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiMessage2Line,
  RiChatCheckLine,
  RiFileList3Line,
  RiRocket2Line,
} from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const nextSteps = [
  {
    step: '01',
    icon: <RiMessage2Line size={22} />,
    title: 'Send Message',
    description: 'Reach out via WhatsApp or email with your project vision, goals, or preliminary questions.',
  },
  {
    step: '02',
    icon: <RiChatCheckLine size={22} />,
    title: 'Project Discussion',
    description: 'We hold a focused discovery consultation to align on scope, deliverables, and commercial objectives.',
  },
  {
    step: '03',
    icon: <RiFileList3Line size={22} />,
    title: 'Proposal & Roadmap',
    description: 'We provide a tailored project proposal detailing strategic direction, timelines, and deliverables.',
  },
  {
    step: '04',
    icon: <RiRocket2Line size={22} />,
    title: 'Project Launch',
    description: 'Upon alignment, we initiate research and concept development—starting your project journey.',
  },
];

export const WhatHappensNext: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="what-happens-next"
      aria-label="Post-Contact Steps"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Clear Expectations"
            title="What Happens After You Reach Out"
            subtitle="Four simple steps from your first message to official project kickoff."
            align="center"
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="what-next-grid"
        >
          {nextSteps.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-bg)',
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent)',
                  }}
                >
                  Step {item.step}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .what-next-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .what-next-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatHappensNext;
