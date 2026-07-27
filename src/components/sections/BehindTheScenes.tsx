/**
 * NOVEXA — Behind The Scenes Section
 * Showcase grid of studio workspace, design assets, and creative process.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, imageReveal, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const btsItems = [
  {
    id: 'bts-branding',
    title: 'Brand Identity Systems',
    category: 'Print & Typography',
    image: '/bts/bts-branding.png',
    span: 'col-span-2',
    aspectRatio: '16 / 10',
  },
  {
    id: 'bts-web',
    title: 'Digital Systems & Wireframes',
    category: 'UI/UX Architecture',
    image: '/bts/bts-web.png',
    span: 'col-span-1',
    aspectRatio: '4 / 5',
  },
  {
    id: 'bts-video',
    title: 'Cinematic Motion Suite',
    category: 'Video & Color Grading',
    image: '/bts/bts-video.png',
    span: 'col-span-3',
    aspectRatio: '21 / 9',
  },
];

export const BehindTheScenes: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="behind-the-scenes"
      aria-label="Behind The Scenes"
      style={{ backgroundColor: 'var(--color-primary)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeading
            label="Studio Insight"
            title="Behind The Scenes at NOVEXA"
            subtitle="An insider look into our studio environment, design tools, craftsmanship, and ongoing work."
            dark
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
            gap: '1.5rem',
          }}
          className="bts-grid"
        >
          {btsItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              custom={index}
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                backgroundColor: 'rgba(248,246,242,0.05)',
                border: '1px solid rgba(248,246,242,0.1)',
                gridColumn: item.id === 'bts-video' ? 'span 3' : item.id === 'bts-branding' ? 'span 2' : 'span 1',
              }}
              className="bts-card"
            >
              <motion.div
                variants={imageReveal}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: item.aspectRatio,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={item.image}
                  alt={`Behind the scenes: ${item.title}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />

                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(13,17,23,0.9) 0%, transparent 100%)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
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
                      marginBottom: '0.3rem',
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--color-bg)',
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bts-card {
            grid-column: span 3 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BehindTheScenes;
