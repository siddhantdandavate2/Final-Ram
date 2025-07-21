import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, location, rating, text }) => {
  return (
    <div className="bg-[#F5EFEB] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:scale-105 duration-500">
      <div className="flex items-center mb-4">
        <Quote className="h-8 w-8 text-[#567C8D] opacity-50" />
      </div>
      
      <p className="text-[#567C8D] mb-4 leading-relaxed">
        "{text}"
      </p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-[#567C8D]">{name}</h4>
          <p className="text-sm text-[#567C8D]">{location}</p>
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