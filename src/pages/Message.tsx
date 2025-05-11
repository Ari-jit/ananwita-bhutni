
import React from 'react';
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Large static roses on both sides */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 transform z-10">
        <span className="text-8xl md:text-9xl">🌹</span>
      </div>
      
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 transform z-10">
        <span className="text-8xl md:text-9xl">🌹</span>
      </div>
      
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-xl w-full z-20 relative">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6">To My Dearest Ananwita</h1>
          
          {/* Updated girlfriend's image */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-pink-300">
            <img 
              src="/lovable-uploads/0f1be0b4-0e6f-41c1-a88c-fb76737f73d6.png" 
              alt="Ananwita" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-4 text-gray-700">
          <p>You are incredibly cute... why? I don't know.</p>
          <p>But whenever I talk to you, it's like I'm in a parallel universe.</p>
          <p>I'm truly sorry for the words that may have hurt you.</p>
          <p>You are not just my best friend, you are someone very special to my heart.</p>
          <p className="font-bold">Stay beautiful, stay magical, stay you.</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-pink-500 hover:text-pink-700 underline"
          >
            Back to beginning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
