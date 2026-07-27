/**
 * NOVEXA — Contact & FAQ Page
 * Complete Contact and FAQ page assembling all 7 dedicated touchpoint sections.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactHero } from '@/components/sections/ContactHero';
import { ContactFAQ } from '@/components/sections/ContactFAQ';
import { ContactDirectCards } from '@/components/sections/ContactDirectCards';
import { WhatsAppConversionCard } from '@/components/sections/WhatsAppConversionCard';
import { WhatHappensNext } from '@/components/sections/WhatHappensNext';
import { SocialMediaSection } from '@/components/sections/SocialMediaSection';
import { ContactCTABanner } from '@/components/sections/ContactCTABanner';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact & FAQ — NOVEXA | Direct WhatsApp & Studio Inquiries</title>
        <meta
          name="description"
          content="Connect with NOVEXA directly via WhatsApp or email to initiate your brand identity, website, video editing, or social media project."
        />
        <meta property="og:title" content="Contact & FAQ — NOVEXA Premium Creative Agency" />
        <meta
          property="og:description"
          content="Let's start your next creative project. Direct WhatsApp consultation, client FAQs, and studio touchpoints."
        />
        <link rel="canonical" href="https://novexa.agency/contact" />
      </Helmet>

      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Direct Contact Touchpoint Cards */}
      <ContactDirectCards />

      {/* 3. Primary WhatsApp Conversion Card */}
      <WhatsAppConversionCard />

      {/* 4. FAQ Accordion */}
      <ContactFAQ />

      {/* 5. What Happens Next Timeline */}
      <WhatHappensNext />

      {/* 6. Social Media Channels */}
      <SocialMediaSection />

      {/* 7. Final CTA Banner */}
      <ContactCTABanner />
    </>
  );
};

export default ContactPage;
