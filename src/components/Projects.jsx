import React from 'react';
import { TbBrandGithub, TbDeviceMobile, TbCheck } from "react-icons/tb";
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "ElectroMart",
      subtitle: "Electronics E-Commerce Mobile App",
      technologies: ["React Native", "TypeScript", "Supabase", "React Navigation", "Context API"],
      description: "Developed a cross-platform e-commerce app with Supabase authentication and user profiles.",
      features: [
        "Product browsing",
        "Search",
        "Categories",
        "Wishlist",
        "Cart",
        "Order management",
        "Persistent sessions",
        "Order history",
        "Dark/light theme",
        "User profiles"
      ],
      image: "/assets/electromart.jpeg",
      link: null, // No fake link as per prompt instructions
    },
    {
      id: 2,
      name: "Shamas Al Kananah",
      subtitle: "E-Commerce Mobile App",
      technologies: ["Flutter", "Dart", "Firebase"],
      description: "Custom-built mobile e-commerce application for the industrial and hardware retail sector.",
      features: [
        "Electrical products",
        "Plumbing products",
        "Hardware products",
        "Tools",
        "Arabic and English language support",
        "Bilingual mobile experience"
      ],
      image: "/assets/project2.jpg",
      link: "https://github.com/AbdullahTanveer003/E-Commerce-App-Shamas-Al-Kananah",
    }
  ];

  return (
    <div className="py-20 lg:py-28 relative overflow-hidden" id="projects">
      {/* Dynamic Background Glow */}
      <div className="absolute right-0 bottom-1/4 w-[35%] h-[35%] bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[30%] h-[30%] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <TbDeviceMobile size={14} />
            <span>Mobile Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm lg:text-base max-w-lg mx-auto">
            Production-grade cross-platform mobile apps engineered with Flutter and React Native.
          </p>
        </motion.div>

        {/* Project Items Stack */}
        <div className="space-y-24 lg:space-y-36">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Device Mockup Column */}
              <div className="w-full lg:w-[48%] flex justify-center">
                <div className="relative group max-w-[300px] sm:max-w-[320px] w-full">
                  {/* Glowing backing element */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-violet-600/25 rounded-[3.2rem] blur-xl opacity-50 group-hover:opacity-85 transition duration-500" />
                  
                  {/* Smartphone Chassis Frame */}
                  <div className="relative bg-slate-950 border-[7px] border-slate-800 rounded-[3rem] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
                    
                    {/* Speaker Notch / Camera Punch Hole */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
                    </div>

                    {/* Smartphone Screen Container */}
                    <div className="relative aspect-[9/19] rounded-[2.3rem] overflow-hidden bg-[#0c0d16] border border-slate-900 shadow-inner group">
                      <img 
                        src={project.image} 
                        alt={`${project.name} Mobile App Screenshot`} 
                        className="w-full h-full object-cover object-top rounded-[2.3rem] group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />

                      {/* Subtle Glassmorphic Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

                      {/* Bottom In-Screen Floating Badge */}
                      <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-slate-950/85 backdrop-blur-md rounded-xl border border-slate-800/80 text-[11px] shadow-lg pointer-events-none">
                        <span className="font-extrabold text-white block leading-tight">{project.name}</span>
                        <span className="text-[9px] text-cyan-400 font-semibold">{project.subtitle}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Project Details Column */}
              <div className="w-full lg:w-[48%] flex flex-col justify-center">
                {/* Index styling */}
                <div className="flex items-center gap-3">
                  <span className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent select-none">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400">
                    Mobile Application
                  </span>
                </div>

                <h3 className="text-2xl lg:text-4xl font-extrabold text-white mt-3 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-cyan-400 text-sm font-semibold mt-1">
                  {project.subtitle}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 text-sm/6 lg:text-base/7 mt-6 font-normal">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="mt-6 pt-5 border-t border-slate-900">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Key Mobile Features:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <TbCheck size={14} className="text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub/Repository Link if valid (No fake link for ElectroMart as per prompt) */}
                {project.link && (
                  <div className="mt-8 flex items-center gap-x-4">
                    <a 
                      href={project.link} 
                      className="flex items-center gap-x-2 text-sm font-semibold px-6 py-3 rounded-full border border-slate-800 bg-slate-950/60 text-slate-200 hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 w-fit cursor-pointer group/btn shadow-[0_0_15px_rgba(0,0,0,0.3)]" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>View Repository</span>
                      <TbBrandGithub size={18} className="group-hover/btn:translate-y-[-1px] transition-transform duration-200 text-cyan-400" />
                    </a>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
