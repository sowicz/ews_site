import { motion } from "framer-motion";

export default function ChartLine() {
  return (
    <div className="w-fit p-8 h-fit flex flex-col items-center border-2 rounded-xl border-purple-300 bg-purple-100 shadow-inner shadow-purple-300">
      <div className="relative w-40 h-24">
        {/* Smooth Animated Line Path */}
        <svg
          className="absolute"
          viewBox="0 15 110 100"
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="190"
        >
          <motion.path
            d="M0,80 C5,70 20,40 40,60 S60,30 100,20"
            fill="none"
            stroke="#9333EA" /* Tailwind purple-700 */
            strokeWidth="2"
            initial={{ pathLength: 0 }} // Path starts as empty
            animate={{ pathLength: 1 }} // Animate to full length
            transition={{
              duration: 3, // Adjust the duration of the animation
              ease: "easeInOut", // Smooth easing effect
              repeat: Infinity, // Loop the animation
              repeatType: "reverse", // Play animation forward and backward
            }}
          />
        </svg>
      </div>
    </div>
  );
}
