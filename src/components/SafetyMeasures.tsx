import React from 'react';

interface SafetyMeasuresProps {
  config?: {
    measures?: Array<{
      id: string;
      title: string;
      icon: string;
    }>;
  };
}

export const SafetyMeasures: React.FC<SafetyMeasuresProps> = ({ config }) => {
  if (!config?.measures?.length) return null;

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">100% Safe & Secure Lab Tests</h2>
      <div className="grid grid-cols-2 gap-4">
        {config.measures.map((measure) => (
          <div key={measure.id} className="bg-blue-50 rounded-lg p-4">
            <div className="w-10 h-10 mb-3">
              <img
                src={measure.icon}
                alt={measure.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-blue-900">{measure.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}