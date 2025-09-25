// Survey6.tsx (updated)
import React, { useState } from "react";
import { MelloButton } from "@/components/MelloButton";
import { SurveyCard } from "@/components/SurveyCard";
import { useDispatch, useSelector } from "react-redux";
import { addValues } from "@/redux/arraySlice";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";

const Survey6: React.FC = () => {
  const navigate = useNavigate();
  const structure = useSelector((state: RootState) => state.structure);
  const [responses, setResponses] = useState<number[]>([]);
  const dispatch = useDispatch();

  const questions = [
    "Trouble falling or staying asleep?",
    "Feeling irritable or having angry outbursts?",
    "Having difficulty concentrating?",
    'Being "super alert" or watchful on guard?',
    "Feeling jumpy or easily startled?",
  ];

  const handleRatingChange = (questionIndex: number) => (rating: number) => {
    setResponses((prev) => {
      const newResponses = [...prev];
      newResponses[questionIndex] = rating;
      return newResponses;
    });
  };

  const handleFinish = () => {
    // Ensure all 5 questions are answered
    if (responses.length < 5 || responses.some((r) => r === undefined)) {
      alert("Please answer all questions before proceeding.");
      return;
    }

    dispatch(addValues(responses));
    console.log("Final Structure:", [...structure, ...responses]);
    navigate("/chatbot"); // Navigate to chatbot instead of results
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="gradient-overlay" />

      <div className="relative z-10 min-h-screen py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-3xl lg:text-4xl font-light text-text-primary mb-4 leading-tight">
              Last part of the questionnaire
            </h1>
            <p className="text-text-secondary font-light text-lg">
              1 = least / 5 = most
            </p>
          </div>

          <div className="space-y-8 mb-16">
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

            <div className="flex justify-center">
              <div className="w-full max-w-md lg:max-w-lg">
                <SurveyCard
                  question={questions[4]}
                  onRatingChange={handleRatingChange(4)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <MelloButton
              onClick={handleFinish}
              size="lg"
              className="text-base px-10"
              disabled={responses.length < 5}
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
