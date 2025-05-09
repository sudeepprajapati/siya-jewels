
import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  {
    title: "Dual Expertise",
    description: "Unique combination of Jewellery industry knowledge and technical prowess"
  },
  {
    title: "Premium Quality",
    description: "High-end designs and development with attention to detail"
  },
  {
    title: "Custom Solutions",
    description: "Tailored approaches for each client's specific needs"
  },
  {
    title: "Modern Technologies",
    description: "Latest tools and frameworks for optimal performance"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-gold font-playfair text-3xl md:text-4xl mb-4">Why Choose Us</h2>
          <p className="text-charcoal text-lg">
            We combine artistry with technology to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-gold/50 transition-colors duration-300 hover:shadow-gold"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Check className="text-gold" />
              </div>
              <h3 className="font-playfair text-xl mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
