/**
 * NOVEXA — Creative Process Section (Interactive Timeline & Workflow Engine)
 * High-performance, rock-solid React workflow timeline section.
 * Features instant tab switching, smooth Framer Motion transitions,
 * dynamic deliverables card, live metric pills, and zero scroll/blank glitches.
 */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  RiChatSmile2Line,
  RiSearchLine,
  RiLightbulbFlashLine,
  RiCodeSSlashLine,
  RiEqualizerLine,
  RiRocketLine,
  RiCheckLine,
  RiTimeLine,
  RiTargetLine,
  RiStackLine,
  RiArrowRightLine,
  RiArrowLeftLine,
} from 'react-icons/ri';
import { SectionHeading } from '@/components/ui/SectionHeading';

const PROCESS_STEPS = [
  {
    step: '01',
    shortTitle: 'Discovery',
    phase: 'Day 1 — Alignment',
    title: 'Discovery & Alignment',
    description:
      'We initiate every engagement with a deep-dive strategic audit to align on business goals, positioning, and success metrics.',
    deliverables: ['Strategy Alignment Deck', 'Scope & Milestone Schedule', 'Target Demographic Brief'],
    duration: 'Day 1–2',
    focus: 'Strategic Audit',
    output: '3 Core Artifacts',
    icon: <RiChatSmile2Line size={24} />,
  },
  {
    step: '02',
    shortTitle: 'Research',
    phase: 'Week 1 — Strategy',
    title: 'Research & Positioning',
    description:
      'Auditing competitors, defining audience psychographics, and crafting visual direction moodboards before designing a single pixel.',
    deliverables: ['Competitor Benchmark Audit', 'Creative Direction Deck', 'Typography & Palette System'],
    duration: 'Week 1',
    focus: 'Market & Audience',
    output: 'Design System & Deck',
    icon: <RiSearchLine size={24} />,
  },
  {
    step: '03',
    shortTitle: 'Concept',
    phase: 'Week 2 — Concept',
    title: 'Concept Development',
    description:
      'Transforming strategy into high-fidelity UI wireframes, bespoke brand identities, and interactive prototypes.',
    deliverables: ['UI/UX Component Wireframes', 'Interactive Figma Prototype', 'Brand Guidelines Manual'],
    duration: 'Week 2',
    focus: 'UI/UX & Prototypes',
    output: 'Figma Prototype',
    icon: <RiLightbulbFlashLine size={24} />,
  },
  {
    step: '04',
    shortTitle: 'Engineering',
    phase: 'Week 3 — Build',
    title: 'Custom Engineering',
    description:
      'Developing responsive, fast, and SEO-optimized web applications with smooth motion physics and 60 FPS performance.',
    deliverables: ['60 FPS Motion Engine', 'Responsive Web Application', 'SEO & Analytics Integration'],
    duration: 'Week 3–4',
    focus: 'Full-Stack Code',
    output: '60 FPS Web App',
    icon: <RiCodeSSlashLine size={24} />,
  },
  {
    step: '05',
    shortTitle: 'QA & Polish',
    phase: 'Week 4 — Polish',
    title: 'QA & Optimization',
    description:
      'Conducting cross-device testing, speed audits, asset optimization, and accessibility checks prior to deployment.',
    deliverables: ['Cross-Browser QA Audit', 'Performance Optimization Report', 'Lighthouse 95+ Score'],
    duration: 'Week 4',
    focus: 'Quality & Speed',
    output: '95+ Lighthouse Audit',
    icon: <RiEqualizerLine size={24} />,
  },
  {
    step: '06',
    shortTitle: 'Launch',
    phase: 'Launch Support',
    title: 'Launch & Growth',
    description:
      'Seamless production deployment, domain launch, team training, and continuous post-launch optimization.',
    deliverables: ['Production Deployment', 'Domain & DNS Setup', 'Post-Launch Support Plan'],
    duration: 'Launch Day +',
    focus: 'Deployment & Scale',
    output: 'Live Site & Handover',
    icon: <RiRocketLine size={24} />,
  },
];

