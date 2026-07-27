/**
 * NOVEXA — About Hero Section
 * Minimal, elegant, large editorial typography.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowDownLine } from 'react-icons/ri';
import { fadeUp, maskReveal, staggerContainer } from '@/utils/animations';

export const AboutHero: React.FC = () => {
  const scrollToWhoWeAre = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('who-we-are');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about-hero"
      aria-label="About NOVEXA Hero"
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

      {/* Radial accent glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,61,58,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-novexa" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ maxWidth: '900px' }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="section-label" style={{ marginBottom: '2rem' }}>
            <span className="type-label" style={{ color: 'var(--color-accent)' }}>
              About NOVEXA
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
                Designing Brands That Create{' '}
                <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
                  Lasting Impact.
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
              maxWidth: '640px',
              marginBottom: '3rem',
            }}
          >
            NOVEXA is a premium creative agency built on strategic design, refined aesthetics,
            and digital craftsmanship. We help ambitious businesses establish memorable brand identities
            and high-converting digital experiences.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <motion.a
              href="#who-we-are"
              onClick={scrollToWhoWeAre}
              className="btn btn-ghost inline-flex items-center gap-3"
              id="about-hero-cta"
              aria-label="View Our Story"
              whileHover={{ y: -2, backgroundColor: 'rgba(248,246,242,0.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Our Story</span>
              <RiArrowDownLine size={16} aria-hidden="true" />
            </motion.a>

            <motion.a
              href="/portfolio"
              className="btn inline-flex items-center gap-2"
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(248,246,242,0.6)',
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
              View Our Work →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
