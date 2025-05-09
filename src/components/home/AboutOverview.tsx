
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutOverview = () => {
  return (
    <section className="py-20 bg-purple-light/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gold opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gold opacity-10"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-playfair text-3xl md:text-4xl mb-6">
              About <span className="text-gold">Siya Jewels Infotech</span>
            </h2>
            <p className="mb-6 text-gray-700">
              Founded by Harish Soni, Siya Jewels Infotech combines deep expertise in both the jewelry industry and cutting-edge technology solutions. Our unique dual specialization allows us to offer services that truly understand the specific needs of jewelers while delivering the latest in digital innovation.
            </p>
            <p className="mb-8 text-gray-700">
              We bridge the gap between traditional jewelry craftsmanship and modern technology, helping businesses transform and thrive in the digital age.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <Link to="/about">
                Know More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="w-full h-80 bg-purple-dark rounded-lg relative overflow-hidden shadow-gold">
              {/* Placeholder for founder image */}
              <img src="/founder.webp" alt="" className='w-screen' />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-playfair text-2xl mb-1">Harish Soni</h3>
                <p className="text-gold">Founder, Siya Jewels Infotech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
