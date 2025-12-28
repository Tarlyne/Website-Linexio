import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

// Fix: Omit 'src' from inherited props to explicitly define it as string
interface SmartImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
  fallbackSrc?: string;
  fallbackComponent?: React.ReactNode;
}

export const SmartImage: React.FC<SmartImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc, 
  fallbackComponent,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset state if src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setAttempt(0);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    if (!src) return;

    // Strategy Pattern for Path Resolution
    // Attempt 0: Original (e.g., "./public/logo.png")
    // Attempt 1: Remove "./" -> "public/logo.png"
    // Attempt 2: Add leading slash -> "/public/logo.png"
    // Attempt 3: Remove "public/" -> "logo.png"
    // Attempt 4: Root public -> "/logo.png"
    
    const nextAttempt = attempt + 1;
    setAttempt(nextAttempt);

    if (nextAttempt === 1) {
       // Try removing ./ if present
       setCurrentSrc(src.replace(/^\.\//, ''));
    } 
    else if (nextAttempt === 2) {
       // Try absolute path
       if (!src.startsWith('/')) setCurrentSrc(`/${src}`);
       else setCurrentSrc(src); // No change, trigger next
    }
    else if (nextAttempt === 3) {
      // Try stripping 'public' folder
      const cleanPath = src.replace(/^\.\//, '').replace('public/', '').replace('/public/', '');
      setCurrentSrc(cleanPath);
    }
    else if (nextAttempt === 4) {
       // Try absolute root without public
       const cleanPath = src.replace(/^\.\//, '').replace('public/', '').replace('/public/', '');
       setCurrentSrc(`/${cleanPath}`);
    }
    else {
      // Give up
      setHasError(true);
      setIsLoading(false);
    }
  };

  // 1. Wenn ein Fehler endgültig festgestellt wurde -> Fallback zeigen
  if (hasError) {
    if (fallbackComponent) {
      return <>{fallbackComponent}</>;
    }
    if (fallbackSrc) {
      return <img src={fallbackSrc} alt={alt} className={className} {...props} />;
    }
    // Final fallback: A placeholder box
    return (
      <div className={`flex items-center justify-center bg-dark-800 border border-slate-700 text-slate-500 ${className}`}>
        <ImageOff className="w-1/3 h-1/3" />
      </div>
    );
  }

  // 2. Das Bild wird gerendert, aber ist unsichtbar (opacity-0), solange es lädt oder Fehler wirft.
  // Das verhindert das hässliche "Broken Image" Icon des Browsers während der Retry-Phase.
  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      onLoad={handleLoad}
      onError={handleError}
      {...props} 
    />
  );
};