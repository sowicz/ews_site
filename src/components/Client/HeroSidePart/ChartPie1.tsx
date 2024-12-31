import { motion } from "motion/react";

export default function ChartPie1() {
  return (
    <motion.div initial={{ skewY: -6 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="box mt-2 w-fit p-4 h-fit flex flex-row space-x-4 border-2 rounded-xl
     border-sky-300 bg-sky-100 shadow-md -skew-y-6">
      {/* <div className="relative hover:rotate-180"> */}
      <motion.div  animate={{ rotate: [0, 360] }} 
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity, 
        }}
        className="relative">
        <div className="absolute w-8 h-8 right-8 bg-sky-100 mt-auto "></div>
        <div className=" w-16 h-16 bg-sky-300 mt-auto rounded-full "></div>
      </motion.div>
    </motion.div>
  )

}