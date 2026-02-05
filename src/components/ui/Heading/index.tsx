import React from 'react';
import { motion } from 'framer-motion';
import { HeadingProps } from '../../../types';

/**
 * Reusable Heading component with consistent typography and optional animations
 */
function Heading({
  level = 1,
  children,
  className = '',
  variant = 'default',
  animate = false,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const variantClass =
    variant === 'hero'
      ? 'text-hero font-cursive'
      : variant === 'display'
        ? 'text-display font-cursive'
        : variant === 'section'
          ? 'text-section-title font-medium'
          : '';

  const combinedClassName = `${variantClass} ${className}`.trim();

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tag className={combinedClassName} {...props}>
          {children}
        </Tag>
      </motion.div>
    );
  }

  return (
    <Tag className={combinedClassName} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
