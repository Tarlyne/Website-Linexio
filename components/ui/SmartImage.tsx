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
 */
export const SmartImage: React.FC<SmartImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc, 
  fallbackComponent,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>();
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialer Pfad-Check
  useEffect(() => {
    if (!src) return;

    // Wir bereinigen den Pfad: kein führender Slash für maximale Kompatibilität mit relativem Routing
    let finalPath = src;
    if (src.startsWith('/')) {
      finalPath = src.slice(1);
    }

    // Wenn wir auf GitHub Pages sind, müssen wir den Projektnamen einfügen
    if (window.location.hostname.includes('github.io')) {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      // Wenn der erste Teil nicht der Start von src ist, ist es wahrscheinlich der Projektname
      if (pathParts.length > 0 && !finalPath.startsWith(pathParts[0])) {
        finalPath = `${pathParts[0]}/${finalPath}`;
      }
    }

    // Sicherstellen, dass der Pfad absolut zur Domain ist, aber inkl. Subfolder
    setCurrentSrc('/' + finalPath.replace(/^\//, ''));
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
      // Zweiter Versuch: Komplett relativer Pfad (ohne führenden Slash)
      // Das funktioniert oft am besten, wenn der HashRouter aktiv ist
      setCurrentSrc(src.replace(/^\//, ''));
    } else if (nextAttempt === 2) {
      // Dritter Versuch: Falls es ein absoluter Pfad im Root ist
      setCurrentSrc(src.startsWith('/') ? src : '/' + src);
    } else {
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