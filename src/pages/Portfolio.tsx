
import React, { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Lazy load 3D components
// const ThreeCanvas = lazy(() => import('../components/3d/ThreeCanvas'));
// const GoldRing = lazy(() => import('../components/3d/GoldRing'));
// const Diamond = lazy(() => import('../components/3d/Diamond'));

import ThreeCanvas from '../components/3d/ThreeCanvas';
import GoldRing from '../components/3d/GoldRing';
import Diamond from '../components/3d/Diamond';

// Portfolio data
const portfolioCategories = [
  'All',
  'Jewelry CAD',
  'Web Development',
  'Mobile Apps',
  'Creative Media',
  'Branding'
];

const portfolioItems = [
  {
    id: 1,
    title: 'Diamond Ring Collection',
    category: 'Jewelry CAD',
    image: '/diamond.webp',
    description: 'CAD design and rendering for a premium diamond ring collection.'
  },
  {
    id: 2,
    title: 'Gold Emporium E-commerce',
    category: 'Web Development',
    image: '/e-commerce.webp',
    description: 'Custom e-commerce platform for a high-end jewelry retailer.'
  },
  // {
  //   id: 3,
  //   title: 'Jewel Finder Mobile App',
  //   category: 'Mobile Apps',
  //   // image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  //   description: 'iOS and Android app for a jewelry marketplace.'
  // },
  {
    id: 3,
    title: 'Luxury Watch Campaign',
    category: 'Creative Media',
    image: '/watch.webp',
    description: 'Photography and video production for a luxury watch launch.'
  },
  {
    id: 4,
    title: 'Diamond Traders Logo',
    category: 'Branding',
    image: '/diamondlogo.webp',
    description: 'Complete brand identity for an international diamond trading company.'
  },
  {
    id: 5,
    title: 'Gemstone Pendant Series',
    category: 'Jewelry CAD',
    image: '/pandant.webp',
    description: 'Detailed CAD designs for a series of gemstone pendants.'
  },
  {
    id: 6,
    title: 'Gold Earrings Collection',
    category: 'Jewelry CAD',
    image: '/earings.webp',
    description: '3D rendering of an exclusive gold earrings collection.'
  },
  // {
  //   id: 7,
  //   title: 'Luxury Jewelry Store',
  //   category: 'Web Development',
  //   // image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  //   description: 'Responsive website with virtual try-on features for a jewelry store.'
  // },

  // {
  //   id: 9,
  //   title: 'Jewelry Brand Identity',
  //   category: 'Branding',
  //   // image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
  //   description: 'Complete branding package for a new luxury jewelry brand.'
  // },
  // {
  //   id: 10,
  //   title: 'Diamond Catalog App',
  //   category: 'Mobile Apps',
  //   // image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  //   description: 'Mobile application for browsing and purchasing diamonds.'
  // },
  // {
  //   id: 11,
  //   title: 'Jewelry Lookbook',
  //   category: 'Creative Media',
  //   // image: '',
  //   description: 'Photography and design for a seasonal jewelry lookbook.'
  // },
  // {
  //   id: 12,
  //   title: 'Engagement Ring Series',
  //   category: 'Jewelry CAD',
  //   // image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
  //   description: 'CAD design for a customizable engagement ring collection.'
  // }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Delayed loading state for smooth animations
    setTimeout(() => {
      setLoaded(true);
    }, 100);

    if (filter === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  const openItemDetails = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeItemDetails = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 ">
        {/* Header Section with 3D Animation */}
        <section className="container py-12 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair mb-6">Our <span className="text-gold">Portfolio</span></h1>
              <p className="text-gray-700 max-w-2xl mb-10">
                Browse through our collection of projects spanning jewelry design, web development, creative media, and more.
              </p>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
                {portfolioCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm md:text-base transition-colors",
                      filter === category
                        ? "bg-gold text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    )}
                  >
                    {category}
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
                <ThreeCanvas>
                  {filter === 'Jewelry CAD' ? (
                    <GoldRing position={[0, 0, 0]} scale={2} rotationSpeed={1} />
                  ) : (
                    <Diamond position={[0, 0, 0]} scale={1.8} rotationSpeed={0.8} />
                  )}
                </ThreeCanvas>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-gold transition-all duration-500 transform",
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  // Stagger the animation
                  `transition-all duration-500 delay-[${index * 100}ms]`
                )}
                onClick={() => openItemDetails(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    // loading="lazy" // Improve performance with lazy loading
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/90 via-purple-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-gold/80 text-white text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-playfair mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-playfair mb-4">No projects found</h3>
              <p className="text-gray-600 mb-6">We don't have any projects in this category yet.</p>
              <Button onClick={() => setFilter('All')} className="bg-gold hover:bg-gold-dark text-white">
                View All Projects
              </Button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-light/10 mt-16">
          <div className="container text-center">
            <h2 className="text-3xl font-playfair mb-6">Like What You See?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Let's discuss how we can create something amazing for your business. Our team is ready to bring your vision to life.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <a href="/contact">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Portfolio Item Detail Modal with 3D Element */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <div className="w-full h-64 md:h-80">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={closeItemDetails}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Close details"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4 ">
                <p className=" px-3 py-1 bg-gold/20 text-gold text-xs rounded-full mb-2">
                  {selectedItem.category}
                </p>
                <h2 className="text-2xl font-playfair">{selectedItem.title}</h2>
              </div>
              <p className="text-gray-700 mb-6">{selectedItem.description}</p>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-medium mb-4">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="font-medium w-24">Client:</span>
                    <span className="text-gray-600">Confidential</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Date:</span>
                    <span className="text-gray-600">2023</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Services:</span>
                    <span className="text-gray-600">{selectedItem.category}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Duration:</span>
                    <span className="text-gray-600">4 weeks</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button variant="outline" onClick={closeItemDetails} className="mr-2">
                  Close
                </Button>
                <Button asChild className="bg-gold hover:bg-gold-dark text-white">
                  <a href="/contact">
                    Request Similar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Portfolio;
