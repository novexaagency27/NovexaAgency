/**
 * NOVEXA — SectionHeading Component
 * Editorial-quality section headings with optional label, subtext, and line divider.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { staggerContainer, fadeUp, maskReveal } from '@/utils/animations';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleAs?: 'h1' | 'h2' | 'h3';
  dark?: boolean;
  className?: string;
  maxWidth?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  titleAs: TitleTag = 'h2',
  dark = false,
  className = '',
  maxWidth,
}) => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align];

  const textColor = dark ? 'text-white' : '';
  const mutedColor = dark ? 'opacity-70' : '';

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`flex flex-col gap-4 ${alignClasses} ${className}`}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {/* Section Label */}
      {label && (
        <motion.div variants={fadeUp} className="section-label">
          <span className="type-label" style={{ color: dark ? 'var(--color-accent)' : undefined }}>
            {label}
          </span>
        </motion.div>
      )}

      {/* Title — Clipped mask reveal */}
      <div className="clip-reveal" aria-label={title}>
        <motion.div variants={maskReveal}>
          <TitleTag
            className={`type-h2 ${textColor}`}
            style={{
              fontFamily: 'var(--font-display)',
            }}
          >
            {title}
          </TitleTag>
        </motion.div>
      </div>

      {/* Accent divider */}
      {!label && (
        <motion.span
          variants={fadeUp}
          className="divider-accent"
          aria-hidden="true"
          style={
            align === 'center'
              ? { marginLeft: 'auto', marginRight: 'auto' }
              : align === 'right'
              ? { marginLeft: 'auto' }
              : undefined
          }
        />
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`type-body-lg ${mutedColor}`}
          style={maxWidth ? { maxWidth: '580px' } : undefined}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
