/**
 * NOVEXA — Process Page
 * Complete Our Process page assembling all 8 workflow sections.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProcessHero } from '@/components/sections/ProcessHero';
import { ProcessIntro } from '@/components/sections/ProcessIntro';
import { MainProcessTimeline } from '@/components/sections/MainProcessTimeline';
import { VisualProcessStrip } from '@/components/sections/VisualProcessStrip';
import { WorkingPrinciples } from '@/components/sections/WorkingPrinciples';
import { ProjectCollaboration } from '@/components/sections/ProjectCollaboration';
import { QualityStandards } from '@/components/sections/QualityStandards';
import { ProcessCTABanner } from '@/components/sections/ProcessCTABanner';

export const ProcessPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Process — NOVEXA | Workflow, Methodology & Client Journey</title>
        <meta
          name="description"
          content="Explore NOVEXA's transparent 6-step creative workflow from discovery and strategy to design, refinement, and launch."
        />
        <meta property="og:title" content="Our Process — NOVEXA Premium Creative Agency" />
        <meta
          property="og:description"
          content="Exceptional outcomes stem from a disciplined process. Discover our organized, transparent client methodology."
        />
        <link rel="canonical" href="https://novexa.agency/process" />
      </Helmet>

      {/* 1. Hero */}
      <ProcessHero />

      {/* 2. Process Intro */}
      <ProcessIntro />

      {/* 3. Main Timeline */}
      <MainProcessTimeline />

      {/* 4. Visual Process Strip */}
      <VisualProcessStrip />

      {/* 5. Working Principles */}
      <WorkingPrinciples />

      {/* 6. Client Collaboration */}
      <ProjectCollaboration />

      {/* 7. Quality Standards */}
      <QualityStandards />

      {/* 8. Process CTA Banner */}
      <ProcessCTABanner />
    </>
  );
};

export default ProcessPage;
