/**
 * NOVEXA — useNavScroll Hook
 * Handles navigation transparency on scroll.
 */
import { useState, useEffect } from 'react';

export function useNavScroll(threshold = 60) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled };
}
