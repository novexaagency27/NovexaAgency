/**
 * NOVEXA — Services Grid Section
 * 3-column responsive grid displaying official agency services with deliverables.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiBrush2Line,
  RiLayout3Line,
  RiCodeSSlashLine,
  RiFilmLine,
  RiInstagramLine,
  RiPenNibLine,
  RiCheckLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { SERVICES, getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  RiBrush2Line: <RiBrush2Line size={24} />,
  RiLayout3Line: <RiLayout3Line size={24} />,
  RiCodeSSlashLine: <RiCodeSSlashLine size={24} />,
  RiFilmLine: <RiFilmLine size={24} />,
  RiInstagramLine: <RiInstagramLine size={24} />,
  RiPenNibLine: <RiPenNibLine size={24} />,
};

const serviceDeliverables: Record<string, string[]> = {
  'brand-identity': [
    'Primary & Secondary Logos',
    'Color Palette & Typography',
    'Brand Guidelines Manual',
    'Stationery & Collateral',
  ],
  'website-design': [
    'UI/UX Architecture & Wireframes',
    'Responsive Desktop & Mobile Screens',
    'Interactive Component Library',
    'Figma/Design Asset Handoff',
  ],
  'website-development': [
    'Fast, Modern Tech Stack',
    'SEO & Performance Optimization',
    'Smooth Motion & Animations',
    'Cross-Device Compatibility',
  ],
  'video-editing': [
    'Cinematic Commercials',
    'Short-Form Reels & Shorts',
    'Motion Graphics & Titles',
    'Professional Color Grading',
  ],
  'social-media-management': [
    'Monthly Content Strategy',
    'Custom Feed & Story Designs',
    'Strategic Captions & Copywriting',
    'Performance Tracking & Growth',
  ],
  'graphic-design': [
    'Marketing & Sales Collateral',
    'Product Packaging & Labels',
    'Presentation Decks',
    'Digital Banners & Assets',
  ],
};

export const ServicesGrid: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      id="services-grid-section"
      aria-label="Capabilities Grid"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Service Suite"
            title="Comprehensive Creative Capabilities"
            subtitle="Explore our end-to-end creative and technical services designed for brand growth."
            align="center"
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="services-page-grid"
        >
          {SERVICES.map((service, i) => {
            const deliverables = serviceDeliverables[service.id] || [];
            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent)',
                    marginBottom: '1.25rem',
                    display: 'block',
                  }}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  aria-hidden="true"
                  style={{
                    width: '46px',
                    height: '46px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-bg)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.75rem',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--color-border)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-subtle)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Key Deliverables
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {deliverables.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8rem',
                          color: 'var(--color-text)',
                        }}
                      >
                        <RiCheckLine size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link */}
                <a
                  href={getWhatsAppUrl('services')}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`services-grid-cta-${service.id}`}
                  aria-label={`Discuss ${service.title} on WhatsApp`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                  }}
                >
                  <span>Discuss Service</span>
                  <RiArrowRightLine size={14} aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-page-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
