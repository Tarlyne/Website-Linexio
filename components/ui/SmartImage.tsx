import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface SmartImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
  fallbackSrc?: string;
  fallbackComponent?: React.ReactNode;
}

/**
 * SmartImage löst das "GitHub Pages Pfad-Problem".
 * Auf GitHub Pages liegen Projekte oft unter tarlyne.github.io/PROJEKTNAME/
 * Ein normaler Pfad wie "/screenshots/bild.png" leitet zur Root (tarlyne.github.io) um -> 404.
 * Die Lösung ist die Verwendung von relativen Pfaden ohne führenden Slash.
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
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    if (!src || hasError) return;

    const nextAttempt = attempt + 1;
    setAttempt(nextAttempt);

    if (nextAttempt === 1) {
      // Versuch 1: Entferne den führenden Slash, um den Pfad relativ zu machen.
      // Aus "/screenshots/bild.webp" wird "screenshots/bild.webp".
      // Auf GitHub Pages (z.B. .../linexio-marketing/) sucht der Browser dann im richtigen Unterordner.
      const relativePath = src.startsWith('/') ? src.slice(1) : src;
      setCurrentSrc(relativePath);
    } else {
      // Alles fehlgeschlagen
      setHasError(true);
      setIsLoading(false);
    }
  };

  if (hasError || !currentSrc) {
    if (fallbackComponent) return <>{fallbackComponent}</>;
    if (fallbackSrc) return <img src={fallbackSrc} alt={alt} className={className} {...props} />;
    return (
      <div className={`flex items-center justify-center bg-dark-800 border border-slate-700 text-slate-500 ${className}`}>
        <ImageOff className="w-1/3 h-1/3" />
      </div>
    );
  }

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