/**
 * NOVEXA — Featured Case Study Spotlight Component
 * Editorial showcase of featured projects without artificial 400vh scroll gaps.
 * Every card renders with cinematic photography, client metrics, software tags, and 3D hover depth.
 */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightLine, RiWhatsappLine } from 'react-icons/ri';
import { PORTFOLIO, getWhatsAppUrl } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';

const FEATURED_IDS = ['crafted-spaces', 'noir-fragrance', 'bare-skin', 'verde-cafe'];
const FEATURED = FEATURED_IDS.map(
  (id) => PORTFOLIO.find((p) => p.id === id) || PORTFOLIO[0],
);

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SPRING = { type: 'spring', damping: 22, stiffness: 280 } as const;

interface SpotlightCardProps {
  project: (typeof PORTFOLIO)[number];
  index: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ project, index }) => {
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

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: POWER }}
      style={{ marginBottom: '3rem' }}
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        animate={{
          rotateX: tilt.rx,
          rotateY: tilt.ry,
          y: hovered ? -6 : 0,
          boxShadow: hovered
            ? '0 30px 70px rgba(0,0,0,0.5)'
            : '0 8px 30px rgba(0,0,0,0.25)',
        }}
        transition={SPRING}
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
          aspectRatio: index === 0 ? '21 / 9' : '16 / 9',
          backgroundColor: 'var(--color-primary)',
          position: 'relative',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <a
          href={`/project/${project.id}`}
          id={`spotlight-card-${project.id}`}
          aria-label={`View case study for ${project.title}`}
          style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}
        >
          {/* Hero background image */}
          <motion.img
            src={project.image}
            alt={project.title}
            loading={index === 0 ? 'eager' : 'lazy'}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Vignette overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(8,10,16,0.92) 0%, rgba(8,10,16,0.4) 60%, transparent 100%)',
            }}
          />

          {/* Card content overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2.5rem',
              zIndex: 2,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
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
                Spotlight — {project.category}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
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
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  color: 'rgba(248,246,242,0.65)',
                  margin: 0,
                }}
              >
                {project.description}
              </p>

              {/* Metrics preview */}
              {project.metrics && project.metrics.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    marginTop: '1.25rem',
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
                          marginBottom: '0.2rem',
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
                          color: 'rgba(248,246,242,0.4)',
                          margin: 0,
                        }}
                      >
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <motion.div
              animate={{ x: hovered ? 5 : 0 }}
              transition={SPRING}
              className="btn btn-ghost inline-flex items-center gap-2"
              style={{
                borderColor: 'rgba(248,246,242,0.4)',
                backgroundColor: 'rgba(248,246,242,0.06)',
                color: '#F8F6F2',
                fontSize: '0.8125rem',
              }}
            >
              <span>View Case Study</span>
              <RiArrowRightLine size={15} aria-hidden="true" />
            </motion.div>
          </div>
        </a>
      </motion.div>
    </motion.article>
  );
};

export const FeaturedCaseStudySpotlight: React.FC = () => {
  return (
    <section
      id="spotlight-case-studies"
      aria-label="Spotlight Case Studies"
      style={{ backgroundColor: 'var(--color-primary)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Spotlight Case Studies"
            title="Projects That Define Excellence"
            subtitle="Each project is a precision-crafted digital experience built to perform and impress."
            dark
            align="center"
          />
        </div>

        <div>
          {FEATURED.map((project, i) => (
            <SpotlightCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudySpotlight;
