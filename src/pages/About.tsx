
import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Gem } from 'lucide-react';
// import Logo from '@/components/ui/Logo';

// Lazy load 3D components for better performance
// const ThreeCanvas = lazy(() => import('../components/3d/ThreeCanvas'));
// const GoldRing = lazy(() => import('../components/3d/GoldRing'));
// const Diamond = lazy(() => import('../components/3d/Diamond'));

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header Section */}
        <section className="container py-12 pb-1">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">About <span className="text-gold">Us</span></h1>
          <div className="w-20 h-1 bg-gold mb-10"></div>
        </section>

        {/* Company Introduction with 3D Ring */}
        <section className="py-16 bg-purple-light/5 relative overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair mb-6">
                  The Origin Story of <span className="text-gold">Siya Jewels Infotech</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Founded on the vision of bridging traditional jewelry craftsmanship with cutting-edge technology, Siya Jewels Infotech represents a unique fusion of expertise rarely found in today's specialized market.
                </p>
                <p className="text-gray-700 mb-6">
                  Our journey began when Harish Soni, with his deep knowledge of the jewelry industry, recognized the growing need for technological solutions specifically tailored for jewelers. Rather than forcing generic tech solutions onto jewelry businesses, we built an agency that truly understands both worlds.
                </p>
                <div className="flex flex-wrap gap-8 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Award className="text-gold h-5 w-5" />
                    </div>
                    <span className="font-medium">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Users className="text-gold h-5 w-5" />
                    </div>
                    <span className="font-medium">Client-Focused</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Gem className="text-gold h-5 w-5" />
                    </div>
                    <span className="font-medium">Dual Expertise</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-gold h-[400px] flex items-center justify-center relative">
                  {/* <Suspense fallback={
                    <div className="absolute inset-0 bg-purple-light/10 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-t-gold border-b-gold rounded-full animate-spin"></div>
                    </div>
                  }>
                    <ThreeCanvas height="400px" className="rounded-lg">
                      <GoldRing position={[0, 0, 0]} scale={1.5} rotationSpeed={0.8} />
                    </ThreeCanvas>
                  </Suspense> */}
                  {/* <Logo className='w-72' /> */}
                  <img src="/sjlogo.png" alt="" />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/70 to-transparent pointer-events-none"></div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Bio with 3D Diamond */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gold/20 rounded-full -translate-x-20 -translate-y-20 z-0"></div>
                <div className="rounded-lg overflow-hidden shadow-lg relative sm:h-[300px] md:h-[400px] z-10">
                  {/* <Suspense fallback={
                    <div className="absolute inset-0 bg-purple-light/10 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-t-gold border-b-gold rounded-full animate-spin"></div>
                    </div>
                  }>
                    <ThreeCanvas height="400px" className="rounded-lg">
                      <Diamond position={[0, 0, 0]} scale={1.8} rotationSpeed={1} />
                    </ThreeCanvas>
                  </Suspense> */}
                  <img src="/founder.webp" className='h-fit' alt="Harish Soni" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-playfair mb-6">
                  Meet Our <span className="text-gold">Founder</span>
                </h2>
                <h3 className="text-xl font-playfair text-purple-dark mb-4">Harish Soni</h3>
                <p className="text-gray-700 mb-6">
                  Harish Soni's journey represents a unique evolution from being a skilled jeweler to becoming a tech innovator. With deep roots in the jewelry industry, Harish recognized the specific technological needs of jewelers that weren't being met by generic solutions.
                </p>
                <p className="text-gray-700 mb-6">
                  Combining his jewelry expertise with a passion for technology, he established Siya Jewels Infotech to create bespoke digital solutions that truly understand the unique requirements of the jewelry business while also serving broader business needs.
                </p>
                <p className="text-gray-700 mb-6">
                  Today, Harish leads a team that bridges the gap between traditional jewelry craftsmanship and cutting-edge technology, helping businesses transform their operations and thrive in the digital age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-purple-light/10">
          <div className="container">
            <h2 className="text-3xl font-playfair text-center mb-12">
              What Our <span className="text-gold">Clients</span> Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden hover:shadow-gold transition-shadow duration-300"
                >
                  <div className="text-gold text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                  <p className="text-gray-700 italic mb-6 relative z-10">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <div className="w-full h-full bg-gold/20 flex items-center justify-center text-gold font-medium">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the difference of working with a team that understands both the jewelry industry and cutting-edge technology.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <a href="/contact">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const testimonials = [
  {
    name: "Rajesh Mehta",
    position: "Owner, Mehta Jewellers",
    text: "Siya Jewels Infotech transformed our business with their CAD designs and website. Their understanding of both jewelry and technology is truly unique."
  },
  {
    name: "Priya Shah",
    position: "Marketing Director, Gold Emporium",
    text: "The team's expertise in both jewelry and technology made the development process incredibly smooth. Our e-commerce site has boosted sales by 45%."
  },
  {
    name: "Vikram Singh",
    position: "CEO, Diamond Exports Ltd.",
    text: "Working with Harish and his team has been exceptional. Their AI chatbot has dramatically improved our customer service efficiency."
  }
];

export default About;
