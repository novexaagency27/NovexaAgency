/**
 * NOVEXA — Premium Terms & Conditions Page
 * Complete, production-ready legal agreement with sticky reading progress,
 * desktop sticky TOC, mobile collapsible accordion, and bottom CTA.
 */
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  RiArrowUpLine,
  RiShieldCheckLine,
  RiFileListLine,
  RiLockLine,
  RiAlertLine,
  RiTimeLine,
  RiArrowDownSLine,
  RiCalendarCheckLine,
  RiTimerLine,
  RiCheckDoubleLine,
} from 'react-icons/ri';
import { LegalBottomCTA } from '@/components/ui/LegalBottomCTA';

// ── Sections Definition ─────────────────────────────────────────
const sections = [
  { id: 'project-confirmation',      num: '01', title: 'Project Confirmation' },
  { id: 'payment-policy',            num: '02', title: 'Payment Policy' },
  { id: 'signed-agreement',          num: '03', title: 'Signed Agreement & Scope' },
  { id: 'revision-policy',           num: '04', title: 'Revision & Extra Charges' },
  { id: 'change-requests',           num: '05', title: 'Change Request Policy' },
  { id: 'timeline-delays',           num: '06', title: 'Timeline & Client Delays' },
  { id: 'client-responsibilities',   num: '07', title: 'Client Responsibilities' },
  { id: 'cancellation-policy',       num: '08', title: 'Cancellation Policy' },
  { id: 'ownership-source-files',    num: '09', title: 'Ownership & Source Files' },
  { id: 'website-delivery',          num: '10', title: 'Website Delivery & Hosting' },
  { id: 'communication',             num: '11', title: 'Communication' },
  { id: 'confidentiality',           num: '12', title: 'Confidentiality' },
  { id: 'portfolio-rights',          num: '13', title: 'Portfolio Rights' },
  { id: 'refund-policy',             num: '14', title: 'Refund Policy' },
  { id: 'support-policy',            num: '15', title: 'Support Policy' },
  { id: 'late-payment-policy',       num: '16', title: 'Late Payment Policy' },
  { id: 'maintenance-thirdparty',    num: '17', title: 'Maintenance & Third Party Costs' },
  { id: 'additional-terms',          num: '18', title: 'Additional Legal Terms' },
  { id: 'acceptance',                num: '19', title: 'Acceptance of Terms' },
];

const revisionCards = [
  { service: 'UI/UX Design',         revisions: '3 Revisions Included', icon: '🎨' },
  { service: 'Branding Identity',    revisions: '3 Revisions Included', icon: '✨' },
  { service: 'Website Design',       revisions: '2 Revisions Included', icon: '💻' },
  { service: 'Video Editing',        revisions: '2 Revisions Included', icon: '🎬' },
  { service: 'Social Media',         revisions: '2 Revisions Included', icon: '📲' },
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

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul
    style={{
      listStyle: 'none',
      padding: 0,
      margin: '0 0 1.25rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.65rem',
    }}
  >
    {items.map((item) => (
      <li
        key={item}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          color: 'var(--color-text)',
        }}
      >
        <span style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '3px' }}>
          <RiCheckDoubleLine size={16} />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CalloutCard: React.FC<{
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'dark';
}> = ({ icon, children, variant = 'default' }) => {
  let borderColor = 'rgba(31,61,58,0.2)';
  let borderLeftColor = 'var(--color-secondary)';
  let bgColor = 'rgba(31,61,58,0.04)';
  let textColor = 'var(--color-text)';
  let iconColor = 'var(--color-secondary)';

  if (variant === 'warning') {
    borderColor = 'rgba(138,129,113,0.4)';
    borderLeftColor = 'var(--color-accent)';
    bgColor = 'rgba(138,129,113,0.08)';
    iconColor = 'var(--color-accent)';
  } else if (variant === 'dark') {
    borderColor = 'rgba(13,17,23,0.2)';
    borderLeftColor = 'var(--color-primary)';
    bgColor = 'var(--color-primary)';
    textColor = '#F8F6F2';
    iconColor = 'var(--color-accent)';
  }

  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        borderLeft: `4px solid ${borderLeftColor}`,
        borderRadius: '10px',
        padding: '1.25rem 1.5rem',
        backgroundColor: bgColor,
        margin: '1.25rem 0',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
      }}
    >
      {icon && <span style={{ color: iconColor, flexShrink: 0, marginTop: '2px' }}>{icon}</span>}
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.75, color: textColor }}>
        {children}
      </div>
    </div>
  );
};

