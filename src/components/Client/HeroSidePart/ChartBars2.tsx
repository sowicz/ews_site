import { motion } from "motion/react";


export default function ChartBars2() {
  return (
    <motion.div initial={{ skewY: -6 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="mt-6 w-40 p-4 h-24 flex flex-col space-y-2 border-2 rounded-xl border-emerald-300 bg-emerald-100
        shadow-md -skew-y-6">
      <motion.div
        animate={{
          width: ["8rem", "7rem", "8rem"], // Wave effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.2, // Delay between repeat cycles
        }}
        className="w-32 h-4 bg-emerald-400 mt-auto rounded-sm"
      ></motion.div>

      {/* Second bar */}
      <motion.div
        animate={{
          width: ["6rem", "5rem", "6rem"], // Wave effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.2,
          delay: 0.5, // Stagger the animation delay for the second bar
        }}
        className="w-24 h-4 bg-emerald-400 mt-auto rounded-sm"
      ></motion.div>

      {/* Third bar */}
      <motion.div
        animate={{
          width: ["4rem", "3rem", "4rem"], // Wave effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.2,
          delay: 1, // Stagger the animation delay for the third bar
        }}
        className="w-20 h-4 bg-emerald-400 mt-auto rounded-sm"
      ></motion.div>
      {/* <div className="w-12 h-4 bg-emerald-700 mt-auto rounded-sm"></div> */}
    </motion.div>
  )

}