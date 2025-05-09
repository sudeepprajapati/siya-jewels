
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-purple-dark text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className='flex flex-col items-start'>
            <Logo className="h-16 w-auto mb-4 " />
            <p className="text-gray-300 mb-4">
              Premium Jewellery and technology solutions for modern businesses.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/official_harishsoni"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:siyajewels@gmail.com"
                className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:9293432432"
                className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-gold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-gold text-xl mb-4">Services</h4>
            <ul className="space-y-3">
              {['Tech Development', 'Jewellery Solutions', 'Creative & Media', 'AI Automation', 'Branding & Legal'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-gold text-xl mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={18} className="text-gold mr-2 flex-shrink-0" />
                <a href="tel:9293432432" className="text-gray-300 hover:text-gold">
                  +91 9293432432
                </a>
              </li>
              <li className="flex">
                <Mail size={18} className="text-gold mr-2 flex-shrink-0" />
                <a href="mailto:siyajewels@gmail.com" className="text-gray-300 hover:text-gold">
                  siyajewels@gmail.com
                </a>
              </li>
              <li className="flex">
                {/* <Mail size={18} className="text-gold mr-2 flex-shrink-0" /> */}
                <a href="mailto:siyajewels@gmail.com" className="mt-4 px-4 py-2 rounded-lg bg-gold hover:bg-gold-dark text-whitez">
                  WhatsApp Us
                </a>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Siya Jewels Infotech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
