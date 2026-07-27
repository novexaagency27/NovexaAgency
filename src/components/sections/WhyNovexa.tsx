/**
 * NOVEXA — Why Choose Us Section
 * Premium strength cards with subtle motion.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiCompassLine,
  RiLightbulbLine,
  RiFocusLine,
  RiSmartphoneLine,
  RiAwardLine,
  RiBarChartBoxLine,
} from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const strengths = [
  {
    icon: <RiCompassLine size={22} />,
    title: 'Strategic Design',
    body: 'Design rooted in research and strategy. We understand your audience before we open a sketchbook.',
  },
  {
    icon: <RiLightbulbLine size={22} />,
    title: 'Creative Thinking',
    body: 'We find the angle others miss. Fresh perspectives applied to real creative challenges.',
  },
  {
    icon: <RiFocusLine size={22} />,
    title: 'Attention to Detail',
    body: 'The space between letters, the weight of a font, the rhythm of a layout—nothing is left to chance.',
  },
  {
    icon: <RiSmartphoneLine size={22} />,
    title: 'Modern User Experience',
    body: 'Every touchpoint is designed for the people who will use it—intuitive, clear, and delightful.',
  },
  {
    icon: <RiAwardLine size={22} />,
    title: 'Premium Visual Identity',
    body: 'We create identities that communicate quality before a single word is read.',
  },
  {
    icon: <RiBarChartBoxLine size={22} />,
    title: 'Business-Focused Solutions',
    body: 'Creative work aligned with commercial goals. We measure success by the results we help generate.',
  },
];

export const WhyNovexa: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      id="why-novexa"
      aria-label="Why Choose NOVEXA"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        {/* Heading — centered */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Why NOVEXA"
            title="Built on Craft. Driven by Results."
            subtitle="We bring together creative excellence and strategic thinking to deliver work that performs as well as it looks."
            align="center"
          />
        </div>

        {/* Cards Grid */}
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
          className="why-grid"
        >
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner number */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'var(--color-border)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  userSelect: 'none',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div
                aria-hidden="true"
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-bg)',
                  marginBottom: '1.25rem',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  letterSpacing: '0.01em',
                  marginBottom: '0.6rem',
                }}
              >
                {item.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-muted)',
                }}
              >
                {item.body}
              </p>

              {/* Subtle bottom accent */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--color-accent) 0%, transparent 100%)',
                  opacity: 0.4,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyNovexa;
