
import React, { useState } from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import { cn } from '@/lib/utils';

interface ServiceItem {
  id: string;
  title: string;
  icon: any;
  description: string;
  benefits: string[];
}

interface ServiceCategoryProps {
  id: string;
  title: string;
  color: string;
  description: string;
  services: ServiceItem[];
  isLoaded: boolean;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  id,
  title,
  color,
  description,
  services,
  isLoaded
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-8",
        id === 'tech' || id === 'creative' || id === 'branding'
          ? "bg-white"
          : "bg-purple-light/5"
      )}
    >
      <div className="container">
        <div className="mb-10">
          <h2 className={cn(
            "text-3xl font-playfair mb-3",
            `bg-gradient-to-r ${color} text-transparent bg-clip-text`
          )}>{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "opacity-0 translate-y-8",
                isLoaded && "opacity-100 translate-y-0 transition-all duration-700",
                // Stagger the animation
                isLoaded && `transition-delay-[${index * 100}ms]`
              )}
            >
              <ServiceCard
                title={service.title}
                icon={service.icon}
                description={service.description}
                benefits={service.benefits}
                categoryId={id}
                categoryColor={color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
