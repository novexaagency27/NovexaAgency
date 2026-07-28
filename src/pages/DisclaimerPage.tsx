/**
 * NOVEXA — Disclaimer Page
 * Production-ready Disclaimer page with portfolio accuracy disclosures,
 * result disclaimers, copyright & trademark statements, and legal limits.
 */
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  RiArrowUpLine,
  RiInformationLine,
  RiArrowDownSLine,
  RiCalendarCheckLine,
  RiTimerLine,
  RiCheckDoubleLine,
} from 'react-icons/ri';
import { LegalBottomCTA } from '@/components/ui/LegalBottomCTA';

const sections = [
  { id: 'website-info',       num: '01', title: 'Website Information' },
  { id: 'portfolio-accuracy', num: '02', title: 'Portfolio Accuracy' },
  { id: 'third-party-links',  num: '03', title: 'Third Party Links' },
  { id: 'result-disclaimer',  num: '04', title: 'Client Result Disclaimer' },
  { id: 'no-financial-advice',num: '05', title: 'No Financial Advice' },
  { id: 'no-legal-advice',    num: '06', title: 'No Legal Advice' },
  { id: 'copyright-trademark',num: '07', title: 'Copyright & Trademark' },
  { id: 'liability-limit',    num: '08', title: 'Limitation of Liability' },
  { id: 'availability',       num: '09', title: 'Website Availability' },
];

const PolicyCard: React.FC<{
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, num, title, children }) => (
  <section
    id={id}
    aria-labelledby={`head-${id}`}
    style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid var(--color-border)',
      borderRadius: '16px',
      padding: 'clamp(1.75rem, 3vw, 2.5rem)',
      marginBottom: '2rem',
      boxShadow: '0 4px 20px rgba(13,17,23,0.03)',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.875rem',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid rgba(209,206,201,0.4)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: 800,
          letterSpacing: '0.12em',
          color: '#FFFFFF',
          backgroundColor: 'var(--color-primary)',
          padding: '0.25rem 0.6rem',
          borderRadius: '6px',
        }}
      >
        {num}
      </span>
      <h2
        id={`head-${id}`}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--color-primary)',
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </section>
);

const BodyText: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({
  children,
  style,
}) => (
  <p
    style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.95rem',
      lineHeight: 1.8,
      color: 'var(--color-text)',
      marginBottom: '1rem',
      ...style,
    }}
  >
    {children}
  </p>
);

