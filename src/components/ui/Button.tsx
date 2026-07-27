/**
 * NOVEXA — Button Component
 * Premium, accessible button system with WhatsApp CTA support.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightLine, RiWhatsappLine } from 'react-icons/ri';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/utils/constants';
import { buttonHover, arrowHover } from '@/utils/animations';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  onClick?: () => void;
  href?: string;
  whatsapp?: keyof typeof WHATSAPP_MESSAGES;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  id?: string;
  'aria-label'?: string;
}

const sizeMap: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

const variantMap: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  text: 'btn-text',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  icon,
  iconPosition = 'right',
  showArrow = false,
  onClick,
  href,
  whatsapp,
  disabled = false,
  className = '',
  type = 'button',
  id,
  'aria-label': ariaLabel,
}) => {
  const classes = `btn ${variantMap[variant]} ${sizeMap[size]} ${className}`.trim();

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {icon && iconPosition === 'left' && (
        <span aria-hidden="true">{icon}</span>
      )}
      <span>{label}</span>
      {icon && iconPosition === 'right' && !showArrow && (
        <span aria-hidden="true">{icon}</span>
      )}
      {showArrow && (
        <motion.span aria-hidden="true" variants={arrowHover}>
          <RiArrowRightLine size={16} />
        </motion.span>
      )}
    </motion.span>
  );

  // WhatsApp CTA
  if (whatsapp) {
    return (
      <motion.a
        href={getWhatsAppUrl(whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        id={id}
        aria-label={ariaLabel || `${label} — Opens WhatsApp`}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <span className="inline-flex items-center gap-2">
          <RiWhatsappLine size={16} aria-hidden="true" />
          <span>{label}</span>
          {showArrow && (
            <motion.span aria-hidden="true" variants={arrowHover}>
              <RiArrowRightLine size={14} />
            </motion.span>
          )}
        </span>
      </motion.a>
    );
  }

  // External / internal href
  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
        id={id}
        aria-label={ariaLabel || label}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        {content}
      </motion.a>
    );
  }

  // Standard button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      id={id}
      aria-label={ariaLabel || label}
      aria-disabled={disabled}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {content}
    </motion.button>
  );
};

export default Button;
