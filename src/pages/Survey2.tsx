import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MelloButton } from '@/components/MelloButton';
import { PH8SurveyCard } from '@/components/PH8-SurveyCard';
import { useDispatch, useSelector } from 'react-redux';
import { addValues } from '@/redux/arraySlice';
import { RootState } from '@/redux/store';

const Survey2: React.FC = () => {
  const navigate = useNavigate();
  const structure = useSelector((state : RootState) => state.structure);
  const [responses, setResponses] = useState<number[]>([]);
  const dispatch = useDispatch();
  


  const questions = [
    "Poor appetite or overeating",
    "Feeling bad about yourself – or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as school work, reading or watching television",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual"
  ];

  const handleRatingChange = (questionIndex: number) => (rating: number) => {
    setResponses((prev) => {
      const newResponses = [...prev];
      newResponses[questionIndex] = rating;
      return newResponses;
    });
  };

  const handleNext = () => {
    console.log('Survey 2 responses:', responses);
    dispatch(addValues(responses))
    navigate('/survey3');
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
              <PH8SurveyCard
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

export default Survey2;