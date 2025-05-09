
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMzAgbDMwIC0zMCBMMzAgMzAgbC0zMCAtMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-30"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Whether you need jewelry design or tech solutions, we're here to help transform your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="tel:9293432432"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gold/20 hover:bg-gold/30 rounded-md transition-colors duration-300"
            >
              <Phone size={20} className="text-gold" />
              <span>+91 9293432432</span>
            </a>
            <a
              href="mailto:siyajewels@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gold/20 hover:bg-gold/30 rounded-md transition-colors duration-300"
            >
              <Mail size={20} className="text-gold" />
              <span>siyajewels@gmail.com</span>
            </a>
          </div>

          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-white">
            <Link to="/contact">
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
