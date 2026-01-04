// @ts-ignore
import React from 'react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#5A47FB] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
             <img src="/image/mjz0gwt2-5vxio7g.svg" alt="Nestware" className="w-[243px] h-[39px] object-contain" />
             <p className="font-ibm-plex text-[14px] text-white/80 leading-[22px] max-w-[254px]">
               Empowering growth through technology, design, and mentorship.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
             <h3 className="font-ibm-plex font-semibold text-[16px]">Quick Links</h3>
             <div className="flex flex-col gap-3 text-[14px] text-white/80">
                <button onClick={() => scrollToSection('about')} className="text-left hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('vision')} className="text-left hover:text-white transition-colors">Vision</button>
                <button onClick={() => scrollToSection('process')} className="text-left hover:text-white transition-colors">Process</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-white transition-colors">Testimonials</button>
             </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
             <h3 className="font-ibm-plex font-semibold text-[16px]">Services</h3>
             <div className="flex flex-col gap-3 text-[14px] text-white/80">
                <span className="cursor-pointer hover:text-white transition-colors">Web Development</span>
                <span className="cursor-pointer hover:text-white transition-colors">UI/UX Design</span>
                <span className="cursor-pointer hover:text-white transition-colors">Consulting</span>
                <span className="cursor-pointer hover:text-white transition-colors">Mentorship</span>
             </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4">
             <h3 className="font-ibm-plex font-semibold text-[16px]">Contact Us</h3>
             <div className="flex flex-col gap-3 text-[14px] text-white/80">
                <a href="mailto:info@nestware.tech" className="hover:text-white transition-colors">info@nestware.tech</a>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                <div className="mt-2">
                   <p>123 Innovation Street</p>
                   <p>San Francisco, CA 94102</p>
                   <p>United States</p>
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="font-arimo text-[14px] text-white/80">
             © 2025 Nestware. All rights reserved.
           </p>
           
           {/* Social Icons */}
           <div className="flex gap-6 items-center">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/image/mjz0gwt2-azapsth.svg" className="w-4 h-4 object-contain" alt="Social" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/image/mjz0gwt2-bhrli40.svg" className="w-4 h-4 object-contain" alt="Social" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/image/mjz0gwt2-4w1iloe.svg" className="w-4 h-4 object-contain" alt="Social" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/image/mjz0gwt2-r17o97c.svg" className="w-4 h-4 object-contain" alt="Social" />
              </a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
