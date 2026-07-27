/**
 * NOVEXA — Visual Process Strip Section
 * Horizontal visual workflow bar summarizing the core stages.
 */
import React from 'react';
import { motion } from 'framer-motion';
import {
  RiCompass2Line,
  RiSearchEyeLine,
  RiPaletteLine,
  RiEqualizerLine,
  RiRocketLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp, staggerContainerFast } from '@/utils/animations';

const quickStages = [
  { step: '01', icon: <RiCompass2Line size={20} />, label: 'Discover' },
  { step: '02', icon: <RiSearchEyeLine size={20} />, label: 'Research' },
  { step: '03', icon: <RiPaletteLine size={20} />, label: 'Create' },
  { step: '04', icon: <RiEqualizerLine size={20} />, label: 'Refine' },
  { step: '05', icon: <RiRocketLine size={20} />, label: 'Deliver' },
];

export const VisualProcessStrip: React.FC = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="visual-process-strip"
      aria-label="Process Summary Strip"
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-bg)',
        borderTop: '1px solid rgba(248,246,242,0.1)',
        borderBottom: '1px solid rgba(248,246,242,0.1)',
      }}
      className="py-12"
    >
      <div className="container-novexa">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerFast}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
          className="visual-strip-flex"
        >
          {quickStages.map((st, i) => (
            <React.Fragment key={st.label}>
              <motion.div
                variants={fadeUp}
                custom={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(248,246,242,0.08)',
                    border: '1px solid rgba(248,246,242,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                  }}
                >
                  {st.icon}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(248,246,242,0.4)',
                      display: 'block',
                    }}
                  >
                    Stage {st.step}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-bg)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {st.label}
                  </span>
                </div>
              </motion.div>

              {i < quickStages.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    color: 'rgba(248,246,242,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  className="strip-arrow"
                >
                  <RiArrowRightLine size={18} />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .strip-arrow {
            display: none !important;
          }
          .visual-strip-flex {
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VisualProcessStrip;
