import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Updated base styles for better focus visibility on dark backgrounds
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary now includes the 'glossy-bar' class and the new 'shadow-glow' from configuration
    primary: "bg-brand-600 hover:bg-brand-500 text-white shadow-glow glossy-bar border border-brand-500/20",
    secondary: "bg-dark-800 text-white hover:bg-dark-700 shadow-lg border border-slate-700",
    outline: "border border-slate-700 text-slate-300 hover:border-brand-500 hover:text-brand-400 hover:bg-brand-950/30",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    // Tablet-First: Ensure minimum touch target of 44px height roughly
    md: "px-5 py-3 text-base min-h-[44px]", 
    lg: "px-8 py-4 text-lg font-semibold min-h-[56px]"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''}`} />}
      {children}
    </button>
  );
};