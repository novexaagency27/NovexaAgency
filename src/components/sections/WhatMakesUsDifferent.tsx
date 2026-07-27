/**
 * NOVEXA — What Makes Us Different Section
 * Feature cards showcasing agency advantages without exaggerated claims.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiLightbulbLine,
  RiFocusLine,
  RiShieldStarLine,
  RiLineChartLine,
  RiSmartphoneLine,
  RiPaletteLine,
} from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const differentiators = [
  {
    icon: <RiLightbulbLine size={24} />,
    title: 'Creative Thinking',
    body: 'We avoid repetitive templates and generic design systems. Every brand receives a fresh, custom conceptual framework.',
  },
  {
    icon: <RiFocusLine size={24} />,
    title: 'Attention to Detail',
    body: 'Micro-interactions, typography hierarchy, spatial harmony, and motion timing are refined to perfection.',
  },
  {
    icon: <RiShieldStarLine size={24} />,
    title: 'Premium Design Standards',
    body: 'We adhere to international high-end agency standards, ensuring your brand presents a luxury aesthetic.',
  },
  {
    icon: <RiLineChartLine size={24} />,
    title: 'Business-Focused Solutions',
    body: 'Our creative work is designed to drive revenue, client confidence, and long-term brand equity.',
  },
  {
    icon: <RiSmartphoneLine size={24} />,
    title: 'Modern User Experience',
    body: 'Seamless digital interfaces engineered for fast load times, intuitive navigation, and flawless mobile performance.',
  },
  {
    icon: <RiPaletteLine size={24} />,
    title: 'Consistent Branding',
    body: 'We unify your identity across digital platforms, print materials, social feeds, and web touchpoints.',
  },
];

export const WhatMakesUsDifferent: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="what-makes-us-different"
      aria-label="What Makes Us Different"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeading
            label="Distinction"
            title="What Makes NOVEXA Different"
            subtitle="We bridge the gap between high-end design artistry and strategic commercial impact."
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
          className="different-grid"
        >
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
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

              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: '0.6rem',
                }}
              >
                {item.title}
              </h3>

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
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .different-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .different-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatMakesUsDifferent;
