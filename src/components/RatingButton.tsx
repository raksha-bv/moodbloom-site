import React from 'react';
import { cn } from '@/lib/utils';

interface RatingButtonProps {
  value: number;
  isSelected: boolean;
  onClick: () => void;
}

const RatingButton: React.FC<RatingButtonProps> = ({ value, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-12 h-12 rounded-full border-2 transition-all duration-200',
        'flex items-center justify-center text-sm font-light',
        'hover:scale-110 active:scale-95',
        {
          'border-rating-selected bg-rating-selected text-white': isSelected,
          'border-rating-border bg-rating-bg text-text-primary hover:border-rating-selected/50': !isSelected,
        }
      )}
    >
      {value}
    </button>
  );
};

export { RatingButton };