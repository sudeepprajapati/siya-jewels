'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Gem } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Mehta",
    position: "Owner, Mehta Jewellers",
    text: "Siya Jewels Infotech transformed our business with their CAD designs and website. Their understanding of both Jewellery and technology is truly unique."
  },
  {
    name: "Priya Shah",
    position: "Marketing Director, Gold Emporium",
    text: "The team's expertise in both Jewellery and technology made the development process incredibly smooth. Our e-commerce site has boosted sales by 45%."
  },
  {
    name: "Vikram Singh",
    position: "CEO, Diamond Exports Ltd.",
    text: "Working with Harish and his team has been exceptional. Their AI chatbot has dramatically improved our customer service efficiency."
  }
];

const useSectionVisible = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
};


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing after the first intersection
      }
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [introRef, introVisible] = useSectionVisible();
  const [founderRef, founderVisible] = useSectionVisible();
  const [testimonialRef, testimonialVisible] = useSectionVisible();
  const [ctaRef, ctaVisible] = useSectionVisible();

  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Header Section */}
        <section className="container py-12 pb-1">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">
            About <span className="text-gold">Us</span>
          </h1>
          <div className="w-20 h-1 bg-gold mb-10"></div>
        </section>

        {/* Company Introduction */}
        <motion.section
          ref={introRef}
          className="py-16 bg-purple-light/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={introVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair mb-6">
                  The Origin Story of <span className="text-gold">Siya Jewels Infotech</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Founded on the vision of bridging traditional Jewellery craftsmanship with cutting-edge technology...
                </p>
                <p className="text-gray-700 mb-6">
                  Our journey began when Harish Soni, with his deep knowledge...
                </p>
                <div className="flex flex-wrap gap-8 mb-6">
                  {[
                    { label: "Premium Quality", Icon: Award },
                    { label: "Client-Focused", Icon: Users },
                    { label: "Dual Expertise", Icon: Gem }
                  ].map(({ label, Icon }, idx) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <Icon className="text-gold h-5 w-5" />
                      </div>
                      <span className="font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-gold h-[400px] flex items-center justify-center relative">
                  <img src="/sjlogo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Founder Bio */}
        <motion.section
          ref={sectionRef}
          className="py-16 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 lg:order-1 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-40 h-40 bg-gold/20 rounded-full -translate-x-20 -translate-y-20 z-0"></div>
                <div className="rounded-lg overflow-hidden shadow-lg relative sm:h-[300px] md:h-[400px] z-10">
                  <img src="/founder.webp" className="h-fit" alt="Harish Soni" />
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-3xl font-playfair mb-6">
                  Meet Our <span className="text-gold">Founder</span>
                </h2>
                <h3 className="text-xl font-playfair text-purple-dark mb-4">Harish Soni</h3>
                <p className="text-gray-700 mb-6">
                  Harish Soni's journey represents a unique evolution from being a skilled jeweler to becoming a tech innovator. With deep roots in the Jewellery industry, Harish recognized the specific technological needs of jewelers that weren't being met by generic solutions.
                </p>
                <p className="text-gray-700 mb-6">
                  Combining his Jewellery expertise with a passion for technology, he established Siya Jewels Infotech to create bespoke digital solutions that truly understand the unique requirements of the Jewellery business while also serving broader business needs.
                </p>
                <p className="text-gray-700 mb-6">
                  Today, Harish leads a team that bridges the gap between traditional Jewellery craftsmanship and cutting-edge technology, helping businesses transform their operations and thrive in the digital age.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          ref={testimonialRef}
          className="py-16 bg-purple-light/10"
          initial={{ opacity: 0, y: 40 }}
          animate={testimonialVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            <h2 className="text-3xl font-playfair text-center mb-12">
              What Our <span className="text-gold">Clients</span> Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden hover:shadow-gold transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          ref={ctaRef}
          className="py-16 bg-gray-800 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the difference of working with a team that understands both the Jewellery industry and cutting-edge technology.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <a href="/contact">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};


export default About;
