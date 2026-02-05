/**
 * Design System - Design Tokens
 *
 * Centralized design tokens for consistent styling across the application.
 * These constants should be used instead of inline Tailwind classes where possible.
 */

/**
 * Color Tokens
 * Semantic color names mapped to Tailwind classes
 */
export const colors = {
  // Text colors
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-800',
    tertiary: 'text-gray-600',
    muted: 'text-gray-500',
    inverse: 'text-white',
  },

  // Background colors
  bg: {
    primary: 'bg-primary-light',
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
  },

  // Interactive states
  interactive: {
    default: 'text-gray-800',
    hover: 'hover:text-gray-600',
    active: 'active:text-gray-900',
    focus: 'focus-visible:outline-gray-900',
  },
} as const;

/**
 * Spacing Tokens
 * Common spacing patterns used across components
 */
export const spacing = {
  // Margin bottom combinations
  mb: {
    small: 'mb-4',
    medium: 'mb-6',
    large: 'mb-8',
    responsive: {
      small: 'mb-4 md:mb-6',
      medium: 'mb-6 md:mb-8',
      large: 'mb-8 md:mb-12',
    },
  },

  // Padding
  p: {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  },

  // Section vertical spacing
  section: {
    y: 'py-section-y',
    yLarge: 'py-section-y-lg',
  },

  // Gap (flexbox/grid)
  gap: {
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8',
    responsive: {
      small: 'gap-4 sm:gap-6',
      medium: 'gap-6 sm:gap-8',
    },
  },
} as const;

/**
 * Typography Tokens
 * Font size and styling combinations
 */
export const typography = {
  // Headings
  hero: 'text-hero font-cursive',
  display: 'text-display font-bold',
  sectionTitle: 'text-section-title font-medium',

  // Body text
  bodyLarge: 'text-body-lg',
  body: 'text-base',
  small: 'text-sm',

  // Font weights
  weight: {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  },

  // Text alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
} as const;

/**
 * Transition Tokens
 * Standard transition classes
 */
export const transitions = {
  colors: 'transition-colors duration-200',
  all: 'transition-all duration-200',
  transform: 'transition-transform duration-200',
  opacity: 'transition-opacity duration-200',
} as const;

/**
 * Shadow Tokens
 */
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
} as const;

/**
 * Border Radius Tokens
 */
export const radius = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
} as const;

/**
 * Layout Tokens
 */
export const layout = {
  // Container max widths
  container: {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },

  // Center content
  center: 'mx-auto',

  // Flexbox utilities
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    column: 'flex flex-col',
    row: 'flex flex-row',
  },
} as const;

/**
 * Focus/Accessibility Tokens
 */
export const focus = {
  default: 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900',
  ring: 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900',
} as const;

/**
 * Helper function to combine class names
 */
export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
