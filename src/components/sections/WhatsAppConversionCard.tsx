/**
 * NOVEXA — WhatsApp Conversion Card Section
 * Primary conversion element inviting direct WhatsApp chat.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';

export const WhatsAppConversionCard: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="whatsapp-conversion-card"
      aria-label="Direct WhatsApp Conversion"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{
            backgroundColor: 'var(--color-primary)',
            borderRadius: '4px',
            padding: '4rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Subtle accent pattern */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(248,246,242,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(248,246,242,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              pointerEvents: 'none',
            }}
          />

          <motion.div variants={fadeUp} style={{ position: 'relative', zIndex: 2 }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Direct Consultation
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontWeight: 900,
                color: 'var(--color-bg)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Let's Build Something{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
                Extraordinary.
              </em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'rgba(248,246,242,0.65)',
                maxWidth: '540px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '2.5rem',
              }}
            >
              Skip the forms. Message NOVEXA directly on WhatsApp to discuss your brand identity,
              web design, video editing, or marketing goals with our team.
            </p>

            <motion.a
              href={getWhatsAppUrl('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost inline-flex items-center gap-3 btn-lg"
              id="whatsapp-card-primary-btn"
              aria-label="Chat on WhatsApp"
              whileHover={{ y: -2, backgroundColor: 'rgba(248,246,242,0.1)' }}
              whileTap={{ scale: 0.98 }}
              style={{ fontSize: '0.875rem' }}
            >
              <RiWhatsappLine size={20} style={{ color: '#25D366' }} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppConversionCard;
