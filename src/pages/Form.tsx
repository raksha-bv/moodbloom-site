import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MelloButton } from '@/components/MelloButton';
import { MelloInput } from '@/components/MelloInput';

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could store the form data in context or localStorage
    console.log('Form data:', formData);
    navigate('/survey');
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient overlay background */}
      <div className="gradient-overlay" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="w-full max-w-md mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-light text-text-primary">
              mello
            </h1>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="rounded-3xl p-8 border border-card-border bg-card-bg/60 backdrop-blur-sm">
              <div className="space-y-6">
                <MelloInput
                  label="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  required
                />
                
                <MelloInput
                  label="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                />
                
                <div className="pt-4">
                  <MelloButton
                    type="submit"
                    size="lg"
                    className="w-full text-base"
                  >
                    take survey
                  </MelloButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;