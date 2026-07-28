/**
 * NOVEXA — Legal Bottom CTA Section
 * Reusable closing CTA component for all legal pages.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import { BRAND, getWhatsAppUrl } from '@/utils/constants';

export const LegalBottomCTA: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '5rem',
        backgroundColor: 'var(--color-primary)',
        borderRadius: '24px',
        padding: 'clamp(2.5rem, 6vw, 4.5rem)',
        color: '#F8F6F2',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(13,17,23,0.25)',
        textAlign: 'center',
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,61,58,0.5) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Clear Communication
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: '#F8F6F2',
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            lineHeight: 1.1,
          }}
        >
          Have Questions?
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'rgba(248,246,242,0.65)',
            marginBottom: '2.5rem',
          }}
        >
          If you have any questions regarding our legal policies, feel free to contact us before starting your project.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Primary Button — WhatsApp */}
          <motion.a
            href={getWhatsAppUrl('consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-3"
            style={{
              backgroundColor: '#25D366',
              color: '#0D1117',
              fontWeight: 700,
              fontSize: '0.875rem',
              padding: '0.9375rem 2.25rem',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <RiWhatsappLine size={18} />
            <span>Chat on WhatsApp (+91 9227025524)</span>
          </motion.a>

          {/* Secondary Button — Email Us */}
          <motion.a
            href={`mailto:${BRAND.email}`}
            className="btn btn-ghost inline-flex items-center gap-3"
            style={{
              borderColor: 'rgba(248,246,242,0.3)',
              color: '#F8F6F2',
              fontSize: '0.875rem',
              padding: '0.9375rem 2.25rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(248,246,242,0.06)',
            }}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(248,246,242,0.12)' }}
            whileTap={{ scale: 0.98 }}
          >
            <RiMailLine size={18} />
            <span>Email Us</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default LegalBottomCTA;
