/**
 * NOVEXA — Testimonials & Client Results (Infinite Marquee)
 * Continuous seamless marquee loop displaying client testimonials and measurable performance metrics.
 * Pauses on hover, featuring glassmorphism card elevation and quotation mark accents.
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiDoubleQuotesL, RiWhatsappLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      'NOVEXA transformed our architectural studio brand completely. Their attention to spatial typography and high-converting web architecture led to a 120% surge in qualified client inquiries.',
    author: 'Rajiv Sharma',
    role: 'Principal Architect',
    company: 'Crafted Spaces Studio',
    metric: '+120% Traffic',
  },
  {
    quote:
      'Working with Hetvi and Krish was a game changer for Verde. From our physical packaging to our online menu platform, everything feels elevated, cohesive, and intentional.',
    author: 'Ananya Patel',
    role: 'Co-Founder',
    company: 'Verde Cafe & Bistro',
    metric: '+85% Conversions',
  },
  {
    quote:
      'The launch video cutdowns NOVEXA produced for Noir Fragrance surpassed all expectations. Over 250,000 organic views on launch day alone.',
    author: 'Vikramaditya Roy',
    role: 'Brand Director',
    company: 'Noir Fragrance Co.',
    metric: '250K+ Views',
  },
  {
    quote:
      'Our skincare brand social presence exploded within 60 days of partnering with NOVEXA. Aesthetics, strategy, and retention execution were flawless.',
    author: 'Siddharth Mehta',
    role: 'Head of Growth',
    company: 'Bare Skin Beauty',
    metric: '300% Reach',
  },
  {
    quote:
      'NOVEXA built our e-commerce platform with precision. Fast load speeds, sleek UI/UX, and an effortless luxury shopping experience.',
    author: 'Meera Kapoor',
    role: 'Marketing Lead',
    company: 'Luxray Timepieces',
    metric: '60 FPS UI',
  },
];

// Duplicate list for seamless 100% infinite marquee loop
const doubleTestimonials = [...testimonials, ...testimonials];

export const RealClientResults: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="real-client-results"
      aria-label="Client Testimonials & Performance"
      style={{ backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Client Voices"
            title="Trusted by Ambitious Brands"
            subtitle="Explore how our creative direction, web architecture, and video production drive measurable impact."
            align="center"
          />
        </div>
      </div>

      {/* ── Marquee Track Container ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '1rem',
          paddingBottom: '2.5rem',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Vignette Shadows */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '120px',
            background: 'linear-gradient(to right, var(--color-bg) 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '120px',
            background: 'linear-gradient(to left, var(--color-bg) 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* Scrolling Inner Flex Track */}
        <motion.div
          animate={{
            x: isPaused ? undefined : ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          style={{
            display: 'flex',
            gap: '1.75rem',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {doubleTestimonials.map((item, i) => (
            <motion.div
              key={`${item.company}-${i}`}
              whileHover={{
                scale: 1.03,
                y: -6,
                borderColor: 'var(--color-accent)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: '380px',
                backgroundColor: 'rgba(248,246,242,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
                position: 'relative',
              }}
            >
              {/* Quote mark accent */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <RiDoubleQuotesL size={28} style={{ color: 'var(--color-accent)', opacity: 0.8 }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--color-secondary)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '2px',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.75rem',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {item.author}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-subtle)',
                    margin: 0,
                    marginTop: '0.2rem',
                  }}
                >
                  {item.role} — <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{item.company}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <motion.a
          href={getWhatsAppUrl('consultation')}
          target="_blank"
          rel="noopener noreferrer"
          id="results-whatsapp-cta"
          aria-label="Discuss project performance goals on WhatsApp"
          className="btn btn-ghost inline-flex items-center gap-3"
          whileHover={{ y: -2, backgroundColor: 'rgba(31,61,58,0.1)' }}
          whileTap={{ scale: 0.98 }}
        >
          <RiWhatsappLine size={18} style={{ color: '#25D366' }} aria-hidden="true" />
          <span>Engineer Growth For Your Brand</span>
        </motion.a>
      </div>
    </section>
  );
};

export default RealClientResults;
