import React from 'react';
import { cn } from '@/lib/utils';

interface MelloButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
}

const MelloButton = React.forwardRef<HTMLButtonElement, MelloButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full font-light transition-all duration-200',
          'border border-input-border bg-input-bg/50 backdrop-blur-sm',
          'hover:scale-105 hover:shadow-lg hover:shadow-button-primary/20',
          'focus:outline-none focus:ring-2 focus:ring-input-focus focus:ring-offset-2',
          'active:scale-95',
          // Variant styles
          {
            'text-text-primary hover:bg-button-primary/10 hover:border-button-primary/30': variant === 'primary',
            'text-text-secondary': variant === 'secondary',
          },
          // Size styles  
          {
            'px-6 py-3 text-sm': size === 'default',
            'px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MelloButton.displayName = 'MelloButton';

export { MelloButton };