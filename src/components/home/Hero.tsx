// @ts-ignore
import React from 'react';
import { motion } from 'framer-motion';
import { HeroIllustration } from '../illustrations/HeroIllustration';
import svgPaths from '../../imports/svg-rspfni7o73';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden scroll-mt-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative">
        
        {/* Decorative Floating Elements */}
        <motion.div 
          className="hidden lg:block absolute left-[-14%] top-[-120px] w-[250px] h-[350px] opacity-50 illustration-animate z-10 pointer-events-none"
          initial={{ opacity: 0, scale: 0, x: 0 }}
          animate={{ 
            opacity: 0.5, 
            scale: 1,
            x: [0, 15, 0]
          }}
          transition={{ 
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        >
           {/* Vector 296 (Arrow Shaft) */}
           <img src="/image/mjz49hnv-zq6imxz.svg" alt="" className="w-[101px] h-[89px] absolute top-[230px] left-0" />
           
           {/* Vector 297 (Arrow Head) */}
           <img 
             src="/image/mjz49hnx-q54l0mb.svg" 
             alt="" 
             className="w-[10px] h-[19px] absolute top-[309px] left-[94px]" 
           />
        </motion.div>

        <div className="flex flex-col items-center max-w-[1200px] mx-auto">
          {/* Illustration */}
          <div className="w-full mb-[51px] illustration-animate scale-100 md:scale-125">
             <HeroIllustration />
          </div>

          {/* Text Content */}
          <div className="text-center w-full max-w-[723px]">
            <h1 className="font-arvo text-[32px] md:text-[48px] leading-tight text-[#1b1b1b] mb-[11px]">
              Where Ideas Become Actions
            </h1>
            <p className="font-ibm-plex text-[16px] md:text-[18px] text-[#1a1a1a] mb-[25px]">
              Nestware helps you grow through technology, design, and mentorship.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToServices}
                className="group relative h-[40px] w-[148px] flex items-center justify-start cursor-pointer"
              >
                 <div className="absolute inset-0 bg-[#5A47FB]"></div>
                 <span className="relative z-10 text-white font-ibm-plex text-[16px] ml-[15px]">Explore Services</span>
              </button>

              <button 
                onClick={() => window.location.href = 'mailto:info@nestware.tech'}
                className="group relative h-[40px] w-[148px] flex items-center justify-start cursor-pointer border border-[#5A47FB]"
              >
                 <span className="relative z-10 text-[#5A47FB] font-ibm-plex text-[16px] ml-[29px]">Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
