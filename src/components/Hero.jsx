import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import yourPhoto from '../assets/photo.png';
import yourPho from '../assets/9999.jpg';

const useMediaQueryHook = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

const Hero = () => {
  const isMobile = useMediaQueryHook('(max-width: 768px)');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Desktop Layout */}
      {!isMobile && (
        <div className="flex w-full h-screen overflow-hidden">
          {/* LEFT: 3D TEXT BLOCK */}
          <div className="w-1/2 flex justify-center items-center px-8 z-20">
            <div
              className="w-full max-w-[500px] rounded-[20px] shadow-2xl transition-transform duration-700"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative bg-cover bg-center rounded-[20px] py-12 px-10 min-h-[360px] flex flex-col items-center justify-evenly transition-all duration-700 ease-out will-change-transform"
                style={{
                  backgroundImage: `url(${yourPho})`,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  const rotateX = (-y / 25).toFixed(2);
                  const rotateY = (x / 25).toFixed(2);
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <div className="bg-black/60 p-6 rounded-xl max-w-5xl mx-auto">
                  <h1 className="text-white text-[42px] sm:text-[48px] font-extrabold text-center leading-tight mb-4 tracking-wide">
                    Hello, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                      Satya
                    </span>
                  </h1>
                  <p className="text-white text-[20px] sm:text-[22px] text-center leading-8 font-medium mt-3">
                    I craft visually stunning, high-performance websites 
                    and bring stories to life through cinematic video editing
                    with After Effects & Premiere Pro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CANVAS BLOCK */}
          <div className="w-1/2 flex justify-center items-center z-10 -mt-10">
            <div style={{ width: '90%', height: '70%' }}>
              <ComputersCanvas />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <div className="absolute inset-0 top-[10%] max-w-7xl mx-auto px-5 flex flex-col items-center z-10">
          <div
            className="w-72 h-72 mt-12 mb-12 rounded-xl bg-black/60 p-[1px]"
            style={{ perspective: "1000px" }}
          >
            <div
              className="w-full h-full rounded-xl overflow-hidden transition-all duration-700 ease-out"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotateX = (-y / 25).toFixed(2);
                const rotateY = (x / 25).toFixed(2);
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              <img
                src={yourPhoto}
                alt="Satya"
                className="w-full h-full object-cover rounded-xl"
                loading="eager"
              />
            </div>
          </div>

          <motion.div className="text-center mt-6" style={{ y }}>
            <h1 className="text-white text-[36px] sm:text-[42px] font-extrabold leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                Satya
              </span>
            </h1>
            <motion.p
              className="mt-4 text-gray-300 text-[18px] sm:text-[20px] leading-snug tracking-wide max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I craft visually stunning, high-performance websites and bring stories to life through cinematic video editing with After Effects & Premiere Pro.
            </motion.p>
          </motion.div>
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 w-full flex justify-center items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#about" className="group">
          <motion.div
            className="w-12 h-12 border-2 border-secondary rounded-full flex justify-center items-center p-2 backdrop-blur-md bg-black/30 hover:bg-blue-500/20 transition-all"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="relative w-6 h-6"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-sm group-hover:blur-md transition-all" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-6 h-6 text-secondary relative z-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
