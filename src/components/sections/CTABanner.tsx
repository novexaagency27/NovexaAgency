/**
 * NOVEXA — CTA Banner Component
 * Reusable full-width call-to-action block.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine, RiArrowRightLine } from 'react-icons/ri';
import { getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  dark?: boolean;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = 'Ready to elevate your brand?',
  subtitle = 'Let\'s create something exceptional together. Every great brand starts with a conversation.',
  primaryLabel = 'Start Your Project',
  secondaryLabel = 'View Our Work',
  dark = true,
}) => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      aria-label="Call to action"
      style={{
        backgroundColor: dark ? 'var(--color-primary)' : 'var(--color-surface)',
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="container-novexa section-padding text-center"
      >
        <motion.p variants={fadeUp} className="type-label mb-6" style={{ color: 'var(--color-accent)' }}>
          Let's Work Together
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            color: dark ? 'var(--color-bg)' : 'var(--color-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
          }}
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="type-body-lg mb-10 mx-auto"
          style={{
            color: dark ? 'rgba(248, 246, 242, 0.6)' : 'var(--color-text)',
            maxWidth: '480px',
          }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={getWhatsAppUrl('services')}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn inline-flex items-center gap-3 ${dark ? 'btn-ghost' : 'btn-primary'}`}
            id="cta-banner-primary"
            aria-label={`${primaryLabel} — Opens WhatsApp`}
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <RiWhatsappLine size={17} aria-hidden="true" />
            {primaryLabel}
          </motion.a>

          <motion.a
            href="/portfolio"
            className={`btn inline-flex items-center gap-2 ${dark ? 'btn-ghost' : 'btn-secondary'}`}
            id="cta-banner-secondary"
            aria-label={secondaryLabel}
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {secondaryLabel}
            <RiArrowRightLine size={15} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
