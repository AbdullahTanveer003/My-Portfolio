import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaGitAlt } from "react-icons/fa";
import { 
  SiFlutter, 
  SiDart, 
  SiFirebase, 
  SiSupabase, 
  SiTypescript, 
  SiPostgresql, 
  SiAndroidstudio 
} from "react-icons/si";
import { 
  TbBrandReactNative, 
  TbApi, 
  TbShieldLock, 
  TbSparkles, 
  TbBrain, 
  TbUsers, 
  TbDeviceFloppy, 
  TbCode, 
  TbBrandVscode, 
  TbLayersLinked,
  TbCpu
} from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Primary Stack with extra visual prominence as specified in Requirement 6
  const primaryStack = [
    {
      name: "Flutter",
      role: "Cross-Platform Framework",
      icon: <SiFlutter size={44} />,
      badge: "Primary Engine",
      color: "from-sky-500/25 to-blue-600/10",
      border: "border-sky-500/40 hover:border-sky-400",
      textColor: "text-sky-400",
      glow: "shadow-[0_0_25px_rgba(56,189,248,0.25)]",
      desc: "High-performance native compilation, custom UI widgets, and reactive mobile architecture."
    },
    {
      name: "React Native",
      role: "Mobile Framework",
      icon: <FaReact size={44} />,
      badge: "Primary Engine",
      color: "from-cyan-500/25 to-indigo-600/10",
      border: "border-cyan-500/40 hover:border-cyan-400",
      textColor: "text-cyan-400",
      glow: "shadow-[0_0_25px_rgba(34,211,238,0.25)]",
      desc: "Cross-platform mobile apps with TypeScript, native bridging, and component-based architecture."
    },
    {
      name: "Supabase",
      role: "Backend & Database",
      icon: <SiSupabase size={44} />,
      badge: "Backend Core",
      color: "from-emerald-500/25 to-teal-600/10",
      border: "border-emerald-500/40 hover:border-emerald-400",
      textColor: "text-emerald-400",
      glow: "shadow-[0_0_25px_rgba(52,211,153,0.25)]",
      desc: "PostgreSQL databases, authentication, row-level security, real-time sync, and edge storage."
    },
    {
      name: "Firebase",
      role: "Backend Suite",
      icon: <SiFirebase size={44} />,
      badge: "Backend Core",
      color: "from-amber-500/25 to-orange-600/10",
      border: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      glow: "shadow-[0_0_25px_rgba(251,191,36,0.25)]",
      desc: "Cloud Firestore, real-time databases, authentication, cloud messaging, and analytics."
    }
  ];

  // All Skill Categories according to the user CV
  const skillCategories = [
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <TbBrandReactNative className="text-cyan-400" size={20} />,
      skills: [
        { name: "Flutter", highlighted: true },
        { name: "Dart", highlighted: true },
        { name: "React Native", highlighted: true },
        { name: "TypeScript", highlighted: true },
        { name: "React Hooks" },
        { name: "Component-Based Architecture" },
        { name: "State Management" },
        { name: "Responsive UI" }
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: <TbApi className="text-emerald-400" size={20} />,
      skills: [
        { name: "Supabase", highlighted: true },
        { name: "Firebase", highlighted: true },
        { name: "REST APIs" },
        { name: "API Integration" },
        { name: "Authentication & Authorization" },
        { name: "JWT" }
      ]
    },
    {
      id: "databases",
      title: "Databases",
      icon: <FaDatabase className="text-violet-400" size={18} />,
      skills: [
        { name: "PostgreSQL", highlighted: true },
        { name: "SQL", highlighted: true },
        { name: "Firebase" },
        { name: "Supabase Database" }
      ]
    },
    {
      id: "state",
      title: "State & Data Management",
      icon: <TbLayersLinked className="text-indigo-400" size={20} />,
      skills: [
        { name: "Zustand" },
        { name: "TanStack Query" },
        { name: "AsyncStorage" },
        { name: "Secure Storage" }
      ]
    },
    {
      id: "ai-tools",
      title: "AI & Development Tools",
      icon: <TbSparkles className="text-pink-400" size={20} />,
      skills: [
        { name: "ChatGPT" },
        { name: "Claude" },
        { name: "GitHub Copilot" },
        { name: "AI Integration" },
        { name: "Prompt Engineering" }
      ]
    },
    {
      id: "version-control",
      title: "Development & Version Control",
      icon: <TbCode className="text-sky-400" size={20} />,
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Android Studio" },
        { name: "VS Code" }
      ]
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      icon: <TbBrain className="text-amber-400" size={20} />,
      skills: [
        { name: "Problem Solving" },
        { name: "Logical Thinking" },
        { name: "Debugging" },
        { name: "Algorithmic Thinking" },
        { name: "Team Collaboration" }
      ]
    }
  ];

  const filteredCategories = activeCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="py-20 lg:py-28 relative overflow-hidden" id="skills">
      {/* Background Decorative Element */}
      <div className="absolute left-0 bottom-0 w-[30%] h-[35%] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[25%] h-[30%] bg-violet-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <TbCpu size={14} />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Specialized <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Skills</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm lg:text-base max-w-xl mx-auto">
            Primary focus on cross-platform mobile architecture with Flutter and React Native, paired with robust backend services and modern developer tooling.
          </p>
        </motion.div>

        {/* PRIMARY STACK SPOTLIGHT (Stronger Visual Prominence) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
              Primary Technologies & Frameworks
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {primaryStack.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative group p-6 rounded-3xl bg-slate-950/60 backdrop-blur-md border ${item.border} ${item.glow} transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Gradient background fill on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`${item.textColor} p-3 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-white tracking-tight">
                    {item.name}
                  </h4>
                  <p className={`text-xs font-semibold ${item.textColor} mt-0.5 mb-3`}>
                    {item.role}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-slate-900/80 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>Cross-Platform Ready</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                : "bg-slate-950/60 text-slate-400 border border-slate-900 hover:text-white hover:border-slate-800"
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-slate-950/60 text-slate-400 border border-slate-900 hover:text-white hover:border-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* COMPREHENSIVE SKILL CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-slate-950/40 backdrop-blur-md border border-slate-900/80 hover:border-slate-800 rounded-3xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-900">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {cat.icon}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-medium px-3 py-1.5 rounded-xl border transition-all duration-200 ${
                        skill.highlighted
                          ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
