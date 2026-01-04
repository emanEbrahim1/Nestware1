import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestimonialDecoration, TestimonialCardBackground, TestimonialSectionBackground } from '../illustrations/TestimonialIllustrations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Nestware has elevated our entire development process. Their software solutions are robust, scalable, and their support team is outstanding. Best decision we made this year!",
    initials: "MC",
    name: "Michael Chen",
    title: "CTO, Digital Innovations Inc"
  },
  {
    id: 2,
    quote: "Nestware transformed our digital presence completely. Their attention to detail and commitment to excellence is unmatched. The team went above and beyond our expectations.",
    initials: "SJ",
    name: "Sarah Johnson",
    title: "CEO, TechVision Solutions"
  },
  {
    id: 3,
    quote: "The level of professionalism and technical expertise Nestware brings is exceptional. They delivered our project on time and exceeded all quality benchmarks. Highly recommended!",
    initials: "DM",
    name: "David Martinez",
    title: "Product Lead, Innovation Labs"
  },
  {
    id: 4,
    quote: "Partnering with Nestware was a game-changer for our business. Their innovative approach and seamless execution helped us scale faster than we ever imagined possible.",
    initials: "ER",
    name: "Emily Rodriguez",
    title: "Founder, StartupHub"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Drag state
  const [dragStart, setDragStart] = useState(0);

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden scroll-mt-[120px]" data-section="testimonials">
      {/* Background Vector */}
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[800px] -z-10">
        <TestimonialSectionBackground className="w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
           <h2 className="font-arvo text-[32px] md:text-[48px] text-[#2c2c2c]" data-section-heading="testimonials">
             What people are saying
           </h2>
        </motion.div>

        {/* Decorative Element (Desktop) */}
        <motion.div 
          className="hidden md:block absolute right-[15%] top-0 illustration-animate z-10"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
           <TestimonialDecoration className="w-[117px] h-[114px]" />
        </motion.div>

        {/* Draggable Carousel Container */}
        <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div 
                className="flex gap-4 md:gap-[16px] pl-[16px] w-max"
                drag="x"
                dragConstraints={{ right: 0, left: -((testimonials.length * 370) + (testimonials.length * 16)) }} 
                whileTap={{ cursor: "grabbing" }}
                animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
                style={{ x: 0 }} 
                transition={{ 
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={() => {
                  // Optional: Resume after a delay or keep paused
                  setTimeout(() => setIsPaused(false), 2000);
                }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
            >
                {/* Render items twice for seamless loop */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <motion.div 
                      key={`${testimonial.id}-${index}`} 
                      className="relative w-[300px] md:w-[370px] flex-shrink-0 h-[390px]"
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                       {/* Background */}
                       <div className="absolute inset-0">
                          <TestimonialCardBackground className="w-full h-full" />
                       </div>
                       
                       {/* Content */}
                       <div className="relative z-10 pt-[109px] px-[27px] flex flex-col h-full">
                          <p className="font-arimo text-[16px] leading-[24px] text-[#364153] mb-[71px] h-[120px] overflow-hidden">
                            "{testimonial.quote}"
                          </p>
                          
                          <div className="flex items-center gap-[16px]">
                             <div className="w-[64px] h-[64px] rounded-full bg-[#5A47FB] flex items-center justify-center text-white font-arimo text-[16px]">
                                {testimonial.initials}
                             </div>
                             <div className="flex flex-col">
                                <p className="font-arimo text-[16px] text-[#101828] font-bold">{testimonial.name}</p>
                                <p className="font-arimo text-[14px] text-[#4a5565]">{testimonial.title}</p>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
