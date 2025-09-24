import React from 'react';
import { cn } from '@/lib/utils';

interface MelloInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const MelloInput = React.forwardRef<HTMLInputElement, MelloInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-text-secondary font-light text-sm lowercase">
            {label}:
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full rounded-full px-6 py-4 text-text-primary font-light',
            'bg-input-bg/60 backdrop-blur-sm border border-input-border',
            'focus:outline-none focus:ring-2 focus:ring-input-focus/50 focus:border-input-focus',
            'placeholder:text-text-muted transition-all duration-200',
            'hover:bg-input-bg/80',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

MelloInput.displayName = 'MelloInput';

export { MelloInput };