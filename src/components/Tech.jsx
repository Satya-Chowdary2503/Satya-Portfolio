import React from "react";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* Section Title */}
      <motion.div variants={textVariant()} className="text-center">
        <p
          className={`${styles.sectionSubText} text-sm sm:text-lg uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent`}
        >
          Familiar with
        </p>
        <h2 className={`${styles.sectionHeadText} text-xl sm:text-2xl md:text-3xl`}>
          Tools
        </h2>
      </motion.div>

      {/* Scrolling Container */}
      <div className="overflow-hidden mt-10">
        <div className="scrolling-wrapper flex w-max hover:paused">
          {technologies.concat(technologies).map((tech, index) => (
            <Tilt
              key={`${tech.name}-${index}`}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.05}
              transitionSpeed={400}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="mx-4"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </Tilt>
          ))}
        </div>
      </div>

      {/* Custom Styles Inside Same File */}
      <style jsx="true">{`
        @keyframes scrollX {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling-wrapper {
          animation: scrollX 25s linear infinite;
        }

        .scrolling-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
