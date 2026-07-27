/**
 * NOVEXA — Individual Service Blocks
 * Large alternating sections for each of the 6 core agency services with real portfolio imagery.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine, RiCheckLine } from 'react-icons/ri';
import { SERVICES, getWhatsAppUrl } from '@/utils/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeLeft, fadeRight, imageReveal, staggerContainer } from '@/utils/animations';

interface ServiceDetail {
  id: string;
  image: string;
  imageAlt: string;
  businessBenefits: string[];
  deliverables: string[];
  detailedDescription: string;
}

const serviceDetailsMap: Record<string, ServiceDetail> = {
  'brand-identity': {
    id: 'brand-identity',
    image: '/portfolio/verde-cafe.jpg',
    imageAlt: 'Verde Cafe brand identity & packaging design portfolio project',
    detailedDescription:
      'We craft comprehensive visual identity systems—including primary & secondary logos, typography rules, color palettes, and brand guideline manuals—that establish market presence and differentiate your business.',
    businessBenefits: [
      'Establishes instant market authority & brand trust',
      'Ensures total visual consistency across all touchpoints',
      'Elevates perceived brand value & premium pricing power',
    ],
    deliverables: [
      'Primary & Secondary Logo Suite',
      'Typography & Color Palette Guidelines',
      'Comprehensive Brand Style Manual',
      'Stationery & Digital Assets Packaging',
    ],
  },
  'website-design': {
    id: 'website-design',
    image: '/portfolio/crafted-spaces.jpg',
    imageAlt: 'Crafted Spaces luxury website UI/UX design portfolio project',
    detailedDescription:
      'We design bespoke, intuitive, and modern web interfaces focused on user experience, aesthetic elegance, and conversion optimization.',
    businessBenefits: [
      'Captivates visitors within the first 5 seconds',
      'Guides users seamlessly toward key conversion goals',
      'Communicates brand quality through immaculate UI/UX',
    ],
    deliverables: [
      'UI/UX Architecture & Wireframes',
      'High-Fidelity Desktop & Mobile Screens',
      'Interactive Design Prototypes',
      'Design System & Figma Component Kit',
    ],
  },
  'website-development': {
    id: 'website-development',
    image: '/portfolio/crafted-spaces.jpg',
    imageAlt: 'High performance web development and code architecture',
    detailedDescription:
      'We engineer fast, accessible, SEO-optimized websites using modern web technologies that deliver smooth animations and reliable technical performance.',
    businessBenefits: [
      'Ultra-fast load times for superior SEO & retention',
      'Flawless responsive performance across all screen sizes',
      'Clean, maintainable code built to scale with your business',
    ],
    deliverables: [
      'Custom React/Next.js/Vite Web Architecture',
      'Smooth GSAP & Framer Motion Animations',
      'Full SEO Meta & Social OpenGraph Setup',
      'Cross-Browser & Device Quality Assurance',
    ],
  },
  'video-editing': {
    id: 'video-editing',
    image: '/portfolio/noir-fragrance.jpg',
    imageAlt: 'Noir Fragrance cinematic video production & editing suite',
    detailedDescription:
      'We produce cinematic promotional videos, advertisements, social reels, and motion graphics that tell compelling stories and capture attention.',
    businessBenefits: [
      'Drives significantly higher engagement on digital channels',
      'Conveys emotion and product luxury far beyond static images',
      'Increases campaign reach & video conversion metrics',
    ],
    deliverables: [
      'Cinematic Brand Commercials & Ads',
      'Short-Form Reels, Shorts & TikTok Video Edits',
      'Motion Graphics & Custom Title Animations',
      'Professional Color Grading & Sound Mixing',
    ],
  },
  'social-media-management': {
    id: 'social-media-management',
    image: '/portfolio/bare-skin.jpg',
    imageAlt: 'Bare Skin luxury skincare social media management & feed design',
    detailedDescription:
      'We handle strategic content planning, post design, visual feed curation, caption writing, and account growth strategies to build engaged brand communities.',
    businessBenefits: [
      'Maintains consistent, active brand presence',
      'Builds brand loyalty & organic audience growth',
      'Frees internal team focus while upgrading social quality',
    ],
    deliverables: [
      'Monthly Content Strategy & Editorial Calendar',
      'Custom Carousel & Static Graphic Designs',
      'Strategic Copywriting & Caption Creation',
      'Growth Analytics & Strategy Iteration',
    ],
  },
  'graphic-design': {
    id: 'graphic-design',
    image: '/portfolio/verde-cafe.jpg',
    imageAlt: 'Graphic design marketing collateral, packaging and print collateral',
    detailedDescription:
      'We create high-impact marketing materials, sales decks, brochures, product packaging, and promotional graphics that reinforce your brand standards.',
    businessBenefits: [
      'Professionalizes sales enablement materials',
      'Enhances physical product unboxing & packaging impression',
      'Ensures promotional campaigns reflect brand excellence',
    ],
    deliverables: [
      'Product Packaging & Label Designs',
      'Sales Decks & Investor Presentations',
      'Print Marketing Collateral & Flyers',
      'Digital Banners & Promotional Creatives',
    ],
  },
};

const ServiceBlockItem: React.FC<{ service: (typeof SERVICES)[number]; index: number }> = ({ service, index }) => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });
  const detail = serviceDetailsMap[service.id];
  if (!detail) return null;

  const isEven = index % 2 === 0;

  return (
    <div
      id={`service-detail-${service.id}`}
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        borderBottom: index < SERVICES.length - 1 ? '1px solid var(--color-border)' : 'none',
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="service-block-grid"
      >
        {/* Visual Frame */}
        <motion.div
          variants={isEven ? fadeLeft : fadeRight}
          style={{ order: isEven ? 1 : 2 }}
          className="service-block-image"
        >
          <motion.div
            variants={imageReveal}
            style={{
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '4 / 3',
              backgroundColor: 'var(--color-primary)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <img
              src={detail.image}
              alt={detail.imageAlt}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={isEven ? fadeRight : fadeLeft}
          style={{ order: isEven ? 2 : 1 }}
          className="service-block-text"
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            Service {service.number} — {service.category}
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--color-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            {service.title}
          </h2>

          <p
            className="type-body"
            style={{
              color: 'var(--color-text-muted)',
              marginBottom: '1.75rem',
              lineHeight: 1.7,
            }}
          >
            {detail.detailedDescription}
          </p>

          {/* Business Benefits */}
          <div style={{ marginBottom: '1.75rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Business Benefits
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {detail.businessBenefits.map((benefit) => (
                <li
                  key={benefit}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text)',
                  }}
                >
                  <RiCheckLine size={16} style={{ color: 'var(--color-accent)', marginTop: '0.2rem', flexShrink: 0 }} aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Small CTA */}
          <motion.a
            href={getWhatsAppUrl('services')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm inline-flex items-center gap-2"
            id={`discuss-service-${service.id}`}
            aria-label={`Discuss ${service.title} on WhatsApp`}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <RiWhatsappLine size={15} aria-hidden="true" />
            <span>Discuss This Service</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .service-block-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .service-block-image,
          .service-block-text {
            order: initial !important;
          }
        }
      `}</style>
    </div>
  );
};

export const IndividualServiceBlocks: React.FC = () => {
  return (
    <section
      id="individual-services"
      aria-label="Detailed Services"
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        {SERVICES.map((service, index) => (
          <ServiceBlockItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default IndividualServiceBlocks;
