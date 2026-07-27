/**
 * NOVEXA — Featured Projects Section
 * Oversized editorial highlight section with alternating left-right compositions.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightLine } from 'react-icons/ri';
import { PORTFOLIO } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeLeft, fadeRight, imageReveal, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';


const FeaturedProjectItem: React.FC<{ project: (typeof PORTFOLIO)[number]; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '5rem',
        alignItems: 'center',
      }}
      className="featured-project-row"
    >
      {/* Large Image Frame */}
      <motion.div
        variants={isEven ? fadeLeft : fadeRight}
        style={{ order: isEven ? 1 : 2 }}
        className="featured-project-image"
      >
        <motion.div
          variants={imageReveal}
          style={{
            borderRadius: '4px',
            overflow: 'hidden',
            aspectRatio: '16 / 10',
            backgroundColor: 'var(--color-primary)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <img
            src={project.image || '/portfolio/crafted-spaces.jpg'}
            alt={`${project.title} featured case study`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Text & Metrics Info */}
      <motion.div
        variants={isEven ? fadeRight : fadeLeft}
        style={{ order: isEven ? 2 : 1 }}
        className="featured-project-info"
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          {project.category}
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
            fontWeight: 800,
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}
        >
          {project.title}
        </h3>

        <p
          className="type-body-lg"
          style={{
            color: 'var(--color-text-muted)',
            marginBottom: '2rem',
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </p>

        {/* Metrics preview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--color-secondary)',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-subtle)',
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <motion.a
          href={`/project/${project.id}`}
          id={`featured-case-study-btn-${project.id}`}
          aria-label={`Read ${project.title} case study`}
          className="btn btn-primary btn-sm inline-flex items-center gap-2"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Read Full Case Study</span>
          <RiArrowRightLine size={15} aria-hidden="true" />
        </motion.a>
      </motion.div>
    </motion.article>
  );
};

export const FeaturedProjects: React.FC = () => {
  const featured = PORTFOLIO.filter((p) => p.featured);

  return (
    <section
      id="featured-projects-section"
      aria-label="Featured Case Studies"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ marginBottom: '5rem' }}>
          <SectionHeading
            label="Spotlight"
            title="Featured Case Studies"
            subtitle="Deep-dive highlights showcasing visual craftsmanship and measurable client outcomes."
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {featured.map((project, index) => (
            <FeaturedProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-project-row {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .featured-project-image,
          .featured-project-info {
            order: initial !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
