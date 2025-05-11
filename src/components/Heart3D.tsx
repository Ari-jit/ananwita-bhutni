
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

export default function Heart3D({ ...props }) {
  const meshRef = useRef<Mesh>(null);
  
  // Create a heart shape using a simple method
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      // Add a subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={1.5}
      {...props}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#FF1493" metalness={0.1} roughness={0.2} />
    </mesh>
  );
}
