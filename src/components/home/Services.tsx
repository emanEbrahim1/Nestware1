import React from 'react';
import { motion } from 'framer-motion';
import { 
  SoftwareServicesIllustration, 
  BrandingIllustration, 
  MentorshipIllustration, 
  ProductIllustration, 
  HiringIllustration 
} from '../illustrations/ServiceIllustrations';
import { Wand2, Users, Target, Briefcase, Code } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Software Services",
    description: "We craft scalable web & mobile apps designed to help your business grow faster",
    icon: <Code className="w-6 h-6 text-[#5A47FB]" />,
    illustration: <SoftwareServicesIllustration className="w-[250px] h-[250px]" />
  },
  {
    id: 2,
    title: "Branding",
    description: "We create brands that connect emotionally — from logo to full identity.",
    icon: <Wand2 className="w-6 h-6 text-[#5A47FB]" />,
    illustration: <BrandingIllustration className="w-[250px] h-[250px]" />
  },
  {
    id: 3,
    title: "Personal Mentorship",
    description: "We connect people starting new careers with experienced mentors — and help mentors give back",
    icon: <Users className="w-6 h-6 text-[#5A47FB]" />,
    illustration: <MentorshipIllustration className="w-[250px] h-[250px]" />
  },
  {
    id: 4,
    title: "Product Management Consulting",
    description: "We help teams build the right product — from idea to launch",
    icon: <Target className="w-6 h-6 text-[#5A47FB]" />,
    illustration: <ProductIllustration className="w-[250px] h-[250px]" />
  },
  {
    id: 5,
    title: "Tech Hiring",
    description: "We match startups with top-vetted tech and product talent.",
    icon: <Briefcase className="w-6 h-6 text-[#5A47FB]" />,
    illustration: <HiringIllustration className="w-[250px] h-[250px]" />
  }
];

const Services = () => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section id="services" className="relative py-20 bg-[#F9F9F9] overflow-hidden scroll-mt-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-arvo text-[32px] md:text-[48px] text-[#2c2c2c] text-center" 
          data-section-heading="our-services"
        >
          Our Services
        </motion.h2>
      </div>

      {/* Draggable Scroll Container */}
      <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div 
            className="flex gap-[34px] pl-[50px] w-max"
            drag="x"
            dragConstraints={{ right: 0, left: -((services.length * 400) + (services.length * 34)) }}
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
            {[...services, ...services].map((service, index) => (
                <motion.div 
                  key={`${service.id}-${index}`} 
                  className="flex flex-col items-start w-[400px] flex-shrink-0 cursor-pointer"
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                    {/* Illustration */}
                    <div className="w-[250px] h-[250px] mb-4 illustration-animate">
                        {service.illustration}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            {service.icon}
                            <h3 className="font-ibm-plex font-medium text-[24px] text-[#1b1b1b] whitespace-normal">
                                {service.title}
                            </h3>
                        </div>
                        <p className="font-ibm-plex text-[16px] text-[#1a1a1a] leading-[24px] whitespace-normal max-w-[394px]">
                            {service.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
