import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Send Email to Admin (Yourself)
    emailjs
      .send(
        "service_yod03bs", // Your Service ID
        "template_pxudo3p", // Your Admin Template ID
        {
          from_name: form.name,
          from_email: form.email,
          to_email: "sunkarasohansatya@gmail.com", // Your email
          message: form.message,
        },
        "KD9IV42InjePH-5Aw" // Your Public Key
      )
      .then(() => {
        // ✅ Send Auto-Reply to User
        emailjs
          .send(
            "service_yod03bs", // Your Service ID
            "template_y4rqg5w", // Your Auto-Reply Template ID
            {
              to_name: form.name,
              to_email: form.email, // Send to the user's email
            },
            "KD9IV42InjePH-5Aw" // Your Public Key
          )
          .then(() => {
            setLoading(false);
            alert(`Thank you, ${form.name}! Your message has been sent.`);
            setForm({ name: "", email: "", message: "" });
          })
          .catch((error) => {
            console.error("Error sending auto-reply:", error);
            alert("Message sent, but auto-reply failed.");
          });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex flex-col xl:flex-row gap-10 overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      {/* Contact Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-6 sm:p-8 rounded-2xl"
      >
        <p className="text-gray-400 text-sm sm:text-base uppercase">Get in touch</p>
        <h3 className="text-white text-3xl sm:text-4xl font-bold">Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6 sm:gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 text-white rounded-lg outline-none border-none font-medium w-full"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 text-white rounded-lg outline-none border-none font-medium w-full"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 text-white rounded-lg outline-none border-none font-medium w-full"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-6 sm:py-4 sm:px-8 rounded-lg outline-none w-full sm:w-auto text-white font-bold shadow-md shadow-primary hover:bg-gray-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth 3D Model Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 h-[300px] sm:h-[400px] md:h-[500px] xl:h-auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
