import { motion } from "framer-motion";
import svgPaths from "../../imports/svg-rspfni7o73";

export function HeroIllustration({ className = "" }: { className?: string }) {
  // Wave animation variants for individual letters
  const waveVariants: import("framer-motion").Variants = {
    initial: { y: "0%" },
    animate: (i: number) => ({
      y: ["0%", "-25%", "0%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.1, // Stagger effect
      },
    }),
  };

  return (
    <div className={`relative w-full aspect-[906/143] ${className}`}>
      {/* Vector 1: Left */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[10%] h-[74%]"
        custom={0}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg className="w-full h-full" viewBox="0 0 91 107" preserveAspectRatio="none">
          <path d={svgPaths.p11f6b580} fill="#5A47FB" stroke="black" />
        </svg>
      </motion.div>

      {/* Vector 2: Group2Vector Left */}
      <motion.div 
        className="absolute bottom-0 top-[26%] left-[12.71%] w-[10.38%]"
        custom={1}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg className="w-full h-full" viewBox="0 0 94 106" preserveAspectRatio="none">
           <path d={svgPaths.p32df4400} fill="#5A47FB" stroke="black" />
        </svg>
      </motion.div>

      {/* Vector 3 */}
      <motion.div 
        className="absolute bottom-0 top-[26%] left-[25.76%] w-[10%]"
        custom={2}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg className="w-full h-full" viewBox="0 0 91 106" preserveAspectRatio="none">
          <path d={svgPaths.p1071d0f0} fill="#5A47FB" stroke="black" />
        </svg>
      </motion.div>

      {/* Vector 4: Tall one */}
      <motion.div 
        className="absolute bottom-0 top-0 left-[38.48%] w-[6.68%]"
        custom={3}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg className="w-full h-full" viewBox="0 0 61 143" preserveAspectRatio="none">
           <defs>
             <mask id="hero-mask-1">
               <path d={svgPaths.p3a755a00} fill="white" />
             </mask>
           </defs>
           <path d={svgPaths.p3a755a00} fill="#5A47FB" />
           <path d={svgPaths.p35fbbb80} fill="black" mask="url(#hero-mask-1)" />
        </svg>
      </motion.div>

      {/* Vector 5: Center Right */}
      <motion.div 
        className="absolute bottom-0 top-[26%] left-[47.83%] w-[15.34%]"
        custom={4}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
          <svg className="w-full h-full" viewBox="0 0 139 107" preserveAspectRatio="none">
            <path d={svgPaths.p2af55b70} fill="#5A47FB" stroke="black" />
          </svg>
      </motion.div>

      {/* Vector 6: Right */}
      <motion.div 
        className="absolute bottom-0 top-[26%] left-[65.84%] w-[10.65%]"
        custom={5}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg className="w-full h-full" viewBox="0 0 97 106" preserveAspectRatio="none">
          <path d={svgPaths.p3e1b1d80} fill="#5A47FB" stroke="black" />
        </svg>
      </motion.div>

      {/* Vector 7: Far Right */}
      <motion.div 
        className="absolute bottom-0 top-[26%] left-[79.16%] w-[7.79%]"
        custom={6}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg className="w-full h-full" viewBox="0 0 71 106" preserveAspectRatio="none">
          <path d={svgPaths.p27a9e200} fill="#5A47FB" stroke="black" />
        </svg>
      </motion.div>

      {/* Vector 8: Group2Vector Right */}
      <motion.div 
        className="absolute bottom-0 top-[26%] left-[89.62%] w-[10.38%]"
        custom={7}
        variants={waveVariants}
        initial="initial"
        animate="animate"
      >
        <svg className="w-full h-full" viewBox="0 0 94 106" preserveAspectRatio="none">
          <path d={svgPaths.p13691280} fill="#5A47FB" stroke="black" />
        </svg>
      </motion.div>

    </div>
  );
}
