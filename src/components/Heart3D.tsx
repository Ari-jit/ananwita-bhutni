
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useGLTF } from '@react-three/drei';

export default function Heart3D({ ...props }) {
  const meshRef = useRef<Mesh>(null!);
  
  // Create a heart shape animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      // Add a subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      // Add a subtle pulsing effect
      const scale = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
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
