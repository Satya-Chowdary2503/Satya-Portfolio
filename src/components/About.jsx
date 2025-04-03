import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      exit="exit"
      className="container mx-auto px-4 py-16 flex flex-col items-center"
    >
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-lg uppercase tracking-wider text-gray-400`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-4xl font-extrabold text-white`}>
          Overview
        </h2>
      </motion.div>

      {/* Introduction Text - Full Page Alignment */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[20px] md:text-[22px] leading-[35px] text-justify font-medium mt-10 max-w-5xl px-8 md:px-20"
      >
        Welcome to my website! I'm a passionate full-stack software developer
        with expertise in <span className="text-yellow-400 font-bold">TypeScript, JavaScript</span>,
        and frameworks like <span className="text-blue-400 font-bold">React, Node.js, and Three.js</span>.
        As a fresher, I am enthusiastic about learning and building scalable, user-friendly applications 
        that make a difference. I thrive on collaborating with clients to craft efficient solutions 
        that solve real-world problems.
        <br /><br />
        Alongside my development skills, I am also a 
        <span className="text-red-400 font-bold"> video editing enthusiast</span>,
        skilled in <span className="text-pink-400 font-bold">After Effects and Premiere Pro</span>,
        bringing creativity and precision to every project. 
        I am a huge fan of <span className="text-yellow-500 font-bold">Jr NTR</span> and take immense 
        inspiration from my parents, who encourage me to keep pushing the boundaries of what I can achieve.
        <br /><br />
        <span className="italic text-gray-300">Let's work together to turn your ideas into reality!</span>
      </motion.p>

      {/* Services Section */}
      <motion.div variants={staggerContainer} className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
