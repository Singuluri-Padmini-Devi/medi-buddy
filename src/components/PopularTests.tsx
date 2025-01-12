import React from 'react';
import { Clock } from 'lucide-react';
import type { LabTest } from '../types';

interface PopularTestsProps {
  config?: {
    tests?: LabTest[];
    categories?: string[];
  };
}

export const PopularTests: React.FC<PopularTestsProps> = ({ config }) => {
  if (!config?.tests?.length) return null;

  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Book Popular Lab Tests</h2>
        <button className="text-blue-600 text-sm">View More</button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {config.categories?.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
              index === 0 ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4 mt-4">
        {config.tests.map((test) => (
          <div key={test.id} className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-medium">{test.name}</h3>
            
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>Reports in {test.reportTime}</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="flex items-center">
                  <span className="text-sm line-through text-gray-400">₹{test.price.original}</span>
                  <span className="ml-2 text-green-600 text-sm">{test.discount}% OFF</span>
                </div>
                <div className="font-medium">₹{test.price.discounted}</div>
              </div>
              
              <button className="px-6 py-1.5 bg-blue-600 text-white rounded-full text-sm">
                Add
              </button>
            </div>

            <div className="flex items-center mt-2 text-xs text-gray-500">
              {test.available.home && <span className="mr-3">🏠 Home</span>}
              {test.available.lab && <span>🏥 Lab</span>}
              {test.cashless && (
                <span className="ml-auto text-green-600">✓ Cashless</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}