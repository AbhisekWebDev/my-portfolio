import React from 'react'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import abhiProPic from '../assets/abhiProPic.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
}

function Header() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Side: Text */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          className="text-center md:text-left order-2 md:order-1"
        >
          <motion.div variants={fadeUp} className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold mb-6">
            👋 Welcome to my portfolio
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 whitespace-nowrap">
              Abhishek Kumar
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-6 h-12">
            <Typewriter
              options={{
                strings: ['A Fullstack Developer', 'An App Developer', 'A Software Engineer'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </motion.div>

          <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 text-lg leading-relaxed">
            Passionate about creating modern, scalable, and user-friendly applications. Let’s bring ideas to life with clean code and innovative design.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
            <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition-all">
              Contact Me
            </a>
          </motion.div>

          {/* STATS SECTION (Reference: Developer X) */}
          <motion.div variants={fadeUp} className="pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center md:justify-start gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">6M+</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">3+</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">100%</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Commitment</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Image with GLOW (Reference: Jensen Omega) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          {/* The Glowing Ring Behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80">
             <img 
               src={abhiProPic} 
               alt="Abhishek" 
               fetchPriority="high" // crucial for LCP
               loading="eager"      // default, but good to be explicit for LCP
               className="w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative z-10"
             />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Header
