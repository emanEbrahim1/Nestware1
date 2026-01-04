// @ts-ignore
import React from 'react';
import { motion } from 'framer-motion';
import { StartupIllustration } from '../illustrations/PurpleBandIllustration';

const PurpleBand = () => {
  return (
    <section className="relative w-full">
      {/* The Purple Container */}
      <div className="bg-[#5A47FB] w-full h-auto md:h-[437px] rounded-tl-[150px] overflow-hidden relative flex justify-center">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col md:flex-row">
           
           {/* Illustration Container (Left/Center) */}
           <motion.div 
             className="relative w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center illustration-animate"
             initial={{ x: 0, y: 0 }}
             animate={{ 
               x: [-20, 20, -20],
               y: [0, -25, 0],
               rotate: [0, 2, -2, 0]
             }}
             transition={{ 
               duration: 5, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
           >
              {/* The illustration needs to be flipped vertically and rotated 180 as per original code to look right? 
                  Original code: rotate-[180deg] scale-y-[-100%]
              */}
              <div className="transform rotate-180 scale-y-[-1]">
                 <StartupIllustration />
              </div>
           </motion.div>

           {/* Text Content (Right) */}
           <div className="relative w-full md:w-1/2 p-8 md:p-0 md:pt-[155px] md:pl-0 flex flex-col items-start">
              <p className="font-ibm-plex text-[16px] leading-[22px] text-white max-w-[487px] mb-8">
                Whether you’re building a new product, growing your brand, or starting your career — we’re here to help you grow smarter, together.
              </p>

              <div className="flex gap-[8px] items-center">
                 {/* Explore Services Button */}
                 <button 
                   onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                   className="group relative h-[40px] w-[148px] flex items-center justify-start cursor-pointer"
                 >
                    <div className="absolute inset-0 bg-black"></div>
                    <span className="relative z-10 text-white font-ibm-plex text-[16px] ml-[15px]">Explore Services</span>
                 </button>

                 {/* Get in Touch Button */}
                 <button 
                   onClick={() => window.location.href = 'mailto:info@nestware.tech'}
                   className="group relative h-[40px] w-[148px] flex items-center justify-start cursor-pointer border border-black"
                 >
                    <span className="relative z-10 text-black font-ibm-plex text-[16px] ml-[29px]">Get in Touch</span>
                 </button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default PurpleBand;
