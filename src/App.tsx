/**
 * NOVEXA — Application Root & Client Router
 * Code-split page architecture with React.lazy, Suspense, and luxury route transition loader.
 */
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Preloader } from '@/components/ui/Preloader';
import { HomePage } from '@/pages/HomePage';
import { PORTFOLIO } from '@/utils/constants';

// Code-split route pages for bundle optimization
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage })));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const ProcessPage = lazy(() => import('@/pages/ProcessPage').then((m) => ({ default: m.ProcessPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const LegalPage = lazy(() => import('@/pages/LegalPage').then((m) => ({ default: m.LegalPage })));

const knownRoutes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/work',
  '/process',
  '/legal',
  '/contact',
  '/faq',
  '/terms-and-conditions',
  '/privacy-policy',
  '/refund-policy',
  '/cookie-policy',
  '/disclaimer',
];

// Page loading fallback
const PageFallback: React.FC = () => (
  <div style={{ minHeight: '0px', backgroundColor: 'transparent' }} />
);

// ── Luxury Route Transition Overlay Loader ───────────────────────────────────
const RouteTransitionLoader: React.FC<{ isTransitioning: boolean }> = ({ isTransitioning }) => {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          id="route-transition-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#0D1117',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            pointerEvents: 'all',
          }}
          aria-hidden="true"
        >
          {/* Ambient drifting background glow */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(31,61,58,0.5) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Centered NOVEXA Wordmark */}
          <motion.span
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.04, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
              fontWeight: 900,
              letterSpacing: '0.22em',
              color: '#F8F6F2',
              textTransform: 'uppercase',
              lineHeight: 1,
              position: 'relative',
              zIndex: 2,
            }}
          >
            NOVEXA
          </motion.span>

          {/* Progress Bar */}
          <div
            style={{
              width: '180px',
              height: '3px',
              backgroundColor: 'rgba(248,246,242,0.12)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-accent)',
                transformOrigin: 'left',
                boxShadow: '0 0 16px rgba(138,129,113,0.8)',
              }}
            />
          </div>

          {/* Loading Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#F8F6F2',
              margin: 0,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Loading Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [displayPath, setDisplayPath] = useState<string>(currentPath);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname;
      triggerTransition(newPath);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//') && !href.includes('#')) {
        e.preventDefault();
        if (href !== currentPath) {
          window.history.pushState({}, '', href);
          triggerTransition(href);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [currentPath]);

  const triggerTransition = (newPath: string) => {
    setCurrentPath(newPath);
    setIsTransitioning(true);

    setTimeout(() => {
      setDisplayPath(newPath);
      window.scrollTo(0, 0);
    }, 500);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 950);
  };

  const renderPage = () => {
    if (displayPath.startsWith('/project/')) {
      const projectId = displayPath.replace('/project/', '');
      const exists = PORTFOLIO.some((p) => p.id === projectId);
      if (exists) {
        return <ProjectDetailPage projectId={projectId} />;
      }
      return <NotFoundPage />;
    }

    switch (displayPath) {
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/portfolio':
      case '/work':
        return <PortfolioPage />;
      case '/process':
        return <ProcessPage />;
      case '/contact':
      case '/faq':
        return <ContactPage />;
      case '/legal':
      case '/terms-and-conditions':
      case '/privacy-policy':
      case '/refund-policy':
      case '/cookie-policy':
      case '/disclaimer':
        return <LegalPage />;
      case '/':
        return <HomePage />;
      default:
        if (!knownRoutes.includes(displayPath)) {
          return <NotFoundPage />;
        }
        return <HomePage />;
    }
  };

  return (
    <>
      <Helmet>
        <title>NOVEXA — Premium Creative Agency | Digital Growth Partner</title>
        <meta name="description" content="Building Brands. Driving Growth. Creating Impact. NOVEXA is a premium creative agency." />
      </Helmet>

      {/* Initial Session Preloader Screen */}
      <Preloader />

      {/* Global Route Change Transition Loader */}
      <RouteTransitionLoader isTransitioning={isTransitioning} />

      <Layout>
        <Suspense fallback={<PageFallback />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={displayPath}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
