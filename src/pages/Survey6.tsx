import React, { useState } from 'react';
import { MelloButton } from '@/components/MelloButton';
import { SurveyCard } from '@/components/SurveyCard';

const Survey6: React.FC = () => {
  const [responses, setResponses] = useState<Record<string, number>>({});

  const questions = [
    "Trouble falling or staying asleep?",
    "Feeling irritable or having angry outbursts?",
    "Having difficulty concentrating?",
    "Being \"super alert\" or watchful on guard?",
    "Feeling jumpy or easily startled?"
  ];

  const handleRatingChange = (questionIndex: number) => (rating: number) => {
    setResponses(prev => ({
      ...prev,
      [questionIndex]: rating
    }));
  };

  const handleFinish = () => {
    console.log('Survey 6 responses:', responses);
    alert('Survey completed! Thank you for your responses.');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient overlay background */}
      <div className="gradient-overlay" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen py-12 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-3xl lg:text-4xl font-light text-text-primary mb-4 leading-tight">
              last part of the questionnaire
            </h1>
            <p className="text-text-secondary font-light text-lg">
              1 = least / 5 = most
            </p>
          </div>
          
          {/* Survey Cards Grid - 5 cards in a special layout */}
          <div className="space-y-8 mb-16">
            {/* First row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SurveyCard
                question={questions[0]}
                onRatingChange={handleRatingChange(0)}
              />
              <SurveyCard
                question={questions[1]}
                onRatingChange={handleRatingChange(1)}
              />
            </div>
            
            {/* Second row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SurveyCard
                question={questions[2]}
                onRatingChange={handleRatingChange(2)}
              />
              <SurveyCard
                question={questions[3]}
                onRatingChange={handleRatingChange(3)}
              />
            </div>
            
            {/* Third row - 1 card centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-md lg:max-w-lg">
                <SurveyCard
                  question={questions[4]}
                  onRatingChange={handleRatingChange(4)}
                />
              </div>
            </div>
          </div>
          
          {/* Finish Button */}
          <div className="flex justify-end">
            <MelloButton
              onClick={handleFinish}
              size="lg"
              className="text-base px-10"
            >
              finish
            </MelloButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey6;