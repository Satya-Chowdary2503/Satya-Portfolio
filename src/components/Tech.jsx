import React from "react";
import { BallCanvas } from "./canvas"; // Ensure BallCanvas is correctly exported
import { SectionWrapper } from "../hoc"; // Ensure SectionWrapper exists
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Ensure styles exists

const Tech = () => {
  return (
    <>
      {/* Animated Section Heading - Centered */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-lg uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent`}>Familiar with</p>
        <h2 className={`${styles.sectionHeadText}`}>Tools</h2>
      </motion.div>

      {/* Technology Icons Section */}
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-6">
        {technologies.map((technology) => (
          <div key={technology.name} style={{ height: "5rem", width: "5rem" }}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

// If SectionWrapper is an HOC, use it. Otherwise, export Tech normally.
export default SectionWrapper ? SectionWrapper(Tech, "tech") : Tech;