export const TermsAndConditionsPage: React.FC = () => {
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
        <title>Terms &amp; Conditions — NOVEXA | Legal Center</title>
        <meta
          name="description"
          content="NOVEXA Terms & Conditions. Transparent legal guidelines covering project confirmation, payment terms, revision policies, ownership rights, and website delivery."
        />
        <meta property="og:title" content="Terms & Conditions — NOVEXA" />
        <meta
          property="og:description"
          content="Transparent, professional legal framework protecting both our clients and agency for a smooth working relationship."
        />
        <link rel="canonical" href="https://novexa.agency/terms-and-conditions" />
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
        id="terms-hero"
        aria-label="Terms and Conditions Hero"
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
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-20%',
            right: '5%',
            width: '45vw',
            height: '45vw',
            maxWidth: '550px',
            maxHeight: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,61,58,0.35) 0%, transparent 70%)',
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
            <RiFileListLine size={14} aria-hidden="true" />
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
            Terms &amp;{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              Conditions
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
            Please read these Terms &amp; Conditions carefully before starting a project with NOVEXA.
            These policies help create a transparent, professional, and secure working relationship
            between our agency and our clients.
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
              <RiShieldCheckLine size={16} color="var(--color-accent)" />
              <div>
                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', fontWeight: 700 }}>EFFECTIVE YEAR</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(248,246,242,0.85)' }}>2026</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <RiTimerLine size={16} color="var(--color-accent)" />
              <div>
                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', fontWeight: 700 }}>READ TIME</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(248,246,242,0.85)' }}>~7 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main
        id="terms-main"
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
            {/* Desktop Sticky TOC */}
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

              {/* 1. Project Confirmation */}
              <PolicyCard id="project-confirmation" num="01" title="Project Confirmation">
                <BodyText>
                  A project is officially confirmed and scheduled in our studio production calendar only after:
                </BodyText>
                <BulletList
                  items={[
                    'Proposal approval by the client',
                    'Scope confirmation',
                    'Signed legal agreement',
                    '50% advance payment received',
                  ]}
                />
                <CalloutCard icon={<RiShieldCheckLine size={18} />}>
                  <strong>No work will begin</strong> before all four requirements are completed. This ensures total clarity and mutual commitment prior to project kickoff.
                </CalloutCard>
              </PolicyCard>

              {/* 2. Payment Policy */}
              <PolicyCard id="payment-policy" num="02" title="Payment Policy">
                <BodyText>
                  NOVEXA enforces a standardized payment structure for all project engagements:
                </BodyText>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    margin: '1.25rem 0',
                  }}
                  className="payment-card-grid"
                >
                  <div
                    style={{
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      padding: '1.25rem 1.5rem',
                      backgroundColor: 'var(--color-surface)',
                    }}
                  >
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>STAGE 1</span>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>50% Advance Payment</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                      Required upfront before any design or development work begins.
                    </p>
                  </div>

                  <div
                    style={{
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      padding: '1.25rem 1.5rem',
                      backgroundColor: 'var(--color-surface)',
                    }}
                  >
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>STAGE 2</span>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>50% Remaining Balance</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                      Required prior to final asset handover, website deployment, or editable source files.
                    </p>
                  </div>
                </div>

                <CalloutCard variant="warning" icon={<RiAlertLine size={18} />}>
                  Final source files, website deployment, editable project assets, or domain transfers will only be completed after <strong>full 100% payment</strong> has been received by NOVEXA.
                </CalloutCard>
              </PolicyCard>

              {/* 3. Signed Agreement & Scope */}
              <PolicyCard id="signed-agreement" num="03" title="Signed Agreement & Scope">
                <BodyText>
                  Every project requires a signed agreement before work commences. This contract outlines all legal and operational terms to protect both parties.
                </BodyText>
                <BodyText style={{ fontWeight: 600 }}>The signed agreement defines:</BodyText>
                <BulletList
                  items={[
                    'Project Scope',
                    'Timeline & Milestones',
                    'Deliverables',
                    'Payment Terms & Schedule',
                    'Revision Limits',
                    'Ownership Rights',
                    'Responsibilities of both parties',
                  ]}
                />
              </PolicyCard>

              {/* 4. Revision Policy & Extra Charges */}
              <PolicyCard id="revision-policy" num="04" title="Revision Policy & Extra Charges">
                <BodyText>
                  Included revisions per service category to ensure high production speed and design refinement:
                </BodyText>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '0.875rem',
                    margin: '1.25rem 0',
                  }}
                >
                  {revisionCards.map((r) => (
                    <div
                      key={r.service}
                      style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: '10px',
                        padding: '1rem',
                        backgroundColor: 'var(--color-surface)',
                        textAlign: 'center',
                      }}
                    >
                      <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.25rem' }}>{r.icon}</span>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0 0 0.25rem 0' }}>{r.service}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, margin: 0 }}>{r.revisions}</p>
                    </div>
                  ))}
                </div>

                <CalloutCard variant="default">
                  <strong>Extra Revisions Chargeable:</strong> Revisions requested beyond the included revision limit will incur additional charges, calculated on a per-revision or hourly basis.
                </CalloutCard>
              </PolicyCard>

              {/* 5. Change Request Policy */}
              <PolicyCard id="change-requests" num="05" title="Change Request Policy">
                <BodyText>
                  Any work or feature requested outside the signed scope is considered a Change Request.
                </BodyText>
                <BodyText style={{ fontWeight: 600 }}>Examples of scope changes:</BodyText>
                <BulletList
                  items={[
                    'Additional website pages',
                    'Extra features or custom integrations',
                    'Additional video deliverables or length extensions',
                    'Extra logo concepts beyond agreed initial concepts',
                    'Additional social media posts or templates',
                    'New branding concepts',
                  ]}
                />
                <BodyText style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Everything outside the agreed scope requires a separate written quotation and client approval before implementation.
                </BodyText>
              </PolicyCard>

              {/* 6. Timeline & Client Delays */}
              <PolicyCard id="timeline-delays" num="06" title="Timeline & Client Delays">
                <BodyText>
                  Project timelines depend heavily on receiving required assets, content, and approvals on schedule.
                </BodyText>
                <CalloutCard icon={<RiTimeLine size={18} />}>
                  Client delays in providing copy, images, brand assets, or review feedback will automatically extend delivery timelines accordingly.
                </CalloutCard>
              </PolicyCard>

              {/* 7. Client Responsibilities */}
              <PolicyCard id="client-responsibilities" num="07" title="Client Responsibilities">
                <BodyText>
                  Clients are responsible for providing all required text, high-resolution logos, vector media, and branding materials unless content creation is explicitly included in the proposal. Clients are requested to respond within 3 business days to avoid production delays.
                </BodyText>
              </PolicyCard>

              {/* 8. Cancellation Policy */}
              <PolicyCard id="cancellation-policy" num="08" title="Cancellation Policy">
                <BodyText>
                  If a project is cancelled by the client after work has officially begun:
                </BodyText>
                <BulletList
                  items={[
                    'Advance payment (50%) is strictly non-refundable.',
                    'Completed work up to the cancellation date will be billed.',
                    'Outstanding invoices must be cleared before project closure.',
                  ]}
                />
              </PolicyCard>

              {/* 9. Ownership & Source Files */}
              <PolicyCard id="ownership-source-files" num="09" title="Ownership & Source Files">
                <BodyText>
                  Full legal ownership and intellectual property rights transfer to the client <strong>only after complete payment</strong> has been received by NOVEXA.
                </BodyText>
                <CalloutCard variant="warning" icon={<RiLockLine size={18} />}>
                  <strong>Source File Delivery:</strong> Editable source files (Figma, Illustrator, After Effects, Source Code) are delivered only after complete 100% payment has been settled.
                </CalloutCard>
              </PolicyCard>

              {/* 10. Website Delivery & Hosting */}
              <PolicyCard id="website-delivery" num="10" title="Website Delivery & Hosting">
                <BodyText>
                  For all website design and development projects:
                </BodyText>
                <BulletList
                  items={[
                    'Final website deployment is executed after 100% full payment.',
                    'Hosting & Domain fees are separate unless explicitly included in proposal.',
                    'Third-party subscriptions (plugins, CMS, APIs) are billed separately.',
                  ]}
                />
              </PolicyCard>

              {/* 11. Communication */}
              <PolicyCard id="communication" num="11" title="Communication">
                <BodyText>
                  Official project communication channels to ensure accuracy and documentation:
                </BodyText>
                <BulletList items={['WhatsApp', 'Email', 'Scheduled Meetings']} />
              </PolicyCard>

              {/* 12. Confidentiality */}
              <PolicyCard id="confidentiality" num="12" title="Confidentiality">
                <BodyText>
                  NOVEXA respects complete client confidentiality. All sensitive data, business strategies, and project information shared with us will remain strictly private.
                </BodyText>
              </PolicyCard>

              {/* 13. Portfolio Rights */}
              <PolicyCard id="portfolio-rights" num="13" title="Portfolio Rights">
                <BodyText>
                  Unless restricted by a signed NDA, NOVEXA reserves the right to showcase completed work on our website, portfolio, and social media channels.
                </BodyText>
              </PolicyCard>

              {/* 14. Refund Policy */}
              <PolicyCard id="refund-policy" num="14" title="Refund Policy">
                <CalloutCard variant="warning" icon={<RiAlertLine size={18} />}>
                  <strong>Advance payments are non-refundable.</strong> Completed work and delivered project stages cannot be refunded under any circumstances once production has commenced.
                </CalloutCard>
              </PolicyCard>

              {/* 15. Support Policy */}
              <PolicyCard id="support-policy" num="15" title="Support Policy">
                <BodyText>
                  NOVEXA includes <strong>7 days of minor support</strong> following final project handover. Ongoing maintenance or updates after 7 days will be billed separately.
                </BodyText>
              </PolicyCard>

              {/* 16. Late Payment Policy */}
              <PolicyCard id="late-payment-policy" num="16" title="Late Payment Policy">
                <BodyText>
                  Late payments outside the agreed payment schedule may result in project pauses, delivery delays, and service suspension until payment is cleared.
                </BodyText>
              </PolicyCard>

              {/* 17. Maintenance & Third Party Costs */}
              <PolicyCard id="maintenance-thirdparty" num="17" title="Maintenance & Third Party Costs">
                <BodyText>
                  Future maintenance, backups, security updates, domains, hosting, premium fonts, plugins, stock assets, APIs, and software licenses are billed separately unless specified.
                </BodyText>
              </PolicyCard>

              {/* 18. Additional Legal Terms */}
              <PolicyCard id="additional-terms" num="18" title="Additional Legal Terms">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Rush Project Fee:</strong> Urgent projects requiring fast delivery incur a 25%–50% rush fee.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Project Inactivity:</strong> Projects inactive for over 30 days due to client unresponsiveness may be archived. Restarting may require a reactivation fee.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Approval Policy:</strong> Approved stages requiring later modifications are treated as new change requests.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Limitation of Liability:</strong> NOVEXA is not liable for indirect damages or third-party service outages.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Force Majeure:</strong> NOVEXA is not responsible for delays caused by natural disasters, internet outages, or events beyond control.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Governing Law:</strong> Governed by the laws of India. Jurisdiction: Gujarat, India.
                  </p>
                </div>
              </PolicyCard>

              {/* 19. Acceptance of Terms */}
              <PolicyCard id="acceptance" num="19" title="Acceptance of Terms">
                <CalloutCard variant="dark" icon={<RiShieldCheckLine size={18} />}>
                  By signing the agreement and paying the advance 50% deposit, the client confirms complete acceptance of these Terms &amp; Conditions.
                </CalloutCard>
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
        @media (max-width: 600px) {
          .payment-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default TermsAndConditionsPage;
