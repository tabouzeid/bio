import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../../../types';

/**
 * Reusable Section component with optional animations
 */
function Section({
  children,
  className = '',
  background = 'white',
  padding = 'default',
  animate = false,
  ariaLabel,
  ...props
}: SectionProps) {
  const bgClass = background === 'primary' ? 'bg-primary-light' : 'bg-white';
  const paddingClass =
    padding === 'large' ? 'py-section-y-lg' : padding === 'small' ? 'py-4' : 'py-section-y';

  const combinedClassName = `${bgClass} ${paddingClass} ${className}`.trim();

  if (animate) {
    return (
      <motion.section
        className={combinedClassName}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section className={combinedClassName} aria-label={ariaLabel} {...props}>
      {children}
    </section>
  );
}

export default Section;
