
import React, { Suspense, lazy } from 'react';
import { cn } from '@/lib/utils';

// Lazy load 3D components for better performance
const ThreeCanvas = lazy(() => import('../3d/ThreeCanvas'));
const GoldRing = lazy(() => import('../3d/GoldRing'));
const Diamond3D = lazy(() => import('../3d/Diamond'));

interface ServicesHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  serviceCategories: any[];
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  activeCategory,
  onCategoryChange,
  serviceCategories
}) => {
  // Determine which 3D element to show based on active category
  const get3DElement = () => {
    if (activeCategory === 'jewelry') {
      return <GoldRing position={[0, 0, 0]} scale={1.8} rotationSpeed={1} />;
    }
    return <Diamond3D position={[0, 0, 0]} scale={1.5} rotationSpeed={0.8} />;
  };

  return (
    <section className="container py-12 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">Our <span className="text-gold">Services</span></h1>
          <p className="text-gray-700 max-w-2xl mb-10">
            From jewelry design to cutting-edge technology solutions, we offer a wide range of premium services designed to elevate your business.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
            <button
              onClick={() => onCategoryChange('all')}
              className={cn(
                "px-4 py-2 rounded-full text-sm md:text-base transition-colors",
                activeCategory === 'all'
                  ? "bg-gold text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              )}
            >
              All Services
            </button>

            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm md:text-base transition-colors",
                  activeCategory === category.id
                    ? "bg-gold text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:block h-[300px]">
          <Suspense fallback={
            <div className="h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-t-gold border-b-gold rounded-full animate-spin"></div>
            </div>
          }>
            <ThreeCanvas height="300px">
              {get3DElement()}
            </ThreeCanvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
