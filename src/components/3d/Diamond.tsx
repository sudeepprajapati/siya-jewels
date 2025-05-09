
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface DiamondProps {
  position?: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
}

const Diamond: React.FC<DiamondProps> = ({ 
  position = [0, 0, 0], 
  scale = 1,
  rotationSpeed = 0.5
}) => {
  const meshRef = useRef<Mesh>(null);
  
  // Animation loop
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * rotationSpeed;
      meshRef.current.rotation.z += 0.003 * rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#ffffff" 
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1}
      />
    </mesh>
  );
};

export default Diamond;
