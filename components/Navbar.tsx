import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gen AI', href: '#gen-ai' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      
      // Calculate center of viewport to determine "active" area
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    // We let the native anchor tag handle the scrolling, 
    // supported by 'scroll-smooth' class in index.html
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={handleNavClick}
          >
            {/* Using an icon abstraction for the logo stones */}
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="absolute w-6 h-4 bg-pebble-600 rounded-full top-2 left-0 transform -rotate-12 opacity-90"></div>
                <div className="absolute w-5 h-3 bg-accent-500 rounded-full bottom-2 right-0 transform rotate-6 opacity-90"></div>
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none tracking-tight text-slate-900 group-hover:text-pebble-800 transition-colors">Pebbles</span>
                <span className="text-[0.65rem] font-semibold tracking-widest text-pebble-500 uppercase">Tech Studio</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`text-sm uppercase tracking-wide font-medium transition-all duration-200 relative
                    ${isActive ? 'text-accent-600' : 'text-slate-600 hover:text-accent-600'}
                  `}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent-600 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="bg-pebble-900 text-white px-5 py-2 rounded-full font-medium hover:bg-accent-600 transition-all hover:scale-105 shadow-lg shadow-pebble-900/20 text-sm cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden glass-nav absolute w-full border-b border-slate-200 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
             const isActive = activeSection === item.href.substring(1);
             return (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive 
                    ? 'text-accent-600 bg-slate-50' 
                    : 'text-slate-700 hover:text-accent-600 hover:bg-slate-50'
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            );
          })}
          <a
              href="#contact"
              className="block w-full text-center mt-4 bg-pebble-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors cursor-pointer"
              onClick={handleNavClick}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;