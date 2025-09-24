import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MelloButton } from '@/components/MelloButton';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient overlay background */}
      <div className="gradient-overlay" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-12 flex-wrap lg:flex-nowrap">
            {/* Main text */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-text-primary">
                please take a moment to tell{' '}
                <span className="text-gradient-start font-normal">us</span>{' '}
                how you're feeling, so we{' '}
                <span className="text-gradient-mid font-normal">can</span>{' '}
                assist you effectively
              </h1>
            </div>
            
            {/* Get started button */}
            <div className="flex-shrink-0">
              <MelloButton
                size="lg"
                onClick={() => navigate('/form')}
                className="text-base px-12 py-4"
              >
                get started
              </MelloButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;