import React from 'react';
import { motion } from 'framer-motion';
import { StrategyIllustration } from '../illustrations/VisionIllustrations';

const Vision = () => {
  return (
    <section id="vision" className="relative w-full overflow-hidden bg-[#F9F9F9] scroll-mt-[120px]">
      {/* Purple Background Container */}
      <div className="bg-[#5A47FB] w-full rounded-t-[50px] md:rounded-t-[100px] overflow-hidden relative min-h-[500px] flex flex-col items-center pt-[40px] md:pt-[60px] pb-[50px]">
         
         {/* Title */}
         <motion.h2 
           className="font-arvo text-[28px] md:text-[40px] text-[#EDEDED] mb-[40px] text-center px-4" 
           data-section-heading="vision-mission"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           Building Tomorrow, Together
         </motion.h2>

         <div className="w-full max-w-[1440px] px-4 sm:px-6 flex flex-col md:flex-row relative">
            
            {/* Text Content (Left) */}
            <div className="relative w-full md:w-1/2 p-4 md:p-0 md:pl-[151px] flex flex-col items-start z-10">
               <div className="flex flex-col gap-[40px]" data-section="vision-mission">
                  {/* Vision Item */}
                  <motion.div 
                    className="flex flex-col gap-[16px] max-w-[507px] VisionHelper"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                     <h3 className="font-arvo text-[24px] md:text-[28px] text-[#212121]">Our Vision</h3>
                     <p className="font-ibm-plex text-[16px] md:text-[20px] text-[#EDEDED] leading-[28px]">
                       To be the go-to technology house that inspires growth and innovation across the MENA region.
                     </p>
                  </motion.div>
 
                  {/* Mission Item */}
                  <motion.div 
                    className="flex flex-col gap-[16px] max-w-[507px] MissionHelper"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                     <h3 className="font-arvo text-[24px] md:text-[28px] text-[#212121]">Our Mission</h3>
                     <p className="font-ibm-plex text-[16px] md:text-[20px] text-[#EDEDED] leading-[28px]">
                       We help businesses and people grow through smart software, branding, mentorship, product consulting, and talent connection — all under one roof.
                     </p>
                  </motion.div>
               </div>
            </div>
 
            {/* Illustration Content (Right) */}
            <div className="relative w-full md:w-1/2 min-h-[300px] flex items-center justify-center md:justify-start md:pl-[100px] mt-8 md:mt-0">
               {/* Vertical Dashed Line Divider */}
               <motion.div 
                 className="hidden md:block absolute left-0 top-0 h-[280px] w-[1px]"
                 initial={{ height: 0, opacity: 0 }}
                 whileInView={{ height: 280, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5 }}
               >
                  <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
                    <path d="M0.5 0V280" stroke="url(#paint0_linear_vision)" strokeDasharray="9 9" />
                    <defs>
                      <linearGradient id="paint0_linear_vision" x1="1" x2="1" y1="0" y2="280" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#272727" />
                        <stop offset="1" stopColor="#646092" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
               </motion.div>
 
               {/* Strategy Illustration */}
               <motion.div 
                 className="relative illustration-animate"
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 animate={{ x: [0, -10, 0] }}
                 transition={{ 
                    opacity: { duration: 0.8, delay: 0.6 },
                    scale: { duration: 0.8, delay: 0.6 },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                 }}
               >
                  <StrategyIllustration className="w-[250px] h-[250px] md:w-[320px] md:h-[320px]" />
               </motion.div>
            </div>
 
         </div>
      </div>
    </section>
  );
};

export default Vision;
