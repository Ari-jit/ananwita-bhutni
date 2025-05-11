
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { cn } from '@/lib/utils';
import Heart3D from '@/components/Heart3D';

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
          "w-64 h-64 md:w-72 md:h-72 rounded-full",
          "hover:bg-pink-50 transition-all duration-300",
          "shadow-[0_0_20px_rgba(244,114,182,0.7)]",
          "hover:shadow-[0_0_30px_rgba(244,114,182,0.9)]",
        )}
        aria-label="Open message"
      >
        <div className="w-full h-full">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Heart3D />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2 - 0.5}
                maxPolarAngle={Math.PI / 2 + 0.5}
              />
            </Suspense>
          </Canvas>
        </div>
      </button>
    </div>
  );
};

export default Index;
