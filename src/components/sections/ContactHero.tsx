/**
 * NOVEXA — Contact Hero Section
 * High-impact dark header showcasing headline, lead paragraph, and WhatsApp direct CTA.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine, RiArrowRightLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { fadeUp, maskReveal, staggerContainer } from '@/utils/animations';

export const ContactHero: React.FC = () => {
  return (
    <section
      id="contact-hero"
      aria-label="Contact Header"
      style={{
        minHeight: '50vh',
        backgroundColor: 'var(--color-primary)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5.5rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Background texture grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(248,246,242,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,246,242,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,61,58,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-novexa" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '820px' }}>
          {/* Label */}
          <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              Inquiries & FAQ
            </span>
          </motion.div>

          {/* Main Headline */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div className="clip-reveal" style={{ lineHeight: 1 }}>
              <motion.h1
                variants={maskReveal}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#F8F6F2',
                  margin: 0,
                }}
              >
                Let's Initiate Your Next{' '}
                <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', display: 'block' }}>
                  Creative Project.
                </span>
              </motion.h1>
            </div>
          </div>

          {/* Supporting paragraph */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              lineHeight: 1.75,
              color: 'rgba(248,246,242,0.65)',
              maxWidth: '640px',
              marginBottom: '2.5rem',
            }}
          >
            Have questions about our brand identity, custom web development, video editing, or social media management services?
            We are here to assist. Connect with NOVEXA directly via WhatsApp for an immediate consultation.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a
              href={getWhatsAppUrl('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center gap-3"
              id="contact-hero-start-cta"
              aria-label="Start Your Project on WhatsApp"
              style={{
                backgroundColor: 'rgba(248,246,242,0.1)',
                borderColor: 'rgba(248,246,242,0.4)',
                color: '#F8F6F2',
                border: '1px solid rgba(248,246,242,0.4)',
              }}
              whileHover={{ y: -2, borderColor: '#F8F6F2', backgroundColor: 'rgba(248,246,242,0.18)' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={18} color="#25D366" aria-hidden="true" />
              <span>Start Your Project</span>
            </motion.a>

            <motion.a
              href="/portfolio"
              className="btn inline-flex items-center gap-2"
              id="contact-hero-explore-portfolio"
              aria-label="Explore Portfolio"
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(248,246,242,0.7)',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              whileHover={{ color: '#F8F6F2', x: 3 }}
            >
              <span>Explore Portfolio</span>
              <RiArrowRightLine size={15} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
