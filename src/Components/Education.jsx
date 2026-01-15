import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor of Computer Application",
    institution: "Maulana Abul Kalam Azad University [MAKAUT]",
    description: "Focused on Data Structures, Algorithms and Web/App Development"
  },
  {
    degree: "Computer Application & Office Management",
    institution: "Netaji Subhash Open University [NSOU]",
    description: "Fosued on Programming Languages and Office Management"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-500">Education</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-blue-600/20 dark:border-blue-500/20 ml-4 md:ml-10 space-y-12">
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-1 bg-blue-600 dark:bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FaGraduationCap size={14} />
              </div>

              {/* Card Content */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300 max-w-4xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        <FaCalendarAlt /> {item.year}
                    </div>
                </div>
                
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{item.institution}</h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-md">
                   {item.grade}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;