
import React, { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Send, MapPin, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Lazy load 3D components
const ThreeCanvas = lazy(() => import('../components/3d/ThreeCanvas'));
const Diamond = lazy(() => import('../components/3d/Diamond'));

const serviceOptions = [
  'Website Development',
  'E-commerce Development',
  'Mobile App Development',
  'Billing Software Development',
  'Jewelry CAD Designing',
  '3D Jewelry Rendering',
  'Hip-Hop Cuban Jewelry CAD Design',
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

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would normally send the form data to your backend
    // For now, we'll simulate a successful submission with a delay
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      setIsSubmitting(false);
    }, 1500);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in your services!");
    window.open(`https://wa.me/9293432432?text=${message}`, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header Section with 3D Element */}
        <section className="container py-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair mb-6">Contact <span className="text-gold">Us</span></h1>
              <p className="text-gray-700 max-w-2xl mb-10">
                Get in touch with us to discuss your project requirements or inquire about our services. We're here to help bring your vision to life.
              </p>
            </div>
            <div className="hidden md:block h-[200px]">
              <Suspense fallback={
                <div className="h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-t-gold border-b-gold rounded-full animate-spin"></div>
                </div>
              }>
                <ThreeCanvas >
                  <Diamond position={[0, 0, 0]} scale={1.5} rotationSpeed={0.8} />
                </ThreeCanvas>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Contact Details & Form */}
        <section className="py-12 bg-purple-light/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-gold">
                <h2 className="text-2xl font-playfair mb-6">Send Us a Message</h2>

                {formStatus.submitted && (
                  <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} animate-fade-in`}>
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-gold focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-10 rounded-md border border-gray-300 bg-background px-3 py-2 text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-base md:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project or inquiry..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-playfair mt-2 mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone/WhatsApp</h3>
                      <a href="tel:9293432432" className="text-gray-700 hover:text-gold transition-colors">
                        +91 9293432432
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Available Mon-Sat, 10 AM - 7 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <a href="mailto:siyajewels@gmail.com" className="text-gray-700 hover:text-gold transition-colors">
                        siyajewels@gmail.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                      <Instagram className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Instagram</h3>
                      <a
                        href="https://instagram.com/official_harishsoni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gold transition-colors"
                      >
                        @official_harishsoni
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Follow us for latest updates</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Office Location</h3>
                      <p className="text-gray-700">
                        Mumbai, Maharashtra, India
                      </p>
                      <p className="text-gray-500 text-sm mt-1">Meetings by appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Button onClick={openWhatsApp} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 group-hover:animate-bounce">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a0.5.0.5 0 0 0 1 0V9a0.5.0.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a0.5.0.5 0 0 0 0-1h-1a0.5.0.5 0 0 0 0 1"></path>
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-playfair text-center mb-12">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-5 transition-all duration-300 hover:border-gold"
                >
                  <h3 className="font-playfair font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "While we're based in Mumbai, we work with clients globally. Most of our services can be delivered remotely, and for local clients, we can arrange in-person meetings when needed."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on the scope and complexity. A simple website might take 2-3 weeks, while a complex e-commerce platform or custom CAD design collection could take 4-8 weeks. We'll provide you with a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide revisions for designs?",
    answer: "Yes, our packages include a specific number of revision rounds. For jewelry CAD designs, we typically offer 2-3 rounds of revisions to ensure you're completely satisfied with the final result."
  },
  {
    question: "How do we get started with a project?",
    answer: "The process begins with a consultation to understand your requirements. After that, we'll provide a proposal with scope, timeline, and pricing. Once approved, we'll begin the project with regular updates and feedback sessions throughout the development process."
  },
  {
    question: "Do you offer maintenance services after project completion?",
    answer: "Yes, we provide ongoing maintenance and support packages for websites, e-commerce platforms, and mobile apps. For jewelry designs, we offer storage and modification services for future production needs."
  }
];

export default Contact;
