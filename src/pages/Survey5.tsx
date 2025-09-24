import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MelloButton } from '@/components/MelloButton';
import { SurveyCard } from '@/components/SurveyCard';
import { useDispatch, useSelector } from 'react-redux';
import { addValues } from '@/redux/arraySlice';
import { RootState } from '@/redux/store';

const Survey5: React.FC = () => {
  const navigate = useNavigate();
  const structure = useSelector((state : RootState) => state.structure);
  const [responses, setResponses] = useState<number[]>([]);
  const dispatch = useDispatch();


  const questions = [
    "Loss of interest in things that you used to enjoy?",
    "Feeling distant or cut off from other people?",
    "Feeling emotionally numb or being unable to have loving feelings for those close to you?",
    "Feeling as if your future will somehow be cut short?"
  ];

  const handleRatingChange = (questionIndex: number) => (rating: number) => {
    setResponses((prev) => {
      const newResponses = [...prev];
      newResponses[questionIndex] = rating;
      return newResponses;
    });
  };

  const handleNext = () => {
    console.log('Survey 5 responses:', responses);
    dispatch(addValues(responses));
    navigate('/survey6');
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

export default Survey5;