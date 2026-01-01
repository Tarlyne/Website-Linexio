import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface SmartImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
  fallbackSrc?: string;
  fallbackComponent?: React.ReactNode;
}

/**
 * SmartImage Komponente zur Anzeige von Bildern mit Loading-States und Fallbacks.
 */
export const SmartImage: React.FC<SmartImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc, 
  fallbackComponent,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    // Wenn das primäre Bild fehlschlägt, versuchen wir gar nicht erst weiter
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError || !currentSrc) {
    if (fallbackComponent) return <>{fallbackComponent}</>;
    if (fallbackSrc) return <img src={fallbackSrc} alt={alt} className={className} {...props} />;
    return (
      <div className={`flex items-center justify-center bg-dark-800 border border-slate-700 text-slate-500 ${className}`}>
        <ImageOff className="w-1/3 h-1/3 opacity-20" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer Overlay während des Ladens */}
      {isLoading && (
        <div className="absolute inset-0 z-10 shimmer" />
      )}
      
      <img 
        src={currentSrc} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props} 
      />
    </div>
  );
};