export const ProcessPreview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = PROCESS_STEPS[activeStep];
  const progressPercent = Math.round(((activeStep + 1) / PROCESS_STEPS.length) * 100);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
  };

  return (
    <section
      id="main-process-timeline"
      aria-label="NOVEXA Creative Process Timeline"
      style={{
        backgroundColor: 'var(--color-surface)',
        position: 'relative',
        padding: '5rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Grid Pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(13,17,23,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,17,23,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-novexa"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionHeading
            label="How We Work"
            title="A Process Built for Results"
            subtitle="From initial discovery to production launch—every phase is transparent, deliberate, and built for scale."
            align="center"
          />
        </div>

        {/* ── Main Desktop 3-Column Interactive Layout ── */}
        <div className="process-desktop-wrapper">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 60px 1.15fr',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Active Step Details */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Phase Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 900,
                      color: 'var(--color-accent)',
                    }}
                  >
                    0{currentStep.step}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-subtle)',
                    }}
                  >
                    {currentStep.phase}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.1rem, 3vw, 2.75rem)',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                  }}
                >
                  {currentStep.title}
                </h3>

                {/* Step Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.5rem',
                    maxWidth: '520px',
                  }}
                >
                  {currentStep.description}
                </p>

                {/* Feature Pills */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                    }}
                  >
                    <RiTimeLine color="var(--color-accent)" size={16} />
                    <span>{currentStep.duration}</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                    }}
                  >
                    <RiTargetLine color="var(--color-accent)" size={16} />
                    <span>{currentStep.focus}</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                    }}
                  >
                    <RiStackLine color="#25D366" size={16} />
                    <span>{currentStep.output}</span>
                  </div>
                </div>
              </motion.div>

              {/* Step Navigation Controls (Numbers + Prev/Next) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                <button
                  onClick={prevStep}
                  aria-label="Previous Step"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--color-primary)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <RiArrowLeftLine size={18} />
                </button>

                {PROCESS_STEPS.map((s, idx) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      backgroundColor: idx === activeStep ? 'var(--color-primary)' : 'var(--color-bg)',
                      color: idx === activeStep ? '#F8F6F2' : 'var(--color-text-subtle)',
                      border: idx === activeStep ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                      borderRadius: '6px',
                      padding: '0.55rem 0.95rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    0{s.step}
                  </button>
                ))}

                <button
                  onClick={nextStep}
                  aria-label="Next Step"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--color-primary)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <RiArrowRightLine size={18} />
                </button>
              </div>
            </div>

            {/* Center Column: Interactive Spine Nodes */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                height: '420px',
              }}
            >
              {/* Vertical Spine Line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  backgroundColor: 'var(--color-border)',
                  borderRadius: '3px',
                  zIndex: 0,
                }}
              />

              {/* Glowing Fill Line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  width: '3px',
                  height: `${progressPercent}%`,
                  background: 'linear-gradient(180deg, var(--color-accent) 0%, #25D366 100%)',
                  borderRadius: '3px',
                  boxShadow: '0 0 12px rgba(37,211,102,0.6)',
                  transition: 'height 0.4s ease',
                  zIndex: 1,
                }}
              />

              {/* 6 Step Bullet Nodes */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                {PROCESS_STEPS.map((s, idx) => {
                  const isPassedOrCurrent = idx <= activeStep;
                  const isCurrent = idx === activeStep;

                  return (
                    <motion.div
                      key={s.step}
                      onClick={() => setActiveStep(idx)}
                      animate={{
                        scale: isCurrent ? 1.35 : 1,
                        backgroundColor: isCurrent
                          ? 'var(--color-primary)'
                          : isPassedOrCurrent
                          ? '#25D366'
                          : 'var(--color-surface)',
                        borderColor: isCurrent
                          ? 'var(--color-accent)'
                          : isPassedOrCurrent
                          ? '#25D366'
                          : 'var(--color-border)',
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '2px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: isCurrent
                          ? '0 0 15px rgba(248,246,242,0.5), 0 0 25px rgba(37,211,102,0.5)'
                          : 'none',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: isCurrent
                            ? 'var(--color-accent)'
                            : isPassedOrCurrent
                            ? '#0D1117'
                            : 'var(--color-text-subtle)',
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dark Glass Visual Panel Workspace */}
            <div>
              <div
                style={{
                  width: '100%',
                  minHeight: '460px',
                  backgroundColor: '#0D1117',
                  border: '1px solid rgba(248,246,242,0.16)',
                  borderRadius: '16px',
                  padding: '2.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 30px 75px rgba(0,0,0,0.5), 0 0 35px rgba(138,129,113,0.18)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Background Grid Texture */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(rgba(248,246,242,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(248,246,242,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none',
                  }}
                />

                <motion.div
                  key={currentStep.step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 2 }}
                >
                  {/* Top Status Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: '#25D366',
                          display: 'inline-block',
                          boxShadow: '0 0 12px #25D366',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.8125rem',
                          color: '#8A8171',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        PHASE {currentStep.step} // {currentStep.phase}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        color: 'rgba(248,246,242,0.3)',
                      }}
                    >
                      0{currentStep.step} / 06
                    </span>
                  </div>

                  {/* Title & Icon Header */}
                  <div style={{ marginTop: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <div style={{ color: 'var(--color-accent)' }}>{currentStep.icon}</div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.85rem',
                          fontWeight: 800,
                          color: '#F8F6F2',
                          letterSpacing: '-0.015em',
                          margin: 0,
                        }}
                      >
                        {currentStep.title}
                      </h4>
                    </div>

                    {/* Deliverables Checklist */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
                      {currentStep.deliverables.map((item, idx) => (
                        <div
                          key={`${currentStep.step}-${idx}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.85rem',
                            backgroundColor: 'rgba(248,246,242,0.05)',
                            border: '1px solid rgba(248,246,242,0.09)',
                            padding: '0.85rem 1.15rem',
                            borderRadius: '8px',
                          }}
                        >
                          <RiCheckLine size={19} color="#25D366" />
                          <span
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.925rem',
                              color: 'rgba(248,246,242,0.92)',
                              fontWeight: 500,
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Metrics & Progress Line */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(248,246,242,0.12)',
                        paddingTop: '0.85rem',
                        marginBottom: '0.65rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.75rem',
                          color: 'var(--color-accent)',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        ACTIVE WORKFLOW ENGINE
                      </span>
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.75rem',
                          color: '#25D366',
                          fontWeight: 700,
                        }}
                      >
                        {progressPercent}% COMPLETE
                      </span>
                    </div>

                    {/* Completion Bar */}
                    <div
                      style={{
                        width: '100%',
                        height: '5px',
                        backgroundColor: 'rgba(248,246,242,0.1)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${progressPercent}%`,
                          background: 'linear-gradient(90deg, #25D366 0%, var(--color-accent) 100%)',
                          boxShadow: '0 0 12px #25D366',
                          transition: 'width 0.4s ease',
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Horizontal Scrubber Ribbon ── */}
        <div
          style={{
            marginTop: '3.5rem',
            width: '100%',
            backgroundColor: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              PROCESS TIMELINE SCRUBBER
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {PROCESS_STEPS.map((s, idx) => (
              <button
                key={`scrubber-${s.step}`}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: idx === activeStep ? 'var(--color-primary)' : 'transparent',
                  color: idx === activeStep ? '#F8F6F2' : 'var(--color-text-subtle)',
                  border: idx === activeStep ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderRadius: '6px',
                  padding: '0.45rem 0.85rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.785rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                0{s.step} {s.shortTitle}
              </button>
            ))}
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(248,246,242,0.06)',
              padding: '0.4rem 0.85rem',
              borderRadius: '6px',
              border: '1px solid var(--color-border)',
            }}
          >
            PHASE 0{activeStep + 1} OF 06
          </div>
        </div>

        {/* ── Mobile View Fallback ── */}
        <div className="process-mobile-wrapper" style={{ marginTop: '2.5rem', display: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                style={{
                  backgroundColor: '#0D1117',
                  border: '1px solid rgba(248,246,242,0.16)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  color: '#F8F6F2',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Phase {step.step} — {step.phase}
                  </span>
                  <span style={{ color: 'var(--color-accent)' }}>{step.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#F8F6F2', margin: '0.25rem 0 0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(248,246,242,0.75)', marginBottom: '1rem' }}>
                  {step.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <RiCheckLine size={16} color="#25D366" />
                      <span style={{ fontSize: '0.85rem', color: 'rgba(248,246,242,0.9)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-desktop-wrapper { display: none !important; }
          .process-mobile-wrapper { display: block !important; }
        }
      `}</style>
    </section>
  );
};

export default ProcessPreview;
