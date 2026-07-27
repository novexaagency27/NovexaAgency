/**
 * NOVEXA — Portfolio Preview Section
 * Featured work display with premium hover interactions.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowRightLine } from 'react-icons/ri';
import { PORTFOLIO, getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface PortfolioCardProps {
  project: (typeof PORTFOLIO)[number];
  index: number;
  isFeatured?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, index, isFeatured }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      aria-label={`Portfolio project: ${project.title}`}
      style={{
        position: 'relative',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: isFeatured ? '16 / 10' : '4 / 3',
        backgroundColor: 'var(--color-primary)',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <a
        href={getWhatsAppUrl('portfolio')}
        target="_blank"
        rel="noopener noreferrer"
        id={`portfolio-${project.id}`}
        aria-label={`${project.title} — ${project.category}. Contact us on WhatsApp.`}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        {/* Background — real project image */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Decorative pattern overlay */}
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
          }}
        />

        {/* Category pill — top left */}
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            backgroundColor: 'rgba(138,129,113,0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '2px',
            padding: '0.35rem 0.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-bg)',
            }}
          >
            {project.categoryShort}
          </span>
        </div>

        {/* Bottom overlay with text */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.5) 60%, transparent 100%)',
            padding: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(248,246,242,0.5)',
              marginBottom: '0.4rem',
            }}
          >
            {project.category}
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isFeatured ? 'clamp(1.5rem, 2.5vw, 2rem)' : '1.25rem',
              fontWeight: 800,
              color: 'var(--color-bg)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            {project.title}
          </h3>

          {/* Metrics — visible on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                }}
              >
                {project.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label}>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: 'var(--color-accent)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {metric.value}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'rgba(248,246,242,0.5)',
                      }}
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Arrow indicator on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-bg)',
              }}
              aria-hidden="true"
            >
              <RiArrowRightLine size={16} style={{ transform: 'rotate(-45deg)' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </motion.article>
  );
};

export const PortfolioPreview: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.08 });
  const featuredProjects = PORTFOLIO.filter((p) => p.featured);

  return (
    <section
      id="portfolio-preview"
      aria-label="Featured Portfolio"
      style={{ backgroundColor: 'var(--color-primary)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <SectionHeading
            label="Featured Work"
            title="Projects That Make an Impact"
            subtitle="A selection of work we're proud of."
            dark
          />

          <motion.a
            href="/portfolio"
            className="btn btn-ghost btn-sm inline-flex items-center gap-2"
            id="portfolio-view-all"
            aria-label="View complete portfolio"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            View All Work
            <RiArrowRightLine size={14} aria-hidden="true" />
          </motion.a>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'grid',
            gap: '1.5rem',
          }}
        >
          {/* Featured row — 2 columns, first takes 60% */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3fr 2fr',
              gap: '1.5rem',
            }}
            className="portfolio-featured-row"
          >
            <PortfolioCard project={featuredProjects[0]} index={0} isFeatured />
            <PortfolioCard project={featuredProjects[1]} index={1} />
          </div>

          {/* Second row — equal 2 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 3fr',
              gap: '1.5rem',
            }}
            className="portfolio-second-row"
          >
            <PortfolioCard project={featuredProjects[2]} index={2} />
            <PortfolioCard project={featuredProjects[3]} index={3} isFeatured />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <motion.a
            href={getWhatsAppUrl('portfolio')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost inline-flex items-center gap-3"
            id="portfolio-cta-bottom"
            aria-label="View complete portfolio — Opens WhatsApp"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Complete Portfolio
            <RiArrowRightLine size={15} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-featured-row,
          .portfolio-second-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioPreview;
