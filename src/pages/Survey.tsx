import React, { useState } from 'react';
import { MelloButton } from '@/components/MelloButton';
import { SurveyCard } from '@/components/SurveyCard';

const Survey: React.FC = () => {
  const [responses, setResponses] = useState<Record<string, number>>({});

  const questions = [
    "little interest or pleasure in doing things",
    "feeling down, depressed, irritable or hopeless", 
    "trouble falling or staying asleep, or sleeping too much",
    "feeling tired or having little energy"
  ];

  const handleRatingChange = (questionIndex: number) => (rating: number) => {
    setResponses(prev => ({
      ...prev,
      [questionIndex]: rating
    }));
  };

  const handleNext = () => {
    console.log('Survey responses:', responses);
    // Here you could navigate to a results page or submit the data
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

export default Survey;