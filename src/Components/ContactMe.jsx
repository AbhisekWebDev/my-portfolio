import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaRegCommentDots, FaPaperPlane, FaCheckCircle } from "react-icons/fa"
import emailjs from '@emailjs/browser'

function ContactMe() {

  // Create a ref for the form
  const form = useRef()

  const [focusedField, setFocusedField] = useState("")

  // State for feedback
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // 4. Replace these with your actual IDs from EmailJS Dashboard
    const SERVICE_ID = "service_inuuez8"
    const TEMPLATE_ID = "template_ju0ac8i"
    const PUBLIC_KEY = "0xOS-MIHT_VVxj7Gp"

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text)
          setSubmitStatus('success')
          setIsSubmitting(false)
          e.target.reset() // Clear the form
          
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000)
      }, (error) => {
          console.log(error.text)
          setSubmitStatus('error')
          setIsSubmitting(false)
      })
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    // Added 'id="contact"' and dark mode background transition
    <section id="contact" className="w-full px-4 py-20 flex justify-center transition-colors duration-300">
      
      <motion.div
        // CHANGED: max-w-xl (narrower), dark mode colors, rounded-2xl
        className="max-w-xl w-full bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-slate-700"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          // CHANGED: text-gray-900 and dark:text-white
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Contact Me</span>
        </motion.h1>

        {/* Form */}
        <motion.form
          ref={form} 
          onSubmit={sendEmail}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-5" // Reduced gap slightly
        >
          {/* Name */}
          <div className="relative group">
            <motion.div
              animate={{
                color: focusedField === "name" ? "#2563eb" : "#9ca3af",
                scale: focusedField === "name" ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
            >
              <FaUser />
            </motion.div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              // CHANGED: Added dark mode classes for background, text, and border
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField("")}
              required
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <motion.div
              animate={{
                color: focusedField === "email" ? "#2563eb" : "#9ca3af",
                scale: focusedField === "email" ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
            >
              <FaEnvelope />
            </motion.div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              required
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <motion.div
              animate={{
                color: focusedField === "message" ? "#2563eb" : "#9ca3af",
                scale: focusedField === "message" ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 left-4 z-10"
            >
              <FaRegCommentDots />
            </motion.div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4" // CHANGED: Reduced from 5 to 4 to shorten box
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              required
            ></textarea>
          </div>

          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`w-full py-3.5 font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all mt-2 
              ${isSubmitting 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/30"
              }`}
          >
          {isSubmitting ? (
              "Sending..."
            ) : (
              <>
            <FaPaperPlane className="animate-pulse" />
            Send Message
            </>
            )}
          </motion.button>
          {/* Success / Error Messages */}
          {submitStatus === 'success' && (
             <motion.p 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="text-green-500 text-center font-medium flex items-center justify-center gap-2 mt-2"
             >
               <FaCheckCircle /> Message sent successfully!
             </motion.p>
          )}
          {submitStatus === 'error' && (
             <motion.p 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="text-red-500 text-center font-medium mt-2"
             >
               Oops! Something went wrong. Please try again.
             </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  )
}

export default ContactMe



