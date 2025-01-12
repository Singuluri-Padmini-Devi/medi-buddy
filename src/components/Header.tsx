import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
            <span className="ml-2 text-lg font-semibold">Billekahalli</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
        
        <div className="py-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Find lab tests, diagnostics centres"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}