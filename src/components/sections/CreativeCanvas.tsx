/**
 * NOVEXA — Creative Canvas Section (Signature Portfolio Experience)
 * Layered portfolio grid showcase with 3D mouse depth, dynamic lighting,
 * smooth image scale, and interactive arrow reveal.
 */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface PieceConfig {
  id: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  projectId: string;
  ratio: string;
}

const PIECES: PieceConfig[] = [
  {
    id: 'branding-board',
    image: '/portfolio/branding-01.webp',
    alt: 'NOVEXA brand identity board',
    category: 'Brand Identity',
    title: 'Visual Brand System',
    projectId: 'branding-01',
    ratio: '16 / 10',
  },
  {
    id: 'ui-mobile',
    image: '/portfolio/anaqah-home.jpg',
    alt: 'Anaqah mobile app UI design',
    category: 'UI/UX Design',
    title: 'Anaqah Mobile App',
    projectId: 'ui-ux-design',
    ratio: '4 / 3',
  },
  {
    id: 'video-still',
    image: '/portfolio/noir-fragrance.jpg',
    alt: 'Noir fragrance commercial still',
    category: 'Video Editing',
    title: 'Noir Fragrance Film',
    projectId: 'noir-fragrance',
    ratio: '16 / 9',
  },
  {
    id: 'social-card',
    image: '/portfolio/bare-skin.jpg',
    alt: 'Bare Skin skincare social campaign',
    category: 'Social Media',
    title: 'Bare Skin Campaign',
    projectId: 'bare-skin',
    ratio: '4 / 5',
  },
  {
    id: 'web-design',
    image: '/portfolio/crafted-spaces.jpg',
    alt: 'Crafted Spaces website design',
    category: 'Website Design',
    title: 'Crafted Spaces',
    projectId: 'crafted-spaces',
    ratio: '4 / 3',
  },
  {
    id: 'packaging',
    image: '/portfolio/coffee-pack.jpg',
    alt: 'Artisan coffee packaging design',
    category: 'Packaging Design',
    title: 'Artisan Coffee Brand',
    projectId: 'branding-02',
    ratio: '3 / 4',
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SPRING = { type: 'spring', damping: 20, stiffness: 260 } as const;

interface CanvasCardProps {
  piece: PieceConfig;
  index: number;
}

const CanvasCard: React.FC<CanvasCardProps> = ({ piece, index }) => {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const innerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktop) return;
      const rect = innerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ rx: -cy * 5, ry: cx * 5 });
    },
    [isDesktop],
  );

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: POWER }}
      style={{ borderRadius: '8px', overflow: 'hidden' }}
    >
      <motion.div
        ref={innerRef}
        animate={{
          y: hovered ? -8 : 0,
          scale: hovered ? 1.02 : 1,
          rotateX: tilt.rx,
          rotateY: tilt.ry,
          boxShadow: hovered
            ? '0 25px 60px rgba(0,0,0,0.5), 0 0 30px rgba(138,129,113,0.15)'
            : '0 4px 20px rgba(0,0,0,0.2)',
        }}
        transition={SPRING}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          aspectRatio: piece.ratio,
          backgroundColor: 'rgba(248,246,242,0.04)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <a
          href={`/project/${piece.projectId}`}
          style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}
        >
          <img
            src={piece.image}
            alt={piece.alt}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}
          />

          {/* Vignette Overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8,10,16,0.85) 0%, transparent 60%)',
            }}
          />

          {/* Card Content & Arrow */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.25rem',
              zIndex: 2,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '0.2rem',
                }}
              >
                {piece.category}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#F8F6F2',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {piece.title}
              </p>
            </div>

            {/* Hover Arrow Badge */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8, x: hovered ? 0 : -6 }}
              transition={SPRING}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(248,246,242,0.15)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F8F6F2',
                flexShrink: 0,
              }}
            >
              <RiArrowRightUpLine size={16} />
            </motion.div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export const CreativeCanvas: React.FC = () => {
  return (
    <section
      id="creative-canvas"
      aria-label="NOVEXA Creative Canvas — Selected Work"
      style={{
        backgroundColor: 'var(--color-primary)',
        position: 'relative',
      }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1rem',
            }}
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.07, ease: EASE }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: '#F8F6F2',
              marginBottom: '1rem',
            }}
          >
            Creative Canvas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(248,246,242,0.45)',
              maxWidth: '520px',
              margin: '0 auto 2rem auto',
            }}
          >
            A glimpse into how we transform ideas into premium digital experiences.
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
          className="canvas-grid"
        >
          {PIECES.map((piece, i) => (
            <CanvasCard key={piece.id} piece={piece} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .canvas-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .canvas-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default CreativeCanvas;
