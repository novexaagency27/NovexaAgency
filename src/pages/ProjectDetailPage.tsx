/**
 * NOVEXA — Project Detail Page Component
 * Award-winning case study presentation featuring reading progress indicator,
 * structured narrative sections (Overview, Challenge, Strategy, Execution, Results),
 * mixed editorial image gallery, metric counter badges, and next/prev navigation.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { RiWhatsappLine, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { PORTFOLIO, getWhatsAppUrl } from '@/utils/constants';
import { fadeUp, maskReveal, staggerContainer } from '@/utils/animations';

const POWER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface ProjectDetailData {
  id: string;
  image?: string;
  client: string;
  year: string;
  services: string[];
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  galleryImages: string[];
}

const projectDetailsMap: Record<string, ProjectDetailData> = {
  'crafted-spaces': {
    id: 'crafted-spaces',
    client: 'Crafted Spaces Interior Studio',
    year: '2025',
    services: ['Website Design', 'Website Development', 'UI/UX Architecture'],
    overview:
      'Crafted Spaces is a premier interior architecture studio. NOVEXA was commissioned to design and develop a minimal, high-converting digital platform showcasing their portfolio of residential and commercial spaces with architectural clarity.',
    challenge:
      'The client required a digital platform that matched the tactile luxury of their physical interior projects. The challenge was displaying high-resolution imagery without sacrificing page speed or mobile responsiveness.',
    approach:
      'We established a grid system inspired by architectural blueprints—incorporating generous white space, bespoke serif typography, and custom image reveal animations that highlight spatial dimensions as users scroll.',
    outcome:
      'The launched web experience achieved an instant 120% surge in website traffic, an 85% increase in qualified client inquiries, and elevated the studio’s brand authority across competitive markets.',
    galleryImages: ['/portfolio/crafted-spaces.jpg', '/portfolio/crafted-spaces-detail1.jpg'],
  },
  'noir-fragrance': {
    id: 'noir-fragrance',
    image: '/portfolio/noir-fragrance.jpg',
    client: 'Noir Fragrance Co.',
    year: '2025',
    services: ['Video Editing', 'Motion Graphics', 'Color Grading'],
    overview:
      'Noir Fragrance is a luxury haute-parfumerie brand. NOVEXA produced a cinematic launch video and promotional campaign capturing the moody, sensual aesthetic of their signature fragrance line.',
    challenge:
      'In luxury perfume marketing, emotion and lighting are paramount. The video needed to feel cinematic, alluring, and international—avoiding standard commercial editing tropes.',
    approach:
      'We executed frame-by-frame color grading emphasizing deep blacks, warm gold reflections, and smoke dynamics. We paired slow-motion macro cuts with rhythmic sound design and elegant titles.',
    outcome:
      'The campaign garnered over 250,000 organic views within the first month, achieved an 18,000+ engagement total, and established a 6.2% engagement rate across social launch channels.',
    galleryImages: ['/portfolio/noir-fragrance.jpg'],
  },
  'verde-cafe': {
    id: 'verde-cafe',
    client: 'Verde Cafe & Bistro',
    year: '2025',
    services: ['Brand Identity', 'Logo Design', 'Packaging Design', 'Graphic Design'],
    overview:
      'Verde Cafe & Bistro is an artisanal dining destination. NOVEXA created a complete brand identity system—from emblem design and color guidelines to packaging, print menus, and physical collateral.',
    challenge:
      'The bistro needed a visual brand that balanced organic botanical elements with upscale bistro sophistication, ensuring seamless application across print menus, coffee bags, and digital assets.',
    approach:
      'We designed a custom geometric leaf-and-v monogram paired with gold-embossed typography, earthy green tones, and premium textured paper stock guidelines.',
    outcome:
      'The new identity established instant local brand recognition, created a unified physical-to-digital customer touchpoint, and anchored the bistro as a premium culinary brand.',
    galleryImages: ['/portfolio/verde-cafe.jpg', '/portfolio/verde-cafe-detail1.jpg'],
  },
  'bare-skin': {
    id: 'bare-skin',
    client: 'Bare Skin Beauty',
    year: '2025',
    services: ['Social Media Management', 'Content Strategy', 'Graphic Design'],
    overview:
      'Bare Skin is a conscious luxury skincare brand. NOVEXA leads end-to-end Instagram management—curating visual feed aesthetics, producing post designs, writing strategic copy, and driving account growth.',
    challenge:
      'Skincare social channels are saturated with noisy, bright graphics. Bare Skin required a serene, minimalist visual aesthetic that communicated purity, transparency, and clinical quality.',
    approach:
      'We developed a serene color palette of beige travertine and botanical green, paired with clean typography quotes, macro texture photography, and educational carousel layouts.',
    outcome:
      'Drove over 12,000 organic follower additions, generated a 300% increase in total account reach, and boosted profile conversion visits by 90%.',
    galleryImages: ['/portfolio/bare-skin.jpg'],
  },
};

interface ProjectDetailPageProps {
  projectId: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId }) => {
  const project = PORTFOLIO.find((p) => p.id === projectId) || PORTFOLIO[0];
  const detail = projectDetailsMap[project.id] || projectDetailsMap['crafted-spaces'];

  // Previous & Next navigation logic
  const currentIndex = PORTFOLIO.findIndex((p) => p.id === project.id);
  const prevProject = PORTFOLIO[(currentIndex - 1 + PORTFOLIO.length) % PORTFOLIO.length];
  const nextProject = PORTFOLIO[(currentIndex + 1) % PORTFOLIO.length];

  const relatedProjects = PORTFOLIO.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{project.title} — NOVEXA Case Study</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} — NOVEXA Case Study`} />
        <meta property="og:description" content={project.description} />
        <link rel="canonical" href={`https://novexa.agency/project/${project.id}`} />
      </Helmet>

      {/* 1. Case Study Hero */}
      <section
        id="project-detail-hero"
        aria-label={`${project.title} Hero`}
        style={{
          minHeight: '75vh',
          backgroundColor: 'var(--color-primary)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '8rem',
          paddingBottom: '5rem',
        }}
      >
        {/* Background Grid */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(248,246,242,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(248,246,242,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }}
        />

        <div className="container-novexa" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px' }}>
            {/* Back link */}
            <motion.div variants={fadeUp} style={{ marginBottom: '2rem' }}>
              <motion.a
                href="/portfolio"
                whileHover={{ x: -4 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                }}
              >
                <RiArrowLeftLine size={14} aria-hidden="true" />
                <span>Back to Portfolio</span>
              </motion.a>
            </motion.div>

            {/* Category tag */}
            <motion.div variants={fadeUp} style={{ marginBottom: '1rem' }}>
              <span className="type-label" style={{ color: 'var(--color-accent)' }}>
                {project.category}
              </span>
            </motion.div>

            {/* Title */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="clip-reveal">
                <motion.h1
                  variants={maskReveal}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.75rem, 6vw, 5.25rem)',
                    fontWeight: 900,
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em',
                    color: '#F8F6F2',
                    margin: 0,
                  }}
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>

            {/* Brief description */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: 'rgba(248,246,242,0.65)',
                maxWidth: '640px',
              }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Meta Info Strip */}
      <section
        style={{
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          paddingTop: '2.25rem',
          paddingBottom: '2.25rem',
        }}
      >
        <div className="container-novexa">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
            }}
            className="project-meta-grid"
          >
            <div>
              <span className="type-label" style={{ color: 'var(--color-text-subtle)' }}>Client</span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '0.2rem', margin: 0 }}>
                {detail.client}
              </p>
            </div>
            <div>
              <span className="type-label" style={{ color: 'var(--color-text-subtle)' }}>Year</span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '0.2rem', margin: 0 }}>
                {detail.year}
              </p>
            </div>
            <div>
              <span className="type-label" style={{ color: 'var(--color-text-subtle)' }}>Services</span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '0.2rem', margin: 0 }}>
                {detail.services.join(', ')}
              </p>
            </div>
            <div>
              <span className="type-label" style={{ color: 'var(--color-text-subtle)' }}>Inquire Project</span>
              <motion.a
                href={getWhatsAppUrl('portfolio')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  marginTop: '0.2rem',
                }}
              >
                <RiWhatsappLine size={14} aria-hidden="true" />
                <span>Discuss Similar Work</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .project-meta-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* 3. Hero Cover Image */}
      <section style={{ backgroundColor: 'var(--color-bg)' }} className="section-padding">
        <div className="container-novexa">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: POWER }}
            style={{
              borderRadius: '6px',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
              marginBottom: '5rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              backgroundColor: 'var(--color-primary)',
            }}
          >
            <motion.img
              src={project.image}
              alt={`${project.title} cover`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>

          {/* Structured Story Narrative */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              marginBottom: '6rem',
            }}
            className="case-study-narrative-grid"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: POWER }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              <div>
                <span className="type-label mb-2 block" style={{ color: 'var(--color-accent)' }}>01 / Overview</span>
                <h3 className="type-h3 mb-3">Project Scope</h3>
                <p className="type-body" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{detail.overview}</p>
              </div>

              <div>
                <span className="type-label mb-2 block" style={{ color: 'var(--color-accent)' }}>02 / Challenge</span>
                <h3 className="type-h3 mb-3">The Creative Challenge</h3>
                <p className="type-body" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{detail.challenge}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: POWER }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              <div>
                <span className="type-label mb-2 block" style={{ color: 'var(--color-accent)' }}>03 / Strategy</span>
                <h3 className="type-h3 mb-3">NOVEXA's Solution</h3>
                <p className="type-body" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{detail.approach}</p>
              </div>

              <div>
                <span className="type-label mb-2 block" style={{ color: 'var(--color-accent)' }}>04 / Impact</span>
                <h3 className="type-h3 mb-3">Measured Results</h3>
                <p className="type-body mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{detail.outcome}</p>

                {/* Metrics Badges */}
                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                  {project.metrics.map((m, idx) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1, ease: EASE }}
                      whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        padding: '1.25rem 1.5rem',
                        borderRadius: '6px',
                        border: '1px solid var(--color-border)',
                        transition: 'border-color 0.3s ease',
                      }}
                    >
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-secondary)', margin: 0, lineHeight: 1 }}>
                        {m.value}
                      </p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginTop: '0.35rem', margin: 0 }}>
                        {m.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 850px) {
              .case-study-narrative-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            }
          `}</style>

          {/* 4. Mixed Editorial Image Gallery */}
          {detail.galleryImages.length > 0 && (
            <div style={{ marginBottom: '6rem' }}>
              <span className="type-label mb-2 block" style={{ color: 'var(--color-accent)', textAlign: 'center' }}>Gallery</span>
              <h2 className="type-h2 mb-10" style={{ textAlign: 'center' }}>Visual Execution Details</h2>
              <div style={{ display: 'grid', gridTemplateColumns: detail.galleryImages.length > 1 ? '1fr 1fr' : '1fr', gap: '2rem' }} className="project-gallery-grid">
                {detail.galleryImages.map((imgUrl, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.15, ease: POWER }}
                    style={{ borderRadius: '6px', overflow: 'hidden', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                  >
                    <motion.img
                      src={imgUrl}
                      alt={`${project.title} detail photo ${idx + 1}`}
                      loading="lazy"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Previous / Next Project Navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '3rem',
              borderTop: '1px solid var(--color-border)',
              gap: '1.5rem',
            }}
          >
            <motion.a
              href={`/project/${prevProject.id}`}
              whileHover={{ x: -6 }}
              style={{ textDecoration: 'none', color: 'var(--color-primary)' }}
            >
              <span className="type-caption block" style={{ color: 'var(--color-text-subtle)', marginBottom: '0.2rem' }}>← Previous Project</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>{prevProject.title}</span>
            </motion.a>

            <motion.a
              href={`/project/${nextProject.id}`}
              whileHover={{ x: 6 }}
              style={{ textDecoration: 'none', color: 'var(--color-primary)', textAlign: 'right' }}
            >
              <span className="type-caption block" style={{ color: 'var(--color-text-subtle)', marginBottom: '0.2rem' }}>Next Project →</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>{nextProject.title}</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* 6. Related Work */}
      <section style={{ backgroundColor: 'var(--color-surface)' }} className="section-padding">
        <div className="container-novexa">
          <div style={{ marginBottom: '3rem' }}>
            <span className="type-label mb-2 block" style={{ color: 'var(--color-accent)' }}>Explore More</span>
            <h2 className="type-h2">Related Case Studies</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="related-projects-grid">
            {relatedProjects.map((rel, idx) => (
              <motion.a
                key={rel.id}
                href={`/project/${rel.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                style={{
                  display: 'block',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <div style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  <img src={rel.image} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="type-caption block" style={{ color: 'var(--color-accent)', marginBottom: '0.3rem' }}>{rel.category}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--color-primary)' }}>{rel.title}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .related-projects-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* 7. End CTA */}
      <section
        style={{
          backgroundColor: 'var(--color-primary)',
          color: '#F8F6F2',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          textAlign: 'center',
        }}
      >
        <div className="container-novexa" style={{ maxWidth: '720px' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label block mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            Start a Transformation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: POWER }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Ready to build a brand that commands attention?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}
          >
            <motion.a
              href={getWhatsAppUrl('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost inline-flex items-center gap-3"
              style={{ borderColor: 'rgba(248,246,242,0.4)', fontSize: '0.875rem' }}
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(248,246,242,0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={18} aria-hidden="true" />
              <span>Let's Build Something Iconic</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
