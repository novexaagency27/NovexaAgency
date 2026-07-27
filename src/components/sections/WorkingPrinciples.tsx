/**
 * NOVEXA — Working Principles Section
 * 6-card grid displaying operational values and collaboration standards.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiMessage3Line,
  RiFocus3Line,
  RiLightbulbLine,
  RiCompass3Line,
  RiShieldCheckLine,
  RiHeartPulseLine,
} from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const principles = [
  {
    icon: <RiMessage3Line size={22} />,
    title: 'Transparent Communication',
    description: 'Direct, honest communication through dedicated project channels and structured milestone updates.',
  },
  {
    icon: <RiFocus3Line size={22} />,
    title: 'Attention to Detail',
    description: 'Refining typography grid balance, micro-interactions, responsive offsets, and execution precision.',
  },
  {
    icon: <RiLightbulbLine size={22} />,
    title: 'Creative Thinking',
    description: 'Challenging repetitive templates to deliver bespoke visual identities tailored to your market positioning.',
  },
  {
    icon: <RiCompass3Line size={22} />,
    title: 'Strategic Decisions',
    description: 'Grounding every design aesthetic and technical architecture choice in strategic business logic.',
  },
  {
    icon: <RiShieldCheckLine size={22} />,
    title: 'Quality Assurance',
    description: 'Rigorous cross-browser, mobile performance, and asset verification prior to production launch.',
  },
  {
    icon: <RiHeartPulseLine size={22} />,
    title: 'Long-Term Partnership',
    description: 'Acting as an invested creative partner dedicated to continuous optimization and digital growth.',
  },
];

export const WorkingPrinciples: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="working-principles"
      aria-label="Working Principles"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Operational Values"
            title="Principles That Guide Every Project"
            subtitle="The fundamental standards we uphold across every client engagement."
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
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="principles-grid"
        >
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2rem 1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginBottom: '0.4rem',
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .principles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .principles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkingPrinciples;
