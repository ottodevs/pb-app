'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface OnboardingStepProps {
  title: string;
  description: string;
}

const OnboardingStep = ({ title, description }: OnboardingStepProps) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 text-white">
    <h2 className="text-3xl font-bold mb-4 animate-fadeIn">{title}</h2>
    <p className="text-lg animate-fadeIn animation-delay-300">{description}</p>
  </div>
);

const OnboardingWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bgPosition, setBgPosition] = useState(0);
  const steps = [
    {
      title: "Welcome to PQF",
      description: "Predictive Quadratic Funding revolutionizes project financing in hackathons by combining quadratic funding with real-time prediction markets."
    },
    {
      title: "Contribute and Predict",
      description: "Contribute to projects using a quadratic funding model and bet on their success through a dynamic prediction market."
    },
    {
      title: "Earn Rewards",
      description: "Participate in a gamified experience, earning rewards for accurate predictions and impactful contributions."
    }
  ];

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundPosition: `${bgPosition}px ${bgPosition}px`,
          transition: 'background-position 0.5s linear'
        }}
      ></div>
      <div className="flex-grow relative z-10">
        <OnboardingStep {...steps[currentStep]} />
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
          <button
            title='Previous Step'
            type='button'
            onClick={prevStep} className="p-3 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
            <ChevronLeft size={24} />
          </button>
          <button
            title='Next Step'
            type='button'
            onClick={nextStep} className="p-3 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="p-6 z-10">
        <button
          type='button'
          title='Get Started'
          className="w-full py-3 px-6 bg-white text-blue-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingWizard;