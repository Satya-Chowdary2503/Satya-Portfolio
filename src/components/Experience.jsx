import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "linear-gradient(145deg, #1d1836 0%, #0a0615 100%)",
      color: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
    }}
    contentArrowStyle={{ 
      borderRight: "7px solid rgba(136, 96, 208, 0.5)",
      filter: "drop-shadow(0 0 5px rgba(136, 96, 208, 0.3))"
    }}
    date={experience.date}
    dateClassName="text-white/80 font-medium"
    iconStyle={{ 
      background: experience.iconBg,
      boxShadow: "0 0 15px rgba(136, 96, 208, 0.4)"
    }}
    icon={
      <motion.div 
        className="flex justify-center items-center w-full h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className="w-[55%] h-[55%] object-contain" 
          loading="lazy"
        />
      </motion.div>
    }
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h3 className="text-white text-[24px] font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        {experience.title}
      </h3>
      <p className="text-gray-300 text-[18px] font-semibold mt-1">
        @ {experience.company_name}
      </p>
      
      <ul className="mt-6 space-y-3">
        {experience.points?.map((point, idx) => (
          <motion.li 
            key={idx}
            className="text-gray-400 text-[15px] pl-3 leading-7 relative before:content-['▹'] before:absolute before:left-0 before:text-purple-400 before:font-bold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative z-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 to-transparent" />
      </div>

      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-lg uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent`}>
          Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mt-2`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(136, 96, 208, 0.2)">
          {experiences?.length > 0 ? (
            experiences.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience} 
                index={index} 
              />
            ))
          ) : (
            <motion.p 
              className="text-center text-gray-400 text-xl"
              variants={fadeIn("up", "spring", 0.5, 1)}
            >
              Currently writing the next chapter...
            </motion.p>
          )}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "experience");