import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.svg'; // Update path if needed

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    { text: 'Full Stack Developer', color: 'text-yellow-400' },
    { text: 'Data Scientist', color: 'text-green-300' },
    { text: 'Video Editor', color: 'text-red-300' }
  ];

  const toggleMenu = () => setIsActive(!isActive);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    const currentRoleText = roles[currentRole].text;
    
    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center py-5 fixed top-0 z-50 bg-gradient-to-r from-gray-900 to-black px-6 shadow-lg"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="Satya Logo" className="w-12 h-12 object-contain" />
          <div className="text-white text-[20px] font-bold cursor-pointer">
            <p className="text-gradient">
              Satya |{' '}
              <span className={`inline-block ${roles[currentRole].color}`}>
                {displayText}
                <span className="opacity-80">|</span>
              </span>
            </p>
          </div>
        </Link>

        {/* Social Media Icons */}
        <div className="hidden sm:flex flex-row gap-5 items-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-yellow-400 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-400 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-400 transition duration-300">
            <FaYoutube />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button 
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-80 z-40"
                onClick={toggleMenu}
              >
                <motion.div 
                  className="absolute top-24 right-6 w-64 bg-gray-900 p-6 rounded-xl shadow-2xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul className="flex flex-col gap-6">
                    <li>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center">
                        <FaGithub className="mr-3" /> GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center">
                        <FaLinkedin className="mr-3" /> LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center">
                        <FaInstagram className="mr-3" /> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center">
                        <FaYoutube className="mr-3" /> YouTube
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
