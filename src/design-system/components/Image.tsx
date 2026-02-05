import React, { useState } from 'react';
import { cn } from '../constants/tokens';

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  aspectRatio?: string;
  width?: string | number;
  height?: string | number;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  eager = false,
  aspectRatio,
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const containerClassName = cn(
    'relative overflow-hidden',
    !isLoaded && 'bg-gray-200 animate-pulse',
    className
  );

  const imageClassName = cn(
    'transition-opacity duration-300',
    isLoaded ? 'opacity-100' : 'opacity-0'
  );

  // Aspect ratio container
  const aspectRatioStyle = aspectRatio ? { paddingBottom: aspectRatio } : undefined;

  return (
    <div className={containerClassName} style={aspectRatioStyle}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default Image;
