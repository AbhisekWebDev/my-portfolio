import { motion } from 'framer-motion'
import React from 'react'

function AboutMe() {
  return (
    <section id="about" className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} 
          // viewport={{ once: true }}
          // Glassmorphism classes: backdrop-blur, semi-transparent bg, border
          className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-slate-700 shadow-xl"
        >
          <div className="text-center mb-8">
             <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Introduction</span>
             <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">About Me</h2>
          </div>

          <div className="space-y-6 text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                👋 <span className="font-semibold text-gray-900 dark:text-white">Hi there!</span> I am a full-stack developer passionate about the <span className="text-blue-500 font-bold">Software Engineering</span>, App development and MERN stack.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I love blending technology with art — seamlessly moving from coding complex algorithms to photography and sketching. 
                I believe in writing clean code and building user interfaces that are not just functional, but delightful to use.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                 {["Problem Solver", "Creative", "Tech Enthusiast", "Learner"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">
                        # {tag}
                    </span>
                 ))}
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe