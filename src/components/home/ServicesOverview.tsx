
import React from 'react';
import { ArrowRight, Code, Watch, PenTool, Bot, Briefcase } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const serviceCategories = [
  {
    id: 'tech',
    title: 'Tech',
    icon: Code,
    gradient: 'from-blue-500 to-purple-500',
    description: 'Websites, E-commerce platforms, and Mobile apps development for modern businesses.'
  },
  {
    id: 'Jewellery',
    title: 'Jewellery',
    icon: Watch,
    gradient: 'from-gold-light to-gold-dark',
    description: 'Expert CAD designing, 3D rendering, and premium Jewellery design solutions.'
  },
  {
    id: 'creative',
    title: 'Creative',
    icon: PenTool,
    gradient: 'from-pink-500 to-purple-500',
    description: 'Professional photography, animated videos and social media marketing assets.'
  },
  {
    id: 'ai',
    title: 'AI',
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Smart chatbots, WhatsApp automation, and AI-powered business solutions.'
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: Briefcase,
    gradient: 'from-amber-500 to-red-500',
    description: 'Logo design and trademark registration assistance for your business identity.'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-gold font-playfair text-3xl md:text-4xl mb-4">Our Expertise</h2>
          <p className="text-charcoal text-lg">
            Discover our wide range of premium services designed to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceCategories.map((category, index) => (
            <div key={category.id} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="luxury-card h-full transition-all hover:-translate-y-1 duration-300 overflow-hidden border-0 bg-white">
                <CardHeader className={cn(`bg-gradient-to-r ${category.gradient} p-6`)}>
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                    <category.icon className="text-white h-8 w-8" />
                  </div>
                  <CardTitle className="text-white text-xl font-playfair">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    to={`/services#${category.id}`}
                    className="text-gold hover:text-gold-dark flex items-center font-medium"
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-gold hover:bg-gold-dark text-white">
            <Link to="/services">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
