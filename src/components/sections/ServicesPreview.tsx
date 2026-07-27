/**
 * NOVEXA — Services Preview Section
 * Premium service cards — unchanged layout, upgraded interactions.
 * - Staggered scroll-reveal (opacity + translateY + blur + scale)
 * - Mouse-driven 3D card tilt (max ±2°), desktop only
 * - Hover: lift 10px, scale 1.02, border glow, shadow bloom, arrow slide
 */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  RiBrush2Line,
  RiLayout3Line,
  RiCodeSSlashLine,
  RiFilmLine,
  RiInstagramLine,
  RiPenNibLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { SERVICES, getWhatsAppUrl } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';

// ── Icon map ──────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {
  RiBrush2Line: <RiBrush2Line size={24} />,
  RiLayout3Line: <RiLayout3Line size={24} />,
  RiCodeSSlashLine: <RiCodeSSlashLine size={24} />,
  RiFilmLine: <RiFilmLine size={24} />,
  RiInstagramLine: <RiInstagramLine size={24} />,
  RiPenNibLine: <RiPenNibLine size={24} />,
};

const categoryColors: Record<string, string> = {
  Design: '#8A8171',
  Digital: '#1F3D3A',
  Motion: '#2A2F36',
  Marketing: '#0D1117',
};

// ── Easing ────────────────────────────────────────────────────────────────────
const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SPRING = { type: 'spring', damping: 22, stiffness: 300 } as const;

// ── Card reveal variants (scroll-driven stagger) ──────────────────────────────
const cardReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    filter: 'blur(4px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay: i * 0.09,
      ease: POWER,
    },
  }),
};

// ── ServiceCard ───────────────────────────────────────────────────────────────
interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  index: number;
  isInView: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  category,
  index,
  isInView,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 → 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5;    // -0.5 → 0.5
    // Max ±2 degrees
    setTilt({ rx: -cy * 4, ry: cx * 4 });
  }, [isDesktop]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ rx: 0, ry: 0 });
  }, []);

  const href = getWhatsAppUrl('services');

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardReveal}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', willChange: 'transform' }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        id={`service-card-${number}`}
        aria-label={`Explore ${title} service — Opens WhatsApp`}
        animate={{
          y: hovered ? -10 : 0,
          scale: hovered ? 1.02 : 1,
          rotateX: tilt.rx,
          rotateY: tilt.ry,
          boxShadow: hovered
            ? '0 28px 64px rgba(13,17,23,0.18), 0 8px 20px rgba(13,17,23,0.10)'
            : '0 1px 3px rgba(13,17,23,0.04)',
        }}
        transition={SPRING}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: 'var(--color-surface)',
          border: hovered
            ? '1px solid rgba(138,129,113,0.5)'
            : '1px solid var(--color-border)',
          borderRadius: '4px',
          padding: '2rem',
          textDecoration: 'none',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          transition: 'border-color 0.35s ease',
          willChange: 'transform',
        }}
      >
        {/* Subtle inner glow on hover */}
        <motion.div
          aria-hidden="true"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '4px',
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(138,129,113,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Number */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--color-text-subtle)',
            marginBottom: '1.25rem',
            display: 'block',
          }}
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={SPRING}
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: categoryColors[category] || 'var(--color-primary)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-bg)',
            marginBottom: '1.5rem',
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {iconMap[icon]}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="type-h4"
          animate={{ y: hovered ? -3 : 0 }}
          transition={SPRING}
          style={{ marginBottom: '0.75rem', color: 'var(--color-primary)' }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: 'var(--color-text-muted)',
            flexGrow: 1,
            marginBottom: '1.5rem',
          }}
        >
          {description}
        </p>

        {/* Explore CTA — arrow slides right on hover */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
          }}
          aria-hidden="true"
        >
          Explore
          <motion.span
            animate={{ x: hovered ? 5 : 0 }}
            transition={SPRING}
            style={{ display: 'inline-flex' }}
          >
            <RiArrowRightLine size={14} />
          </motion.span>
        </div>

        {/* Bottom accent line — grows on hover */}
        <motion.div
          aria-hidden="true"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: POWER }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: '100%',
            backgroundColor: 'var(--color-accent)',
            transformOrigin: 'left',
          }}
        />
      </motion.a>
    </motion.div>
  );
};

// ── ServicesPreview ───────────────────────────────────────────────────────────
export const ServicesPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  return (
    <section
      id="services-preview"
      aria-label="Services"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        {/* Header */}
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
            label="What We Do"
            title="Services Built for Growth"
            subtitle="From brand identity to digital experiences—every service is crafted with strategy and precision."
            maxWidth="520px"
          />

          <motion.a
            href={getWhatsAppUrl('services')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm inline-flex items-center gap-2"
            id="services-view-all"
            aria-label="View all services — Opens WhatsApp"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
            <RiArrowRightLine size={14} aria-hidden="true" />
          </motion.a>
        </div>

        {/* Cards Grid */}
        <div
          ref={sectionRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="services-grid"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
              category={service.category}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;
