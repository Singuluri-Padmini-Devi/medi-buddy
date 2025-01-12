import React from 'react';

interface PromoBannerProps {
  config?: any;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ config }) => {
  return (
    <div className="px-4 py-2">
      <div className="bg-pink-50 rounded-lg p-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Baby On Board?</h3>
          <p className="text-sm text-gray-600">Get Pregnancy Care Tests!</p>
          <p className="text-xs text-gray-500">Diabetes, ANC, Ferritin, HIV/Elisa & Thyroid</p>
          <button className="mt-2 text-blue-600 text-sm font-medium">BOOK NOW →</button>
        </div>
        <div className="w-24 h-24 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518935761255-7f1c76f9e5bc?auto=format&fit=crop&w=200&h=200"
            alt="Pregnant woman"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}