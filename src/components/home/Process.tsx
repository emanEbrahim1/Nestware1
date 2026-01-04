import React from 'react';
import { motion } from 'framer-motion';
import { DiscoverIllustration, BuildIllustration, GrowIllustration } from '../illustrations/ProcessIllustrations';
import svgPaths from '../../imports/svg-rspfni7o73';
import { Compass, Hammer, TrendingUp } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="relative py-20 bg-[#F9F9F9] overflow-hidden scroll-mt-[120px]">
      
      <div className="max-w-[858px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[66px] w-full flex flex-col items-center"
        >
           <h2 className="font-arvo text-[32px] md:text-[48px] text-[#212121] mb-[11px] text-center w-full" data-section-heading="design-build-grow">
             Design, Build And Grow
           </h2>
           <p className="font-ibm-plex text-[16px] md:text-[18px] text-[#212121] max-w-[569px] mx-auto leading-[22px] text-center">
             We help you navigate the full journey—from initial discovery to launch and beyond.
           </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="relative w-full">
            
            {/* Connecting Path 1 (Discover -> Build) */}
            <div className="hidden md:block absolute top-[268px] left-[136px] w-[633px] h-[161px] pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 633 161" preserveAspectRatio="none">
                  <path 
                    d={svgPaths.p3a8f1d00} 
                    stroke="#3A3A3A" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeDasharray="8 8" 
                    vectorEffect="non-scaling-stroke" 
                    fill="none" 
                  />
                </svg>
            </div>

            {/* Connecting Path 2 (Build -> Grow) */}
            <div className="hidden md:block absolute top-[704px] left-[178px] w-[592px] h-[77px] pointer-events-none z-0 -rotate-2">
                <div className="relative w-full h-full">
                   <div className="absolute inset-0">
                     <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 592 77">
                       <path 
                         d="M0.444214 77C156.52 -21 580.325 40 590.944 0" 
                         stroke="#3A3A3A" 
                         strokeWidth="2" 
                         strokeLinecap="round" 
                         strokeLinejoin="round" 
                         strokeDasharray="8 8" 
                         vectorEffect="non-scaling-stroke"
                       />
                     </svg>
                   </div>
                 </div>
            </div>

            {/* Step 1: Discover */}
            <motion.div 
              className="relative w-full mb-[120px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
               {/* Illustration - Floating Left */}
               <div className="hidden md:block absolute top-0 left-0 w-[314px] h-[312px] z-20 illustration-animate">
                  <DiscoverIllustration />
               </div>
               
               {/* Mobile Illustration */}
               <div className="md:hidden w-full max-w-[314px] h-[312px] mx-auto mb-6 illustration-animate">
                  <DiscoverIllustration />
               </div>

               {/* Card */}
               <div className="relative bg-white rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-full md:w-[660px] md:ml-[155px] p-8 md:pl-[171px] md:pr-[39px] md:py-[30px] min-h-[252px] z-10 flex flex-col justify-start hover:shadow-lg transition-shadow duration-300">
                   <div className="bg-[#0000001a] p-[12px] rounded-[12px] w-[48px] h-[48px] mb-[20px] flex items-center justify-center">
                      <img src="/image/mjz1ejfp-64iib2v.svg" className="w-[24px] h-[24px] object-contain" alt="Compass" />
                   </div>
                   <h3 className="font-arvo text-[32px] text-[#212121] mb-[15px]">Discover</h3>
                   <p className="font-geist text-[16px] text-[#A1A1A1] leading-[26px] max-w-[450px]">
                     We start by understanding you — your goals, challenges, and vision. Through research and discovery sessions, we uncover the insights that shape the right solution from day one.
                   </p>
               </div>
            </motion.div>

            {/* Step 2: Build */}
            <motion.div 
              className="relative w-full mb-[120px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               {/* Illustration - Floating Right */}
               <div className="hidden md:block absolute top-0 left-[512px] w-[339px] h-[326px] z-20 illustration-animate">
                  <BuildIllustration />
               </div>

               {/* Mobile Illustration */}
               <div className="md:hidden w-full max-w-[339px] h-[326px] mx-auto mb-6 illustration-animate">
                  <BuildIllustration />
               </div>

               {/* Card */}
               <div className="relative bg-white rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-full md:w-[660px] p-8 md:pl-[25px] md:pr-[185px] md:py-[34px] min-h-[252px] z-10 flex flex-col justify-start hover:shadow-lg transition-shadow duration-300">
                   <div className="bg-[#0000001a] p-[12px] rounded-[12px] w-[48px] h-[48px] mb-[20px] flex items-center justify-center">
                      <img src="/image/mjz1en1g-ptfrwg9.svg" className="w-[24px] h-[24px] object-contain" alt="Hammer" />
                   </div>
                   {/* Code Label Chip */}
            

                   <h3 className="font-arvo text-[32px] text-[#212121] mb-[15px]">Build</h3>
                   <p className="font-geist text-[16px] text-[#A1A1A1] leading-[26px] max-w-[450px]">
                     Our team brings strategy to life with design, development, and product thinking. We iterate fast, validate early, and make sure every detail aligns with your business goals
                   </p>
               </div>
            </motion.div>

            {/* Step 3: Grow */}
            <motion.div 
              className="relative w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
               {/* Illustration - Floating Left */}
               <div className="hidden md:block absolute top-0 left-0 w-[289px] h-[297px] z-20 illustration-animate">
                  <GrowIllustration />
               </div>

               {/* Mobile Illustration */}
               <div className="md:hidden w-full max-w-[289px] h-[297px] mx-auto mb-6 illustration-animate">
                  <GrowIllustration />
               </div>

               {/* Card */}
               <div className="relative bg-white rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-full md:w-[660px] md:ml-[168px] p-8 md:pl-[189px] md:pr-[21px] md:py-[30px] min-h-[252px] z-10 flex flex-col justify-start hover:shadow-lg transition-shadow duration-300">
                   <div className="bg-[#0000001a] p-[12px] rounded-[12px] w-[48px] h-[48px] mb-[20px] flex items-center justify-center">
                      <img src="/image/mjz1erhk-9gz3b86.svg" className="w-[24px] h-[24px] object-contain" alt="Trending Up" />
                   </div>
                   <h3 className="font-arvo text-[32px] text-[#212121] mb-[15px]">Grow</h3>
                   <p className="font-geist text-[16px] text-[#A1A1A1] leading-[26px] max-w-[450px]">
                     Once launched, we help you grow — analyzing performance, improving continuously, and finding new opportunities to engage, retain, and scale. Growth doesn’t stop at delivery. It starts there.
                   </p>
               </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Process;
