import React from 'react';

/**
 * Central Asset Store
 * Stores vector graphics as React components.
 * 
 * Implementiert das "Linexio Double-L" Logo.
 * - Äußeres L: Akzentfarbe (Standard: Cyan #0891b2)
 * - Inneres L: currentColor (erbt Textfarbe)
 */

export const Logo = ({ accentColor = '#0891b2', ...props }: React.SVGProps<SVGSVGElement> & { accentColor?: string }) => {

  return React.createElement('svg', {
    viewBox: "50 30 65 75",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  },
    React.createElement('g', { strokeLinecap: "round", strokeLinejoin: "round" },
      // Äußeres L (Akzent-Farbe)
      React.createElement('path', {
        stroke: accentColor,
        strokeWidth: "2.5",
        d: "m 54.971722,35.248072 0.127248,64.388173 54.84447,0.2545 L 94.928019,85.129819 H 69.859897 l 0.127249,-35.120823 z"
      }),
      React.createElement('path', {
        stroke: accentColor,
        strokeWidth: "2.5",
        d: "M 94.800771,99.890745 54.844473,59.934448"
      }),
      // Inneres L (currentColor - erbt von parent text color)
      React.createElement('path', {
        stroke: "currentColor",
        strokeWidth: "2.2",
        d: "m 66.492648,34.678024 0.101334,53.606363 43.675148,0.21188 -11.95746,-12.28921 H 78.348781 l 0.101335,-29.239829 z"
      }),
      React.createElement('path', {
        stroke: "currentColor",
        strokeWidth: "2.2",
        d: "M 98.716752,88.748345 66.902899,55.105832"
      })
    )
  );
};