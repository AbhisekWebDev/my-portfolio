import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const MySocials = () => {
  
  // Column 1: Coding Platforms
  const codingSocials = [
    { 
      name: "GitHub", 
      icon: <FaGithub />, 
      link: "https://github.com/AbhisekWebDev", 
      color: "bg-gray-800 text-white hover:bg-gray-700 border-gray-700"
    },
    { 
      name: "LeetCode", 
      icon: <SiLeetcode />, 
      link: "https://leetcode.com/AbhisekWebDev", 
      color: "bg-yellow-600/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-600/20 border-yellow-600/20"
    }
  ];

  // Column 2: Professional & Social
  const networkSocials = [
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin />, 
      link: "https://linkedin.com/in/abhisek-kumar-2316801a7", 
      color: "bg-blue-600/10 text-blue-600 dark:text-blue-500 hover:bg-blue-600/20 border-blue-600/20"
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram />, 
      link: "https://instagram.com/yourusername", 
      color: "bg-pink-600/10 text-pink-600 dark:text-pink-500 hover:bg-pink-600/20 border-pink-600/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Connect</span> with me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* COLUMN 1: CODING */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <span className="text-blue-500">&lt;/&gt;</span> Coding Profiles
            </h3>
            {codingSocials.map((social, index) => (
              <motion.a 
                key={index}
                variants={itemVariants}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] shadow-sm ${social.color}`}
              >
                <div className="text-3xl">{social.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{social.name}</h4>
                  <p className="text-xs opacity-80">Check my code & stats</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* COLUMN 2: SOCIALS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <span className="text-blue-500">@</span> Social Network
            </h3>
            {networkSocials.map((social, index) => (
              <motion.a 
                key={index}
                variants={itemVariants}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] shadow-sm ${social.color}`}
              >
                <div className="text-3xl">{social.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{social.name}</h4>
                  <p className="text-xs opacity-80">Let's connect & chat</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MySocials;