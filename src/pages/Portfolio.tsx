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
import PortfolioCard from '@/components/Portfolio/PortfolioCard';
import AboutHeader from '@/components/About/AboutHeader';
import PortfolioModal from '@/components/Portfolio/PortfolioModal';

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
  // 'Jewellery CAD',
  'Web Development',
  'Mobile Apps',
  // 'Creative Media',
  // 'Branding'
];

const portfolioItems = [
  // {
  //   id: 1,
  //   title: 'Diamond Ring Collection',
  //   category: 'Jewellery CAD',
  //   image: '/diamond.webp',
  //   description: 'CAD design and rendering for a premium diamond ring collection.'
  // },
  {
    id: 2,
    title: 'Gold Emporium E-commerce',
    category: 'Web Development',
    image: '/assets/images/webdev2.webp',
    description: 'Custom e-commerce platform for a high-end Jewellery retailer.'
  },
  // {
  //   id: 3,
  //   title: 'Luxury Watch Campaign',
  //   category: 'Creative Media',
  //   image: '/watch.webp',
  //   description: 'Photography and video production for a luxury watch launch.'
  // },
  // {
  //   id: 4,
  //   title: 'Diamond Traders Logo',
  //   category: 'Branding',
  //   image: '/diamondlogo.webp',
  //   description: 'Complete brand identity for an international diamond trading company.'
  // },
  // {
  //   id: 5,
  //   title: 'Gemstone Pendant Series',
  //   category: 'Jewellery CAD',
  //   image: '/pandant.webp',
  //   description: 'Detailed CAD designs for a series of gemstone pendants.'
  // },
  // {
  //   id: 6,
  //   title: 'Gold Earrings Collection',
  //   category: 'Jewellery CAD',
  //   image: '/earings.webp',
  //   description: '3D rendering of an exclusive gold earrings collection.'
  // }
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
      <main className="pt-24">
        {/* Header */}
        <section className="container py-12 pb-4">
          <AboutHeader
            portfolioCategories={portfolioCategories}
            filter={filter}
            setFilter={setFilter}
          />
        </section>

        {/* Portfolio Grid */}
        <section className="container py-8">
          <div className=" h-72 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredItems.map((item, index) => (
              <PortfolioCard item={item} onClick={openItemDetails} />
            ))}
          </div>
        </section>

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
      </main>

      {/* Modal */}
      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={closeItemDetails} />
      )}

      <Footer />
    </>
  );
};

export default Portfolio;
