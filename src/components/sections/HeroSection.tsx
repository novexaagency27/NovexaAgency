/**
 * NOVEXA — Hero Section
 * Full-screen editorial hero. Above the fold. Every pixel intentional.
 * Multi-layer animated background, desktop mouse depth, line-by-line mask reveals.
 */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiWhatsappLine, RiArrowDownLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  imageReveal,
  staggerContainer,
  maskReveal,
} from '@/utils/animations';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop) return;
    const { innerWidth, innerHeight } = window;
    const cx = (e.clientX / innerWidth - 0.5) * 14;
    const cy = (e.clientY / innerHeight - 0.5) * 14;
    setMouseOffset({ x: cx, y: cy });
  }, [isDesktop]);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio-preview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="hero"
      aria-label="NOVEXA — Hero"
      style={{
        minHeight: 'calc(100vh - 80px)',
        backgroundColor: 'var(--color-primary)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      {/* Background texture grid */}
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

      {/* Noise grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />

      {/* Accent glow top-right with mouse depth */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: mouseOffset.x * -1.2,
          y: mouseOffset.y * -1.2,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '45vw',
          height: '45vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,61,58,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Accent glow bottom-left with mouse depth */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: mouseOffset.x * 1.2,
          y: mouseOffset.y * 1.2,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '35vw',
          height: '35vw',
          maxWidth: '500px',
          maxHeight: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,129,113,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-novexa" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* ── Left: Editorial Text ── */}
          <motion.div
            style={{ y: textY }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Label */}
            <motion.div variants={fadeUp} className="section-label" style={{ marginBottom: '1.5rem' }}>
              <span
                className="type-label"
                style={{ color: 'var(--color-accent)' }}
              >
                Premium Creative Agency
              </span>
            </motion.div>

            {/* Main headline — mask reveal */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div className="clip-reveal" style={{ lineHeight: 1 }}>
                <motion.div variants={maskReveal} transition={{ delay: 0.15 }}>
                  <h1
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.75rem, 6.5vw, 6rem)',
                      fontWeight: 900,
                      lineHeight: 1.05,
                      letterSpacing: '-0.03em',
                      color: '#F8F6F2',
                      margin: 0,
                    }}
                  >
                    We Build
                  </h1>
                </motion.div>
              </div>

              <div className="clip-reveal" style={{ lineHeight: 1, marginTop: '0.1em' }}>
                <motion.div variants={maskReveal} transition={{ delay: 0.25 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.75rem, 6.5vw, 6rem)',
                      fontWeight: 900,
                      lineHeight: 1.05,
                      letterSpacing: '-0.03em',
                      color: 'var(--color-accent)',
                      fontStyle: 'italic',
                      display: 'block',
                    }}
                  >
                    Brands
                  </span>
                </motion.div>
              </div>

              <div className="clip-reveal" style={{ lineHeight: 1, marginTop: '0.1em' }}>
                <motion.div variants={maskReveal} transition={{ delay: 0.35 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.75rem, 6.5vw, 6rem)',
                      fontWeight: 900,
                      lineHeight: 1.05,
                      letterSpacing: '-0.03em',
                      color: '#F8F6F2',
                      display: 'block',
                    }}
                  >
                    That Last.
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Supporting paragraph */}
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                lineHeight: 1.7,
                color: 'rgba(248,246,242,0.65)',
                maxWidth: '440px',
                marginBottom: '2rem',
              }}
            >
              NOVEXA creates premium digital experiences—brand identities,
              websites, social media, UI/UX, and creative content—designed
              to make businesses unforgettable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <motion.a
                href={getWhatsAppUrl('consultation')}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                aria-label="Start your project with NOVEXA on WhatsApp"
                className="btn inline-flex items-center gap-3"
                style={{
                  backgroundColor: 'rgba(248,246,242,0.1)',
                  borderColor: 'rgba(248,246,242,0.4)',
                  color: '#F8F6F2',
                  border: '1px solid rgba(248,246,242,0.4)',
                }}
                whileHover={{ y: -2, borderColor: '#F8F6F2', backgroundColor: 'rgba(248,246,242,0.18)' }}
                whileTap={{ scale: 0.98 }}
              >
                <RiWhatsappLine size={17} color="#25D366" aria-hidden="true" />
                <span>Start Your Project</span>
              </motion.a>

              <motion.a
                href="#portfolio-preview"
                onClick={scrollToPortfolio}
                id="hero-cta-secondary"
                aria-label="View NOVEXA portfolio"
                className="btn inline-flex items-center gap-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'rgba(248,246,242,0.7)',
                  border: 'none',
                  padding: '0.875rem 0',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                whileHover={{ color: '#F8F6F2', x: 2 }}
              >
                <span>View Portfolio</span>
                <RiArrowDownLine size={15} aria-hidden="true" />
              </motion.a>
            </motion.div>

            {/* Horizontal divider with caption */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.75 }}
              style={{
                marginTop: '3rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(248,246,242,0.1)',
                display: 'flex',
                gap: '2.5rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
                { value: '3+', label: 'Years' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.65rem',
                      fontWeight: 800,
                      color: '#F8F6F2',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(248,246,242,0.4)',
                      margin: 0,
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Visual Composition ── */}
          <motion.div
            style={{ y: imageY, position: 'relative' }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Main image frame */}
            <motion.div
              variants={imageReveal}
              style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
            >
              <img
                src="/hero-visual.png"
                alt="NOVEXA creative composition — premium design and brand thinking"
                loading="eager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,17,23,0.4) 0%, transparent 60%)',
                }}
              />

              {/* Floating accent badge — top right */}
              <motion.div
                variants={fadeRight}
                transition={{ delay: 0.7 }}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(138,129,113,0.92)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '4px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.15rem',
                  zIndex: 3,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-bg)',
                    opacity: 0.85,
                    margin: 0,
                  }}
                >
                  Crafted with
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.925rem',
                    fontWeight: 800,
                    color: 'var(--color-bg)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  Intention.
                </p>
              </motion.div>

              {/* Floating accent card — bottom left */}
              <motion.div
                variants={fadeLeft}
                transition={{ delay: 0.6 }}
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(31,61,58,0.92)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(138,129,113,0.3)',
                  borderRadius: '4px',
                  padding: '0.875rem 1.15rem',
                  minWidth: '150px',
                  zIndex: 3,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '0.2rem',
                    margin: 0,
                  }}
                >
                  Design First
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-bg)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  Quality over
                  <br />
                  Quantity.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
