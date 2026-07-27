/**
 * NOVEXA — Our Values Section ("What We Believe")
 * 4 principles shaping agency philosophy with scroll reveals and micro-interactions.
 */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  RiCompass3Line,
  RiSparklingLine,
  RiShieldCheckLine,
  RiHeartPulseLine,
} from 'react-icons/ri';
import { SectionHeading } from '@/components/ui/SectionHeading';

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];

const principles = [
  {
    number: '01',
    icon: <RiSparklingLine size={24} />,
    title: 'Craft Over Shortcuts',
    subtitle: 'Every detail is intentional.',
    description:
      'We never use templates or generic quick fixes. Every layout, line of code, and visual accent is custom-tailored for your brand.',
  },
  {
    number: '02',
    icon: <RiCompass3Line size={24} />,
    title: 'Strategy Before Design',
    subtitle: 'Form follows business purpose.',
    description:
      'Stunning visuals without clear positioning are just art. We start with market research and positioning before touching Figma.',
  },
  {
    number: '03',
    icon: <RiShieldCheckLine size={24} />,
    title: 'Quality In Every Detail',
    subtitle: 'Uncompromising execution.',
    description:
      'From typography kerning to 60 FPS scroll performance, we hold our work to world-class agency standards.',
  },
  {
    number: '04',
    icon: <RiHeartPulseLine size={24} />,
    title: 'Long-Term Partnerships',
    subtitle: 'Your growth is our benchmark.',
    description:
      'We act as your dedicated creative partner—helping you scale, evolve, and stay ahead as market conditions shift.',
  },
];

export const OurValues: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="our-values"
      aria-label="What We Believe"
      style={{ backgroundColor: 'var(--color-bg)', position: 'relative' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <SectionHeading
            label="Studio Principles"
            title="What We Believe"
            subtitle="The core values that guide every design decision, line of code, and client partnership at NOVEXA."
            align="center"
          />
        </div>

        <div
          ref={containerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="values-grid"
        >
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: POWER }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle top accent bar */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-accent)',
                  opacity: 0.4,
                }}
              />

              <div>
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: 'var(--color-text-subtle)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                  }}
                >
                  {item.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-muted)',
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurValues;
