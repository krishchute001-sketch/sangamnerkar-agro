import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'maroon' | 'gold' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  external = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  // Base classes for consistent geometry, font weight and transition
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 select-none';

  // Size styling
  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  }[size];

  // Variant styling matching the warm brand aesthetic
  const variantClasses = {
    // Forest Green (Primary CTA)
    primary:
      'bg-[#2F6B3A] text-white hover:bg-[#24542D] shadow-sm hover:shadow-md focus:ring-[#2F6B3A]',
    
    // Warm Maroon Outline / Secondary
    secondary:
      'bg-[#FBF6EE] text-[#5A2A27] border border-[#5A2A27]/30 hover:border-[#5A2A27] hover:bg-[#F5ECE0] shadow-2xs focus:ring-[#5A2A27]',
    
    // Solid Deep Maroon
    maroon:
      'bg-[#5A2A27] text-[#FBF6EE] hover:bg-[#441F1D] shadow-sm hover:shadow-md focus:ring-[#5A2A27]',
    
    // Warm Heritage Gold
    gold:
      'bg-[#C9962B] text-[#2C221E] font-semibold hover:bg-[#B38421] shadow-sm focus:ring-[#C9962B]',
    
    // WhatsApp Green
    whatsapp:
      'bg-[#2F6B3A] text-white hover:bg-[#24542D] shadow-sm hover:shadow-md focus:ring-[#2F6B3A]',
    
    // Ghost / Text button
    ghost:
      'text-[#5A2A27] hover:bg-[#F5ECE0] focus:ring-[#5A2A27]',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
