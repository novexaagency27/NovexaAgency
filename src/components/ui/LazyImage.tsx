/**
 * NOVEXA — Lazy Image Component
 * Performance-optimized image with elegant fade-in.
 */
import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  objectPosition?: string;
  borderRadius?: string;
  loading?: 'lazy' | 'eager';
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  aspectRatio,
  objectFit = 'cover',
  objectPosition = 'center',
  borderRadius,
  loading = 'lazy',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px 0px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio,
        borderRadius,
        backgroundColor: 'var(--color-surface)',
        ...style,
      }}
    >
      {/* Skeleton shimmer */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--color-surface) 25%, var(--color-border) 50%, var(--color-surface) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}

      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            objectPosition,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            display: 'block',
            userSelect: 'none',
            WebkitUserDrag: 'none' as React.CSSProperties['userSelect'],
          } as React.CSSProperties}
        />
      )}
    </div>
  );
};

export default LazyImage;
