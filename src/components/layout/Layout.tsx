/**
 * NOVEXA — Main Layout Wrapper
 * Wraps every page with Navigation + Footer.
 */
import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        className="flex-1"
        aria-label="Main content"
      >
        {/* Skip to main content link for keyboard users (hidden until focused) */}
        <a
          href="#main-content"
          style={{
            position: 'absolute',
            top: '-9999px',
            left: '-9999px',
            zIndex: 99999,
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--color-primary)',
            color: '#F8F6F2',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
          onFocus={(e) => {
            e.currentTarget.style.top = '1rem';
            e.currentTarget.style.left = '1rem';
          }}
          onBlur={(e) => {
            e.currentTarget.style.top = '-9999px';
            e.currentTarget.style.left = '-9999px';
          }}
        >
          Skip to main content
        </a>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
