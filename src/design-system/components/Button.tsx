import React from 'react';
import { motion } from 'framer-motion';
import { tapScale } from '../animations/presets';
import { cn } from '../constants/tokens';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  asLink = false,
  href,
  onClick,
  disabled = false,
  type = 'button',
}) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:opacity-50 disabled:pointer-events-none';

    // Variant styles
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary-dark rounded-lg',
      secondary:
        'bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-50 rounded-lg',
      text: 'text-gray-800 hover:text-gray-600 no-underline',
      icon: 'rounded-full hover:bg-gray-200/50',
    };

    // Size styles
    const sizeStyles = {
      sm: variant === 'icon' ? 'w-10 h-10' : 'px-4 py-2 text-sm',
      md: variant === 'icon' ? 'w-12 h-12' : 'px-6 py-3 text-base',
      lg: variant === 'icon' ? 'w-14 h-14' : 'px-8 py-4 text-lg',
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

  // If rendering as a link
  if (asLink && href) {
    return (
      <motion.a href={href} className={combinedClassName} whileTap={tapScale}>
        {children}
      </motion.a>
    );
  }

  // Default button
  return (
    <motion.button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      whileTap={tapScale}
    >
      {children}
    </motion.button>
  );
};

export default Button;
