import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import videoBg from "/backgroundvideo.mp4"; // Make sure path is correct

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full md:w-[280px] bg-white/10 rounded-[20px] p-5 backdrop-blur-md shadow-lg text-white"
  >
    <p className="text-[38px]">"</p>
    <div className="mt-1">
      <p className="text-[16px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="font-medium">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-xs mt-1 text-gray-300">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Overlay (optional for contrast) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* ✅ Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <motion.div variants={textVariant()} className="text-center mb-10">
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
