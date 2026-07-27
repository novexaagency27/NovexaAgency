/**
 * NOVEXA — Services Page
 * Complete Services page assembling all 8 dedicated capability sections.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServicesHero } from '@/components/sections/ServicesHero';
import { ServicesIntro } from '@/components/sections/ServicesIntro';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { IndividualServiceBlocks } from '@/components/sections/IndividualServiceBlocks';
import { ServicesApproach } from '@/components/sections/ServicesApproach';
import { ServicesComparison } from '@/components/sections/ServicesComparison';
import { ServicesFeaturedWork } from '@/components/sections/ServicesFeaturedWork';
import { ServicesCTABanner } from '@/components/sections/ServicesCTABanner';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services — NOVEXA | Brand Identity, Web Design, Video & Social Media</title>
        <meta
          name="description"
          content="Explore NOVEXA's specialized creative services: Brand Identity, Website Design, Website Development, Video Editing, Social Media Management, and Graphic Design."
        />
        <meta property="og:title" content="Services — NOVEXA Premium Creative Agency" />
        <meta
          property="og:description"
          content="We build brands that leave a lasting impression. Strategic design, bespoke web development, and digital experiences."
        />
        <link rel="canonical" href="https://novexa.agency/services" />
      </Helmet>

      {/* 1. Hero */}
      <ServicesHero />

      {/* 2. Services Intro */}
      <ServicesIntro />

      {/* 3. Services Grid */}
      <ServicesGrid />

      {/* 4. Individual Service Blocks */}
      <IndividualServiceBlocks />

      {/* 5. Our Approach */}
      <ServicesApproach />

      {/* 6. Why Our Services / Comparison */}
      <ServicesComparison />

      {/* 7. Featured Work */}
      <ServicesFeaturedWork />

      {/* 8. CTA Section */}
      <ServicesCTABanner />
    </>
  );
};

export default ServicesPage;
