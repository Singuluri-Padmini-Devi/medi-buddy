import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { ActiveBooking } from '../types';

interface ActiveBookingsProps {
  config?: {
    bookings?: ActiveBooking[];
  };
}

export const ActiveBookings: React.FC<ActiveBookingsProps> = ({ config }) => {
  if (!config?.bookings?.length) return null;

  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your Active Bookings</h2>
        <button className="text-blue-600 text-sm">View All</button>
      </div>
      
      {config.bookings.map((booking) => (
        <div key={booking.id} className="bg-white rounded-lg p-4 mb-2 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{booking.patientName}</h3>
              <div className="flex items-center mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm text-gray-600">{booking.status}</span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="mt-3 flex justify-between text-sm text-gray-600">
            <div>
              <div>{booking.date}</div>
              <div>{booking.time}</div>
            </div>
            <div className="text-right">
              <div>{booking.type}</div>
              <div>{booking.testCount} Tests</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}