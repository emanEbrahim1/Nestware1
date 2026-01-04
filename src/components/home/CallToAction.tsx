// @ts-ignore
import React from 'react';
import { motion } from 'framer-motion';
import { HeroIllustration } from '../illustrations/HeroIllustration';

const CallToAction = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-20 pb-20">
      <motion.div 
        className="max-w-[1198px] mx-auto bg-[#EDEDED] pt-[92px] pb-[92px] rounded-tl-[150px] relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Startup 2 Illustration - Flying Animation */}
        {/* <motion.div
           className="hidden lg:block absolute left-[5%] top-[-50px] w-[300px] h-[300px] z-0"
           initial={{ x: 100, y: 0 }}
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
           <img 
             src="/image/mjz3vfsa-9tzt0df.png" 
             alt="" 
             className="w-full h-full object-contain opacity-20 rotate-180" 
           />
        </motion.div> */}

      <div className="flex flex-col items-center text-center relative z-10">
         
         {/* Sparkle Icon */}
         <motion.div 
           className="mb-4 text-[#FFD700]"
           animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
           </svg>
         </motion.div>

         <motion.h2 
           className="font-arvo text-[48px] md:text-[48px] text-[#212121] mb-[33px] leading-tight"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
         >
           Ready to start your journey?
         </motion.h2>
         
         <motion.div 
           className="flex flex-col sm:flex-row gap-[8px] justify-center items-center mt-[32px]"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.6 }}
         >
            {/* Explore Services Button (Filled) */}
            <motion.button 
              onClick={scrollToServices}
              className="group relative h-[48px] px-[15px] flex items-center justify-center cursor-pointer bg-[#212121] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <span className="text-white font-ibm-plex text-[16px]">Explore Services</span>
            </motion.button>

            {/* Get in Touch Button (Outline) */}
            <motion.button 
              onClick={() => window.location.href = 'mailto:info@nestware.tech'}
              className="group relative h-[48px] px-[28px] flex items-center justify-center cursor-pointer border border-[#212121] bg-transparent hover:bg-[#212121] hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <span className="text-[#212121] font-ibm-plex text-[16px] group-hover:text-white transition-colors duration-300">Get in Touch</span>
            </motion.button>
         </motion.div>
      </div>

      </motion.div>
    </section>
  );
};

export default CallToAction;
