// @ts-ignore
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NestwareLogo } from '../icons/NestwareLogo';
import svgPaths from '../../imports/svg-rspfni7o73';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Vision', href: '#vision' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[142px]">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
             <div className="transition-transform duration-500 group-hover:rotate-[360deg]">
               <NestwareLogo className="w-[28px] h-[30px] text-[#1A1A1A]" />
             </div>
          </div>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-[21px]">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-[16px] leading-[24px] text-[#1A1A1A] hover:text-[#5A47FB] font-ibm-plex transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#5A47FB] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => window.location.href = 'mailto:info@nestware.tech'}
              className="group relative h-[36px] w-[109px] flex items-center justify-center"
            >
               {/* Button Background SVG */}
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 109 36" fill="none" preserveAspectRatio="none">
                  <path 
                    d={svgPaths.p373fe740} 
                    fill="#1A1A1A" 
                    className="transition-colors duration-300 group-hover:fill-[#5A47FB]"
                  />
               </svg>
               <span className="relative z-10 text-white font-arimo text-[14px]">Get in Touch</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1A1A1A] hover:text-[#5A47FB] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 h-screen absolute w-full">
          <div className="px-4 pt-8 pb-3 space-y-6 flex flex-col items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block text-2xl font-ibm-plex text-[#1A1A1A] hover:text-[#5A47FB]"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                window.location.href = 'mailto:info@nestware.tech';
                setIsOpen(false);
              }}
              className="mt-8 px-8 py-3 bg-[#1A1A1A] text-white rounded-full font-arimo text-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
