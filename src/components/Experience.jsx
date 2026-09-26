import React from 'react';
import { motion } from 'framer-motion';
import { TbBriefcase, TbCalendar, TbMapPin, TbDeviceMobile } from 'react-icons/tb';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Mobile App Development Intern",
      company: "Qodeon Labs",
      location: "Gujrat",
      period: "July 2026 – September 2026",
      description: "Worked on cross-platform mobile application development using React Native, TypeScript, Supabase, API integration, authentication, state management, local storage, and application performance improvements.",
      technologies: [
        "React Native",
        "TypeScript",
        "Supabase",
        "API Integration",
        "Authentication",
        "State Management",
        "Local Storage",
        "Performance Improvements"
      ]
    }
  ];

  return (
    <div className="py-20 lg:py-28 relative overflow-hidden" id="experience">
      {/* Ambient gradient glow */}
      <div className="absolute right-0 top-1/4 w-[30%] h-[35%] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <TbBriefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Experience</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm lg:text-base max-w-md mx-auto">
            Practical industry exposure building real-world cross-platform mobile solutions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row gap-6 items-start group"
            >
              {/* Timeline Pin/Icon Node */}
              <div className="hidden sm:flex relative z-10 w-16 h-16 rounded-2xl bg-slate-950 border border-cyan-500/40 items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-300">
                <TbDeviceMobile size={26} />
              </div>

              {/* Experience Card */}
              <div className="flex-1 w-full bg-slate-950/50 backdrop-blur-md border border-slate-900/80 hover:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-xl transition-all duration-300 relative overflow-hidden group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]">
                
                {/* Subtle top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 opacity-60" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-cyan-400 font-semibold text-sm mt-1">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <TbMapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium w-fit">
                    <TbCalendar size={13} className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm lg:text-base leading-relaxed mt-4">
                  {exp.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-900/80">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-900/70 border border-slate-800/80 text-cyan-400/90"
                    >
                      {tech}
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
