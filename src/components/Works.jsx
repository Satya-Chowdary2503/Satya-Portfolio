import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import React from "react";
import { SectionWrapper } from "../hoc";
import { projectsInfo } from "../constants";

// Function for text animation
const textVariant = () => ({
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

// Custom fade-in animation for project cards
const fadeIn = (direction = "up", delay = 0.3) => ({
  hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.2)}
      initial="hidden"
      animate="visible"
      className="bg-gray-900/60 backdrop-blur-lg p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.05] w-full sm:w-[280px] md:w-[360px]"
    >
      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute inset-0 flex justify-end p-3 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <img src={github} alt="github" className="w-6 h-6 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-xl font-bold">{project.name}</h3>
          <p className="text-gray-400 text-sm mt-2">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-md">
              {tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section>
      {/* Heading Section with Animation */}
      <motion.div variants={textVariant()} initial="hidden" animate="visible" className="text-center">
        <p className="text-lg uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          My Work
        </p>
        <h2 className="text-4xl font-extrabold text-white mt-2">
          Projects
        </h2>
      </motion.div>

      {/* Paragraph Section */}
      <p className="mt-6 text-gray-300 text-lg leading-relaxed w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-justify">
        Below are some of my best projects showcasing my expertise in{" "}
        <span className="text-blue-500 font-semibold">Full-Stack Development</span>,{" "}
        <span className="text-green-500 font-semibold">Machine Learning</span>,{" "}
        <span className="text-yellow-500 font-semibold">Data Science</span>, and{" "}
        <span className="text-red-500 font-semibold">Software Development</span>.  
        Each project represents my journey in building{" "}
        <strong>intelligent solutions, optimizing algorithms, and crafting seamless user experiences.</strong>
      </p>

      {/* Projects Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {projectsInfo.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
