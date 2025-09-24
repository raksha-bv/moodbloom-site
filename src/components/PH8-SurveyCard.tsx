import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { RatingButton } from './RatingButton';

interface SurveyCardProps {
  question: string;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

const PH8SurveyCard: React.FC<SurveyCardProps> = ({ 
  question, 
  onRatingChange,
  className 
}) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    onRatingChange?.(rating);
  };

  return (
    <div className={cn(
      'rounded-3xl p-8 border border-card-border bg-card-bg/60 backdrop-blur-sm',
      'transition-all duration-300 hover:shadow-lg hover:shadow-button-primary/10',
      className
    )}>
      <div className="space-y-6">
        <p className="text-text-primary font-light text-base leading-relaxed">
          {question}
        </p>
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4].map((rating) => (
            <RatingButton
              key={rating}
              value={rating}
              isSelected={selectedRating === rating}
              onClick={() => handleRatingClick(rating)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { PH8SurveyCard };