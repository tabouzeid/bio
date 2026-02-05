/**
 * Design System
 *
 * Centralized design system exports for consistent styling and animations
 * across the application.
 *
 * Usage:
 * import { animations, tokens, Button, NavLink } from '@/design-system';
 */

// Animation presets
export * as animations from './animations/presets';

// Design tokens
export * as tokens from './constants/tokens';
export { cn } from './constants/tokens';

// Components
export { default as Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { default as NavLink } from './components/NavLink';
export type { NavLinkProps } from './components/NavLink';

export { default as Image } from './components/Image';
export type { ImageProps } from './components/Image';
