/**
 * NOVEXA — About Preview Section
 * Editorial introduction with real founder imagery, animated stats counters,
 * line-by-line headline reveals, and subtle drifting background glow.
 */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiArrowRightLine } from 'react-icons/ri';
import { TEAM } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';

const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const trustStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Global Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '< 2 hrs', label: 'Avg Response Time' },
];

const philosophyPoints = [
  {
    title: 'Design First',
    body: 'Every decision starts with design thinking. We solve real business problems through craft, not trends.',
  },
  {
    title: 'Quality Over Quantity',
    body: 'We work with a select number of clients to ensure every project receives the attention it deserves.',
  },
  {
    title: 'Business-Focused',
    body: 'Beautiful design is only as valuable as the results it creates. We measure success by yours.',
  },
];

export const AboutPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="about-preview"
      aria-label="About NOVEXA"
      style={{
        backgroundColor: 'var(--color-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      {/* Subtle drifting ambient gradient */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,129,113,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-novexa" ref={containerRef}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* ── Left: Editorial Founder Imagery ── */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {/* Founder 1 Image */}
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: POWER }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  backgroundColor: 'var(--color-primary)',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <motion.img
                  src="/founders/hetvi.webp"
                  alt="Hetvi Koradiya — Founder & Creative Director"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13,17,23,0.7) 0%, transparent 60%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#F8F6F2', margin: 0, lineHeight: 1.1 }}>
                    Hetvi Koradiya
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: 0, marginTop: '0.2rem' }}>
                    Creative Director
                  </p>
                </div>
              </motion.div>

              {/* Founder 2 Image */}
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.25, ease: POWER }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  backgroundColor: 'var(--color-primary)',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  marginTop: '2rem',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <motion.img
                  src="/founders/krish.webp"
                  alt="Krish Patel — Co-Founder & Technical Architect"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13,17,23,0.7) 0%, transparent 60%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#F8F6F2', margin: 0, lineHeight: 1.1 }}>
                    Krish Patel
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: 0, marginTop: '0.2rem' }}>
                    Technical Architect
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner accent */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-1rem',
                width: '60px',
                height: '60px',
                borderTop: '2px solid var(--color-accent)',
                borderLeft: '2px solid var(--color-accent)',
                opacity: 0.4,
              }}
            />
          </div>

          {/* ── Right: Text Content & Stats ── */}
          <div>
            <SectionHeading
              label="About NOVEXA"
              title="A Creative Agency That Thinks Like a Business Partner"
              subtitle="We're not just designers—we're strategic thinkers who happen to be very good at design. At NOVEXA, we believe that great work solves real problems."
            />

            {/* Philosophy points */}
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {philosophyPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: POWER }}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: '2px',
                      height: '100%',
                      backgroundColor: 'var(--color-accent)',
                      opacity: 0.6,
                      flexShrink: 0,
                      alignSelf: 'stretch',
                      marginTop: '0.2rem',
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        letterSpacing: '0.02em',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {point.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        color: 'var(--color-text-muted)',
                        margin: 0,
                      }}
                    >
                      {point.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--color-border)',
              }}
              className="about-trust-metrics"
            >
              {trustStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.08, ease: EASE }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      lineHeight: 1,
                      marginBottom: '0.35rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-subtle)',
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              style={{ marginTop: '2.5rem' }}
            >
              <motion.a
                href="/about"
                className="btn btn-primary inline-flex items-center gap-2"
                id="about-learn-more"
                aria-label="Learn more about NOVEXA"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
                <RiArrowRightLine size={15} aria-hidden="true" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .about-trust-metrics {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;
