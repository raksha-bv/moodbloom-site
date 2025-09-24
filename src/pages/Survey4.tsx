import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MelloButton } from '@/components/MelloButton';
import { SurveyCard } from '@/components/SurveyCard';

const Survey4: React.FC = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState<Record<string, number>>({});

  const questions = [
    "Having physical reactions (e.g., heart pounding, trouble breathing, or sweating) when something reminded you of a stressful experience from the past?",
    "Avoid thinking about or talking about a stressful experience from the past or avoid having feelings related to it?",
    "Avoid activities or situations because they remind you of a stressful experience from the past?",
    "Trouble remembering important parts of a stressful experience from the past?"
  ];

  const handleRatingChange = (questionIndex: number) => (rating: number) => {
    setResponses(prev => ({
      ...prev,
      [questionIndex]: rating
    }));
  };

  const handleNext = () => {
    console.log('Survey 4 responses:', responses);
    navigate('/survey5');
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
              Over the last 2 weeks, how often have you been bothered by the following problems?
            </h1>
            <p className="text-text-secondary font-light text-lg">
              1 = least / 5 = most
            </p>
          </div>
          
          {/* Survey Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {questions.map((question, index) => (
              <SurveyCard
                key={index}
                question={question}
                onRatingChange={handleRatingChange(index)}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <div className="flex justify-end">
            <MelloButton
              onClick={handleNext}
              size="lg"
              className="text-base px-10"
            >
              next
            </MelloButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey4;