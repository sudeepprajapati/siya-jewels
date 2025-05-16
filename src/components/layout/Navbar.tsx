import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../ui/Logo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const route = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full py-6 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md  shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex -mt-3 items-center">
          <Logo
            className={cn(
              'h-12 w-auto',
              isScrolled
                ? 'text-black'
                : 'text-gold'
            )}
          />
          {/* <img src="/siyajewels-logo.png" alt="" className='h-16' /> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className='text-sm font-medium relative animated-border px-2 py-1 text-black hover:text-gold-dark transition-colors duration-300'
            // className={cn(
            //   'text-sm font-medium relative animated-border px-2 py-1',
            //   (isScrolled || route !== '/') ? 'text-purple-dark' : 'text-white',
            //   'hover:text-gold transition-colors duration-300'
            // )}
            >
              {item.name}
            </Link>
          ))}
          {/* <Button size="sm" className="bg-gold hover:bg-gold-dark text-white">
            Get in Touch
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X
              className="text-purple-dark"
            // className={cn((isScrolled || route !== '/') ? 'text-purple-dark' : 'text-white')}
            />
          ) : (
            <Menu
              className="text-purple-dark "
            // className={cn((isScrolled || route !== '/') ? 'text-purple-dark' : 'text-white')}
            />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 p-4 flex flex-col space-y-3 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-4 py-2 text-purple-dark hover:bg-purple-light/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* <Button className="bg-gold hover:bg-gold-dark text-white w-full mt-2">
            Get in Touch
          </Button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
