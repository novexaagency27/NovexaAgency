/**
 * NOVEXA — Navigation Component
 * Sticky, glassmorphic navigation bar with dynamic dark/light text color adaptation.
 * Left aligned pure serif wordmark 'NOVEXA', centered navigation links, right WhatsApp CTA.
 * Direct link to '/legal' (NO dropdowns as specified in Legal Center rules).
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiWhatsappLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { useNavScroll } from '@/hooks/useNavScroll';
import { BRAND, getWhatsAppUrl } from '@/utils/constants';
import {
  menuOverlay,
  menuItem,
  staggerContainerSlow,
  navReveal,
  logoReveal,
} from '@/utils/animations';

const navLinks = [
  { label: 'About',   href: '/about' },
  { label: 'Services',href: '/services' },
  { label: 'Work',    href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Legal',   href: '/legal' },
  { label: 'Contact', href: '/contact' },
];

export const Navigation: React.FC = () => {
  const { isScrolled } = useNavScroll(40);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const updatePath = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', updatePath);
    const handleLinkClick = () => setTimeout(updatePath, 50);
    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', updatePath);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const isLinkActive = (href: string) => {
    if (href === currentPath) return true;
    if (href === '/portfolio' && (currentPath.startsWith('/project/') || currentPath === '/work')) return true;
    if (href === '/contact' && currentPath === '/faq') return true;
    return false;
  };

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
    if (!isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  };

  // Text color based on scroll context
  const textColor = isScrolled ? 'var(--color-primary)' : '#F8F6F2';
  const activeColor = 'var(--color-accent)';

  return (
    <>
      {/* ─── Main Navigation Bar ─── */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navReveal}
        role="banner"
        className="fixed top-0 left-0 right-0 z-[1000]"
        style={{
          transition: 'background-color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94), backdrop-filter 400ms ease, box-shadow 400ms ease',
          backgroundColor: isScrolled ? 'rgba(248, 246, 242, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          boxShadow: isScrolled ? '0 1px 0 rgba(13, 17, 23, 0.08)' : 'none',
        }}
      >
        <div className="container-novexa">
          <nav
            className="flex items-center justify-between h-20"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Left-Aligned Pure Serif Wordmark Logo (No Icons) */}
            <motion.a
              href="/"
              variants={logoReveal}
              className="flex items-center group"
              aria-label="NOVEXA — Home"
              id="nav-logo"
              style={{ textDecoration: 'none' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  color: textColor,
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  transition: 'color 300ms ease',
                }}
              >
                NOVEXA
              </span>
            </motion.a>

            {/* Centered Desktop Nav Links */}
            <ul
              className="hidden lg:flex items-center gap-10 list-none"
              role="menubar"
              aria-label="Site sections"
              style={{ margin: 0, padding: 0 }}
            >
              {navLinks.map((link, i) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.href} role="none">
                    <motion.a
                      href={link.href}
                      role="menuitem"
                      id={`nav-link-${link.label.toLowerCase()}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: active ? activeColor : textColor,
                        textDecoration: 'none',
                        position: 'relative',
                        transition: 'color 300ms ease',
                        paddingBottom: '4px',
                      }}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: activeColor,
                            borderRadius: '9999px',
                          }}
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        />
                      )}
                    </motion.a>
                  </li>
                );
              })}
            </ul>

            {/* Right-Aligned Desktop WhatsApp CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href={getWhatsAppUrl('consultation')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm inline-flex items-center gap-2"
                id="nav-whatsapp-cta"
                aria-label="Start a project with NOVEXA on WhatsApp"
                style={{
                  backgroundColor: isScrolled ? 'var(--color-primary)' : 'rgba(248, 246, 242, 0.1)',
                  color: '#F8F6F2',
                  border: isScrolled ? '1px solid var(--color-primary)' : '1px solid rgba(248, 246, 242, 0.4)',
                  transition: 'all 300ms ease',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ y: -1, backgroundColor: isScrolled ? 'var(--color-secondary)' : 'rgba(248, 246, 242, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                <RiWhatsappLine size={15} color="#25D366" aria-hidden="true" />
                <span>Let's Talk</span>
              </motion.a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobile}
              className="lg:hidden p-2 rounded-md transition-colors"
              aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileOpen}
              id="mobile-hamburger-btn"
              style={{ color: textColor, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {isMobileOpen ? <RiCloseLine size={26} /> : <RiMenuLine size={26} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* ─── Mobile Drawer Overlay ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuOverlay}
            className="fixed inset-0 z-[999] lg:hidden flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--color-primary)',
              paddingTop: '6rem',
              paddingBottom: '3rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Overlay"
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
                backgroundSize: '60px 60px',
                pointerEvents: 'none',
              }}
            />

            <motion.ul
              variants={staggerContainerSlow}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 list-none"
              style={{ margin: 0, padding: 0, position: 'relative', zIndex: 2 }}
            >
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <motion.li key={link.href} variants={menuItem}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: active ? 'var(--color-accent)' : '#F8F6F2',
                        textDecoration: 'none',
                        letterSpacing: '-0.02em',
                        display: 'inline-block',
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <a
                href={getWhatsAppUrl('consultation')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}
              >
                <RiWhatsappLine size={18} aria-hidden="true" />
                <span>Start WhatsApp Project</span>
              </a>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(248,246,242,0.4)', textAlign: 'center', margin: 0 }}>
                {BRAND.email} • Surat, India
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
