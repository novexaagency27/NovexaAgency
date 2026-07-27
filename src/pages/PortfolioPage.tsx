/**
 * NOVEXA — Portfolio Page
 * Complete Portfolio page assembling dedicated portfolio sections without duplicate project displays.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PortfolioHero } from '@/components/sections/PortfolioHero';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { PortfolioProcess } from '@/components/sections/PortfolioProcess';
import { PortfolioStatement } from '@/components/sections/PortfolioStatement';
import { PortfolioCTABanner } from '@/components/sections/PortfolioCTABanner';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies — NOVEXA | Premium Creative Agency</title>
        <meta
          name="description"
          content="Explore NOVEXA's portfolio of curated creative work, including brand identity design, high-performance websites, cinematic video editing, and social media strategy."
        />
        <meta property="og:title" content="Portfolio — NOVEXA Premium Creative Agency" />
        <meta
          property="og:description"
          content="Crafting visual legacy through intentional design. Selected case studies from NOVEXA."
        />
        <link rel="canonical" href="https://novexa.agency/portfolio" />
      </Helmet>

      {/* 1. Hero */}
      <PortfolioHero />

      {/* 2. Portfolio Grid & Dynamic Category Filter (Unique Project Cards) */}
      <PortfolioGrid />

      {/* 3. Creative Process */}
      <PortfolioProcess />

      {/* 4. Portfolio Quote Statement */}
      <PortfolioStatement />

      {/* 5. CTA Section */}
      <PortfolioCTABanner />
    </>
  );
};

export default PortfolioPage;
