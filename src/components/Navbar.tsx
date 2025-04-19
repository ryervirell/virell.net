import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold tracking-tighter">
          <Link href="/" className={`${scrolled ? 'text-black' : 'text-white'}`}>VIRELL</Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Collections', 'Shop', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-gray-500 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="#cart" 
            className={`transition-colors hover:text-gray-500 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            <ShoppingBag size={20} />
          </Link>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={scrolled ? 'text-black' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-black' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {['Collections', 'Shop', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black text-sm tracking-wide font-medium hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;