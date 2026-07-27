/**
 * NOVEXA — Contact FAQ Accordion Section
 * Animated accordion answering 10 core client questions based on official agency data.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';

const faqs = [
  {
    question: 'What services does NOVEXA provide?',
    answer:
      'NOVEXA offers six core creative services: Brand Identity, Website Design, Website Development, Video Editing, Social Media Management, and Graphic Design. Every service is customized to your specific commercial goals.',
  },
  {
    question: 'How does the project process work?',
    answer:
      'We follow a disciplined 6-stage methodology: Discovery & Alignment → Research & Strategy → Concept Development → Design & Execution → Review & Refinement → Final Delivery & Launch. You remain informed at every milestone.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timeline depends on scope and complexity. Brand identity and website projects typically range from 2 to 6 weeks, while ongoing social media management operates on a monthly retainer basis. We establish clear milestone schedules during discovery.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Our structured review process includes dedicated feedback cycles at key project milestones (Concept, Execution, Refinement) to ensure complete alignment before final delivery.',
  },
  {
    question: 'Can NOVEXA work with international clients?',
    answer:
      'Yes. NOVEXA partners with ambitious brands globally. We manage international client communication seamlessly via digital channels, video calls, and asynchronous project updates.',
  },
  {
    question: 'Do you build custom websites?',
    answer:
      'Yes. We build high-performance, bespoke websites tailored to your brand identity. We write clean, accessible, and fast code using modern technologies like React, Next.js, Vite, and GSAP/Framer Motion.',
  },
  {
    question: 'Do you redesign existing brands?',
    answer:
      'Absolutely. We assist established businesses in modernizing their visual identities, refreshing website architecture, and upgrading digital collateral to better reflect their current market position.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Getting started is effortless. Click any WhatsApp button on this page to start a conversation with our leadership team, or email us at Novexaagency27@gmail.com to schedule an initial discovery call.',
  },
  {
    question: 'How will we communicate during the project?',
    answer:
      'We maintain open, transparent communication throughout your engagement via scheduled check-ins, milestone review presentations, and direct messaging channels.',
  },
  {
    question: 'Why should I choose NOVEXA?',
    answer:
      'NOVEXA combines international agency-level design polish with strategic business thinking. We limit our project intake to ensure every client receives uncompromised creative focus and immaculate attention to detail.',
  },
];

const FAQItem: React.FC<{ faq: (typeof faqs)[number]; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      style={{
        backgroundColor: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'border-color 300ms',
        borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        id={`faq-accordion-toggle-${index}`}
        aria-controls={`faq-accordion-content-${index}`}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.75rem 2rem',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--color-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          {faq.question}
        </span>
        <div
          aria-hidden="true"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-surface)',
            color: isOpen ? 'var(--color-bg)' : 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 300ms',
          }}
        >
          {isOpen ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-accordion-content-${index}`}
            role="region"
            aria-labelledby={`faq-accordion-toggle-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 2rem 1.75rem 2rem', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.925rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-muted)',
                  marginTop: '1rem',
                }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ContactFAQ: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      id="contact-faq-section"
      aria-label="Frequently Asked Questions"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="section-padding"
    >
      <div className="container-novexa">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Clear Answers"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about partnering with NOVEXA."
            align="center"
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
