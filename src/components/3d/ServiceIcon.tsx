
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Float } from '@react-three/drei';

interface ServiceIconProps {
  geometry: 'cube' | 'sphere' | 'torus' | 'cone';
  color: string;
  size?: number;
  floatIntensity?: number;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ 
  geometry, 
  color, 
  size = 1, 
  floatIntensity = 1 
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'cube':
        return <boxGeometry args={[size, size, size]} />;
      case 'sphere':
        return <sphereGeometry args={[size, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[size, size/3, 16, 100]} />;
      case 'cone':
        return <coneGeometry args={[size, size*2, 32]} />;
      default:
        return <boxGeometry args={[size, size, size]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={floatIntensity}>
      <mesh ref={meshRef}>
        {renderGeometry()}
        <meshStandardMaterial 
          color={color} 
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

export default ServiceIcon;
