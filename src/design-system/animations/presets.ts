/**
 * Design System - Animation Presets
 *
 * Centralized Framer Motion animation configurations to ensure consistency
 * across the application and reduce code duplication.
 */

import { Variants } from 'framer-motion';

/**
 * Standard animation durations (in seconds)
 */
export const durations = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.6,
  slower: 0.8,
} as const;

/**
 * Standard animation delays (in seconds)
 */
export const delays = {
  none: 0,
  short: 0.2,
  medium: 0.4,
  long: 0.6,
} as const;

/**
 * Page entry fade animation
 * Used when a full page/route loads
 */
export const pageEntry = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: durations.normal },
};

/**
 * Fade up animation (from below)
 * Used for hero headings and important content
 */
export const fadeUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: durations.slow, delay: delays.short },
};

/**
 * Fade in from bottom with viewport trigger
 * Used for content that appears as user scrolls
 */
export const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: durations.slow },
};

/**
 * Scale animation for images
 * Used for hero images and visual content
 */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: durations.slow, delay: delays.medium },
};

/**
 * Hover scale animations
 * Used for interactive elements
 */
export const hoverScale = {
  small: { scale: 1.02 },
  medium: { scale: 1.05 },
  large: { scale: 1.1 },
};

/**
 * Tap scale animation
 * Provides tactile feedback on click/tap
 */
export const tapScale = {
  scale: 0.95,
};

/**
 * Stagger children animation variants
 * Used for lists and grid items
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/**
 * Navigation link animation
 * Combines scale hover and tap effects
 */
export const navLink = {
  whileHover: hoverScale.medium,
  whileTap: tapScale,
};

/**
 * Card/project hover animation
 */
export const cardHover = {
  whileHover: hoverScale.small,
};

/**
 * Icon button animation
 */
export const iconButton = {
  whileHover: hoverScale.large,
  whileTap: tapScale,
};
