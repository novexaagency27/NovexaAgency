/**
 * NOVEXA — Our Philosophy Section
 * Three premium cards outlining core agency principles.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const philosophies = [
  {
    number: '01',
    title: 'Design with Purpose',
    subtitle: 'Solving Real Business Problems',
    description:
      'Aesthetics without strategy are meaningless. Every layout, color choice, and line of code we craft is calculated to solve a real business challenge and drive tangible outcomes.',
  },
  {
    number: '02',
    title: 'Quality Over Quantity',
    subtitle: 'Focused Creative Dedication',
    description:
      'We intentionally limit the number of projects we accept. This guarantees that every brand we work with receives uncompromised attention, deep research, and production-grade execution.',
  },
  {
    number: '03',
    title: 'Partnership Over Projects',
    subtitle: 'Long-Term Growth Collaboration',
    description:
      'We do not view ourselves as external contractors, but as invested creative partners. We build lasting relationships rooted in transparency, mutual respect, and continuous growth.',
  },
];

export const OurPhilosophy: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.12 });

  return (
    <section
      id="our-philosophy"
      aria-label="Our Philosophy"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <SectionHeading
          label="Our Principles"
          title="The Philosophy Behind Our Work"
          subtitle="Three core tenets that define how we think, design, and collaborate with every client."
          className="mb-16"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="philosophy-grid"
        >
          {philosophies.map((item, index) => (
            <motion.article
              key={item.number}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Number watermark */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  marginBottom: '1.5rem',
                  display: 'block',
                }}
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                {item.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-subtle)',
                  marginBottom: '1.25rem',
                }}
              >
                {item.subtitle}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.925rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-muted)',
                }}
              >
                {item.description}
              </p>

              {/* Subtle top indicator bar */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-secondary)',
                  opacity: 0.6,
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurPhilosophy;
