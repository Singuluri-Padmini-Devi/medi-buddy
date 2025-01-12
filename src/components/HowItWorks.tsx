import React from 'react';

interface HowItWorksProps {
  config?: {
    steps?: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ config }) => {
  if (!config?.steps?.length) return null;

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">How it Works?</h2>
      <div className="space-y-6">
        {config.steps.map((step) => (
          <div key={step.id} className="flex items-start">
            <div className="w-12 h-12 mr-4 flex-shrink-0">
              <img
                src={step.icon}
                alt={step.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-medium mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}