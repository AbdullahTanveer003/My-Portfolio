import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaPython, FaDatabase, FaJava } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiFlutter, SiDart } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={40} />, color: "from-amber-400/20 to-amber-500/5", glow: "rgba(245, 158, 11, 0.3)", textColor: "group-hover:text-amber-400" },
    { id: 2, name: "React", icon: <FaReact size={40} />, color: "from-cyan-400/20 to-cyan-500/5", glow: "rgba(34, 211, 238, 0.3)", textColor: "group-hover:text-cyan-400" },
    { id: 3, name: "Flutter", icon: <SiFlutter size={40} />, color: "from-sky-400/20 to-sky-500/5", glow: "rgba(56, 189, 248, 0.3)", textColor: "group-hover:text-sky-400" },
    { id: 4, name: "Python", icon: <FaPython size={40} />, color: "from-blue-500/20 to-yellow-500/5", glow: "rgba(59, 130, 246, 0.3)", textColor: "group-hover:text-blue-400" },
    { id: 5, name: "MongoDB", icon: <FaDatabase size={40} />, color: "from-emerald-500/20 to-emerald-600/5", glow: "rgba(16, 185, 129, 0.3)", textColor: "group-hover:text-emerald-400" },
    { id: 6, name: "Java", icon: <FaJava size={40} />, color: "from-red-500/20 to-orange-500/5", glow: "rgba(239, 68, 68, 0.3)", textColor: "group-hover:text-red-400" },
    { id: 7, name: "Dart", icon: <SiDart size={40} />, color: "from-cyan-500/20 to-cyan-600/5", glow: "rgba(6, 182, 212, 0.3)", textColor: "group-hover:text-cyan-400" },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={40} />, color: "from-slate-200/20 to-slate-500/5", glow: "rgba(255, 255, 255, 0.2)", textColor: "group-hover:text-white" },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={40} />, color: "from-cyan-400/20 to-cyan-500/5", glow: "rgba(34, 211, 238, 0.3)", textColor: "group-hover:text-cyan-400" },
    { id: 10, name: "Figma", icon: <CgFigma size={40} />, color: "from-pink-500/20 to-violet-500/5", glow: "rgba(236, 72, 153, 0.3)", textColor: "group-hover:text-pink-400" },
  ]);

  // Framer Motion container variants for staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="py-16 lg:py-24 relative overflow-hidden" id="skills">
      {/* Background Decorative Element */}
      <div className="absolute left-0 bottom-0 w-[25%] h-[35%] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Skills</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm lg:text-base max-w-md mx-auto">
            A snapshot of my core tools, languages, and technical frameworks.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: `0 15px 30px ${skill.glow}`,
              }}
              className="group relative cursor-pointer bg-slate-950/30 backdrop-blur-md border border-slate-900 rounded-[2rem] p-5 h-36 w-36 lg:h-40 lg:w-40 flex flex-col items-center justify-center gap-y-4 overflow-hidden transition-all duration-300"
            >
              {/* Glowing Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />

              {/* Icon Wrapper */}
              <div className={`relative z-10 text-slate-400 transition-all duration-300 transform group-hover:scale-110 ${skill.textColor}`}>
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="relative z-10 text-slate-300 font-semibold text-sm lg:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
