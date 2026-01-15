import React, { useState } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTheme } from '../context/ThemeContext' // Import the context we created

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme() // Use Global Theme

  // 2. Define links with their IDs
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ]

  const handleScroll = (id) => {
  const element = document.querySelector(id)
  if (!element) return

  setMenuOpen(false)

  // wait for menu close animation
  setTimeout(() => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, 300)
}

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      // Glassmorphism Header
      className='fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm'
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent cursor-pointer'
      >
        <a href="#home">AK</a>
      </motion.div>

      {/* Desktop Nav */}
      <div className='hidden md:flex items-center gap-8'>
        <ul className='flex gap-8 font-medium text-gray-600 dark:text-gray-300'>
          {navLinks.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -2, color: "#3b82f6" }}
              className='cursor-pointer transition-colors'
            >
              {/* Actual Link */}
              <a href={item.link}>{item.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className='cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-xl text-yellow-500 dark:text-blue-400 hover:shadow-lg transition-all'
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </motion.div>
      </div>

      {/* Mobile Controls */}
      <div className='flex items-center gap-4 md:hidden'>
        <button onClick={toggleTheme} className='text-xl text-yellow-500 dark:text-blue-400'>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button className='text-2xl text-gray-700 dark:text-white cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 text-center text-gray-700 dark:text-gray-200 font-medium">
              {navLinks.map((item) => (
                <motion.li
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  className="py-2 border-b border-gray-100 dark:border-slate-800 last:border-0"
                >
                  {/* Link closes menu on click */}
                  <button
                    onClick={() => handleScroll(item.link)}
                    className="block w-full py-2"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar