import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import videoBg from "/backgroundvideo.mp4"; // ✅ Make sure this path is correct

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    whileHover={{
      rotateX: 10,
      rotateY: 10,
      scale: 1.05,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    }}
    style={{
      width: "280px",
      background: "rgba(255, 255, 255, 0.08)",
      borderRadius: "20px",
      padding: "20px",
      backdropFilter: "blur(8px)",
      boxShadow: "0 15px 25px rgba(0, 0, 0, 0.3)",
      color: "white",
      textAlign: "center",
    }}
  >
    <img
      src={image || "default-image.jpg"}
      alt={`education_by-${name}`}
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid white",
        margin: "0 auto",
        display: "block",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
      }}
    />
    <div style={{ marginTop: "15px" }}>
      <p style={{ fontSize: "16px", fontWeight: "600" }}>{name}</p>
      <p style={{ fontSize: "13px", color: "#ddd" }}>{year}</p>
      <p style={{ fontSize: "36px", margin: "10px 0" }}>"</p>
      <p style={{ fontSize: "18px", fontWeight: "500", color: "#fff" }}>
        {degree}
      </p>
      <p style={{ marginTop: "6px", color: "#ffd700", fontWeight: "500" }}>
        {branch}
      </p>
      <p style={{ marginTop: "4px", color: "#90ee90", fontWeight: "500" }}>
        {marks}
      </p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* ✅ BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.5)",
        }}
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ MAIN CONTENT OVER VIDEO */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          margin: "20px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
          color: "white",
          maxWidth: "900px",
          width: "95%",
        }}
      >
        {/* Title */}
        <motion.div
          variants={textVariant()}
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "white",
          }}
        >
          <p style={{ fontSize: "18px", color: "#ccc", letterSpacing: "1px" }}>
            Education Details...
          </p>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginTop: "10px" }}>
            Education.
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
            width: "100%",
          }}
        >
          {educations.map((education, index) => (
            <FeedbackCard key={education.name} index={index} {...education} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
