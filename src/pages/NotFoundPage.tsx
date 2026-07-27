/**
 * NOVEXA — Premium 404 Page Not Found Component
 * Editorial 404 page adhering strictly to the Master Design System.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { RiWhatsappLine, RiArrowLeftLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { fadeUp, staggerContainer } from '@/utils/animations';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | NOVEXA</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section
        id="not-found-page"
        aria-label="Page Not Found"
        style={{
          minHeight: '85vh',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '8rem',
          paddingBottom: '6rem',
        }}
      >
        {/* Background grid */}
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
            top: '-20%',
            right: '10%',
            width: '50vw',
            height: '50vw',
            maxWidth: '650px',
            maxHeight: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,61,58,0.4) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container-novexa" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}
          >
            {/* Number watermark */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(5rem, 15vw, 10rem)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--color-accent)',
                opacity: 0.3,
                marginBottom: '1rem',
              }}
            >
              404
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--color-bg)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              The Page You Are Looking For Does Not Exist.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'rgba(248,246,242,0.65)',
                marginBottom: '2.75rem',
                maxWidth: '520px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              The link may be broken or the URL was entered incorrectly. Return to our homepage or reach out to our team directly on WhatsApp.
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                gap: '1.25rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <motion.a
                href="/"
                id="404-home-btn"
                aria-label="Back to Home"
                className="btn btn-ghost inline-flex items-center gap-2"
                whileHover={{ y: -2, backgroundColor: 'rgba(248,246,242,0.08)' }}
                whileTap={{ scale: 0.98 }}
              >
                <RiArrowLeftLine size={16} aria-hidden="true" />
                <span>Back to Home</span>
              </motion.a>

              <motion.a
                href={getWhatsAppUrl('consultation')}
                target="_blank"
                rel="noopener noreferrer"
                id="404-whatsapp-btn"
                aria-label="Start Your Project on WhatsApp"
                className="btn inline-flex items-center gap-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'rgba(248,246,242,0.75)',
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
                <RiWhatsappLine size={16} aria-hidden="true" />
                <span>Start Your Project</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
