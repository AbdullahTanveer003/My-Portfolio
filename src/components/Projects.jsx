import React from 'react';
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "StudyGenie AI",
    description: "StudyGenie is an AI-assisted learning platform that helps learners plan study schedules, interact with a study chatbot, upload and manage study materials, generate quizzes, and track learning progress.",
    image: "/assets/project1.jpg",
    link: "https://github.com/AbdullahTanveer003/StudyGenie-AI",
    tags: ["React", "AI Integration", "MongoDB", "Node.js", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Shamas Al Kananah E-Commerce",
    description: "A feature-rich, high-performance mobile e-commerce platform custom-built using Flutter. Tailored specifically for the industrial and hardware retail sectors, offering a smooth native experience for purchasing electrical, plumbing, and hardware tools.",
    image: "/assets/project2.jpg",
    link: "https://github.com/AbdullahTanveer003/E-Commerce-App-Shamas-Al-Kananah",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"]
  },
  {
    id: 3,
    title: "Churn Predictor AI",
    description: "A machine learning solution designed to analyze customer behavior datasets and predict potential customer churn for businesses, enabling proactive retention strategies.",
    image: "/assets/project3.PNG",
    link: "https://github.com/AbdullahTanveer003/Churn-Predictor-AI",
    tags: ["Python", "Machine Learning", "Data Analysis", "Scikit-Learn"]
  }
];

export default function Projects() {
  return (
    <div className="py-20 lg:py-28 relative overflow-hidden" id="projects">
      {/* Dynamic Background Glow */}
      <div className="absolute right-0 bottom-1/4 w-[35%] h-[35%] bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm lg:text-base max-w-md mx-auto">
            A curation of my latest engineering challenges and products.
          </p>
        </motion.div>

        {/* Project Items Stack */}
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Left Side: Mockup Image Container */}
              <div className="w-full lg:w-[48%] relative group">
                {/* Glowing backing element */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-[2.3rem] blur opacity-40 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative p-2.5 bg-slate-950/40 backdrop-blur-md border border-slate-900/80 rounded-[2.2rem] overflow-hidden shadow-2xl">
                  <div className="relative aspect-video rounded-[1.8rem] overflow-hidden bg-slate-900">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>

              {/* Right Side: Information Block */}
              <div className="w-full lg:w-[46%] flex flex-col justify-center">
                {/* Index styling */}
                <span className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent select-none">
                  {String(project.id).padStart(2, "0")}
                </span>

                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mt-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-cyan-400/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm/6 lg:text-base/7 mt-6 font-normal">
                  {project.description}
                </p>

                {/* Code link CTA button */}
                <div className="mt-8 flex items-center gap-x-4">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-x-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 w-fit cursor-pointer group/btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>View Repository</span>
                    <TbBrandGithub size={18} className="group-hover/btn:translate-y-[-1px] transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
