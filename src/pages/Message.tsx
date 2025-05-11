
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Rose component for the falling animation
const Rose = ({ style }: { style: React.CSSProperties }) => (
  <div 
    className="absolute pointer-events-none z-10" 
    style={style}
  >
    <span className="text-4xl">🌹</span>
  </div>
);

const Message = () => {
  const [roses, setRoses] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  
  useEffect(() => {
    // Create falling roses
    const createRose = () => {
      const id = Date.now();
      const leftPosition = Math.random() * 100;
      const animationDuration = 5 + Math.random() * 5;
      const delay = Math.random() * 3;
      
      const newRose = {
        id,
        style: {
          left: `${leftPosition}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${delay}s`,
        },
      };
      
      setRoses(prevRoses => [...prevRoses, newRose]);
      
      // Remove rose after animation completes
      setTimeout(() => {
        setRoses(prevRoses => prevRoses.filter(rose => rose.id !== id));
      }, (animationDuration + delay) * 1000);
    };
    
    // Create initial roses
    for (let i = 0; i < 10; i++) {
      createRose();
    }
    
    // Continue adding roses
    const interval = setInterval(createRose, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Falling roses */}
      {roses.map(rose => (
        <Rose key={rose.id} style={rose.style} />
      ))}
      
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-xl w-full z-20 relative">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6">To My Dearest Ananwita</h1>
          
          {/* Replace with your girlfriend's image */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-pink-300">
            <img 
              src="/lovable-uploads/077c2e92-8e77-4b7e-92e6-19e7adb46263.png" 
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
