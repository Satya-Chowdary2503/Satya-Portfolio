import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import React from "react";
import { SectionWrapper } from "../hoc";
import { projectsInfo } from "../constants";

// Text animation
const textVariant = () => ({
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

// Fade-in animation
const fadeIn = (direction = "up", delay = 0.3) => ({
  hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900/60 backdrop-blur-lg p-3 rounded-2xl transition-all duration-300 ease-in-out w-full sm:w-[200px] md:w-[230px] border border-transparent hover:border-[3px] hover:border-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden flex flex-col"
    >
      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
        <div className="relative w-full h-[200px] overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:brightness-110"
          />
          <div className="absolute inset-0 flex justify-end p-3 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <button
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 hover:animate-pulse"
              aria-label={`View ${project.name} on GitHub`}
            >
              <img src={github} alt="github" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>
        <div className="mt-3 flex-grow flex flex-col">
          <h3 className="text-white text-lg font-bold truncate">{project.name}</h3>
          <p className="text-gray-300 text-xs mt-1 overflow-y-auto max-h-[3.5rem] pr-1">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] text-gray-300 bg-gray-800 px-1.5 py-0.5 rounded-md">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="relative z-10 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-[1.05]"
      >
        <source src="/backgroundvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
        {/* Heading Section */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <p className="text-xs sm:text-sm md:text-base tracking-widest font-medium bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent uppercase mb-2">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Projects
          </h2>
        </motion.div>

        {/* Description Paragraph */}
        <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-loose tracking-wider max-w-4xl mx-auto text-justify font-light">
          Below are some of my finest creations that reflect my experience in{" "}
          <span className="text-blue-400 font-semibold tracking-widest">Full-Stack Development</span>,{" "}
          <span className="text-green-400 font-semibold tracking-widest">Machine Learning</span>,{" "}
          <span className="text-yellow-400 font-semibold tracking-widest">Data Science</span>, and{" "}
          <span className="text-pink-500 font-semibold tracking-widest">Software Engineering</span>.{" "}
          These projects highlight my ability to craft{" "}
          <strong className="text-white font-bold tracking-wide">scalable solutions, intuitive interfaces, and impactful technologies</strong>.
        </p>

        {/* Project Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {projectsInfo.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
