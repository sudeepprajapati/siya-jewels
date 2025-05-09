
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three';

interface GoldRingProps {
  position?: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
}

const GoldRing: React.FC<GoldRingProps> = ({ 
  position = [0, 0, 0], 
  scale = 1,
  rotationSpeed = 0.5
}) => {
  const meshRef = useRef<Mesh>(null);
  
  // Animation loop
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * rotationSpeed;
      meshRef.current.rotation.x += 0.002 * rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <MeshDistortMaterial
        color="#d4af37"
        distort={0.2}
        speed={2}
        metalness={0.9}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
};

export default GoldRing;
