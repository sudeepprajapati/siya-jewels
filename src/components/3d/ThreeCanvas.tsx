
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PresentationControls } from '@react-three/drei';

interface ThreeCanvasProps {
  children: React.ReactNode;
  enableZoom?: boolean;
  enableRotate?: boolean;
  background?: string;
  // height?: string;
  className?: string;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  children,
  enableZoom = false,
  enableRotate = true,
  background = "transparent",
  // height = "300px",
  className = ""
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach={background} args={[background]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Suspense fallback={null}>
          <PresentationControls
            global
            zoom={enableZoom ? 1.5 : 0}
            rotation={enableRotate ? [0, 0, 0] : undefined}
            polar={[-0.1, 0.1]}
            azimuth={[-0.5, 0.5]}
          >
            {children}
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={enableZoom}
          enableRotate={enableRotate}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
