import React from 'react';
import { motion } from 'framer-motion';
import { AboutIllustration, TeamCodingIllustration, Group32Illustration } from '../illustrations/AboutIllustrations';

const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden scroll-mt-[120px]">
      <div className="max-w-[920px] mx-auto px-4 sm:px-6 relative flex flex-col items-center">
        
        {/* Title */}
        <motion.h2 
          className="font-arvo text-[32px] md:text-[48px] text-[#1b1b1b] text-center mb-12 md:mb-[60px] relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-section-heading="about-nestware"
        >
          About Nestware
        </motion.h2>

        {/* Main Content Area */}
        <div className="relative w-full flex flex-col md:flex-row justify-between items-start z-20 content-stretch">
          
          {/* Vertical Dashed Line - Centered */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[302px]"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 302, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
               <path d="M0.5 0V302" stroke="url(#paint0_linear_about)" strokeDasharray="9 9" />
               <defs>
                 <linearGradient id="paint0_linear_about" x1="1" x2="1" y1="0" y2="302" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#272727" />
                   <stop offset="1" stopColor="#646092" stopOpacity="0" />
                 </linearGradient>
               </defs>
            </svg>
          </motion.div>

          {/* Left Column */}
          <motion.div 
            className="relative w-full md:w-[394px] mb-12 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             {/* Rocket Illustration - Floating Left */}
             <motion.div 
               className="absolute -top-[140px] -left-[60px] md:-left-[80px] pointer-events-none hidden md:block"
               animate={{ x: [0, -15, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <Group32Illustration className="rotate-180 scale-y-[-1] w-[115px] h-[116px]" />
             </motion.div>
             {/* Mobile Rocket */}
             <motion.div 
               className="md:hidden flex justify-center mb-6"
               animate={{ x: [0, -15, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <Group32Illustration className="rotate-180 scale-y-[-1] w-[80px] h-[80px]" />
             </motion.div>

             <h3 className="font-ibm-plex font-medium text-[24px] md:text-[32px] text-[#1b1b1b] mb-[17px] text-center md:text-left">
               Our approach to growth
             </h3>
             <p className="font-ibm-plex text-[16px] text-[#1a1a1a] leading-[24px] text-center md:text-left">
               At Nestware, we believe growth starts with the right foundation. We’re a technology house built to help startups and individuals turn ideas into impact — through smart software, thoughtful design, and real human mentorship.
             </p>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="relative w-full md:w-[388px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             {/* Lightbulb Illustration - Floating Right */}
             <motion.div 
               className="absolute -top-[140px] -right-[60px] md:-right-[80px] pointer-events-none hidden md:block"
               animate={{ x: [0, -15, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             >
                <AboutIllustration className="transform rotate-[14deg] w-[99px] h-[102px]" />
             </motion.div>
             {/* Mobile Lightbulb */}
             <motion.div 
               className="md:hidden flex justify-center mb-6 mt-8"
               animate={{ x: [0, -15, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             >
                <AboutIllustration className="transform rotate-[14deg] w-[70px] h-[72px]" />
             </motion.div>

             <h3 className="font-ibm-plex font-medium text-[24px] md:text-[32px] text-[#1b1b1b] mb-[17px] text-center md:text-left">
               Collaboration & Growth
             </h3>
             <p className="font-ibm-plex text-[16px] text-[#1a1a1a] leading-[24px] text-center md:text-left">
               Our team brings together engineers, designers, and product thinkers who care about solving problems that matter.
             </p>
          </motion.div>

        </div>

        {/* Bottom Illustration - Team Coding */}
        <motion.div 
          className="mt-12 md:mt-[40px] relative z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
           <TeamCodingIllustration className="w-[224px] h-[224px]" />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
