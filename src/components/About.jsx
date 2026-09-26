import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    { label: "Specialty", value: "Cross-Platform Mobile", color: "text-cyan-400" },
    { label: "Core Stack", value: "Flutter & React Native", color: "text-indigo-400" },
    { label: "Backend & DB", value: "Supabase, Firebase, SQL", color: "text-violet-400" },
    { label: "Education", value: "BSCS (Univ. of Gujrat)", color: "text-emerald-400" },
  ];

  return (
    <div className="px-5 lg:px-28 py-16 lg:py-24 relative overflow-hidden" id="about">
      {/* Decorative gradient overlay */}
      <div className="absolute right-0 top-1/4 w-[30%] h-[40%] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto flex justify-between flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Styled Illustration Container */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative group max-w-md w-full">
            {/* Outer blur gradient hover ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-500" />
            
            <div className="relative p-6 bg-slate-950/40 backdrop-blur-md border border-slate-900/80 rounded-[2.3rem] overflow-hidden shadow-2xl hover:border-slate-800 transition-all duration-300 flex justify-center items-center">
              <img 
                src="/assets/about-me.svg" 
                alt="Abdullah Tanveer Mobile Development" 
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(139,92,246,0.15)] group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphic About details */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="lg:text-4xl text-3xl font-bold tracking-tight text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Me</span>
          </h2>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-900/60 p-6 lg:p-8 rounded-[2rem] shadow-xl text-slate-300 relative overflow-hidden flex flex-col gap-4">
            <p className="text-slate-300 text-sm/6 lg:text-base leading-relaxed">
              Mobile App Developer and BSCS student with experience in building cross-platform mobile applications using Flutter, Dart, React Native, and TypeScript. Experienced in developing responsive, user-friendly applications and integrating backend services using Supabase and Firebase, with knowledge of SQL and PostgreSQL databases.
            </p>

            <p className="text-slate-400 text-sm/6 lg:text-base leading-relaxed">
              Skilled in API integration, authentication, database management, state management, and application development. Strong problem-solving abilities, a fast learner, and passionate about building efficient mobile solutions while continuously exploring modern technologies and AI-powered features.
            </p>
          </div>

          {/* Quick Highlight Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-950/30 border border-slate-900/60 p-4 rounded-2xl flex flex-col justify-center transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-950/60 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                whileHover={{ y: -3 }}
              >
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{item.label}</span>
                <span className={`text-sm lg:text-base font-bold mt-1 ${item.color}`}>{item.value}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
