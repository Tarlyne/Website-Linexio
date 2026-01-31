import React, { useState } from 'react';
import { Mail, Eye } from 'lucide-react';

interface ObfuscatedEmailProps {
  variant?: 'link' | 'button' | 'text';
  className?: string;
}

/**
 * ObfuscatedEmail (Kernanweisung V2)
 * Schützt die E-Mail-Adresse linexio@gmx.de vor Scraper-Bots.
 * Die Adresse wird erst bei Interaktion im Browser zusammengesetzt.
 */
export const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({ 
  variant = 'link', 
  className = "" 
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  // Die E-Mail "linexio@gmx.de" in Base64: bGluZXhpb0BnbXguZGU=
  const getDecodedEmail = () => atob('bGluZXhpb0BnbXguZGU=');

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = getDecodedEmail();
    
    if (variant === 'text' && !isRevealed) {
      setIsRevealed(true);
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  if (variant === 'text') {
    return (
      <button 
        onClick={handleAction}
        className={`inline-flex items-center gap-2 group transition-colors ${isRevealed ? 'text-white cursor-default' : 'text-brand-400 hover:text-brand-300'} ${className}`}
        title={isRevealed ? undefined : "E-Mail Adresse anzeigen"}
      >
        {!isRevealed && <Eye className="w-4 h-4" />}
        <span className="font-medium">
          {isRevealed ? getDecodedEmail() : "E-Mail anzeigen"}
        </span>
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button 
        onClick={handleAction}
        className={className}
        aria-label="Support per E-Mail kontaktieren"
      >
        <Mail className="w-5 h-5 mr-2" />
        E-Mail schreiben
      </button>
    );
  }

  return (
    <button 
      onClick={handleAction}
      className={`hover:text-brand-400 transition-colors text-left cursor-pointer ${className}`}
      aria-label="Support per E-Mail kontaktieren"
    >
      Hilfe & Kontakt
    </button>
  );
};