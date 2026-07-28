/**
 * NOVEXA — Master Legal Center Page (/legal)
 * Single long-form, editorial legal documentation page.
 * Includes sticky reading progress bar, desktop sticky TOC, mobile accordion,
 * all 14 comprehensive legal sections, and bottom CTA.
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
  RiWhatsappLine,
  RiMailLine,
} from 'react-icons/ri';
import { BRAND, getWhatsAppUrl } from '@/utils/constants';

// ── 14 Master Sections Definition ──────────────────────────────
const sections = [
  { id: 'terms-conditions',        num: '01', title: 'Terms & Conditions' },
  { id: 'payment-policy',          num: '02', title: 'Payment Policy' },
  { id: 'revision-policy',         num: '03', title: 'Revision Policy' },
  { id: 'refund-cancellation',     num: '04', title: 'Refund & Cancellation Policy' },
  { id: 'project-timeline-policy', num: '05', title: 'Project Agreement & Timeline' },
  { id: 'client-responsibilities', num: '06', title: 'Client Responsibilities' },
  { id: 'agency-responsibilities', num: '07', title: 'Agency Responsibilities' },
  { id: 'privacy-policy',          num: '08', title: 'Privacy Policy' },
  { id: 'cookie-policy',           num: '09', title: 'Cookie Policy' },
  { id: 'disclaimer',              num: '10', title: 'Disclaimer' },
  { id: 'ownership-copyright',     num: '11', title: 'Ownership & Intellectual Property' },
  { id: 'maintenance-support',     num: '12', title: 'Maintenance & Support' },
  { id: 'additional-policies',     num: '13', title: 'Additional Operational Policies' },
  { id: 'contact-information',     num: '14', title: 'Contact Information' },
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

export const LegalPage: React.FC = () => {
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
        <title>Legal Center — NOVEXA | Everything You Need Before Working With NOVEXA</title>
        <meta
          name="description"
          content="Complete NOVEXA Legal Center. Official terms, payment policies, revision limits, copyright ownership, privacy policies, and client agreements."
        />
        <meta property="og:title" content="Legal Center — NOVEXA" />
        <link rel="canonical" href="https://novexa.agency/legal" />
      </Helmet>

      {/* Reading Progress Bar */}
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
            <RiFileListLine size={14} aria-hidden="true" />
            LEGAL CENTER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#F8F6F2',
              marginBottom: '1.5rem',
            }}
          >
            Everything You Need Before Working With{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              NOVEXA
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
            Welcome to the NOVEXA Legal Center. Transparency, mutual protection, and operational clarity are fundamental to our agency partnerships. Below you will find all terms, payment policies, revision rules, and intellectual property agreements in full detail.
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
                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', fontWeight: 700 }}>LAST REVISED</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(248,246,242,0.85)' }}>July 2026</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <RiTimerLine size={16} color="var(--color-accent)" />
              <div>
                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', fontWeight: 700 }}>READ TIME</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(248,246,242,0.85)' }}>~8 min read</span>
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

              {/* 01 Terms & Conditions */}
              <PolicyCard id="terms-conditions" num="01" title="Terms & Conditions">
                <BodyText>
                  By engaging NOVEXA for branding, website design, website development, video editing, or marketing services, you agree to comply with all terms outlined in this master agreement.
                </BodyText>
                <CalloutCard icon={<RiShieldCheckLine size={18} />}>
                  Projects officially enter our active production queue only after scope approval, contract signing, and receipt of the 50% advance deposit.
                </CalloutCard>
              </PolicyCard>

              {/* 02 Payment Policy */}
              <PolicyCard id="payment-policy" num="02" title="Payment Policy">
                <BodyText>Standard payment structure for all NOVEXA client engagements:</BodyText>
                <BulletList
                  items={[
                    '50% Advance Payment: Required upfront before any design or development work begins.',
                    'Remaining 50% Balance: Required prior to final website deployment, asset handover, or source file delivery.',
                    'No work begins until the 50% advance deposit is received and confirmed.',
                    'Late payments outside agreed schedule will delay delivery dates.',
                    'Full ownership of deliverables transfers to the client only after complete 100% payment.',
                  ]}
                />
              </PolicyCard>

              {/* 03 Revision Policy */}
              <PolicyCard id="revision-policy" num="03" title="Revision Policy">
                <BodyText>
                  Limited revisions are included per project scope to maintain high design quality and project velocity:
                </BodyText>
                <BulletList
                  items={[
                    'UI/UX Design: Up to 3 rounds included',
                    'Branding Identity: Up to 3 rounds included',
                    'Website Design: Up to 2 rounds included',
                    'Video Editing: Up to 2 rounds included',
                    'Social Media: Up to 2 rounds included',
                  ]}
                />
                <CalloutCard variant="warning" icon={<RiAlertLine size={18} />}>
                  Extra revisions beyond the included rounds are billed separately. Major scope changes or additions after stage approval require a separate written quotation.
                </CalloutCard>
              </PolicyCard>

              {/* 04 Refund & Cancellation Policy */}
              <PolicyCard id="refund-cancellation" num="04" title="Refund & Cancellation Policy">
                <BulletList
                  items={[
                    'Advance payments (50%) are strictly non-refundable once paid.',
                    'Completed work and delivered design stages cannot be refunded.',
                    'Cancellation before kickoff: Advance deposit is retained as administrative and resource allocation fee.',
                    'Cancellation after production starts: Completed work to date is calculated and billed; outstanding balances must be cleared.',
                  ]}
                />
              </PolicyCard>

              {/* 05 Project Agreement & Timeline */}
              <PolicyCard id="project-timeline-policy" num="05" title="Project Agreement & Timeline">
                <BodyText>Before any project timeline officially commences:</BodyText>
                <BulletList
                  items={[
                    'Client must approve the formal quotation',
                    'Client must sign the project agreement',
                    'Client must provide all required brand assets, copy, and content',
                  ]}
                />
                <CalloutCard icon={<RiTimeLine size={18} />}>
                  The official delivery timeline starts ONLY after the advance deposit and all required client assets are received by NOVEXA.
                </CalloutCard>
              </PolicyCard>

              {/* 06 Client Responsibilities */}
              <PolicyCard id="client-responsibilities" num="06" title="Client Responsibilities">
                <BodyText>
                  Clients are responsible for providing high-resolution logos, brand guidelines, text content, media assets, and timely feedback within 3 business days of receiving deliverables.
                </BodyText>
              </PolicyCard>

              {/* 07 Agency Responsibilities */}
              <PolicyCard id="agency-responsibilities" num="07" title="Agency Responsibilities">
                <BodyText>
                  NOVEXA is committed to delivering bespoke, handcrafted, world-class design and engineering solutions according to the approved scope, timeline, and quality standards.
                </BodyText>
              </PolicyCard>

              {/* 08 Privacy Policy */}
              <PolicyCard id="privacy-policy" num="08" title="Privacy Policy">
                <BodyText>
                  We collect minimal contact information (Name, Email, Phone, Company) necessary to execute services. Client information is strictly protected, kept confidential, and never sold to third parties.
                </BodyText>
              </PolicyCard>

              {/* 09 Cookie Policy */}
              <PolicyCard id="cookie-policy" num="09" title="Cookie Policy">
                <BodyText>
                  Our site uses essential and performance cookies (including Google Analytics) to optimize page loading speed, route transitions, and user experience.
                </BodyText>
              </PolicyCard>

              {/* 10 Disclaimer */}
              <PolicyCard id="disclaimer" num="10" title="Disclaimer">
                <BodyText>
                  Website information and case studies are for portfolio presentation purposes. Past results do not guarantee identical future performance. Content does not constitute legal or financial advice.
                </BodyText>
              </PolicyCard>

              {/* 11 Ownership & Intellectual Property */}
              <PolicyCard id="ownership-copyright" num="11" title="Ownership & Intellectual Property">
                <BulletList
                  items={[
                    'NOVEXA retains complete ownership of all designs, code, and source files until full 100% payment is completed.',
                    'After final payment is received, full legal ownership transfers to the client.',
                    'NOVEXA reserves the right to display completed work in our agency portfolio and marketing channels unless restricted by a signed NDA.',
                  ]}
                />
              </PolicyCard>

              {/* 12 Maintenance & Support */}
              <PolicyCard id="maintenance-support" num="12" title="Maintenance & Support">
                <BodyText>
                  Includes <strong>7 days of post-delivery minor support</strong> following final project handover. Ongoing maintenance, backups, security monitoring, or new feature development are billed separately.
                </BodyText>
              </PolicyCard>

              {/* 13 Additional Operational Policies */}
              <PolicyCard id="additional-policies" num="13" title="Additional Operational Policies">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Communication Policy:</strong> Official channels are WhatsApp, Email, and Scheduled Meetings.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Third-Party Costs:</strong> Domains, hosting, premium fonts, stock assets, plugins, and APIs are billed separately.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Project Pause &amp; Inactivity:</strong> Projects inactive for over 30 days due to client unresponsiveness may be archived. Restarting may incur a reactivation fee.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Limitation of Liability &amp; Force Majeure:</strong> NOVEXA is not liable for indirect damages or delays caused by natural disasters, internet outages, or events beyond control.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong>Governing Law:</strong> Governed by the laws of India. Jurisdiction: Gujarat, India.
                  </p>
                </div>
              </PolicyCard>

              {/* 14 Contact Information */}
              <PolicyCard id="contact-information" num="14" title="Contact Information">
                <BodyText>
                  For any legal or contract inquiries, contact NOVEXA directly via WhatsApp at <strong>{BRAND.phone}</strong> or Email at <strong>{BRAND.email}</strong>.
                </BodyText>
              </PolicyCard>

            </div>
          </div>

          {/* Master Bottom CTA Section */}
          <div
            style={{
              marginTop: '5rem',
              backgroundColor: 'var(--color-primary)',
              borderRadius: '24px',
              padding: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#F8F6F2',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(13,17,23,0.25)',
              textAlign: 'center',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-30%',
                right: '-10%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(31,61,58,0.5) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                Clear Communication
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 900,
                  color: '#F8F6F2',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                  lineHeight: 1.1,
                }}
              >
                Have Questions?
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'rgba(248,246,242,0.65)',
                  marginBottom: '2.5rem',
                }}
              >
                If you have any questions regarding our legal policies, feel free to contact us before starting your project.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <motion.a
                  href={getWhatsAppUrl('consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-3"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#0D1117',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    padding: '0.9375rem 2.25rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RiWhatsappLine size={18} />
                  <span>Chat on WhatsApp (+91 9227025524)</span>
                </motion.a>

                <motion.a
                  href={`mailto:${BRAND.email}`}
                  className="btn btn-ghost inline-flex items-center gap-3"
                  style={{
                    borderColor: 'rgba(248,246,242,0.3)',
                    color: '#F8F6F2',
                    fontSize: '0.875rem',
                    padding: '0.9375rem 2.25rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(248,246,242,0.06)',
                  }}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(248,246,242,0.12)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RiMailLine size={18} />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </div>
          </div>

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

export default LegalPage;
