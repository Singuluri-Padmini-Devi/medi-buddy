import React from 'react';
import { Heart, TestTube2, Activity, Building2, ScanLine, ShoppingBag } from 'lucide-react';

const actions = [
  { icon: Heart, label: 'Annual Health Check' },
  { icon: TestTube2, label: 'Book Lab Tests' },
  { icon: Activity, label: 'Popular Health Checks' },
  { icon: Building2, label: 'Find Labs / Hospitals' },
  { icon: ScanLine, label: 'X-Rays, Scans & MRIs' },
  { icon: ShoppingBag, label: 'Previous Orders' },
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 py-6">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50"
        >
          <action.icon className="h-6 w-6 text-blue-600 mb-2" />
          <span className="text-xs text-center text-gray-700">{action.label}</span>
        </button>
      ))}
    </div>
  );
}