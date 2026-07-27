/**
 * NOVEXA — Meet The Team Section
 * Studio presentation cards for founders Hetvi Koradiya & Krish Patel.
 * Features 3D mouse tilt (±2°), spring hover lift, image zoom, social button reveals,
 * and clean editorial typography.
 */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiMailLine } from 'react-icons/ri';
import { TEAM, BRAND } from '@/utils/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SPRING = { type: 'spring', damping: 22, stiffness: 280 } as const;

const teamImageMap: Record<string, string> = {
  'hetvi-koradiya': '/founders/hetvi.webp',
  'krish-patel': '/founders/krish.webp',
};

const teamRoleMap: Record<string, string> = {
  'hetvi-koradiya': 'Founder & Creative Director',
  'krish-patel': 'Co-Founder & Technical Architect',
};

const teamFocusMap: Record<string, string> = {
  'hetvi-koradiya': 'Brand Identity, Creative Direction, Visual Systems',
  'krish-patel': 'Web Architecture, Performance Engineering, UI/UX Systems',
};

interface TeamCardProps {
  member: (typeof TEAM)[number];
  index: number;
  isInView: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index, isInView }) => {
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
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: POWER }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      animate-hover={{
        y: hovered ? -10 : 0,
        scale: hovered ? 1.02 : 1,
        rotateX: tilt.rx,
        rotateY: tilt.ry,
      }}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: hovered ? '1px solid rgba(138,129,113,0.5)' : '1px solid var(--color-border)',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 30px 70px rgba(13,17,23,0.15)'
          : '0 2px 10px rgba(13,17,23,0.03)',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* Member Portrait Frame */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '4 / 4.5',
          overflow: 'hidden',
          backgroundColor: 'var(--color-primary)',
        }}
      >
        <motion.img
          src={teamImageMap[member.id] || '/founders/hetvi.webp'}
          alt={`${member.name} — ${member.role}`}
          loading="lazy"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(13,17,23,0.85) 0%, rgba(13,17,23,0.1) 60%, transparent 100%)',
          }}
        />

        {/* Member Name overlay on image */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '1.5rem',
            right: '1.5rem',
            zIndex: 2,
          }}
        >
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
            {teamRoleMap[member.id] || member.role}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.65rem',
              fontWeight: 800,
              color: '#F8F6F2',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {member.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.75rem 1.5rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            lineHeight: 1.65,
            color: 'var(--color-text-muted)',
            marginBottom: '1.25rem',
          }}
        >
          {member.bio}
        </p>

        <div style={{ marginBottom: '1.25rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-subtle)',
              display: 'block',
              marginBottom: '0.25rem',
            }}
          >
            Focus & Expertise
          </span>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              margin: 0,
            }}
          >
            {teamFocusMap[member.id]}
          </p>
        </div>

        {/* Social / Contact reveal */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <a
            href={`mailto:${BRAND.email}`}
            aria-label={`Email ${member.name}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              transition: 'background-color 0.2s, color 0.2s',
            }}
          >
            <RiMailLine size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const MeetTheTeam: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="meet-the-team"
      aria-label="Leadership Team"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <SectionHeading
            label="Leadership"
            title="The Minds Behind NOVEXA"
            subtitle="Led by founders committed to high-end design, strategic thinking, and brand growth."
            align="center"
          />
        </div>

        <div
          ref={containerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
            maxWidth: '960px',
            margin: '0 auto',
          }}
          className="team-cards-grid"
        >
          {TEAM.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} isInView={isInView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MeetTheTeam;
