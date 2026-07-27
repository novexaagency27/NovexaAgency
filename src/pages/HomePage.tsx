/**
 * NOVEXA — Home Page
 * The complete home page assembled from all section components.
 * Convinces visitors within 5 seconds that NOVEXA is worth hiring.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { FeaturedCaseStudySpotlight } from '@/components/sections/FeaturedCaseStudySpotlight';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { RealClientResults } from '@/components/sections/RealClientResults';
import { WhyNovexa } from '@/components/sections/WhyNovexa';
import { ProcessPreview } from '@/components/sections/ProcessPreview';
import { CreativeCanvas } from '@/components/sections/CreativeCanvas';

import { HomeCTABanner } from '@/components/sections/HomeCTABanner';

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>NOVEXA — Premium Creative Agency | Brand Identity, Websites & Digital Growth</title>
        <meta
          name="description"
          content="NOVEXA is a premium creative agency crafting brand identities, websites, and digital experiences that drive real business growth. Based in India, working globally."
        />
        <meta property="og:title" content="NOVEXA — Premium Creative Agency" />
        <meta
          property="og:description"
          content="We build brands that people remember. Premium design, websites, social media, and creative content."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://novexa.agency" />
      </Helmet>

      {/* 1. Hero — Above the fold */}
      <HeroSection />

      {/* 2. Trust Strip — Immediate credibility below hero */}
      <TrustStrip />

      {/* 3. Featured Case Study Spotlight (Before Services) */}
      <FeaturedCaseStudySpotlight />

      {/* 4. Services Preview */}
      <ServicesPreview />

      {/* 5. About Preview */}
      <AboutPreview />

      {/* 6. Portfolio Preview */}
      <PortfolioPreview />

      {/* 7. Real Client Results */}
      <RealClientResults />

      {/* 8. Why NOVEXA */}
      <WhyNovexa />

      {/* 9. Creative Process */}
      <ProcessPreview />

      {/* 10. Creative Canvas — Scroll-driven portfolio canvas */}
      <CreativeCanvas />

      {/* 11. CTA Banner */}
      <HomeCTABanner />
    </>
  );
};

export default HomePage;
