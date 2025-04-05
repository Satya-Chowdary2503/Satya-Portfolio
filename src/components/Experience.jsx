import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "linear-gradient(145deg, #1d1836 0%, #0a0615 100%)",
      color: "#fff",
      borderRadius: "16px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "20px 25px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid rgba(136, 96, 208, 0.6)",
      filter: "drop-shadow(0 0 6px rgba(136, 96, 208, 0.5))",
    }}
    date={
      <span style={{ padding: "2px 10px", background: "#262040", borderRadius: "6px", fontSize: "14px" }}>
        {experience.date}
      </span>
    }
    iconStyle={{
      background: experience.iconBg,
      boxShadow: "0 0 15px rgba(136, 96, 208, 0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    icon={
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
        loading="lazy"
      />
    }
  >
    <motion.div
      custom={index}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug">
        {experience.title}
      </h3>
      <p className="text-purple-300 text-sm sm:text-base font-semibold mt-1">
        @{experience.company_name}
      </p>
      <ul className="mt-4 space-y-2">
        {experience.points?.map((point, idx) => (
          <li
            key={idx}
            className="text-gray-300 text-sm sm:text-[15px] pl-5 leading-6 relative before:content-['▹'] before:absolute before:left-0 before:text-purple-400 before:font-bold transition-all hover:translate-x-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <motion.section
      className="relative z-10 px-4 sm:px-6 md:px-12 py-12 md:py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <div className="text-center">
        <motion.p
          className="text-sm sm:text-lg uppercase tracking-wider text-purple-300"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Journey
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Work Experience
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
        <VerticalTimeline lineColor="rgba(136, 96, 208, 0.2)">
          {experiences?.length > 0 ? (
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg sm:text-xl mt-10">
              Currently writing the next chapter...
            </p>
          )}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Experience, "experience");
