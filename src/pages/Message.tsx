
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Flower } from 'lucide-react';

// Rose component for the falling animation
const Rose = ({ style }: { style: React.CSSProperties }) => {
  const roseTypes = ['🌹', '🥀', <Flower className="text-pink-500 fill-pink-300" />];
  const randomRose = roseTypes[Math.floor(Math.random() * roseTypes.length)];
  
  return (
    <div 
      className="absolute pointer-events-none z-10" 
      style={style}
    >
      {typeof randomRose === 'string' ? (
        <span className="text-4xl md:text-5xl">{randomRose}</span>
      ) : (
        <div className="text-4xl md:text-5xl">{randomRose}</div>
      )}
    </div>
  );
};

const Message = () => {
  const [roses, setRoses] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    
    // Create falling roses
    const createRose = () => {
      const id = Date.now() + Math.random();
      const leftPosition = Math.random() * 100;
      const size = 20 + Math.random() * 20; // Random size
      const rotateStart = Math.random() * 360;
      const rotateEnd = rotateStart + Math.random() * 360;
      const animationDuration = 5 + Math.random() * 7; // Longer duration
      const delay = Math.random() * 3;
      const horizontalMovement = -15 + Math.random() * 30; // Random horizontal drift
      
      const newRose = {
        id,
        style: {
          left: `${leftPosition}%`,
          top: '-50px', // Start above the viewport
          animationDuration: `${animationDuration}s`,
          animationDelay: `${delay}s`,
          fontSize: `${size}px`,
          animation: `fall ${animationDuration}s linear ${delay}s forwards`,
          transform: `rotate(${rotateStart}deg)`,
        } as React.CSSProperties,
      };
      
      setRoses(prevRoses => [...prevRoses, newRose]);
      
      // Add key frames dynamically for this specific rose
      const styleSheet = document.styleSheets[0];
      const keyframes = `@keyframes fall {
        0% {
          transform: translateY(-50px) rotate(${rotateStart}deg);
          opacity: 1;
        }
        10% {
          transform: translateY(10vh) translateX(${horizontalMovement / 3}px) rotate(${rotateStart + 36}deg);
        }
        50% {
          transform: translateY(50vh) translateX(${horizontalMovement}px) rotate(${rotateStart + 180}deg);
          opacity: 1;
        }
        95% {
          opacity: 0.8;
        }
        100% {
          transform: translateY(105vh) translateX(${horizontalMovement * 1.2}px) rotate(${rotateEnd}deg);
          opacity: 0;
        }
      }`;
      
      try {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      } catch (e) {
        console.log('Error inserting keyframes:', e);
      }
      
      // Remove rose after animation completes
      setTimeout(() => {
        setRoses(prevRoses => prevRoses.filter(rose => rose.id !== id));
      }, (animationDuration + delay) * 1000);
    };
    
    // Create initial roses
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createRose(), i * 300);
    }
    
    // Continue adding roses
    const interval = setInterval(createRose, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden"
    >
      {/* Falling roses */}
      {roses.map(rose => (
        <Rose key={rose.id} style={rose.style} />
      ))}
      
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-xl w-full z-20 relative">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6">To My Dearest Ananwita</h1>
          
          {/* Replace with your girlfriend's image */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-pink-300 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=faces&fit=crop&w=300&h=300" 
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
