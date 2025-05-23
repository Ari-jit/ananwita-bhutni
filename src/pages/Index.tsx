
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const navigate = useNavigate();
  
  const handleHeartClick = () => {
    navigate('/message');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-4">To My Dearest Ananwita</h1>
        <p className="text-gray-600 text-lg">Click on the heart to see my message</p>
      </div>
      
      <button
        onClick={handleHeartClick}
        className={cn(
          "relative flex items-center justify-center",
          "w-32 h-32 md:w-40 md:h-40 rounded-full bg-white",
          "hover:bg-pink-50 transition-all duration-300",
          "animate-pulse shadow-[0_0_20px_rgba(244,114,182,0.7)]",
          "hover:shadow-[0_0_30px_rgba(244,114,182,0.9)]",
        )}
        aria-label="Open message"
      >
        <Heart 
          size={80} 
          className="text-pink-500 fill-pink-400 animate-[pulse_1.5s_ease-in-out_infinite]" 
        />
      </button>
    </div>
  );
};

export default Index;
