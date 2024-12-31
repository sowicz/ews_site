import { motion } from "motion/react";

export default function ChartBars1() {
  return (
    <motion.div initial={{ skewY: -6 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="mt-10 w-36 p-4 h-24 flex flex-row space-x-4 border-2 rounded-xl border-yellow-300 bg-yellow-100 
      shadow-lg -skew-y-6">
      <motion.div 
        animate={{
          height: ["2rem", "1.4rem", "2rem"], // Wave effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.2, // Delay between repeat cycles
        }}
        className="w-4 h-8 bg-yellow-300 mt-auto rounded-sm"></motion.div>
      <motion.div 
        animate={{
          height: ["3.8rem", "3rem", "3.8rem"], // Wave effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.2,
          delay: 0.5, // Stagger the animation delay for the second bar
        }}      
        className="w-4 h-12 bg-yellow-300 mt-auto rounded-sm"> </motion.div>
      <motion.div 
        animate={{
          height: ["3.5rem", "2.5rem", "3.5rem"], // Wave effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.2,
          delay: 1.5, // Stagger the animation delay for the third bar
        }}        
        className="w-4 h-10 bg-yellow-300 mt-auto rounded-sm"> </motion.div>
      <motion.div 
        animate={{
          height: ["3.8rem", "2.8rem", "3.8rem"], // Wave effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.2,
          delay: 2, // Stagger the animation delay for the third bar
        }}         
        className="w-4 h-16 bg-yellow-300 mt-auto rounded-sm"> </motion.div>
    </motion.div>
  )

}