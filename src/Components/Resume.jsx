import React from 'react'
import { motion } from "framer-motion"
import { Download } from "lucide-react"

function Resume() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="w-full px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        // viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-white overflow-hidden shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                Interested in working together?
            </h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10 text-lg">
                I'm open to new opportunities. Download my resume to see if we're a good fit!
            </p>

            <motion.a
                href="/Abhishek_Kumar_resume.pdf"
                download="Abhishek_Kumar_resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg shadow-lg hover:shadow-white/20 transition-all"
            >
                <Download className="w-5 h-5" />
                Download Resume
            </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default Resume