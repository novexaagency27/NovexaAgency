/**
 * NOVEXA — Services Hero Section
 * Full-width hero with editorial typography and dual CTAs.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine, RiArrowRightLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { fadeUp, maskReveal, staggerContainer } from '@/utils/animations';

export const ServicesHero: React.FC = () => {
  return (
    <section
      id="services-hero"
      aria-label="Services Hero"
      style={{
        minHeight: '60vh',
        backgroundColor: 'var(--color-primary)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5.5rem',
        paddingBottom: '3.5rem',
      }}
    >
      {/* Background subtle grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(248,246,242,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,246,242,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,61,58,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-novexa" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ maxWidth: '920px' }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="section-label" style={{ marginBottom: '2rem' }}>
            <span className="type-label" style={{ color: 'var(--color-accent)' }}>
              Agency Capabilities
            </span>
          </motion.div>

          {/* Headline */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="clip-reveal">
              <motion.h1
                variants={maskReveal}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-bg)',
                  margin: 0,
                }}
              >
                Crafting Brand Identities & Digital Experiences That{' '}
                <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
                  Drive Growth.
                </span>
              </motion.h1>
            </div>
          </div>

          {/* Supporting paragraph */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
              lineHeight: 1.75,
              color: 'rgba(248,246,242,0.65)',
              maxWidth: '660px',
              marginBottom: '3rem',
            }}
          >
            NOVEXA provides specialized creative services tailored to your business objectives.
            From brand identity and web development to video production and social media management,
            we craft high-end visual systems built for long-term impact.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a
              href={getWhatsAppUrl('services')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost inline-flex items-center gap-3"
              id="services-hero-primary-cta"
              aria-label="Start Your Project on WhatsApp"
              whileHover={{ y: -2, backgroundColor: 'rgba(248,246,242,0.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={17} aria-hidden="true" />
              <span>Start Your Project</span>
            </motion.a>

            <motion.a
              href="/portfolio"
              className="btn inline-flex items-center gap-2"
              id="services-hero-secondary-cta"
              aria-label="View Portfolio"
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(248,246,242,0.65)',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              whileHover={{ color: 'var(--color-bg)', x: 3 }}
            >
              <span>View Portfolio</span>
              <RiArrowRightLine size={15} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
