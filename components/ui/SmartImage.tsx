import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

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

    const nextAttempt = attempt + 1;
    setAttempt(nextAttempt);

    // Strategie zur Pfad-Korrektur auf GitHub Pages
    if (nextAttempt === 1) {
       // Versuch 1: Führenden Slash entfernen/hinzufügen
       setCurrentSrc(src.startsWith('/') ? src.slice(1) : '/' + src);
    } 
    else if (nextAttempt === 2) {
       // Versuch 2: Projektnamen aus URL extrahieren (für GitHub Pages Subfolder)
       const pathParts = window.location.pathname.split('/').filter(Boolean);
       if (pathParts.length > 0) {
         const projectName = pathParts[0];
         // Wenn wir nicht schon im Projektpfad sind, fügen wir ihn vorne an
         const cleanSrc = src.replace(/^\//, '');
         if (!window.location.pathname.includes(cleanSrc)) {
            setCurrentSrc(`/${projectName}/${cleanSrc}`);
         } else {
            setAttempt(3); // Weiter zum nächsten
         }
       } else {
         setAttempt(3);
       }
    }
    else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  if (hasError) {
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