export const DisclaimerPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setMobileTocOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Helmet>
        <title>Disclaimer — NOVEXA | Legal Center</title>
        <meta
          name="description"
          content="NOVEXA Agency Disclaimer. General information disclosures regarding portfolio accuracy, client result guarantees, third-party links, and legal limits."
        />
        <meta property="og:title" content="Disclaimer — NOVEXA" />
        <link rel="canonical" href="https://novexa.agency/disclaimer" />
      </Helmet>

      {/* Reading Progress Indicator */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'var(--color-accent)',
          transformOrigin: '0%',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(138,129,113,0.8)',
          scaleX,
        }}
      />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'var(--color-primary)',
          color: '#F8F6F2',
          paddingTop: 'clamp(7rem, 12vw, 10rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(248,246,242,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(248,246,242,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }}
        />
        <div className="container-novexa" style={{ position: 'relative', zIndex: 1, maxWidth: '850px' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(248,246,242,0.06)',
              border: '1px solid rgba(248,246,242,0.12)',
              padding: '0.4rem 0.875rem',
              borderRadius: '9999px',
              marginBottom: '1.5rem',
            }}
          >
            <RiInformationLine size={15} aria-hidden="true" />
            Legal Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#F8F6F2',
              marginBottom: '1.5rem',
            }}
          >
            Agency{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              Disclaimer
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              lineHeight: 1.8,
              color: 'rgba(248,246,242,0.65)',
              marginBottom: '2.5rem',
            }}
          >
            General legal disclaimers regarding website content, portfolio case studies, result expectations, and third-party software liabilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(248,246,242,0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <RiCalendarCheckLine size={16} color="var(--color-accent)" />
              <div>
                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', fontWeight: 700 }}>LAST UPDATED</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(248,246,242,0.85)' }}>July 2026</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <RiTimerLine size={16} color="var(--color-accent)" />
              <div>
                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', fontWeight: 700 }}>READ TIME</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(248,246,242,0.85)' }}>~3 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main
        style={{
          backgroundColor: 'var(--color-bg)',
          paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(4rem, 8vw, 8rem)',
        }}
      >
        <div className="container-novexa" style={{ maxWidth: '1200px' }}>
          
          {/* Mobile Accordion */}
          <div className="mobile-toc-wrapper" style={{ marginBottom: '2rem' }}>
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
              }}
            >
              <span>Jump to Section...</span>
              <motion.div animate={{ rotate: mobileTocOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <RiArrowDownSLine size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {mobileTocOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderTop: 'none',
                    borderRadius: '0 0 12px 12px',
                    overflow: 'hidden',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    padding: '0.75rem',
                  }}
                >
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.5rem 0.75rem',
                        border: 'none',
                        background: activeSection === s.id ? 'var(--color-surface)' : 'transparent',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: activeSection === s.id ? 700 : 400,
                        color: activeSection === s.id ? 'var(--color-primary)' : 'var(--color-text)',
                        cursor: 'pointer',
                        display: 'flex',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>{s.num}</span>
                      <span>{s.title}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="terms-grid-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '260px 1fr',
              gap: '3.5rem',
              alignItems: 'start',
            }}
          >
            {/* Desktop Sticky Sidebar TOC */}
            <aside
              className="desktop-toc-sidebar"
              aria-label="Table of Contents"
              style={{
                position: 'sticky',
                top: '6rem',
                maxHeight: 'calc(100vh - 8rem)',
                overflowY: 'auto',
                paddingRight: '0.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.625rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-subtle)',
                  marginBottom: '1rem',
                  paddingLeft: '0.75rem',
                }}
              >
                Table of Contents
              </p>
              <nav aria-label="Sections nav">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {sections.map((s) => {
                    const isActive = activeSection === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollToSection(s.id)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            background: isActive ? 'rgba(31,61,58,0.08)' : 'transparent',
                            border: 'none',
                            borderLeft: `2px solid ${isActive ? 'var(--color-secondary)' : 'transparent'}`,
                            padding: '0.45rem 0.75rem',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            transition: 'all 200ms ease',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              color: isActive ? 'var(--color-secondary)' : 'var(--color-text-subtle)',
                              flexShrink: 0,
                            }}
                          >
                            {s.num}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.8125rem',
                              fontWeight: isActive ? 600 : 400,
                              color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                              lineHeight: 1.35,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {s.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Content Column (850px max width) */}
            <div style={{ maxWidth: '850px' }}>

              {/* 1. Website Information */}
              <PolicyCard id="website-info" num="01" title="Website Information">
                <BodyText>
                  The information provided on the NOVEXA website is for general marketing, informational, and portfolio presentation purposes only. While we strive to maintain accurate content, we make no warranties regarding completeness or instant timeliness.
                </BodyText>
              </PolicyCard>

              {/* 2. Portfolio Accuracy */}
              <PolicyCard id="portfolio-accuracy" num="02" title="Portfolio Accuracy">
                <BodyText>
                  Case studies, branding presentations, UI mockups, and video samples shown in our portfolio reflect real agency projects and creative concepts created by NOVEXA. Specific metrics mentioned represent historical client outcomes and vary per industry.
                </BodyText>
              </PolicyCard>

              {/* 3. Third Party Links */}
              <PolicyCard id="third-party-links" num="03" title="Third Party Links">
                <BodyText>
                  Our website may contain links to external third-party websites or services. NOVEXA has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites.
                </BodyText>
              </PolicyCard>

              {/* 4. Client Result Disclaimer */}
              <PolicyCard id="result-disclaimer" num="04" title="Client Result Disclaimer">
                <BodyText>
                  Past branding, UI/UX, or marketing results achieved for previous clients do not guarantee identical outcomes for future engagements. Individual growth depends on market dynamics, product quality, and external factors.
                </BodyText>
              </PolicyCard>

              {/* 5. No Financial Advice */}
              <PolicyCard id="no-financial-advice" num="05" title="No Financial Advice">
                <BodyText>
                  Content, estimations, and growth projections provided by NOVEXA do not constitute financial, investment, or business accounting advice.
                </BodyText>
              </PolicyCard>

              {/* 6. No Legal Advice */}
              <PolicyCard id="no-legal-advice" num="06" title="No Legal Advice">
                <BodyText>
                  Legal policies published on this website are agency operational guidelines and do not substitute formal legal counsel.
                </BodyText>
              </PolicyCard>

              {/* 7. Copyright & Trademark */}
              <PolicyCard id="copyright-trademark" num="07" title="Copyright & Trademark">
                <BodyText>
                  All content, logos, custom typography, animations, code, and editorial design on this website are protected under copyright and trademark laws belonging to NOVEXA Agency unless otherwise noted.
                </BodyText>
              </PolicyCard>

              {/* 8. Limitation of Liability */}
              <PolicyCard id="liability-limit" num="08" title="Limitation of Liability">
                <BodyText>
                  NOVEXA shall not be held liable for any indirect, special, incidental, or consequential damages resulting from website usage or third-party service downtime.
                </BodyText>
              </PolicyCard>

              {/* 9. Website Availability */}
              <PolicyCard id="availability" num="09" title="Website Availability">
                <BodyText>
                  We aim for continuous 99.9% uptime, but NOVEXA does not guarantee uninterrupted website availability during server maintenance or hosting infrastructure upgrades.
                </BodyText>
              </PolicyCard>

            </div>
          </div>

          {/* Shared Bottom CTA */}
          <LegalBottomCTA />

        </div>
      </main>

      {/* Floating Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            style={{
              position: 'fixed',
              bottom: '2.5rem',
              right: '2.5rem',
              zIndex: 500,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              border: '1px solid rgba(248,246,242,0.15)',
              color: '#F8F6F2',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(13,17,23,0.3)',
            }}
          >
            <RiArrowUpLine size={20} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .mobile-toc-wrapper { display: none; }
        .desktop-toc-sidebar { display: block; }
        @media (max-width: 960px) {
          .terms-grid-layout { grid-template-columns: 1fr !important; }
          .desktop-toc-sidebar { display: none !important; }
          .mobile-toc-wrapper { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default DisclaimerPage;
