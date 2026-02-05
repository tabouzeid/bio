import React from 'react';
import { ContainerProps } from '../../../types';

/**
 * Reusable Container component for consistent max-width and padding
 */
function Container({ children, className = '', maxWidth = 'default', ...props }: ContainerProps) {
  const maxWidthClass =
    maxWidth === 'small'
      ? 'max-w-2xl'
      : maxWidth === 'medium'
        ? 'max-w-4xl'
        : maxWidth === 'large'
          ? 'max-w-6xl'
          : 'max-w-7xl';

  const combinedClassName = `${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}

export default Container;
