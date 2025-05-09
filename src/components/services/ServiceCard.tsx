
import React, { Suspense, lazy } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

// Lazy load 3D components
// const ThreeCanvas = lazy(() => import('../3d/ThreeCanvas'));
// const ServiceIcon = lazy(() => import('../3d/ServiceIcon'));

// Map service categories to 3D geometry types
const geometryMap = {
  'tech': 'cube',
  'Jewellery': 'torus',
  'creative': 'sphere',
  'ai': 'cube',
  'branding': 'cone'
};

// Map service categories to colors
const colorMap = {
  'tech': '#9b87f5',
  'Jewellery': '#d4af37',
  'creative': '#D946EF',
  'ai': '#0EA5E9',
  'branding': '#F97316'
};

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  categoryId: string;
  categoryColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  description,
  benefits,
  categoryId,
  categoryColor
}) => {
  // const geometry = geometryMap[categoryId] || 'cube';
  // const color = colorMap[categoryId] || categoryColor;

  return (
    <Card className="luxury-card border-0 overflow-hidden h-full transform transition-all duration-500 hover:-translate-y-1 hover:shadow-gold">
      <CardHeader className={cn(
        "bg-gradient-to-r p-6",
        categoryColor
      )}>
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 relative">
          <Icon className="text-white h-8 w-8 relative z-10" />
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-60">
            <Suspense fallback={null}>
              {/* <ThreeCanvas height="100%" background="transparent">
                <ServiceIcon geometry={geometry} color={color} size={0.8} floatIntensity={0.5} />
              </ThreeCanvas> */}
            </Suspense>
          </div>
        </div>
        <h3 className="text-white text-xl font-playfair">{title}</h3>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-6">{description}</p>
        <h4 className="font-medium mb-3">Key Benefits:</h4>
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-gold/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant="outline"
          className="w-full border-gold text-gold hover:bg-gold/10"
        >
          <a href="/contact">
            Learn More
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
