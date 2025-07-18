import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, location, rating, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Quote className="h-8 w-8 text-primary opacity-50" />
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        "{text}"
      </p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;