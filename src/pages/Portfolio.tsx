import { useEffect, useRef, useState, Suspense } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

import ThreeCanvas from '../components/3d/ThreeCanvas';
import GoldRing from '../components/3d/GoldRing';
import Diamond from '../components/3d/Diamond';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
});

const fadeRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
});

// Data
const portfolioCategories = [
  'All',
  'Jewellery CAD',
  'Web Development',
  'Mobile Apps',
  'Creative Media',
  'Branding'
];

const portfolioItems = [
  {
    id: 1,
    title: 'Diamond Ring Collection',
    category: 'Jewellery CAD',
    image: '/diamond.webp',
    description: 'CAD design and rendering for a premium diamond ring collection.'
  },
  {
    id: 2,
    title: 'Gold Emporium E-commerce',
    category: 'Web Development',
    image: '/e-commerce.webp',
    description: 'Custom e-commerce platform for a high-end Jewellery retailer.'
  },
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
    category: 'Jewellery CAD',
    image: '/pandant.webp',
    description: 'Detailed CAD designs for a series of gemstone pendants.'
  },
  {
    id: 6,
    title: 'Gold Earrings Collection',
    category: 'Jewellery CAD',
    image: '/earings.webp',
    description: '3D rendering of an exclusive gold earrings collection.'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState(null);

  // Section Refs and Animations
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  const headerControls = useAnimation();
  const gridControls = useAnimation();
  const ctaControls = useAnimation();

  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (gridInView) gridControls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [headerInView, gridInView, ctaInView]);

  useEffect(() => {
    setFilteredItems(filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter));
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
      <motion.main ref={headerRef} initial="hidden" animate={headerControls} variants={fadeUp} className="pt-24">
        {/* Header */}
        <section className="container py-12 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeLeft(0.2)}>
              <h1 className="text-4xl md:text-5xl font-playfair mb-6">
                Our <span className="text-gold">Portfolio</span>
              </h1>
              <motion.p variants={fadeLeft(0.25)} className="text-gray-700 max-w-2xl mb-10">
                Browse through our collection of projects spanning Jewellery design, web development, creative media, and more.
              </motion.p>
              <motion.div className="flex flex-wrap gap-2 md:gap-4 mb-12" variants={fadeLeft(0.3)}>
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
              </motion.div>
            </motion.div>

            {/* 3D Element */}
            <div className="hidden md:block h-[300px]">
              <Suspense fallback={
                <div className="h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-t-gold border-b-gold rounded-full animate-spin"></div>
                </div>
              }>
                <ThreeCanvas>
                  {filter === 'Jewellery CAD' ? (
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
        <motion.section ref={gridRef} animate={gridControls} variants={fadeUp} className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-gold transition-all duration-500 transform"
                animate="visible"
                variants={fadeUp}
                onClick={() => openItemDetails(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section ref={ctaRef} initial="hidden" animate={ctaControls} className="py-16 bg-purple-light/10 mt-16">
          <div className="container text-center">
            <motion.h2 variants={fadeRight(0.2)} className="text-3xl font-playfair mb-6">
              Like What You See?
            </motion.h2>
            <motion.p variants={fadeLeft(0.3)} className="text-gray-700 max-w-2xl mx-auto mb-8">
              Let's discuss how we can create something amazing for your business. Our team is ready to bring your vision to life.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild className="bg-gold hover:bg-gold-dark text-white">
                <a href="/contact">
                  Start Your Project <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </motion.main>

      {/* Modal */}
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
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full mb-2">
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
                  <a href="/contact">Request Similar</a>
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
