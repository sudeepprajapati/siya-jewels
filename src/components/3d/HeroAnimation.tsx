
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import { Mesh, Group } from 'three';

const HeroAnimation: React.FC = () => {
  const ringRef = useRef<Mesh>(null);
  const diamondsRef = useRef<Group>(null);

  // Animation loop
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }

    if (diamondsRef.current) {
      diamondsRef.current.rotation.y = -clock.getElapsedTime() * 0.1;
      diamondsRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <>
      {/* Main ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.4, 16, 100]} />
        <MeshTransmissionMaterial
          color="#d4af37"
          distortion={0.5}
          temporalDistortion={0.1}
          metalness={0.8}
          roughness={0.2}
          thickness={0.5}
        />
      </mesh>

      {/* Orbiting diamonds */}
      <group ref={diamondsRef}>
        <Float speed={2} floatIntensity={1}>
          <mesh position={[3, 0, 0]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={1}
            />
          </mesh>
        </Float>

        <Float speed={1.5} floatIntensity={0.8} rotationIntensity={0.5}>
          <mesh position={[-2, 1.5, 0]}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={1}
            />
          </mesh>
        </Float>

        <Float speed={3} floatIntensity={0.6} rotationIntensity={0.7}>
          <mesh position={[-1, -2, 1]}>
            <octahedronGeometry args={[0.4, 0]} />
            <meshStandardMaterial
              color="#9b87f5"
              metalness={0.7}
              roughness={0.2}
              envMapIntensity={1}
            />
          </mesh>
        </Float>
      </group>

      {/* Central SJ logo placeholder */}
      <Float speed={1} floatIntensity={0.3}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#1A1F2C"
            metalness={0.7}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* S shape - fix: remove rotation property from geometry */}
        <mesh position={[0, 0.3, 0.6]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.3, 0.08, 16, 50, Math.PI]} />
          <meshStandardMaterial color="#d4af37" />
        </mesh>
        <mesh position={[0, -0.1, 0.6]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.3, 0.08, 16, 50, Math.PI]} />
          <meshStandardMaterial color="#d4af37" />
        </mesh>

        {/* J shape - fix: move rotation to mesh instead of geometry */}
        <mesh position={[0, -0.4, 0.6]} rotation={[0, 0, Math.PI * 0.2]}>
          <capsuleGeometry args={[0.08, 0.6, 8, 16]} />
          <meshStandardMaterial color="#d4af37" />
        </mesh>
      </Float>
    </>
  );
};

export default HeroAnimation;