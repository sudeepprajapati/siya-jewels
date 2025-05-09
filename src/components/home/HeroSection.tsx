
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Lazy load 3D components for better performance
const ThreeCanvas = lazy(() => import('../3d/ThreeCanvas'));
const HeroAnimation = lazy(() => import('../3d/HeroAnimation'));


const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-purple-dark"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#9b87f5_25%,transparent_25%,transparent_50%,#9b87f5_50%,#9b87f5_75%,transparent_75%,transparent)] bg-[length:24px_24px]"></div>

      {/* Content container */}
      <div className="container relative z-10 py-24 flex justify-center flex-col md:flex-row items-center">
        <div className="md:w-4/5 mt-12 md:mt-0 flex flex-col items-center text-center justify-center">
          <h1
            className={`font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-4 opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.2s]' : ''}`}
          >
            Transforming <span className="text-gold">Jewellery</span> & <span className="text-gold">Technology</span>
          </h1>
          <p
            className={`text-gray-300 mb-6 max-w-lg opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.4s]' : ''}`}
          >
            Siya Jewels Infotech blends the art of premium Jewellery design with cutting-edge technology solutions. We create bespoke experiences for jewelers and businesses.
          </p>
          <div className={`flex flex-wrap gap-4 opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.6s]' : ''}`}>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <Link to="/about">
                Discover Our Story <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 hover:text-white hover:bg-white/10">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
        <div className={`md:w-1/2 mt-12 hidden  md:mt-0 opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.8s]' : ''}`}>
          <div className="relative h-[500px] w-full max-w-[500px] mx-auto">
            <div className="w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gold rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gold-gradient rounded-full animate-spin-slow shadow-gold-lg"></div>
              <div className="absolute inset-8 bg-purple-dark rounded-full flex items-center justify-center">
                {/* <div className="text-gold font-playfair text-2xl"> */}
                <div className="w-[500px] h-[500px] flex items-center justify-center">
                  <Suspense >
                    <ThreeCanvas className='h-[350px] md:h-[300px] w-[500px]  md:w-[400px] -ml-20md:ml-0'
                      enableZoom={true} enableRotate={true}>
                      <HeroAnimation />
                    </ThreeCanvas>
                  </Suspense>
                </div>
              </div>
            </div>

            {/* Floating elements for decoration */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-gold rounded-full opacity-50 animate-float"></div>
            <div className="absolute bottom-12 right-12 w-4 h-4 bg-gold rounded-full opacity-70 animate-float [animation-delay:1s]"></div>
            <div className="absolute bottom-24 left-24 w-6 h-6 bg-purple-light rounded-full opacity-30 animate-float [animation-delay:0.5s]"></div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
