/**
 * NOVEXA — About Page CTA Banner
 * "Let's Build Something Exceptional Together." — Premium full-width section.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';

export const AboutCTABanner: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="about-cta-banner"
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

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '15%',
          width: '40vw',
          height: '40vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,129,113,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-novexa" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="type-label"
            style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}
          >
            Collaborate With Us
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-bg)',
              marginBottom: '1.5rem',
            }}
          >
            Let's Build Something{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              Exceptional
            </em>{' '}
            Together.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'rgba(248,246,242,0.65)',
              marginBottom: '2.5rem',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Partner with NOVEXA to elevate your brand identity, build a world-class digital presence,
            and create experiences that leave a lasting impression.
          </motion.p>

          {/* Dual WhatsApp Buttons */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              href={getWhatsAppUrl('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              id="about-cta-start"
              aria-label="Start Your Project on WhatsApp"
              className="btn btn-ghost inline-flex items-center gap-3"
              whileHover={{ y: -2, backgroundColor: 'rgba(248,246,242,0.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={17} aria-hidden="true" />
              Start Your Project
            </motion.a>

            <motion.a
              href={getWhatsAppUrl('default')}
              target="_blank"
              rel="noopener noreferrer"
              id="about-cta-whatsapp"
              aria-label="Talk on WhatsApp"
              className="btn inline-flex items-center gap-2"
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(248,246,242,0.7)',
                border: '1.5px solid rgba(248,246,242,0.25)',
                padding: '0.9375rem 2.5rem',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              whileHover={{ y: -2, color: 'var(--color-bg)', borderColor: 'rgba(248,246,242,0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={15} aria-hidden="true" />
              Talk on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTABanner;
