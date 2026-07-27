/**
 * NOVEXA — Social Media & Direct Channels Section
 * Direct links to official agency Instagram, WhatsApp, Email, and Phone.
 * No LinkedIn or Behance.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
  RiPhoneLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { BRAND, getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const socialPlatforms = [
  {
    name: 'Instagram',
    handle: '@designbynovexa',
    url: BRAND.instagram,
    description: 'Visual identity showcases, behind-the-scenes studio work, and social design inspiration.',
    icon: <RiInstagramLine size={24} />,
    accent: 'var(--color-accent)',
  },
  {
    name: 'WhatsApp',
    handle: '+91 9227025524',
    url: getWhatsAppUrl('default'),
    description: 'Instant direct consultation, quick project inquiries, and real-time chat with our leadership.',
    icon: <RiWhatsappLine size={24} />,
    accent: '#25D366',
  },
  {
    name: 'Email Inquiry',
    handle: BRAND.email,
    url: `mailto:${BRAND.email}`,
    description: 'Send us your formal project brief, RFPs, or detailed project requirements directly.',
    icon: <RiMailLine size={24} />,
    accent: 'var(--color-accent)',
  },
  {
    name: 'Phone Consultation',
    handle: BRAND.phone,
    url: `tel:${BRAND.phone}`,
    description: 'Direct phone call with our leadership team for immediate strategic discussions.',
    icon: <RiPhoneLine size={24} />,
    accent: 'var(--color-accent)',
  },
];

export const SocialMediaSection: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="social-media-section"
      aria-label="Official Contact & Social Channels"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Digital Touchpoints"
            title="Connect With NOVEXA"
            subtitle="Explore our design work on Instagram or connect directly via WhatsApp, email, or phone."
            align="center"
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="social-cards-grid"
        >
          {socialPlatforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target={platform.url.startsWith('mailto:') || platform.url.startsWith('tel:') ? undefined : '_blank'}
              rel={platform.url.startsWith('mailto:') || platform.url.startsWith('tel:') ? undefined : 'noopener noreferrer'}
              id={`social-link-${platform.name.toLowerCase().replace(/\s+/g, '-')}`}
              aria-label={`Connect with NOVEXA on ${platform.name}`}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '42px',
                    height: '42px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: platform.name === 'WhatsApp' ? '#25D366' : 'var(--color-bg)',
                  }}
                >
                  {platform.icon}
                </div>
                <RiArrowRightLine size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '0.35rem',
                }}
              >
                {platform.handle}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {platform.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                }}
              >
                {platform.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .social-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .social-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialMediaSection;
