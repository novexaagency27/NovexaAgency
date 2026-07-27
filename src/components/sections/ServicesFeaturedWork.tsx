/**
 * NOVEXA — Services Featured Work
 * Displays real agency portfolio projects linked to service capabilities.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightLine } from 'react-icons/ri';
import { PORTFOLIO, getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';


export const ServicesFeaturedWork: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="services-featured-work"
      aria-label="Services Featured Work"
      style={{ backgroundColor: 'var(--color-primary)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <SectionHeading
            label="Service Output"
            title="Recent Work Delivered"
            subtitle="Explore how our core services translate into real commercial results for clients."
            dark
          />

          <motion.a
            href="/portfolio"
            className="btn btn-ghost btn-sm inline-flex items-center gap-2"
            id="services-work-view-all"
            aria-label="View Full Portfolio"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Portfolio
            <RiArrowRightLine size={14} aria-hidden="true" />
          </motion.a>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="featured-work-grid"
        >
          {PORTFOLIO.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              custom={i}
              whileHover="hover"
              initial="rest"
              animate="rest"
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(248,246,242,0.1)',
                position: 'relative',
              }}
            >
              <a
                href={getWhatsAppUrl('portfolio')}
                target="_blank"
                rel="noopener noreferrer"
                id={`services-portfolio-${project.id}`}
                aria-label={`View ${project.title} — Opens WhatsApp`}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                {/* Image frame */}
                <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative' }}>
                  <motion.img
                    src={project.image || '/portfolio/crafted-spaces.jpg'}
                    alt={`${project.title} portfolio case study`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.04 },
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  {/* Category Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      backgroundColor: 'rgba(13,17,23,0.85)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '2px',
                      padding: '0.35rem 0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {project.categoryShort}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '2rem', backgroundColor: 'var(--color-primary)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(248,246,242,0.45)',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--color-bg)',
                      letterSpacing: '-0.01em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'rgba(248,246,242,0.65)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.description}
                  </p>

                  <span
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
                    }}
                  >
                    <span>Discuss Work</span>
                    <RiArrowRightLine size={14} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-work-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesFeaturedWork;
