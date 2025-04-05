import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{ max: 45, scale: 1, speed: 450 }}
    className="xs:w-[250px] w-[200px] flex-shrink-0"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-xl hover:shadow-2xl transition duration-300"
    >
      <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[280px] flex flex-col items-center justify-evenly">
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-white text-lg md:text-xl font-bold text-center tracking-wide">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/gradient-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌟 Content Layer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        exit="exit"
        className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center bg-black/60 backdrop-blur-md"
      >
        {/* Header Section */}
        <motion.div variants={textVariant()} className="text-center">
          <p className="text-sm sm:text-base text-gray-400 tracking-widest uppercase mb-2">
            Introduction
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Overview
          </h2>
        </motion.div>

        {/* Introduction Text */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-base sm:text-lg md:text-xl leading-relaxed text-justify font-medium mt-6 sm:mt-10 max-w-5xl px-4 sm:px-8"
        >
          Welcome to my website! I'm a passionate{" "}
          <span className="text-yellow-400 font-semibold">Full-Stack Developer</span> skilled in{" "}
          <span className="text-yellow-300 font-bold">TypeScript</span> and{" "}
          <span className="text-yellow-300 font-bold">JavaScript</span>. I use frameworks like{" "}
          <span className="text-blue-400 font-bold">React</span>,{" "}
          <span className="text-blue-400 font-bold">Node.js</span>, and{" "}
          <span className="text-blue-400 font-bold">Three.js</span> to build scalable, user-friendly apps.
          <br /><br />
          I'm also currently pursuing a course in{" "}
          <span className="text-green-400 font-bold">Data Science</span> and loving the journey of learning it every day.
          <br /><br />
          I have a deep passion for{" "}
          <span className="text-red-400 font-bold">video editing</span>, working with{" "}
          <span className="text-pink-400 font-bold">After Effects</span> and{" "}
          <span className="text-pink-400 font-bold">Premiere Pro</span> to bring stories to life.
          <br /><br />
          I take inspiration from{" "}
          <span className="text-orange-300 font-bold">My Parents</span> — their constant encouragement pushes me to do my best and keep growing.
          <br /><br />
          <span className="italic text-gray-300 text-base sm:text-lg">
            Let's collaborate and bring ideas to life! I'm a huge fan of Jr NTR and enjoy watching his movies the most.
          </span>
        </motion.p>

        {/* Services Section */}
        <motion.div
          variants={staggerContainer}
          className="mt-16 flex flex-row gap-6 justify-start overflow-x-auto w-full pb-4 px-2 sm:px-4 scrollbar-hide"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
