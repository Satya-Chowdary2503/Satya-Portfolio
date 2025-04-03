import { motion } from "framer-motion";
import { styles } from "../styles"; // Ensure correct relative import
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
  className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
>
  {/* Left Gradient Indicator */}
  <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
    <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-400 to-transparent" />
  </div>

  {/* Hero Text */}
  <div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      Hello, I'm{" "}
      <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
        Satya
      </span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
      I craft visually stunning, high-performance websites and bring stories to life through cinematic video editing with After Effects & Premiere Pro.
    </p>
  </div>
</div>

      {/* Add Future Animations or 3D Models */}
      <ComputersCanvas />

      {/* Scroll Down Animation */}
{/* Scroll Down Animation */}
<div className="absolute bottom-10 w-full flex justify-center items-center">
  <a href="#about">
    <motion.div
      animate={{
        scale: [1, 1.1, 1], // Slight pulsing effect
        boxShadow: ["0px 0px 5px rgba(145, 94, 255, 0.2)", "0px 0px 15px rgba(145, 94, 255, 0.4)", "0px 0px 5px rgba(145, 94, 255, 0.2)"],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.2, // Slightly larger on hover
        boxShadow: "0px 0px 20px rgba(145, 94, 255, 0.6)", // Stronger glow on hover
      }}
      className="w-10 h-10 border-2 border-secondary rounded-full flex justify-center items-center p-2 shadow-lg bg-opacity-20 backdrop-blur-md"
    >
      <motion.div
        animate={{
          y: [0, 6, 0], // Moves downward slightly
          opacity: [1, 0.8, 1], // Subtle fading effect
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-4 h-4 flex justify-center items-center"
      >
        {/* Downward Arrow inside Circle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 text-secondary drop-shadow-md"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.div>
  </a>
</div>
    </section>
  );
};

export default Hero;