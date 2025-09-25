import React, { useState } from "react";
import { Send } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"; // Import from hooks file
import { submitSurveyData } from "@/redux/apiSlice";

export default function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dispatch = useAppDispatch(); // Now this will work with TypeScript
  const structure = useAppSelector((state) => state.structure);
  const { loading, result, error } = useAppSelector((state) => state.api);

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (userMessage.trim()) {
      console.log("User message:", userMessage);
      console.log("Structured data:", structure);

      // Dispatch the async thunk with both text and structured data
      try {
        await dispatch(
          submitSurveyData({
            text: userMessage,
            structured: structure,
          })
        );

        setHasSubmitted(true);
      } catch (error) {
        console.error("Error submitting survey data:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <div className="bg-blue-50 px-6 py-4 border-b border-gray-200 rounded-t-lg">
          <h2 className="text-xl font-semibold text-gray-800">Chat Helper</h2>
          <p className="text-sm text-gray-600 mt-1">
            How are you feeling today?
          </p>
        </div>

        {/* Chat Area */}
        <div className="p-6 min-h-48">
          {/* Bot Initial Message */}
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium">🤖</span>
            </div>
            <div className="bg-gray-100 rounded-lg px-4 py-3 max-w-xs">
              <p className="text-gray-800 text-sm">
                Hi there! I'd love to hear about whatever you're feeling these
                days. Take your time and share what's on your mind.
              </p>
            </div>
          </div>

          {/* Show loading state */}
          {loading && (
            <div className="flex items-start space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">🤖</span>
              </div>
              <div className="bg-gray-100 rounded-lg px-4 py-3 max-w-xs">
                <p className="text-gray-800 text-sm">
                  Processing your response...
                </p>
              </div>
            </div>
          )}

          {/* Show prediction result */}
          {result && (
            <div className="flex items-start space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">🤖</span>
              </div>
              <div className="bg-gray-100 rounded-lg px-4 py-3 max-w-xs">
                <p className="text-gray-800 text-sm">
                  Thank you for sharing! Based on your response, the analysis
                  shows:
                  <br />
                  <strong>Prediction:</strong> {result.prediction}
                  <br />
                  <strong>Confidence:</strong>{" "}
                  {(result.probability * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          )}

          {/* Show error message */}
          {error && (
            <div className="flex items-start space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">⚠️</span>
              </div>
              <div className="bg-red-100 rounded-lg px-4 py-3 max-w-xs">
                <p className="text-red-800 text-sm">
                  Sorry, there was an error processing your request: {error}
                </p>
              </div>
            </div>
          )}

          {/* Show thank you message after submission (fallback) */}
          {hasSubmitted && !loading && !result && !error && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">🤖</span>
              </div>
              <div className="bg-gray-100 rounded-lg px-4 py-3 max-w-xs">
                <p className="text-gray-800 text-sm">
                  Thank you for sharing! Your message has been received.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        {!hasSubmitted && (
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!userMessage.trim() || loading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
