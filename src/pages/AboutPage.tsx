/**
 * NOVEXA — About Page
 * Complete About NOVEXA page assembling all 9 dedicated sections.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AboutHero } from '@/components/sections/AboutHero';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { OurPhilosophy } from '@/components/sections/OurPhilosophy';
import { MeetTheTeam } from '@/components/sections/MeetTheTeam';
import { WhatMakesUsDifferent } from '@/components/sections/WhatMakesUsDifferent';
import { OurValues } from '@/components/sections/OurValues';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { BehindTheScenes } from '@/components/sections/BehindTheScenes';
import { AboutCTABanner } from '@/components/sections/AboutCTABanner';

export const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us — NOVEXA | Premium Creative Agency & Leadership</title>
        <meta
          name="description"
          content="Learn about NOVEXA, our design philosophy, and the founders Hetvi Koradiya and Krish Patel behind our premium creative agency."
        />
        <meta property="og:title" content="About NOVEXA — Premium Creative Agency" />
        <meta
          property="og:description"
          content="Designing Brands That Create Lasting Impact. Discover our principles, leadership team, and creative approach."
        />
        <link rel="canonical" href="https://novexa.agency/about" />
      </Helmet>

      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. Our Philosophy */}
      <OurPhilosophy />

      {/* 4. Meet The Team */}
      <MeetTheTeam />

      {/* 5. What Makes Us Different */}
      <WhatMakesUsDifferent />

      {/* 6. Our Values */}
      <OurValues />

      {/* 7. How We Work */}
      <HowWeWork />

      {/* 8. Behind The Scenes */}
      <BehindTheScenes />

      {/* 9. CTA Section */}
      <AboutCTABanner />
    </>
  );
};

export default AboutPage;
