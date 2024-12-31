import { motion } from "motion/react";

export default function ShadowChart() {
  return (
    <motion.div 
      initial={{ skewY: 12 }} 
      animate={{
        scale: [1, 1.1, 1] // Pulse effect: normal -> grow -> back
      }}
      transition={{
        duration: 4, // Duration for one pulse cycle
        repeat: Infinity, // Repeat forever
        ease: "easeInOut" // Smooth animation
      }}    
      className="mt-8 w-40 p-4 h-24 flex flex-col space-y-2 border-2 border-dashed rounded-xl
       border-gray-300 bg-gray-100 shadow-lg skew-y-12 animate-dash"
    >
      <div className="relative px-8">
        <div className="relative w-16 h-16 bg-gray-300 mt-auto rounded-full">
          <div className="absolute w-8 h-2 top-7 left-4 bg-gray-100 mt-auto rounded-sm"> </div>
          <div className="absolute w-2 h-8 top-4 left-7 bg-gray-100 mt-auto rounded-sm"> </div>
        </div>
      </div>
    </motion.div>
  );
}