
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Sparkle component
const Sparkle = ({ style }: { style: React.CSSProperties }) => (
  <div 
    className="absolute pointer-events-none" 
    style={style}
  >
    <span className="text-xs md:text-sm">✨</span>
  </div>
);

const Message = () => {
  const [sparkles, setSparkles] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  
  useEffect(() => {
    // Create sparkles around the image
    const createSparkle = () => {
      const id = Date.now();
      // Calculate position around a circle
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = 70 + Math.random() * 30; // Distance from center
      const top = 50 + Math.sin(angle) * distance;
      const left = 50 + Math.cos(angle) * distance;
      
      // Random colors for sparkles
      const colors = ['#D946EF', '#8B5CF6', '#E5DEFF', '#FFDEE2'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const scale = 0.5 + Math.random() * 1.5;
      const opacity = 0.4 + Math.random() * 0.6;
      const animationDuration = 1 + Math.random() * 2;
      
      const newSparkle = {
        id,
        style: {
          top: `${top}%`,
          left: `${left}%`,
          color: color,
          opacity: opacity,
          transform: `scale(${scale})`,
          animation: `sparkle ${animationDuration}s ease-in-out infinite`,
          textShadow: `0 0 5px ${color}`,
        },
      };
      
      setSparkles(prevSparkles => [...prevSparkles, newSparkle]);
      
      // Remove sparkle after a while
      setTimeout(() => {
        setSparkles(prevSparkles => prevSparkles.filter(sparkle => sparkle.id !== id));
      }, animationDuration * 1000);
    };
    
    // Create initial sparkles
    for (let i = 0; i < 15; i++) {
      createSparkle();
    }
    
    // Continue adding sparkles
    const interval = setInterval(createSparkle, 300);
    
    return () => clearInterval(interval);
  }, []);

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
          
          {/* Updated girlfriend's image with sparkles */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-pink-300 relative">
            {/* Sparkles around the image */}
            {sparkles.map(sparkle => (
              <Sparkle key={sparkle.id} style={sparkle.style} />
            ))}
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
