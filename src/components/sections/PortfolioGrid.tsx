/**
 * NOVEXA — Portfolio Editorial Showcase Component
 * Award-winning design magazine layout featuring alternating compositions,
 * full-width hero features, staggered capability chips, mouse 3D tilt,
 * clip-path image reveals, and an animated sticky filter bar.
 */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowRightLine, RiRefreshLine } from 'react-icons/ri';
import { PORTFOLIO } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Extract unique categories dynamically from actual portfolio data
const uniqueCategories = [
  'All',
  ...Array.from(new Set(PORTFOLIO.map((item) => item.categoryShort))),
];

const categoryLabels: Record<string, string> = {
  All: 'All Work',
  Website: 'Website Design & Dev',
  Branding: 'Brand Identity',
  'Video Editing': 'Video Editing',
  Packaging: 'Packaging Design',
  'Social Media': 'Social Media',
  'UI UX': 'UI/UX Design',
};

const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const SPRING = { type: 'spring', damping: 22, stiffness: 280 } as const;

// ── Editorial Project Item ────────────────────────────────────────────────────
interface EditorialItemProps {
  project: (typeof PORTFOLIO)[number];
  index: number;
}

const EditorialItem: React.FC<EditorialItemProps> = React.memo(({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktop) return;
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ rx: -cy * 4, ry: cx * 4 });
    },
    [isDesktop],
  );

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ rx: 0, ry: 0 });
  }, []);

  // Composition logic: Every 4th project is a full-width hero feature
  const isFullWidth = index % 4 === 3;
  const isReverse = index % 2 === 1 && !isFullWidth;

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: POWER }}
      style={{ marginBottom: isFullWidth ? '6rem' : '5rem' }}
      className="editorial-project-block"
    >
      {isFullWidth ? (
        /* ── Full-Width Hero Feature ── */
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{
            position: 'relative',
            borderRadius: '6px',
            overflow: 'hidden',
            aspectRatio: '21 / 9',
            backgroundColor: 'var(--color-primary)',
            boxShadow: hovered
              ? '0 30px 80px rgba(0,0,0,0.25)'
              : '0 4px 24px rgba(0,0,0,0.08)',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          <a
            href={`/project/${project.id}`}
            id={`editorial-project-${project.id}`}
            aria-label={`View case study for ${project.title}`}
            style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${project.image || '/portfolio/crafted-spaces.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.9, ease: EASE }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(8,10,16,0.92) 0%, rgba(8,10,16,0.4) 60%, transparent 100%)',
              }}
            />

            {/* Content overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '3rem',
                zIndex: 2,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ maxWidth: '600px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Featured Showcase — {project.category}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    fontWeight: 800,
                    color: '#F8F6F2',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.925rem',
                    lineHeight: 1.65,
                    color: 'rgba(248,246,242,0.65)',
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>
              </div>

              <motion.div
                animate={{ x: hovered ? 6 : 0 }}
                transition={SPRING}
                className="btn btn-primary inline-flex items-center gap-2"
                style={{ flexShrink: 0 }}
              >
                <span>View Case Study</span>
                <RiArrowRightLine size={15} aria-hidden="true" />
              </motion.div>
            </div>
          </a>
        </motion.div>
      ) : (
        /* ── Alternating 2-Column Composition ── */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isReverse ? '1fr 1.2fr' : '1.2fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className={`editorial-grid ${isReverse ? 'editorial-grid-reverse' : ''}`}
        >
          {/* Image Frame Column */}
          <motion.div
            style={{
              order: isReverse ? 2 : 1,
              borderRadius: '6px',
              overflow: 'hidden',
              aspectRatio: index % 3 === 0 ? '16 / 11' : '4 / 3',
              backgroundColor: 'var(--color-primary)',
              position: 'relative',
              boxShadow: hovered
                ? '0 25px 60px rgba(0,0,0,0.14)'
                : '0 4px 20px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.4s ease',
              willChange: 'transform',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            animate={{
              rotateX: tilt.rx,
              rotateY: tilt.ry,
            }}
            transition={SPRING}
          >
            <a
              href={`/project/${project.id}`}
              id={`editorial-project-${project.id}`}
              aria-label={`View case study for ${project.title}`}
              style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${project.image || '/portfolio/crafted-spaces.jpg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.8, ease: EASE }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(13,17,23,0.4) 0%, transparent 60%)',
                }}
              />
            </a>
          </motion.div>

          {/* Story & Metadata Column */}
          <div style={{ order: isReverse ? 1 : 2 }}>
            {/* Category tag */}
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              {project.category}
            </span>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--color-text-muted)',
                marginBottom: '1.5rem',
              }}
            >
              {project.description}
            </p>

            {/* Capability chips */}
            {project.software && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.4rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.75rem',
                }}
              >
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: 'var(--color-primary)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '2px',
                    }}
                  >
                    {sw}
                  </span>
                ))}
              </div>
            )}

            {/* Metrics preview if present */}
            {project.metrics && project.metrics.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--color-secondary)',
                        lineHeight: 1,
                        margin: 0,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {m.value}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-subtle)',
                        margin: 0,
                      }}
                    >
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <motion.a
              href={`/project/${project.id}`}
              id={`editorial-btn-${project.id}`}
              aria-label={`View case study for ${project.title}`}
              className="btn btn-primary inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Case Study</span>
              <RiArrowRightLine size={15} aria-hidden="true" />
            </motion.a>
          </div>
        </div>
      )}
    </motion.article>
  );
});

// ── PortfolioGrid ─────────────────────────────────────────────────────────────
export const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.categoryShort === activeCategory);

  return (
    <section
      id="portfolio-grid-section"
      aria-label="Portfolio Showcase"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionHeading
            label="Archive"
            title="Explore Our Selected Work"
            subtitle="Filter by capability to inspect custom case studies and creative execution."
            align="center"
          />
        </div>

        {/* ── Sticky Filter Bar ── */}
        <div
          style={{
            position: 'sticky',
            top: '5rem',
            zIndex: 40,
            paddingTop: '0.75rem',
            paddingBottom: '1.25rem',
            marginBottom: '4rem',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(248,246,242,0.88)',
            borderBottom: '1px solid rgba(13,17,23,0.06)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
            role="tablist"
            aria-label="Portfolio categories filter"
          >
            {uniqueCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={isActive}
                  id={`filter-pill-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    position: 'relative',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    border: '1px solid transparent',
                    color: isActive ? 'var(--color-bg)' : 'var(--color-primary)',
                    backgroundColor: 'transparent',
                    outline: 'none',
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '9999px',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  {categoryLabels[cat] || cat}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Portfolio Showcase Grid ── */}
        <div>
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <EditorialItem key={project.id} project={project} index={i} />
              ))
            ) : (
              /* ── Elegant Empty State Guard ── */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  textAlign: 'center',
                  padding: '5rem 2rem',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '6px',
                  border: '1px solid var(--color-border)',
                  maxWidth: '560px',
                  margin: '0 auto',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  No Projects In This Category
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.75rem',
                    lineHeight: 1.6,
                  }}
                >
                  We are currently curating case studies for this section. Explore our full archive to see featured work.
                </p>
                <motion.button
                  onClick={() => setActiveCategory('All')}
                  className="btn btn-secondary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <RiRefreshLine size={15} />
                  <span>View All Work</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .editorial-grid-reverse {
            display: flex !important;
            flex-direction: column-reverse !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioGrid;
