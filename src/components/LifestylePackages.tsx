import React from 'react';

interface LifestylePackagesProps {
  config?: {
    categories?: Array<{
      id: string;
      name: string;
      icon: string;
    }>;
  };
}

export const LifestylePackages: React.FC<LifestylePackagesProps> = ({ config }) => {
  if (!config?.categories?.length) return null;

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Lifestyle Health Check-up Packages</h2>
      <div className="grid grid-cols-3 gap-4">
        {config.categories.map((category) => (
          <button key={category.id} className="flex flex-col items-center">
            <div className="w-16 h-16 mb-2">
              <img
                src={category.icon}
                alt={category.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-sm text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}