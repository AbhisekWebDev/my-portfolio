import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules"
import { motion } from "framer-motion"
import axios from 'axios'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const githubUsername = "AbhisekWebDev";
    const selectedRepos = ["Academic-Admin-Sys", "A.I.E.M.D-Project-GTTI", "JS-Weather-API"];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Professional placeholder images
                const projectImages = [
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
                ];

                const requests = selectedRepos.map(repo => axios.get(`https://api.github.com/repos/${githubUsername}/${repo}`));
                const responses = await Promise.all(requests);

                const data = responses.map((res, index) => ({
                    title: res.data.name.replace(/-/g, " "),
                    desc: res.data.description || "A cool project built with modern tech.",
                    img: projectImages[index % projectImages.length],
                    tags: [res.data.language, `⭐ ${res.data.stargazers_count}`].filter(Boolean),
                    link: res.data.html_url,
                    homepage: res.data.homepage
                }))
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div id="projects" className="w-full px-4 py-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }} 
                    // viewport={{ once: true }} 
                    // variants={fadeUp}
                    className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Projects</span>
                </motion.h1>

                {loading ? (
                    <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div></div>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
                        className="!pb-14 px-4"
                    >
                        {projects.map((p, i) => (
                            <SwiperSlide key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    // CHANGED: Reduced rounded corners (rounded-2xl) and shadow for a tighter look
                                    className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group h-full flex flex-col max-w-sm mx-auto"
                                >
                                    <a href={p.link} target="_blank" rel="noreferrer" className="block relative h-40 overflow-hidden">
                                        {/* CHANGED: Fixed height (h-40) to make image area smaller */}
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white text-sm font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">View Code</span>
                                        </div>
                                    </a>

                                    {/* CHANGED: Reduced padding from p-6 to p-4 */}
                                    <div className="p-4 flex flex-col flex-1">
                                        {/* CHANGED: Reduced title size to text-lg */}
                                        <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2 capitalize">{p.title}</h3>

                                        {/* CHANGED: Added text-xs and line-clamp-3 for compact description */}
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-3 leading-relaxed">{p.desc}</p>

                                        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                                            {p.tags.map((t, j) => (
                                                // CHANGED: Smaller tags (text-[10px] px-2)
                                                <span key={j} className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-[10px] font-semibold border border-blue-100 dark:border-blue-800">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex justify-between border-t border-gray-100 dark:border-slate-700 pt-3">
                                            {/* CHANGED: Smaller footer links (text-xs) */}
                                            <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                <FaGithub className="text-sm" /> GitHub
                                            </a>
                                            {p.homepage && (
                                                <a href={p.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                    Live Demo <FaExternalLinkAlt className="text-[10px]" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    )
}
export default Projects