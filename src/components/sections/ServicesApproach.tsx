/**
 * NOVEXA — Services Approach Section
 * Horizontal card system detailing the 6-stage project methodology.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiSearchLine,
  RiCompass3Line,
  RiPaintBrushLine,
  RiCodeSSlashLine,
  RiEqualizerLine,
  RiCheckDoubleLine,
} from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const approachSteps = [
  {
    step: '01',
    icon: <RiSearchLine size={22} />,
    title: 'Research',
    description: 'We audit your industry landscape, audience behaviors, and competitor positioning to establish data-driven creative baselines.',
  },
  {
    step: '02',
    icon: <RiCompass3Line size={22} />,
    title: 'Strategy',
    description: 'We define the strategic narrative, messaging pillars, and core positioning that steer all visual and technical decisions.',
  },
  {
    step: '03',
    icon: <RiPaintBrushLine size={22} />,
    title: 'Creative Direction',
    description: 'We establish bespoke aesthetic frameworks, moodboards, and visual direction concepts aligned with your brand identity.',
  },
  {
    step: '04',
    icon: <RiCodeSSlashLine size={22} />,
    title: 'Execution',
    description: 'We design and engineer high-fidelity brand assets, web applications, motion graphics, or marketing collateral.',
  },
  {
    step: '05',
    icon: <RiEqualizerLine size={22} />,
    title: 'Refinement',
    description: 'We rigorously test, polish, and iterate based on collaborative feedback to achieve flawless finish and performance.',
  },
  {
    step: '06',
    icon: <RiCheckDoubleLine size={22} />,
    title: 'Delivery & Launch',
    description: 'We deploy production systems, package final brand assets, and provide ongoing growth support for long-term impact.',
  },
];

export const ServicesApproach: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="services-approach"
      aria-label="Our Approach"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeading
            label="Our Approach"
            title="How We Execute Every Project"
            subtitle="A disciplined creative methodology that balances strategic rigor with aesthetic excellence."
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
          className="approach-grid"
        >
          {approachSteps.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2rem 1.75rem',
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
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '4px',
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
                  {item.step}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
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
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
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
          .approach-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .approach-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesApproach;
