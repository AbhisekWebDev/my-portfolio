import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

function Footer() {
  return (
    // CHANGED: Added bg-opacity (/80), backdrop-blur-lg, and z-index
    <footer className="w-full relative z-10 bg-white/70 dark:bg-[#0b1120]/80 backdrop-blur-lg border-t border-gray-200/50 dark:border-slate-700/50 py-12 px-4 transition-colors duration-300">
      
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Brand */}
        <div>
          {/* Added gradient text for a more premium look */}
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block">
            AK
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
            Building digital experiences with clean code and creative design.
          </p>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Follow Me</h2>
          <ul className="space-y-3">
            {[
                { icon: <FaInstagram />, text: "Instagram", color: "hover:text-pink-500" },
                { icon: <FaFacebook />, text: "Facebook", color: "hover:text-blue-600" },
                { icon: <FaTwitter />, text: "Twitter", color: "hover:text-sky-400" }
            ].map((item, idx) => (
                <li key={idx} className={`flex items-center gap-2 justify-center md:justify-start cursor-pointer text-gray-600 dark:text-gray-400 transition-colors duration-200 font-medium ${item.color}`}>
                    <span className="text-lg">{item.icon}</span> {item.text}
                </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm font-medium">
            {['Software Development', 'Web Development', 'MERN Stack', 'API Design'].map(s => (
                <li key={s} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer hover:translate-x-1 duration-200 block">
                    {s}
                </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Location</h2>
          <div className="flex justify-center md:justify-start items-start gap-2 text-gray-600 dark:text-gray-400 text-sm font-medium">
              <FaMapMarkerAlt className="text-lg text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0" />
              <p>
                Kolkata, West Bengal, India
              </p>
          </div>
        </div>
      </motion.div>

      {/* Copyright - Added lighter border */}
      <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-slate-700/50 text-center text-sm text-gray-500 dark:text-gray-500 font-medium">
        © 2025 Abhisek Kumar. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer