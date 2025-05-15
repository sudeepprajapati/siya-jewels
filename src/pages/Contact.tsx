'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Send, MapPin, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion, useAnimation, useInView } from 'framer-motion';

import ThreeCanvas from '../components/3d/ThreeCanvas';
import Diamond from '../components/3d/Diamond';
import ContactForm from '@/components/Contact/ContactForm';

const serviceOptions = [
  'Website Development',
  'E-commerce Development',
  'Mobile App Development',
  'Billing Software Development',
  'Jewellery CAD Designing',
  '3D Jewellery Rendering',
  'Hip-Hop Cuban Jewellery CAD Design',
  'Premium 5D Designing',
  'Product Photoshoot',
  'Model Photoshoot',
  'Creative Animated Videos',
  'Social Media Posters & Marketing',
  'Advertisement Video Creation',
  'AI Chatbots & WhatsApp Automation',
  'AI-Powered Social Media Automation',
  'AI Email & Call Automation',
  'AI Sales & Operations Automation',
  'Logo Pre-Design',
  'Trademark Club Registration Assistance',
  'Other / Custom Inquiry'
];

const fadeUpVariant = {
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setIsSubmitting(false);
    }, 1500);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in your services!");
    window.open(`https://wa.me/8652429808?text=${message}`, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section ref={ref} className="container py-12 pb-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={fadeLeft(0.2)}>
              <h1 className="text-4xl md:text-5xl font-playfair mb-6">
                Contact <span className="text-gold">Us</span>
              </h1>
              <p className="text-gray-700 max-w-2xl mb-10">
                Get in touch with us to discuss your project requirements or inquire about our services. We're here to help bring your vision to life.
              </p>
            </motion.div>

            <motion.div className="hidden md:block h-[200px]" variants={fadeUpVariant}>
              <Suspense
                fallback={
                  <div className="h-full flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-t-gold border-b-gold rounded-full animate-spin"></div>
                  </div>
                }
              >
                <ThreeCanvas>
                  <Diamond position={[0, 0, 0]} scale={1.5} rotationSpeed={0.8} />
                </ThreeCanvas>
              </Suspense>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12 bg-purple-light/5">
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}

              <ContactForm serviceOptions={serviceOptions} />
              {/* Contact Info */}
              <motion.div variants={fadeRight(0.2)} className='flex flex-col justify-center'>
                <h2 className="text-2xl font-playfair mt-2 mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="h-5 w-5 text-gold" />,
                      title: 'Phone/WhatsApp',
                      text: '+91 8652429808',
                      href: 'tel:8652429808',
                      note: 'Available Mon-Sat, 10 AM - 7 PM',
                    },
                    {
                      icon: <Mail className="h-5 w-5 text-gold" />,
                      title: 'Email',
                      text: 'siyajewels04@gmail.com',
                      href: 'mailto:siyajewels04@gmail.com',
                      note: 'We respond within 24 hours',
                    },
                    {
                      icon: <Instagram className="h-5 w-5 text-gold" />,
                      title: 'Instagram',
                      text: '@official_harishsoni',
                      href: 'https://instagram.com/official_harishsoni',
                      note: 'Follow us for latest updates',
                    },
                    {
                      icon: <MapPin className="h-5 w-5 text-gold" />,
                      title: 'Office Location',
                      text: 'Mumbai, Maharashtra, India',
                      note: 'Meetings by appointment only',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-gray-700 hover:text-gold transition-colors">
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-gray-700">{item.text}</p>
                        )}
                        <p className="text-gray-500 text-sm mt-1">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button onClick={openWhatsApp} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2 h-5 w-5 group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a0.5.0.5 0 0 0 1 0V9a0.5.0.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a0.5.0.5 0 0 0 0-1h-1a0.5.0.5 0 0 0 0 1"></path>
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-3xl font-playfair text-center mb-12" variants={fadeUpVariant}>
              Frequently Asked Questions
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 pb-5 transition-all duration-300 hover:border-gold"
                  variants={fadeUpVariant}
                >
                  <h3 className="font-playfair font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'While we\'re based in Mumbai, we work with clients globally...',
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'Project timelines vary based on the scope and complexity...',
  },
  {
    question: 'Do you provide revisions for designs?',
    answer: 'Yes, our packages include a specific number of revision rounds...',
  },
  {
    question: 'How do we get started with a project?',
    answer: 'The process begins with a consultation to understand your requirements...',
  },
  {
    question: 'Do you offer maintenance services after project completion?',
    answer: 'Yes, we provide ongoing maintenance and support packages...',
  },
];

export default Contact;
