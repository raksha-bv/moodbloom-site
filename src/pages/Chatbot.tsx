import { useState } from "react";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Chatbot() {
    
  const [userMessage, setUserMessage] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (userMessage.trim()) {
      console.log("User message:", userMessage);
      setHasSubmitted(true);
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

          {/* Show thank you message after submission */}
          {hasSubmitted && (
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
            <div className="flex space-x-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
                placeholder="Type your message here..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSubmit}
                disabled={!userMessage.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
