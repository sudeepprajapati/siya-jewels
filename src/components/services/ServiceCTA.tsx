
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceCTA: React.FC = () => {
  return (
    <section className="py-16 bg-purple-light/10 text-balck">
      <div className="container text-center">
        <h2 className="text-3xl font-playfair mb-6">Need a Custom Solution?</h2>
        <p className="text-gray-800 max-w-2xl mx-auto mb-8">
          Let's discuss how our services can be tailored to meet your specific business requirements.
        </p>
        <Button asChild className="bg-gold hover:bg-gold-dark text-white">
          <a href="/contact">
            Request a Custom Quote <ArrowRight size={16} className="ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ServiceCTA;
