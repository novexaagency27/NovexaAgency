/**
 * NOVEXA — Home CTA Banner
 * "Let's Build Something Extraordinary." — Full-width premium CTA.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';

export const HomeCTABanner: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="home-cta-banner"
      aria-label="Start your project"
      style={{
        backgroundColor: 'var(--color-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      {/* Background pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(248,246,242,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,246,242,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-30%',
          right: '10%',
          width: '40vw',
          height: '40vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,129,113,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-novexa" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="type-label"
            style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}
          >
            Ready to Begin?
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#F8F6F2',
              marginBottom: '1.5rem',
            }}
          >
            Let's Build Something{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              Extraordinary.
            </em>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'rgba(248,246,242,0.6)',
              marginBottom: '2.5rem',
              maxWidth: '520px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Every great brand starts with a conversation. Tell us about your next
            project and let's make it unforgettable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <motion.a
              href={getWhatsAppUrl('services')}
              target="_blank"
              rel="noopener noreferrer"
              id="home-cta-banner-start"
              aria-label="Start your project with NOVEXA on WhatsApp"
              className="btn inline-flex items-center gap-3"
              style={{
                backgroundColor: 'rgba(248,246,242,0.1)',
                borderColor: 'rgba(248,246,242,0.4)',
                color: '#F8F6F2',
                border: '1px solid rgba(248,246,242,0.4)',
              }}
              whileHover={{ y: -2, backgroundColor: 'rgba(248,246,242,0.2)', borderColor: '#F8F6F2' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={18} color="#25D366" aria-hidden="true" />
              <span>Start Your Project</span>
            </motion.a>

            <motion.a
              href={getWhatsAppUrl('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              id="home-cta-banner-whatsapp"
              aria-label="Talk to NOVEXA on WhatsApp"
              className="btn inline-flex items-center gap-2"
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(248,246,242,0.75)',
                border: 'none',
                padding: '0.9375rem 1.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              whileHover={{ y: -2, color: '#F8F6F2' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={16} aria-hidden="true" />
              <span>Talk on WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTABanner;
