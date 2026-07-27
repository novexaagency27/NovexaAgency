/**
 * NOVEXA — Contact Direct Cards Section
 * Zero forms. Direct, high-touch contact channels.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiWhatsappLine,
  RiMailLine,
  RiPhoneLine,
  RiInstagramLine,
  RiGlobalLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { BRAND, getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const contactChannels = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Consultation',
    subtitle: 'Primary Direct Channel',
    detail: 'Instant project inquiries & chat',
    value: 'Message Us on WhatsApp',
    href: getWhatsAppUrl('default'),
    isExternal: true,
    icon: <RiWhatsappLine size={24} />,
    accent: '#25D366',
  },
  {
    id: 'email',
    title: 'Email Inquiry',
    subtitle: 'Formal Project Briefs',
    detail: BRAND.email,
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    isExternal: false,
    icon: <RiMailLine size={24} />,
    accent: 'var(--color-accent)',
  },
  {
    id: 'phone',
    title: 'Phone Consultation',
    subtitle: 'Direct Voice Call',
    detail: BRAND.phone,
    value: BRAND.phone,
    href: `tel:${BRAND.phone}`,
    isExternal: false,
    icon: <RiPhoneLine size={24} />,
    accent: 'var(--color-accent)',
  },
  {
    id: 'instagram',
    title: 'Instagram Studio',
    subtitle: 'Social Portfolio & DMs',
    detail: '@designbynovexa',
    value: 'Follow @designbynovexa',
    href: BRAND.instagram,
    isExternal: true,
    icon: <RiInstagramLine size={24} />,
    accent: 'var(--color-accent)',
  },
  {
    id: 'location',
    title: 'Global Studio',
    subtitle: 'Digital Operations',
    detail: 'Based in India, working worldwide',
    value: 'Worldwide Client Partnership',
    href: getWhatsAppUrl('consultation'),
    isExternal: true,
    icon: <RiGlobalLine size={24} />,
    accent: 'var(--color-accent)',
  },
];

export const ContactDirectCards: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="contact-direct-cards"
      aria-label="Direct Contact Channels"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Direct Touchpoints"
            title="Connect With Our Leadership"
            subtitle="No automated forms or support queues. Speak directly with our creative team."
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
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
          className="contact-cards-grid"
        >
          {contactChannels.map((channel, i) => (
            <motion.a
              key={channel.id}
              href={channel.href}
              target={channel.isExternal ? '_blank' : undefined}
              rel={channel.isExternal ? 'noopener noreferrer' : undefined}
              id={`contact-card-${channel.id}`}
              aria-label={`Contact NOVEXA via ${channel.title}`}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Icon */}
              <div
                aria-hidden="true"
                style={{
                  width: '46px',
                  height: '46px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: channel.id === 'whatsapp' ? '#25D366' : 'var(--color-bg)',
                  marginBottom: '1.5rem',
                }}
              >
                {channel.icon}
              </div>

              {/* Subtitle */}
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
                {channel.subtitle}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem',
                }}
              >
                {channel.title}
              </h3>

              {/* Detail */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '1.75rem',
                  flexGrow: 1,
                }}
              >
                {channel.detail}
              </p>

              {/* Action Link */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  marginTop: 'auto',
                }}
              >
                <span>Connect Now</span>
                <RiArrowRightLine size={14} aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactDirectCards;
