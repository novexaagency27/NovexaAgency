/**
 * NOVEXA — Premium Editorial Footer
 * 4-column luxury layout with Back-to-Top scroll, social icons, magnetic CTA, and brand statements.
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RiWhatsappLine,
  RiArrowUpLine,
  RiInstagramLine,
  RiMailLine,
  RiLinkedinFill,
} from 'react-icons/ri';
import { BRAND, getWhatsAppUrl } from '@/utils/constants';

// ── Data ──────────────────────────────────────────────────────
const footerNav = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/portfolio' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

const footerServices = [
  { label: 'Brand Identity',  href: '/services#brand-identity' },
  { label: 'Website Design',  href: '/services#website-design' },
  { label: 'UI/UX Design',    href: '/services#ui-ux' },
  { label: 'Video Editing',   href: '/services#video-editing' },
  { label: 'Social Media',    href: '/services#social-media' },
  { label: 'Packaging',       href: '/services#packaging-design' },
];

const footerContact = [
  { label: BRAND.email,      href: `mailto:${BRAND.email}`,  external: false },
  { label: BRAND.phone,      href: `tel:${BRAND.phone}`,     external: false },
  { label: 'WhatsApp',       href: getWhatsAppUrl('default'), external: true },
  { label: 'Instagram',      href: BRAND.instagram,           external: true },
  { label: 'Surat, India',   href: '/contact',               external: false },
];

const socialIcons = [
  { label: 'Instagram', href: BRAND.instagram, icon: <RiInstagramLine size={16} /> },
  { label: 'WhatsApp',  href: getWhatsAppUrl('default'), icon: <RiWhatsappLine size={16} /> },
  { label: 'Email',     href: `mailto:${BRAND.email}`, icon: <RiMailLine size={16} /> },
  { label: 'LinkedIn',  href: 'https://linkedin.com', icon: <RiLinkedinFill size={16} /> },
];

// ── Link Component with underline reveal ──
const FooterLink: React.FC<{
  href: string;
  children: React.ReactNode;
  external?: boolean;
  accent?: boolean;
}> = ({ href, children, external = false, accent = false }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: '0.02em',
        color: hovered
          ? accent
            ? '#25D366'
            : '#F8F6F2'
          : 'rgba(248,246,242,0.5)',
        textDecoration: 'none',
        transition: 'color 240ms cubic-bezier(0.25,0.46,0.45,0.94), transform 240ms cubic-bezier(0.25,0.46,0.45,0.94)',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        position: 'relative',
        paddingBottom: '2px',
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: hovered ? '100%' : '0%',
          height: '1px',
          backgroundColor: accent ? '#25D366' : '#F8F6F2',
          transition: 'width 280ms cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      />
    </a>
  );
};

// ── Column Heading ──
const ColHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p
    style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(248,246,242,0.25)',
      marginBottom: '1.75rem',
    }}
  >
    {children}
  </p>
);

// ── Main Footer Component ─────────────────────────────────────
export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const [topBtnHovered, setTopBtnHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="NOVEXA site footer"
      style={{
        backgroundColor: 'var(--color-primary)',
        color: '#F8F6F2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Grid & Soft Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(248,246,242,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,246,242,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,61,58,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── SECTION 1: Large Editorial CTA ── */}
      <div
        style={{
          borderBottom: '1px solid rgba(248,246,242,0.07)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container-novexa" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1.25rem',
            }}
          >
            Start a Project
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.25rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#F8F6F2',
              marginBottom: '1rem',
              maxWidth: '820px',
            }}
          >
            Let's Build Something{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              Extraordinary.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(248,246,242,0.5)',
              maxWidth: '520px',
              marginBottom: '3rem',
            }}
          >
            NOVEXA is a premier creative agency partnering with ambitious brands globally to craft unforgettable visual identities and high-performing digital systems.
          </motion.p>

          {/* Large CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#F8F6F2',
                margin: 0,
                marginRight: '1rem',
              }}
            >
              Ready to grow your brand?
            </p>
            <motion.a
              href={getWhatsAppUrl('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost inline-flex items-center gap-3"
              style={{
                borderColor: 'rgba(248,246,242,0.4)',
                color: '#F8F6F2',
                fontSize: '0.875rem',
                backgroundColor: 'rgba(248,246,242,0.08)',
              }}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(248,246,242,0.12)', borderColor: 'rgba(248,246,242,0.8)' }}
              whileTap={{ scale: 0.98 }}
            >
              <RiWhatsappLine size={18} color="#25D366" aria-hidden="true" />
              <span>Let's Talk →</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── SECTION 2: Four-Column Grid ── */}
      <div
        style={{
          borderBottom: '1px solid rgba(248,246,242,0.07)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container-novexa" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '3rem',
            }}
            className="footer-grid"
          >
            {/* Column 1: NOVEXA Brand */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="/"
                aria-label="NOVEXA — Home"
                style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 900,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#F8F6F2',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  NOVEXA
                </span>
              </a>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  color: 'rgba(248,246,242,0.45)',
                  marginBottom: '1.5rem',
                  maxWidth: '240px',
                }}
              >
                Building Brands. Driving Growth. Creating Impact. A premium creative marketing studio.
              </p>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {socialIcons.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`NOVEXA ${s.label}`}
                    whileHover={{ y: -3, backgroundColor: 'rgba(248,246,242,0.15)' }}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(248,246,242,0.06)',
                      border: '1px solid rgba(248,246,242,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F8F6F2',
                      textDecoration: 'none',
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>

              {/* Available Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.875rem',
                  border: '1px solid rgba(248,246,242,0.12)',
                  borderRadius: '9999px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(248,246,242,0.35)',
                  }}
                >
                  Available for Projects
                </span>
              </div>
            </motion.div>

            {/* Column 2: Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.07 }}
            >
              <ColHead>Navigation</ColHead>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Services */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14 }}
            >
              <ColHead>Services</ColHead>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {footerServices.map((s) => (
                  <li key={s.href}>
                    <FooterLink href={s.href}>{s.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.21 }}
            >
              <ColHead>Contact</ColHead>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {footerContact.map((c) => (
                  <li key={c.href}>
                    <FooterLink href={c.href} external={c.external} accent={c.label === 'WhatsApp'}>
                      {c.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: Bottom Bar ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="container-novexa" style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'rgba(248,246,242,0.3)',
                letterSpacing: '0.04em',
                margin: 0,
              }}
            >
              © {year} NOVEXA
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'rgba(248,246,242,0.3)',
                letterSpacing: '0.04em',
                margin: 0,
              }}
            >
              Crafted by NOVEXA
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              onMouseEnter={() => setTopBtnHovered(true)}
              onMouseLeave={() => setTopBtnHovered(false)}
              whileHover={{ y: -2 }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: 0,
              }}
            >
              <span>Back To Top</span>
              <motion.div
                animate={{ rotate: topBtnHovered ? -15 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <RiArrowUpLine size={15} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
